# Mandato local — Store 3D R2

> Estado actualizado el 29/10/2026: Alejandro pidió «seguila vos» y Codex implementó R2. Este mandato queda como historial; no ejecutarlo otra vez. Consultar shop-r2-local-report.md y el diff real. Aceptación y controles finales siguen pendientes.

## Objective

Implementar datos tipados de ficha por concepto, partiendo de R1 local, para separar contenido y presentación. Proyecto C:/www/Portfolio_2026_astro, OpenSpec contenido-real-y-tienda-3d. El usuario autoriza continuidad web actual y considera posible ejecución por IA local; este documento está preparado, no enviado.

## Read First

AGENTS.md actual; openspec/config.yaml; specs/physical-3d-catalog/spec.md; shop-ui-batches-2026-10-29.md; src/data/shop-demo.ts; src/data/shop-experience.ts; src/components/ShopContent.tsx. Leer el estado/diff local antes de editar. .codegraph existe; no reindexar. No usar explore pesado en main.

## Allowed Writes

- src/data/shop-demo.ts
- src/data/shop-experience.ts
- src/components/ShopContent.tsx
- openspec/changes/contenido-real-y-tienda-3d/shop-r2-local-report.md (crear reporte)

No tocar estilos, UI compartida, Navigation, MainLayout, rutas, Tina/generados, políticas, otros proyectos o documentos modificados ajenos. Si la solución requiere ampliar alcance, describir la necesidad; no expandirlo por cuenta propia.

## Work

1. Leer implementación R1 real y conservarla. No rehacer filtros, contador, diálogo o diseño.
2. Definir tipo explícito de concepto y detalles, con campos estables para material, dimensiones, variantes/colores, cuidado, disponibilidad y producción. Elegir una estructura pequeña y legible; conservar ES/EN.
3. Mantener los seis conceptos y sus ids/nombres/categorías/alts y recortes intactos. Datos no confirmados null, no cadena vacía o valor inventado. Mantener identificación de render y condición conceptual; no convertirlos en inventario.
4. Hacer que ficha derive los valores de los datos de la pieza y use el texto pendiente localizado cuando falten. Mantener labels localizados y claves estables separadas; no interpretar el índice del array o una traducción como id de campo.
5. No inventar PLA real, medidas, colores imprimibles, cuidados, precio, stock o plazos a partir del render. No crear precios de prueba, SKUs comerciales ni funciones de pedido. No agregar CMS, dependencias o validadores innecesarios.
6. Mantener retorno a colección sin perder filtro, cierres y foco nativos, aclaraciones conceptuales y separación de servicio a medida.

## Execution Policy

No ejecutar build, pruebas, tipos, lint, e2e ni controles del proyecto; no tomar o inspeccionar capturas. Este mandato no pide ningún comando de control. No iniciar servidores, navegadores/MCP ni modificar sus conexiones. Respetar la política del 16/10: auditar por lectura del diff; controles finales a cargo del orquestador. No desactivar protecciones.

Trabajar en branch activa. No crear/cambiar branch ni worktree, hacer commit, staging, push o deploy desde este mandato. El permiso humano general de crear rama si hiciera falta no es una orden para hacerlo aquí; no se necesita para R2.

## Report

Crear shop-r2-local-report.md con branch/HEAD observado, archivos realmente tocados, decisión de datos/fallback ES/EN, riesgos o solapamientos y controles no ejecutados. Distinguir implementado de aceptado; no marcar 2.1–2.4 ni el OpenSpec completos. Finalizar indicando la ruta del reporte para que el orquestador lea el diff antes de continuar.
