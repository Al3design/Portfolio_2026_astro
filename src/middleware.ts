import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  // Astro dev serves the generated HTML file, without a directory-index fallback.
  // Keep this dev-only: do not emit an Astro /admin page over Tina's index.html.
  if (import.meta.env.DEV && (context.url.pathname === '/admin' || context.url.pathname === '/admin/')) {
    return context.redirect('/admin/index.html' + context.url.search, 302);
  }
  return next();
});
