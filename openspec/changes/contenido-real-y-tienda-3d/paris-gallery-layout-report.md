# París: Galería original y distribución de capturas largas

Actualización posterior: la captura del usuario muestra sobrante al pie de la columna más corta. París pasa a vistas previas uniformes 3:4 y apertura completa en pestaña nueva; columns permanece como opción. Ver paris-preview-new-tab-report.md. La recuperación del PSD y sus archivos no cambia.

2026-10-16. Alejandro solicita recuperar la página Galería y evitar huecos por filas de alturas iguales.

## Fuente recuperada

El HTML histórico solo referencia cuatro miniaturas de atracciones. No se confundieron con la página completa. Se inspeccionaron nombres/metadatos de capas de los dos PSD originales, sin abrir ejecutables, reconstruir layouts ni leer los TXT largos. Alejandro-Delgado-final-2.psd contiene una mesa GALERIA con rectángulo artb [1300,1,2500,4032]. Se recorta esa mesa del composite completo del PSD mediante Pillow, conservando elementos compuestos; resultado WebP 1200x4031, sin ampliar. Fuente, rectángulo y tamaño registrados en paris-gallery-manifest.json; revisión visual pendiente.

Se agrega como segunda imagen junto a Home, POI y Tickets, ES/EN, con alt/epígrafe/crédito y enlace para abrir completa. Original PSD intacto; recurso DEV-only, publicationStatus draft.

## Presentación compartida/Tina

Galería incorpora layout opcional grid/columns en Tina y contrato compartido. Predeterminado grid conserva el resto de artículos. París elige columns en ES/EN: multicol CSS con ancho objetivo 20rem y máximo dos columnas desde md, una en mobile o si el contenedor no tiene ancho suficiente. Cada figura es indivisible (break-inside avoid), conserva altura natural y mantiene caption/crédito/enlace junto a la imagen. No hay filas compartidas, recortes de altura, JS de posicionamiento ni librería masonry. Orden DOM/exportación sin cambios: se lee verticalmente por columna, no por filas. Puede quedar distinto largo al pie de las columnas, pero las figuras de una misma columna no esperan a otra fila.

Guard de publicación rechaza layouts no reconocidos; no se tocaron generados Tina. Markdown conserva imágenes y créditos en orden de contenido sin añadir marcado visual de columnas. Docs/ARTICLES_TINA.md explica la opción.

## Autoría/pendientes

extract-paris-gallery-artboard.py y update-paris-gallery-layout.mjs ejecutados una vez, exit 0. Copia anterior del MDX en .e2e/content-intake. No se ejecutaron build/tipos/lint/tests/e2e, navegador ni capturas conforme AGENTS.md. Consultas de guía responsive y MDN sobre fragmentación/figuras en multicol. Pendientes al cierre: revisión visual del recorte PSD, composición desktop/mobile al cargar lazy images, enlaces y campos Tina. No se declara validación visual ni eliminación de todo espacio al pie de columnas por lectura de fuente. Sin commit/push/publicación.
