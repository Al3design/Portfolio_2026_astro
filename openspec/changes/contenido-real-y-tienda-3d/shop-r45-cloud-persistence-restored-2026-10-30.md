# R45 — Guardado real en Tina Cloud y restauración

## Alcance autorizado y resultado

Alejandro completó el inicio de sesión pendiente en R44 y pidió continuar. Se ejecutó el único recorrido ya autorizado de nota interna del árbol: guardar una marca, salir/reabrir y restaurar el texto original. No se volvió a pedir autorización ni se amplió su alcance.

El editor de la Preview R43 consultó el endpoint de contenido `.../github/codex%2Ftienda-catalogo-real`, observado mediante eventos Network de CUA/CDP al abrir la colección. No se editaron main ni producción. Se deshabilitó la observación Network al finalizar.

Se registró baseline completo del JSON del árbol desde e51142a y se confirmó que el campo productionNotes del formulario coincidía con él (395 caracteres). Se agregó únicamente la marca `[CONTROL TINA CLOUD R45 2026-10-30 · temporal; restaurar]`.

1. Primer Save: commit Tina `a445660eb958609762c302930d075ecf444291f8`. Comparación semántica del JSON: única clave cambiada, productionNotes.
2. Reapertura desde la colección: valor completo con marca comprobado, `containsExactTemporaryValue=true`.
3. Segundo Save: texto original restaurado, commit Tina `156a85d65f657130820ddf7566b58f6b2deba213`.
4. Recarga de la ficha: `reopenedOriginal=true`, `markerAbsent=true`.
5. JSON completo remoto comparado contra baseline: `semanticEquality=true`, `remainingChangedKeys=[]`. El diff textual residual es el orden/formato que serializa Tina; los datos son idénticos.

No se cambiaron título, estado, licencia, variantes, colores, fotos o condiciones comerciales. No se pulsó otro Save ni se editaron los textos del portfolio.

## Navegación observada

Back del navegador desde la ficha volvió al inicio visual `/admin/#/~`, en lugar del listado. El enlace de colección desde ese modo tampoco dejó una ruta de listado estable. Se leyó la UI y se cargó el enlace exacto previamente expuesto por Tina, `/admin/index.html#/collections/shopProduct/~`; desde allí se reabrió el árbol. El wait inicial del listado agotó su plazo porque la ruta era la página inicial, no porque se hubiera perdido el guardado. Esto se registra como limitación de navegación del editor visual; no se corrigió ni ocultó en esta tanda.

## Sincronización y preservación

Se comprobó rama activa codex/tienda-catalogo-real, HEAD=e51142a, índice vacío y ficha local sin cambios antes de sincronizar. `git merge --ff-only origin/codex/tienda-catalogo-real` integró únicamente los dos commits de contenido autorizados. HEAD local=remoto=156a85d. Se compararon las entradas de git status antes/después excluyendo solo los artefactos propios de R45: 476 entradas preservadas; stagedFiles=[]. Main revalidado en 4752b2562cf105731eb409f96c05a497f7b0f803.

## Builds y publicación

Los dos guardados generaron las dos Previews automáticas previstas y autorizadas, sin ejecutar suites o builds manuales. La primera, `portfolio-2026-astro-krg5zanbf-aledesign-projects.vercel.app`, figuró READY. La Preview de la restauración, `portfolio-2026-astro-3sg38ogd8-aledesign-projects.vercel.app`, quedó READY en la inspección existente: deployment dpl_3PpkBNo7bP8jtR8yKdWeH2uf7bak, target preview, build 1m37s. Build Tina + Astro aprobado y comprobador de 20 páginas, 37 fuentes WebP, errors=[]. Registro en output/shop-r45/build-restored.txt. No se ejecutó otro build para inspeccionarlo.

No se fusionó el PR #1 ni se promovieron deployments. El editor utilizado sigue siendo el origen exacto autorizado en R44 (hiluainyv); permite editar la rama actual y no necesita autorizar cada nueva URL de artefacto para este recorrido.

## Evidencia

`output/shop-r45/`: refs-before.txt, tree-before.json, ui-baseline.json, tree-marked.json, reopened.json, tree-restored.json, restoration.json, ui-restoration.json, status-before-sync.txt, sync.json, tina-cloud-restored.png y deployments.txt.

## Pendientes

Esta evidencia acredita la persistencia/restauración de una nota interna existente por Tina Cloud. No equivale a validar creación/eliminación de fichas, todos los tipos de campo ni lector de pantalla. Persisten la revisión de Alejandro, accesibilidad integral y aprobación explícita de producción. OpenSpec general continúa abierto.
