# Diseño del candidato

## Orden editorial

- Colección singleton JSON de referencias a projects en tina/project-order.ts y src/editorial/project-order/order.json, reutilizando el patrón object list + reference que existe en tina/shop-catalogue.ts. La documentación de Tina admite listas de objetos, referencias y append/prepend: https://tina.io/docs/reference/types/object.
- General y categorías guardan listas independientes. El esquema nuevo debe migrar una vez el orden actual, incluyendo ceros/empates y excepciones; no reiniciar prioridades ya elegidas.
- Si una pieza publicada no aparece en la lista, mostrarla automáticamente al final del ámbito correspondiente, sin ocultarla ni exigir renumeración. Los borradores/visibilidad continúan con sus reglas existentes; la lista define orden, no publicación.
- Evitar listas recortadas por búsqueda/página: preservar IDs fuera del subconjunto. Validar duplicados, rutas y pertenencia al conjunto editable. El campo carga inventario por cursor y conecta input.value/onChange; Save/Reset y aviso de cambios son nativos de Tina. No existe compare-and-swap: coordinar sesiones y recargar ante cambios externos antes de editar/guardar.
- Un único Save nativo confirma todos los ámbitos pendientes. Arrastrar no publica por sí mismo. En Cloud el guardado podrá generar un commit y build según la rama; conservar aviso.
- Ofrecer Subir/Bajar/Llevar al principio como alternativa de teclado/touch; foco y orden DOM acompañan la posición real. No depender solo del drag ni de CSS order. No modificar el DOM de React con recetas imperativas; reutilizar soporte nativo de Tina o una implementación React compatible ya disponible.
- Conectar colección, proyección raw, renderer, listado/paginación, exportación/WebMCP y todos los consumidores del orden. Resume mantiene su cronología.

Decisión posterior del 10/11: el editor vive directamente en Portfolio · orden visual, como selección pública de Shop. Se retiran botón/editor, guardado propio y deep-link de Overview. NativeOrderFieldProps usa los callbacks oficiales del campo; no hay mutación propia al reordenar. El primer movimiento prepara migración en memoria, Reset devuelve valores iniciales y Save nativo persiste. Las filas usan superficie continua en admin.css, sin otro recuadro exterior.

Corrección visual posterior: FieldsGroup vendor es flex y hereda nowrap; el custom field declara ancho completo/flex-basis 100%, min-inline-size cero y whitespace normal. Padding replica FieldWrapper (8px). Contenedor al3-order adapta columnas desde 28rem del campo, con controles iconográficos de 18px en áreas de 44px; la distribución base apila acciones para anchos estrechos. Sin modificar schema, Save/Reset o datos por esta corrección. No asumir un max-width global ni ampliar todos los formularios.

## Móvil

ClientHome y módulo home concentran Filtrar/Opciones bajo md (48em). El total sigue en Filtrar; escritorio conserva el resumen completo. El resumen móvil queda accesible sin otra fila visual. No cambiar el tamaño de página por este ajuste.

Opciones reúne vista y exportación. Conservar etiquetas accesibles, áreas de 44 px, Escape/cierre/foco y filtros elegidos. La paginación compacta final actualiza resultados, desplazamiento y anuncio sin atrapar al usuario al final de la página.

## Touch

setupHexagonalGridPointer y setupEnergyGridPointer incorporan política de modalidad, pointerdown/move/up/cancel, fin del contacto y limpieza de listeners/frames. Hexagonal evita doble onda por click sintetizado. Se retiró la restricción mouse/fine también en el CSS de luces dirigidas; square conserva su comportamiento de luz sin onda.

El navegador cancela Pointer Events al tomar control de scroll o zoom: https://developer.mozilla.org/en-US/docs/Web/API/Element/pointercancel_event. Mantener gestos nativos y listeners pasivos. Un toque/onda es la primera versión recomendada; movimiento solo mientras el navegador lo permita. No prometer hover en una pantalla táctil.

## Evidencia y alcance

Lectura de checkout 88ac92e en codex/tienda-catalogo-real, conservando cambios locales previos. Investigación de documentación oficial y guías CSS/drag-and-drop. No se ejecutaron pruebas, tipos, servidor, capturas, build, push o publicación. No se tocaron artículos ni orden numérico.
