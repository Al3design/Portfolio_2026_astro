# Preparacion editorial para publicar articulos — 2026-10-19

## Primera tanda: GitCron y OdontoPau

Se mantiene un MDX bilingue por proyecto, con la plantilla compartida y campos de Tina existentes. No se duplican paginas ni se cambia el schema.

- Textos ES/EN: se retiraron frases sobre la preparacion de la ficha y notas internas plegadas. Las notas se conservan completas en first-article-editorial-notes.json y los originales en .e2e/content-intake/editorial-first-release-*.
- GitCron: estado En desarrollo, respaldado por la explicacion del autor sobre su evolucion continua. Se conserva el contexto real de las capturas con repositorio de prueba y la autoria con asistencia de IA.
- OdontoPau: relato de presentacion profesional, navegacion y continuidad editorial; se distingue la responsabilidad web de la revision clinica de Paula. No se agregan resultados SEO ni metricas.
- Herramientas: Photoshop, Illustrator y Figma permanecen en ambos. El texto menciona las IA confirmadas; se omite el nombre ambiguo Google Studio hasta aclararlo y no se inventa una version de Qwen.
- first-article-media-plan.json propone cuatro archivos en /assets/projects/{slug}/ para reemplazar las rutas DEV cuando se autorice cada ficha. No se copiaron medios a public/ ni se cambio publicationStatus.
- Consulta pendiente al autor: mes/ano de inicio, estado y un desafio GitCron / decision de diseno OdontoPau.

## Cola completa

La siguiente tabla es un relevamiento de contenido de los documentos locales, no una ejecucion de controles del proyecto. Cantidad de imagenes excluye portada repetida; videos son muestras locales, no enlaces externos.

| Articulo | Estado del trabajo | Fecha visible | Imagenes en galerias | Videos locales |
| --- | --- | --- | ---: | ---: |
| around-ingest-monitor | Trabajo profesional | Fecha del proyecto por confirmar | 0 | 0 |
| botf | Colaboración comunitaria | Fecha por confirmar | 21 | 0 |
| casa | Exploración personal | Fecha por confirmar | 3 | 0 |
| chokie | Trabajo académico | Fecha por confirmar | 8 | 0 |
| cv-personal | Proyecto personal | Fecha por confirmar | 2 | 0 |
| discovery | Trabajo académico | Fecha por confirmar | 2 | 1 |
| gitcron | En desarrollo | Fecha por confirmar | 2 | 0 |
| mate | Trabajo académico | Fecha por confirmar | 4 | 0 |
| mundo | Trabajo académico | Fecha por confirmar | 0 | 1 |
| odontopau | Estado por confirmar | Fecha por confirmar | 2 | 0 |
| odontopro | Estado por confirmar | Fecha por confirmar | 2 | 0 |
| paris | Trabajo académico | Fecha por confirmar | 4 | 0 |
| pitufos | Trabajo académico | Fecha por confirmar | 8 | 1 |
| rioko | Trabajo académico | Fecha por confirmar | 3 | 0 |
| supremacy | Inconcluso | Fecha por confirmar | 6 | 0 |
| tienda-geekies | Trabajo académico | Fecha por confirmar | 1 | 0 |
| toplomero | Trabajo académico | Fecha por confirmar | 5 | 1 |
| tren | Trabajo académico | Fecha por confirmar | 2 | 1 |
| useodontopro | Estado por confirmar | Fecha por confirmar | 4 | 0 |

## Ruta de publicacion

1. Completar informacion que aporte el autor y aprobar los textos ES/EN y seleccion de medios de la primera tanda.
2. Separar fecha de publicacion real del ano o periodo del trabajo; no usar nombres de carpetas o fechas de capturas como fecha de realizacion.
3. Preparar medios publicos solo para las fichas aprobadas y reemplazar src/href/poster correspondientes. Mantener credito y alternativa textual.
4. Revisar metadatos de cada articulo, portada social, enlaces de idiomas y exportacion desde la misma plantilla; la construccion exitosa anterior no sustituye esta revision editorial.
5. Aplicar controles finales de la publicacion segun AGENTS.md; commit selectivo de las fichas aprobadas y sus dependencias. El resto continua local.

Sin build, pruebas, e2e ni inspeccion de capturas por tanda. No se publico ningun articulo en esta tanda.

## Contexto confirmado y metadatos compartidos

Alejandro confirmo inicio de ambos trabajos a principios de 2026. GitCron sigue en desarrollo continuo. OdontoPau esta en produccion y se actualiza a pedido; su participacion abarca estetica, flyers, isologo y piezas 3D (estuches y capuchones de cepillos de dientes personalizados con logo). Se incorporo este relato en ES/EN, year 2026 y periodo visible sin inventar un mes exacto. No se confunde ese periodo con la fecha de publicacion del articulo, aun no asignada.

MainLayout ahora admite portada/alt y tipo de pagina desde ProjectDocument; usa URL absoluta para OpenGraph/Twitter, limpia el marcador // del titulo, emite canonical y alternates solo para paginas indexables y conserva noindex de previews. La portada y sus textos provienen de campos ya existentes de Tina: no hay duplicacion de datos ni cambios en su schema. Las previews resuelven sus imagenes contra localhost y no se anuncian como alternates publicos.

Pendientes de esta tanda: revision editorial de los dos documentos, seleccion final de medios, preparacion de rutas publicas y verificacion final segun politica del proyecto. Las fotos de objetos y flyers no se inventaron ni se sustituyeron por dummies. Implementacion de metadatos pendiente de control tecnico; no se ejecutaron build, tests o capturas.

## Aplicacion y compilacion autorizadas — 2026-10-19

Alejandro autorizo expresamente una excepcion a AGENTS.md: aplicar el paquete local y ejecutar una sola vez npx astro build con Tina existente en 4002, sin commit, push ni publicacion en este paso.

- Paquete aplicado desde .e2e/article-releases/2026-10-19T17-21-23-090Z. Originales draft conservados en originals/ dentro de ese paquete.
- Los dos MDX locales pasan a published con fecha editorial 2026-10-19 y cuatro medios bajo public/assets/projects/{slug}/. Esta fecha es la prevista para la publicacion, no el inicio de los trabajos (principios de 2026).
- Comando exacto en Windows: npx.cmd astro build. Una ejecucion, codigo 0; 15 paginas construidas, sin repeticiones ni controles alternativos.
- Salida confirma /projects/gitcron, /projects/en/gitcron, /projects/odontopau y /projects/en/odontopau. El resto de las rutas generadas corresponde al sitio existente; no se generaron los otros articulos draft ni rutas de revision.
- Aviso no bloqueante ya existente: Search importado sin uso en ClientResume.tsx. No se modifico para repetir controles.
- No se ejecutaron pruebas, e2e ni inspecciones visuales adicionales. El build no prueba comportamiento de navegador ni aprobacion editorial.
- No se hizo commit ni push. Publicacion remota pendiente de autorizacion de esta primera tanda.

## Publicacion autorizada de primera tanda — 2026-10-19

Alejandro aprobo expresamente commit, push y publicacion de GitCron y OdontoPau ES/EN, cuatro imagenes y mejoras compartidas de enlaces/metadatos; los otros 17 articulos quedan locales.

Commit 2018bfa en main, 11 archivos, pusheado a github.com/Al3design/Portfolio_2026_astro. No se incluyeron otros drafts, sus medios, around.mdx modificado ni reglas de agentes.

Primer despliegue dpl_EG7tKtivebVhSNtxB2HLioZPJVda: Tina build completo, Astro fallo al consultar el nuevo gitcron.mdx porque TinaCloud aun no tenia el registro. Se mantuvo el control y no se sustituyo la fuente de contenido por un fallback. Event Log seguia mostrando la indexacion previa de las 13:58. Se solicito Reindex de main en la interfaz de TinaCloud sobre el repo Al3design correcto; Event Log confirma indexing branch succeeded a las 14:29:03. Se relanza el mismo commit remoto. Pendiente revisar por que el push no actualizo automaticamente el indice de contenido tras el cambio de nombre del repo; esta sincronizacion manual no prueba resuelto el webhook automatico.

## Primera tanda publicada

Redeploy dpl_BhypKVkkzof79GjUGvWZg1dS9puJ, commit 2018bfa, Vercel Ready con alias al3design.dev. Consulta HTTP de produccion confirma 200 para /projects/gitcron, /projects/en/gitcron, /projects/odontopau y /projects/en/odontopau. Las cuatro imagenes responden 200. Las cuatro fichas tienen canonical propio, og:image absoluto de la portada correspondiente, enlaces destacados y no llevan noindex. /projects/mundo sigue en 404. Los otros 17 articulos y sus medios no entraron en el commit. No se ejecutaron nuevas suites o builds locales; el unico build local fue el autorizado anteriormente. La publicacion de esta tanda no cierra el OpenSpec completo ni resuelve la sincronizacion automatica pendiente de Tina.
