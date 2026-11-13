# Fichas de Mundo y Toplomero — revisión ES/EN

## Qué se preparó

Dos fichas académicas, con copy bilingüe, portada, muestra de video y descripción visual. Reutilizan la misma plantilla visual de /projects/freelance y /projects/around: breadcrumb, título con marcador //, metadatos, hero 21:9, prosa, cards MDX, sidebar specs.json y enlace al siguiente proyecto. Comparten MainLayout, marca, menú, footer, ancho y tokens del portfolio. El texto confirmado se separa de las notas editoriales, plegadas al final. No se agregan clientes, notas, resultados medidos, modelado/rigging ni fechas que Alejandro no haya confirmado.

| Ficha | Español local | Inglés local |
| --- | --- | --- |
| Mundo | http://localhost:4322/revision/es/mundo | http://localhost:4322/revision/en/mundo |
| Toplomero | http://localhost:4322/revision/es/toplomero | http://localhost:4322/revision/en/toplomero |

Fuente de copy: src/editorial/academic-drafts.ts. No se duplicaron todavía estos textos en las colecciones públicas de Tina. Tras aprobar contenido, créditos y medios se decidirá su incorporación al modelo bilingüe definitivo; la colección actual exige una fecha, y aún no corresponde inventarla.

## Medios de revisión

- Mundo: poster a 1 s de blp-5.avi y preview de 24,8 s, optimizada a 960×540, sin audio. No se utilizaron las imágenes con nombres de juegos como obras propias.
- Toplomero: poster a 12 s de motion-4-edited.mp4 y fragmento de 0–18 s, 960×540 y sin audio. El último fotograma del recorte fue inspeccionado: conserva al personaje junto a la pared, sin incluir la placa final con teléfono. No se asume que este archivo sea la versión final aprobada.
- Los videos se reproducen sólo al pulsar play: controles nativos, preload none, dimensiones explícitas, sin autoplay ni loop. Descripción visual ES/EN junto al video; no se inventan subtítulos para una banda sonora que no se revisó. Las previews carecen de pista de audio.
- Se preservan los originales en Drive. Los derivados suman 6409522 bytes (~6,1 MiB) frente a ~101 MiB de los dos archivos fuente; portadas WebP de ~51/55 KiB.
- Procedencia y hashes de fuentes/derivados en src/editorial/assets/manifest.json. Regeneración: node scripts/prepare-academic-previews.mjs "G:/Mi unidad/AI/Claude/projects/Aledesign web portfolio". El script sólo lee medios con FFmpeg; no ejecuta MAX, AEP ni contenido del archivo.

## Separación de publicación

Las páginas y el endpoint de medios devuelven rutas sólo con import.meta.env.DEV. El build de producción no genera estas fichas ni copia los cuatro medios a public/dist. El endpoint tiene una lista cerrada de archivos; no expone el manifest ni acepta rutas arbitrarias. Para estas previews pequeñas entrega el archivo completo, sin prometer un servicio de streaming. Se añaden noindex/nofollow y no-store a la revisión de medios, y noindex al HTML.

No aparecen en la home, RSS, navegación de proyectos, exportaciones ni Tina. Noindex es una indicación para buscadores, no una protección de acceso: la separación efectiva en producción es no generar las rutas ni sus medios. No se publica ni se commitea este lote sin autorización.

Rocket continúa documentado como ejercicio incompleto con referencia de ArtStation y posibles renders de un compañero; no se agrega una ficha visual de resultados propios. Manifiesto/Dinamo sigue separado de Toplomero.

## Para revisar con Alejandro

Leer ambas versiones, reproducir las muestras y confirmar título y selección. Aún faltan año/materia, alcance específico de participación, equipo, recursos externos y permisos/créditos. Los enlaces de YouTube siguen como candidatos internos, sin embed ni equivalencia afirmada. El OpenSpec global permanece abierto.

## Plantilla compartida solicitada por Alejandro

Se retiró la composición editorial inicial. ProjectDetailLayout conserva su conexión useTina y delega la vista en ProjectDetailView; las fichas de revisión consumen esa misma vista sin consultas ni registros ficticios de Tina. Los datos de los proyectos públicos y _project-detail.module.scss se conservan. Los textos de interfaz de la revisión se localizan, sin sustituir la participación por “Lead Designer”, la fecha por “12 Weeks” ni el ámbito por un cliente inventado.

Las notas de aprobación se componen en un slot final plegado. Por pedido posterior de Alejandro, el selector de idioma paso al topbar compartido, antes del control de tema; ya no ocupa el breadcrumb. Las rutas ES/EN de cada ficha se pasan desde MainLayout a Navigation. El CSS de revisión sólo atiende las notas, la descripción visual y el caption: no vuelve a definir una cabecera, hero, grilla, tarjetas o sidebar propios. Las cards del cuerpo usan las mismas clases MDX de los trabajos existentes.

La primera versión de copy que decía que los créditos “se están completando” dentro de la participación se retiró del relato del trabajo: esa información queda en los pendientes editoriales. El usuario aún debe aprobar títulos y textos, además del formato visual.

## Criterio técnico

Rutas estáticas generadas con getStaticPaths siguiendo https://docs.astro.build/en/guides/routing/. Se conserva preload none como comportamiento interoperable, sin depender de lazy loading experimental de video; sólo se descarga el poster al abrir la ficha. Ver resultados y límites de validación en validation.md.
# Actualizacion 2026-10-16: fuente bilingue en Tina

La fuente editable vigente es src/content/projects/mundo.mdx y toplomero.mdx, con locales.es/locales.en. Las rutas actuales son /revision/proyectos/mundo, /revision/proyectos/en/mundo y equivalentes de Toplomero. Los enlaces de revision anteriores redirigen. Ver docs/ARTICLES_TINA.md y bilingual-document-report.md. Las instrucciones o resultados anteriores que nombran academic-drafts.ts o cuatro documentos son historicos; no certifican la tanda actual ni la apertura en Tina.

