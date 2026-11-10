---
name: astro
description: Skill for building with the Astro web framework. Helps create Astro components and pages, configure SSR adapters, set up content collections, deploy static sites, and manage project structure and CLI commands. Use when the user needs to work with Astro, mentions .astro files, asks about static site generation (SSG), islands architecture, content collections, or deploying an Astro project.
license: MIT
metadata: 
  authors: "Astro Team"
  version: "0.0.1"
---

# Astro Usage Guide

Project policy (Alejandro, 2026-10-16): follow AGENTS.md and docs/TESTING_MCP.md. Repeated suites and duplicate MCP processes exhausted context and RAM in GitCron. The executor does not run verification, builds, tests, type checks, lint, e2e, or take/inspect screenshots per batch. Only an explicit batch prompt may request a control command: run that command once; on failure report and deliver without retries or substitute checks. The orchestrator audits each batch by diff without verification, owns audit screenshots, and runs final verification after all OpenSpec tasks are complete, before archive/merge. Preserve tests and protections; report explicitly named exceptions without disabling controls. Do not use the e2e MCP tool or reactivate its global server without consulting Alejandro; use console e2e only when authorized by that policy. Command examples below are reference, not batch instructions.

**Always consult [docs.astro.build](https://docs.astro.build) for code examples and latest API.**

Astro is the web framework for content-driven websites.

## Portfolio + Tina integration

For this repository, read [the editorial guide](../../../docs/GUIA_EDITORIAL_IA.md) before changing content, previews or publication. Tina's collection listing can pass only `_sys` to `ui.router`; missing title is not evidence of a draft. Keep routing in `src/lib/project-editor-route.ts`: local review and deployed visual editing have different route availability. Never expose draft review routes in production to make the editor work. A router fix needs a rebuilt admin bundle; reindexing Tina Cloud alone does not publish it. Keep router, `useTina` subscription and renderer connected, and distinguish bundle/build evidence from an observed visual editing session.

Use the existing `npm run dev` for Tina + Astro rather than Astro alone. Cloud origin permissions, branch indexing, content saves and deployments are separate operations; see the editorial guide for their current procedures. These instructions do not authorize additional controls or releases.

---

## Quick Reference

### File Location
CLI looks for `astro.config.js`, `astro.config.mjs`, `astro.config.cjs`, and `astro.config.ts` in: `./`. Use `--config` for custom path.

### CLI Commands

- `npx astro dev` - Start the development server.
- `npx astro build` - Build your project and write it to disk.
- `npx astro check` - Check your project for errors.
- `npx astro add` - Add an integration.
- `npx astro sync` - Generate TypeScript types for all Astro modules.

**Record plugin changes for final verification; do not re-run checks automatically.**

### Project Structure

Reference [project structure docs](https://docs.astro.build/en/basics/project-structure).

- `src/*` - Project source code (components, pages, styles, images, etc.)
- `src/pages` - **Required.** Defines all pages and routes.
- `src/components` - Components (convention, not required).
- `src/layouts` - Layout components (convention, not required).
- `src/styles` - CSS/Sass files (convention, not required).
- `public/*` - Non-code, unprocessed assets (fonts, icons, etc.); copied as-is to build output.
- `package.json` - Project manifest.
- `astro.config.{js,mjs,cjs,ts}` - Astro configuration file. (recommended)
- `tsconfig.json` - TypeScript configuration file. (recommended)

---

## Core Config Options

| Option | Notes |
|--------|-------|
| `site` | Your final, deployed URL. Used to generate sitemaps and canonical URLs. |

### Example `astro.config.ts`

```ts
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com',
});
```

---

## Common Workflows

### Creating a Basic Page

Add a file to `src/pages/` — the filename becomes the route:

```astro
---
// src/pages/index.astro
const title = 'Hello, Astro!';
---
<html>
  <head><title>{title}</title></head>
  <body>
    <h1>{title}</h1>
  </body>
</html>
```

### Creating a Component

```astro
---
// src/components/Card.astro
const { title, body } = Astro.props;
---
<div class="card">
  <h2>{title}</h2>
  <p>{body}</p>
</div>
```

### Deploying with an Adapter

1. Add the adapter: `npx astro add vercel --yes` (or `node`, `cloudflare`, `netlify`)
2. The orchestrator includes type/configuration checks in final verification, subject to project policy above.
3. The orchestrator uses the project's `npm run build` (TinaCMS + Astro) for the final deployment artifact; do not add an Astro-only fallback after failure.
4. The orchestrator reviews the output directory (e.g. `dist/`) in the final verification before proceeding.
5. Deploy the output per the adapter's documentation.

---

## Adapters

Deploy to your favorite server, serverless, or edge host with build adapters. Use an adapter to enable on-demand rendering in your Astro project.

**Add [Node.js](https://docs.astro.build/en/guides/integrations-guide/node) adapter using astro add:**
```
npx astro add node --yes
```

**Add [Cloudflare](https://docs.astro.build/en/guides/integrations-guide/cloudflare) adapter using astro add:**
```
npx astro add cloudflare --yes
```

**Add [Netlify](https://docs.astro.build/en/guides/integrations-guide/netlify) adapter using astro add:**
```
npx astro add netlify --yes
```

**Add [Vercel](https://docs.astro.build/en/guides/integrations-guide/vercel) adapter using astro add:**
```
npx astro add vercel --yes
```

[Other Community adapters](https://astro.build/integrations/2/?search=&categories%5B%5D=adapters)

## Resources

- [Docs](https://docs.astro.build)
- [Config Reference](https://docs.astro.build/en/reference/configuration-reference/)
- [llms.txt](https://docs.astro.build/llms.txt)
- [GitHub](https://github.com/withastro/astro)
