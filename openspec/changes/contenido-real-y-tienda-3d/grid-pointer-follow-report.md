# Grilla del portfolio: foco siguiendo al puntero

2026-10-16. Alejandro autorizó la alternativa liviana propuesta después de revisar Cursor Grid de React Bits: adaptar un foco existente, sin importar el componente WebGL.

## Implementación

- MainLayout identifica la grilla existente mediante data-energy-grid. El controlador energy-grid-pointer.ts reutiliza .eg-spot--primary::before, con la misma máscara fija de líneas, degradado, tamaño, colores y opacidad de tokens. Los focos cian y naranja conservan sus animaciones ambientales. Sin dependencias nuevas, canvas, render de React ni elementos por celda.
- Handoff: una lectura de transform computado del pseudo-elemento en el primer frame, antes de escrituras. El foco conserva esa posición al pasar de animación CSS a seguimiento. Solo se actualizan dos variables locales que alimentan translate3d; sin mover la máscara, cambiar el degradado, dimensiones ni medir layout por cada movimiento.
- pointermove pasivo guarda la última posición clientX/clientY y programa como máximo un requestAnimationFrame pendiente. Interpolación dependiente del tiempo, constante 85 ms y umbral de asentamiento 0,25 px. Una vez asentado, deja de programar frames. Al salir o perder foco se cancela el seguimiento; el foco permanece donde quedó. No se crea un bucle JS permanente ni se reactiva el recorrido autónomo verde hasta reinicializar/cambiar preferencias.
- Preferencias dinámicas: solo ratón con hover/puntero fino y sin prefers-reduced-motion. Al cambiar preferencias se abortan listeners y se retira el override. Sin grilla en Shop 3D, el setup retorna antes de instalar controladores. No se cambia el tema ni el fondo de Shop.
- Pestaña oculta: se cancela RAF y se pausan las animaciones CSS ambientales. Al volver se reanudan esas animaciones; el seguimiento espera un nuevo movimiento. Cleanup en pagehide y astro:before-swap; montaje para navegación Astro, restauración BFCache y limpieza HMR.

## Evidencia y límites

Revisión de fuente/diff solamente. Consulta de documentación Astro mediante Context7 para scripts procesados y eventos de navegación; guía modern-web-guidance motion y skill css-motion-systems para transform/reduced motion. No se agregaron librerías.

No se ejecutaron build, tipos, lint, tests, e2e, navegadores, capturas ni perfiles conforme AGENTS.md. Evitar actualizaciones React y bucles inactivos reduce trabajo por diseño, pero no demuestra por sí solo composición GPU, cero repintados, FPS ni impacto nulo en el sitio. Las máscaras y blend modes pueden depender del compositor del navegador.

## Criterios pendientes al cierre

Revisar visualmente seguimiento y handoff sin salto, máscara/grilla inmóvil, luz y contraste de ambos temas, enlaces/menú/scroll sin interferencias, ausencia en Shop y limpieza al navegar. Medir frames/CPU/Paint/Raster durante interacción y al quedar quieto, incluido equipo limitado/escala alta; confirmar reduced-motion y táctil, pestaña oculta, BFCache y cambio de preferencias. Si el coste es excesivo, ajustar o retirar la mejora sin aflojar criterios.

Sin commit, push ni publicación. Cambio OpenSpec abierto; esta implementación no equivale a aprobación de rendimiento.
