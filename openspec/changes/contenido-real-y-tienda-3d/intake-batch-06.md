# Tanda 6: Mate y CV personal

2026-10-16. Autoría local de dos borradores bilingües, reutilizando la colección projects y los bloques de Tina existentes. Sin cambios de componentes, schema ni archivos generados.

## Confirmaciones y límites

Alejandro confirmó Mate como campaña académica realizada en Photoshop. La carpeta está dentro de gráfica de Da Vinci y conserva post Instagram, banner lateral, banner horizontal y volante. No se afirma encargo comercial de Cruz de Malta ni fotografía propia: el logo encontrado es un recurso del ejercicio; créditos pendientes.

Para CV personal confirmó Photoshop, Illustrator y Adobe XD. No confirmó año, materia ni entrega académica: se clasifica como proyecto personal, sin asociarlo a una experiencia laboral ni convertirlo en información actual de RESUME. No se presume implementación web ni alcance de un prototipo XD.

## Fuentes y medios

Se consultó el inventario CSV y metadatos acotados de las dos carpetas. Los dos PDF del CV tienen una página y no devolvieron texto con pypdf; no se infirieron datos biográficos. Las exportaciones JPG completas clara/oscura se conservaron como referencia del diseño histórico. No se ejecutaron archivos archivados ni se leyeron TXT extensos.

prepare-graphic-design-review-images.py produjo seis WebP desde JPG originales, con PIL, sin ampliar imágenes ni modificar fuentes. El manifiesto graphic-design-media-manifest.json registra fuente, dimensiones y tamaño, con visualReview pending. Los medios están en src/editorial/assets y en la lista permitida del endpoint DEV; no se copiaron a public.

## Entrega

- mate.mdx: contexto académico y cuatro piezas, Photoshop, categoría academic.
- cv-personal.mdx: diseño personal en dos variantes, tres herramientas confirmadas, sin categoría académica inferida.
- Un archivo por trabajo, con ES/EN, alt, epígrafe y crédito por imagen; publicationStatus draft y showInResume false.
- Galerías previews existentes: muestran un recorte inicial y abren el original completo en otra pestaña. Las proporciones de los archivos permanecen intactas.
- Rutas /revision/proyectos/mate y /revision/proyectos/cv-personal; inglés bajo /revision/proyectos/en/{slug}.

El script prepare-graphic-design-drafts.mjs creó ambos documentos con flag wx para evitar sobrescribir ediciones. No volver a ejecutarlo para actualizar lo editado en Tina.

## Ejecución y pendientes

Autoría de imágenes y MDX: exit 0. Sin build, tipos, lint, pruebas, e2e, navegador ni capturas, conforme a AGENTS.md. No se declara comprobado el editor ni la presentación visual de estos dos documentos; quedan para la revisión/cierre correspondiente. Sin commit, push ni publicación.

Faltan fechas, contexto del CV, decisiones y aprendizajes específicos, equipo y créditos. No se inventaron resultados ni metodología. Cursor completado: davinci/diseño_web/grafica/mate y cv_personal. Siguiente cola del plan: proyectos personales 3D y web profesional, empezando por un relevamiento acotado del inventario y confirmación de roles antes de redactar.
