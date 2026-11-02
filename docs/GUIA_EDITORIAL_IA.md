# Guía editorial para IA: portfolio y Shop 3D

Protocolo de alta, edición y publicación de contenido, aplicable también a una IA local. Leer antes de redactar, cargar imágenes o crear documentos. El contrato se contrastó con el código del checkout el **02/11/2026**. Si cambia el código, revisar las fuentes indicadas y actualizar esta guía conjuntamente; los reportes históricos no sustituyen el contrato actual.

## 1. Alcance, permisos y continuidad

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
| Selección pública/novedades Shop | `src/data/shop-release.ts` | `shopCatalogueSlugs`, `shopLatestSlugs`; hoy no se editan desde Tina |
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
| `status` | Solo `draft` / `review` editorial. **No filtra publicación**: manda `shopCatalogueSlugs`. No inventar `published` ni asumir que volver a draft retira una pieza seleccionada. |
| `category` | `home`, `desk`, `organization` o `design`, desde `shopEditorialCategories`; etiqueta y filtros. |
| `productionMode` | `pending`, `stock`, `made-to-order`, `mixed`: organización interna, no contador de stock ni promesa de disponibilidad. |
| `productionNotes` | Interno. Fuera del DTO público, HTML, scripts, metadatos y RSS. |
| `details.<clave>.es/en` | Claves de `shopEditorialDetailKeys`: `price`, `material`, `dimensions`, `variants`, `care`, `availability`, `deliveryTime`, `included`. Omitir desconocidos; no usar `null`. |
| `palette[]` | `{ preset?, hex?, es?, en? }`. Preset = código exacto del catálogo Bambu, no familia. HEX manual `#RRGGBB` tiene prioridad; vacío usa preset. Un HEX inválido explícito se omite, no se reemplaza por otro tono. |
| `photographedColours[]` | Compatibilidad antigua. `palette` definida prevalece, incluso `[]`; no hace falta usarlo en altas nuevas. |
| `photos[]` | `sourcePath`, `kind: photo`, `altEs`, `altEn`; opcionales `image`, `captionEs`, `captionEn`. La primera foto determina miniatura, foto social y RSS: ordenar conscientemente. |
| `photos[].image` | Selector de medios Tina; **hoy no alimenta solo el catálogo público**, que usa `sourcePath` e imports autorizados. No afirmar que una subida al media manager ya está conectada. |
| `photos[].captionEs/En` | Revisión local, con fallback a alt. La galería pública actualmente muestra el alt localizado como figcaption, no estos campos. No prometer otra correspondencia sin implementarla. |

Condiciones actuales: precio a consultar siempre; entrega según stock y a confirmar; solo impresión 3D incluida, resto decorativo; stock y pedidos combinados y colores a consultar. Medidas opcionales. No mostrar duración de impresión como entrega. PLA está confirmado para las piezas existentes: confirmar el material de una nueva, sin deducirlo de su foto o preset.

`ShopCatalogue.astro` fija precio/entrega/inclusión globales; editar esos textos en Tina no cambia esas constantes de la plantilla. Los restantes detalles visibles vienen del DTO. Un alta no autoriza precios numéricos, carrito, pagos ni contratación de envíos.

No reintroducir en Shop campos/textos de autoría, licencias, permisos, condiciones de uso o enlace al modelo original, incluidos `rightsStatus`, `rightsSource`, `rightsNotes` y crédito de foto eliminados. No confundir esta decisión con los campos de crédito existentes en los artículos del portfolio.

### Fotos, revisión y selección pública

1. Incorporar originales aprobados fuera de `public`: `src/editorial/shop-assets/intake-AAAA-MM-DD/<archivo>.jpg`. Nombres permitidos: letras ASCII, números, guiones y guion bajo, sufijo `.jpg`. No renombrar medios existentes sin actualizar referencias.
2. Registrar ruta relativa completa en `sourcePath`, `kind: photo` y alt ES/EN. El catálogo actual no acepta renders ni otros formatos/rutas como fotografías de impresión real.
3. Revisar en desarrollo `/revision/tienda/es/<slug>` o `/revision/tienda/en/<slug>`. Alternativa `/tienda?catalog=real&piece=<slug>` / equivalente EN. Se leen borradores guardados del disco; no habilitar manifiestos/JSON mediante rutas de medios.
4. Para publicar una pieza aprobada, agregar cada foto al glob **literal** de `src/lib/shop-catalogue.ts`. No ampliarlo a toda la carpeta: incorporaría medios ajenos a la selección.
5. Agregar slug a `shopCatalogueSlugs` en `src/data/shop-release.ts`. Cambiar `shopLatestSlugs` solo para las tres novedades, en el orden elegido. Otro color del mismo modelo no crea automáticamente otro producto.
6. Adaptar expectativas de selección, fotos y categorías en `scripts/verify-shop-catalogue-artifact.mjs`, `tests/e2e/shop.e2e.ts` y `shop-review.e2e.ts`. Existen slugs/conteos explícitos de ocho piezas/29 fotos: son base histórica, no un límite ni motivo para excluir la nueva. Conservar validación de privacidad y medios; ajustar esperados al catálogo aprobado, no para ocultar un fallo.
7. `[slug].astro` ES/EN genera rutas desde `shopCatalogue()`; no crear páginas individuales. Mantener proyección de campos públicos, nunca serializar el JSON editorial completo al cliente.

**Límite actual:** el alta enteramente autónoma desde Tina, con nuevas fotos y publicación sin tocar selección/imports, no está implementada. Completar los pasos anteriores; no prometer esa automatización ni refactorizarla sin pedido aparte.

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

| Uso | Disco → referencia |
| --- | --- |
| Artículo público | `public/assets/projects/<slug>/...` → `/assets/projects/<slug>/...` en Tina/MDX, sin prefijo `public`. Media manager: `mediaRoot: assets`, `publicFolder: public`. |
| Artículo aún no aprobado | Fuera de `public`; usar revisión local `/revision/media/...` cuando corresponda a sus handlers existentes. Reemplazar referencias locales por medios públicos aprobados antes de publicar. |
| Shop original | Carpeta intake fuera de public + `sourcePath` + import literal/selección. El path editorial no es la URL pública. |
| Tarjeta social | Reutilizar `social-images.ts` o derivación Shop. No sobrescribir portada/original ni el campo Tina para cambiar solo la gráfica social. |

Ver cada imagen antes de describirla/asignarla. Conservar originales y proporciones; distinguir portada, card vertical y miniatura. Reutilizar archivos entre idiomas. No presentar renders o imágenes generadas como impresiones fotografiadas existentes.

Para cargar desde Tina: abrir `/admin/index.html` en el entorno correcto, elegir Projects o Store 3D y el documento por su archivo/slug. En artículos, seleccionar o subir el medio desde el campo `image`, `imagePortrait` o `src` de su bloque, y completar alt/epígrafe dentro del idioma correspondiente. Si se incorpora desde disco, comprobar que la ruta guardada coincide con el archivo público, respetando mayúsculas/minúsculas también en Linux. Optimizar los derivados para web sin destruir el original ni suponer que subir un archivo ya lo optimiza.

En Shop, el selector `photos[].image` es solo una parte del formulario: seguir el circuito `sourcePath`/imports/selección anterior. Ejemplos de estructura una vez que existan los archivos:

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

Dejar pedido/alcance, slug/colección/idiomas, fuente y rutas; datos faltantes; tabla de medios (origen, destino, campo, alt, público/privado); campos modificados y consumidores; selección/imports/novedades Shop; rama/HEAD/archivos propios/cambios ajenos; commits/PR/despliegue si existen; controles realmente ejecutados con resultado y SHA.

Separar lectura de diff, auditoría visual, persistencia, build y producción. Incluir todos los frentes activos, no solo el último contenido. Un alta o release editorial no cierra por arrastre accesibilidad integral, comercio futuro u otros trabajos del OpenSpec.
