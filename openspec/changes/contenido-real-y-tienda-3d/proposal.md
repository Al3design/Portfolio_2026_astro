# Proposal

## Why

Alejandro confirma que buena parte del contenido actual es dummy y quiere mostrar informacion real. Ademas quiere mantener el portfolio y sumar una tienda de piezas fisicas impresas en 3D por el, con una futura compra que contemple envios nacionales.

## What Changes

- Inventariar todo contenido publico y sus fuentes, distinguir confirmado, pendiente y dummy; reemplazar solo con datos aprobados.
- Conservar portfolio profesional y agregar una seccion de catalogo/tienda 3D, con navegacion y contenido diferenciados.
- Preparar una propuesta visual local bilingue (español/ingles) con categorias y piezas de demostracion, autorizadas por Alejandro para evaluar el diseño mientras ordena sus impresiones. Mantenerla fuera del catalogo publico y distinguir renders conceptuales de inventario real.
- Preparar fichas de piezas con fotos reales, variantes, materiales, medidas, disponibilidad y produccion bajo pedido cuando corresponda.
- Disenar por etapas: contenido real, catalogo con consulta, y luego checkout con pagos/pedidos/envios si se aprueba la arquitectura y operacion.
- Evaluar Payload como opcion futura; documentar carrito nativo, integraciones faltantes y costos operativos antes de decidir.

### Out of Scope

Migrar CMS ahora, inventar trayectoria o publicar productos de demostracion como inventario real, abrir cobros reales, contratar transportistas, prometer cobertura/precios/plazos no confirmados, vender STL por defecto o reemplazar todo el portfolio por una tienda. Los ejemplos de diseño identificados y locales estan autorizados por Alejandro.

## Capabilities

### New Capabilities

- `verified-portfolio-content`: contenido profesional real con trazabilidad y aprobacion.
- `physical-3d-catalog`: catalogo de piezas fisicas que convive con el portfolio.
- `domestic-order-checkout`: compra futura con costo total, pago confirmado y entrega elegible.

### Modified Capabilities

Ninguna: no existen especificaciones previas en este repo.

## Impact

MDX de pages/projects/global, textos hardcodeados y exportaciones, metadata, rutas y navegacion; futura coleccion products separada de projects. No requiere implementar Payload para sanear contenido. Checkout agrega backend persistente, operacion de pedidos, pagos, correo y logistica; se habilitara solo despues de una decision explicita.
