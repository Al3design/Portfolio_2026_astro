# Selección de medios profesionales: candidatos localizados

Actualización: Alejandro autorizó revisar estas diez capturas existentes. Selección e incorporación posterior en professional-media-incorporation-report.md; la limitación de inspección pendiente descrita abajo corresponde al estado anterior a esa respuesta.

2026-10-19. Continuación de las cuatro fichas de la tanda 8. Se localizaron diez archivos existentes mediante metadatos, sin abrir imágenes, ejecutar aplicaciones ni tomar nuevas capturas.

## Propuesta de selección para revisar

| Artículo | Candidatos existentes | Qué permitirían documentar, si la revisión lo confirma |
| --- | --- | --- |
| GitCron | init-guard-opened-repo y dos imágenes de retomar-19/despues | Apertura de repositorio y presentación del grafo. Nombres de repositorios, rutas e historial deben revisarse antes de copiar. |
| UseOdontoPro | Home y Planes, baseline de 1440 y 390 px | Presentación pública y adaptación a escritorio/móvil. Son archivos históricos, no prueba de estado productivo actual. |
| OdontoPau | article-live-desktop, article-reference-desktop y article-reference-mobile | Plantilla editorial de artículos. Revisar contenido visible, selección y versión antes de atribuirlo como presentación actual. No usar dashboard ni imágenes clínicas por defecto. |
| OdontoPro | Sin captura adecuada localizada en las rutas inspeccionadas | Pendiente seleccionar interfaz con datos de demostración. No usar capturas de otros productos como sustituto. |

Las denominaciones anteriores son nombres de archivo, no descripciones visualmente comprobadas. Rutas completas, tamaño y modificación en .e2e/content-intake/professional-media-candidates.json (local, ignorado). No se incluyen esas rutas privadas en los artículos ni se interpreta la modificación como fecha de realización.

## Ejecución y política

inventory-professional-media-candidates.mjs ejecutado una vez, exit 0. Autoría de un inventario de metadatos; no control técnico del proyecto. Sin copias de imágenes a src/editorial/assets, nuevos medios públicos o cambios en los cuatro MDX.

AGENTS.md vigente: «Ejecutora: no correr verificacion del proyecto, build, pruebas, tipos, lint, e2e ni tomar o inspeccionar capturas por prompt/tanda». Por eso la selección visual de estas capturas queda pendiente de una excepción explícita y acotada para autoría editorial, sin pruebas, navegador ni capturas nuevas. No se relaja ni edita la regla.

Una búsqueda de fuente pasada usó por error el parámetro PowerShell ErrorAction con rg, que lo interpretó como opción de encoding y falló. No era un control del producto; no se presenta como evidencia técnica ni verificación aprobada. El inventario de candidatos se confeccionó con rutas y metadatos de archivos conocidos.

Próximo paso: inspeccionar únicamente los diez candidatos existentes si Alejandro autoriza la excepción, descartar los inadecuados y optimizar/insertar los seleccionados con alt, epígrafe, crédito y fuente en las fichas Tina ES/EN. La revisión no reemplaza el control técnico final. Para OdontoPro, resolver aparte la fuente de una imagen representativa antes de dar por completa la ficha.
