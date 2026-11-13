# Corrección de imágenes negras de Around

2026-10-16. Captura del usuario: las extracciones de XObjects de la página 7 muestran fondos oscuros sin interfaz. La extracción de un objeto no conserva texto, vectores y otras capas que la página PDF combina encima; fue incorrecto tratar esos objetos como pantallas completas.

Se compusieron las páginas 6 y 7 completas mediante PDFium a 1920 px de ancho y WebP calidad 92. Es autoría de medios desde el documento fuente, no capturas del navegador ni ejecución de controles del proyecto. Se conserva la composición original, sin inventar ni reconstruir elementos UI.

ES/EN ahora usan una figura a ancho completo por lámina para conservar legibilidad. Alt, epígrafe, crédito y origen permanecen editables desde Tina. Se retiran los cuatro fondos de la allowlist DEV; los archivos históricos quedan preservados en disco, sin referencias en el artículo. Publicación draft y exclusión de medios locales de producción intactas. Manifiesto actualizado con método de composición y reemplazos.

Comandos de autoría compose-around-presentation-images.py y replace-around-background-extracts.mjs ejecutados una vez cada uno, exit 0. Copia anterior de MDX en .e2e/content-intake. No se ejecutaron build/tipos/lint/tests/e2e, no se capturó ni inspeccionó navegador ni se reinició servidor. Revisión visual del usuario pendiente; sin commit, push ni publicación.
