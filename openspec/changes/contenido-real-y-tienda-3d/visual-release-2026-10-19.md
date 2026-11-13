# Publicacion visual — 2026-10-19

Solicitud: subir los cambios, excluyendo los articulos draft.

- Commit: c62549b (main), pusheado a origin/main. GitHub informa traslado del repo a Al3design/Portfolio_2026_astro; push aceptado por redireccion.
- 62 archivos de producto y soporte incluidos: marca/iconos, navegacion, estilos, fondo interactivo, plantilla/editorial y esquema Tina.
- No se incluyeron src/content/projects (incluido around.mdx), src/editorial/assets, rutas de revision, scripts de intake ni reportes/editoriales nuevos. Tampoco reglas de agentes ni daemon de CodeGraph.
- Vercel genero dpl_Bq5kWEcZaW1QLENTPxrGguKN4mUb, con estado failure en GitHub. No se confirma publicacion.
- El conector Vercel no ve este proyecto (404); la CLI no tiene credenciales y queda esperando autorizacion mediante su flujo de dispositivo. No se guardan codigos ni credenciales en este reporte.
- Pendiente: obtener logs tras autorizacion, resolver el fallo del despliegue y confirmar el commit servido en al3design.dev y la ausencia de borradores.
- No se corrieron pruebas/build local por tanda, de acuerdo con AGENTS.md. La construccion remota fue iniciada por el push autorizado.

## Continuacion tras autorizar Vercel

- 83f400a: enlace GitHub del footer actualizado a https://github.com/Al3design y push a main; origin actualizado a Al3design/Portfolio_2026_astro.
- Logs del primer despliegue: TinaCloud rechazaba el esquema nuevo por usar una indexacion del 15 de octubre. No se deshabilito el chequeo.
- Se actualizo en TinaCloud el vinculo del mismo repositorio renombrado, de alejandropd-1 a Al3design. La configuracion guardada muestra el enlace correcto; Event Log de main confirmo indexing branch succeeded el 19/10 a las 13:58.
- Redeploy de produccion desde el commit remoto 83f400a, sin subir el working tree: dpl_4rYXqsKW8YUrFYzGmkvnJghizntS, https://portfolio-2026-astro-r3q8p8q2p-aledesign-projects.vercel.app.
- Estado final pendiente de la construccion remota.

## Resultado final

Vercel Ready y alias https://al3design.dev asignado al despliegue dpl_4rYXqsKW8YUrFYzGmkvnJghizntS (commit 83f400a). Build remoto Tina + Astro completado, 11 paginas existentes y ninguna ruta de borradores. Lectura HTTP de produccion: home/freelance/resume/tienda 200; /projects/mundo y /revision/proyectos/odontopau 404. HTML publico confirma data-energy-pattern hexagonal, logo blanco nuevo y enlace GitHub Al3design. No se afirma auditoria visual/perfilado de rendimiento. Los drafts y sus medios siguen sin commit. Intento de captura del Event Log de Tina agoto el tiempo de CUA; la confirmacion de indexacion se obtuvo del estado accesible visible y luego del build remoto exitoso.
