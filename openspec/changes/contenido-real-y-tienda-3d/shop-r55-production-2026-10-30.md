# R55 — Publicación autorizada en producción

## Alcance y autorización

Alejandro respondió «dale, subilo» después de aclarar que faltaba producción para compartir públicamente. Se interpretó y anunció explícitamente la publicación en al3design.dev. Durante el cierre pidió mover el RSS al topbar como icono; se incorporó antes del control final y merge.

- RSS localizado en las acciones derechas del topbar de escritorio; en móvil, dentro del menú, siguiendo el patrón del portfolio. Icono existente Lucide, etiqueta accesible y enlace correspondiente al idioma. Retirados los enlaces de texto redundantes del cuerpo. Portfolio conserva su /rss.xml.
- Actualizadas las expectativas del test que aún buscaban precio/entrega dentro del header, después del cambio autorizado de posición. Se conservan los valores obligatorios y se agrega la comprobación de que la consulta está después de la galería y las fotos conservan proporción.
- Añadidos escenarios ES/EN de compartir/copia con fallback y RSS con ocho GUID únicos/fotos, metadatos y ausencia de notas. Sin activar envío de WhatsApp o compartir nativo.

## Control final del alcance catálogo

Como orquestador en el cierre de esta publicación, según AGENTS.md, una única ejecución:

```powershell
npx.cmd e2e run tests/e2e/shop.e2e.ts tests/e2e/shop-review.e2e.ts --reporter list,markdown --max-failures 1
```

Run `01a18f05-fcb5-7f63-8dd3-d4ae4b966fad`, salida 0: **11/11**, dos archivos, 62,23 segundos. Cuatro escenarios editoriales y siete públicos, incluyendo navegación/idiomas/tema, filtros 320/1440, fotografías, privacidad, consulta y compartir/copia/RSS. Evidencia copiada a output/shop-r55/e2e-summary.md y e2e-report.json. No suite general del portfolio ni modelos/API keys.

El sondeo inicial por Get-NetTCPConnection no mostró listeners; un intento de npm run dev informó 9001 ocupado. Se identificaron los procesos propios ya existentes (33512/15880) y se comprobó HTTP 200 en 4322; se reutilizó ese servidor. No procesos ajenos terminados ni segunda instancia mantenida. Esto no fue un fallo de producto ni se repitió la suite.

## Selección y fusión

Commit `29e5f6338654423b643eb12c4b54ea647e52cabb`, cuatro archivos del ajuste y test final; 513 entradas ajenas de status preservadas, hashes iguales, sin checkout/worktree nuevo. Preview final Ready: https://portfolio-2026-astro-qgwjor8zl-aledesign-projects.vercel.app . Build remoto aprobado; log en output/shop-r55/preview-build-log.txt.

PR #1 actualizada y marcada ready; GitHub informó mergeable=true. Merge autorizado con expected_head_sha exacto, método merge: `2e9b3dd1306af2ffe10e34b48ff08feabd08fdd5`. PR https://github.com/Al3design/Portfolio_2026_astro/pull/1 . La PR completa contiene solo el trabajo selectivo del catálogo (79 archivos); no se envió el checkout sucio.

Inmediatamente después del merge se reindexó main en Tina Cloud una vez, para que el build de producción usara el esquema nuevo. Refresh Branches confirmó complete a las 19:58:43 locales. Evidencia tina-main-indexed.png. No cambios de tokens, Site URLs, protecciones o planes. El origen al3design.dev ya estaba autorizado.

Despliegue Git de producción identificado: https://portfolio-2026-astro-p76skc6cp-aledesign-projects.vercel.app . No deploy manual del checkout ni promoción del artefacto Preview con variables distintas.

## Continuidad

El cierre corresponde a esta publicación de catálogo y consulta asistida. El OpenSpec general no se archiva porque contiene otros trabajos y comercio futuro. La auditoría integral con lector de pantalla y el envío real/previsualización dentro de WhatsApp/Instagram no quedan acreditados por estos controles. No carrito, cobros o contratación de envíos integrados. Se conserva el noindex de tienda por decisión anterior.

## Producción comprobada

Deployment dpl_2YF2wtkrpwR8SrQPPqSiSFxiqUxw Ready, target production, build 1m09s, aliases al3design.dev y www.al3design.dev. Build Tina+Astro y checker aprobados: 20 páginas, 2 feeds, 37 fuentes de galería, 8 fotos sociales, errors=[]. Log production-build-log.txt.

Acceso HTTP sin cookies como User-Agent WhatsApp/2.0: ficha perro y su JPEG 1200×630 devuelven 200, MIME image/jpeg y firma JPEG; imagen y og:url apuntan a al3design.dev. Feed ES y EN devuelven XML con ocho ítems, ocho fotos y enlaces públicos correctos. RSS portfolio conserva su canal y 18 ítems; home 200. Revisión local y JSON editorial: 404. Evidencia public-http.json. No envío real a aplicaciones.

El primer sondeo HTTP se detuvo porque buscaba el icono RSS en HTML estático: Navigation lo muestra tras hidratación. Se corrigió únicamente el alcance de ese sondeo, sin modificar producto: se verificó autodiscovery en HTML y el icono en navegador hidratado. Comprobaciones restantes continuadas, sin repetir la suite E2E ni builds. Navegador de producción muestra el icono RSS arriba a la derecha con href /tienda/rss.xml; captura production-topbar-rss.png inspeccionada.

origin/main actualizado por fetch a 2e9b3dd; checkout permanece en codex/tienda-catalogo-real (29e5f63), sin cambio de rama ni restauraciones sobre archivos ajenos. Índice vacío. La publicación queda completada; no se archiva el OpenSpec general.

