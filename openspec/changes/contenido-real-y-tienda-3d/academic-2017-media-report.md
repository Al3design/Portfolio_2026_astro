# Discovery, Tren y Pitufos: imágenes y enlaces de video

2026-10-16. Solicitud directa de Alejandro: incorporar imágenes y links a videos.

## Fuentes y correspondencia

- Discovery: exportación Delgado_Alejandro_DM5TN.mp4. Enlace a Intro de mi serie del alma (MCpE5tW1KGo).
- Tren: exportación produccion-1.mp4 y Comp-1.jpg para portada. No se encontró un video de Tren en el inventario público del canal; se ofrece muestra local, sin inventar un enlace YouTube.
- Pitufos: PitufosArgentina.mp4 para muestra/fotogramas y aldeaPastoPitufo.png para portada. Enlace Aldea de Pitufos (DmUvogI5eu0), identificado como video del canal y sin afirmar que sea la misma versión que el MP4.
- YouTube oEmbed consultado con Invoke-RestMethod: ambos títulos, autor Al3Design y author_url https://www.youtube.com/@al3design confirmados en esta tanda. Web open devolvió throttling; no se descargaron videos remotos ni se afirma comparación de reproducción/versiones. La inspiración de Discovery y la autoría de aldea/rigging de Pitufos fueron confirmadas directamente por Alejandro en la tanda anterior.

## Integración

Tres portadas, seis fotogramas y tres extractos sin audio de hasta 16 segundos. Derivados WebP/MP4 optimizados, fuentes originales intactas. Portada Discovery seleccionada mediante filtro thumbnail de FFmpeg; imágenes restantes proceden de archivos de la entrega y posiciones 35%/65% del video. Es selección preliminar, sin inspección de capturas por tanda. No se certifica aún representatividad/legibilidad de todos los fotogramas.

Una portada compartida por documento. Galerías, clips y enlaces ES/EN dentro de los bloques existentes de Tina y ProjectDetailView. Los enlaces a YouTube abren desde la imagen y texto del epígrafe sin autoplay ni iframe. Modelos de terceros y contribuciones propias mantienen créditos distintos. Originales de audio no se copian a los extractos; se señala que son muestras silenciosas, sin reemplazar las obras completas.

Todos los derivados bajo src/editorial/assets y allowlist DEV /revision/media; publicationStatus draft. No se agregaron assets a public ni se modificaron visibilidad/publicación. Textos alt/descripciones son contextuales; la descripción visual detallada y, si se publica audio, transcripción/subtítulos, siguen pendientes. No se declara accesibilidad final por completar campos preliminares.

## Autoría y pendientes

prepare-2017-project-media.mjs y add-2017-project-media.mjs ejecutados una vez cada uno, exit 0. El primero usa ffprobe solo para leer duración/streams de los archivos fuente, y FFmpeg para crear medios; no es una suite de verificación del proyecto. Manifest academic-2017-media-manifest.json conserva rutas, posiciones, duración y tamaño de derivados. Copias previas del MDX en .e2e/content-intake.

Sin build/tipos/lint/tests/e2e, sin navegador/capturas ni reinicio de servidor conforme AGENTS.md. Pendientes: revisar selección visual con Alejandro, comparar versiones del archivo/YouTube, completar fecha/recursos/licencias y alternativas accesibles antes de publicar. Sin commit, push ni publicación. OpenSpec abierto.
