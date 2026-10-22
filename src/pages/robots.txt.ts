import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => new Response([
  'User-agent: *',
  'Allow: /',
  'Disallow: /admin/',
  '',
  `Sitemap: ${new URL('/sitemap.xml', site ?? 'https://al3design.dev')}`,
  '',
].join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
