# R39 — Rama de revisión, Tina Cloud y vista previa

## Autorización y selección

Alejandro autoriza expresamente una Preview protegida del candidato R38. El primer despliegue de ese candidato falla en Tina antes de Astro: las variables sí están disponibles en Vercel, pero el esquema local nuevo no coincide con main indexado en Tina Cloud.

Tras explicar que el paso siguiente requiere una rama en GitHub para indexar el esquema y que AGENTS.md impide crear ramas automáticamente, Alejandro indica «dale gas». Se aplica esa autorización contextual para la rama de revisión y su push selectivo; no para fusionar o publicar producción.

- Rama activa nueva: codex/tienda-catalogo-real, desde 4752b2562cf105731eb409f96c05a497f7b0f803.
- Commit: 737810354d9d65378a43b5fab035a43daba993d4, `feat(shop): prepare real print catalogue and protected preview checks`.
- 68 archivos: los 65 del candidato R38 (SHA256 contrastados sin diferencias previas), vercel.json con build/checker y las dos pruebas de tienda preparadas. Solo estas rutas se agregaron al índice; estaba vacío antes y quedó vacío tras el commit.
- Push exclusivo a origin/codex/tienda-catalogo-real. origin/main sigue en 4752b2562cf105731eb409f96c05a497f7b0f803.
- PR en borrador: https://github.com/Al3design/Portfolio_2026_astro/pull/1 . No se fusionó.
- Estado de rutas ajenas: las 448 entradas de status previas fuera de la selección se conservaron sin retiradas ni cambios de estado. Solo aparecieron dos nuevos archivos de evidencia propios en output/shop-r39. No se creó worktree ni se copiaron otros borradores al commit.

## Intentos de Preview e indexación

1. Candidato temporal autorizado: https://portfolio-2026-astro-5ngwom43y-aledesign-projects.vercel.app, Inspector HYf5fXbHqXj4hxP1DNLXtnx73TYF. Build exit 1: local GraphQL schema no coincide con remote main; tipo ShopProductLocalesEs agregado. No se omitió validación.
2. Push de 7378103 genera automáticamente Preview Git: deployment dpl_6WwiAYb59WofYcQj4Bsfyjrg7nSt, https://portfolio-2026-astro-6hxnq22hb-aledesign-projects.vercel.app. Exit 1: rama codex/tienda-catalogo-real todavía no estaba indexada en Tina Cloud. Ni Astro ni checker habían corrido.
3. Se usa sesión Chrome autenticada existente, proyecto Portfolio2026astro, repo Al3design/Portfolio_2026_astro. Configuration mostraba cuatro ramas sin indexar. Se seleccionó únicamente codex/tienda-catalogo-real y se accionó Index Branches una vez. Tras Refresh Branches, su estado DOM/title es complete, con fecha 30/10/2026 12:52:42 local. Main conserva su fecha/estado previo. No se usó Reindex de main, se tocaron tokens, se cambiaron URLs/protecciones ni se activó Editorial Workflow de pago.

Documentación primaria consultada para diagnosticar ramas no indexadas y aislamiento de índices: https://tina.io/docs/tinacloud/troubleshooting y https://tina.io/docs/reference/content-api/data-layer . No se aplicó un bypass de chequeos ni un cambio de esquema ficticio para forzar verde.

Con ese cambio externo ya confirmado se reanuda una vez el build del mismo commit mediante:

`npx.cmd vercel@65.8.0 redeploy https://portfolio-2026-astro-6hxnq22hb-aledesign-projects.vercel.app --scope aledesign-projects --non-interactive`

URL de esta Preview: https://portfolio-2026-astro-ehgz79cuc-aledesign-projects.vercel.app, Inspector FeBT8Yqgqf1GqHjnVSGJNTGarfoP. **Ready**, exit 0, aproximadamente tres minutos. Build completo Tina + Astro aprobado después de indexar la rama. La CLI inició instalación sin caché; no es otra suite local.

Comprobador ejecutado dentro de Vercel tras el build: `{pages:18, optimizedPhotoSources:37, errors:[]}`. Las 37 URLs corresponden a variantes para colección/galerías de las 29 fotos; no son 37 fotografías distintas. Astro generó 60 páginas del sitio en total y 111 variantes optimizadas de las fotos de tienda. Evidencia del build completo y checker en output/shop-r39/build-log.txt. Se mantuvieron todos los controles; no se ejecutó un build local adicional ni otra suite e2e.

GitHub reporta contexto Vercel **success** para 7378103, apuntando a este Inspector. PR #1 actualizado con enlace y evidencia, todavía draft y merged:false; el SHA de merge de prueba que informa GitHub no es una fusión realizada.

Revisión remota con Chrome autenticado, sin crear bypass ni modificar SSO: colección ES completa, ocho fotos principales/paletas/precio, apertura del árbol, cambio a su misma ficha EN, regreso a colección y tamaño móvil 390 (scrollWidth 380). Una espera de heading tras encadenar idioma/regreso venció mientras seguía abierta la ficha ES; se leyó URL/DOM y se completó el regreso mediante espera explícita de navegación. No se cambió el producto ni se repitió una suite por esa interacción. No se abrió WhatsApp ni se enviaron mensajes. Viewport restaurado y pestaña Preview marcada como entrega.

Capturas: output/shop-r39/preview-collection.png (colección completa) y preview-mobile.png (primeras cuatro piezas), inspeccionadas. La captura larga de Chrome muestra un artefacto de composición del enlace fijo de salto; lectura DOM confirmó que no estaba enfocado y su rect estaba fuera de viewport (y=-88). No se atribuye ese artefacto de captura a un defecto de layout.

## Producción y evidencia

`vercel inspect https://al3design.dev` confirmó target production, Ready, deployment dpl_8FQjuLWLDpTzw8fJAmQvGeXjfpxG y sus alias previos. Los despliegues de esta tanda son Preview. No se asignaron dominios, hizo promoción o cambió producción. SSO Protection sigue enabled / all_except_custom_domains.

Evidencia local: output/shop-r39/status-before.txt, selected-change.patch y tina-branch-indexed.png. La imagen registra la configuración tras indexar; no contiene secretos. E2e local R37 7/7 no se repite por la operación cloud. Servidor local propio 91713 conservado.

Build/checker y recorrido remoto acotado completados. Quedan revisión de Alejandro, auditoría completa de teclado/lector de pantalla y guardado/reapertura mediante Tina Cloud (la evidencia R34 es local). No se declara checkout operativo, aprobación de producción ni cierre de todo el OpenSpec. El PR permanece en borrador y no se archiva el cambio global. Los reportes OpenSpec/continuidad de esta tanda quedan locales, fuera del commit selectivo de runtime/pruebas; no se hizo otro push para subir evidencia operativa.
