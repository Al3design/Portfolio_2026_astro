# BOTF y SUPREMACY: galerías ampliadas

2026-10-19. Pedido de Alejandro: más imágenes, mostrar el 3D de SUPREMACY y todas las naves de BOTF, manteniendo la plantilla y la edición desde Tina.

## Resultado de autoría

BOTF: 21 imágenes en diez galerías, una por grupo del archivo: Miranda proto, Kelvin, Saladin, Titan, Turret, Immense stations, Constitution Kelvin, K7 station, Borg probe y Vesta. Se conservan tres vistas existentes de Vesta y se agregan dos por cada uno de los otros nueve grupos. Se cubren los diez grupos, no las 216 variantes archivadas. No se supone que cada JPG represente una nave distinta. La selección combina proceso de modelado, texturas e integración en el juego.

SUPREMACY: dos dibujos conservados como referencias de otra persona de la comunidad, con créditos corregidos; una galería adicional de cuatro pruebas 3D (entorno, cuerpo frontal, torso y vista posterior). Portada cambiada al entorno 3D. El modelado sigue identificado como inconcluso. Nombre del dibujante y correspondencia detallada con las referencias pendientes.

Se revisaron imágenes originales del archivo y una hoja de contacto de fuentes para seleccionar derivados; no se capturó ni inspeccionó el sitio en un navegador. La imagen 10.jpg del archivo SUPREMACY muestra otro personaje con firma: se excluyó y no se atribuye a Alejandro. No se ejecutaron MAX/PSD ni otros archivos históricos.

## Plantilla y Tina

Se reutiliza layout columns de las galerías existentes: columnas independientes, imágenes completas sin recorte, epígrafes y enlaces en pestaña nueva. No se agrega librería masonry, componente, JavaScript cliente ni variante de schema. Cada grupo sigue siendo un bloque gallery editable en ambos idiomas dentro del mismo MDX. La estructura exterior de ProjectDetailView se conserva.

El texto que anunciaba solo tres vistas de Vesta se actualizó; las notas editoriales existentes permanecen. Antes de editar se guardaron copias exactas de ambos MDX en .e2e/content-intake. El script de ampliación es de ejecución puntual, no idempotente: no repetir sobre ediciones de Tina porque volvería a expandir galerías.

## Medios y ejecución

expand-community-3d-images.py: 22 derivados nuevos, exit 0. community-3d-expanded-manifest.json registra origen/grupo/dimensiones/tamaño; no se modifica el archivo original. expand-community-3d-galleries.mjs: cambios ES/EN, exit 0. Lista de medios DEV ampliada, sin copiar a public ni publicar artículos.

No se ejecutaron build/tipos/lint/pruebas/e2e ni verificaciones de navegador conforme a AGENTS.md. La inspección de fuentes no verifica el layout renderizado, la edición/guardado en Tina ni rendimiento. Esos controles y la aceptación editorial siguen pendientes al cierre. Sin commit/push/publicación.
