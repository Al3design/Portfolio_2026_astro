# Tasks

## 1. Discovery and real content

- [x] 1.1 Confirmar coexistencia portfolio + tienda y relevar el stack y ejemplos de contenido pendiente.
- [x] 1.2 Investigar limites oficiales actuales de Payload e incorporarlos al diseno.
- [x] 1.3 Completar inventario publico y matriz fuente/estado/reemplazo/aprobacion, incluidos fallbacks y exportaciones.
- [ ] 1.4 Recabar CV/bio, proyectos, rol, fechas, contacto, idioma y zona horaria reales.
- [ ] 1.5 Preparar borradores por pagina; obtener aprobacion y reemplazar solo datos verificados.
- [ ] 1.6 Validar que contenido publico y exportado coinciden y no contienen dummy no identificado.

## 2. Physical catalog

- [x] 2.0 Preparar prototipo local bilingue con categorias, textos y renders de demostracion identificados para revisar el diseño antes del catalogo real.
- [ ] 2.1 Confirmar pais, primeras piezas, licencias, materiales, fotos reales, variantes y capacidad de produccion.
- [ ] 2.2 Aprobar arquitectura de navegacion y fichas, diferenciando portfolio/servicio/producto fisico.
- [ ] 2.3 Implementar coleccion de productos, listado, ficha y consulta honesta sin checkout ficticio.
- [ ] 2.4 Validar catalogo responsive/accesible y operacion editorial; revision de Alejandro.

## 3. Commerce architecture decision

- [ ] 3.1 Comparar pedido asistido, Astro + Payload separado y Next/Payload integrado con costo y mantenimiento.
- [ ] 3.2 Probar en sandbox el proveedor de pagos elegible y el mecanismo de envio por CP.
- [ ] 3.3 Fijar presupuesto, versiones y fuente de verdad; aprobar ADR antes de migrar CMS o implementar checkout.

## 4. Future checkout (conditional on approved decision)

- [ ] 4.1 Definir contratos de carrito, precio/moneda, disponibilidad, produccion, cotizacion y pedido.
- [ ] 4.2 Implementar total calculado en servidor y seleccion de entrega antes de confirmar pago.
- [ ] 4.3 Implementar pagos/webhooks idempotentes, reserva/liberacion y estados de pedido.
- [ ] 4.4 Implementar seguimiento, notificaciones, acceso a pedidos, backups y restauracion.
- [ ] 4.5 Validar sin cobertura, cotizacion vencida, fallos de API/pago, duplicados y concurrencia.
- [ ] 4.6 Confirmar politicas comerciales, cobertura, operacion, costos y textos aplicables con Alejandro.

## 5. Release

- [ ] 5.1 Obtener aprobacion de contenido y del flujo completo antes de cada publicacion; no declarar tienda operativa hasta probarla.
- [ ] 5.2 Publicar solo con autorizacion, verificar produccion y archivar al completar el alcance acordado.
