# CLAUDE.md

Guía rápida del proyecto para futuras sesiones de Claude Code.

## Qué es

Web estática de juegos educativos para niños, con tres minijuegos contra reloj:

- **Sumas Rápidas** (60 sumas en 2 min, sumandos 0–9, resultado ≤ 10).
- **Multiplicaciones Rápidas** (40 multiplicaciones en 2 min, factores 1–9, opción múltiple con 4 botones).
- **¿Mayúscula o minúscula?** (30 palabras en 2 min, dos botones con la palabra escrita en sus dos formas).

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
