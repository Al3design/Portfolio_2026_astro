# Alcance de integración selectiva

Continuación del 06/11: sumar `tina/dashboard/projectOrderValues.ts` y `tests/project-order-values.test.mjs` al alcance del orden editorial. La persistencia usa documento completo transformado, pendiente de nuevos controles. No incluir cambios de contenido de la prueba: `around.mdx` fue restaurado exactamente. No publicar mientras falte comprobar preservación del artículo.

Rama activa codex/tienda-catalogo-real, HEAD fb5b4a9 tras integrar por fast-forward los dos guardados Cloud. Este documento es una lista para preparar el cierre, no una orden de commit/push/build/publicación.

## Fuentes propias

- public/admin-theme/admin.css y src/lib/admin-theme.ts: corrección local de contraste y versión de caché.
- src/lib/project-editorial.ts: conservar la ruta de revisión al cambiar el idioma de un artículo.
- tina/config.ts: normalizar el párrafo vacío de `projects.body` al recibirlo desde Plate.
- tina/tina-lock.json: regenerado por el servidor dev. La diferencia agrega `ui: {}` a `projects.body`. Lookup y GraphQL coinciden con HEAD.
- README.md y docs/CHANGELOG.md: entrada y registro.
- docs/TINA_ADMIN_THEME.md, docs/templates/README.md y docs/HANDOFF-2026-11-03-tina-cloud-admin.md: sistema, plantillas y evidencia operativa.
- openspec/changes/tema-admin-tina/: propuesta/diseño/tareas/reportes de este cambio, compatibilidad y auditoría de artículo.
- openspec/changes/alta-piezas-shop-desde-tina/: propuesta/diseño/spec/tareas/reportes del alta y selección asociadas al candidato ya implementado.

## Archivos compartidos: revisar por hunk

- AGENTS.md: incluir directivas de continuidad/sistema Tina y contrato Shop de este alcance; distinguir la política de ejecución que ya estaba modificada antes de esta tanda. No sobrescribirla ni arrastrarla por un add general.
- openspec/config.yaml: incluir directivas permanentes/editorial/Tina/rutinas y rules; separar modificaciones previas de política.
- docs/GUIA_EDITORIAL_IA.md: actualización de selección, medios, preview y evidencia; revisar contra el estado anterior porque ya tenía cambios locales al retomar.

El índice estaba vacío al iniciar estas revisiones y sigue sin prepararse para commit. No usar git add . ni incluir por extensión todos los Markdown del repo. Los reportes enlazan capturas/logs ignorados de output; no agregar sus binarios o sesiones al repositorio por rutina.

## Excluir de esta integración

Skills locales, .codegraph/daemon.pid, CLAUDE.md, PROMPT_MIGRACION_TAILWIND_A_SASS.md, docs/TESTING_MCP.md y cambios del OpenSpec contenido-real-y-tienda-3d preexistentes. Conservar también src/editorial/shop-products/.gitkeep, presente antes del recorrido de carga; no tratarlo como temporal propio.

## Antes del cierre

Ampliación del 06/11 solicitada por Alejandro. Incluir el cambio `openspec/changes/orden-editorial-dashboard/`, `src/lib/project-order.ts`, `tina/dashboard/ProjectOrderEditor.tsx`, cambios en `PortfolioDashboard.tsx`/`dashboardQuery.ts`, `src/lib/project-locales.ts`, `src/content.config.ts`, `src/pages/index.astro`, `src/components/ClientHome.tsx`, la plantilla bilingüe y `tests/project-order.test.mjs`. Revisar `tina/config.ts` junto con la corrección anterior de Body. Regenerar Tina por su flujo oficial al cierre. La publicación sigue pendiente.

No quedan ficha/foto/selección temporales de la prueba. No stage/commit de SDK generado local, secretos, uploads de prueba o caché de Astro. No heredar el build del candidato df001b1 para aprobar el CSS modificado después. El usuario difiere builds y publicación al final; no ejecutarlos por preparar esta lista.
