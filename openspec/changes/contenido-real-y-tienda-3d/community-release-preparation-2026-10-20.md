# BOTF, Supremacy y Casa: preparación aplicada

## Alcance

Continuación solicitada por Alejandro tras la corrección de Ingest Monitor. Tres documentos ES/EN con la plantilla y bloques Tina existentes; no se modifican componentes, esquema ni archivos generados. Los tres permanecen `draft`.

La preparación se aplicó a las fichas actuales, no solo a un paquete externo. Los 30 medios se copiaron sin editar desde los derivados existentes a `public/assets/projects/botf/`, `supremacy/` y `casa/`. Las imágenes completas, enlaces, portadas y metadatos de ambos idiomas apuntan a esas rutas. Estas son copias locales para una publicación posterior, todavía sin commit ni push.

Se retiró del cuerpo de cada ficha su bloque de notas internas. Los originales y todas las notas ES/EN se conservan en `.e2e/content-intake/community-applied-1792508093854/`. Los créditos públicos de terceros permanecen visibles; separar notas no resuelve ni oculta las fuentes desconocidas.

## Selección

| Artículo | Presentación y autoría | Medios únicos |
| --- | --- | ---: |
| BOTF | Collage de modelos texturizados; diez grupos con dos imágenes cada uno; imagen/enlace adicional de Sketchfab. Modelado low poly en 3ds Max y texturas propias de baja resolución en Photoshop. Importación con herramientas de época sin inventar nombres o métricas. | 21 |
| Supremacy | Cuatro pruebas 3D y dos referencias ilustradas separadas. Trabajo inconcluso de adaptación de un dibujo, atribuido a una persona del foro de Supremacy cuyo nombre Alejandro no recuerda. Herramientas no confirmadas: no se completan por extensión del archivo. | 6 |
| Casa | Tres renders de exploración personal en V-Ray, con SpotLight, Omni y HDR. Mesa, sillas y CPU de bibliotecas gratuitas; el resto del modelado, iluminación y renders de Alejandro. Se conservan como desconocidas las fuentes/licencias de esos recursos. | 3 |

Las cifras son archivos únicos del paquete. La portada y algunas vistas se reutilizan en la galería, sin duplicar archivos. Se conserva el enlace proporcionado por el autor a `https://sketchfab.com/Aledesign/models`.

No se atribuyen autoría de Star Trek, desarrollo del juego, ilustraciones de referencia o muebles de terceros a Alejandro. Tampoco se presentan Supremacy como terminado ni Casa como un encargo arquitectónico. No se inventaron años o meses; `timeline` permanece sin fecha confirmada. La fecha editorial de publicación se asignará al aplicar una publicación autorizada, separada de la fecha del trabajo.

## Revisión local

- BOTF: `http://localhost:4322/revision/proyectos/botf` y `/revision/proyectos/en/botf`.
- Supremacy: `http://localhost:4322/revision/proyectos/supremacy` y `/revision/proyectos/en/supremacy`.
- Casa: `http://localhost:4322/revision/proyectos/casa` y `/revision/proyectos/en/casa`.

Estas rutas son de revisión DEV/noindex; no son páginas publicadas. La preparación usa los campos compartidos `image`, `stack`, `locales.es/en`, `imageAlt`, `imageCaption`, `imageCredit`, `contentBlocks`, `gallery.layout`, `href` y `linkLabel`. No se duplicaron documentos por idioma.

## Preparación y controles

Paquete de origen actualizado: `.e2e/article-releases/pending-2026-10-20T14-54-31-614Z/`, preparado únicamente con `--batches=community-3d`. Se leyó el contenido actual de las fichas y se conservaron originales; no se volvió a ejecutar un intake antiguo sobre datos de Tina.

Lectura de fuentes/diff y preparación de archivos únicamente. Sin build, pruebas, tipos, lint, e2e, capturas o navegador de diagnóstico. No se inició Tina ni se hizo commit/push/despliegue. Apertura/guardado en Tina y comportamiento visual no comprobados en esta tanda.

Siguiente paso concreto propuesto: autorizar una excepción a AGENTS.md para ejecutar una sola vez `npx.cmd astro build` con el Tina existente en 4002, después de aplicar estado published y fecha editorial a estas tres fichas; si pasa, commit/push/publicación selectivos de los tres MDX y sus 30 medios. Si falla, registrar y entregar sin repetir ni sustituir el control.

OdontoPro y UseOdontoPro continúan fuera de esta tanda por la revisión legal de backups. Los demás artículos también permanecen locales. El OpenSpec completo sigue abierto.
