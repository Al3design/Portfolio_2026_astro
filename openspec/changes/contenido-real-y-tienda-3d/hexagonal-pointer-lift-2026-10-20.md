# Relieve del hexágono bajo el puntero

## Retirada de la propuesta tras revisión del usuario

Alejandro pidió quitar el hexágono naranja del clic porque la deformación superpuesta no estaba lograda. Se retiraron los cuatro canvas, sus polígonos, la pulsación del epicentro y los estilos de deformación. El helper se restauró al contenido de HEAD tras leer y confirmar que todo su diff correspondía a esta iteración. Se mantiene el glow/trail existente, el ajuste pequeño de intensidad naranja solicitado previamente y la onda de luz original con clics independientes. No queda aumento de tamaño en hover ni en clic. Fuente/diff revisados, sin controles de ejecución ni publicación. Las decisiones siguientes quedan como historial de intentos retirados.

## Decisión vigente tras aclaración final del usuario

El hover vuelve a ser únicamente el glow enmascarado y su trail, sin escala, rellenos, rebote ni un contorno naranja independiente. Se retiraron el pool de seis SVG, todas las animaciones WAAPI/variables del relieve y la textura de compensación hexagonal introducida durante esta iteración.

La deformación sucede solo con clic. La celda más próxima al clic es el epicentro: compresión suave a 0.97, expansión a 1.08 y regreso a 1 en 560 ms; se dibuja solo su contorno con gradación naranja/cian. La misma onda de 1500 ms transmite una deformación menor al resto de celdas. Los canvas no rellenan interiores ni pintan trazos oscuros de compensación. Se conserva el pool de cuatro ondas, que terminan independientemente, el mínimo de brillo en reposo y las protecciones de movimiento reducido/pestaña oculta.

Revisión de fuente/diff únicamente, sin controles de ejecución ni capturas por tanda. Cambio local sin publicación. Las notas siguientes describen iteraciones anteriores reemplazadas por esta decisión.

- Se identifica la celda bajo el puntero mediante los centros de la textura SVG original: columnas de 42 px y filas alternadas de 48.4974226 px. La capa de relieve queda anclada a esa celda, no desplazándose continuamente como un círculo alrededor del mouse.
- Un contorno SVG de la misma geometría escala a 1.12 y sube 2 px, con transición de transform de 260 ms y opacidad de 240 ms. Al cambiar de celda, la anterior vuelve a escala 1 y desaparece suavemente. Si se vuelve a una celda del pequeño pool, su transición se invierte desde el estado actual.
- Pool fijo de seis celdas, sin construir una grilla de nodos. Se reutiliza el requestAnimationFrame existente y no se agregan listeners ni timers. La opacidad acompaña la intensidad existente y su mínimo en reposo; no se mantiene un loop adicional para las transiciones CSS.
- Se conserva el núcleo naranja pequeño del ajuste anterior, el radio de iluminación, trail y ondas de clic. Los elementos nuevos se limpian en reset/desmontaje y no se activan con movimiento reducido o puntero no fino; CSS incluye además una exclusión de movimiento reducido.
- Guías: css-motion-systems y modern-web-guidance/motion. Revisión por diff y lectura de fuente únicamente, sin build, pruebas, tipos, lint, e2e ni capturas conforme a AGENTS.md. Alineación y resultado visual pendientes de revisión en local; no se declara rendimiento medido.
- Cambio local, sin commit, push o publicación.

## Corrección de la doble celda visible

Última aclaración del usuario: el aspecto durante el movimiento es correcto; el defecto aparece en reposo. Se conserva el relieve durante el movimiento, pero su escala/desplazamiento se vinculan a la intensidad ya suavizada. Al alcanzar el mínimo 0.18, la cara vuelve exactamente a escala 1 y desplazamiento 0, mientras el recorte que ocultaba el borde base llega a opacidad 0. Se quita además la sombra negra del contorno. El naranja queda alineado con la grilla en reposo, con brillo mínimo, manteniendo el pulso de clic y la propagación de onda. No se aplicó la alternativa propuesta de eliminar todo el relieve durante el movimiento. Revisión de diff, sin controles de ejecución ni publicación.

Revisión posterior: el relleno opaco dejó un interior oscuro visible en la captura del usuario. Se reemplazó por una máscara de contorno de 2.4 px que oculta únicamente el trazo original; el polígono animado usa fill:none. La misma corrección se aplica al canvas de las ondas: se cubre el borde base con un stroke y se dibuja el borde deformado sin rellenar el interior. Así se conserva la luz subyacente dentro del hexágono. Esta corrección reemplaza la decisión de relleno opaco descrita a continuación. Sin controles de ejecución ni capturas por tanda.

La captura del usuario mostró el contorno original detrás de la cara ampliada. La opacidad del contenedor seguía al glow y volvía translúcido también su relleno. Se separaron ambas funciones: la cara activa tiene relleno opaco del color de superficie y el fade de intensidad se aplica al trazo naranja. Un recorte hexagonal fijo cubre la celda original incluso al comprimir la cara en el clic. La salida conserva la transición de opacidad del conjunto para recuperar suavemente la grilla base. Sin cambio de radios, ondas, colores de brillo ni geometría de la textura; revisión por diff, sin capturas o controles de ejecución.

## Pulsación al hacer clic

Actualización posterior solicitada por Alejandro: la compresión central baja de 0.84 a 0.96 y el rebote de 1.18 a 1.05, con el mismo regreso suave. Se añadió deformación radial leve en las celdas alcanzadas por la onda, sincronizada con su radio y duración de 1500 ms. La amplitud periférica es menor y decae durante la expansión.

Cada una de las cuatro ondas tiene un canvas fijo de 600 × 600, sin DPR multiplicado ni un nodo DOM por hexágono. Los centros se calculan una vez al aceptar el clic; durante el RAF existente solo se dibujan los que atraviesa el frente radial. Se cubre la línea base antes de dibujar la cara deformada. Al terminar, ocultar pestaña o desmontar se limpian los dibujos. Las ondas activas no se reciclan ni reinician por clics rápidos. Sin medición de rendimiento ni revisión visual en esta tanda; lectura de fuente y diff conforme a la política del proyecto.

### Implementación inicial de la pulsación, amplitud reemplazada por el ajuste anterior

- Se añadió una pulsación de 560 ms al polígono interior: escala 1 → 0.84 → 1.18 → 1. El contenedor conserva su relieve hover independiente, por lo que la pulsación termina en el tamaño de reposo de la interacción sin saltos al retirar la animación.
- Se usa Web Animations sobre transform, sin modificar la grilla ni el radio de brillo. La onda expansiva mantiene su recorrido y su pool existente.
- Clics repetidos sobre una celda que aún está pulsando dejan terminar esa pulsación; las ondas siguen siendo independientes. Las celdas con una pulsación activa no se reciclan para otra posición. Map acotado por el pool de seis celdas y cancelación/limpieza al reset.
- Sin nuevos listeners, timers o bucles RAF. La exclusión de movimiento reducido y el reset por pestaña oculta siguen vigentes. Revisión por diff, sin controles de ejecución o capturas por tanda.
