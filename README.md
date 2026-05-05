# JuegosEducativos

Web de juegos educativos para que los niños practiquen matemáticas de forma divertida.

## Juego 1: Sumas Rápidas

Reto: resolver **60 sumas en menos de 2 minutos**.

- Sumas con sumandos del 1 al 9.
- El resultado nunca pasa de 10.
- Cronómetro visible y barra de progreso.
- Mensaje de felicitación al lograrlo o de ánimo si no se consigue.
- El niño introduce su nombre antes de empezar.

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
