# Artículos de portfolio en Tina

## Un documento por trabajo

La fuente editable es `src/content/projects/*.mdx`. Mundo y Toplomero ahora tienen un archivo cada uno: `mundo.mdx` y `toplomero.mdx`. Sus textos ES/EN están dentro del mismo documento. La instantánea de intake `src/editorial/academic-drafts.ts` no es la fuente editable.

La plantilla sigue siendo ProjectDetailView, con useTina en ProjectDetailLayout. ProjectDocument.astro ensambla tanto las fichas públicas como la revisión. ArticleBlocks reutiliza estilos y componentes de las fichas anteriores.

## Editar

Corrección del router de la lista: Tina entrega solo `_sys` al hacer clic. En loopback el editor dirige todos los documentos a su revisión local; fuera de local, si faltan datos para una preview, usa el formulario nativo. Accesos directos sin iframe: `/admin/index.html#/collections/edit/projects/~/mundo` y `/admin/index.html#/collections/edit/projects/~/toplomero`. El dashboard también enlaza a esos formularios.

1. Con el servidor habitual `npm run dev`, abrir `http://localhost:4322/admin/index.html` y la colección Projects.
2. Elegir Mundo o Toplomero. Ambos siguen en borrador.
3. Editar datos compartidos en la raíz: portada, imagen vertical para la card, categorías, herramientas, orden, fecha/año y visibilidad. No inventar fechas todavía desconocidas.
4. Dentro de **Textos por idioma**, abrir **Español** o **English**: título, resumen, tipo de trabajo, participación, cliente/institución, fecha/duración visible, estado real del trabajo, alt/epígrafe/crédito de portada y contenido por bloques.
5. El título raíz identifica el documento en la lista de Tina; cada idioma tiene su propio título visible. `//` sigue marcando el acento del título.

Formato nuevo: `bilingual`. Idioma principal: `es` en estos dos borradores. Cambiar la selección de idioma muestra el texto correspondiente; las traducciones son contenido editable, no traducción automática.

El schema nuevo debe regenerarse mediante Tina. No editar tina/__generated__ manualmente. Si el servidor que estaba abierto no toma el cambio, detener esa misma terminal con Ctrl+C y ejecutar npm run dev ahí; no iniciar un segundo Tina encima. La integración aún requiere verificación final de apertura/edición/guardado.

## Campos compartidos y traducciones

Portada, categorías, herramientas y estado de publicación se guardan una sola vez. Cada idioma tiene bloques independientes para permitir distinta redacción u orden. Imágenes y videos dentro de esos bloques pueden apuntar a los mismos archivos: se repiten referencias, no binarios.

Una traducción se ofrece cuando tiene un título. Si falta un texto en EN no se rellena silenciosamente con ES. Completar y aprobar todos los campos de cada idioma antes de publicar. Esto prepara los artículos bilingües; no traduce por sí solo todos los textos de la home, CV y archivo. Esas listas muestran una entrada por trabajo usando su idioma principal.

## Bloques de contenido

Se agregan y reordenan desde Contenido dentro del idioma:

| Bloque | Campos y presentación |
| --- | --- |
| Texto / sección | Título H2, párrafos separados por línea vacía, lista opcional; opción plegada para notas y pendientes |
| Imagen | Archivo, alt requerido, epígrafe y crédito; figure/figcaption. Enlace y texto del enlace opcionales para abrir el video o fuente original desde miniatura y epígrafe |
| Galería | Título y lista de imágenes con alt/epígrafe/crédito individuales. Distribución: grilla (predeterminada), columnas con imágenes enteras o vistas previas 3:4 de igual altura. Columnas se lee de arriba abajo por columna y puede dejar espacio al pie. Vistas previas recorta solo la presentación; el archivo completo permanece intacto y se abre en pestaña nueva |
| Video | Archivo MP4/WebM directo, poster, título, epígrafe, descripción/transcripción, información sonora, VTT e idioma, créditos; controles sin autoplay |
| Cards | Título de grupo y cards con título H3, texto y pills; mdx-card/mdx-grid y Tag existentes |

Los títulos son obligatorios en los bloques que los usan para mantener la misma nulabilidad GraphQL entre templates. El texto de los bloques es texto plano, sin escribir HTML. Los videos con información sonora necesitan subtítulos VTT antes de publicar; también deben revisarse la descripción visual, transcripción y derechos. Una URL de YouTube no es un archivo directo: este bloque no incorpora iframes automáticamente. Los campos por sí solos no certifican accesibilidad ni licencias.

## Rutas locales

- ES: `/revision/proyectos/mundo` y `/revision/proyectos/toplomero`.
- EN: `/revision/proyectos/en/mundo` y `/revision/proyectos/en/toplomero`.
- Los enlaces anteriores `/revision/es/mundo`, `/revision/en/mundo` y `/revision/proyectos/mundo-es` o `mundo-en` redirigen a las rutas nuevas, también para Toplomero.

Una vez aprobado y publicado un documento: `/projects/mundo` para el idioma principal y `/projects/en/mundo` para EN. Se generan dos rutas desde el mismo archivo, sin servidor de traducción. Las URLs de las fichas legacy se conservan.

## Publicación

La tarjeta Estado presenta el vínculo como una fila **VER EXPERIENCIA / EN RESUME**, sin subrayado y con la misma jerarquía de claves y valores que participación, fecha y cliente. Usa el campo compartido **Experiencia relacionada en Resume** (`experienceSlug`); no es un bloque ni una copia en Ficha técnica. El destino del artículo se deriva del documento actualizado por Tina, también durante la edición visual. El listado inverso en Resume se recalcula al recargar/generar esa página. Los títulos de esos enlaces se muestran como texto corrido, sin el salto/acento `//` reservado para encabezados.

Un proyecto realizado dentro de un empleo puede vincularse con **Experiencia relacionada en Resume**: usar el slug de la experiencia existente, por ejemplo `around`. La ficha enlaza a esa card del CV, y el CV lista sus proyectos relacionados. El artículo mantiene `showInResume: false` para no duplicar el empleo. El tipo de contratación (por ejemplo Fixed-term contract), el estado real del trabajo y el estado editorial borrador/publicado son conceptos separados. En local se pueden listar proyectos Draft; en producción solo se enlazan proyectos públicos. El vínculo se refleja también en Markdown.

publicationStatus es independiente del estado real del trabajo. draft queda fuera de home, archivo, CV, RSS y rutas públicas aunque Show in Portfolio esté activo. Las revisiones son DEV-only y noindex. Los documentos anteriores sin este campo conservan el comportamiento previo.

Para publicar: aprobar textos/medios/derechos, completar fecha válida y alt, y reemplazar las referencias `/revision/media/...` por archivos públicos autorizados. El guard recorre los idiomas presentes y comprueba datos esenciales, bloques conocidos y VTT si hay información sonora. No sustituye revisión editorial ni visual.

Guardar no convierte el sitio estático en edición pública en caliente: la publicación sigue requiriendo el flujo Git/despliegue autorizado. Los dos trabajos permanecen borradores; fechas, créditos y selección final de medios siguen pendientes.

## Compatibilidad

Las fichas existentes Around/Freelance mantienen modo legacy/MDX y su cuerpo anterior. El modo blocks de un solo idioma permanece para compatibilidad, pero el alta nueva usa bilingual. No cambiar formatos sin migrar el contenido.

El Markdown del artículo usa los bloques del idioma mostrado, incluidos listas, pills, epígrafes, créditos y descripciones. El cuerpo antiguo conserva su exportación MDX.

La migración `scripts/consolidate-academic-locales.mjs` leyó los cuatro documentos existentes, hizo copias exactas en `.e2e/migrations/bilingual-1792177334715/`, creó los dos reemplazos y retiró los cuatro anteriores. No vuelve a ejecutarse sobre documentos consolidados. El script inicial de intake preserva los archivos consolidados.

## Pendientes de cierre

Según AGENTS.md, sin suites ni capturas por tanda. Pendientes del orquestador: schema/queries, abrir/editar/guardar cada idioma en Tina, preview/exportaciones coincidentes, rutas/redirecciones, legacy, teclado/subtítulos y ausencia de borradores/medios locales en el build y RSS. Pruebas unitarias preparadas en tests/article-blocks.test.mjs y tests/project-locales.test.mjs, sin ejecutar. El error anterior de apertura en Tina no tiene causa confirmada ni se declara resuelto por consolidar los documentos.

## Metadatos al compartir articulos

ProjectDocument entrega la portada y su texto alternativo a MainLayout, que construye URL absoluta para OpenGraph/Twitter, titulo sin el marcador de estilo //, og:type article, canonical y alternates de idioma disponibles. Se reutilizan image/imageAlt/imageCaption/title y los enlaces de idiomas existentes. Los previews conservan noindex y no generan canonical o alternates publicos; sus medios locales se resuelven contra el origen de desarrollo. Estos cambios requieren control final antes de publicar una nueva tanda.

## Enlaces de referencia destacados — 2026-10-19

Los enlaces de secciones usan una accion visual compartida: globo para web, marca GitHub cuando el hostname del href corresponde a github.com, texto primario subrayado, fondo tenue y flecha externa. Mantienen apertura en otra pestana, nombre accesible con aviso, foco visible y adaptacion de texto en mobile. La eleccion del icono depende del enlace existente en Tina; no agrega campos ni modifica su esquema. Aplicable a GitCron, OdontoPau y futuras fichas ES/EN. Sin build, pruebas ni capturas por tanda.

## Paginacion de la home — 2026-10-20

La home presenta hasta tres proyectos por pagina: un destacado y dos tarjetas en CARDS, o tres entradas en LIST. Primero se aplica el filtro y luego se divide el resultado. Cambiar de filtro vuelve a la primera pagina; cambiar de layout conserva la pagina. La URL conserva `?page=N` para volver desde una ficha. La ultima pagina puede tener menos de tres proyectos.

No cambia el esquema de TinaCMS ni los documentos: se conserva el orden editorial existente y el guard de publicacion. Los nuevos proyectos publicados pasan a integrar las paginas en el siguiente build/despliegue. El limite de tres es una constante de interfaz, no un campo editable en Tina. La exportacion Markdown mantiene el catalogo publicado completo.

La paginacion se realiza en React: se renderiza el grupo visible, pero los metadatos del catalogo publicado siguen llegando completos como props. WebMCP admite una pagina opcional y devuelve ese mismo grupo de tres. Implementacion local revisada por lectura del diff; sin compilacion, pruebas ni inspeccion visual en esta tanda, conforme a AGENTS.md.
