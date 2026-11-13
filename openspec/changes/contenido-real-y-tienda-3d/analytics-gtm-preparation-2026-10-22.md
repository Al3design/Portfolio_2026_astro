# Analytics / GTM — preparación 2026-10-22

## Alcance y evidencia
- Solicitud de Alejandro: revisar el contenedor de la captura y conectar sin duplicar Analytics.
- Flujo GA4 9934126437: URL actualizada previamente a https://al3design.dev; medición G-JGHRGD2X1R.
- GTM-KNVXGZVD, cuenta 6257563169, contenedor 199848985: versión publicada vacía (Empty Container, 2024-11-12).
- Workspace 2 tenía dos etiquetas añadidas pendientes: Google tag G-JGHRGD2X1R (Initialization - All Pages), y evento GA4 EventoAnalytics (All Pages).
- EventoAnalytics guardado en pausa en el workspace; no se eliminó ni publicó.

## Cambio preparado
- src/layouts/MainLayout.astro: reemplazar gtag.js/config directo por snippet oficial GTM, con is:inline para conservar su ejecución en head.
- Bloque noscript existente inmediatamente después de body.
- La etiqueta Google del contenedor conserva G-JGHRGD2X1R; no crear otra propiedad o flujo.
- Publicar el contenedor antes de desplegar este layout, dado que actualmente el contenedor publicado está vacío. El sitio desplegado sigue usando el gtag directo hasta entonces.

## Estado
- Diff leído; sin builds, tests, lint o e2e ejecutados.
- Pendiente autorización expresa del comando de build y publicación coordinada del layout y contenedor.
- No se modifican TinaCMS, artículos, políticas ni tres borradores pausados.
- La recogida real y ausencia de page_view duplicados requiere comprobarse tras la publicación; inspección de código no demuestra recepción.

## Referencias consultadas
- https://developers.google.com/tag-platform/devguides/existing
- https://support.google.com/tagmanager/answer/9442095?hl=en
- https://docs.astro.build/en/guides/client-side-scripts/

## Publicación autorizada
- Alejandro autorizó expresamente una ejecución de `npm.cmd run build:local` y publicación si pasa.
- Ejecutado UNA vez: exit code 0, 42 páginas, Astro 24.36 s. Sin nuevos controles de build/tests/lint/e2e. Advertencia no bloqueante DEP0190 de Tina.
- GTM publicó versión 2, Analytics de al3design.dev mediante GTM, el 2026-10-22 11:12 ART. Confirmada en UI como publicada; evento genérico muestra indicador de pausa en esa versión.
- Commit selectivo `afb64ab`: solo src/layouts/MainLayout.astro, 8 líneas añadidas/8 quitadas; push main correcto.
- Vercel automático: dpl_4ttjRJWusiYxpNrCTT9jrChmfh7f, production READY; https://portfolio-2026-astro-34ctypxjs-aledesign-projects.vercel.app, build remoto 1m35s.
- Lectura HTTP final de https://al3design.dev/: 200; bootstrap GTM-KNVXGZVD presente; gtag/js?id=G-JGHRGD2X1R y gtag('config') directos ausentes; noscript correcto presente.
- Evidencia visual: output/gtm-published-2026-10-22.png.
- No se afirma recepción de eventos individuales ni conteo real de page_view a partir de la inspección HTML. No se modificaron permisos, consentimiento, propiedad ni flujo GA4.
- Borradores, políticas y demás archivos locales permanecen fuera del commit y despliegue.
