# Superficie de lectura sin grilla detrás del texto

2026-10-19. Alejandro señaló que la grilla ambiental y el foco del puntero atraviesan el texto de los artículos y distraen la lectura.

Se agrega una superficie opaca del token brand-surface a projectDetail__content y projectDetail__heroCaption en el SCSS de la plantilla compartida. Un box-shadow estático, sin blur y con spread size(4), extiende la oclusión unos espacios alrededor del contenido sin modificar su ancho ni la alineación. min-width 0 evita que la columna fuerce el ancho de la grilla por contenido intrínseco.

La superficie tapa las capas decorativas que ya están detrás, tanto animación ambiental como foco dirigido por puntero. No se depende del hover para ocultarlas. La grilla permanece en márgenes y zonas no cubiertas, y el contenido puede conservar sus bloques/galerías/card styles existentes. Funciona con la variable del tema, sin colores hardcodeados.

Alcance: cuerpo de lectura de artículos legacy y estructurados que usan ProjectDetailView, más epígrafes/créditos de la portada. No cambia Home/LIST/CARDS, Shop, encabezado o sidebar; no se desactiva globalmente la animación. No modifica MDX ni schema Tina.

No se agregan JS, listeners, cálculos de rectángulos, masks animadas, backdrop-filter, grain nuevo o canvas. Es fondo y sombra de extensión estáticos. No se afirma rendimiento medido ni cero repintados; perfil/visual/responsive pendientes de cierre.

Inspección de fuente y consulta de guía CSS; sin ejecutar build/tipos/lint/tests/e2e ni abrir navegador o tomar capturas. El cambio se revisa por diff según AGENTS.md. Sin commit/push/publicación.
