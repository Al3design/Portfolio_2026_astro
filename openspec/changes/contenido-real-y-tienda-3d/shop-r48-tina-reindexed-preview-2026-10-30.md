# R48 — Reindexación de Tina y reconstrucción acotada

Autorización: «dale, segui» después de informar el fallo R47 y el siguiente paso concreto: reindexar la rama y reconstruir una vez.

- Rama y commit conservados: `codex/tienda-catalogo-real`, `4d25139ef1bcba421b5b283e83919a253028c58c`.
- Tina Cloud, proyecto Portfolio2026astro y repo Al3design/Portfolio_2026_astro: un clic en Reindex de esa rama únicamente. Refresh Branches mostró `complete`, fecha local 30/10/2026 19:11:49. Main conservó su índice anterior. No se cambiaron Site URLs, tokens, protecciones ni planes.
- Evidencia: `output/shop-r48/tina-indexed.png`.
- Un único comando de reconstrucción, sin push adicional ni build local:

```powershell
npx.cmd vercel@65.8.0 --scope aledesign-projects redeploy portfolio-2026-astro-iug10qfk6-aledesign-projects.vercel.app
```

- Nueva Preview: https://portfolio-2026-astro-4tn9pljiy-aledesign-projects.vercel.app
- Inspector: https://vercel.com/aledesign-projects/portfolio-2026-astro/7ZH5zR121EpusLtP9BHfnYT1i73k
- No suites ni controles de guardado Tina. Sin commits nuevos ni cambios de producción. Remote main leído durante esta operación: `4752b2562cf105731eb409f96c05a497f7b0f803`.

## Resultado final

Reconstrucción terminada Ready, salida 0, aproximadamente 3 minutos. Tina + Astro aprobados (62 páginas del sitio). Comprobador del catálogo: 20 páginas, 37 fuentes de fotos optimizadas, errors=[]. Log conservado en output/shop-r48/build-log.txt. Sin nuevo build ni reintentos adicionales.

Auditoría del navegador autenticado existente: portada con tres novedades e introducción directa; enlace a colección de ocho; apertura del árbol con descripción, paleta, condiciones y cuidados actuales, sin narración personal ni referencias eliminadas; primera foto cargada (518px naturales). Enlace WhatsApp leído, no enviado. Regreso a colección y captura preview-collection.png. No recorrido de guardado/reapertura en el admin nuevo: Site URLs sigue autorizando el origen antiguo hiluainyv, no se amplió su lista. La compilación del editor nuevo está incluida en esta Preview; para usarlo en Cloud habrá que habilitar su origen exacto. R45 no acredita persistencia con este nuevo esquema.

R46 disponible en Preview, no en producción. Main sin merge/promoción; accesibilidad integral y aprobación de producción continúan pendientes. Capturas de auditoría a cargo del orquestador; no suite E2E repetida.

