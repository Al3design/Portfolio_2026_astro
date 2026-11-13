# Medios de revisión editorial

Derivados locales de los artículos en revisión; no son un catálogo público aprobado. Incluyen Mundo, Toplomero, Around, Discovery, Tren, Pitufos y Chokie, con manifiestos específicos que registran sus fuentes y parámetros. La revisión visual y los créditos definitivos se registran por tanda.
No mover a public ni importar desde componentes públicos hasta aprobar su selección y créditos.

BOTF, SUPREMACY y Casa: ocho derivados registrados en community-3d-media-manifest.json. Selección provisional por archivo, revisión visual pendiente; en SUPREMACY falta confirmar la correspondencia con el modelado inconcluso y acreditar a quien dibujó la referencia. Ver intake-batch-07.md.

También incluye Rioko, París, Tienda Geekies, Mate y CV personal. Para la tanda gráfica consultar graphic-design-media-manifest.json e intake-batch-06.md; originales intactos y revisión visual pendiente.

Se sirven exclusivamente por el endpoint de desarrollo /revision/media/[file].
El build estático de producción no genera estas rutas ni copia estos archivos.
manifest.json conserva trazabilidad de las fuentes y los parámetros de recorte.
El audio se omite de las previews; las fuentes originales se conservan sin cambios.

scripts/prepare-academic-previews.mjs corresponde solo a la primera tanda Mundo/Toplomero. No regenerar todas las tandas ni sobrescribir selecciones actuales: consultar los informes y scripts de autoría específicos antes de preparar más medios.
Detalles, enlaces locales y pendientes en openspec/changes/contenido-real-y-tienda-3d/academic-drafts-review.md.
