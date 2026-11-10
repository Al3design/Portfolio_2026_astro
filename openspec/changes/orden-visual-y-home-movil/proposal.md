# Orden visual y home móvil

Solicitud del 10/11: evitar numeración manual al reordenar artículos, quitar el total duplicado en móvil, simplificar controles/paginación y explorar el efecto del puntero en touch.

Propuesta: sustituir la edición habitual de números por una lista ordenada de referencias con miniatura/título, drag handle y acciones accesibles Subir/Bajar/Llevar al principio. Elegir ámbito general o categoría, editar en memoria y guardar una sola vez. Una fuente de orden independiente evita reescribir todos los artículos y generar un commit/despliegue por fila. El orden numérico actual se conserva como base de migración y compatibilidad; no modificarlo todavía.

Home móvil propuesta: una fila con Filtrar · total y Opciones. Opciones reúne tarjetas/lista y exportar/copiar página. Al final de los resultados, paginación compacta Anterior · 1/6 · Siguiente; no repetir otra fila completa antes del primer artículo. Conservar un estado accesible de resultados y el foco al cambiar de página. Desktop mantiene controles existentes.

Touch propuesto: un toque ilumina la posición y dispara una onda corta. Permitir una estela breve durante contacto sin capturar el scroll; desvanecer al levantar o recibir pointercancel. No prometer seguimiento continuo durante scroll nativo. Respetar reduced-motion, cambio de visibilidad y presupuesto de nodos/frames existente. No usar touch-action:none en el body ni pedir permisos de sensores.

Estado: diseño autorizado e implementado en fuentes. Singleton inicialmente vacío para conservar órdenes actuales hasta el primer guardado explícito desde lectura fresca. Migración, editor visual, barra móvil y touch conectados; controles, regeneración de Tina e integración pendientes según tasks/reporte. Sin órdenes de artículos reescritas, guardados Cloud ni publicación en esta tanda.
