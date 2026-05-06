(() => {
    'use strict';

    // === Catálogo de juegos ===
    // Cada juego define su generador, operador, total de retos, tiempo límite
    // y cómo se introduce la respuesta (single = un toque; multi = teclear).
    const GAMES = {
        sumas: {
            id: 'sumas',
            title: 'Sumas Rápidas',
            operator: '+',
            total: 60,
            timeLimit: 120,
            inputMode: 'single',          // teclas 0..10, cada tecla = respuesta
            keypadValues: range(0, 10),
            generate(prev) {
                let a, b, result;
                do {
                    result = 1 + Math.floor(Math.random() * 10);
                    const aMin = Math.max(0, result - 9);
                    const aMax = Math.min(9, result);
                    a = aMin + Math.floor(Math.random() * (aMax - aMin + 1));
                    b = result - a;
                } while (prev && prev.a === a && prev.b === b);
                return { a, b, result };
            },
        },
        multi: {
            id: 'multi',
            title: 'Multiplicaciones Rápidas',
            operator: '×',
            total: 40,
            timeLimit: 120,
            inputMode: 'multi',           // teclado 0..9, se teclea la respuesta
            keypadValues: range(1, 9).concat(0),
            generate(prev) {
                let a, b, result;
                do {
                    a = 1 + Math.floor(Math.random() * 9);   // 1..9
                    b = 1 + Math.floor(Math.random() * 9);   // 1..9
                    result = a * b;
                } while (prev && prev.a === a && prev.b === b);
                return { a, b, result };
            },
        },
    };

    function range(from, to) {
        const out = [];
        for (let i = from; i <= to; i++) out.push(i);
        return out;
    }

    // === Estado ===
    const state = {
        playerName: '',
        game: null,
        currentIndex: 0,
        correct: 0,
        attempts: 0,
        timeLeft: 0,
        timerId: null,
        currentQuestion: null,
        currentInput: '',
        finished: false,
    };

    const $ = (id) => document.getElementById(id);
    const screens = {
        welcome: $('screen-welcome'),
        game: $('screen-game'),
        result: $('screen-result'),
    };

    function showScreen(name) {
        Object.values(screens).forEach((s) => s.classList.remove('active'));
        screens[name].classList.add('active');
    }

    // === Construcción del teclado según el juego ===
    function buildKeypad(game) {
        const keypad = $('keypad');
        keypad.innerHTML = '';
        keypad.classList.toggle('digits', game.inputMode === 'multi');

        game.keypadValues.forEach((n) => {
            const btn = document.createElement('button');
            btn.className = 'key';
            btn.type = 'button';
            btn.textContent = n;
            btn.addEventListener('click', () => onKeyPress(n));
            keypad.appendChild(btn);
        });

        // El botón "Listo ✓" sólo aparece en modo multi-dígito
        $('btn-ok').hidden = game.inputMode !== 'multi';
    }

    // === Inicio del juego ===
    function startGame(gameId) {
        const name = $('player-name').value.trim();
        if (!name) {
            $('player-name').focus();
            $('player-name').style.borderColor = 'var(--danger)';
            setTimeout(() => { $('player-name').style.borderColor = ''; }, 1200);
            return;
        }
        state.playerName = name;
        state.game = GAMES[gameId];
        state.currentIndex = 0;
        state.correct = 0;
        state.attempts = 0;
        state.timeLeft = state.game.timeLimit;
        state.finished = false;
        state.currentInput = '';
        state.currentQuestion = null;

        $('hud-name').textContent = state.playerName;
        $('op').textContent = state.game.operator;
        buildKeypad(state.game);
        updateHUD();
        nextQuestion();
        startTimer();
        showScreen('game');
    }

    function startTimer() {
        clearInterval(state.timerId);
        renderTimer();
        state.timerId = setInterval(() => {
            state.timeLeft--;
            renderTimer();
            if (state.timeLeft <= 0) endGame(false);
        }, 1000);
    }

    function renderTimer() {
        const m = Math.floor(state.timeLeft / 60);
        const s = state.timeLeft % 60;
        const el = $('hud-timer');
        el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        el.classList.toggle('warning', state.timeLeft <= 30 && state.timeLeft > 10);
        el.classList.toggle('danger', state.timeLeft <= 10);
    }

    function nextQuestion() {
        if (state.currentIndex >= state.game.total) {
            endGame(true);
            return;
        }
        state.currentQuestion = state.game.generate(state.currentQuestion);
        state.currentInput = '';
        $('num-a').textContent = state.currentQuestion.a;
        $('num-b').textContent = state.currentQuestion.b;
        renderAnswer();
    }

    function renderAnswer() {
        const slot = $('answer-display');
        if (state.currentInput === '') {
            slot.textContent = '?';
            slot.classList.remove('filled');
        } else {
            slot.textContent = state.currentInput;
            slot.classList.add('filled');
        }
    }

    // Una pulsación: en modo single equivale a una respuesta completa,
    // en modo multi se acumulan dígitos y se auto-comprueba al alcanzar la
    // longitud del resultado correcto.
    function onKeyPress(value) {
        if (state.finished) return;
        const game = state.game;
        if (game.inputMode === 'single') {
            state.currentInput = String(value);
            renderAnswer();
            checkAnswer();
            return;
        }
        // multi
        const next = state.currentInput + String(value);
        if (next.length > 3) return;                 // los resultados llegan a 81
        state.currentInput = next;
        renderAnswer();
        const targetLen = String(state.currentQuestion.result).length;
        if (state.currentInput.length >= targetLen) {
            checkAnswer();
        }
    }

    // Tecla del teclado físico. Acumula dígitos y auto-comprueba cuando ya
    // no pueden formar un número válido más largo (modo single con tope 10),
    // o cuando se alcanza la longitud del resultado correcto (modo multi).
    function onPhysicalDigit(digit) {
        if (state.finished || !state.game) return;
        const game = state.game;
        const next = state.currentInput + String(digit);
        const value = parseInt(next, 10);

        if (game.inputMode === 'single') {
            const max = Math.max.apply(null, game.keypadValues);
            if (next.length > 2 || value > max) return;
            state.currentInput = next;
            renderAnswer();
            // Sólo "1" puede ser prefijo de "10"; el resto se comprueba ya.
            if (value !== 1 || next.length === 2) checkAnswer();
            return;
        }

        // multi
        if (next.length > 3) return;
        state.currentInput = next;
        renderAnswer();
        const targetLen = String(state.currentQuestion.result).length;
        if (state.currentInput.length >= targetLen) checkAnswer();
    }

    function checkAnswer() {
        const guess = parseInt(state.currentInput, 10);
        if (isNaN(guess)) return;
        state.attempts++;
        const fb = $('feedback');
        if (guess === state.currentQuestion.result) {
            state.correct++;
            state.currentIndex++;
            fb.textContent = '¡Correcto! ✅';
            fb.className = 'feedback show correct';
            updateHUD();
            setTimeout(() => {
                fb.className = 'feedback';
                nextQuestion();
            }, 350);
        } else {
            fb.textContent = '¡Inténtalo otra vez! ❌';
            fb.className = 'feedback show wrong';
            state.currentInput = '';
            setTimeout(() => {
                fb.className = 'feedback';
                renderAnswer();
            }, 700);
        }
    }

    function clearInput() {
        if (state.finished) return;
        state.currentInput = '';
        renderAnswer();
    }

    function submitAnswer() {
        if (state.finished) return;
        if (state.currentInput !== '') checkAnswer();
    }

    function updateHUD() {
        $('hud-score').textContent = `${state.correct} / ${state.game.total}`;
        const pct = (state.correct / state.game.total) * 100;
        $('progress-fill').style.width = pct + '%';
    }

    function endGame(completed) {
        state.finished = true;
        clearInterval(state.timerId);
        const elapsed = state.game.timeLimit - state.timeLeft;
        const accuracy = state.attempts > 0
            ? Math.round((state.correct / state.attempts) * 100)
            : 0;

        $('stat-correct').textContent = `${state.correct} / ${state.game.total}`;
        $('stat-time').textContent = `${elapsed}s`;
        $('stat-accuracy').textContent = `${accuracy}%`;

        const success = completed && state.correct === state.game.total;
        const safeName = escapeHtml(state.playerName);

        if (success) {
            $('result-title').textContent = '🎉 ¡Felicidades!';
            $('result-message').innerHTML =
                `¡Lo lograste, <strong>${safeName}</strong>! ` +
                `Resolviste las ${state.game.total} ${state.game.title.toLowerCase()} en ` +
                `<strong>${elapsed} segundos</strong>. ` +
                `¡Eres una estrella de las matemáticas! ⭐`;
            launchConfetti();
        } else {
            $('result-title').textContent = '💪 ¡Casi lo tienes!';
            const reason = state.timeLeft <= 0 ? 'Se acabó el tiempo' : 'Aún te quedaban retos';
            $('result-message').innerHTML =
                `${reason}, <strong>${safeName}</strong>. ` +
                `Conseguiste <strong>${state.correct}</strong> aciertos. ` +
                `¡Inténtalo otra vez, seguro que lo consigues! 🚀`;
        }

        showScreen('result');
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // === Confeti ===
    function launchConfetti() {
        const canvas = $('confetti');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const colors = ['#ffcc00', '#ff9500', '#2ecc71', '#6dd5ed', '#e74c3c', '#9b59b6'];
        const particles = Array.from({ length: 140 }, () => ({
            x: Math.random() * canvas.width,
            y: -20 - Math.random() * canvas.height,
            r: 4 + Math.random() * 6,
            c: colors[Math.floor(Math.random() * colors.length)],
            vy: 2 + Math.random() * 4,
            vx: -2 + Math.random() * 4,
            rot: Math.random() * Math.PI,
            vr: -0.2 + Math.random() * 0.4,
        }));
        let frame = 0;
        const max = 240;
        function tick() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;
                p.rot += p.vr;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rot);
                ctx.fillStyle = p.c;
                ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 1.5);
                ctx.restore();
            });
            frame++;
            if (frame < max) requestAnimationFrame(tick);
            else ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        tick();
    }

    // === Eventos ===
    function bindEvents() {
        // Tarjetas de juego en la pantalla de bienvenida
        document.querySelectorAll('.game-card').forEach((card) => {
            card.addEventListener('click', () => startGame(card.dataset.game));
        });

        $('player-name').addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                document.querySelector('.game-card').focus();
            }
        });

        $('btn-clear').addEventListener('click', clearInput);
        $('btn-ok').addEventListener('click', submitAnswer);

        $('btn-retry').addEventListener('click', () => {
            if (state.game) startGame(state.game.id);
        });
        $('btn-menu').addEventListener('click', () => {
            clearInterval(state.timerId);
            state.finished = true;
            showScreen('welcome');
            $('player-name').value = state.playerName;
        });
        $('btn-home').addEventListener('click', () => {
            clearInterval(state.timerId);
            state.finished = true;
            $('player-name').value = '';
            showScreen('welcome');
            $('player-name').focus();
        });

        document.addEventListener('keydown', (e) => {
            if (!screens.game.classList.contains('active') || state.finished) return;
            if (/^[0-9]$/.test(e.key)) {
                onPhysicalDigit(e.key);
            } else if (e.key === 'Backspace') {
                clearInput();
            } else if (e.key === 'Enter') {
                submitAnswer();
            }
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        bindEvents();
        $('player-name').focus();
    });
})();
