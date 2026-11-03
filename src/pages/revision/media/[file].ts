import type { APIRoute, GetStaticPaths } from 'astro';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const files = ['mundo-poster.webp','mundo-preview.mp4','toplomero-poster.webp','toplomero-preview.mp4',
  'bdm-home-desktop.webp','bdm-home-desktop-full.webp',
  'bdm-capital-humano-desktop.webp','bdm-home-mobile.webp',
  'bdm-home-mobile-full.webp','bdm-capital-humano-mobile.webp',
  'around-layout-slide.webp','around-alert-slide.webp',
  'discovery-poster.webp','discovery-frame-1.webp','discovery-frame-2.webp','discovery-preview.mp4',
  'tren-poster.webp','tren-frame-1.webp','tren-frame-2.webp','tren-preview.mp4',
  'pitufos-poster.webp','pitufos-frame-1.webp','pitufos-frame-2.webp','pitufos-preview.mp4',
  'pitufos-mushroom-1.webp','pitufos-mushroom-2.webp','pitufos-mushroom-3.webp',
  'pitufos-mushroom-3-2.webp','pitufos-mushroom-3-3.webp',
  'toplomero-fur-3.webp','toplomero-fur-6.webp','toplomero-setting-2.webp',
  'toplomero-scene-5.webp','toplomero-water-6.webp',
  'chokie-land-1.webp','chokie-land-4.webp','chokie-land-6.webp','chokie-land-7.webp',
  'chokie-land-8.webp','chokie-land-13.webp','chokie-land-14.webp','chokie-render-211.webp',
  'rioko-navigation.webp','rioko-budget.webp','rioko-results.webp',
  'paris-home.webp','paris-poi.webp','paris-tickets.webp','paris-gallery.webp','geekies-catalog.webp',
  'mate-instagram.webp','mate-sidebar.webp','mate-banner.webp','mate-flyer.webp',
  'cv-personal-dark.webp','cv-personal-light.webp',
  'botf-vesta-perspective.webp','botf-vesta-front.webp','botf-vesta-left.webp',
  'supremacy-study-021.webp','supremacy-study-023.webp',
  'casa-render-01.webp','casa-render-05.webp','casa-render-09.webp',
  'botf-miranda-proto-1.webp','botf-miranda-proto-2.webp',
  'botf-kelvin-1.webp','botf-kelvin-2.webp','botf-saladin-1.webp','botf-saladin-2.webp',
  'botf-titan-1.webp','botf-titan-2.webp','botf-turret-1.webp','botf-turret-2.webp',
  'botf-immense-stations-1.webp','botf-immense-stations-2.webp',
  'botf-constitution-kelvin-1.webp','botf-constitution-kelvin-2.webp',
  'botf-k7-station-1.webp','botf-k7-station-2.webp','botf-borg-probe-1.webp','botf-borg-probe-2.webp',
  'supremacy-3d-1.webp','supremacy-3d-2.webp','supremacy-3d-3.webp','supremacy-3d-5.webp',
  'botf-textured-collage.webp','botf-miranda-textured.webp','botf-kelvin-textured.webp','botf-vesta-textured.webp',
  'gitcron-context-panel.webp','gitcron-context-menu.webp',
  'useodontopro-home-desktop.webp','useodontopro-home-mobile.webp',
  'useodontopro-plans-desktop.webp','useodontopro-plans-mobile.webp','odontopau-article-mobile.webp',
  'odontopau-home-desktop.webp','odontopro-patients-demo.webp','odontopro-record-demo.webp'];
// Tina's local build sets NODE_ENV=development; Vite's mode still distinguishes
// the development server from a production build of the local content.
export const getStaticPaths: GetStaticPaths = () => import.meta.env.MODE === 'development'
  ? files.map(file => ({ params: { file } })) : [];

// Development-only media: no files copied to public or emitted in production.
export const GET: APIRoute = async ({ params }) => {
  if (import.meta.env.MODE !== 'development' || !params.file || !files.includes(params.file)) return new Response(null,{status:404});
  const data = await readFile(resolve(process.cwd(), 'src/editorial/assets', params.file));
  // Small review derivatives are served whole; no streaming server is needed.
  const headers = new Headers({'Content-Type':params.file.endsWith('.mp4')?'video/mp4':'image/webp','Cache-Control':'no-store','X-Robots-Tag':'noindex, nofollow'});
  headers.set('Content-Length',String(data.length));
  return new Response(new Uint8Array(data),{headers});
};
