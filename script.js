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
    //   - Colores y números: minúscula
    const LANG_WORDS = [
        // --- Nombres propios de persona (MAYÚSCULA) ---
        { word: 'maría', upper: true }, { word: 'juan', upper: true },
        { word: 'pedro', upper: true }, { word: 'ana', upper: true },
        { word: 'carlos', upper: true }, { word: 'lucía', upper: true },
        { word: 'sofía', upper: true }, { word: 'pablo', upper: true },
        { word: 'laura', upper: true }, { word: 'marta', upper: true },
        { word: 'diego', upper: true }, { word: 'elena', upper: true },
        { word: 'andrés', upper: true }, { word: 'javier', upper: true },
        { word: 'alberto', upper: true }, { word: 'beatriz', upper: true },
        { word: 'cristina', upper: true }, { word: 'daniel', upper: true },
        { word: 'eduardo', upper: true }, { word: 'fátima', upper: true },
        { word: 'gabriel', upper: true }, { word: 'hugo', upper: true },
        { word: 'irene', upper: true }, { word: 'jorge', upper: true },
        { word: 'leticia', upper: true }, { word: 'manuel', upper: true },
        { word: 'natalia', upper: true }, { word: 'óscar', upper: true },
        { word: 'patricia', upper: true }, { word: 'raquel', upper: true },
        { word: 'sergio', upper: true }, { word: 'teresa', upper: true },
        { word: 'víctor', upper: true }, { word: 'alicia', upper: true },
        { word: 'bruno', upper: true }, { word: 'carmen', upper: true },
        { word: 'david', upper: true }, { word: 'eva', upper: true },
        { word: 'fernando', upper: true }, { word: 'héctor', upper: true },
        { word: 'isabel', upper: true }, { word: 'mario', upper: true },
        { word: 'noelia', upper: true }, { word: 'paula', upper: true },
        { word: 'raúl', upper: true }, { word: 'silvia', upper: true },
        { word: 'tomás', upper: true }, { word: 'miguel', upper: true },
        { word: 'nuria', upper: true }, { word: 'ramón', upper: true },

        // --- Nombres propios de lugar (MAYÚSCULA) ---
        { word: 'madrid', upper: true }, { word: 'barcelona', upper: true },
        { word: 'sevilla', upper: true }, { word: 'valencia', upper: true },
        { word: 'españa', upper: true }, { word: 'europa', upper: true },
        { word: 'francia', upper: true }, { word: 'italia', upper: true },
        { word: 'portugal', upper: true }, { word: 'londres', upper: true },
        { word: 'parís', upper: true }, { word: 'roma', upper: true },
        { word: 'méxico', upper: true }, { word: 'argentina', upper: true },
        { word: 'bilbao', upper: true }, { word: 'zaragoza', upper: true },
        { word: 'málaga', upper: true }, { word: 'granada', upper: true },
        { word: 'toledo', upper: true }, { word: 'salamanca', upper: true },
        { word: 'oviedo', upper: true }, { word: 'santander', upper: true },
        { word: 'alemania', upper: true }, { word: 'japón', upper: true },
        { word: 'china', upper: true }, { word: 'brasil', upper: true },
        { word: 'perú', upper: true }, { word: 'chile', upper: true },
        { word: 'colombia', upper: true }, { word: 'cuba', upper: true },
        { word: 'ecuador', upper: true }, { word: 'uruguay', upper: true },
        { word: 'asia', upper: true }, { word: 'áfrica', upper: true },
        { word: 'berlín', upper: true }, { word: 'lisboa', upper: true },
        { word: 'dublín', upper: true }, { word: 'andalucía', upper: true },
        { word: 'galicia', upper: true }, { word: 'cataluña', upper: true },
        { word: 'ebro', upper: true }, { word: 'duero', upper: true },
        { word: 'tajo', upper: true }, { word: 'pirineos', upper: true },

        // --- Sustantivos comunes (minúscula) ---
        // animales
        { word: 'perro', upper: false }, { word: 'gato', upper: false },
        { word: 'caballo', upper: false }, { word: 'vaca', upper: false },
        { word: 'cerdo', upper: false }, { word: 'oveja', upper: false },
        { word: 'cabra', upper: false }, { word: 'gallina', upper: false },
        { word: 'conejo', upper: false }, { word: 'ratón', upper: false },
        { word: 'elefante', upper: false }, { word: 'jirafa', upper: false },
        { word: 'león', upper: false }, { word: 'tigre', upper: false },
        { word: 'oso', upper: false }, { word: 'lobo', upper: false },
        { word: 'zorro', upper: false }, { word: 'ardilla', upper: false },
        { word: 'búho', upper: false }, { word: 'águila', upper: false },
        { word: 'pájaro', upper: false }, { word: 'mariposa', upper: false },
        { word: 'abeja', upper: false }, { word: 'hormiga', upper: false },
        { word: 'pez', upper: false }, { word: 'ballena', upper: false },
        { word: 'delfín', upper: false }, { word: 'tortuga', upper: false },
        { word: 'rana', upper: false }, { word: 'serpiente', upper: false },
        // comida
        { word: 'pan', upper: false }, { word: 'leche', upper: false },
        { word: 'queso', upper: false }, { word: 'huevo', upper: false },
        { word: 'jamón', upper: false }, { word: 'pollo', upper: false },
        { word: 'carne', upper: false }, { word: 'pescado', upper: false },
        { word: 'arroz', upper: false }, { word: 'sopa', upper: false },
        { word: 'tomate', upper: false }, { word: 'manzana', upper: false },
        { word: 'naranja', upper: false }, { word: 'pera', upper: false },
        { word: 'fresa', upper: false }, { word: 'uva', upper: false },
        { word: 'sandía', upper: false }, { word: 'melón', upper: false },
        { word: 'limón', upper: false }, { word: 'plátano', upper: false },
        { word: 'patata', upper: false }, { word: 'lechuga', upper: false },
        { word: 'chocolate', upper: false }, { word: 'galleta', upper: false },
        { word: 'helado', upper: false }, { word: 'pastel', upper: false },
        { word: 'miel', upper: false }, { word: 'agua', upper: false },
        // objetos / casa / ciudad
        { word: 'casa', upper: false }, { word: 'puerta', upper: false },
        { word: 'ventana', upper: false }, { word: 'mesa', upper: false },
        { word: 'silla', upper: false }, { word: 'cama', upper: false },
        { word: 'lámpara', upper: false }, { word: 'cocina', upper: false },
        { word: 'baño', upper: false }, { word: 'jardín', upper: false },
        { word: 'libro', upper: false }, { word: 'cuaderno', upper: false },
        { word: 'mochila', upper: false }, { word: 'lápiz', upper: false },
        { word: 'goma', upper: false }, { word: 'regla', upper: false },
        { word: 'pizarra', upper: false }, { word: 'tijeras', upper: false },
        { word: 'pelota', upper: false }, { word: 'bicicleta', upper: false },
        { word: 'coche', upper: false }, { word: 'autobús', upper: false },
        { word: 'tren', upper: false }, { word: 'avión', upper: false },
        { word: 'barco', upper: false }, { word: 'colegio', upper: false },
        { word: 'parque', upper: false }, { word: 'plaza', upper: false },
        { word: 'tienda', upper: false }, { word: 'hospital', upper: false },
        { word: 'museo', upper: false }, { word: 'estación', upper: false },
        { word: 'calle', upper: false },
        // naturaleza
        { word: 'árbol', upper: false }, { word: 'flor', upper: false },
        { word: 'hoja', upper: false }, { word: 'río', upper: false },
        { word: 'mar', upper: false }, { word: 'montaña', upper: false },
        { word: 'playa', upper: false }, { word: 'bosque', upper: false },
        { word: 'lluvia', upper: false }, { word: 'nieve', upper: false },
        { word: 'viento', upper: false }, { word: 'nube', upper: false },
        { word: 'estrella', upper: false }, { word: 'cielo', upper: false },
        { word: 'tierra', upper: false }, { word: 'fuego', upper: false },
        { word: 'arena', upper: false },
        // cuerpo
        { word: 'mano', upper: false }, { word: 'pie', upper: false },
        { word: 'ojo', upper: false }, { word: 'nariz', upper: false },
        { word: 'boca', upper: false }, { word: 'oreja', upper: false },
        { word: 'brazo', upper: false }, { word: 'pierna', upper: false },
        { word: 'cabeza', upper: false }, { word: 'dedo', upper: false },
        { word: 'diente', upper: false },
        // familia
        { word: 'madre', upper: false }, { word: 'padre', upper: false },
        { word: 'hermano', upper: false }, { word: 'hermana', upper: false },
        { word: 'abuelo', upper: false }, { word: 'abuela', upper: false },
        { word: 'tío', upper: false }, { word: 'tía', upper: false },
        { word: 'primo', upper: false }, { word: 'prima', upper: false },
        { word: 'hijo', upper: false }, { word: 'hija', upper: false },

        // --- Días de la semana (minúscula) ---
        { word: 'lunes', upper: false }, { word: 'martes', upper: false },
        { word: 'miércoles', upper: false }, { word: 'jueves', upper: false },
        { word: 'viernes', upper: false }, { word: 'sábado', upper: false },
        { word: 'domingo', upper: false },

        // --- Meses (minúscula) ---
        { word: 'enero', upper: false }, { word: 'febrero', upper: false },
        { word: 'marzo', upper: false }, { word: 'abril', upper: false },
        { word: 'mayo', upper: false }, { word: 'junio', upper: false },
        { word: 'julio', upper: false }, { word: 'agosto', upper: false },
        { word: 'septiembre', upper: false }, { word: 'octubre', upper: false },
        { word: 'noviembre', upper: false }, { word: 'diciembre', upper: false },

        // --- Idiomas y nacionalidades (minúscula) ---
        { word: 'español', upper: false }, { word: 'inglés', upper: false },
        { word: 'francés', upper: false }, { word: 'italiano', upper: false },
        { word: 'alemán', upper: false }, { word: 'chino', upper: false },
        { word: 'japonés', upper: false }, { word: 'ruso', upper: false },
        { word: 'portugués', upper: false }, { word: 'árabe', upper: false },
        { word: 'mexicano', upper: false }, { word: 'argentino', upper: false },
        { word: 'colombiano', upper: false }, { word: 'peruano', upper: false },
        { word: 'chileno', upper: false },

        // --- Colores (minúscula) ---
        { word: 'rojo', upper: false }, { word: 'azul', upper: false },
        { word: 'verde', upper: false }, { word: 'amarillo', upper: false },
        { word: 'blanco', upper: false }, { word: 'negro', upper: false },
        { word: 'marrón', upper: false }, { word: 'gris', upper: false },
        { word: 'morado', upper: false },

        // --- Números (minúscula) ---
        { word: 'uno', upper: false }, { word: 'dos', upper: false },
        { word: 'tres', upper: false }, { word: 'cuatro', upper: false },
        { word: 'cinco', upper: false }, { word: 'seis', upper: false },
        { word: 'siete', upper: false }, { word: 'ocho', upper: false },
        { word: 'nueve', upper: false }, { word: 'diez', upper: false },
    ];

    // === Oraciones para el juego de Inglés ===
    // Cada oración tiene dos huecos (___) y dos palabras correctas en orden.
    // El "pool" contiene las dos correctas + cuatro distractores plausibles.
    // Las oraciones llevan algo de contexto para que el niño se ayude a
    // deducir qué palabra falta.
    const ENGLISH_SENTENCES = [
        // --- Statements ---
        { text: 'Every morning I ___ a ___ for breakfast.',
          correct: ['eat', 'banana'],
          pool: ['eat', 'run', 'sleep', 'banana', 'school', 'happy'] },
        { text: 'My sister and I ___ to ___ every day.',
          correct: ['go', 'school'],
          pool: ['go', 'is', 'are', 'school', 'apple', 'red'] },
        { text: 'On weekends we always ___ in the big ___.',
          correct: ['play', 'park'],
          pool: ['play', 'eat', 'are', 'park', 'book', 'fast'] },
        { text: 'My grandma always ___ me a nice ___ at night.',
          correct: ['tells', 'story'],
          pool: ['tells', 'flies', 'runs', 'story', 'dog', 'blue'] },
        { text: 'The big black ___ is sleeping on the ___.',
          correct: ['cat', 'sofa'],
          pool: ['cat', 'school', 'fast', 'sofa', 'eat', 'blue'] },
        { text: 'After dinner my dad ___ a ___ to me in bed.',
          correct: ['reads', 'book'],
          pool: ['reads', 'flies', 'eats', 'book', 'sky', 'red'] },
        { text: 'I really ___ to swim in the ___ in summer.',
          correct: ['like', 'sea'],
          pool: ['like', 'am', 'do', 'sea', 'school', 'fast'] },
        { text: 'My best friend has two ___ and a small ___.',
          correct: ['cats', 'dog'],
          pool: ['cats', 'eats', 'blue', 'dog', 'fly', 'are'] },
        { text: 'From here we can ___ a really big ___.',
          correct: ['see', 'mountain'],
          pool: ['see', 'is', 'do', 'mountain', 'apple', 'red'] },
        { text: 'Birds usually ___ very high in the blue ___.',
          correct: ['fly', 'sky'],
          pool: ['fly', 'is', 'are', 'sky', 'school', 'red'] },
        { text: 'On my birthday my mum ___ a chocolate ___.',
          correct: ['makes', 'cake'],
          pool: ['makes', 'flies', 'runs', 'cake', 'dog', 'blue'] },
        { text: 'My new bike is ___ and very ___.',
          correct: ['blue', 'fast'],
          pool: ['blue', 'eat', 'do', 'fast', 'school', 'are'] },
        { text: 'Every night before bed I ___ my ___.',
          correct: ['brush', 'teeth'],
          pool: ['brush', 'is', 'are', 'teeth', 'school', 'red'] },
        { text: 'The little baby is ___ in his soft ___.',
          correct: ['sleeping', 'bed'],
          pool: ['sleeping', 'is', 'fast', 'bed', 'apple', 'red'] },
        { text: 'Today the weather is ___ and very ___.',
          correct: ['sunny', 'warm'],
          pool: ['sunny', 'eat', 'are', 'warm', 'dog', 'run'] },

        // --- Questions ---
        { text: 'Do you ___ any pets at your ___?',
          correct: ['have', 'home'],
          pool: ['have', 'are', 'do', 'home', 'fast', 'blue'] },
        { text: 'Can you please ___ me the ___?',
          correct: ['pass', 'salt'],
          pool: ['pass', 'is', 'are', 'salt', 'school', 'red'] },
        { text: 'What is your favourite ___ of the ___?',
          correct: ['day', 'week'],
          pool: ['day', 'is', 'are', 'week', 'dog', 'blue'] },
        { text: 'Where did you ___ that lovely red ___?',
          correct: ['buy', 'hat'],
          pool: ['buy', 'is', 'are', 'hat', 'school', 'red'] },
        { text: 'How many ___ are in your school ___?',
          correct: ['books', 'bag'],
          pool: ['books', 'is', 'are', 'bag', 'school', 'red'] },
        { text: 'Are you ___ to my birthday ___ tomorrow?',
          correct: ['coming', 'party'],
          pool: ['coming', 'is', 'do', 'party', 'school', 'red'] },
        { text: 'When does your sister ___ to ___ in the morning?',
          correct: ['go', 'school'],
          pool: ['go', 'is', 'are', 'school', 'dog', 'red'] },
        { text: 'Why is the little ___ ___ so much today?',
          correct: ['boy', 'crying'],
          pool: ['boy', 'is', 'are', 'crying', 'school', 'red'] },
        { text: 'Does your dog ___ in the ___ at night?',
          correct: ['sleep', 'garden'],
          pool: ['sleep', 'is', 'do', 'garden', 'school', 'red'] },
        { text: 'Who is the ___ in the red ___ over there?',
          correct: ['girl', 'dress'],
          pool: ['girl', 'is', 'are', 'dress', 'school', 'red'] },
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
                const lower = pick.word;
                const upper = lower.charAt(0).toUpperCase() + lower.slice(1);
                return {
                    word: lower,
                    upper,
                    lower,
                    result: pick.upper ? 'upper' : 'lower',
                };
            },
            renderQuestion(q, container) {
                container.innerHTML = `<div class="word-prompt">¿Cuál está bien escrita?</div>`;
            },
            // Mostramos ambas variantes (con y sin mayúscula inicial), barajadas.
            getKeypadValues(q) {
                return shuffle([
                    { label: q.upper, value: 'upper' },
                    { label: q.lower, value: 'lower' },
                ]);
            },
            formatAnswer(q) {
                return q.result === 'upper' ? q.upper : q.lower;
            },
        },

        english: {
            id: 'english',
            title: 'Fill the sentence',
            total: 25,
            timeLimit: 150,
            keypadClass: 'words',
            generate(prev) {
                let pick;
                do {
                    pick = ENGLISH_SENTENCES[Math.floor(Math.random() * ENGLISH_SENTENCES.length)];
                } while (prev && prev.text === pick.text);
                return {
                    text: pick.text,
                    pool: shuffle(pick.pool.slice()),
                    result: pick.correct.slice(),  // array → modo multi-pick
                };
            },
            renderQuestion(q, container, picks) {
                picks = picks || [];
                let i = 0;
                const html = q.text.replace(/___/g, () => {
                    const idx = i++;
                    const p = picks[idx];
                    if (p === undefined) {
                        const cls = idx === picks.length ? 'en-blank en-blank-active' : 'en-blank';
                        return `<span class="${cls}">_____</span>`;
                    }
                    return `<span class="en-blank en-blank-filled">${escapeHtml(p)}</span>`;
                });
                container.innerHTML = `<div class="en-sentence">${html}</div>`;
            },
            getKeypadValues(q) {
                return q.pool.map((w) => ({ label: w, value: w }));
            },
            formatAnswer(q) {
                let i = 0;
                return q.text.replace(/___/g, () => q.result[i++]);
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
        currentPicks: [],   // para juegos con respuesta de varios picks
        finished: false,
        locked: false,      // bloquea entrada mientras se muestra feedback
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
        state.currentPicks = [];
        state.game.renderQuestion(state.currentQuestion, $('question'), state.currentPicks);
        buildKeypad(state.game, state.currentQuestion);
        state.locked = false;
    }

    // Respuesta del jugador. Para juegos con respuesta única (sumas, multi,
    // lengua) se comprueba al instante. Para juegos con varios picks (inglés,
    // result es un array), se acumulan los picks y se comprueba cuando se
    // han elegido todos. Si falla, muestra la respuesta correcta y avanza.
    function onAnswer(value) {
        if (state.finished || state.locked || !state.currentQuestion) return;
        const target = state.currentQuestion.result;
        const isMulti = Array.isArray(target);

        if (isMulti) {
            state.currentPicks.push(value);
            state.game.renderQuestion(state.currentQuestion, $('question'), state.currentPicks);
            if (state.currentPicks.length < target.length) return;
            const allOk = state.currentPicks.every((p, i) => p === target[i]);
            finishCheck(allOk);
            return;
        }

        const ok = value === target || String(value) === String(target);
        finishCheck(ok);
    }

    function finishCheck(correct) {
        state.locked = true;
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
            }, 500);
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
        $('btn-back').addEventListener('click', () => {
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
