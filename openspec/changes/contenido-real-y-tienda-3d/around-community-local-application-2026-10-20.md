# Ingest Monitor y comunidad 3D — aplicación local

## Ingest Monitor

La preparación ahora está aplicada al MDX de revisión, no solamente a una copia dentro del paquete anterior:

- `src/content/projects/around-ingest-monitor.mdx` conserva `publicationStatus: draft`, idiomas ES/EN, contratación Fixed-term contract, `experienceSlug: around` y `showInResume: false`.
- Las dos láminas completas se copiaron sin edición a `public/assets/projects/around-ingest-monitor/around-layout-slide.webp` y `around-alert-slide.webp`. Los bloques `image` y sus enlaces apuntan a esos archivos. Son copias locales para el futuro commit, todavía sin subir.
- Se retiraron del cuerpo las notas plegadas de preparación. Se conserva el original íntegro y sus notas ES/EN en `.e2e/content-intake/around-release-local-1792506188770/`. No se borraron créditos ni se dio por autorizada la publicación de marcas/imágenes.
- La portada oficial, miniatura y enlace del video oficial se conservan como referencias externas, con crédito distinto de las láminas de Alejandro. No se atribuye el producto completo a una implementación individual.
- La relación con Resume se revisó por lectura de `resume.astro` y `ProjectDetailView.tsx`: ambos usan la misma clave de experiencia. No se ejecutó el recorrido en navegador ni una operación de guardado en Tina.

Revisión local: `http://localhost:4322/revision/proyectos/around-ingest-monitor` y `/revision/proyectos/en/around-ingest-monitor`. Se mantienen fuera de las rutas públicas mientras el estado sea draft.

## BOTF, Supremacy y Casa

Se pulieron los textos ES/EN actuales, conservando los campos de la plantilla:

- BOTF: modelado low poly, texturas propias de baja resolución en Photoshop, peso como restricción y herramientas históricas de importación. Se retiró del relato una nota administrativa sobre cifras no confirmadas; no se añadieron cifras. Se conservan los diez grupos de imágenes, las parejas de proceso/texturizado, el collage y la referencia a Sketchfab.
- Supremacy: adaptación 3D de un dibujo ajeno y modelado inconcluso. Se simplificó la conclusión del proceso, sin afirmar entrega final o integración en el juego. Se conserva la separación entre imágenes 3D y referencias ilustradas.
- Casa: V-Ray, SpotLight, Omni y HDR; mesa/sillas/CPU de bibliotecas y resto del modelado propio. Se simplificó el relato de las tres vistas, sin atribuir reformas realizadas ni secuencias antes/después.

Copias anteriores: `.e2e/content-intake/community-release-20261020-112336/`. Los tres documentos conservan sus notas editoriales y medios de revisión, pendientes de créditos/selección. Se consultó al autor por el nombre/alias del ilustrador de Supremacy y las bibliotecas de Casa; no se inventaron esos datos.

## Paquete actualizado

La preparación anterior de 15 candidatos es una instantánea histórica. Para esta tanda, el paquete vigente es `.e2e/article-releases/pending-2026-10-20T14-24-43-138Z/`, con **4 candidatos ES/EN y 32 medios**.

Se actualizó el preparador para seleccionar tandas y conservar tanto medios de revisión como medios ya aplicados a rutas `/assets/projects/<slug>/`. Lee el contenido actual, conserva originales y manifiesto y deja los candidatos en draft. No se aplican automáticamente las tres fichas de comunidad ni se publica ningún candidato.

OdontoPro y UseOdontoPro siguen excluidos por la revisión legal de backups. No se modificaron en esta tanda. Los otros artículos y las reglas del repositorio tampoco se incluyeron en ninguna publicación.

## Controles y publicación

Revisión por lectura de fuentes y cambios; sin build, pruebas, tipos, lint, e2e ni inspección de capturas. La ejecución del preparador generó archivos, no certificó el sitio. No se inició otro Tina ni navegador de diagnóstico. Sin commit, push, reindexación ni despliegue.

Pendientes para publicar Ingest Monitor: aceptar selección de láminas/referencias, fecha editorial de publicación y control final autorizado. Los créditos faltantes de las fichas de comunidad se conservan como pendientes. Esta aplicación no cierra el OpenSpec completo.
