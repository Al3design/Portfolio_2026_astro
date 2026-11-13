# R16 — Guardado y reapertura reales en Tina

Alejandro autorizó expresamente una excepción acotada a la política de controles de AGENTS.md: comprobar por navegador el guardado/reapertura de una ficha y restaurar al final su nota interna, reutilizando servidor y sin builds, suites ni publicaciones. No se extiende esta excepción a otros controles.

## Recorrido ejecutado

1. Abierto admin/index.html del servidor existente en Chrome. Tina indicó modo local. Navegación a la colección Store 3D: ocho documentos listados.
2. Elegido arbol-decorativo.json desde la tabla. Formulario nativo cargado: draft, home, modalidad pending, licencia pending y ocho referencias fotográficas.
3. Copia previa del JSON conservada en output/shop-tina-r16-baseline-2026-10-29.json, fuera de la colección. No se sobrescribió un baseline existente.
4. Identificado por DOM el textarea name productionNotes. Se conservó su texto exacto y se agregó únicamente la línea temporal `[Control temporal R16: persistencia editorial; restaurar al finalizar.]`.
5. Guardado mediante Save en Tina. Lectura del archivo confirmó el marcador persistido, draft, ocho fotos y rightsStatus pending.
6. Recargado el editor: el marcador reapareció en el textarea, sin depender del estado en memoria del formulario.
7. Abierta la ficha local del árbol y desplegadas las notas: el marcador apareció desde el JSON guardado.
8. Restaurado únicamente productionNotes con el texto original por el mismo formulario y Save. No se restauró el documento completo por filesystem ni se usó una escritura alternativa para simular éxito del editor.
9. Reabiertos editor y revisión: textarea original y marcador ausente. Lectura estructurada del JSON frente al baseline: nota original restaurada, marcador eliminado, mismo documento completo y cero claves superiores con diferencias. Se conservaron ocho fotos.

## Resultado

Guardado, edición, reapertura y reflejo en la revisión local comprobados sobre una ficha existente. Toda la información del documento coincide semánticamente con su estado previo; Tina puede normalizar formato/orden del JSON al guardar. Captura del editor restaurado emitida e inspeccionada en el chat; no se creó un PNG de evidencia local. El formulario mostraba Save sin cambios pendientes al finalizar.

Se reutilizó el servidor y se abrieron pestañas de trabajo temporales. No hubo nueva suite, build, publicación, staging ni commits. No se modificaron fotos, licencias, material, títulos o descripciones; no se editaron otras fichas.

## Límites

No se probó crear/eliminar un documento desde Tina ni se completó la revisión exhaustiva de todos los subcampos ES/EN/fotos. La creación permanece pendiente dentro de 2.3c. Este control no habilita venta, no sustituye aceptación editorial ni confirma permisos. Continúan pendientes material de las últimas cuatro piezas, medidas, capacidad, disponibilidad, licencias y exclusión del artefacto al cierre.
