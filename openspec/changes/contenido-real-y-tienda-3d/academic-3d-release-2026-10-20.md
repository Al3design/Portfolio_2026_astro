# Publicación autorizada: Discovery, Tren, Pitufos y Chokie

Alejandro autorizó explícitamente ejecutar una sola vez `npx.cmd astro build` con Tina en 4002 y, si pasaba, commitear, pushear y publicar solo las cuatro fichas ES/EN, sus 22 imágenes y enlaces a YouTube. Chokie sin video; no se incluyen muestras MP4 locales ni el tutorial de RealFlow.

## Aplicación y control

- Se reutilizó Tina en 4002. No se inició otro servidor.
- Estado `published` y fecha editorial `2026-10-20` aplicados a los cuatro MDX. Las fechas de realización de los trabajos siguen sin confirmarse; no se sustituyen por la fecha editorial.
- Copias previas en `.e2e/content-intake/academic-3d-authorized-1792509039846/`.
- Una ejecución de `npx.cmd astro build`, resultado código 0, 26 páginas generadas. Se generaron las ocho rutas ES/EN de esta tanda.
- Advertencia existente: `Search` sin uso en ClientResume.tsx; no se cambió para repetir controles.
- Sin otras suites, tipos, lint, e2e, capturas o builds locales.

## Publicación

Commit `ff60d05`, 26 archivos: cuatro MDX y 22 WebP. Pusheado a main de `github.com/Al3design/Portfolio_2026_astro`. No se incluyeron reglas, scripts, reportes, generados ni otros drafts.

Después del push se solicitó reindexación de main en TinaCloud del portfolio, vinculado al repo correcto de Al3design, con la interfaz preparada antes del despliegue. No se declara solucionada la sincronización automática del webhook.

Vercel: proyecto `portfolio-2026-astro`, equipo `aledesign-projects`, producción. Despliegue automático `dpl_cUxZPsiLMKRQretK8DG5ThMgvW7A`, commit remoto `ff60d05`, completado Ready con alias `https://al3design.dev`. No se necesitó relanzar el despliegue después de sincronizar Tina.

## Lectura HTTP final

- Ocho páginas ES/EN responden 200, con canonical propio.
- Discovery y Tren entregan tres imágenes únicas cada uno; Pitufos y Chokie, ocho cada uno.
- Las 22 imágenes realmente referenciadas por el HTML, servidas desde Tina Media, responden 200; cero fallos.
- Los enlaces de Discovery, Tren y Pitufos coinciden con los identificadores acordados. Chokie no contiene enlace YouTube. No hay elementos video locales en las ocho páginas.
- `/projects/odontopro` y `/projects/useodontopro` siguen respondiendo 404.

Esta comprobación fue lectura de producción, sin otra compilación local ni prueba de navegador. No certifica reproducción de los videos externos, revisión visual, licencias o guardado desde el editor Tina. Se conserva la distinción entre los controles ejecutados y esos alcances no comprobados.

## Selección y autoría

Discovery: 3 imágenes; modelos propios en 3ds Max, intercambio OBJ a After Effects; enlace a «Intro de mi serie del alma».

Tren: 3 imágenes; postproducción propia en After Effects sobre modelos OBJ descargados. El enlace `https://www.youtube.com/watch?v=zBnXh_qTv24` fue confirmado por Alejandro en esta tanda.

Pitufos: 8 imágenes, incluidas vistas de la aldea y hongos; modelo de personaje descargado y rigging/aldea/tracking/postproducción de Alejandro. Enlace a «Aldea de Pitufos».

Chokie: 8 imágenes del valle; modelado 3D y chocolate de Alejandro, pósters de la etapa inicial acreditados a un compañero. Alejandro confirmó que no hay video; no se agregó ninguno.

Se conservan los créditos de recursos y nombres desconocidos sin inventarlos. El control técnico no certifica licencias ni atribuye a Alejandro la autoría de franquicias, modelos descargados o pósters del compañero.

OdontoPro y UseOdontoPro permanecen en draft por revisión legal de backups. Los demás borradores siguen fuera de esta publicación. El OpenSpec completo permanece abierto.
