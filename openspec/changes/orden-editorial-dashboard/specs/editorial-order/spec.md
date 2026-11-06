# Orden de artículos

## ADDED Requirements

### Requirement: Orden general y por categoría

El portfolio MUST ordenar por número ascendente antes de elegir la tarjeta destacada y paginar. Una posición específica de categoría MUST aplicarse solo al filtrar esa categoría. Una categoría sin posición propia MUST heredar `order`. Un `order` ausente MUST equivaler a cero, conservando el comportamiento público anterior. El cero MUST ser un valor explícito válido.

#### Scenario: Excepción dentro de 3D
- GIVEN un artículo con `order: 8` y una entrada `{category: '3d', order: 0}`
- WHEN se filtra 3D
- THEN se usa cero para ese artículo
- AND el listado general y otras categorías usan ocho

### Requirement: Edición desde el dashboard

Portfolio Overview MUST mostrar un selector de ámbito y un formulario por artículo para guardar su orden. Guardar MUST leer el documento completo mediante `_values`, modificar únicamente el campo de orden correspondiente, transformar el documento mediante el esquema de Tina y enviarlo mediante `TinaAdminApi.updateDocument` autenticado. Una lectura incompleta MUST impedir la escritura. No se MUST tratar la mutación como un patch parcial. La edición de una categoría MUST conservar las posiciones de las demás categorías y todo el contenido del artículo. El dashboard MUST recorrer todas las páginas de proyectos de Tina.

#### Scenario: Lectura desactualizada
- GIVEN que el valor del ámbito cambió después de abrir el dashboard
- WHEN se intenta guardar desde la copia anterior
- THEN se informa que hace falta refrescar antes de guardar

#### Scenario: Edición pendiente en otra ficha
- GIVEN un formulario Tina registrado con cambios sin guardar
- WHEN se intenta guardar una posición desde el dashboard
- THEN se pide resolver esa edición antes de continuar

### Requirement: Publicación explícita

El dashboard MUST informar que guardar en Cloud puede generar commits y despliegues según la rama activa. El estado de implementación local, comprobación, Preview y producción MUST registrarse por separado.
