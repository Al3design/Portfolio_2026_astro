# Limpieza final del efecto hexagonal

- Lectura de referencias en src/public/scripts/tests/docs/openspec y del diff de los archivos del efecto.
- No quedan en código las capas hex-raised-cell, máscaras de compensación, canvas de deformación, pulsaciones WAAPI, geometría de epicentro ni variables del relieve. El helper hexagonal-grid-pointer.ts ya coincide con HEAD tras retirar esos intentos.
- Se eliminó public/textures/hexagonal-cell.svg: recurso individual sin referencias. La textura hexagonal-cell-outline.svg de los intentos recientes también estaba retirada.
- Se conserva public/textures/hexagonal-grid.svg, usada por la grilla, glow, trail y ondas; grain.svg sigue compartida por los contenedores.
- MainLayout monta un solo helper según el patrón elegido y lo limpia en navegación, pagehide y HMR. El helper conserva pools acotados (8 puntos de trail y 4 ondas), cancelación del RAF, listeners con AbortController y limpieza de nodos. Sin refactor adicional de comportamiento.
- La variante cuadrada anterior se conserva por pedido original de Alejandro. El único ajuste visual local restante respecto de HEAD son los dos stops de color del núcleo naranja solicitados antes del experimento de rebote.
- Revisión por fuente/diff, sin build, tipos, lint, pruebas, e2e ni capturas por tanda según AGENTS.md. No constituye medición de rendimiento ni validación visual. Sin commit, push o despliegue.
