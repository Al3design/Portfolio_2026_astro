# Tareas

- [x] Consultar producción y leer la cadena de orden actual.
- [x] Preparar comparador compartido y aplicar categoría antes de paginación.
- [x] Conectar `categoryOrders` en Tina, contrato, schema Astro y plantilla.
- [x] Preparar formularios del dashboard con guardado por fila, relectura previa, bloqueo de guardados simultáneos y errores visibles.
- [x] Recorrer el inventario completo mediante cursores.
- [x] Agregar casos de regresión para cero, herencia y posición antes de paginar.
- [x] Ejecutar una vez `node --test tests/project-order.test.mjs`. Resultado 3/3 aprobados el 06/11.
- [x] Ejecutar una vez `npx.cmd astro check`. Salida 1, dos errores en `tina/config.ts` líneas 128 y 130, 170 archivos y 86 hints.
- [x] Corregir el tipo de entrada de la validación de `categoryOrders` mediante estructura `unknown`.
- [x] Completar el control acotado de tipos autorizado: `npx.cmd astro check`, salida 0, 172 archivos, 0 errores, 0 warnings y 86 hints.
- [x] Comprobar en Tina local guardado y reapertura del orden general 5 → 7 → 5 y categoría UI/UX heredada → 0 → heredada. Contenido conservado y bytes originales restaurados.
- [x] Registrar el fallo del guardado parcial del dashboard y restaurar los bytes originales de `around.mdx`. Botón y handler bloqueados para evitar más escrituras con el payload incompleto.
- [x] Preparar el envío del documento completo `_values`, transformado mediante el esquema y guardado con `TinaAdminApi.updateDocument`. Agregar casos de preservación de cuerpo, bloques, metadatos y posiciones; rechazar datos incompletos o inválidos. Retirar el bloqueo temporal en el candidato corregido.
- [x] Comprobar la corrección autorizada: `node --test tests/project-order.test.mjs tests/project-order-values.test.mjs`, 6/6 aprobados, y recorrido local completado. Ver reporte.
- [x] Integrar selectivamente y publicar: main 88ac92e, deployment 4hu6nypxl Ready, Tina/Astro y verificador sin errores. HTTP y navegador de producción confirmaron versión 3.15.1, tema y dashboard; sin guardar contenido Cloud. Ver release-2026-11-06.md (incluye fallo inicial del índice y corrección).

La lectura previa detecta un valor ya cambiado al iniciar el guardado. Tina no ofrece compare-and-swap en esta mutación, por lo que continúa existiendo una ventana de concurrencia entre esa lectura y la escritura desde otro editor. Evitar editar el mismo artículo desde dos sesiones durante un guardado.
