# Publicación autorizada: Ingest Monitor

Alejandro autorizó expresamente una excepción a AGENTS.md para ejecutar una sola vez `npx.cmd astro build` con el Tina existente en 4002 y, si pasaba, commitear, pushear y publicar exclusivamente Ingest Monitor ES/EN, sus dos láminas completas y el nombre Around MD en Resume. Los restantes artículos permanecen draft.

## Control local autorizado

- Tina existente escuchaba en 4002. No se inició otro servidor.
- Se aplicó `publicationStatus: published` y fecha editorial `2026-10-20`. No se asignó esa fecha al trabajo profesional ni se inventó un mes dentro del empleo 2018–2020.
- Comando ejecutado **una vez**: `npx.cmd astro build`.
- Resultado: código 0, 12 páginas generadas, incluidas `/projects/around-ingest-monitor` y `/projects/en/around-ingest-monitor`.
- Advertencia existente: import `Search` sin uso en ClientResume.tsx. No se cambió para repetir un control.
- Sin nuevas suites, lint, tipos, e2e ni capturas.

## Commit y despliegue

Commit `474dc82` en main, pusheado a `github.com/Al3design/Portfolio_2026_astro`. Cuatro archivos exactos: MDX de Ingest Monitor, corrección del cliente en around.mdx y dos WebP de láminas bajo `public/assets/projects/around-ingest-monitor/`.

No se incluyeron reglas de agentes, scripts de preparación, paquetes locales ni otros artículos draft.

El despliegue automático `dpl_D7s9tmW5xspACqGxCBkmS71gnNQG` falló al consultar el registro nuevo de Ingest Monitor en TinaCloud. Los logs indican `Unable to find record src/content/projects/around-ingest-monitor.mdx`. No fue una segunda ejecución del control local.

Se solicitó Reindex de main en el proyecto TinaCloud del portfolio, vinculado al repo Al3design correcto. Event Log confirma `indexing branch succeeded` a las 11:31:15 (UTC−3). Se relanzó el mismo commit remoto mediante Vercel; no se modificó el código ni la fuente de datos para evitar el error. La sincronización automática del índice continúa pendiente de investigación; la sincronización manual no la prueba resuelta.

## Créditos de Supremacy — solo local

El autor no recuerda el nombre: confirma que el dibujo provenía de alguien del foro de Supremacy. Se actualizó esa atribución ES/EN en el draft y sus notas, manteniendo el diseño de referencia separado de la adaptación 3D de Alejandro. No se atribuyó nombre, licencia ni autoría individual sin evidencia. La aclaración no identifica las bibliotecas de Casa; sus créditos pendientes se conservan.

OdontoPro y UseOdontoPro siguen draft por la revisión legal de backups. No se publicaron.

## Resultado de publicación

Redeploy `dpl_22R2spY25gkWaJNEqCvhh6hcMcqm`, mismo commit `474dc82`, completado Ready con alias `https://al3design.dev`.

Lectura HTTP de producción:

- ES y EN de Ingest Monitor responden 200 y muestran canonical propio.
- Ambas versiones incluyen las dos láminas completas; los archivos realmente referenciados desde Tina Media responden 200.
- Portada oficial de Around y miniatura del video responden 200.
- El enlace del artículo a la experiencia es `/resume#experience-around`.
- Resume responde 200, contiene Around MD y entrega a ClientResume el proyecto relacionado `/projects/en/around-ingest-monitor` con `draft: false`. Ese enlace también está en la exportación Markdown. El ancla y las cards de Resume se generan en el cliente; la lectura HTTP de sus datos no se presenta como una prueba de interacción en navegador.
- `/projects/odontopro` y `/projects/useodontopro` responden 404; sus fuentes locales permanecen draft y no entraron en el commit.

El control local autorizado se ejecutó una sola vez. El fallo inicial remoto y el redeploy tras indexar quedan registrados por separado. No se agregaron cambios de producto ni se ejecutó otro control local. La publicación de este artículo no cierra el OpenSpec completo.

## Corrección posterior solicitada: retirar las dos láminas

Alejandro pidió quitar las imágenes de layout y alertas y conservar el relato y el resto del artículo. Se retiraron solamente los cuatro bloques image (dos por idioma), sin modificar los bloques de texto, la portada ni el enlace/miniatura del video oficial. También se retiraron los dos WebP del directorio público del repositorio; los originales se conservan localmente y en Git. No se purgaron cachés externas de medios.

Commit `985c28c`, tres archivos, pusheado a main. No se ejecutó otro build local ni pruebas. La publicación usa el build remoto habitual.

El primer despliegue `dpl_DJbNjKBwGKgiuULaSD9azYpUeEAr` completó Ready, pero la lectura HTTP todavía contenía las dos láminas por el índice anterior de TinaCloud. Se sincronizó main; Event Log confirmó éxito a las 11:48:33 (UTC−3). Se relanzó ese mismo commit para incorporar el contenido actualizado.

Redeploy `dpl_GNMNB2Uj6nfHckLC1ecxKWqYrHAT` completado Ready con alias al3design.dev. Lectura HTTP de ES y EN confirma 200, cero imágenes de las láminas retiradas y conservación de la portada y miniatura oficiales. El relato permanece íntegro: el diff del MDX elimina exclusivamente los cuatro bloques de imagen.
