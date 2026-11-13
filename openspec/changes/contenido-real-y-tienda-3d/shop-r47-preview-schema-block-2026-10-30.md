# R47 — Esquema regenerado y Preview detenida por Tina Cloud

Continuación autorizada tras proponer regenerar Tina y actualizar la Preview con R46.

## Resultado y selección

- Rama conservada: `codex/tienda-catalogo-real`, base `156a85d65f657130820ddf7566b58f6b2deba213`.
- Commit selectivo enviado: `4d25139ef1bcba421b5b283e83919a253028c58c`, 20 archivos, 90 inserciones y 137 eliminaciones.
- Esquema generado mediante una única instancia de `npm.cmd run dev`, sin servidor previo en 4002/9001/4322. Tina terminó su inicialización y regeneró el lock y archivos ignorados. Proceso propio detenido después; no build local ni suites.
- Comparación semántica de `tina/tina-lock.json`: las colecciones ajenas a shopProduct son idénticas a HEAD previo. Campos finales de tienda: title, status, category, locales, palette, details, productionMode, productionNotes, photos. No edición manual del generado.
- Índice exacto de 20 archivos, hashes preservados, 490 entradas restantes de status idénticas e índice vacío después del commit. Evidencia en `output/shop-r47/candidate.json`, `generated-schema-diff.json`, `preservation.json`.

## Build remoto fallido, sin reintento

El único push activó una única Preview Git:

https://portfolio-2026-astro-iug10qfk6-aledesign-projects.vercel.app

El build ejecutó el comando configurado `npm run build && node scripts/verify-shop-catalogue-artifact.mjs` y terminó Error antes de Astro y del comprobador:

> The local GraphQL schema doesn't match the remote GraphQL schema.
> [BREAKING - FIELD_REMOVED] Field 'credit' was removed from object type 'ShopProductPhotos'

Rama remota indicada por Tina: `codex/tienda-catalogo-real`. Versiones local/remota 2.4.1. Última indexación informada: 2026-10-30 15:52:42 GMT, anterior al commit. No se desactivaron controles ni se alteró el producto para pasar el build. No reindexación manual, corrección o reconstrucción después del fallo, conforme a AGENTS.md.

Vercel MCP devolvió 404 para proyecto y 403 para listado. Fallback CLI con scope explícito `aledesign-projects` confirmó proyecto `prj_OZL34bgW5q9IcOglVLpPOX748Qrt`, Preview del SHA y log del fallo. Sin cambio de permisos.

## Próximo paso concreto

Actualizar manualmente el índice de **esa rama solamente** en Tina Cloud y, tras nueva autorización para el control fallido, reconstruir una sola vez la Preview. No omitir la comparación de esquemas. Hasta tener Ready, no considerar R46 publicado ni guardar desde el admin viejo. La última Preview Ready anterior continúa siendo la versión anterior; producción no se fusionó ni promovió. No hay evidencia de guardado/reapertura con el nuevo esquema ni validación visual de R46.

Los manifiestos locales y el informe R46 quedaron fuera del commit selectivo, al igual que la documentación amplia y todos los trabajos ajenos. PR #1 sigue como vía de revisión; no se intentó fusionar.
