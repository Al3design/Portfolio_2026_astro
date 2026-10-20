import { defineConfig } from "tinacms";
import { PortfolioDashboard } from "./dashboard/PortfolioDashboard";
import { PROJECT_CATEGORIES } from "../src/lib/categories";
import { articleBlockTemplates } from './article-blocks';
import { articleLocaleFields } from './article-locales';
import { projectEditorRoute, localEditorHostname } from '../src/lib/project-editor-route';

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";


export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "assets",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      // ─── PROJECTS ──────────────────────────────────────────────────────────
      {
        name: "projects",
        label: "Projects",
        path: "src/content/projects",
        format: "mdx",
        ui: {
          defaultItem: { publicationStatus: 'draft', contentFormat: 'bilingual', language: 'es', showInPortfolio: true, showInResume: false },
          router: ({ document }: { document: any }) => {
            const local = typeof window !== 'undefined' && localEditorHostname(window.location.hostname);
            return projectEditorRoute(document, local);
          },
        },
        fields: [
          { type: 'string', name: 'publicationStatus', label: 'Publicación', options: [{ value: 'draft', label: 'Borrador (solo revisión local)' }, { value: 'published', label: 'Publicado' }], description: 'Los borradores se excluyen del sitio, archivo, CV y RSS. Publicar requiere revisión y despliegue.' },
          { type: 'string', name: 'language', label: 'Idioma principal', options: ['es', 'en'] },
          { type: 'string', name: 'translationKey', label: 'Vínculo ES/EN', description: 'Misma clave en ambas versiones, por ejemplo mundo. Archivos separados: mundo-es y mundo-en.' },
          { type: 'string', name: 'experienceSlug', label: 'Experiencia relacionada en Resume', description: 'Slug del trabajo existente, por ejemplo around. Alimenta la fila VER EXPERIENCIA / EN RESUME de la tarjeta Estado y el enlace inverso en Resume. No crea otro empleo ni duplica los datos de la ficha técnica.' },
          { type: 'string', name: 'contentFormat', label: 'Formato del cuerpo', options: [{ value: 'bilingual', label: 'Un artículo ES/EN' }, { value: 'blocks', label: 'Bloques de un idioma (anterior)' }, { value: 'legacy', label: 'MDX existente' }], description: 'En ES/EN, completá Español e English; los campos de texto de raíz quedan para documentos anteriores. No cambiar un artículo existente sin migrar su contenido.' },
          { type: 'object', name: 'locales', label: 'Textos por idioma', fields: [
            { type: 'object', name: 'es', label: 'Español', fields: articleLocaleFields() },
            { type: 'object', name: 'en', label: 'English', fields: articleLocaleFields() },
          ] },
          {
            type: "string",
            name: "_template",
            label: "Template ID",
            ui: {
              component: "hidden",
            },
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            description: 'Nombre del documento en Tina. En modo ES/EN los títulos visibles se editan dentro de cada idioma.',
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "year",
            label: "Year",
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "string",
            name: "type",
            label: "Type",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "string",
            name: "stack",
            label: "Tech Stack",
            list: true,
          },
          {
            type: "string",
            name: "role",
            label: "Role",
          },
          {
            type: "string",
            name: "client",
            label: "Client / Company",
          },
          {
            type: "number",
            name: "order",
            label: "Order",
          },
          {
            type: "image",
            name: "image",
            label: "Cover Image (Landscape)",
          },
          {
            type: "image",
            name: "imagePortrait",
            label: "Card Image (Portrait 3:4)",
          },
          { type: 'string', name: 'imageAlt', label: 'Texto alternativo de portada' },
          { type: 'string', name: 'imageCaption', label: 'Epígrafe de portada' },
          { type: 'string', name: 'imageCredit', label: 'Crédito de portada' },
          { type: 'string', name: 'status', label: 'Estado del trabajo', description: 'Estado real del proyecto, independiente de publicación: por ejemplo Trabajo académico o En desarrollo.' },
          {
            type: "boolean",
            name: "showInResume",
            label: "Show in Resume",
          },
          {
            type: "boolean",
            name: "showInPortfolio",
            label: "Show in Portfolio",
          },
          {
            type: "string",
            name: "points",
            label: "Experience Points (Resume)",
            list: true,
          },
          {
            type: "string",
            name: "categories",
            label: "Categorías de filtro",
            description: "Seleccioná a qué categorías pertenece este proyecto (para los filtros del portfolio)",
            list: true,
            options: PROJECT_CATEGORIES.map(c => ({ value: c.value, label: c.label })),
          },
          {
            type: "string",
            name: "timeline",
            label: "Timeline",
            description: "Ej: 12 Weeks, 6 Months, 2020 - 2022",
          },
          {
            type: "string",
            name: "codeSnippet",
            label: "Code Blueprint",
            description: "Fragmento de código representativo del proyecto",
            ui: { component: "textarea" },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          { type: 'object', name: 'contentBlocks', label: 'Contenido del artículo (bloques)', list: true, templates: articleBlockTemplates },
        ],
      },

      // ─── PAGES ─────────────────────────────────────────────────────────────
      {
        name: "pages",
        label: "Pages",
        path: "src/content/pages",
        format: "mdx",
        ui: {
          router: ({ document }: { document: any }) => {
            const name = document._sys.filename;
            if (name === 'home') return '/';
            if (name === 'about') return '/about';
            if (name === 'archive') return '/archive';
            if (name === 'resume') return '/resume';
            return undefined;
          },
        },
        templates: [
          // ── Home page ────────────────────────────────────────────────────
          {
            name: "home",
            label: "Home Page",
            match: { filename: "home" },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Hero Title",
                description: "Use // to split the accent color (e.g. Compiled // Visions.)",
                isTitle: true,
                required: true,
              },
              {
                type: "string",
                name: "mission",
                label: "Mission / Headline",
              },
              {
                type: "string",
                name: "status",
                label: "Sidebar Status",
              },
              {
                type: "string",
                name: "location",
                label: "Sidebar Location",
              },
              {
                type: "string",
                name: "timezone",
                label: "Sidebar Timezone",
              },
            ],
          },
          // ── About page ───────────────────────────────────────────────────
          {
            name: "about",
            label: "About Page",
            match: { filename: "about" },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Page Title",
                isTitle: true,
                required: true,
              },
              {
                type: "string",
                name: "mission",
                label: "Mission / Tagline",
              },
              {
                type: "rich-text",
                name: "body",
                label: "Bio Text",
                isBody: true,
              },
              {
                type: "object",
                name: "philosophies",
                label: "Core Philosophy Cards",
                list: true,
                ui: {
                  itemProps: (item: any) => ({ label: item?.title || "Philosophy" }),
                },
                fields: [
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon",
                    options: ["beaker", "settings", "monitor"],
                  },
                  {
                    type: "string",
                    name: "accent",
                    label: "Accent Color",
                    options: ["primary", "secondary", "tertiary"],
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: { component: "textarea" },
                  },
                ],
              },
            ],
          },

          // ── Archive page ─────────────────────────────────────────────────
          {
            name: "archive",
            label: "Archive Page",
            match: { filename: "archive" },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Page Title",
                isTitle: true,
                required: true,
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle / Description",
              },
              {
                type: "rich-text",
                name: "body",
                label: "Body",
                isBody: true,
              },
            ],
          },

          // ── Resume page ──────────────────────────────────────────────────
          {
            name: "resume",
            label: "Resume Page",
            match: { filename: "resume" },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Job Title / Headline",
                isTitle: true,
                required: true,
              },
              {
                type: "string",
                name: "location",
                label: "Location",
              },
              {
                type: "string",
                name: "email",
                label: "Email",
              },
              {
                type: "string",
                name: "status",
                label: "Availability Status",
              },
              // ── Skills ──────────────────────────────────────────────────
              {
                type: "object",
                name: "skillGroups",
                label: "Skill Groups (Section 02)",
                list: true,
                ui: {
                  itemProps: (item: any) => ({ label: item?.category || "Skill Group" }),
                },
                fields: [
                  {
                    type: "string",
                    name: "category",
                    label: "Category Name",
                    required: true,
                  },
                  {
                    type: "object",
                    name: "items",
                    label: "Skills",
                    list: true,
                    ui: {
                      itemProps: (item: any) => ({ label: item?.name || "Skill" }),
                    },
                    fields: [
                      {
                        type: "string",
                        name: "name",
                        label: "Skill Name",
                        required: true,
                      },
                      {
                        type: "string",
                        name: "value",
                        label: "Usage / task",
                        required: true,
                      },
                    ],
                  },
                ],
              },
              // ── Education ────────────────────────────────────────────────
              {
                type: "object",
                name: "education",
                label: "Education (Section 03)",
                list: true,
                ui: {
                  itemProps: (item: any) => ({ label: item?.degree || "Education Entry" }),
                },
                fields: [
                  {
                    type: "string",
                    name: "degree",
                    label: "Degree / Program",
                  },
                  {
                    type: "string",
                    name: "institution",
                    label: "Institution",
                  },
                  {
                    type: "string",
                    name: "year",
                    label: "Year / Class of",
                  },
                ],
              },
              // ── Body ─────────────────────────────────────────────────────
              {
                type: "rich-text",
                name: "body",
                label: "Short Bio / Intro",
                isBody: true,
              },
            ],
          },
        ],
      },

      // ─── GLOBAL ────────────────────────────────────────────────────────────
      {
        name: "global",
        label: "Global Settings",
        path: "src/content/global",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "copyright",
            label: "Copyright Text",
          },
          {
            type: "object",
            name: "links",
            label: "Footer Links",
            list: true,
            ui: {
              itemProps: (item: any) => ({ label: item?.name || "Link" }),
            },
            fields: [
              {
                type: "string",
                name: "name",
                label: "Text",
                required: true,
              },
              {
                type: "string",
                name: "url",
                label: "URL",
                required: true,
              },
              {
                type: "string",
                name: "icon",
                label: "Lucide Icon",
                options: [
                  "github", "linkedin", "instagram", "twitter",
                  "facebook", "youtube", "tiktok", "behance",
                  "dribbble", "whatsapp", "telegram", "discord",
                  "bluesky", "pinterest",
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // ── Screen Plugin: Portfolio Dashboard ─────────────────────────────────────
  cmsCallback: (cms) => {
    cms.plugins.add({
      __type: "screen",
      name: "Portfolio Overview",
      Icon: () => "📊",
      layout: "fullscreen",
      Component: PortfolioDashboard,
    });
    return cms;
  },
});

