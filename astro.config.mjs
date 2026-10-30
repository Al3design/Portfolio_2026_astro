// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
let shopReviewDevelopment = false;

// https://astro.build/config
export default defineConfig({
  site: 'https://al3design.dev',
  integrations: [react(), mdx(), {
    name: 'shop-local-review',
    hooks: {
      'astro:config:setup': ({ command, injectRoute }) => {
        shopReviewDevelopment = command === 'dev';
        // Dynamic local content must not depend on a cached getStaticPaths list.
        // Do not register these handlers for builds or production previews.
        if (command !== 'dev') return;
        injectRoute({
          pattern: '/revision/tienda/[language]/[...slug]',
          entrypoint: './src/editorial/ShopReview.astro',
          prerender: false,
        });
        injectRoute({
          pattern: '/revision/tienda/media/[batch]/[file]',
          entrypoint: './src/editorial/shop-media.ts',
          prerender: false,
        });
      },
      'astro:route:setup': ({ route }) => {
        if (!shopReviewDevelopment) return;
        const component = route.component.replace(/\\/g, '/');
        if (component.endsWith('/src/pages/tienda.astro') || component.endsWith('/src/pages/en/shop-3d.astro')
          || component === 'src/pages/tienda.astro' || component === 'src/pages/en/shop-3d.astro') {
          // Prerendered requests discard their query string, even in dev.
          // Read catalog/piece only on the local development server.
          route.prerender = false;
        }
      },
    },
  }],
  vite: {
    // Keep Tina's React hooks in Vite's SSR module graph instead of mixing an
    // external Node React instance with Astro's optimized renderer instance.
    ssr: { noExternal: ['tinacms'] },
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "${path.resolve(__dirname, './src/styles/abstracts').replace(/\\/g, '/')}" as *;`
        }
      }
    }
  }
});
