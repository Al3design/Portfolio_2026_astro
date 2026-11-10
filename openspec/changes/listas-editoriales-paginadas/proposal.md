# Why

Las listas de selección Shop y orden Portfolio usan implementaciones diferentes, pese al criterio estético acordado. Crecer sin paginación aumenta la navegación y el riesgo de confundir un subconjunto con el orden completo.

# What Changes

Componente compartido, tokens semánticos y paginación de vista con movimientos globales. Adaptadores conservan contratos y Save/Reset nativos. No modifica contenido ni publica.

# Impact

Tina UI, CSS aislado admin, helpers puros, documentación. Sin dependencias nuevas ni cambios de esquemas de datos.
