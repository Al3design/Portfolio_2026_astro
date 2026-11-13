# R24 — Vista previa y revisión actualizadas: 4/4

Alejandro autorizó expresamente una ejecución del control después de la corrección R23. Se reutilizó el servidor existente, sin inicio/reinicio manual, build ni publicación.

```powershell
npx.cmd e2e run tests/e2e/shop-review.e2e.ts --reporter list,markdown --max-failures 1
```

Resultado: código 0, un archivo y cuatro tests aprobados. Run 01a18a06-1674-7f59-a5f8-422e82c90f8e; duración total 104,12 s. Leído .e2e/summary.md después de completar. Sin reintentos, suites adicionales ni cambio de expectativas durante el control.

## Comprobado

- /tienda?catalog=real y equivalente EN muestran ocho fichas y permisos confirmados por el titular.
- Navegación a la ficha del árbol mediante piece, conservación de la pieza al cambiar idioma y enlace directo al formulario Tina esperado.
- /revision/tienda ES/EN recorre las ocho fichas y veintinueve fotos por idioma: respuestas JPEG correctas, alt presente y headers no-store/noindex.
- Campos vigentes: PLA, colores a consultar, cuidados pendientes, modalidad mixta con disponibilidad concreta por confirmar y plazo de entrega pendiente. Cinco campos visibles; medidas vacías y duración de impresión no aparecen en ese bloque.
- Navigation/Footer compartidos, tema claro inicial, cambio/persistencia y retorno a claro; shop-theme separado de theme del portfolio.
- Idiomas, regreso al ancla y geometría de imágenes/listas/detalles a 320/1440 px.
- Rechazo de manifest JSON y medio no asociado. Sin catalog=real, tienda conceptual sin enlaces/fotos de revisión.

El fallo R22 queda resuelto para este recorrido tras R23. No se cambió su expectativa a nueve artículos ni se ocultó el error.

## Límites y pendientes

No es auditoría visual de capturas ni teclado exhaustivo, no prueba creación desde Tina ni subcampos anidados. La persistencia de una nota real fue comprobada por separado en R16. No se ejecutó build: exclusión de originales/rutas en artefacto requiere control final. Permisos son confirmación del titular, sin examen documental nuevo. Continúan pendientes cuidados, plazo de entrega/disponibilidad concretos y selección editorial pública. Medidas opcionales; tiempos de impresión fuera de la información al cliente.

Sin staging, commits ni publicación. El catálogo real sigue local, con estado draft; no se habilita pago, pedido, reserva o envío por pasar este control.
