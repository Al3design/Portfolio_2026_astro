# R29 — Colección simple como la tienda original

## Pedido

Alejandro prefiere la composición de la tienda de ejemplo aportada en captura: imágenes protagonistas, sin recuadros de cards ni texto largo debajo. Descripciones, paletas y demás datos se consultan al abrir el producto. Esta decisión actualiza la presentación R26–R28, sin descartar sus datos.

## Implementación

- La colección real reutiliza `shop__products` y `shop__product` del módulo visual de la tienda original: dos columnas iniciales y tres desde su breakpoint md, sin contenedor de tarjeta con fondo/padding.
- Una fotografía en formato cuadrado, nombre, categoría y «Ver pieza»/«View piece» por producto. Se retiran descripción, lista de colores, estado repetido y permisos de la colección. La revisión local sigue identificada globalmente.
- Foto/nombre/contenido breve forman un enlace nativo único hacia la ficha, con nombre accesible localizado y foco visible. Las miniaturas usan encuadre cuadrado con object-fit cover como presentación; la galería mantiene imágenes completas con contain. No se alteran archivos originales.
- Fichas de detalle mantienen galería, descripción, paletas, permisos, datos y consulta WhatsApp de R26/R27.
- Control e2e existente adaptado a los nuevos nombres de enlace. La cobertura de permisos pasa de la colección al detalle de cada pieza; se prepara ausencia de listas de paleta en colección. Sin ejecución de la suite.
- OpenSpec y guía editorial actualizados. Sin datos de productos, permisos o fotos modificados; sin publicación/commit/staging.

## Revisión

La primera captura mostró clases nuevas sin exportar en el módulo CSS servido en caliente: el DOM tenía clase `undefined` para producto y vacía para el enlace, mientras conservaba la clase main anterior. Evidencia inicial `output/shop-r29/01-coleccion-con-estilos-anteriores.jpg`, no aceptada como resultado final. Recargar la pestaña no actualizó el mapa. Se detuvo la sesión propia 1137 con Ctrl+C, se comprobó que sus procesos Tina/Astro ya no existían y se inició una sola instancia nueva de `npm run dev`, sesión 18947. Sin iniciar servidores simultáneos ni ejecutar build/suites/tipos/lint/e2e.

Tras el arranque, DOM con clases nuevas de producto/enlace válidas y object-fit cover aplicado. Captura final inspeccionada `output/shop-r29/02-coleccion-simple.jpg`: tres columnas, fotos cuadradas sin panel exterior, nombre/categoría/enlace, sin texto largo ni paletas. La captura `output/shop-r29/03-coleccion-simple-movil.jpg` muestra dos columnas a viewport solicitado 390 × 844; títulos ajustados y enlaces visibles. No acredita carga de cada imagen diferida fuera del encuadre.

Se abrió Árbol decorativo desde el nuevo enlace: el DOM de detalle conserva descripción, seis colores con nombres, WhatsApp y galería; regreso a colección mantiene el ancla. Viewport original restaurado y colección local abierta. No se abrió WhatsApp ni se guardaron documentos Tina.

Las pruebas previas no se presentan como cobertura ejecutada de esta tanda. El archivo e2e quedó adaptado, no ejecutado. Sin matriz visual exhaustiva ES/EN-tema-ancho. Los límites restantes de Tina CRUD, WhatsApp externo, aprobación y exclusión del artefacto siguen vigentes.
