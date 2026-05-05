(() => {
    'use strict';

    // === Configuración del juego ===
    const TOTAL_QUESTIONS = 60;
    const TIME_LIMIT_SECONDS = 120;
    const MAX_RESULT = 10;

    // === Estado ===
    const state = {
        playerName: '',
        currentIndex: 0,
        correct: 0,
        attempts: 0,
        timeLeft: TIME_LIMIT_SECONDS,
        startTime: 0,
        timerId: null,
        currentQuestion: null,
        currentInput: '',
        finished: false,
    };

    // === Referencias DOM ===
    const $ = (id) => document.getElementById(id);
    const screens = {
        welcome: $('screen-welcome'),
        game: $('screen-game'),
        result: $('screen-result'),
    };

    // === Generador de sumas ===
    // Suma de dos sumandos (1-9) cuyo resultado es <= 10.
    function generateQuestion(prev) {
        let a, b;
        do {
            a = 1 + Math.floor(Math.random() * 9);          // 1..9
            const maxB = Math.min(9, MAX_RESULT - a);
            b = 1 + Math.floor(Math.random() * maxB);       // 1..maxB
        } while (prev && prev.a === a && prev.b === b);
        return { a, b, result: a + b };
    }

    // === Cambio de pantalla ===
    function showScreen(name) {
        Object.values(screens).forEach((s) => s.classList.remove('active'));
        screens[name].classList.add('active');
    }

    // === Construcción del teclado numérico (0-10) ===
    // Cada botón representa una respuesta completa: al pulsarlo se comprueba.
    function buildKeypad() {
        const keypad = $('keypad');
        keypad.innerHTML = '';
        for (let n = 0; n <= 10; n++) {
            const btn = document.createElement('button');
            btn.className = 'key';
            btn.type = 'button';
            btn.textContent = n;
            btn.dataset.value = n;
            btn.addEventListener('click', () => onKeypadAnswer(n));
            keypad.appendChild(btn);
        }
    }

    // === Lógica del juego ===
    function startGame() {
        const name = $('player-name').value.trim();
        if (!name) {
            $('player-name').focus();
            $('player-name').style.borderColor = 'var(--danger)';
            setTimeout(() => { $('player-name').style.borderColor = ''; }, 1200);
            return;
        }
        state.playerName = name;
        state.currentIndex = 0;
        state.correct = 0;
        state.attempts = 0;
        state.timeLeft = TIME_LIMIT_SECONDS;
        state.startTime = Date.now();
        state.finished = false;
        state.currentInput = '';

        $('hud-name').textContent = state.playerName;
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
            if (state.timeLeft <= 0) {
                endGame(false);
            }
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
        if (state.currentIndex >= TOTAL_QUESTIONS) {
            endGame(true);
            return;
        }
        state.currentQuestion = generateQuestion(state.currentQuestion);
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

    // Pulsación en el teclado de pantalla: la respuesta es directa.
    function onKeypadAnswer(num) {
        if (state.finished) return;
        state.currentInput = String(num);
        renderAnswer();
        checkAnswer();
    }

    // Tecla del teclado físico: acumulamos hasta tener un número válido (0-10).
    // Para "1" esperamos por si el usuario quiere escribir 10 (Enter confirma 1).
    function onPhysicalDigit(digit) {
        if (state.finished) return;
        const next = state.currentInput + digit;
        const value = parseInt(next, 10);
        if (next.length > 2 || value > 10) return;
        state.currentInput = next;
        renderAnswer();
        if (value === 0 || (value >= 2 && value <= 10)) {
            checkAnswer();
        }
    }

    function checkAnswer() {
        const guess = parseInt(state.currentInput, 10);
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

    function updateHUD() {
        $('hud-score').textContent = `${state.correct} / ${TOTAL_QUESTIONS}`;
        const pct = (state.correct / TOTAL_QUESTIONS) * 100;
        $('progress-fill').style.width = pct + '%';
    }

    function endGame(completed) {
        state.finished = true;
        clearInterval(state.timerId);
        const elapsed = TIME_LIMIT_SECONDS - state.timeLeft;
        const accuracy = state.attempts > 0
            ? Math.round((state.correct / state.attempts) * 100)
            : 0;

        $('stat-correct').textContent = `${state.correct} / ${TOTAL_QUESTIONS}`;
        $('stat-time').textContent = `${elapsed}s`;
        $('stat-accuracy').textContent = `${accuracy}%`;

        const success = completed && state.correct === TOTAL_QUESTIONS;

        if (success) {
            $('result-title').textContent = '🎉 ¡Felicidades!';
            $('result-message').innerHTML =
                `¡Lo lograste, <strong>${escapeHtml(state.playerName)}</strong>! ` +
                `Resolviste las 60 sumas en <strong>${elapsed} segundos</strong>. ` +
                `¡Eres una estrella de las matemáticas! ⭐`;
            launchConfetti();
        } else {
            $('result-title').textContent = '💪 ¡Casi lo tienes!';
            const reason = state.timeLeft <= 0
                ? 'Se acabó el tiempo'
                : 'Aún te quedan sumas';
            $('result-message').innerHTML =
                `${reason}, <strong>${escapeHtml(state.playerName)}</strong>. ` +
                `Conseguiste <strong>${state.correct}</strong> sumas correctas. ` +
                `¡Inténtalo otra vez, seguro que lo consigues! 🚀`;
        }

        showScreen('result');
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // === Confeti simple ===
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
            if (frame < max) {
                requestAnimationFrame(tick);
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        }
        tick();
    }

    // === Eventos ===
    function bindEvents() {
        $('btn-start').addEventListener('click', startGame);
        $('player-name').addEventListener('keydown', (e) => {
            if (e.key === 'Enter') startGame();
        });
        $('btn-clear').addEventListener('click', clearInput);
        $('btn-retry').addEventListener('click', () => {
            // Mantenemos el nombre del jugador
            $('player-name').value = state.playerName;
            startGame();
        });
        $('btn-home').addEventListener('click', () => {
            clearInterval(state.timerId);
            state.finished = true;
            $('player-name').value = '';
            showScreen('welcome');
            $('player-name').focus();
        });

        // Teclado físico (números, Backspace, Enter)
        document.addEventListener('keydown', (e) => {
            if (!screens.game.classList.contains('active') || state.finished) return;
            if (/^[0-9]$/.test(e.key)) {
                onPhysicalDigit(e.key);
            } else if (e.key === 'Backspace') {
                clearInput();
            } else if (e.key === 'Enter') {
                if (state.currentInput !== '') checkAnswer();
            }
        });
    }

    // === Init ===
    document.addEventListener('DOMContentLoaded', () => {
        buildKeypad();
        bindEvents();
        $('player-name').focus();
    });
})();
