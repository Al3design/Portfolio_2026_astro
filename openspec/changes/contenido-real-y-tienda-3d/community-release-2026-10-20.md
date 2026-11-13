# Publicación autorizada: BOTF, Supremacy y Casa

Alejandro autorizó explícitamente la excepción a AGENTS.md: ejecutar una sola vez `npx.cmd astro build` usando el Tina existente en 4002 y, si pasa, commit/push/publicación exclusivamente de estas tres fichas ES/EN y sus 30 imágenes. El resto permanece en draft.

## Aplicación y control local

- Se reutilizó Tina en 4002, sin iniciar otro proceso.
- Se aplicó estado `published` y fecha editorial `2026-10-20` a los tres documentos. No se usó esa fecha como fecha de los trabajos: sus fechas no recordadas permanecen sin especificar.
- Copias previas: `.e2e/content-intake/community-authorized-release-1792508315099/`.
- Una ejecución de `npx.cmd astro build`, código 0. Salida: 18 páginas, incluidas las seis rutas ES/EN de BOTF, Supremacy y Casa.
- Advertencia existente: `Search` importado sin uso en ClientResume.tsx. No se modificó para repetir controles.
- Sin otros builds locales, suites, tipos, lint, e2e, capturas o inspecciones visuales.

## Commit y alcance

Commit `681d4be` en main, pusheado a `github.com/Al3design/Portfolio_2026_astro`. Exactamente 33 archivos: tres MDX bilingües y 30 WebP bajo sus tres directorios de proyectos. No se incluyeron otros borradores, reportes, scripts, reglas de agentes ni tipos generados.

Se conserva el contexto de modding low poly y texturas de baja resolución de BOTF, el modelado inconcluso y autoría del dibujo de una persona no identificada del foro de Supremacy, y la distinción entre modelado propio y muebles de biblioteca en Casa. La publicación no identifica fuentes/licencias desconocidas ni certifica esas licencias.

## TinaCloud y despliegue

Se preparó la interfaz de TinaCloud antes del push y se solicitó Reindex de main inmediatamente después del push, sobre el proyecto del portfolio vinculado al repo Al3design. Esto permite sincronizar el registro de los tres documentos antes de que Astro los consulte en el despliegue. No implica que el webhook automático haya quedado resuelto.

Vercel: proyecto `portfolio-2026-astro`, equipo `aledesign-projects`, entorno producción. Despliegue automático `dpl_DyaERqvKf29QQQP4GybLVPrJ884y`, commit remoto `681d4be`, completado Ready. No fue necesario relanzar el despliegue tras sincronizar el índice.

## Lectura final de producción

- `/projects/botf` y `/projects/en/botf`: 200, canonical propio y 21 imágenes únicas en cada idioma.
- `/projects/supremacy` y `/projects/en/supremacy`: 200, canonical propio y 6 imágenes únicas en cada idioma.
- `/projects/casa` y `/projects/en/casa`: 200, canonical propio y 3 imágenes únicas en cada idioma.
- Los 30 archivos realmente referenciados en el HTML publicado, servidos desde Tina Media, responden 200. Cero fallos de esos archivos.
- `/projects/odontopro` y `/projects/useodontopro` responden 404.

La comprobación fue lectura HTTP de la publicación, sin ejecutar otra compilación local, suite o prueba de navegador. No se presenta como una revisión visual ni como una prueba de apertura/edición/guardado en Tina. La sincronización automática del webhook continúa pendiente de investigación.

OdontoPro y UseOdontoPro permanecen en draft por la revisión legal de backups y no entraron en el commit. El OpenSpec completo no se archiva ni se declara cerrado con esta publicación.
