# The Compiled Soul — Portfolio 2026

Welcome to the documentation for **The Compiled Soul**, a personal portfolio built with **Astro v6**. Este README es el punto de entrada; los contratos ejecutables y las guías enlazadas determinan cómo editar cada sistema.

## Continuidad para IA — editorial y Tina (03/11/2026)

Leer primero `AGENTS.md`, [OpenSpec](openspec/config.yaml), [la guía editorial](docs/GUIA_EDITORIAL_IA.md) y [el sistema visual de Tina](docs/TINA_ADMIN_THEME.md). Conservar rama activa y cambios ajenos. Las instrucciones históricas de Netlify no describen el despliegue actual: producción está en Vercel, `al3design.dev`.

Las **directivas permanentes** viven en [openspec/config.yaml](openspec/config.yaml), con entrada en AGENTS y procedimientos en las guías temáticas. Aplican cualquiera sea el nombre de la rama; para estar disponibles en otra rama, deben estar incorporadas allí mediante Git. No cambiar de rama o fusionar automáticamente para propagarlas.

El [handoff operativo de Tina Cloud](docs/HANDOFF-2026-11-03-tina-cloud-admin.md) conserva el estado fechado y la evidencia de actualización, reindexación, orígenes y prueba de guardado ya completada. No sustituye las directivas ni autoriza repetir acciones.

La [prueba local de medios y selección](openspec/changes/alta-piezas-shop-desde-tina/report-2026-11-03-local-upload.md) completó carga asistida por el usuario, alta/reapertura, portada/novedades y restauración del catálogo. No acredita el selector automatizado ni el equivalente Cloud.

La [revisión de compatibilidad](openspec/changes/tema-admin-tina/compatibility-2026-11-03.md) registra el peer transitivo react-final-form/React19 pendiente y la integración por fast-forward de los guardados Cloud a fb5b4a9. No confundir el resultado de formularios comprobados con compatibilidad global aprobada.

La [auditoría del editor de artículos](openspec/changes/tema-admin-tina/article-audit-2026-11-03.md) registra la corrección local de contraste del menú y los pendientes de formulario marcado como modificado al abrir y vista previa vacía. No guardar contenido para normalizar esos estados. Builds y publicación quedan para el final; el CSS posterior al candidato publicado en Preview aún no está integrado.

| Necesidad | Dónde actualizar |
| --- | --- |
| Nuevo artículo/caso | `docs/templates/articulo-bilingue.mdx` → `src/content/projects/<slug>.mdx`; colección `projects` de `tina/config.ts`, bloques/locales compartidos y renderer existente. Mantener draft hasta completar ES/EN. |
| Nueva pieza | `docs/templates/pieza-shop.json` → `src/editorial/shop-products/<slug>.json`; formulario en `tina/shop-products.ts`, contrato/proyección en `src/lib/shop-editorial.ts`. |
| Publicar/ordenar piezas, portada y tres novedades | `src/editorial/shop-catalogue/catalogue.json`, editable con `tina/shop-catalogue.ts`. Guardar un borrador no lo selecciona. `scripts/lib/shop-catalogue-plugin.mjs` genera imports desde esa selección. |
| Menús de ambos sitios y footer | Global Settings: `src/content/global/navigation.mdx` (menús ES/EN, listas ordenables) y `footer.mdx` (pie compartido). Plantillas en `tina/global-settings.ts`, schema Astro en `src/content.config.ts`, validación/proyección en `src/lib/site-navigation.ts`. MainLayout pasa la configuración a Navigation; no duplicar menús en componentes. |
| Imágenes, colores HEX/presets, rutas, metadatos y RSS | Seguir las tablas de `docs/GUIA_EDITORIAL_IA.md`; no duplicar plantillas ni listas de productos en código. |
| Estética del CMS | `public/admin-theme/admin.css`: tokens `--al3-admin-*` y adaptador vendor. `src/lib/admin-theme.ts` lo instala desde `cmsCallback` de `tina/config.ts`, solo en `/admin`. Dashboard propio en `tina/dashboard/PortfolioDashboard.tsx`. |
| Orden general y por categoría | `Portfolio · orden visual` del menú Tina: singleton `src/editorial/project-order/order.json`, colección `tina/project-order.ts` y campo controlado `ProjectVisualOrderField` en `tina/dashboard/ProjectVisualOrderEditor.tsx`. Arrastrar o Subir/Bajar/Pos.; Save/Reset nativos, igual que Shop. Overview no edita orden. Primer movimiento prepara prioridades existentes; solo Save persiste. Contratos en `src/lib/project-visual-order.ts`/`project-order.ts`, consumo en `src/pages/index.astro`. Ver guía y `openspec/changes/orden-visual-y-home-movil/` para estado/controles. |

Un campo nuevo requiere **Tina → contrato/validación → proyección ES/EN → renderer → consumidores (listados, social, RSS y Live Preview cuando corresponda)**. Actualizar guía y plantilla del contenido en la misma tanda. Nunca editar `tina/__generated__` manualmente ni importar `tina/config.ts` desde componentes públicos.

Tina usa CSS propio como excepción acotada al shell vendor; el sitio conserva SCSS. No cargar ese CSS en `MainLayout` ni dentro del iframe. Al cambiar el adaptador, actualizar su versión de caché en `src/lib/admin-theme.ts`; la tabla de tokens y los límites están en la guía visual.

Estado: TinaCMS **3.15.1**, CLI **4.0.4**, candidato `df001b1` en Preview Ready y rama Cloud reindexada. Nota interna Cloud guardada/reabierta y restaurada/reabierta el 03/11 (commits `c0d8fec`/`fb5b4a9`); no equivale a upload/alta/selección completa ni producción. HEAD local sigue df001b1, sin pull sobre cambios ajenos. Live Preview Shop nuevo está habilitado en local; Cloud conserva formulario nativo. Evidencia y pendientes: `openspec/changes/tema-admin-tina/report-2026-11-03.md` y tareas de `alta-piezas-shop-desde-tina`. No repetir builds o controles completados por leer este documento.

> 📋 **Historial de cambios:** Para entender qué se modificó, por qué, y en qué orden, leer [`docs/CHANGELOG.md`](./docs/CHANGELOG.md).
> 🛠️ **Configuración CMS:** Guía paso a paso para configurar TinaCMS y Netlify en [`docs/TINA_NETLIFY_GUIDE.md`](./docs/TINA_NETLIFY_GUIDE.md).

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Astro v6.3](https://astro.build/) — SSG, `output: "static"` |
| UI Library | [React 19.2](https://react.dev/) — solo para componentes con interactividad (Astro Islands) |
| Styling | SASS / SCSS Modules — **sin Tailwind CSS** |
| Content | MDX via Astro Content Layer (`src/content/`) |
| CMS | [TinaCMS v3.15.1](https://tina.io/) + CLI 4.0.4 — tema propio del administrador, local mode en dev |
| Animations | [Framer Motion](https://motion.dev/) — `import` desde `motion/react` |
| Icons | [Lucide React](https://lucide.dev/) |
| Dashboard | Custom Screen Plugin — Portfolio Control Center |


---

## 📂 Project Structure

```text
Portfolio_2026_astro/
├── docs/
│   └── CHANGELOG.md         # Historial completo de cambios (leer para contexto)
├── public/
│   └── assets/              # ← NUEVO: Imágenes gestionadas por TinaCMS
├── src/
│   ├── assets/              # SVGs de sistema (legacy/internos)
│   ├── components/          # Componentes React (.tsx) y Astro (.astro)
│   │   ├── mdx/             # Componentes custom para renderizar MDX (<Content />)
│   │   ├── ClientResume.tsx # UI del Resume (consume frontmatter + jobs prop)
│   │   ├── ClientArchive.tsx# UI del Archive (consume pageMeta prop)
│   │   └── ...
│   ├── content/             # Content Collections — fuente de verdad del contenido
│   │   ├── pages/           # MDX de páginas estáticas
│   │   │   ├── about.mdx    # _template: about
│   │   │   ├── archive.mdx  # _template: archive  ← título y subtítulo editables en CMS
│   │   │   └── resume.mdx   # _template: resume   ← skills, education, contacto en CMS
│   │   └── projects/        # MDX por cada proyecto/trabajo
│   ├── helpers/             # Utilidades (text-helpers, etc.)
│   ├── layouts/             # MainLayout.astro
│   ├── pages/               # Rutas de Astro
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── resume.astro
│   │   ├── archive.astro
│   │   └── projects/[...slug].astro # Rutas dinámicas con soporte para carpetas
│   └── styles/              # Arquitectura SASS
│       ├── abstracts/       # Variables, tokens, mixins (auto-injected via astro.config.mjs)
│       ├── base/            # Resets y estilos globales
│       ├── components/      # Módulos SCSS por componente
│       └── pages/           # Módulos SCSS por página
├── tina/
│   ├── config.ts            # ← Configuración central de TinaCMS (colecciones + schemas)
│   └── dashboard/           # ← Dashboard Custom (Screen Plugin)
│       ├── PortfolioDashboard.tsx # UI del Control Center
│       └── dashboardQuery.ts      # Query GraphQL optimizada
├── src/content.config.ts    # Schema Zod unificado para projects + pages (debe espejear tina/config.ts)
├── .env                     # TINA_CLIENT_ID y TINA_TOKEN (no commitear)
└── package.json
```

---

## 🎨 Styling Architecture (SASS)

**Sitio público: SASS Modules. No introducir Tailwind CSS.** El adaptador CSS del administrador Tina es una excepción aislada documentada; las clases Tailwind vendor pertenecen a Tina, no al sistema público.

1. **SASS Modules:** Cada componente React o Astro tiene su propio `_nombre.module.scss`.
2. **Global Abstracts:** Variables, tokens y mixins en `src/styles/abstracts/`. Se inyectan automáticamente via Vite — **no usar `@use` ni `@import` manual de abstracts** en los módulos.
3. **Glassmorphism:** El efecto base está en `_mixins.scss`. Usar `@include glass(...)` para cualquier nueva superficie.
4. **Tipografía:** Solo **Inter**. Variar peso (Thin → Bold) y tamaño para crear contraste.

### SASS token logic — plantilla agnóstica

La fuente de verdad para futuras conversiones es `PROMPT_MIGRACION_TAILWIND_A_SASS.md`. Esa plantilla es autosuficiente: no requiere tener a mano ningun proyecto base local.

- `_colors.scss` usa primitivas privadas `$-clr-*`.
- Los themes viven en mapas `$light` y `$dark`, agrupados por familias (`neutral`, `primary`, `secondary`, `accent`) y shades numericos.
- `_tokens.scss` centraliza `$active-theme`, tokens semanticos y decisiones editables del sistema.
- `_breakpoints.scss` solo define `$breakpoints`; los mixins viven en `_mixins.scss`.
- `_globals.scss` genera CSS custom properties desde `$active-theme` y desde `$font-sizes`.
- `_typography.scss` usa escala responsive por pantalla (`small`, `large`) con numeracion amplia (`100`, `200`, `300`, `900`, `1000`, `1200`) para permitir intermedios futuros.
- `clr("primary", "500")`, `semantic-color(brand-primary)` y `fs("400")` son el formato recomendado para estilos nuevos.
- Aliases legacy como `clr(brand-primary)`, `fs(base)`, `$font-size-xs`, `$fs-xl`, `$fw-bold`, `$clr-brand-*` y `$colors` fueron retirados; no recrearlos.

### Depuración de aliases

La regla actual es eliminar aliases cuando ya no tienen consumidores y conservar los mapas que alimentan funciones:

- `$font-size-100..1200`, `$font-weight-*`, `$body-*` y `$heading-*` siguen la nomenclatura canonica documentada en la plantilla de migracion.
- `$font-sizes` usa valores numericos por pantalla (`small`, `large`) y `fs("*")` sólo resuelve CSS custom properties `--fs-*`.
- `$font-families`, `$font-weights`, `$semantic-colors`, `$semantic-fonts`, `$layout-tokens`, `$containers` y `$radii` son mapas funcionales válidos porque alimentan `ff()`, `fw()`, `semantic-color()`, `semantic-font()`, `layout()`, `container()` y `radius()`.
- `$fs-*`, `$fw-*`, `$font-size-xs..8xl`, `$font-size-aliases`, `$clr-brand-*`, `$colors`, `fs(base)` y `clr(brand-primary)` fueron retirados; no recrearlos.
- Tokens de layout editables como `$container-max`, `$radius-soft` y `$nav-height` viven en `_tokens.scss`.
- `_sizes.scss` debe quedar como escala primitiva de spacing/sizing.
- `utilities/` genera clases CSS reutilizables; no reemplaza los mapas funcionales de Sass.
- Mixins responsive y visuales (`mq`, `heading`, `glass`, `page-title`, `energy-grid-*`) viven en `_mixins.scss`.

### Fondo animado — Energy Grid

El fondo del sitio usa un sistema de spotlights animados via `@property` CSS (`--eg-x1/y1`, `--eg-x2/y2`, `--eg-x3/y3`). Las custom properties registradas se interpolan en el compositor GPU sin repaints.

- **HTML:** `<div class="bg-energy-grid">` con 3 hijos `<div class="eg-spot eg-spot--{primary|tertiary|secondary}">`.
- **Mixin:** `@include energy-grid-bg()` en `_globals.scss`. No modificar la estructura HTML sin actualizar el mixin.
- **Cursor:** Un `<canvas>` creado por script inline en `MainLayout.astro` dibuja celdas de la grilla (48px) alrededor del cursor con `requestAnimationFrame`. Solo activo en `pointer: fine`.
- **Temas:** `mix-blend-mode: screen` en dark, `multiply` en light (controlado por clase `.light` en `<html>`).

---

## 📝 Content Management

### Flujo sin CMS (manual)

Editar directamente los archivos `.mdx` en `src/content/`. Al guardar, Astro HMR recarga el contenido automáticamente en desarrollo.

### Flujo con TinaCMS (recomendado)

```bash
# Node 24.x (misma versión mayor en local y Vercel)
# nvm use 24

pnpm run dev
# Astro corre en:    http://localhost:4322
# Admin panel en:    http://localhost:4322/admin/index.html
```

El panel permite editar sin tocar el código. Los cambios se guardan directamente en los archivos `.mdx`.

---

## 🦙 TinaCMS — Referencia de Schema

El archivo central es **`tina/config.ts`**. Toda modificación al schema del CMS debe hacerse ahí **y** reflejarse en **`src/content.config.ts`** (schema Zod de Astro).

### Colección: `projects`

Ruta: `src/content/projects/*.mdx`

| Campo | Tipo | Notas |
|---|---|---|
| `title` | string | Nombre del proyecto |
| `year` | string | Ej: `"2024"` |
| `date` | datetime | Para ordenamiento `YYYY-MM-DD` |
| `type` | string | Ej: `"freelance"`, `"employment"` |
| `description` | string | Resumen corto |
| `stack` | string[] | Array de tecnologías |
| `role` | string | Rol en el proyecto |
| `client` | string | Empresa o cliente |
| `order` | number | Orden de aparición manual |
| `image` | image | Cover del proyecto |
| `showInResume` | boolean | Aparece en la página Resume |
| `showInPortfolio` | boolean | Aparece en Home y Archive |
| `status` | string | Estado del proyecto (ej: "completed", "in progress") |
| `impact` | string | Impacto o logro destacado |
| `points` | string[] | Puntos de experiencia para el Resume |
| `categories` | string[] | Categorías de filtro (ui-ux, web-dev, mobile, systems) |
| `timeline` | string | Duración del proyecto (ej: "12 Weeks", "2020 - 2022") |
| `codeSnippet` | string | Fragmento de código representativo (se muestra en el sidebar) |
| `_template` | string | Metadato técnico de TinaCMS |
| `body` | rich-text | Cuerpo MDX del proyecto |

### Colección: `pages` (con templates)

Cada archivo tiene su propio template. El campo `_template` en el frontmatter del MDX indica cuál usar.

#### Template `about` → `src/content/pages/about.mdx`

| Campo | Tipo | Descripción |
|---|---|---|
| `title` | string | Título del héroe (soporta marcador `//`) |
| `mission` | string | Tagline (no renderizado en la página, reservado para SEO/home) |
| `body` | rich-text | Bio principal |
| `philosophies[]` | object[] | Cards de "Core Philosophy" — ver estructura abajo |

**Estructura de `philosophies[]`:**
```yaml
philosophies:
  - icon: beaker        # beaker | settings | monitor
    accent: secondary   # primary | secondary | tertiary
    title: Atomic Principles
    description: Interfaces must be broken down...
```

#### Template `archive` → `src/content/pages/archive.mdx`

| Campo | Tipo | Descripción |
|---|---|---|
| `title` | string | Título del encabezado de la página |
| `subtitle` | string | Subtítulo/descripción debajo del título |
| `body` | rich-text | Contenido adicional (opcional) |

#### Template `resume` → `src/content/pages/resume.mdx`

| Campo | Tipo | Descripción |
|---|---|---|
| `title` | string | Job title / headline del CV |
| `location` | string | Ciudad |
| `email` | string | Email de contacto |
| `status` | string | Ej: `"Available for new opportunities"` |
| `skillGroups` | object[] | Array de grupos de habilidades (ver abajo) |
| `education` | object[] | Array de entradas de educación — soporta múltiples títulos/cursos |
| `body` | rich-text | Bio corta |

#### Template `home` → `src/content/pages/home.mdx`

| Campo | Tipo | Descripción |
|---|---|---|
| `title` | string | Título del héroe (soporta marcador `//`) |
| `mission` | string | Tagline — `const mission = "..."` |
| `status` | string | Estado de disponibilidad |
| `location` | string | Ubicación |
| `timezone` | string | Zona horaria |

### Colección: `global`

Ruta: `src/content/global/*.mdx`

#### `footer.mdx`

| Campo | Tipo | Descripción |
|---|---|---|
| `copyright` | string | Texto de copyright del footer |
| `links[]` | object[] | Links de redes sociales — ver estructura abajo |

**Estructura de `links[]`:**
```yaml
links:
  - name: GitHub
    url: "https://github.com/..."
    icon: github   # github | linkedin | instagram | twitter | facebook |
                   # youtube | tiktok | behance | dribbble | whatsapp |
                   # telegram | discord | bluesky | pinterest
```

> **Nota:** `simple-icons@12` provee los SVGs de marca. La versión es v12 específicamente porque v13+ eliminó LinkedIn por solicitud de la empresa. `twitter` mapea internamente a `siX` (el logo de X).

**Estructura de `skillGroups[]`:**
```yaml
skillGroups:
  - category: DESIGN ARCHITECTURE
    items:
      - name: Design Systems
        value: '95%'
```

**Estructura de `education[]`:**
```yaml
education:
  - degree: Bachelor of Fine Arts
    institution: California College of the Arts
    year: Class of 2015
  - degree: Multimedia Designer
    institution: Da Vinci School
    year: 2007 - 2018
```

### Regla importante: sincronizar schemas

Cuando se agrega un campo en `tina/config.ts`, **siempre** añadirlo también en `src/content.config.ts` (schema Zod). Si no, Astro tirará un error de tipos al hacer el build.

### Leer campos custom de frontmatter (limitación Astro v6)

Astro v6 **no expone campos custom** del frontmatter MDX vía `p.data`, ni vía `mod.frontmatter` con `import.meta.glob`. El patrón canónico del proyecto (implementado en `src/pages/index.astro`) es usar `gray-matter` con lectura de archivo crudo:

```ts
import matter from 'gray-matter'; // dep transitiva, sin install adicional
const rawFiles = import.meta.glob<string>('../content/projects/*.mdx', { eager: true, query: '?raw', import: 'default' });
const fieldMap: Record<string, any> = {};
for (const [path, content] of Object.entries(rawFiles)) {
  const slug = path.split('/').pop()!.replace('.mdx', '').toLowerCase(); // lowercase — Astro lowercases p.id
  fieldMap[slug] = matter(content).data.tuCampo ?? valorDefault;
}
// En el .map(): tuCampo: fieldMap[p.id] ?? valorDefault
```

> **Convención**: nombrar los archivos MDX de proyectos siempre en **lowercase** (`freelance.mdx`, no `Freelance.mdx`). Astro normaliza `p.id` a lowercase, y los filenames con mayúsculas causan un case mismatch silencioso.

---

## ⚡ Interactivity — Astro Islands

- Los `.astro` son estáticos por defecto (0 JS).
- Los `.tsx` con estado, animaciones o efectos se hidratan con `client:load` en el `.astro` que los consume.
- **Framer Motion:** siempre importar desde `motion/react` (v12+). Tipar variantes con `import type { Variants } from 'motion/react'`.

---

## 🛠️ Scripts

```bash
pnpm run dev       # TinaCMS + Astro dev server (Node 24.x)
npm run build     # Build de producción en dist/
npm run preview   # Preview del build
npx astro check   # TypeScript diagnostics
```

> **Nota:** `fs-extra` es una dependencia directa requerida por `@tinacms/metrics`. Está en `devDependencies`. Sin ella el dev server falla con `ERR_MODULE_NOT_FOUND`.

---

## 📡 RSS Feed

El feed está en `src/pages/rss.xml.ts` y se genera en cada build de Astro. Consume la colección `projects` filtrando por `showInPortfolio: true`, ordenado por fecha descendente.

**Namespaces activos:**

| Prefijo | URI | Uso |
|---|---|---|
| `dc` | `http://purl.org/dc/elements/1.1/` | `<dc:creator>` por item |
| `content` | `http://purl.org/rss/1.0/modules/content/` | `<content:encoded>` con HTML completo |
| `atom` | `http://www.w3.org/2005/Atom` | `<atom:link rel="self">` en el canal |
| `media` | `http://search.yahoo.com/mrss/` | `<media:content>` + `<media:thumbnail>` para imágenes |

**Por item se incluye:** título, descripción, fecha, categorías (stack), `<dc:creator>`, `<content:encoded>` (imagen + descripción + rol + stack + link), `<media:content>` y `<media:thumbnail>` con URL absoluta de la imagen del proyecto.

> **Nota**: `<media:content>` y `<media:thumbnail>` son las etiquetas que los lectores de feeds usan para mostrar la imagen de preview en la lista. Sin ellas, la imagen no aparece aunque exista en el proyecto.

---

## 🤖 Instrucciones para Asistentes IA

### Antes de empezar
1. **Leer [`docs/CHANGELOG.md`](./docs/CHANGELOG.md)** para entender el estado actual y los cambios recientes.
2. **Verificar Node:** `node -v` debe retornar `v24.x`. Si no, usar una versión 24.x instalada. `engines.node` limita Vercel a la misma versión mayor.

### Reglas técnicas obligatorias

| Regla | Detalle |
|---|---|
| No Tailwind | El proyecto usa exclusivamente SASS Modules |
| No `border: 1px solid` | Usar `box-shadow` difusos o el mixin `glass-surface` |
| No Next.js imports | Nunca usar `next/navigation` u otras APIs de Next |
| ID en vez de slug | En Astro v6, usar `entry.id` (no `entry.slug`) |
| Schema sync | Cambios en `tina/config.ts` → reflejar en `content.config.ts` |
| Frontmatter custom | Usar `gray-matter` + `import.meta.glob ?raw` — NO `p.data.campo` ni `mod.frontmatter` |
| Nombres de archivo MDX | Siempre **lowercase** — Astro normaliza `p.id` a lowercase |
| Nested Projects | Usar `[...slug].astro` para soportar subcarpetas en proyectos |
| Image Normalization | El sistema añade `/` automáticamente y limpia comillas; prefiere rutas relativas a `public/assets/` |
| Template field | Todo MDX en `pages/` necesita `_template: nombre_template` en el frontmatter |
| Visual Editing | Páginas y proyectos usan `useTina + tinaField`; el body de proyectos es MDX (no `TinaMarkdown`) |
| simple-icons versión | Usar `simple-icons@12` — v13+ eliminó LinkedIn |

### Flujo para agregar un nuevo proyecto

1. Crear `src/content/projects/nombre-proyecto.mdx`.
2. Completar el frontmatter con todos los campos requeridos (especialmente `showInResume` y `showInPortfolio`).
3. Alternativamente, usar el panel de TinaCMS en `localhost:4322/admin` → Projects → Create New.

### Flujo para modificar el Resume

- **Experiencia laboral:** Editar el MDX del proyecto correspondiente y asegurarse que `showInResume: true`.
- **Skills y Education:** Editar `src/content/pages/resume.mdx` directamente o via CMS → Pages → Multimedia Designer.
- **Contacto (título, location, email, status):** Mismo archivo `resume.mdx`.

### Flujo para modificar el Archive

- El título y subtítulo se editan en `src/content/pages/archive.mdx` o via CMS → Pages → Project Archive.
- Los proyectos listados se controlan con `showInPortfolio: true` en cada proyecto.

### Flujo para modificar el Footer

- Editar `src/content/global/footer.mdx` directamente, o via CMS → Global Settings → footer.
- Agregar links: añadir un ítem a `links[]` con `name`, `url` e `icon` (ver opciones en README).
- El footer renderiza estáticamente (sin hidratación extra).

### Visual Editing — cómo funciona

TinaCMS Visual Editing está implementado en todas las páginas y proyectos:
1. Ir a `/admin` → seleccionar colección → seleccionar documento.
2. Hacer clic en el ícono de ojo (preview) — abre la página dentro del iframe.
3. Hacer clic sobre cualquier elemento anotado → se resalta el campo en el sidebar.

**Páginas con Visual Editing completo:** Home (hero), About, Archive, Resume.
**Proyectos:** frontmatter editable inline (title, type, status, role, client, image, stack, timeline); body MDX intacto (no reemplazado por TinaMarkdown — usa componentes React custom).

### Diseño: principios a mantener

- **Estética editorial.** No introducir estilos genéricos o "básicos". El portfolio es una terminal de alta gama.
- **Glassmorphism:** `@include glass-surface` para toda nueva superficie.
- **Tipografía Inter:** No cambiar la familia tipográfica. Variar peso y tamaño para crear jerarquía.
- **DESIGN.MD:** Leer periódicamente para asegurar que los roles semánticos de los colores (`primary`, `tertiary`, `surface-container`) se respeten.

### Dashboard Custom: Portfolio Control Center

Se ha implementado un panel de monitoreo avanzado dentro de TinaCMS (Screen Plugin) accesible vía el icono 📊 en la barra lateral del admin.

**Características:**
- **Inventario Maestro**: Tabla con búsqueda en tiempo real y miniaturas de proyectos.
- **Salud del Contenido**: Auditoría automática de campos faltantes (imágenes, descripciones, stack).
- **Ecosistema Tech**: Análisis de distribución de tecnologías en todo el portfolio.
- **Sincronización Inteligente**: Detección automática de entorno (API Local vs Cloud).

---

*Última actualización: 2026-05-20 (Cursor de terminal parpadeante interactivo y suave en buscador de Resume con caret-shape: block)*


Listas editoriales Tina: Portfolio y selección Shop comparten [`EditorialOrderList`](tina/dashboard/EditorialOrderList.tsx), paginación 10/20/50 y movimiento global mediante Pos.; Save/Reset siguen siendo nativos. Adaptadores en `ProjectVisualOrderEditor.tsx` y `ShopSelectionField.tsx`; helpers en `src/lib/editorial-list.ts`; tokens `--al3-admin-list-*` en `public/admin-theme/admin.css` (caché candidata `20261110-6`). Ver [criterio visual](docs/TINA_ADMIN_THEME.md) y [estado pendiente de controles](openspec/changes/listas-editoriales-paginadas/tasks.md). No hay migración de contenido ni publicación por este cambio.


Cierre local 10/11 de listas compartidas: pruebas nuevas3/3; tipos0 errores/0 warnings; navegador real comprobó paginación, movimiento global, Save/reapertura/Reset y restauración exacta. Ver report-2026-11-10 del change listas-editoriales-paginadas para alcance y límites. Publicación se registra separadamente; no atribuirle aún este resultado local.
