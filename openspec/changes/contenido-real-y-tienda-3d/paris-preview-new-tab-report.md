# París: vistas previas uniformes y apertura en pestaña nueva

2026-10-16. Nueva captura de Alejandro confirma que columnas con páginas completas sigue dejando sobrante vertical al terminar la columna más corta. Pide resolverlo y abrir imágenes en _blank.

Se elige para París layout previews en ES/EN: cuatro vistas previas con marco 3:4, object-fit cover y posición superior. Las imágenes originales no se modifican ni deforman. Una explicación visible ES/EN indica que la vista está recortada y que el diseño completo se abre aparte. La proporción reserva espacio durante la carga y evita alturas de miles de píxeles distintas en la galería. Imagen y epígrafe conservan alt, créditos y enlace; captions pueden ocupar alturas ligeramente distintas, sin el gran sobrante de las páginas completas.

Opción previews disponible en Tina junto a grid y columns; contrato/guard/docs actualizados. Las demás galerías conservan su distribución. Los bloques Imagen y Galería compartidos abren el href explícito (o la imagen src cuando no se definió destino) en _blank con noopener noreferrer. Esto también conserva los enlaces explícitos a videos del canal; se indica nueva pestaña mediante ↗ y nombre accesible en ES/EN. Foco de la miniatura recortada con outline hacia dentro para no ocultarlo por overflow.

Sin dependencias, recortes de archivos, medición JS de alturas, cambios en generados Tina o publicación. Markdown conserva imágenes/destinos y no intenta imponer target HTML. Revisión de fuente/diff; sin build/tipos/lint/tests/e2e ni capturas conforme AGENTS.md. Pendiente revisión visual/teclado en ambos idiomas y formatos al cierre. Sin commit/push/publicación; draft intacto.
