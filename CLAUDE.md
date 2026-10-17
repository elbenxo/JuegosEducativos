# CLAUDE.md

Guía rápida del proyecto para futuras sesiones de Claude Code.

## Qué es

Web estática de juegos educativos para niños, con seis minijuegos contra reloj:

- **Sumas Rápidas** (60 sumas en 2 min, sumandos 0–9, resultado ≤ 10).
- **Multiplicaciones Rápidas** (40 multiplicaciones en 2 min, factores 1–9, opción múltiple con 4 botones).
- **¿Mayúscula o minúscula?** (30 palabras en 2 min, dos botones con la palabra escrita en sus dos formas).
- **Fill the sentence** (25 oraciones en 2:30 min, inglés: 2 huecos por oración, pool de 6 palabras).
- **Present Simple o Continuous** (25 oraciones en 2:30 min, inglés: elegir la forma correcta del verbo entre 4 opciones, con palabras clave como pista).
- **Las preguntas Wh-** (25 preguntas en 2:30 min, inglés: elegir la palabra interrogativa correcta —What, Where, Who, When, Why, How— a partir de la respuesta dada como pista).

Sección aparte **"📘 Inglés – Unit 1: Our friends (examen)"** (4º primaria, libro de texto, Unit 1):

- **Hair and faces** (`u1pelo`, 25 en 2:30): cara SVG generada (pelo dark/fair, short/long, curly/straight, gafas, pecas); "What does she look like?", "Has he got glasses?" y vocabulario es↔en.
- **Has / Have got** (`u1havegot`, 25 en 2:30): huecos has/have, 's/'ve, hasn't/haven't, Has/Have…?, short answers, What does/do … look like?
- **Me too / Me neither** (`u1metoo`, 30 en 2:30): responder que a ti también te pasa.
- **The tallest!** (`u1super`, 25 en 2:30): superlativos, serie tall–taller–the tallest, adjetivos es↔en, "Who's the tallest?" con datos, canción.
- **Monkey & Elephant** (`u1story`, 20 en 2:30): comprensión de la historia (quién, True/False, orden, por qué).
- **What's the link?** (`u1link`, 20 en 2:30): 3 caras con nombre que comparten exactamente dos rasgos; elegir la pareja ("curly hair / freckles").
- **Guess who!** (`u1guess`, 20 en 2:30): 4 caras con nombre y 1–3 pistas ("She's got dark hair. She hasn't got glasses."); botones "Is it Ella?". Sólo una cara cumple todas.
- **True or false?** (`u1truefalse`, 30 en 2:30): cara(s) + frase con 's got / hasn't got / 've got / haven't got (también "I've got…"), ~50 % verdaderas.
- **Line up!** (`u1lineup`, 25 en 2:30): 3–4 niños con barras (cm, años, segundos, kg); "Who's the tallest/…?" o "Ben is ___." (superlativo).
- **Order the sentence** (`u1order`, 15 en 3:00, multi-pick): tocar las palabras en orden (254 frases de la unidad).
- **Spell it!** (`u1spell`, 30 en 2:30): elegir la palabra bien escrita (45 palabras, con cara para las de pelo).
- **Story order** (`u1seq`, 15 en 3:00): ordenar 5 o 3 eventos de la historia (multi-pick), "Which happens first/last?", "A or B?" y next/before.
- **Repaso Unit 1** (`u1mix`, 30 en 3:00): mezcla aleatoria de todos los juegos u1 de respuesta única.
- **Examen Unit 1** (`u1exam`, 40 en 5:00): simulacro con todos los juegos u1, incluidos los multi-pick.

Sin dependencias, sin build. Tres archivos: `index.html`, `styles.css`, `script.js`.

## Estructura

```
.
├── index.html            # 3 pantallas: bienvenida, juego, resultado
├── styles.css            # estilos infantiles, responsive
├── script.js             # IIFE con catálogo GAMES y bucle común
├── .github/workflows/
│   └── pages.yml         # despliegue a GitHub Pages en cada push a main
├── README.md
└── CLAUDE.md             # este archivo
```

## Arquitectura

Todo gira en torno al objeto `GAMES` en `script.js`. Cada juego define:

| campo              | qué es                                                                            |
| ------------------ | --------------------------------------------------------------------------------- |
| `id`               | identificador (`sumas`, `multi`, `lengua`).                                       |
| `title`            | nombre visible.                                                                   |
| `total`            | número de retos.                                                                  |
| `timeLimit`        | segundos.                                                                         |
| `keypadClass`      | clase CSS para el contenedor del teclado (`cols-4`, `options`, `binary`).         |
| `generate(prev)`   | devuelve `{...question, result}`. `prev` permite evitar repetir la última.        |
| `renderQuestion(q, container)` | rellena `#question` con HTML específico del juego.                    |
| `getKeypadValues(q)`           | devuelve los botones a mostrar. Pueden ser números o `{label, value}`. |
| `formatAnswer(q)`              | string que se muestra al fallar tras "❌ Era ".                         |

Una pregunta puede llevar su propio `keypadClass` (tiene prioridad sobre el del juego); los juegos de la Unit 1 lo usan para alternar `u1` (2 columnas), `u1-two` (2 botones grandes) y `u1-wide` (1 columna para frases largas).

Los juegos `u1*` comparten formato de pregunta (`{key, hint, text, clue, face, pron, keypadClass, options, result, answer}`) creado con `u1Question()` y se pintan con `u1Render()`; `noRepeat()` evita repetir la `key` anterior. Campos extra que pinta `u1Render`: `people` (caras con nombre, `peopleHtml`), `lineup` (barras, `lineupHtml`) y `ab` (dos secuencias A/B). `u1mix` y `u1exam` se crean con `u1MixGame()`: guardan en `q.sub` el juego que generó la pregunta, delegan en él render, teclado y respuesta, y no repiten juego dos veces seguidas.

Los multi-pick de la Unit 1 (`u1order`, y `u1seq` en su variante de ordenar) marcan `q.pickOnce`: `buildKeypad` desactiva cada botón al pulsarlo. Como en `english`, la respuesta se comprueba cuando se han elegido todas las piezas.

`renderQuestion` recibe un tercer parámetro `picks` (array de respuestas dadas hasta ahora). En juegos de respuesta única se ignora; en juegos multi-pick (cuando `q.result` es un array) sirve para repintar la pregunta a medida que el jugador va eligiendo.

El bucle común (`nextQuestion`, `onAnswer`, `endGame`, etc.) es agnóstico al juego.

### Para añadir un juego nuevo

1. Añadir entrada a `GAMES` en `script.js` con los métodos de arriba.
2. Añadir una `<button class="game-card" data-game="<id>">` en `index.html`.
3. Si necesita un layout de teclado distinto, añadir una variante `.keypad.<class>` en `styles.css`.

## Reglas de UX (no negociables)

- **Es un juego contra reloj**: feedback corto. Acertar avanza en ~400 ms; fallar muestra la respuesta correcta unos ~450 ms y pasa a la siguiente. Nunca permitir reintentar la misma pregunta (evita el ensayo-error sin pensar).
- **Una pulsación = una respuesta**. Cada botón del teclado es una respuesta completa, no un dígito a acumular.
- **Diseño infantil**: botones grandes, fuente Comic Sans / Trebuchet, colores vivos, animaciones suaves.
- **El nombre se conserva** entre partidas hasta que el jugador pulsa "Cambiar jugador".

## Pantallas

1. `#screen-welcome`: input de nombre + tarjetas de juego.
2. `#screen-game`: HUD (jugador, aciertos, tiempo), pregunta, teclado.
3. `#screen-result`: stats + botones "Otra vez" / "Otro juego" / "Cambiar jugador".

## Despliegue

- Rama de trabajo: `claude/educational-math-games-gYo6L`.
- `main` se publica automáticamente vía `.github/workflows/pages.yml` en `https://elbenxo.github.io/JuegosEducativos/`.
- Flujo: commit + push a la rama → abrir PR → mergear → el workflow despliega.

## Probar localmente

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Estilo de código

- IIFE con `'use strict'`. No build, no transpilado.
- Sin comentarios redundantes; sólo comentar el "porqué" cuando no es obvio.
- Texto en castellano para todo lo visible al usuario.
