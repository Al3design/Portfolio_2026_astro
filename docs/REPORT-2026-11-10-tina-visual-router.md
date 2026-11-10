# Acceso visual desde Projects en producción

Rama: `codex/tienda-catalogo-real`. Base publicada: `64e720b`.

La captura del usuario muestra el formulario nativo de BDM en producción. Lectura de fuentes: Tina llama y espera `ui.router` al abrir una fila; el listado entrega metadatos `_sys`. El helper anterior devolvía undefined fuera de localhost si faltaba title. Pages usa filename y no comparte esa condición.

Corrección local: resolver asíncrono, consulta HEAD a ruta canónica del mismo origen, sin redirecciones/cache y con timeout de cuatro segundos. Solo 200 abre visual. Formulario nativo ante error/protección/página ausente; drafts y ocultos explícitos no generan consulta. Slugs restringidos; revisión de borradores sigue local.

Cierre focalizado: `node --experimental-strip-types --test tests/project-editor-route.test.mjs`, una ejecución, exit 0, 7/7. Evidencia con solicitudes simuladas: no acredita iframe, suscripción ni guardado Cloud en producción. Sin arranque de servidor, build, reindexación, guardado Cloud o publicación en esta tanda. Ningún permiso anterior se reutilizó.

Continuación autorizada por el usuario: «dale, subilo, y fijate si hay que actualizar otras skills». Se revisó la skill Astro local, conservando sus ajustes de política previos y agregando referencia a la guía editorial, datos mínimos de router y límites entre revisión local/Cloud. No se actualizan paquetes ni skills globales por este cambio.

Cierre previo al release: `npx.cmd astro check`, una ejecución, exit 0; 182 archivos, 0 errores, 0 warnings y 100 hints. No se repitieron las siete pruebas verdes del router. El conector Vercel devuelve 404 para el proyecto correcto; la sesión Chrome confirma repositorio Al3design/Portfolio_2026_astro, producción main y dominio al3design.dev. Se sigue el deploy automático por Git, sin build local adicional ni cambios de índice/esquema.

Pendiente: publicar esta corrección y observar que abrir un artículo publicado desde Projects entra en visual, Pages conserva su comportamiento y un draft sin ruta mantiene formulario. No repetir la publicación anterior de listas editoriales ni alterar contenido para comprobar navegación. Los demás cambios locales y reportes anteriores se conservaron.
