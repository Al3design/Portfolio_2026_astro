# Acceso visual desde Projects en producción

Rama: `codex/tienda-catalogo-real`. Base publicada: `64e720b`.

La captura del usuario muestra el formulario nativo de BDM en producción. Lectura de fuentes: Tina llama y espera `ui.router` al abrir una fila; el listado entrega metadatos `_sys`. El helper anterior devolvía undefined fuera de localhost si faltaba title. Pages usa filename y no comparte esa condición.

Corrección local: resolver asíncrono, consulta HEAD a ruta canónica del mismo origen, sin redirecciones/cache y con timeout de cuatro segundos. Solo 200 abre visual. Formulario nativo ante error/protección/página ausente; drafts y ocultos explícitos no generan consulta. Slugs restringidos; revisión de borradores sigue local.

Cierre focalizado: `node --experimental-strip-types --test tests/project-editor-route.test.mjs`, una ejecución, exit 0, 7/7. Evidencia con solicitudes simuladas: no acredita iframe, suscripción ni guardado Cloud en producción. Sin arranque de servidor, build, reindexación, guardado Cloud o publicación en esta tanda. Ningún permiso anterior se reutilizó.

Continuación autorizada por el usuario: «dale, subilo, y fijate si hay que actualizar otras skills». Se revisó la skill Astro local, conservando sus ajustes de política previos y agregando referencia a la guía editorial, datos mínimos de router y límites entre revisión local/Cloud. No se actualizan paquetes ni skills globales por este cambio.

Cierre previo al release: `npx.cmd astro check`, una ejecución, exit 0; 182 archivos, 0 errores, 0 warnings y 100 hints. No se repitieron las siete pruebas verdes del router. El conector Vercel devuelve 404 para el proyecto correcto; la sesión Chrome confirma repositorio Al3design/Portfolio_2026_astro, producción main y dominio al3design.dev. Se sigue el deploy automático por Git, sin build local adicional ni cambios de índice/esquema.

## Resultado del release

Commit `8ed01ec8e6ac4b7058db35697f054ce2176ea54b`, nueve archivos seleccionados, enviado mediante `git push origin HEAD:main` sin cambiar la rama local. Se conservaron fuera del commit los artículos y cambios ajenos. Vercel creó un único build automático: deployment `5RYBGunh7WpUqtvn1hPpMXmkWfxF`, URL `https://portfolio-2026-astro-e75hnrghe-aledesign-projects.vercel.app`, Ready el 10/11 a las 13:56:52 ART, 49 segundos. Logs: 62 páginas; dominio asignado `al3design.dev`. Sin reindexación ni redeploy manual.

Control Chrome de producción: recargar admin, abrir BDM desde la fila de Projects → `#/~/projects/bdm-consultores`, formulario BDM e iframe del artículo con contenido; indicador No unsaved changes, Reset y Save deshabilitados. Abrir Home desde Pages → formulario home e iframe Compiled Visions, también sin cambios y Save deshabilitado. Sin ediciones ni guardados Cloud. Evidencia visual: `C:/Users/apdel/AppData/Local/Temp/tina-visual-prod-20261110.png`. Quedó abierto el editor visual de BDM como entrega.

La alternativa de formularios para páginas ausentes/protegidas y drafts se cubrió con pruebas simuladas; no se editó ni publicó un borrador para repetirla en Cloud. Las otras skills locales no contienen instrucciones de Tina que requieran cambiarse por esta corrección. No se actualizaron dependencias ni skills de proveedores globales.

Este resultado se agregó localmente después del release, sin generar otro build solo por evidencia. Los demás reportes locales y frentes pendientes se conservaron.
