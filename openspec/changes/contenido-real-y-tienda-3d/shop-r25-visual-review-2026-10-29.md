# R25 — Revisión visual local y aviso contextual

## Alcance y resultado

Auditoría visual acotada como orquestador, reutilizando Chrome y el servidor existente. Sin nueva suite, build, publicación ni cambios en documentos de productos. Se aplicó la skill Product Design audit; su preflight indicó que no existe contexto guardado. La revisión usa el diseño compartido del proyecto.

1. **Colección ES, tema claro — correcta en la captura.** En `/tienda?catalog=real` se ven las portadas de árbol, figura articulada y flor, con encabezado compartido. Sin iconos de imagen rota en este encuadre. Evidencia: `output/shop-r25/01-catalogo-claro-antes.jpg`.
2. **Ficha Creeper ES, escritorio — correcta con observación editorial.** Galería de tres fotos completas, leyendas, datos de material/colores/disponibilidad/entrega y pie compartido visibles. La franja heredada decía «piezas y renders de ejemplo» aunque la ficha muestra fotos reales. Evidencia completa: `output/shop-r25/02-ficha-clara.jpg`. La barra flotante de herramientas Astro corresponde al entorno de desarrollo.
3. **Ficha a 390 × 844, tema oscuro — captura bloqueada.** El DOM mostró el encabezado móvil y los datos de la ficha, pero `Page.captureScreenshot` agotó 5000 ms. No se guardó imagen móvil ni se declara inspección visual móvil aprobada. Sin repetir esta captura. Tema claro y tamaño del navegador restaurados mediante sus controles.
4. **Colección ES tras corrección — aviso confirmado visualmente.** Nueva franja: «Revisión local · fotos de impresiones reales · venta no habilitada». Evidencia: `output/shop-r25/04-catalogo-claro-corregido.jpg`. La pestaña queda abierta como resultado local.

## Cambio

`Navigation.tsx` recibe un texto opcional `shopNotice`; `MainLayout.astro` lo transmite. `ShopReview.astro` aporta el aviso localizado ES/EN. Los consumidores sin este valor conservan el aviso conceptual existente. Sin nueva cabecera, estilos ni selector de tema duplicados. Diff de esta tanda leído; no se afirma que el e2e anterior R24 cubra este cambio posterior.

## Límites y próximos pendientes

- Las capturas guardadas se inspeccionaron. Muestran colección y una ficha en español/claro, no todas las fotos, idiomas o estados.
- No hubo auditoría completa WCAG, lector de pantalla ni recorrido exhaustivo de teclado; no se deriva conformidad de estas capturas.
- Continúan pendientes la captura visual móvil, creación de una ficha desde Tina, exclusión en artefacto de producción y aprobación editorial. La persistencia de una ficha existente está documentada en R16; el control 4/4 previo en R24 no se repitió.
- Antes de una presentación pública conviene depurar descripciones de revisión: retirar referencias internas a nombres provisionales y medidas pendientes, respetando que Alejandro difirió las medidas. Mantener los límites de uso y entrega sin inventar datos.
- No se publicaron las ocho piezas ni se habilitaron ventas. Precios y plazos de entrega siguen sin valores inventados. No se tocaron cambios locales ajenos.
