# Ingest Monitor: video oficial y material del proceso

Actualización posterior: la extracción individual produjo capas de fondo negras, según la captura de Alejandro. Esa selección queda reemplazada por dos láminas completas compuestas con PDFium, a ancho completo. Ver around-composed-slides-fix-report.md; las cuatro extracciones anteriores ya no se sirven por la ruta de medios.

2026-10-16. Pedido de Alejandro: enlazar el video de la página oficial y continuar.

- Miniatura oficial enlazada a https://www.youtube.com/watch?v=i7BmQZgSdpc, el mismo ID del iframe encontrado en la página de Around. Imagen y texto explícito del epígrafe son enlaces normales; sin iframe/autoplay ni nueva ventana forzada.
- Bloques Imagen/Galería admiten href/linkLabel opcionales, editables desde Tina. El render y Markdown usan el mismo destino; se omiten esquemas ejecutables y el guard de publicación rechaza destinos inválidos. No se modifica el bloque Video de archivos directos ni se introducen nuevas dependencias.
- Skill PDF aplicada para extraer imágenes embebidas de la presentación, sin renderizar ni capturar páginas: página 6 objetos X2/X8 (layouts), página 7 X2/X3 (alertas). Original PDF intacto. Derivados WebP en src/editorial/assets y manifiesto con origen/página/objeto/dimensiones.
- Dos galerías junto a sus respectivos apartados en ES/EN. Misma plantilla, epígrafes y créditos; medios bajo allowlist DEV /revision/media. El artículo permanece draft y los medios no van a public.
- Descripciones contextuales basadas en las láminas; inspección visual pendiente. No se certifican legibilidad de cada recorte, ausencia de información sensible, autoría de contenido audiovisual dentro de las interfaces ni derechos de publicación. Se conserva el pendiente editorial de aprobar capturas.

Autoría: extract-around-presentation-images.py y add-around-process-images.mjs, una ejecución cada uno, exit 0. Copia previa de MDX en .e2e/content-intake. Prueba de enlaces/Markdown/esquemas preparada sin ejecutar. Sin build, tipos, lint, tests, e2e, capturas ni reinicio de servidor por política AGENTS. Sin commit/push/publicación; OpenSpec abierto.
