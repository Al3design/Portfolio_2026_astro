# Tanda 5: Rioko, París y Tienda Geekies

2026-10-16. Se retoma la cola diseño web/gráfica desde el CSV existente. Tres candidatos, originales intactos, sin leer TXT extensos ni ejecutar HTML/scripts archivados.

## Confirmaciones directas de Alejandro

- Los tres fueron entregas de Da Vinci.
- Rioko: crear desde cero sobre todo una UX para una agencia de viajes. No se presupone método de investigación, herramientas, equipo ni resultados medidos.
- París: sitio turístico; interés personal en header tipo croquis y diagonal recortada de la home donde el contenido debía encajar. Galería preparada en Photoshop; proceso primero diseñar en Photoshop y después llevarlo a web.
- Tienda Geekies: candidato que Alejandro duda conservar; pide incluirlo por ahora y decidir después. No se presenta esa duda como aprobación de publicación ni como proyecto comercial.

## Fuentes consultadas

Rioko: UX-Parcial-02.pdf, 9 páginas; extracción limitada a 550 caracteres por página de las primeras siete. Prototipo con búsqueda de viaje, presupuesto, tiempo, experiencia, resultados y filtros de alojamiento. Las páginas 3/5/6 se compusieron completas con PDFium (texto, vectores e imágenes), evitando la extracción aislada de capas que produjo fondos negros en Around. No se usa el video prueba-usuaria.mp4 por privacidad y autorización pendientes. No se transforma el año del pie del prototipo en fecha de entrega.

París: lectura estática de títulos/encabezados/referencias CSS en index.html y listado de páginas: contacto, gracias, poi, tickets. Diseños HOME/POI/TICKETS de la carpeta grafica optimizados desde JPG, no capturas de navegador. Informe técnico del folleto del Arco del Triunfo leído de forma acotada (una página); identidad Jost/paleta documentada, pero relación con el sitio no confirmada: no se incorpora el folleto ni se atribuye esa tipografía al sitio actual.

Geekies: título Parcial 2 - IDM, catálogo, modal de producto, método de pago y resumen; Bootstrap 5.2.2 referenciado en el código y hoja CSS local. Form action # no prueba pago ni pedidos operativos. Se usa productos.png como material de catálogo, claramente no como captura de interfaz ni modelos propios. No se copia foto de perfil del archivo ni se carga el HTML histórico.

Muestra de texto local en .e2e/content-intake/design-web-source-samples.json. La primera impresión falló por Unicode en la consola Windows; se guardó/imprimió JSON escapado sin ampliar el volumen de lectura. Es inspección de fuente, no control del proyecto.

## Entrega local

rioko.mdx, paris.mdx y tienda-geekies.mdx: un documento bilingüe por trabajo, mismo schema Tina/ProjectDetailView, sin cambiar componentes ni archivos generados. Contexto, decisiones y medios con alt/epígrafe/crédito, notas pendientes plegadas. Los enlaces Abrir imagen completa usan el campo existente href. Sin fechas inventadas; showInResume false; publicationStatus draft.

Siete derivados WebP DEV-only: tres láminas Rioko, tres diseños París y una imagen de catálogo Geekies. Se reutiliza la portada en galería; manifiesto design-web-media-manifest.json con fuente/página/dimensiones. Sin publicación/recursos en public. Las imágenes conservan los contenidos históricos de los ejercicios y no son información comercial vigente.

Rutas locales /revision/proyectos/rioko, /paris y /tienda-geekies; EN bajo /revision/proyectos/en/{slug}. No se mantiene una web histórica ejecutable ni se agrega una segunda tienda operativa. Tienda Geekies es ejercicio separado del emprendimiento de impresiones 3D.

## Autoría y verificación pendiente

prepare-design-web-review-images.py y prepare-design-web-drafts.mjs ejecutados una vez cada uno, exit 0. El script de MDX usa wx para preservar documentos existentes. Sin build/tipos/lint/tests/e2e, navegador ni capturas conforme AGENTS.md. Revisión de fuente/diff únicamente; medios, teclado/rutas/Tina y controles finales pendientes. Sin commit/push/publicación.

Falta: confirmar fechas/materias/equipo, herramientas de Rioko, metodología/aprendizajes, detalles de implementación de París, relación folleto/sitio y decisión de conservar Geekies. Selección visual y créditos fotográficos/producto pendientes. Próxima cola: gráfica (mate y CV personal), sin duplicar París/folleto hasta aclarar relación; luego proyectos personales 3D y web profesional según intake-plan.
