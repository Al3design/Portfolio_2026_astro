# Discovery, Tren, Pitufos y Chokie: preparación aplicada

## Alcance

Cuatro fichas bilingües ES/EN preparadas dentro de la plantilla compartida y los bloques existentes de Tina. Los cuatro documentos permanecen `draft`. No se cambiaron componentes, esquema o tipos generados ni se publicó contenido.

Se aplicaron las rutas definitivas de medios a los MDX de revisión y se copiaron **22 WebP sin edición** a sus directorios bajo `public/assets/projects/`. Los bloques de notas internas se separaron del cuerpo y se conservaron íntegros, junto con los originales, en `.e2e/content-intake/academic-3d-applied-1792508936551/`.

## Contenido y medios

| Artículo | Contribución y selección | Imágenes únicas | Video |
| --- | --- | ---: | --- |
| Discovery | Entrega Da Vinci, motivación Trekker, todos los modelos propios en 3ds Max e importación OBJ a After Effects. Portada y dos fotogramas. | 3 | «Intro de mi serie del alma»: `https://www.youtube.com/watch?v=MCpE5tW1KGo` |
| Tren | Modelos OBJ de terceros, postproducción propia enteramente en After Effects. Portada y dos fotogramas. | 3 | Confirmado por Alejandro en esta tanda: `https://www.youtube.com/watch?v=zBnXh_qTv24` («Paisaje ficticio») |
| Pitufos | Personaje descargado; rigging, aldea/hongos, tracking y postproducción propios. Se conservan los estudios de hongos y fotogramas. | 8 | «Aldea de Pitufos»: `https://www.youtube.com/watch?v=DmUvogI5eu0` |
| Chokie | Galleta y vaso en 3ds Max, chocolate en RealFlow; continuación individual del valle/isla flotante. Los pósters iniciales son del compañero. | 8 | Alejandro confirmó que no hay video. No se agrega enlace ni tutorial de terceros. |

Los videos se enlazan desde miniatura, epígrafe y acción de apertura existentes en Tina. No se agregan iframes o reproducciones automáticas. Se retiraron del contenido propuesto las tres muestras locales sin audio y sus descripciones pendientes; siguen conservadas en el archivo de preparación y `src/editorial/assets`, sin copiar MP4 a public ni presentarlas como versión final.

El paquete vigente de esta selección es `.e2e/article-releases/pending-2026-10-20T15-08-27-138Z/` (cuatro candidatos, 22 imágenes). La preparación anterior de las 15:07 incluía muestras de video y quedó superada por la confirmación del autor y esta selección de enlaces. El MDX actual es la fuente para una futura publicación; no reaplicar copias antiguas encima de una edición nueva.

## Edición

- Portadas con epígrafes de proyecto, sin mensajes de selección preliminar. Los fotogramas se identifican como material conservado, sin afirmar que corresponden a una versión final no confirmada.
- Galerías con `layout: grid`, archivo completo enlazado, alt, epígrafe y crédito. Los hongos y la aldea de Pitufos se conservan; Chokie mantiene las ocho imágenes identificadas por el autor.
- Créditos de modelos descargados y pósters del compañero siguen visibles. Nombres y fuentes desconocidos se conservan como desconocidos; no se inventaron colaboradores, licencias o resultados.
- Discovery conserva 3ds Max y After Effects como herramientas confirmadas. Se corrigió una nota interna EN antigua que todavía decía que la aplicación de modelado estaba pendiente.
- Las fechas de los trabajos permanecen sin confirmar. No se infiere un año de carpetas o archivos. No se asignó fecha editorial de publicación todavía.

## Rutas de revisión

`http://localhost:4322/revision/proyectos/<slug>` y `/revision/proyectos/en/<slug>`, para `discovery`, `tren`, `pitufos` y `chokie`. Son rutas locales DEV/noindex; no son páginas ya publicadas.

## Controles y siguiente paso

Se leyeron fuentes y diferencias y se prepararon archivos. Sin build, tipos, lint, pruebas, e2e, navegador de diagnóstico o inspección de capturas. No se inició otro Tina. No se comprobó apertura/guardado de estas fichas en Tina ni disponibilidad actual de los enlaces de YouTube mediante reproducción; el de Tren está confirmado por el autor y los otros dos se conservan del inventario y edición anteriores.

Paso propuesto: autorizar una excepción a AGENTS.md para ejecutar una sola vez `npx.cmd astro build` con el Tina existente en 4002, tras aplicar estado publicado y fecha editorial a estas cuatro fichas; si pasa, commit/push/publicación exclusivamente de cuatro MDX y sus 22 WebP. Si falla, registrar y entregar sin repetir ni sustituir el control.

OdontoPro y UseOdontoPro permanecen fuera por la revisión legal de backups. Los demás drafts y las reglas de agentes no entran en esta tanda. Sin commit, push o despliegue en esta preparación. El OpenSpec completo sigue abierto.
