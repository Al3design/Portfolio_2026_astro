# R43 — Portada y filtro móvil publicados en Preview protegida

## Resultado

- Rama actual conservada: `codex/tienda-catalogo-real`.
- Commit selectivo: `e51142ae9425024a7f06bc13d7f35e5cb37f1f41` (`e51142a`), once archivos R40/R41 más la corrección de su test; 266 inserciones y 27 eliminaciones. Sin ramas o worktrees nuevos.
- Preview READY: https://portfolio-2026-astro-hiluainyv-aledesign-projects.vercel.app/tienda#collection
- Catálogo: https://portfolio-2026-astro-hiluainyv-aledesign-projects.vercel.app/tienda/coleccion/
- Deployment `dpl_BNFWimUPQwMhWXGPD4jmmhFgx13E`, target preview, build 1m22s. Inspector: https://vercel.com/aledesign-projects/portfolio-2026-astro/BNFWimUPQwMhWXGPD4jmmhFgx13E
- PR #1 actualizado, abierto y en borrador, no fusionado: https://github.com/Al3design/Portfolio_2026_astro/pull/1
- Remote main sigue en `4752b2562cf105731eb409f96c05a497f7b0f803`. Último listado Vercel mantiene producción en `portfolio-2026-astro-90vfvh2y7-aledesign-projects.vercel.app`. No se ejecutó promoción ni asignación de dominios.

## Corrección y control autorizado

Tras el fallo R42, Alejandro pidió continuar. Se cambió únicamente el matcher textual del test a `/\bescritorio\b/i` o `/\bdesk\b/i`; siguen obligatorios categoría correcta, una pieza y desplegable cerrado. El producto y sus estilos no se alteraron para pasar el control.

Alejandro autorizó expresamente una ejecución de:

```powershell
npx.cmd e2e run tests/e2e/shop.e2e.ts --last-failed --reporter list,markdown --max-failures 1
```

Run `01a18dbc-bb4a-7afc-bca9-f075320ab03a`, salida 0, 17,60 segundos: cuatro escenarios aprobados. El escenario de navegación/tema/idioma que aprobó en R42 no se repitió. Resultado acumulado: cinco escenarios aprobados, no una corrida nueva de cinco. No se repitieron las suites de revisión editorial ya verdes ni se iniciaron modelos, otro Tina o e2e MCP.

## Selección y preservación

Índice inicial vacío. Manifiesto `output/shop-r43/candidate.json` con base 7378103 y SHA256 de once archivos. Antes del commit se verificó igualdad exacta entre selección y nombres staged, igualdad de hashes y preservación de las 464 entradas restantes de git status. Evidencia en `preservation.json`; el índice quedó vacío tras el commit. Los informes, OpenSpec amplio, AGENTS, CodeGraph y otros trabajos locales quedaron fuera del envío.

Push únicamente a `refs/heads/codex/tienda-catalogo-real`, que disparó un único build Preview por la integración Git existente. No se desplegó el checkout sucio ni se repitió un build local.

## Artefacto remoto y auditoría

El build remoto ejecutó `npm run build && node scripts/verify-shop-catalogue-artifact.mjs`. Tina Cloud completó la indexación de la rama sin cambios de esquema o configuración manual. Tina + Astro aprobados: 62 páginas totales del sitio; comprobador del catálogo: 20 páginas, 37 fuentes WebP optimizadas, errors=[] (29 fotografías originales).

Auditoría Chrome con la sesión autenticada existente: portada de tres novedades, enlace al catálogo de ocho y vuelta a portada. Para revisar el móvil remoto se usó la capacidad CDP documentada de CUA, emulación temporal de 390×844, evitando el override Chrome que no aplicaba en R40. Observados botón Filtrar, expansión, selección Escritorio, solo soporte Creeper visible y aria-expanded=false. innerWidth=390 y scrollWidth=390. Captura `output/shop-r43/preview-mobile-filter.png`. Emulación eliminada al terminar; Preview dejada abierta como entregable. No se enviaron mensajes por WhatsApp ni se modificó contenido Tina.

Se mantuvo la protección existente, sin enlaces compartibles nuevos, tokens de bypass ni cambios de permisos. Skills usadas: vercel:deployments-cicd y access-protected-vercel-deployment; acceso por la sesión existente.

## Evidencia

- `output/shop-r43/e2e-summary.md`, `e2e-report.json`.
- `output/shop-r43/build-log.txt`, `deployment.json`.
- `output/shop-r43/candidate.json`, `status-before.txt`, `preservation.json`.
- `output/shop-r43/preview-mobile-filter.png`.

## Pendientes que continúan

Revisión/aprobación de Alejandro de esta Preview antes de producción; auditoría integral de teclado/lector de pantalla y persistencia completa en Tina Cloud siguen fuera de esta comprobación. No se declara cerrado el OpenSpec general ni se archiva: contiene otros trabajos editoriales y comercio futuro. Carrito, cobros y contratación de envíos permanecen diferidos; precio a consultar, entrega según stock y a confirmar, solo impresión incluida siguen vigentes.
