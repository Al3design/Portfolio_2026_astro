# Brillo del puntero hexagonal

## Corrección tras revisión del usuario

El halo más amplio no fue aprobado. Se restauraron los tres drop-shadow originales, el blur de 2 px, la opacidad secundaria de 0.55 y los stops originales del gradiente. Solo los dos stops centrales (0% y 18%) reciben naranja más saturado y opacidad plena. El resto del gradiente permanece igual al estado previo al pedido: sin núcleo blanco ni extensión naranja adicional. Revisión por diff, sin controles de ejecución o publicación.

## Primera propuesta, reemplazada por la corrección anterior

- Se intensificó únicamente la capa naranja del puntero: núcleo cálido casi blanco, naranja saturado y halo más luminoso sobre los trazos enmascarados. Se reutilizan los tres drop-shadow y los dos pseudo-elementos existentes.
- Se mantiene el gradiente de 90 px, el tamaño del elemento, la posición, la geometría, el seguimiento, los fades de entrada/salida, el mínimo en reposo y las ondas de clic. No se agregaron nodos, listeners o bucles ni se animan nuevos filtros.
- Las preferencias de movimiento reducido, la pausa de pestaña oculta y el funcionamiento sin frames en reposo se conservan en el helper sin modificar.
- Guías usadas: css-motion-systems y modern-web-guidance/motion. Ajuste estático de brillo sobre capas existentes; rendimiento y apariencia no medidos en esta tanda.
- Revisión del diff únicamente: sin build, pruebas, tipos, lint, e2e ni capturas conforme a AGENTS.md. Cambio local, sin commit, push o despliegue.
