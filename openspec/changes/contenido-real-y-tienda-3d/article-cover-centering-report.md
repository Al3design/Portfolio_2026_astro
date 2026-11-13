# Centrado horizontal de portadas

2026-10-19. Pedido de Alejandro: centrar la imagen principal del artículo si no ocupa todo el ancho.

Se ajustó projectDetail__heroImage en el SCSS de la plantilla compartida: display block, margin-inline auto y max-width 100%. Centra horizontalmente las imágenes más angostas sin forzar su ampliación ni modificar el marco, recorte existente, epígrafes o badge. Aplica a los artículos que usan ProjectDetailView, tanto legacy como bilingües. No cambia contenido ni schema Tina.

Lectura de código y guía responsive; sin controles del proyecto, navegador o capturas, conforme AGENTS.md. Revisión visual pendiente. Sin commit/push/publicación.
