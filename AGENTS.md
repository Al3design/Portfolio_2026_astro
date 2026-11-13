# AGENTS.md

This file provides guidance to AI coding agents when working with code in this repository.

## Rutina de IA local — portfolio

Para altas/cambios de contenido usar [.agents/skills/portfolio-editorial/SKILL.md](.agents/skills/portfolio-editorial/SKILL.md) y su operación/prompts. OpenCode Desktop: `portfolio-editor` / `portfolio-revisor`; DSH: presets propios Portfolio, sin copiar el carril de otros proyectos. Preservar diseño, fuentes ES/EN, rama activa y trabajo ajeno. No ampliar el alcance a funcionalidades nuevas.

Si aparece un bloqueo/aviso, consultar solo el caso correspondiente de [recuperación](.agents/skills/portfolio-editorial/references/bloqueos-y-avisos.md), sin repetir diagnósticos generales. Separar credenciales locales, acceso del conector, índice Tina, autenticación 2FA y resultado de build. Un desafío MFA exige handoff; no se elude con otra vía. La guía respeta roles/permisos de controles y no autoriza reintentos de la ejecutora.

**Hosting y CMS:** el destino documentado es Vercel (`portfolio-2026-astro`, `al3design.dev`), con build en `vercel.json`; confirmar configuración/acceso vigentes antes de desplegar. Netlify es historia, no un carril alternativo. Tina tiene colecciones, contratos y renderers propios: distinguir artículos bilingües, páginas, globales, orden visual, fichas Shop y selección pública. Formularios/esquema, tema admin y Cloud (orígenes/índice/credenciales) son capas distintas. Ver la guía editorial; no simplificar todo a un artículo ni instalar adapters por una carga.

**Publicación y 2FA:** El carril habitual es push de cambios reales a la rama de trabajo → Preview automático por Git → OK posterior de Alejandro → integración/push a main → Production automático. No pulsar Redeploy además de un push exitoso. Redeploy manual queda para recuperar un build fallido tras diagnosticar/corregir su causa dentro del alcance autorizado; seguir su único deployment ID. Si aparece Verify Your Identity/2FA, entregar el control a Alejandro para que ingrese el código en Vercel y esperar; nunca solicitarlo en el chat ni cambiar de canal para eludirlo. No prometer ausencia de futuros desafíos ni atribuir su causa a una política interna no comprobada. Detalle y límites en la sección 4 de la guía de recuperación.

**Diseño y maqueta:** las altas/cambios editoriales conservan componentes, variantes, jerarquía, anchos, espaciados, tipografías, temas y comportamiento responsive existentes. Sitio público: SCSS de `src/styles/abstracts/`, variables `--clr-brand-*` y componentes compartidos. Administrador: tokens `--al3-admin-*` y puente `--tina-*`, según `docs/TINA_ADMIN_THEME.md`, aislados de sitio/iframe. No agregar colores, estilos/HTML/clases embebidos ni layouts para acomodar contenido. Si el material no encaja, informar la limitación; modificar tokens, maqueta o runtime requiere encargo explícito aparte.

Preparar candidato explícito, obtener Preview real, entregar URL y revisión, guardar **ESPERANDO_OK_PREVIEW** fuera de Git y terminar el turno. Producción requiere el OK posterior de Alejandro para esa revisión. No empujar rama productiva ni guardar Cloud/main antes de ese OK. Para contenido reutilizar editorial y para cambios técnicos aplicar rama propia desde main limpia/actualizada según el flujo Git siguiente, sin worktrees. Si no hay carril Preview/acceso disponible, reportar bloqueo sin inventar URL. La copia temporal de archivos no es un worktree ni autoriza deploy. Los scripts y prompts respetan la política de controles siguiente: sus ejemplos no autorizan ejecutar comandos por tanda.

## Protocolo editorial obligatorio — artículos y Shop 3D

Antes de redactar, crear/editar un artículo o una pieza, cargar imágenes o preparar su publicación, leer [docs/GUIA_EDITORIAL_IA.md](docs/GUIA_EDITORIAL_IA.md). Define la correspondencia entre Tina, contratos, renderizado, imágenes, listados, metadatos, RSS y selección pública.

- Artículos nuevos: usar [la plantilla bilingüe](docs/templates/articulo-bilingue.mdx), mantener draft y completar bloques ES/EN. No crear otra plantilla visual ni una página por artículo.
- Piezas nuevas: usar [la plantilla Shop](docs/templates/pieza-shop.json). Guardar un borrador no lo agrega al catálogo: selección explícita en `src/editorial/shop-catalogue/catalogue.json`, formulario `tina/shop-catalogue.ts` e imports derivados por plugin. Consultar reportes para evidencia fechada, sin tratar el nombre de un change como estado vigente. `status` de Shop no equivale a `publicationStatus` de artículos.
- Redactar natural, coloquial y profesional; no inventar hechos ni narrar «Alejandro dijo/confirmó» al visitante. Mantener condiciones comerciales y diseño aprobados.
- Para un campo nuevo, conectar esquema, contrato, proyección/localización, renderer y consumidores; no limitarse al formulario. No editar generados de Tina a mano.
- Las plantillas son borradores, no aprobaciones. Preparación, controles, Preview y producción son etapas distintas. La guía no amplía permisos de ejecución/publicación ni reemplaza la política siguiente.

- Shop: cada referencia nueva seleccionada explícitamente en products entra al principio; después manda el orden manual guardado en Tina (arrastrar, flechas o Pos., Save/Reset). Editar ficha/fotos o repetir una carga no mueve referencias existentes. No ordenar al renderizar por nombre, fechas de archivos ni invertir por CSS; no descubrir/publicar borradores automáticamente. Hero y latest se eligen aparte y no cambian por una alta.
- Completar palette de cada alta con las muestras del PLA mostrado y etiquetas ES/EN antes de entregar Preview; palette: [] oculta los cuadrados. Usar HEX manual aproximado cuando no hay código de filamento confirmado, sin atribuir marca/preset por foto. Excluir decoración, fondo e iluminación; consultar colores ambiguos y registrar pendientes explícitos. El HEX de producto no modifica tokens del diseño.

- Portada Shop: latest vacio activa las tres primeras referencias del catalogo products, en su orden guardado (altas nuevas primero por defecto). Una lista latest explicita prioriza esas piezas manualmente; vaciarla en Tina restaura el modo automatico. Hero sigue independiente. Al revisar altas/orden comprobar inicio y coleccion en ES/EN, incluidos los tres elementos visibles y el orden tras filtrar, no solo /tienda/coleccion/.

## Directivas permanentes y registro continuo

Leer [openspec/config.yaml](openspec/config.yaml) como fuente de directivas permanentes de OpenSpec. Por pedido de Alejandro, documentar cada cambio nuevo y toda rutina descubierta o modificada en la misma tanda: regla reutilizable en config cuando corresponda, procedimiento y fuentes en la guía temática, cambio significativo en changelog y estado/evidencia/permisos consumidos en reporte o handoff. README enlaza esas fuentes; actualizar plantillas si cambia su contrato. Un handoff fechado no es la fuente exclusiva de una rutina obligatoria. Las reglas no dependen del nombre de rama, pero el archivo debe estar incorporado por Git a la rama que lo lea; no cambiar de rama ni fusionar automáticamente para propagarlo. No copiar secretos ni convertir historial en autorización. Mantener visibles otros frentes pendientes. Documentar no autoriza controles, builds o publicaciones adicionales.

## Sistema visual del administrador Tina

Leer [docs/TINA_ADMIN_THEME.md](docs/TINA_ADMIN_THEME.md) antes de modificar apariencia del CMS. `public/admin-theme/admin.css` centraliza tokens `--al3-admin-*` y puente `--tina-*`; `src/lib/admin-theme.ts` instala el CSS desde `cmsCallback` de `tina/config.ts`, exclusivamente en `/admin`. El dashboard propio consume esos tokens con fallbacks. Al modificar CSS, actualizar su versión de caché en el instalador. No cargarlo en `MainLayout`, sitio público ni iframe; no parchear `node_modules`, handlers o generados para tematizar. Conservar foco, estados semánticos, avisos, atribución y área pulsable de los controles. Formularios/datos, estética y configuración Cloud son capas distintas. Documentar cambios en README, `docs/CHANGELOG.md` y OpenSpec sin repetir controles completados.

## Commands

### Politica de ejecucion y verificacion — 2026-10-16

Decision de Alejandro tras el incidente de GitCron del 2026-10-16: las suites repetidas por tanda agotaban tiempo y contexto; los MCP duplicados saturaban la RAM y provocaban paginacion en Windows. Las capturas duplicadas y los prompts contrarios a controles generaban trabajo y ciclos sin salida. No reintroducir ese circuito.

- **Ejecutora:** no correr verificacion del proyecto, build, pruebas, tipos, lint, e2e ni tomar o inspeccionar capturas por prompt/tanda. Solo si el prompt pide expresamente un comando de control, ejecutarlo una vez, sin agregar otros comandos. Si falla, registrar comando, resultado y fallo en el reporte y entregar; no corregir para reintentar, repetir ni sustituir el control por otro.
- **Orquestador:** auditar cada tanda leyendo el diff y el reporte, sin ejecutar verificaciones. Las capturas para auditoria las toma e inspecciona el orquestador.
- **Cierre:** una vez terminadas todas las tareas del cambio OpenSpec, el orquestador ejecuta la verificacion final antes de archivar o fusionar y resuelve los fallos encontrados. Las correcciones se controlan de forma acotada, sin convertir cada tanda en una nueva corrida completa. No declarar cierre aprobado con fallos pendientes.
- **Protecciones:** no aflojar controles, esconder errores, desactivar reglas de lint, saltear pruebas ni cambiar el producto para hacer pasar un control. Diferir la ejecucion al cierre no elimina pruebas ni criterios de aceptacion.
- **Prompts y skills:** deben respetar reglas y controles del proyecto. Una excepcion debe estar nombrada expresamente en el prompt y quedar en el reporte; no autoriza bucles de verificacion ni desactivar protecciones. Los catalogos de comandos y checklists de skills no son una orden de ejecutarlos por tanda.
- **Recursos:** no iniciar MCP ni navegadores de diagnostico por rutina. El MCP global de e2e esta desactivado por decision de Alejandro; no reactivarlo sin consultarle. Usar e2e por consola cuando corresponda al cierre o al comando explicito del prompt.

Leer `docs/TESTING_MCP.md` y `node_modules/e2e/skills/e2e/SKILL.md` antes de escribir/ejecutar pruebas e2e; su lectura no autoriza ejecutarlas. Config de consola: `C:/www/Portfolio_2026_astro/e2e.config.ts`. No iniciar otro Tina sobre puertos ocupados. Los tests deterministas no necesitan modelos ni API keys. Los comandos siguientes son referencia, sujetos a esta politica.

```bash
npm run dev        # Start TinaCMS + Astro dev server (always use this, not astro dev alone)
npm run build      # Build TinaCMS then Astro for production
npm run preview    # Preview the production build
npx astro check    # TypeScript/Astro type checking
```

Node 24.x is required by `package.json`; conservar pnpm y `pnpm-lock.yaml`, sin introducir otro lockfile. TinaCMS requires `TINA_CLIENT_ID` and `TINA_TOKEN` env vars to connect to the cloud CMS; without them the local dev server still runs but CMS features are limited.

## Architecture

This is an **Astro + React + TinaCMS** portfolio site. The key pattern throughout: Astro pages do all data-fetching at build time, then pass data down as props to React client components.

```
src/pages/index.astro          → fetches projects → <ClientHome client:load />
src/pages/about.astro          → fetches page entry → <ClientAbout client:load />
src/pages/projects/[...slug].astro  → dynamic project detail pages
```

**Content layer**: `tina/config.ts` registra las colecciones y sus módulos (`shop-products`, `shop-catalogue`, `project-order`, `global-settings`, locales/bloques de artículos); artículos/páginas/global viven en `src/content/`, y las fuentes editoriales de Shop/orden en `src/editorial/`:

- `projects/` — MDX files. Astro schema in `src/content.config.ts`. Key frontmatter fields: `title`, `year`, `date`, `type`, `description`, `stack[]`, `role`, `client`, `order`, `image`, `showInResume`, `showInPortfolio`, `points[]`, `categories[]`.
- `pages/` — MDX files for `home`, `about`, `archive`, `resume` — each with different frontmatter schemas (defined per-template in `tina/config.ts`).
- `global/` — configuración compartida de footer/enlaces, definida en `tina/config.ts`.
- `shopProduct` — JSON editoriales; selección pública e imports de fotos explícitos. No confundir estado editorial con publicación; ver la guía obligatoria.
- `shopCatalogue` — `src/editorial/shop-catalogue/catalogue.json`; selección pública, hero y hasta tres novedades, mediante referencias a fichas. `status` de ficha no reemplaza esta selección.
- `projectOrder` — `src/editorial/project-order/order.json`; orden visual general/por categoría, independiente de publicación y cronología Resume/RSS.

**Astro content schema** (`src/content.config.ts`): Defines the Zod schema for the `projects` collection. **Critical Astro v6 limitation**: custom frontmatter fields are NOT accessible via `p.data`, and `import.meta.glob` on MDX files does NOT expose `mod.frontmatter`. The canonical workaround — already implemented for `categories` — is:

```ts
import matter from "gray-matter"; // dependencia declarada; no reinstalar por esta rutina
const rawFiles = import.meta.glob<string>("../content/projects/*.mdx", {
  eager: true,
  query: "?raw",
  import: "default",
});
const fieldMap: Record<string, any> = {};
for (const [path, content] of Object.entries(rawFiles)) {
  const slug = path.split("/").pop()!.replace(".mdx", "").toLowerCase(); // lowercase — Astro lowercases p.id
  fieldMap[slug] = matter(content).data.yourField ?? defaultValue;
}
// In .map(): yourField: fieldMap[p.id] ?? defaultValue
```

Three gotchas that caused bugs here: (1) `mod.frontmatter` is undefined in Astro v6 MDX glob imports, (2) Windows CRLF breaks naive regex parsing — gray-matter handles both, (3) filenames like `FOlder-agrado.mdx` become `p.id = 'folder-agrado'` (Astro lowercases), so always `.toLowerCase()` the key.

**TinaCMS** (`tina/config.ts`): Defines CMS UI schemas and a custom `PortfolioDashboard` screen plugin. The generated types live in `tina/__generated__/` — do not edit those files directly. **Never import from `tina/config.ts` in React client components** — it pulls in TinaCMS internals incompatible with Vite's ESM bundling (the `color-string` issue). Instead, put shared constants in `src/lib/` and import from there in both places.

**Filter categories** (`src/lib/categories.ts`): Single source of truth for the sidebar filter options (`PROJECT_CATEGORIES`). Imported by both `tina/config.ts` (to populate CMS checkboxes) and `ClientHome.tsx` (to render filter buttons). Add/rename categories here only.

**Styling**: SCSS with a design system at `src/styles/abstracts/`. All abstracts are auto-forwarded globally via Vite's `additionalData` in `astro.config.mjs`, so any `.scss` file can use `$clr-brand-primary`, `$font-sans`, breakpoint mixins, etc. without an explicit `@use`. CSS Modules (`.module.scss`) are used for component-scoped styles.

**Path alias**: `@/` maps to `src/` in both TypeScript and Vite.

## Design System ("The Compiled Soul")

The visual identity is a dark editorial/terminal aesthetic. Key constraints to respect:

- **No-line rule**: Never use `1px solid` borders for sectioning. Boundaries are defined by background color shifts, subtle gradients, or negative space only. The `ghost-border` pattern (15% opacity on `$clr-brand-tertiary`) is the only permitted container edge.
- **Color roles**: `$clr-brand-primary` = neon green (accents/CTAs), `$clr-brand-secondary` = flame orange (keys in key-value pairs), `$clr-brand-tertiary` = cyan (icons, highlights).
- **Surface layering**: Level 0 = `$clr-brand-surface` (page bg), Level 1 = `surface-container-low`, Level 2 = `surface-container-high` (cards). Never use the same surface color for a container and its parent.
- **Typography**: Inter only (no secondary fonts for headings). Roboto Mono for code/metadata. Navigation link labels and CTA text use uppercase.
- **CSS vars for colors**: Color SCSS variables (`$clr-brand-*`) are references to CSS custom properties (`--clr-brand-*`), enabling the light/dark theme toggle via a `.light` class on `<html>`.

## UI Components

Shared primitives live in `src/components/UI.tsx`:

- `<SyntaxCard>` — the standard card container with optional `#label` header
- `<Tag>` — polymorphic: renders as `<span>` by default, as `<button>` when `onClick` is passed. `active` variant fills the bg with primary color.
- `<KeyValue k v>` — renders `key = "value";` syntax pairs (orange key, white value)

## Title formatting convention

Project and page titles use `//` as a marker for the accent-colored word: `"Compiled // Visions."` renders with "Visions." in `$clr-brand-primary`. Use `formatTitle()` from `src/helpers/text-helpers.tsx` in JSX, and `cleanTitle()` for `alt` attributes or plain text contexts (it strips the `//` marker).

## Home page interactive features

`ClientHome.tsx` manages two independent UI states:

- **Layout** (`'cards' | 'list'`): toggles between the glass-card grid and typographic list grouped by project `type`.
- **Filter** (`'all' | <category value>`): filters `projects[]` by `p.categories.includes(activeFilter)` before rendering either view. The `filteredProjects` array drives both the featured card (`filteredProjects[0]`) and the grid/list.

The sidebar's `# Filters` and `# Layout` blocks are rendered inside `home__sidebar` which applies a global `SyntaxCard` override (transparent bg, no padding) — do not add other `SyntaxCard` children outside `home__sidebar` without checking that override.

## Git Workflow

- Decisión actualizada de Alejandro del 13/11/2026: Contenido (artículos, páginas, piezas Shop e imágenes): reutilizar la rama permanente `editorial`, ya indexada en Tina; no crear una rama por alta. Cambios técnicos: `codex/<tarea>` desde main limpia/actualizada. Un solo lote editorial pendiente por vez. Antes de otra carga, fetch y comprobar referencias/cambios Cloud; actualizar editorial desde origin/main por fast-forward solo si no hay trabajo pendiente. Divergencia o contenido no aprobado: coordinar, sin reset/clean/stash ni force-push. Preview y OK posterior siguen obligatorios; después integrar exactamente el lote aprobado a main, sincronizar editorial y conservar ambas ramas, sin borrar/recrear editorial ni indexarla por rutina.
- Antes de crearla, comprobar checkout e índice limpios, hacer fetch y actualizar `main` por fast-forward. Si hay cambios ajenos, divergencia o una tarea activa, conservarlos y coordinar; no resetear, limpiar ni stash automático para aparentar limpieza.
- Un encargo retomado continúa su rama existente; no crear otra por turno, hallazgo o archivo. Trabajar y commitear en la rama del encargo. No crear worktrees.
- Push a la rama de trabajo genera Preview solo si lo confirma la integración Vercel; entregar URL/revisión y detenerse para el OK posterior antes de integrar a `main`.
- Ese OK de la revisión autoriza completar integración por el flujo permitido, actualizar `main` local/remota y volver a dejar el checkout limpio en `main`, sin preguntas técnicas repetidas. No integrar cambios nuevos ajenos al snapshot aprobado ni saltar protecciones de rama.

Para editar en Tina usar el administrador del Preview permanente de editorial: https://portfolio-2026-astro-git-editorial-aledesign-projects.vercel.app/admin/. tina/config.ts deriva branch de VERCEL_GIT_COMMIT_REF; /admin de producción apunta a main y no es la entrada de cargas. No cambiar branch globalmente a editorial en config ni en variables de Production: los builds deben seguir leyendo su propia rama. Si el Preview está protegido, autenticar la sesión; no desactivar protección. Validar el origen exacto en Site URLs y que el cliente Tina use editorial antes de guardar.
