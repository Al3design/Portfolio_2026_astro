# Live Preview local de Shop — 02/11/2026

## Pedido y autorización

Alejandro autoriza un único recorrido local de crear/guardar/reabrir una ficha temporal con foto, comprobar exclusión del catálogo y retirarla. En la misma respuesta pregunta por qué no ve Live Preview como en el portfolio. Se implementó la conexión y se comprobó dentro de ese recorrido. Sin Cloud, push, build o publicación. Rama activa conservada, base `2b09899`.

## Causa y solución

`shopProduct` no tenía `ui.router`; la revisión era Astro estático sin consulta registrada con `useTina`. El portfolio ya usa ambas conexiones.

- `shopEditorRoute` abre la ruta de revisión local de cada ficha guardada; fuera de localhost conserva el formulario nativo. No expone borradores en producción.
- `ShopReview.astro` consulta `client.queries.shopProduct` y pasa query/variables/data a `ShopProductLivePreview`. El hook deriva el contenido sin estado duplicado y agrega `tinaField` a título, descripción, categoría, paleta, foto y detalles.
- `ShopProductView`, `ShopPaletteView` y `ShopWhatsAppButton` son compartidos entre la ficha pública y la vista de edición. La ficha pública sigue renderizada sin hidratar este componente, con galería Astro optimizada y compartir existentes. Solo la revisión dev recibe el documento editorial completo.
- El SVG WhatsApp llega como path desde el servidor; no se importa el catálogo de iconos en el cliente. Los estilos del botón se trasladaron al módulo SCSS conservando sus valores. Los detalles y condiciones siguen después de la galería.
- El documento de selección pública sigue en formulario nativo. No se implementó Live Preview de portada, orden o filtros desde esa configuración.

## Recorrido ejecutado

Servidor Tina/Astro existente reutilizado. Sus watchers regeneraron configuración al agregar el router; no se inició otra instancia.

1. Creada mediante Add File la ficha `zz-tina-live-preview-control-2026-11-02`, con textos ES/EN, estado draft, producción pending y foto de un original existente: `20261016_165908.jpg`. No se subió un archivo nuevo ni se seleccionó el borrador públicamente.
2. Save devolvió a la colección; la fila nueva apareció. Se reabrió mediante la fila y Tina navegó a `#/~/revision/tienda/es/<slug>`, con el formulario lateral y la foto en el iframe.
3. El título ES cambió a «Vista previa en vivo comprobada». El H1 y el destino de consulta se actualizaron antes de Save. Click en el título del iframe mantuvo el campo correspondiente seleccionado. Captura: `output/shop-live-preview/unsaved-title.png`.
4. Restaurado el título original del control. La colección local pública mostró ocho artículos y cero enlaces al slug temporal.
5. Retirado exclusivamente el documento temporal mediante Delete de Tina. Apareció `Document was successfully deleted`, la fila desapareció y la lectura posterior del filesystem confirmó que el archivo ya no existe. Las ocho fichas originales no presentan diff.
6. Se dejó abierto el Live Preview del jarrón real, sin editarlo. También se abrió su ficha pública local con seis fotos, paleta, condiciones, consulta y compartir presentes en la plantilla compartida.

Hubo dos incidencias de automatización, no fallos de producto: el primer locator buscaba un link donde el router renderiza una celda clickeable; se leyó DOM y se usó la celda. Un click al jarrón público agotó el tiempo de CDP sin navegar; después de leer el estado actual se accionó el enlace AX observado. No se repitieron suites ni el recorrido completo.

## Límites y pendientes

Este control acredita alta, guardado, reapertura, título ES en vivo, una foto privada ya existente, exclusión y limpieza del temporal. No acredita uploads nuevos a public, todos los campos/idiomas en vivo, persistencia de selección/novedades, Cloud, build o producción. Las pruebas Node modificadas siguen sin nueva ejecución; el 5/5 anterior no cubre el contrato corregido ni este frontend.

Se adaptaron expectativas E2E de revisión a la plantilla compartida: cuatro detalles en dl y condiciones comerciales fuera de él, manteniendo las comprobaciones de precio/entrega/inclusión/material/colores/cuidados/disponibilidad. Tests preparados, no ejecutados. No se editaron generados manualmente; lock/admin/types fueron producidos por Tina. No se archiva el OpenSpec ni se publica el checkout sucio.
