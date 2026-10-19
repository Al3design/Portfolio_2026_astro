// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://al3design.dev',
  integrations: [react(), mdx()],
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
