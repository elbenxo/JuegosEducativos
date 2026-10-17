# JuegosEducativos

Web de juegos educativos para que los niños practiquen matemáticas de forma divertida.

## Juego 1: Sumas Rápidas

Reto: resolver **60 sumas en menos de 2 minutos**.

- Sumas con sumandos del 1 al 9.
- El resultado nunca pasa de 10.
- Cronómetro visible y barra de progreso.
- Mensaje de felicitación al lograrlo o de ánimo si no se consigue.
- El niño introduce su nombre antes de empezar.

## Inglés – Unit 1: Our friends (examen)

Seis juegos para preparar el examen de la Unit 1 (4º primaria), cada uno con un banco grande de preguntas generadas al azar:

- **Hair and faces** — describe la cara del dibujo (pelo, gafas, pecas) y vocabulario.
- **Has / Have got** — has/have, 's/'ve, hasn't/haven't, preguntas y respuestas cortas.
- **Me too / Me neither** — contesta que a ti también te pasa.
- **The tallest!** — superlativos (tall → the tallest, big → the biggest, good → the best) y adjetivos.
- **Monkey & Elephant** — comprensión de la historia.
- **Repaso Unit 1** — todo mezclado, 30 preguntas en 3 minutos.

## Cómo jugarlo

Es una web estática, sin dependencias. Para abrirla en local:

```bash
python3 -m http.server 8000
# y abre http://localhost:8000 en el navegador
```

También se puede publicar tal cual en **GitHub Pages**.

## Estructura

- `index.html` — pantallas de bienvenida, juego y resultado.
- `styles.css` — estilos infantiles, responsivos y con animaciones.
- `script.js` — lógica del juego (generador de sumas, cronómetro, puntuación, confeti).

## Controles

- **Teclado en pantalla**: pulsa el número de la respuesta (0–10).
- **Teclado físico**: teclea el número (`Enter` confirma, `Backspace` borra).
