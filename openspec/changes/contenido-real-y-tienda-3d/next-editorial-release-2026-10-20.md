# Próximas publicaciones: preparación local — 2026-10-20

## Decisión del autor

OdontoPro y UseOdontoPro permanecen en `draft`, fuera de los paquetes de publicación. Alejandro debe revisar los términos legales sobre backups de base de datos antes de publicarlos. La pausa se registró en las notas editoriales ES/EN existentes de ambos artículos, sin agregar campos al esquema ni presentar una política de backups como implementada o aprobada.

No extender esta pausa a OdontoPau: es un sitio independiente ya publicado.

## Ingest Monitor

Se conserva el documento bilingüe, contratación Fixed-term contract, cliente Around MD, `experienceSlug: around` y `showInResume: false`. La experiencia laboral existente sigue siendo la fuente del empleo en Resume. La fecha concreta del proyecto permanece sin especificar.

Se ajustó el relato ES/EN para presentarlo como trabajo dentro de Around MD y retirar una aclaración interna sobre la imposibilidad de atribuir cambios a reuniones concretas. Se conserva el feedback confirmado: reuniones con el stakeholder y comunicación mediante el Project Manager. Herramientas y equipo sin nuevas atribuciones: Adobe XD, Illustrator, HTML, CSS, algo de JavaScript y React, BEM; colaboración con desarrolladores frontend y backend.

Selección: dos láminas completas de la presentación (layout y alertas), enlace al producto y miniatura/enlace del video oficial. No se reincorporan los recortes negros descartados. Se conservan créditos y distinción entre material oficial y trabajo del autor.

La consulta web a la página oficial volvió a resultar inaccesible en esta tanda. No se declara comprobada su disponibilidad actual ni se agregan prestaciones nuevas. Las referencias y el contexto conservados proceden del trabajo editorial anterior.

## Paquetes de revisión

Script de preparación: `scripts/prepare-pending-article-releases.mjs`.

Salida de esta ejecución: `.e2e/article-releases/pending-2026-10-20T13-43-59-785Z/`.

Se prepararon **15 candidatos bilingües y 80 medios locales**. Cada candidato sigue siendo draft. El paquete contiene originales exactos, hash de origen, notas editoriales por idioma y copias de medios con rutas propuestas bajo `/assets/projects/<slug>/`. Las notas plegadas se separan del contenido del candidato, no se borran de los originales ni se pierden los pendientes de créditos.

| Tanda | Artículos | Revisión que falta antes de publicar |
| --- | --- | --- |
| Profesional | Ingest Monitor | Aceptar selección pública de las láminas/marcas y confirmar alcance final; conservar fecha no recordada sin inventarla |
| Comunidad 3D | BOTF, Supremacy, Casa | Créditos de colaboración y recursos, selección pública; Supremacy conserva estado inconcluso |
| Académico 3D | Discovery, Tren, Pitufos, Chokie | Créditos de modelos/audio/colaboradores y versión final; tutorial RealFlow excluido |
| Web académico | Rioko, París, Tienda Geekies | Participación y créditos restantes; Geekies sigue como selección provisional |
| Diseño gráfico | Mate, CV personal | Créditos y contexto restantes; no adivinar el nombre del generador matemático |
| Animación académica | Mundo, Toplomero | Recursos, audio y versión final de las entregas |

No se usa el año de las carpetas como fecha del trabajo. No se asignó fecha de publicación a los candidatos. No se interpreta una casilla pendiente como prueba de que falta implementar una función del sitio: aquí se separa información editorial pendiente de controles técnicos.

## Plantilla y TinaCMS

Se reutilizan `locales.es/en`, `section`, `cards`, `image`, `gallery`, `video`, sus créditos y distribuciones actuales. `publicationStatus`, `experienceSlug` y el formato bilingüe existen en Tina y en el esquema Astro. No se modificaron componentes, esquema ni tipos generados. El script lee las fuentes actuales; no vuelve a ejecutar los intake antiguos sobre contenido editado.

La preparación no aplica candidatos a `src/content`, no copia medios a `public`, no guarda en TinaCloud ni cambia Git. Las rutas públicas escritas en el manifiesto son destinos futuros, no páginas ya publicadas. Abrir, editar y guardar estos artículos en Tina continúa como control final pendiente.

## Alcance y límites

Los únicos MDX originales editados en esta tanda son Ingest Monitor y las notas de pausa de OdontoPro/UseOdontoPro. Copia previa en `.e2e/content-intake/next-release-20261020-104344/`.

Sin build, tests, tipos, lint, e2e, capturas ni navegador de diagnóstico. La ejecución del script es preparación de archivos, no una verificación del proyecto. No se hizo commit, push, reindexación ni publicación. Los paquetes no certifican derechos ni aprobación editorial. El OpenSpec completo sigue abierto.
