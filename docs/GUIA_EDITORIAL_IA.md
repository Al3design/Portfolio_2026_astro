# Guía editorial para IA: portfolio y Shop 3D

Protocolo de alta, edición y publicación de contenido, aplicable también a una IA local. Leer antes de redactar, cargar imágenes o crear documentos. El contrato se contrastó con el código del checkout el **02/11/2026**. Si cambia el código, revisar las fuentes indicadas y actualizar esta guía conjuntamente; los reportes históricos no sustituyen el contrato actual.

> Estado al 03/11: `alta-piezas-shop-desde-tina` incluye selección y fotos nuevas; Tina regenerado, contratos 6/6 y build Cloud/artefacto sin errores en Preview del candidato `df001b1`. La rama Cloud fue reindexada. La nota interna Cloud se guardó/reabrió y restauró; la carga asistida, alta y selección locales también se comprobaron y restauraron. Esto no acredita carga/alta/selección en Cloud. Producción conserva el flujo publicado anterior. El CSS posterior a ese candidato sigue sin publicar; builds y publicación quedan para el final. Ver los reportes enlazados abajo. No repetir controles completados ni usar un admin generado anterior como prueba del formulario.

## 1. Alcance, permisos y continuidad

Continuidad Cloud del 03/11: nota interna del árbol guardada/reabierta y restaurada/reabierta, formulario limpio (c0d8fec/fb5b4a9). Esto actualiza el pendiente de persistencia inicial: no acredita upload nuevo/alta/selección. Ver `HANDOFF-2026-11-03-tina-cloud-admin.md`; no repetir el recorrido ni sincronizar ciegamente el checkout con esos commits remotos.

Continuidad local del 03/11: carga de foto asistida por el usuario, ficha temporal guardada/reabierta, selección en catálogo/portada/novedades observada y restauración completa de fuentes. Ver `../openspec/changes/alta-piezas-shop-desde-tina/report-2026-11-03-local-upload.md`. El 04/11 se corrigió el párrafo vacío que marcaba `Body` como editado. Alejandro confirmó la apertura de Ingest Monitor dentro de Tina en Chrome normal. La transición ES/EN sigue pendiente de esa observación. Ver `../openspec/changes/tema-admin-tina/article-audit-2026-11-03.md`.

## Orden de los artículos

`order` define el orden general ascendente del portfolio. Un valor ausente equivale a cero. `categoryOrders` es una lista opcional de objetos con `category` y `order`, con una entrada por categoría. La categoría debe figurar también en `categories`. Una categoría sin posición propia hereda el orden general. El comparador compartido de `src/lib/project-order.ts` se aplica antes de elegir la tarjeta destacada y paginar en `ClientHome.tsx`. El campo es compartido entre ES/EN.

En Portfolio Overview, elegir «Portfolio completo» o una categoría, cambiar el número de la fila y pulsar «Guardar orden». Vaciar el orden general guarda cero. Vaciar una posición de categoría retira esa excepción y vuelve a la herencia. Un empate conserva el orden de entrada del listado. La posición expresa prioridad visual y la fecha sigue en `date`.

El formulario de cada artículo expone también «Orden general» y «Orden por categoría» en `tina/config.ts`. Actualizar conjuntamente `src/content.config.ts`, `src/lib/project-locales.ts`, `tina/dashboard/dashboardQuery.ts` y la plantilla bilingüe si cambia este contrato. El dashboard usa el cliente de la sesión activa de Tina. Guardar en Cloud puede generar commits y despliegues según la rama. La relectura previa detecta cambios anteriores al guardado, aunque otro editor puede escribir entre lectura y mutación. Coordinar las sesiones que editan el mismo artículo.

Para guardar desde un dashboard, releer `_values` completo y conservar título, cuerpo, bloques ES/EN y demás campos. `tina/dashboard/projectOrderValues.ts` modifica la posición solicitada; `ProjectOrderEditor.tsx` transforma ese documento con `TinaAdminApi.schema.transformPayload` y usa `TinaAdminApi.updateDocument`, igual que el formulario nativo. No enviar solo `order` o `categoryOrders`: la mutación no es un patch y puede reemplazar la ficha. Rechazar una lectura sin título/cuerpo y posiciones mal formadas antes de escribir.

Estado al 06/11. La prueba del envío parcial falló y se restauró el archivo original exacto. La corrección con documento completo pasó contratos 6/6, Astro sin errores ni warnings y el recorrido local de orden general/categoría, con reapertura y restauración exacta. Tina puede normalizar formato Markdown y fechas al guardar, igual que el formulario nativo. No se comprobó persistencia Cloud de este nuevo control ni se publicó. Detalle en `../openspec/changes/orden-editorial-dashboard/review-2026-11-06.md`. La consulta de Vercel y el bundle público confirman que producción todavía sirve Tina 3.8.1 del 30/10.

## Presentación de la home en móvil

`src/components/ClientHome.tsx` conserva los campos Tina `mission`, `status`, `location` y `timezone`. `src/styles/pages/_home.module.scss` los oculta bajo `md` (48em) para priorizar los proyectos, manteniendo filtros, exportación y selector de vista. El contenedor específico de home reserva espacio para el topbar fijo mediante `layout(nav-height)` y tokens `size()`. No corregir este espacio con cambios globales que afecten otras páginas. La edición cambia los valores; la visibilidad por dispositivo pertenece al módulo de estilos.

1. Leer `AGENTS.md`, `openspec/config.yaml` y el handoff vigente. Distinguir preparar, editar, revisar, subir a Preview y publicar en producción.
2. Leer rama activa, HEAD, índice y cambios locales. No crear branches/worktrees ni cambiar de rama automáticamente. Nunca usar `git add .` o desplegar un checkout con trabajo ajeno.
3. Releer el documento antes de editarlo: Tina Cloud puede haber generado commits desde el último turno. No sobrescribir ediciones del usuario ni restaurar una copia histórica encima.
4. Reunir datos y medios confirmados. Registrar pendientes; no inventar fechas, clientes, resultados, medidas, materiales, stock o plazos. Avanzar como borrador y preguntar solo lo necesario para destrabarlo.
5. Respetar la política de roles y controles de `AGENTS.md`: no ejecutar suites, build, tipos, lint, e2e o capturas por cada tanda. Los criterios de esta guía no son una orden de ejecutarlos. Comando expreso una vez o verificación final del orquestador, según esa política.

La guía no autoriza publicaciones, mensajes, cambios de permisos, indexación de buscadores, pagos ni envíos. Las plantillas de `docs/templates` son borradores para completar, no contenido aprobado.

## 2. Redacción y diseño

- Español rioplatense natural, coloquial y profesional. Frases concretas y hechos comprobados; sin grandilocuencia ni narración al visitante de «Alejandro dijo/confirmó», decisiones internas o nombres provisionales.
- Artículos: contexto, problema, participación real, decisiones, proceso y resultado cuando se conozcan. Primera persona para trabajo propio confirmado; no atribuirse trabajo ajeno.
- Shop: descripción breve de la pieza y su uso observado. El detalle vive en la ficha, no en texto largo bajo cada miniatura.
- ES/EN deben conservar hechos y alcance; no traducir inventando información ni usar el otro idioma como fallback silencioso. Completar la traducción antes de ofrecerla.
- El alt describe lo visual relevante; el epígrafe aporta contexto. No usar nombres de archivo como alt ni convertirlo en una lista de palabras clave.
- `//` conserva el acento de títulos mediante los helpers existentes. Enlaces, etiquetas y alt deben ser texto corrido sin ese marcador.
- Reutilizar plantillas, componentes, espacios, anchos, tipografías, tokens y temas. No crear otro diseño para incorporar un artículo o una pieza.
- Las notas privadas no son contenido público. `collapsed` en un bloque solo lo pliega: **sigue publicándose** con el artículo.

## 3. Fuentes de verdad

| Contenido | Documento editable | Esquema, contrato y renderizado |
| --- | --- | --- |
| Artículo/caso del portfolio, el «blog» actual | `src/content/projects/<slug>.mdx` | `projects` en `tina/config.ts`; `tina/article-locales.ts`, `tina/article-blocks.ts`; contratos `src/lib/project-locales.ts`, `article-blocks.ts`; fuente/guard `project-editorial.ts`; `ProjectDocument.astro` → `ProjectDetailLayout.tsx` → `ProjectDetailView.tsx` / `ArticleBlocks.tsx` |
| Pieza Shop 3D | `src/editorial/shop-products/<slug>.json` | `tina/shop-products.ts` (`shopProduct`); `src/lib/shop-editorial.ts`, `shop-catalogue.ts`; `ShopLanding.astro`, `ShopCollection.astro`, `ShopCatalogue.astro` |
| Selección pública/novedades/portada Shop | `src/editorial/shop-catalogue/catalogue.json` | Colección `shopCatalogue` en `tina/shop-catalogue.ts`; referencias ordenadas, hasta tres novedades y portada. Módulo virtual genera imports solo de las fotos seleccionadas; `shop-release.ts` adapta los consumidores. |
| Filamentos/paletas | `src/data/bambu-filaments.json` | `src/lib/shop-colours.ts`, `ShopPalette.astro` y campos `palette` de Tina |
| Metadatos sociales | Título, descripción y medio del documento | `MainLayout.astro`, `src/lib/social-images.ts`; Shop añade `shop-social-image.ts`, `shop-origin.ts`, `ShopShare.astro` |
| RSS | Derivado del contenido, no ítems cargados a mano | Portfolio `src/pages/rss.xml.ts`; Shop `src/lib/shop-feed.ts` y endpoints ES/EN |

No inventar otra colección o motor de «blog» para un alta del portfolio: actualmente se usa `projects`. Un blog de otro tipo requiere un cambio de producto separado.

## 4. Crear un artículo

### Documento y rutas

1. Copiar [la plantilla bilingüe](templates/articulo-bilingue.mdx) a `src/content/projects/<slug>.mdx`. Slug estable, minúsculas y guiones, sin acentos. No renombrar URLs publicadas sin plan de redirección.
2. Mantener `publicationStatus: draft`, `contentFormat: bilingual` e idioma principal `language: es` o `en`. `docs/template-project.mdx` es una plantilla legacy; no usarla como base de un alta bilingüe nueva.
3. Completar los datos compartidos y `locales.es/en`. En `bilingual`, escribir el cuerpo después del frontmatter **no reemplaza** a `contentBlocks`: la plantilla muestra los bloques del idioma activo.
4. Revisión: `/revision/proyectos/<slug>` para idioma principal; `/revision/proyectos/<idioma-secundario>/<slug>` para el otro. Público: `/projects/<slug>` y `/projects/<idioma-secundario>/<slug>`. Usar `projectUrl`, no asumir que EN siempre es secundario.
5. `src/pages/projects/[...slug].astro` genera las páginas del documento publicado. No crear un `.astro` por artículo ni duplicar el archivo para traducir un documento `bilingual`.

### Variables y correspondencia

| Campo | Uso y regla |
| --- | --- |
| `title` raíz | Nombre interno/lista Tina. En `bilingual` no sustituye a los títulos localizados. |
| `publicationStatus` | `draft` / `published`: control editorial. No es el estado real del trabajo. Documentos legacy sin este campo tienen compatibilidad histórica; no copiar esa omisión a un alta nueva. |
| `contentFormat` | `bilingual` nuevo; `blocks` y `legacy` conservados para anteriores. No convertir un existente sin migrar su contenido. |
| `language` | Idioma principal y ruta sin prefijo. No ordena traducción automática. |
| `locales.es/en.title` | Título público. Un idioma se considera presente cuando tiene título: no agregar únicamente el título de una traducción incompleta. |
| `locales.es/en.description` | Resumen de ficha/metadatos; las listas usan la versión del idioma principal mediante los helpers existentes. |
| `locales.es/en.type`, `role`, `client`, `timeline`, `status` | Tipo de trabajo, participación, cliente/institución, duración visible y estado del trabajo. No duplicar esos datos como bloques para simular otra ficha técnica. |
| `image` | Portada compartida y base de metadatos sociales. Ruta pública `/assets/...` o HTTPS aprobada. Revisar `social-images.ts` si tiene una composición social particular. |
| `imagePortrait` | Alternativa vertical de card. La home usa `imagePortrait ?? image`; no reemplaza la portada del artículo. |
| `locales.es/en.imageAlt`, `imageCaption`, `imageCredit` | Alt, epígrafe y crédito de portada por idioma. En bilingüe, completar los localizados, no solo los equivalentes de raíz. Créditos reales cuando correspondan; no inventarlos. |
| `locales.es/en.contentBlocks[]` | Cuerpo público y orden por idioma. Reutilizar referencias a medios compartidos, no duplicar binarios. |
| `date`, `year`, `order` | Fecha real válida, período legible y orden editorial. `date` también alimenta orden/RSS. Si falta una fecha, conservar draft; no inventarla para superar el guard. |
| `categories[]` | Valores de `PROJECT_CATEGORIES` en `src/lib/categories.ts`, compartidos por Tina/filtros. No usar categorías viejas de otra plantilla ni las de Shop. |
| `stack[]`, `codeSnippet` | Herramientas/tecnologías y fragmento representativo cuando correspondan al trabajo. |
| `showInPortfolio` | Visibilidad junto con `projectIsPublished`. No publica por sí solo un draft. Afecta listados y generación de rutas. |
| `showInResume`, `points[]` | Experiencia en CV y sus puntos. Un artículo dentro de un empleo existente normalmente mantiene `showInResume: false`. |
| `experienceSlug` | Slug de experiencia existente y visible en Resume. Conecta «Ver experiencia» y relación inversa del CV; no crear otro empleo ni enlazarse consigo mismo. |
| `translationKey` | Compatibilidad de documentos separados por idioma; no obliga a duplicar un documento bilingüe. |
| `body`, textos localizables de raíz, `_template` raíz | Compatibilidad legacy/MDX o dato existente. No inventar un template de página en `projects`, ni usar body legacy en lugar de bloques bilingües. |

### Bloques admitidos

Persistir `_template`; `__typename` viene de GraphQL, no es dato que deba escribirse a mano. Los campos compartidos entre templates deben mantener tipo y nulabilidad compatibles.

| `_template` | Campos |
| --- | --- |
| `section` | `title`, `text` obligatorios; opcionales `bullets[]`, `collapsed`, `href`, `linkLabel`. Texto plano y párrafos separados por línea vacía, sin HTML. |
| `image` | `src`, `alt` obligatorios; opcionales `caption`, `credit`, `href`, `linkLabel`. No necesita H2 artificial. |
| `gallery` | `title`, `images[]`, cada imagen con el contrato anterior; `layout`: `grid`, `columns` o `previews`. Columnas conserva imágenes largas; previews muestra miniaturas 3:4 con acceso al original completo. No deformar originales. |
| `video` | `title`, `src` directo MP4/WebM, `transcript`, `hasAudio`; opcionales `poster`, `caption`, `credit`, `captions`, `captionLanguage`. Información sonora significativa exige VTT antes de publicar. YouTube no es un MP4: usar el enlace admitido o plantear otra implementación, no pegar iframe en texto. |
| `cards` | `title`, `cards[]` con `title`, `text`, `tags[]` opcionales. Reutiliza cards/pills existentes dentro del artículo. |

### Cómo llegan a la plantilla

- `ProjectDocument.astro` lee fuente/localización y `client.queries.projects({ relativePath })`; pasa `query`, `variables`, `data` a `useTina` en `ProjectDetailLayout`.
- La edición combina `{ ...project, ...tinaData.projects }`: Tina tiene prioridad, incluso valores vacíos. `localizedProject` elige el idioma; `ArticleBlocks` renderiza sus bloques. No añadir otro estado React con copias de estos datos.
- Mantener `tinaField` para edición visual y `articleBlocksMarkdown` para exportación. Un campo nuevo en Tina no se refleja solo por existir en el formulario.
- `projectIsPublished` es el guard del contenido estructurado: estado explícito, fecha, idiomas, bloques y medios válidos. Home/archive/Resume/rutas/RSS lo consultan, con sus condiciones de visibilidad. No omitirlo para publicar.
- Las rutas, metadatos, listas, relación inversa del CV y RSS necesitan generación/despliegue. Un cambio visible en el iframe no prueba que esos consumidores ya estén actualizados.
- Si una selección del editor solo devuelve `_sys`, mantener `projectEditorRoute` y su fallback al formulario nativo. No suponer visibilidad por campos ausentes ni crear rutas públicas para editar un draft.

## 5. Crear una pieza de Shop 3D

Copiar [la plantilla Shop](templates/pieza-shop.json) a `src/editorial/shop-products/<slug>.json`. El slug deriva del nombre del archivo, no de un campo nuevo `slug`.

### Variables y correspondencia

| Campo | Consumo actual |
| --- | --- |
| `title` | Identificador interno de Tina. |
| `locales.es/en.title`, `description` | Nombre y descripción de fichas, listas, metadatos y RSS. Completar ambos antes de seleccionar públicamente. |
| `status` | Solo `draft` / `review` editorial. **No filtra publicación**: manda `products` de la selección de catálogo. No inventar `published` ni asumir que volver a draft retira una pieza seleccionada. |
| `category` | `home`, `desk`, `organization` o `design`, desde `shopEditorialCategories`; etiqueta y filtros. |
| `productionMode` | `pending`, `stock`, `made-to-order`, `mixed`: organización interna, no contador de stock ni promesa de disponibilidad. |
| `productionNotes` | Interno. Fuera del DTO público, HTML, scripts, metadatos y RSS. |
| `details.<clave>.es/en` | Claves de `shopEditorialDetailKeys`: `price`, `material`, `dimensions`, `variants`, `care`, `availability`, `deliveryTime`, `included`. Omitir desconocidos; no usar `null`. |
| `palette[]` | `{ preset?, hex?, es?, en? }`. Preset = código exacto del catálogo Bambu, no familia. HEX manual `#RRGGBB` tiene prioridad; vacío usa preset. Un HEX inválido explícito se omite, no se reemplaza por otro tono. |
| `photographedColours[]` | Compatibilidad antigua. `palette` definida prevalece, incluso `[]`; no hace falta usarlo en altas nuevas. |
| `photos[]` | `sourcePath`, `kind: photo`, `altEs`, `altEn`; opcionales `image`, `captionEs`, `captionEn`. La primera foto determina miniatura, foto social y RSS: ordenar conscientemente. |
| `photos[].image` | Selector de medios Tina conectado al nuevo lector: usar `/assets/shop/<slug>/<archivo>.jpg` (también JPEG/PNG/WebP). Tiene prioridad sobre `sourcePath`. El archivo subido es público aunque la pieza no esté seleccionada. Una ruta explícita inválida falla sin sustituirla por el original. |
| `photos[].captionEs/En` | Revisión local, con fallback a alt. La galería pública actualmente muestra el alt localizado como figcaption, no estos campos. No prometer otra correspondencia sin implementarla. |

Condiciones actuales: precio a consultar siempre; entrega según stock y a confirmar; solo impresión 3D incluida, resto decorativo; stock y pedidos combinados y colores a consultar. Medidas opcionales. No mostrar duración de impresión como entrega. PLA está confirmado para las piezas existentes: confirmar el material de una nueva, sin deducirlo de su foto o preset.

`ShopCatalogue.astro` fija precio/entrega/inclusión globales; editar esos textos en Tina no cambia esas constantes de la plantilla. Los restantes detalles visibles vienen del DTO. Un alta no autoriza precios numéricos, carrito, pagos ni contratación de envíos.

No reintroducir en Shop campos/textos de autoría, licencias, permisos, condiciones de uso o enlace al modelo original, incluidos `rightsStatus`, `rightsSource`, `rightsNotes` y crédito de foto eliminados. No confundir esta decisión con los campos de crédito existentes en los artículos del portfolio.

### Fotos, revisión y selección pública

1. Crear la ficha en Store 3D · borradores de piezas, con nombre de archivo estable en minúsculas y guiones. Completar ES/EN, categoría, material confirmado, condiciones y alt. Guardar/reabrir no agrega la pieza al catálogo.
2. Para fotos nuevas desde Tina, crear la carpeta `shop/<slug>` dentro del gestor y subir JPG/JPEG/PNG/WebP con nombres ASCII, números, guiones o guion bajo. Guardar la ruta `/assets/shop/...` en `photos[].image` y `kind: photo`; ordenar conscientemente la primera foto. Los uploads son públicos por sí mismos. Si el original debe permanecer privado, incorporarlo fuera de public como en el paso siguiente.
3. Compatibilidad: los originales existentes siguen en `src/editorial/shop-assets/intake-AAAA-MM-DD/<archivo>.jpg` y `sourcePath`. No se mueven ni necesitan rellenar `image`. Para otro original privado, copiarlo a esa estructura y referenciarlo; no hace falta editar un import.
4. Revisar en desarrollo `/revision/tienda/es/<slug>` o EN, también con `?catalog=real&piece=<slug>`. Ver las fotos y comprobar datos. No habilitar JSON/manifiestos ni rutas editoriales en producción.
5. Cuando el contenido esté aprobado y la publicación autorizada, abrir **Store 3D · selección pública**. Agregar un elemento en `products` y elegir la pieza en su campo `product`, en el orden deseado. `latest` contiene hasta tres elementos del mismo formato con piezas ya seleccionadas; `hero` es una referencia única y debe pertenecer al catálogo. En JSON cada elemento es `{ "product": "src/editorial/shop-products/<slug>.json" }`; no usar listas de strings ni `list: true` directamente sobre un campo Tina `reference`. No publicar todos los borradores por presencia en disco. Otro color del mismo modelo no requiere otro producto.
6. El módulo virtual `virtual:shop-catalogue` deriva los imports de las fotos seleccionadas. Valida referencias únicas, subconjuntos, existencia de archivos y confinamiento de rutas/symlinks. Los uploads se copian a caché ignorada `.astro/shop-media/` para que Astro produzca derivados, sin mover los originales privados a public. Una referencia inválida detiene la generación.
7. Las rutas ES/EN, listas, portada, social y RSS consumen la misma selección y el DTO público. No crear páginas individuales ni editar slugs/imports en código. El checker y las expectativas públicas leen la selección; conservar pruebas de privacidad y medios, sin ajustar resultados para ocultar errores.

**Evidencia local del 02/11:** Tina regenerado y recorrido de una ficha temporal creado/guardado/reabierto con original existente, título cambiado sin guardar en Live Preview, exclusión del catálogo de ocho piezas y retiro del temporal. No acredita upload nuevo, todos los campos/idiomas, recarga de selección o build/artefacto: siguen pendientes. Antes de usar Cloud, coordinar esquema e índice correctos. Guardar selección o contenido ya seleccionado en `main` puede generar un deploy automático; respetar autorización de publicación.

### Live Preview de piezas en Tina

En local, abrir **Store 3D · borradores de piezas** y hacer clic en una ficha guardada. `ui.router` usa `shopEditorRoute` para abrir `/revision/tienda/es/<slug>`. `ShopReview.astro` consulta `client.queries.shopProduct` y pasa query/variables/data a `ShopProductLivePreview`, que usa `useTina` y anotaciones `tinaField`.

La ficha reutiliza `ShopProductView`, `ShopPaletteView` y `ShopWhatsAppButton`, también usados en las fichas públicas sin hidratación. La galería pública mantiene derivados Astro; la local usa URLs de revisión o uploads para reflejar cambios de formulario sin recompilar cada pulsación. No duplicar estados React ni recrear una plantilla distinta. El nombre visible está en `locales.es/en.title`; `title` raíz sigue siendo interno.

**Selección pública** es configuración y conserva su formulario nativo; no ofrece Live Preview de portada/filtros. El router visual nuevo es local: fuera de localhost mantiene formulario nativo hasta implementar y autorizar el entorno desplegado correspondiente. Las notas internas se editan en el formulario; no deben agregarse a la plantilla pública ni serializarse en sus props. Solo la ruta dev consulta el documento editorial completo.

### Plantilla pública y difusión

- Mantener encabezado/pie, tema claro inicial, anchos, espacios y filtros. Listado simple con foto, nombre, categoría, paleta y enlace, sin recuadros o texto largo nuevos.
- Ficha: nombre/descripción → galería completa → paleta/precio/entrega/inclusión/consulta → detalles → compartir. Consulta general: ambos textos antes del botón.
- Galería con ancho disponible y altura natural, sin franjas por altura fija/contain ni recorte del objeto para arreglar su contenedor.
- Muestras con HEX real y borde interior aclarado; el borde no cambia el dato. Referencias Bambu PLA/PETG no acreditan material, stock ni acabado exacto en pantalla. No sincronizar catálogos remotos por cada pieza.
- `ShopWhatsAppLink`: botón hueco con icono; destino/mensaje centralizados en `shop-inquiry.ts`. No cambiar el número ni enviar mensajes durante preparación.
- `ShopShare` es distinto de consultar: comparte el enlace de pieza sin destinatario. Conservar copiar/fallback y compartir nativo según soporte; no simular publicación automática a Instagram.
- `shop-social-image.ts` deriva JPEG 1200×630 de primera foto para OG/Twitter/RSS, separado de galería. `shop-origin.ts` elige origen local/Preview/producción; no fijar URLs temporales dentro del contenido.
- Feeds `/tienda/rss.xml`, `/en/shop-3d/rss.xml`: selección pública y GUID por enlace, sin fechas inventadas. Icono en topbar de escritorio y menú móvil según idioma. Portfolio conserva `/rss.xml`.

## 6. Cargar y referenciar medios

El control asistido del 03/11 acreditó alta/reapertura con foto subida por el usuario y selección/hero/novedad locales con derivados cargados, seguido de restauración. La limitación de filechooser automatizado permanece; detalle en report-2026-11-03-local-upload.md. No extrapolar a upload/selección Cloud ni a build/RSS nuevo.

Un timeout del selector no demuestra que el permiso de archivos esté desactivado. Si persiste tras habilitarlo, registrar el bloqueo y distinguir carga manual asistida de automatización comprobada; no pedir reiteradamente el mismo ajuste ni copiar medios por otro canal para declarar aprobado el gestor.

Para acreditar una carga desde Tina, usar el selector de su gestor: crear/abrir `shop`, subir foto autorizada, seleccionarla y completar tipo/alt ES/EN. Copiar un archivo por consola no demuestra que el upload del CMS funcione. En automatización Chrome, esperar `filechooser` antes del click; si no aparece, detener el control y revisar el soporte de archivos de la extensión. No cambiar permisos por rutina ni simular una carga con APIs internas. En pruebas reversibles, aislar ficha/carpeta temporales, preservar selección original y restaurarla antes de retirar temporales. Los archivos en `public/assets` son públicos aunque la ficha sea draft. Registro de un bloqueo de selector, sin datos persistidos: `openspec/changes/alta-piezas-shop-desde-tina/report-2026-11-03-local-upload.md`.

| Uso | Disco → referencia |
| --- | --- |
| Artículo público | `public/assets/projects/<slug>/...` → `/assets/projects/<slug>/...` en Tina/MDX, sin prefijo `public`. Media manager: `mediaRoot: assets`, `publicFolder: public`. |
| Artículo aún no aprobado | Fuera de `public`; usar revisión local `/revision/media/...` cuando corresponda a sus handlers existentes. Reemplazar referencias locales por medios públicos aprobados antes de publicar. |
| Shop original | Intake fuera de public + `sourcePath`, o upload público `/assets/shop/...` en `image`. Selección explícita y generación de imports; el path editorial no es la URL pública. |
| Tarjeta social | Reutilizar `social-images.ts` o derivación Shop. No sobrescribir portada/original ni el campo Tina para cambiar solo la gráfica social. |

Ver cada imagen antes de describirla/asignarla. Conservar originales y proporciones; distinguir portada, card vertical y miniatura. Reutilizar archivos entre idiomas. No presentar renders o imágenes generadas como impresiones fotografiadas existentes.

Para cargar desde Tina: abrir `/admin/index.html` en el entorno correcto, elegir Projects o Store 3D y el documento por su archivo/slug. En artículos, seleccionar o subir el medio desde el campo `image`, `imagePortrait` o `src` de su bloque, y completar alt/epígrafe dentro del idioma correspondiente. Si se incorpora desde disco, comprobar que la ruta guardada coincide con el archivo público, respetando mayúsculas/minúsculas también en Linux. Optimizar los derivados para web sin destruir el original ni suponer que subir un archivo ya lo optimiza.

En Shop, `photos[].image` se conecta al catálogo mediante la selección anterior; `sourcePath` mantiene compatibilidad para originales privados. No hace falta completar ambos campos. Ejemplos de estructura una vez que existan los archivos:

```yaml
# Bloque de artículo dentro de locales.es.contentBlocks:
- _template: image
  src: /assets/projects/mi-articulo/detalle.webp
  alt: Descripción visual concreta de la imagen aprobada.
  caption: Contexto breve de esa imagen.
```

```json
{
  "sourcePath": "src/editorial/shop-assets/intake-2026-11-02/foto-01.jpg",
  "kind": "photo",
  "altEs": "Descripción visual concreta de la pieza fotografiada.",
  "altEn": "A concrete visual description of the photographed piece."
}
```

Son referencias ilustrativas, no archivos que ya existan ni productos aprobados. Elegir la carpeta de intake real del lote; esa fecha no representa la fecha de impresión o publicación de la pieza.

Un medio en `public` puede servirse aunque su artículo esté en draft: borrador no significa archivo privado. Revisar datos personales/metadatos antes de publicar derivados. Si falta un original, pedirlo; no depender permanentemente de Downloads, Temp, portapapeles o una ruta absoluta del equipo.

## 7. Si se necesita un campo nuevo

El alta usa los campos existentes. Para una ampliación autorizada:

1. Definir nombre, tipo, obligatoriedad, idioma, vacío y visibilidad. Distinguir dato editorial, configuración comercial y dato derivado.
2. Artículo: conectar Tina (`config`, `article-locales`, `article-blocks`), contrato (`project-locales`, `article-blocks`), `content.config.ts`, guard/localización, renderer, `tinaField` y consumidores de listas/metadatos/Markdown/RSS. Mantener nulabilidad GraphQL compatible entre templates.
3. Shop: conectar `shop-editorial.ts`, `tina/shop-products.ts`, proyección `shop-catalogue.ts` solo si es público, revisión, renderer y social/RSS si corresponde. Los campos internos siguen fuera del DTO.
4. Contratos/constantes compartidos en `src/lib` o `src/data`; **no importar `tina/config.ts` desde React cliente**.
5. Metadatos personalizados de proyectos: usar fuente raw con `gray-matter` y helpers existentes. No asumir `mod.frontmatter` ni que `entry.data` ya exponga un campo nuevo. Normalizar slugs a minúsculas; soportar CRLF.
6. Regenerar Tina por el flujo habitual cuando corresponda y esté autorizado. No editar `tina/__generated__`, `public/admin` o `tina-lock.json` a mano. Reutilizar el servidor existente, sin duplicar Tina en puertos ocupados.
7. Ante schema mismatch, comprobar commit/rama/lock/índice correctos. Reindexar la rama dentro del alcance autorizado; no omitir comparación de esquema ni cambiar secretos para forzar verde. No guardar con un admin de Preview viejo y esquema distinto.

## 8. Preparación, revisión y publicación

1. **Preparado:** draft, hechos y medios incorporados, campos conectados y pendientes explícitos. No equivale a público ni verificado.
2. **Revisado:** diff, idiomas, orden, alt y selección. Persistencia guardar/reabrir solo en recorrido autorizado; restaurar valores si el control era temporal. Ver iframe no prueba el sitio desplegado.
3. **Candidato:** lista exacta de archivos/medios, rama/HEAD y datos públicos. Excluir notas, manifests, logs, `.env`, artefactos y cambios ajenos. Cambio de schema incluye fuentes y lock generado, sin alterar otras colecciones.
4. **Preview autorizada:** commit/push selectivos, proyecto correcto y un build por candidato. Registrar URL/resultados. No repetir builds verdes sin archivos nuevos o duda concreta. Preview protegida no acredita acceso de rastreadores de WhatsApp/lectores externos.
5. **Cierre del alcance:** verificación final del orquestador según `AGENTS.md`, sin desactivar controles. Registrar comandos/SHA/resultados/límites; no extender evidencia verde de otro SHA.
6. **Producción autorizada:** aprobación del resultado concreto. Permiso de Preview no equivale a producción. Usar PR/flujo del repo, conservar rama local/cambios ajenos y coordinar índice Tina destino si cambió esquema. No desplegar checkout sucio.
7. **Evidencia pública:** despliegue Ready, artículo/pieza/imagen social sin cookies, feeds/enlaces correctos y rutas editoriales privadas. No afirmar envío real, historia de Instagram o suscripción guardada por haber leído un enlace.

Destino conocido: Vercel, equipo `aledesign-projects`, proyecto `portfolio-2026-astro`, dominio `al3design.dev`. Verificar vinculación vigente antes de publicar. El `noindex` de Shop es una decisión existente: una publicación no autoriza cambiar indexación o sitemap por su cuenta.

**Guardar en Tina Cloud puede ser una publicación indirecta:** sobre `main`, editar un artículo ya publicado o una pieza ya seleccionada puede generar commit y build de producción automáticamente. No hacer una prueba de guardado sobre contenido en vivo por considerar que «solo es el formulario». Confirmar entorno, rama y alcance autorizado antes de guardar. En una pieza seleccionada, su `status: draft` no bloquea ese despliegue.

## 9. Handoff obligatorio

Dejar pedido/alcance, slug/colección/idiomas, fuente y rutas; datos faltantes; tabla de medios (origen, destino, campo, alt, público/privado); campos modificados y consumidores; selección/fotos/novedades/portada Shop; rama/HEAD/archivos propios/cambios ajenos; commits/PR/despliegue si existen; controles realmente ejecutados con resultado y SHA.

Separar lectura de diff, auditoría visual, persistencia, build y producción. Incluir todos los frentes activos, no solo el último contenido. Un alta o release editorial no cierra por arrastre accesibilidad integral, comercio futuro u otros trabajos del OpenSpec.
