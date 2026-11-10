## ADDED Requirements

### Requirement: Orden visual con confirmación explícita
La colección Portfolio · orden visual SHALL permitir reordenar artículos visibles por ámbito general o categoría, mediante asa de arrastre y acciones Subir/Bajar/Primero. Los movimientos SHALL permanecer pendientes en el formulario hasta Save. El guardado y descarte SHALL usar Save/Reset nativos de Tina sobre un único documento de referencias, igual que la selección Shop, conservando otros ámbitos. Overview SHALL limitarse a consultar el inventario.

#### Scenario: Primera migración
- **WHEN** se mueve una fila por primera vez con scopes vacío
- **THEN** se preparan las prioridades numéricas y sus excepciones desde el inventario cargado, sin reescribir artículos; solo Save persiste y Reset descarta

#### Scenario: Artículo nuevo
- **WHEN** un artículo publicado y visible no está referenciado en una lista activa
- **THEN** aparece al final sin renumerar otras fichas; la selección no modifica publicación, RSS ni cronología de Resume

#### Scenario: Movimiento accesible
- **WHEN** se utiliza Subir, Bajar o Primero
- **THEN** el orden DOM acompaña la posición y el foco vuelve al artículo movido; el usuario puede descartar sin escribir

#### Scenario: Edición de varios ámbitos
- **WHEN** se cambia de categoría antes de guardar
- **THEN** se conservan los movimientos pendientes de otros ámbitos y Save los confirma juntos

### Requirement: Controles móviles compactos
La home SHALL mostrar Filtrar con un único total y Opciones con vista/copiar/exportar bajo md. La paginación móvil SHALL estar al final de los resultados, con anterior, página/total y siguiente. El cambio de página SHALL anunciar resultados y devolver la lectura al comienzo del contenedor.

#### Scenario: Apertura de filtros
- **WHEN** se abre Filtrar u Opciones
- **THEN** se cierra el otro desplegable y Escape cierra el actual devolviendo el foco

### Requirement: Luz táctil compatible con gestos nativos
El efecto SHALL atender contacto primario y terminar al levantar o cancelar, sin impedir scroll/zoom. Hexagonal SHALL evitar una segunda onda del click sintetizado. Ambos patrones SHALL limpiar listeners/frames y respetar reduced-motion.

#### Scenario: El navegador toma el scroll
- **WHEN** se recibe pointercancel
- **THEN** termina el seguimiento y la luz se desvanece sin capturar el gesto
