# Apariencia del administrador Tina

## Alcance

Tema solicitado por Alejandro el 02/11/2026, inspirado en las referencias visuales de Payload: negro/grafito, Inter, controles sobrios e iconos de trazo. Es una personalización de Tina, sin migración ni plugin pago. No reproduce las funciones de Payload ni cambia estados editoriales, permisos o publicación.

`src/lib/admin-theme.ts` instala el stylesheet únicamente en rutas `/admin`. El CSS exige `body.tina-tailwind[data-al3-admin-theme="dark"]`; no debe importarse desde MainLayout ni agregarse al documento del iframe. El portfolio, Shop y sus previews mantienen sus propias fuentes/temas. `iframe { color-scheme: normal }` evita transmitir al preview la preferencia oscura del shell del CMS.

## Fuentes y archivos

Este es un sistema de tema propio, no una opción de apariencia nativa de Tina ni una migración a Payload. La fuente de verdad de su paleta es el bloque inicial de `public/admin-theme/admin.css`. Modificar ahí los tokens; no repartir hexadecimales nuevos entre componentes.

| Variables `--al3-admin-*` | Valor actual y función |
| --- | --- |
| `bg`, `panel`, `raised` | `#111214`, `#191b1e`, `#222529`: fondo, panel y controles elevados. |
| `hover`, `selected`, `edge` | `#2b2e34`, `#343842`, `#373b43`: interacción, selección y contornos. |
| `text`, `muted` | `#eceef2`, `#a6adb8`: texto principal y secundario. |
| `icon`, `icon-size`, `icon-stroke` | `#b8bec8`, `18px`, `1.75`: iconos neutros; avisos compactos conservan 13 px. |
| `accent`, `primary`, `primary-foreground` | `#c5cce0`, `#eceef2`, `#14161a`: acento y botón principal/contraste. |
| `success`, `success-bg` | `#91d8b3`, `#18352a`: éxito. |
| `warning`, `warning-bg` | `#efcb89`, `#382f20`: advertencia. |
| `danger`, `danger-bg` | `#f3a0aa`, `#382329`: error/peligro. |

El adaptador conecta estos tokens con `--tina-color-primary[-light/-dark]`, `--tina-color-grey-0..10`, `--tina-color-error[-light]`, `--tina-color-warning[-light]`, `--tina-color-success[-light]`, `--tina-color-indicator`, `--tina-font-family` y `--tina-radius-small/big` (4/6 px). Algunos tonos de la escala vendor siguen explícitos en ese bloque. Tina también trae utilidades y estilos inline: por eso existen reglas de compatibilidad debajo de los tokens; cambiar solo `--tina-*` no cubre todo el panel.

### Procedimiento para modificar el sistema

1. Para color/tamaño común, editar el token del CSS. Para una excepción de Tina, mantener selector acotado a `body.tina-tailwind[data-al3-admin-theme="dark"]`; explicar el motivo junto a la regla.
2. Para dashboard propio, consumir `var(--al3-admin-..., fallback)` en `tina/dashboard/PortfolioDashboard.tsx`; mantener el fallback coherente con el token. No cambiar queries para una corrección estética.
3. Si cambia CSS, actualizar el parámetro `v` de `stylesheet.href` en `src/lib/admin-theme.ts` (candidato actual `20261110-6`; publicado el 06/11: `20261106-1`). No editar el admin compilado ni `node_modules`.
4. Si cambian recursos, modificar `scripts/prepare-admin-theme-assets.mjs` y prepararlos de forma explícita; no regenerarlos como efecto secundario de un alta editorial.
5. Registrar cambio, alcance y evidencia en changelog/OpenSpec. Revisar las superficies afectadas con los controles autorizados por AGENTS; no iniciar suites o builds por esta lista.

La configuración se divide en tres capas: `tina/config.ts` y módulos de colección definen formularios; el adaptador define estética; Tina Cloud define Site URLs/índice de rama/credenciales. Ninguna sustituye a las otras. Un nuevo campo editorial sigue la correspondencia completa de `GUIA_EDITORIAL_IA.md`, no se resuelve agregando CSS.

- `public/admin-theme/admin.css`: tokens y adaptador acotado a utilidades de Tina (inicialmente 3.8.1, actualizado para 3.15.1). Su CSS tiene valores de color fijos, por lo que no alcanza cambiar únicamente variables `--tina-*`.
- `public/admin-theme/fonts`: Inter 400/500/600 y licencia SIL OFL desde la dependencia ya instalada. Las fuentes del tema no requieren Google Fonts.
- `public/admin-theme/icons`: SVG decorativos de Lucide ya instalado; el texto y las acciones de los enlaces siguen presentes. No parchear click handlers o árboles React de Tina para cambiar iconos.
- `scripts/prepare-admin-theme-assets.mjs`: preparación explícita de esos recursos a partir de dependencias instaladas. No ejecutarlo como control ni hook de cada publicación.
- Tokens del dashboard propio: variables `--al3-admin-*` con fallbacks, sin cambiar consultas ni lógica de datos.

## Sidebar y referencia Payload

Los controles propios del inventario usan `.al3-admin-control` para buscador, selector y orden numérico, y `.al3-admin-order-*` para botón, etiquetas y ayudas. Sus tamaños/superficies se centralizan en `admin.css`, sin estilos inline distintos por fila. Mantener la alineación con el padding de la tarjeta: selector y párrafos no agregan otro margen lateral; la primera celda de tabla comienza en esa misma guía. No quitar los steppers nativos ni reducir el área pulsable para ajustar el aspecto.

El candidato de orden visual usa `.al3-admin-visual-order` y `.al3-admin-sort-*`: lista que usa el scroll general del formulario, miniaturas, asa y acciones de 44 px, con los mismos tokens. `touch-action: none` se aplica exclusivamente al asa de arrastre; el resto permite scroll nativo. Motion Reorder, ya instalado, mantiene orden DOM y animación; Subir/Bajar/Pos. ofrecen alternativa al drag y restauran foco. Escape cancela el movimiento. El CSS no escribe posiciones: colección, lectura, migración y guardado están en `tina/project-order.ts`, `src/lib/project-visual-order.ts` y `tina/dashboard/ProjectVisualOrderEditor.tsx`. La nueva colección requiere regeneración normal de Tina e índice Cloud de la rama antes de comprobar el dashboard remoto; no editar generados ni omitir controles Cloud.

En pantallas nativas, el Nav `.relative.z-30.flex.flex-col.bg-white.border-r` conserva su ancho (`flex-shrink: 0`); su hermano y el dashboard permiten `min-width: 0`. `.al3-admin-dashboard` es contenedor inline-size y `.al3-admin-dashboard-grid` usa una columna bajo 960 px disponibles. No compensar comprimiendo la navegación ni con overflow hidden global. Cambio preparado por lectura de fuente vendor/captura aportada; comprobar también el sidebar colapsado y anchos pequeños al cierre.

Por criterio unificado, `Portfolio · orden visual` contiene directamente el campo `ProjectVisualOrderField`, igual que Shop contiene su selección. No hay enlace intermedio ni editor en Overview. Save/Reset son los controles nativos del documento. `.al3-admin-native-order` retira el recuadro exterior y usa filas continuas, con los mismos tokens y controles; el selector propio comparte `.al3-admin-control`. No sembrar scopes al abrir. Las colecciones Shop siguen consecutivas en `tina/config.ts`; no reordenar nodos React imperativamente.

FieldsGroup nativo es `flex flex-wrap w-full ... whitespace-nowrap`. Un campo personalizado sin ancho puede quedar ajustado a su contenido. `.al3-admin-native-order` declara `flex: 1 1 100%`, inline-size/max-inline-size 100%, min-inline-size 0, box-sizing border-box, white-space normal y el padding horizontal de 8 px del FieldWrapper nativo. No ampliar todos los formularios ni parchear un max-width supuesto: contrastar la fuente vendor y limitar la regla al campo.

El campo es contenedor nombrado `al3-order / inline-size`. Por defecto las acciones van debajo del título; desde 40rem disponibles se muestran asa, miniatura, título flexible y acciones en una fila. El punto depende del ancho real del campo, incluyendo sidebar abierto, no del viewport. Botones solo con iconos de 18 px, aria-label/title y área de 44 px; FileText ocupa la miniatura cuando no hay foto válida. Bordes discretos, hover, foco y espaciado consumen los mismos tokens del resto de listas. No ocultar controles ni truncar títulos para tapar desbordes. Save/Reset y contrato de datos permanecen nativos.

La lista no tiene altura máxima ni overflow propio: usa exclusivamente el scroll de FormWrapper (`[data-test^="form:"]`), igual que la selección Shop. El autoscroll durante drag localiza ese ancestro y desplaza su scrollTop; no mantiene un segundo scroll en el listado ni usa layoutScroll en un grupo que ya no desplaza. La barra Save/Reset continúa siendo la nativa. Revisar el contenedor real si cambia una versión de Tina; no trasladar ese desplazamiento al body global.

Tina tiene dos paneles distintos: navegación de colecciones/herramientas y formulario de edición junto al iframe. El menú se superpone al formulario con su overlay nativo. Mantener estética coherente no implica fusionarlos ni cambiar sus estados. El botón «Show editing panel» debe conservar `position: absolute`; ponerlo en relative lo incorpora al layout flex y crea una columna vacía a la izquierda.

El header del formulario usa un degradado ascendente independiente del fondo de navegación; se adapta explícitamente para evitar una franja blanca. El aviso «You are in local mode» conserva texto, icono y enlace en una pill de 11 px, con ajuste de línea permitido en espacios estrechos. No aplicar esta regla a errores o avisos de facturación. Se oculta únicamente la llama decorativa de la barra del editor; el logo en navegación queda pequeño y gris, y se conserva la atribución/versionado de Tina.

Los grupos nativos de Tina (Collections, Site, Cloud y categorías de pantallas) conservan su estructura y orden. Sus subtítulos usan escritura normal, 12 px, peso 400 y gris `--al3-admin-muted`; los enlaces usan gris suave, 13 px y contraste mayor al interactuar. No se aplica `lowercase`, por lo que se respetan nombres propios y siglas. Las reglas se limitan al área de navegación, sin cambiar encabezados de los formularios.

El menú general usa `menu.svg` (tres líneas) tanto para abrir como para cerrar. El panel de edición usa `panel-left.svg`, el rectángulo dividido sin flechas de la referencia Payload, para ocultarse/reabrirse. Se mantienen los handlers y las etiquetas de Tina como acciones distintas. El cierre nativo de navegación no trae aria-label: el adaptador usa texto generado «Cerrar navegación», desplazado visualmente dentro de la máscara. La alternativa de imagen CSS anterior no se exponía en AX; con texto generado Chrome sí identifica el botón por ese nombre. Revalidarlo al actualizar Tina y en una auditoría de lectores de pantalla; esta observación de Chrome no cubre todos los lectores. No agregar observadores o reemplazos de eventos para tematizarlo.

En pantallas y colecciones, el aviso nativo se posiciona debajo del logo mientras la navegación está abierta, reservando espacio en su lista. Conserva enlace, texto y propiedad de React: no se reubica el nodo ni se duplica. Al cerrar navegación vuelve al toolbar compacto, por lo que el modo local siempre se identifica. Los offsets corresponden al header nativo de 73 px; revisar esta relación si cambia su tamaño. El formulario con iframe conserva su propia pill de toolbar.

El fondo base elimina el degradado vertical claro también en la zona que queda fuera del contenido. El dashboard usa flex-shrink:0 para crecer con su tabla, y sus estadísticas/estados/hover usan tokens oscuros. No fijar su alto al viewport ni volver a colores literales claros en esas tarjetas.

Tina tiene dos accesos a Portfolio Overview: ruta de pantalla desde el admin y modal fullscreen desde el menú del Live Preview. El segundo trae un ancho nativo de `calc(100% - 170px)` con máximo 1500 px. El adaptador limita la corrección a ese modal cuando contiene `.al3-admin-dashboard`: ancho completo, alto 100dvh y cuerpo flex con min-height:0/overflow-y:auto, conservando su cierre nativo. No aplicar estas dimensiones a todos los diálogos.

El layout principal de Tina usa un fondo claro inline; se adapta su rol fijo/z-index 9999 con una excepción de background-color !important, necesaria para cubrir Media Usage sin tocar dependencias. Las clases text-tina-orange/text-tina-orange-dark se mapean al acento; los títulos h1/h2/h3 usan texto principal. El aviso enlazado a content-search usa pill informativa de 11 px, sin borde, con texto y enlace conservados; no implica habilitar búsqueda.

## Escala de iconos

El menú de formato Plate aplica `data-state="checked"` a `role="menuitemradio"` y usa un accent-foreground vendor distinto. Se adapta esa fila a selected/text y sus SVG Lucide al token icon, con checkmark de texto principal. Toolbar usa el mismo gris neutro. No cambiar roles, estado o handlers para resolver el contraste; no aplicar esta regla a todas las muestras de color o estados de peligro.

Los iconos de interfaz usan `--al3-admin-icon-size: 18px`, `--al3-admin-icon: #b8bec8` y trazo Lucide de 1.75. Incluye acciones de tablas/listas de objetos, edición de artículos, navegación, breadcrumbs, encabezados y dashboard. Los SVG heredados de acciones y arrastre también reciben la escala, sin forzarles un stroke si son de relleno. Los controles mantienen su hit area y foco; no reducir botones al tamaño del dibujo.

Los avisos compactos conservan iconos de 13 px. Logos, arte SVG y estado de guardado no se incluyen en el selector de acciones; colores de peligro/advertencia/éxito y foreground de acciones principales se conservan. Los lápices y controles neutros usan gris común y realce al interactuar. No imponer un color global a todos los SVG ni modificar el documento del iframe para normalizar el CMS.

Referencia consultada el 02/11/2026: [Nav de Payload](https://github.com/payloadcms/payload/blob/main/packages/ui/src/elements/Nav/index.tsx), [NavGroup](https://github.com/payloadcms/payload/blob/main/packages/ui/src/elements/NavGroup/index.css) y [SidebarToggle](https://github.com/payloadcms/payload/blob/main/packages/ui/src/elements/SidebarToggle/index.tsx). Se toma su jerarquía sobria y el símbolo de panel como referencia; no se replica su sistema de navegación.

## Conservación y mantenimiento

Para publicar la actualización de CLI/esquema en otra rama, comprobar el índice de esa rama específica antes de reconstruir. Que la Preview haya indexado `codex/tienda-catalogo-real` no actualiza `main`. Si el build informa GraphQL local/remoto diferente, reindexar solo la rama de la publicación autorizada, esperar succeeded y reconstruir una vez; no omitir cloud checks. `package.json` fija Node 24.x para coincidir con el runtime comprobado y la configuración de Vercel.

Auditoría de artículo: `openspec/changes/tema-admin-tina/article-audit-2026-11-03.md`. Menú checked/toolbar corregidos y observados localmente; formulario nativo mostró Unsaved changes solo al montar y una transición de revisión dejó iframe about:blank. No guardar/Reset para ocultar esos estados. El artículo no fue modificado en disco; diagnóstico pendiente. Un menú observado no acredita todos los diálogos ni la edición/guardado de contenido.

Revisión estática de dependencias: `openspec/changes/tema-admin-tina/compatibility-2026-11-03.md`. CMS/CLI admiten React 19, pero react-final-form 6.5.9 transitivo declara hasta React 18. Formularios observados funcionan; no cerrar compatibilidad amplia por ese hecho ni introducir un override mayor para silenciar el aviso. Almacén pnpm antiguo no equivale a copia activa.

Para acciones de Cloud (versiones, reindexación, Site URLs, acceso y guardado), consultar `docs/HANDOFF-2026-11-03-tina-cloud-admin.md`. Esta guía describe el tema; no sustituye ese registro ni autoriza cambios de permisos.

Actualización posterior del 03/11: persistencia de nota interna comprobada en Cloud y original restaurado tras recarga (c0d8fec/fb5b4a9). El pendiente de persistencia mencionado en el estado inicial inferior queda limitado por este resultado; upload/selección y auditorías amplias siguen pendientes. No repetir el control consumido.

Estado al 03/11/2026: conectado en `cmsCallback` y dashboard, commit `df001b1` en Preview Ready tras reindexar únicamente la rama `codex/tienda-catalogo-real`. Build Cloud y artefacto correctos; sin promoción a producción. Se observaron en local formulario, menú, dashboard hasta el final del scroll, foco y Shop claro dentro del administrador oscuro. Sin auditoría completa de lectores, diálogos o editor rico. Persistencia Cloud y otros recorridos conservan pendientes. Evidencias en los reportes del 02/11 y 03/11 de `openspec/changes/tema-admin-tina/`.

Antes de recargar un admin existente, conservar cualquier formulario sin guardar. No usar Reset o Save para resolver una revisión estética sin una decisión expresa del usuario. En esta integración el usuario autorizó descartar su edición rápida del árbol; esa autorización se consumió y no se extiende a otras ediciones. Si hay dudas, comprobar el tema en otro tab limpio y coordinar la integración cuando sea seguro.

Conservar indicadores de errores/validación/local mode, controles de rama, atribución Tina, foco visible, etiquetas y objetivos táctiles. No aplicar invert/filter a todo el admin ni a fotografías. No esconder controles por ser difíciles de tematizar.

Cuando se actualice Tina, revisar el adaptador contra formulario, menús, diálogos, listas/referencias, selector de medios, editor rico y Live Preview. No afirmar auditoría completa por una sola captura. La política de controles de AGENTS sigue aplicando.

## Rollback

Retirar la llamada a `installAdminTheme()` de cmsCallback devuelve el shell de Tina a su apariencia original al cargar de nuevo el admin. Los recursos pueden permanecer sin cargarse. No cambia documentos, plantillas públicas, secretos o datos editoriales. El tema no se considera publicado hasta preparar y aprobar el candidato correspondiente.

La actualización solicitada usa `tinacms` 3.15.1 y `@tinacms/cli` 4.0.4, con override en pnpm-workspace para que el CLI y los hooks públicos resuelvan la misma copia de Tina. Actualizar ambos juntos y regenerar tina-lock desde el CLI; nunca editar generados a mano. Referencia: [guía oficial de actualización](https://tina.io/docs/guides/upgrade-to-latest-version). La instalación local no equivale a validación de producción ni publicación.

Compatibilidad del esquema: las colecciones de campos declaran `defaultItem` al nivel colección, separado de `ui.router`. Las variantes de Pages se identifican por `_template` en cada documento; `match.filename` no es una propiedad válida de esas plantillas. El cliente `cms.api.tina.request<T>()` devuelve los datos y lanza errores HTTP/GraphQL: el dashboard debe tipar T y conservar su manejo de errores, sin convertir unknown mediante un cast. Los tipos de Node 24 se declaran como dependencia explícita. El control del 02/11 terminó con 0 errores / 0 warnings / 80 hints tras corregir MainLayout/ShopShare; build Cloud Ready el 03/11, con límites y pendientes separados en el reporte. No extrapolarlo a producción.


## Listas editoriales compartidas y paginación

Portfolio · orden visual y Store 3D · selección pública usan `tina/dashboard/EditorialOrderList.tsx`. Son listas de orden, no tablas con ordenación de columnas. Portfolio adapta scopes mediante `ProjectVisualOrderEditor.tsx`; Shop adapta referencias products/latest mediante `ShopSelectionField.tsx`. Shop permite agregar, reemplazar o quitar referencias; Portfolio cambia posiciones de artículos publicados/visibles, general o por categoría. No eliminar esas diferencias para conseguir igualdad visual.

Tokens semánticos nuevos en `public/admin-theme/admin.css` (prefijo `--al3-admin-list-`):

| Sufijo | Valor | Uso |
| --- | --- | --- |
| `font-size`, `font-weight` | 14px, 500 | Títulos de fila. |
| `row-height`, `padding`, `gap` | 64px mínimo, 8px, 8px | Densidad compartida; nunca altura fija que corte textos. |
| `target`, `action-gap` | 44px, 4px | Área pulsable y separación de controles. |
| `radius` | 4px | Contorno de lista y controles. |
| `thumb-width`, `thumb-height` | 40px, 30px | Foto o placeholder neutro. |

Superficies, separadores, estados e iconos consumen los tokens existentes (`panel`, `raised`, `edge`, `hover`, `text`, `muted`, `icon`, `icon-size`, `icon-stroke`). El contenedor `al3-order` a 40rem lleva miniatura/acciones a la misma fila; por debajo, acciones en otra fila sin overflow horizontal. La lista no tiene scroll propio: sigue usando FormWrapper.

Paginación compartida: 10 filas iniciales; selector 10/20/50 y anterior/siguiente solo si supera diez elementos. `src/lib/editorial-list.ts` concentra tamaño inicial, sustitución de una página validada como permutación y movimiento a una posición global. La UI pagina, el formulario conserva la lista completa. Arrastre dentro de la página; flechas cruzan sus límites y Pos. lleva a cualquier posición (también 1). Tras mover, mostrar la página de destino y devolver foco al asa. Cambiar categoría remonta la vista paginada, conservando los otros ámbitos pendientes.

Todo se conecta a input.value/onChange. No guardar al montar, paginar o arrastrar; Save/Reset nativos confirman/descartan. Escape durante drag de Portfolio restaura el documento de ámbitos previo, incluso si la migración numérica aún no estaba guardada. Shop conserva las referencias y el máximo de tres novedades; para quitar/reemplazar una pieza utilizada en hero/latest, primero cambiar esos usos. Quitar selección no borra la ficha. El lápiz cambia la referencia seleccionada, no edita el contenido de la pieza.

Estado 10/11: implementación y lectura de fuentes; no recorrido de navegador, persistencia, build ni publicación en esta tanda. Los controles verdes anteriores no validan este nuevo componente compartido. Ver `openspec/changes/listas-editoriales-paginadas/`.


Cierre local 10/11 de listas compartidas: pruebas nuevas3/3; tipos0 errores/0 warnings; navegador real comprobó paginación, movimiento global, Save/reapertura/Reset y restauración exacta. Ver report-2026-11-10 del change listas-editoriales-paginadas para alcance y límites. Publicación se registra separadamente; no atribuirle aún este resultado local.
