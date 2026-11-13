# BOTF: parejas alineadas, collage y referencia

2026-10-19. Pedido de Alejandro: imágenes una al lado de otra por título, portada tipo collage de vistas texturizadas y referencia https://sketchfab.com/Aledesign/models.

## Contenido y plantilla

Las diez galerías de modelos pasan de columns a grid, ya soportado por Tina y el renderer: dos columnas a partir del breakpoint md; una en móvil. Cada título reúne dos imágenes, conservando proporciones y apertura en pestaña nueva. No se agrega CSS, biblioteca ni schema. Titan y Borg conservan dos imágenes texturizadas/integradas; no se inventa una vista de malla ausente en la selección. Vesta pasa de tres vistas sin textura a una pareja modelado/texturizado. Kelvin y Miranda reciben vistas texturizadas adicionales del archivo para reemplazar las segundas vistas previas.

Una galería final de referencia enlaza el perfil Sketchfab mediante href/linkLabel existentes, usando Vesta como miniatura. La consulta web al perfil falló (no accesible desde la herramienta); se usa exclusivamente el enlace facilitado por Alejandro, sin afirmar correspondencia entre cada archivo local y un modelo publicado.

## Portada

Collage generado con la herramienta de imágenes desde tres renders texturizados existentes: Titan, Borg y estación Immense. Composición asistida por IA, no render nuevo del proyecto ni fuente histórica; queda explicitado en imageCredit ES/EN y botf-cover-manifest.json. Se solicitó conservar los modelos y disponer las imágenes originales en tres paneles. No se garantiza identidad píxel a píxel con el original; los derivados de las fuentes permanecen separados e intactos en las galerías.

La imagen resultante se inspeccionó como artefacto de autoría y se optimizó a WebP en src/editorial/assets; no se capturó el sitio. Original generado conservado en el directorio de imágenes de Codex. Tres derivados nuevos de archivos históricos: Miranda 18m, Kelvin 15k y Vesta vs_p. DEV-only mediante allowlist, sin archivos públicos.

## Ejecución y estado

prepare-botf-cover.py y pair-botf-galleries.mjs exit 0; copia exacta del MDX anterior en .e2e/content-intake. No repetir el script sobre ediciones de Tina: agregaría la referencia otra vez. Veinte imágenes de modelos más una miniatura de referencia reutilizada, portada aparte. Los diez títulos y ambas traducciones se conservan.

Sin build, tipos, lint, tests/e2e ni navegador conforme AGENTS.md. Presentación responsive y apertura/guardado Tina pendientes al cierre. No se modifica SUPREMACY ni Casa en esta tanda; no hay commit/push/publicación.
