(() => {
    'use strict';

    // === Listas de palabras para el juego de Lengua ===
    // Cada palabra se escribe en minúsculas; "upper" indica si la primera
    // letra debería ir en mayúscula según las reglas del castellano.
    // Reglas usadas:
    //   - Nombres propios (personas, ciudades, países): mayúscula
    //   - Sustantivos comunes: minúscula
    //   - Días y meses: minúscula
    //   - Idiomas y nacionalidades: minúscula
    const LANG_WORDS = [
        // Nombres propios de persona
        { word: 'maría', upper: true }, { word: 'juan', upper: true },
        { word: 'pedro', upper: true }, { word: 'ana', upper: true },
        { word: 'carlos', upper: true }, { word: 'lucía', upper: true },
        { word: 'sofía', upper: true }, { word: 'pablo', upper: true },
        { word: 'laura', upper: true }, { word: 'marta', upper: true },
        { word: 'diego', upper: true }, { word: 'elena', upper: true },
        { word: 'andrés', upper: true }, { word: 'javier', upper: true },
        // Nombres propios de lugar
        { word: 'madrid', upper: true }, { word: 'barcelona', upper: true },
        { word: 'sevilla', upper: true }, { word: 'valencia', upper: true },
        { word: 'españa', upper: true }, { word: 'europa', upper: true },
        { word: 'francia', upper: true }, { word: 'italia', upper: true },
        { word: 'portugal', upper: true }, { word: 'londres', upper: true },
        { word: 'parís', upper: true }, { word: 'roma', upper: true },
        { word: 'méxico', upper: true }, { word: 'argentina', upper: true },
        // Sustantivos comunes
        { word: 'casa', upper: false }, { word: 'perro', upper: false },
        { word: 'gato', upper: false }, { word: 'libro', upper: false },
        { word: 'mesa', upper: false }, { word: 'silla', upper: false },
        { word: 'agua', upper: false }, { word: 'pan', upper: false },
        { word: 'pelota', upper: false }, { word: 'árbol', upper: false },
        { word: 'flor', upper: false }, { word: 'pájaro', upper: false },
        { word: 'coche', upper: false }, { word: 'manzana', upper: false },
        { word: 'plátano', upper: false }, { word: 'colegio', upper: false },
        { word: 'parque', upper: false }, { word: 'cuaderno', upper: false },
        { word: 'mochila', upper: false }, { word: 'bicicleta', upper: false },
        // Días de la semana
        { word: 'lunes', upper: false }, { word: 'martes', upper: false },
        { word: 'miércoles', upper: false }, { word: 'jueves', upper: false },
        { word: 'viernes', upper: false }, { word: 'sábado', upper: false },
        { word: 'domingo', upper: false },
        // Meses
        { word: 'enero', upper: false }, { word: 'febrero', upper: false },
        { word: 'marzo', upper: false }, { word: 'abril', upper: false },
        { word: 'mayo', upper: false }, { word: 'junio', upper: false },
        { word: 'julio', upper: false }, { word: 'agosto', upper: false },
        { word: 'septiembre', upper: false }, { word: 'octubre', upper: false },
        { word: 'noviembre', upper: false }, { word: 'diciembre', upper: false },
        // Idiomas y nacionalidades
        { word: 'español', upper: false }, { word: 'inglés', upper: false },
        { word: 'francés', upper: false }, { word: 'italiano', upper: false },
        { word: 'alemán', upper: false }, { word: 'chino', upper: false },
    ];

    // === Catálogo de juegos ===
    const GAMES = {
        sumas: {
            id: 'sumas',
            title: 'Sumas Rápidas',
            total: 60,
            timeLimit: 120,
            keypadClass: 'cols-4',
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
            renderQuestion(q, container) {
                container.innerHTML =
                    `<div class="math-row">` +
                    `<span class="num">${q.a}</span>` +
                    `<span class="op">+</span>` +
                    `<span class="num">${q.b}</span>` +
                    `<span class="op">=</span>` +
                    `<span class="num answer-slot">?</span>` +
                    `</div>`;
            },
            getKeypadValues() { return range(0, 10); },
            formatAnswer(q) { return String(q.result); },
        },

        multi: {
            id: 'multi',
            title: 'Multiplicaciones Rápidas',
            total: 40,
            timeLimit: 120,
            keypadClass: 'options',
            generate(prev) {
                let a, b, result;
                do {
                    a = 1 + Math.floor(Math.random() * 9);
                    b = 1 + Math.floor(Math.random() * 9);
                    result = a * b;
                } while (prev && prev.a === a && prev.b === b);
                return { a, b, result };
            },
            renderQuestion(q, container) {
                container.innerHTML =
                    `<div class="math-row">` +
                    `<span class="num">${q.a}</span>` +
                    `<span class="op">×</span>` +
                    `<span class="num">${q.b}</span>` +
                    `<span class="op">=</span>` +
                    `<span class="num answer-slot">?</span>` +
                    `</div>`;
            },
            // 4 opciones: la correcta + 3 distractores plausibles.
            getKeypadValues(q) {
                const correct = q.result;
                const candidates = new Set();
                for (let da = -2; da <= 2; da++) {
                    for (let db = -2; db <= 2; db++) {
                        if (da === 0 && db === 0) continue;
                        const a = q.a + da, b = q.b + db;
                        if (a >= 1 && a <= 9 && b >= 1 && b <= 9) {
                            const r = a * b;
                            if (r !== correct) candidates.add(r);
                        }
                    }
                }
                const distractors = shuffle(Array.from(candidates)).slice(0, 3);
                return shuffle([correct, ...distractors]);
            },
            formatAnswer(q) { return String(q.result); },
        },

        lengua: {
            id: 'lengua',
            title: '¿Mayúscula o minúscula?',
            total: 30,
            timeLimit: 120,
            keypadClass: 'binary',
            generate(prev) {
                let pick;
                do {
                    pick = LANG_WORDS[Math.floor(Math.random() * LANG_WORDS.length)];
                } while (prev && prev.word === pick.word);
                const first = pick.word.charAt(0);
                const rest = pick.word.slice(1);
                return {
                    word: pick.word,
                    first,
                    rest,
                    result: pick.upper ? 'upper' : 'lower',
                };
            },
            renderQuestion(q, container) {
                container.innerHTML =
                    `<div class="word-question">` +
                    `  <span class="word-blank">?</span>` +
                    `  <span class="word-rest">${escapeHtml(q.rest)}</span>` +
                    `</div>` +
                    `<div class="word-prompt">¿Cómo empieza?</div>`;
            },
            getKeypadValues(q) {
                return [
                    { label: q.first.toUpperCase(), sub: 'MAYÚSCULA', value: 'upper' },
                    { label: q.first, sub: 'minúscula', value: 'lower' },
                ];
            },
            formatAnswer(q) {
                const letter = q.result === 'upper' ? q.first.toUpperCase() : q.first;
                const label = q.result === 'upper' ? 'mayúscula' : 'minúscula';
                return `${letter}${q.rest} (${label})`;
            },
        },
    };

    function range(from, to) {
        const out = [];
        for (let i = from; i <= to; i++) out.push(i);
        return out;
    }

    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // === Estado ===
    const state = {
        playerName: '',
        game: null,
        currentIndex: 0,
        correct: 0,
        timeLeft: 0,
        timerId: null,
        currentQuestion: null,
        finished: false,
        locked: false, // bloquea entrada mientras se muestra feedback
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

    // === Construcción del teclado según el juego y la pregunta ===
    function buildKeypad(game, question) {
        const keypad = $('keypad');
        keypad.innerHTML = '';
        keypad.className = 'keypad ' + (game.keypadClass || '');
        const values = game.getKeypadValues(question);
        values.forEach((v) => {
            const btn = document.createElement('button');
            btn.className = 'key';
            btn.type = 'button';
            if (typeof v === 'object') {
                btn.innerHTML =
                    `<span class="key-label">${escapeHtml(v.label)}</span>` +
                    (v.sub ? `<span class="key-sub">${escapeHtml(v.sub)}</span>` : '');
                btn.addEventListener('click', () => onAnswer(v.value));
            } else {
                btn.textContent = v;
                btn.addEventListener('click', () => onAnswer(v));
            }
            keypad.appendChild(btn);
        });
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
        state.timeLeft = state.game.timeLimit;
        state.finished = false;
        state.locked = false;
        state.currentQuestion = null;

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
        state.game.renderQuestion(state.currentQuestion, $('question'));
        buildKeypad(state.game, state.currentQuestion);
        state.locked = false;
    }

    // Una respuesta cualquiera. Si acierta, suma punto y avanza pronto.
    // Si falla, NO permite reintentar la misma operación: muestra brevemente
    // la respuesta correcta y pasa a la siguiente pregunta.
    function onAnswer(value) {
        if (state.finished || state.locked || !state.currentQuestion) return;
        state.locked = true;
        const correct = value === state.currentQuestion.result
            || String(value) === String(state.currentQuestion.result);
        const fb = $('feedback');
        if (correct) {
            state.correct++;
            fb.textContent = '¡Correcto! ✅';
            fb.className = 'feedback show correct';
            updateHUD();
            setTimeout(() => {
                fb.className = 'feedback';
                state.currentIndex++;
                nextQuestion();
            }, 400);
        } else {
            fb.textContent = `❌ Era ${state.game.formatAnswer(state.currentQuestion)}`;
            fb.className = 'feedback show wrong';
            setTimeout(() => {
                fb.className = 'feedback';
                state.currentIndex++;
                nextQuestion();
            }, 1100);
        }
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
        const accuracy = state.currentIndex > 0
            ? Math.round((state.correct / state.currentIndex) * 100)
            : 0;

        $('stat-correct').textContent = `${state.correct} / ${state.game.total}`;
        $('stat-time').textContent = `${elapsed}s`;
        $('stat-accuracy').textContent = `${accuracy}%`;

        const allCorrect = completed && state.correct === state.game.total;
        const safeName = escapeHtml(state.playerName);

        if (allCorrect) {
            $('result-title').textContent = '🎉 ¡Felicidades!';
            $('result-message').innerHTML =
                `¡Lo lograste, <strong>${safeName}</strong>! ` +
                `Acertaste las ${state.game.total} en <strong>${elapsed} segundos</strong>. ` +
                `¡Eres una estrella! ⭐`;
            launchConfetti();
        } else {
            $('result-title').textContent = '💪 ¡Buen intento!';
            const reason = state.timeLeft <= 0
                ? 'Se acabó el tiempo'
                : 'Has terminado';
            $('result-message').innerHTML =
                `${reason}, <strong>${safeName}</strong>. ` +
                `Conseguiste <strong>${state.correct}</strong> aciertos. ` +
                `¡Inténtalo otra vez, seguro que mejoras! 🚀`;
        }

        showScreen('result');
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
        document.querySelectorAll('.game-card').forEach((card) => {
            card.addEventListener('click', () => startGame(card.dataset.game));
        });

        $('player-name').addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                document.querySelector('.game-card').focus();
            }
        });

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
    }

    document.addEventListener('DOMContentLoaded', () => {
        bindEvents();
        $('player-name').focus();
    });
})();
