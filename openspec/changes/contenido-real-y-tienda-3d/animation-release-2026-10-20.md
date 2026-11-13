# Publicación autorizada: Rocket, Mundo y Toplomero

Alejandro autorizó expresamente una sola ejecución de `npx.cmd astro build` con Tina en 4002 y, si pasaba, commit/push/publicación únicamente de las tres fichas ES/EN, siete imágenes, muestra sin audio de Mundo y enlaces YouTube de Rocket/Toplomero. Los demás borradores quedan fuera.

## Control local

- Se reutilizó Tina en 4002; no se inició otro proceso.
- Se aplicó published y fecha editorial `2026-10-20` a los tres MDX. La fecha de realización de cada trabajo permanece sin confirmar, separada de la fecha editorial.
- Copias previas en `.e2e/content-intake/animation-authorized-1792510917593/`.
- Comando ejecutado **una vez**: `npx.cmd astro build`. Resultado código 0, 32 páginas generadas, incluidas las seis rutas ES/EN de esta tanda.
- Advertencia existente: `Search` sin uso en ClientResume.tsx. No se modificó ni se repitió el control.
- Sin suites adicionales, tipos, lint, e2e o capturas.

## Commit y despliegue

Commit `2337d38`, 11 archivos: tres MDX, siete WebP y un MP4 sin audio. Pusheado a main de `github.com/Al3design/Portfolio_2026_astro`. No se incluyeron otros borradores, scripts, notas editoriales, reglas ni archivos generados.

Se preparó TinaCloud antes del push y se solicitó Reindex de main inmediatamente después, sobre el proyecto del portfolio vinculado al repo correcto. Esto no prueba resuelto el webhook automático.

Vercel: `portfolio-2026-astro`, equipo `aledesign-projects`, producción. Despliegue automático `dpl_tbjJNosEEc2D8sufBmBVRHDMNMru`, commit remoto `2337d38`, completado Ready con alias `https://al3design.dev`. No fue necesario relanzar el despliegue después de sincronizar Tina.

## Lectura HTTP de producción

- Las seis rutas ES/EN responden 200 y tienen canonical propio.
- Rocket contiene su miniatura y enlace correcto `MJYQ-c7HJ2o` en ambos idiomas; la miniatura externa responde 200.
- Mundo entrega su portada y el archivo `/assets/projects/mundo/mundo-preview.mp4`, ambos 200; el MP4 responde con Content-Type video/mp4. No contiene el enlace erróneo a YouTube de Tren.
- Toplomero entrega sus seis imágenes y enlace `Sh4ZFfaQSls`, sin video MP4 local en el artículo.
- Las siete imágenes locales realmente referenciadas, la miniatura externa de Rocket y el MP4 de Mundo responden 200.
- `/projects/odontopro` y `/projects/useodontopro` siguen en 404.

Se comprobó la entrega HTTP de páginas y medios, no la reproducción en navegador o el guardado de contenido desde Tina. No se ejecutó otro control local, captura o suite. El webhook de indexación automática de Tina sigue como pendiente independiente.

## Contenido

Rocket conserva la autoría propia del render confirmada por Alejandro, el cohete incompleto, FumeFX/VUE/3ds Max/Photoshop y la referencia ArtStation pendiente de identificar. Portada externa con miniatura y enlace a `MJYQ-c7HJ2o`.

Mundo conserva su portada, muestra MP4 de 24,8 segundos sin audio con descripción visual y créditos de calavera OBJ/fondo VUE. El enlace erróneo al video de Tren fue retirado de ambos idiomas. No se agregó un enlace YouTube alternativo inventado.

Toplomero conserva seis imágenes de portada/proceso y enlace `Sh4ZFfaQSls`; no se subió el extracto MP4 antiguo. Se mantienen modelado, rigging, animación, RealFlow y postproducción confirmados.

OdontoPro y UseOdontoPro siguen draft por la revisión legal de backups. No se cierra el OpenSpec completo con esta tanda.
