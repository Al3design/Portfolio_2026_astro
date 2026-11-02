# Tasks

## Estado vigente y próximos pasos — 2026-11-02

Este resumen prevalece sobre las casillas y los estados históricos que siguen debajo. Conservamos el historial para no perder límites de evidencia; una casilla antigua sin marcar no es una orden de repetir un control o una publicación ya completada.

### Completado para el catálogo publicado

- [x] Colección de ocho piezas reales y fichas ES/EN, fotos, paletas editables, filtros, consulta por WhatsApp, compartir y RSS. Publicación autorizada R55: PR #1 fusionada en `2e9b3dd`, producción en `https://al3design.dev/tienda`. Evidencia registrada el 30/10, no una nueva consulta del despliegue hoy. Ver [reporte R55](shop-r55-production-2026-10-30.md).
- [x] Regeneración de esquema e índice Tina, Preview y publicación de los ajustes R46–R50 resueltos por R47/R48/R50/R55. Los pendientes antiguos 2.4o, 2.4p y 2.4r están superados en ese alcance. No volver a abrir orígenes de Preview caducados por 2.4q: el origen de producción ya estaba autorizado en R55.
- [x] Verificación final R55: 11/11 escenarios E2E, build remoto y checker sin errores; HTTP público de fichas, imagen social y feeds. No repetir por ordenar documentación.
- [x] Guía editorial para cualquier IA y borradores reutilizables: [guía](../../../docs/GUIA_EDITORIAL_IA.md), [artículo](../../../docs/templates/articulo-bilingue.mdx) y [pieza](../../../docs/templates/pieza-shop.json). Contratos, imágenes, Tina, plantillas, metadatos, RSS y límites de publicación documentados.

### Pendientes activos, sin ampliar la publicación

- [ ] EDIT-1 Completar un recorrido de alta de un borrador nuevo desde Tina: crear, guardar, reabrir y editar; comprobar que no aparece en el catálogo público. La persistencia de notas y presets de fichas existentes ya se probó; no acredita el alta. Reutilizar el servidor cuando corresponda y respetar la política de controles.
- [ ] EDIT-2 Facilitar el alta pública de piezas: definir selección/novedades y fotos editables, migrar las ocho fichas conservando URLs y privacidad, conectar plantilla, listados, OG y RSS. Hoy `shop-release.ts` y los imports literales de `shop-catalogue.ts` requieren intervención en código; guardar en Tina no publica una pieza nueva. Preparar este cambio con criterios propios, sin abrir todos los medios ni publicar automáticamente cada borrador.
- [ ] DIF-1 Comprobar previsualización de enlaces dentro de WhatsApp/Instagram, disponibilidad del selector nativo en dispositivos y suscripción en un lector RSS real. El HTTP y los escenarios R55 no acreditan estos recorridos externos. No enviar mensajes ni publicar en redes sin instrucción expresa.
- [ ] A11Y-1 Completar auditoría integral con lector de pantalla, contraste y zoom; conservar como evidencia parcial el recorrido de teclado y responsive ya realizado.
- [ ] SEO-1 Consultar el resultado existente de Search Console. Último registro del 29/10: validación iniciada el 28/10, dos pendientes y cero errores, esperando procesamiento. No reenviar solicitudes por rutina. Offline real y topbar 404 ya comprobados el 29/10; no son pendientes.
- [ ] PORT-1 Continuar los artículos y revisar coherencia del contenido público/exportado según sus aprobaciones individuales. OdontoPro, UseOdontoPro y Tienda Geekies conservan sus restricciones de borrador; este cierre de catálogo no las cambia.

### Diferido por decisión de producto

Next + Payload, carrito, cobros y envíos (secciones 3–4) requieren decisión posterior y no bloquean la consulta asistida actual. También siguen diferidos la carga de originales editables y su almacenamiento. No archivar el OpenSpec general por haber publicado el catálogo.

## Historial de tandas y aceptación parcial

## 1. Discovery and real content

- [x] 1.1 Confirmar coexistencia portfolio + tienda y relevar el stack y ejemplos de contenido pendiente.
- [x] 1.2 Investigar limites oficiales actuales de Payload e incorporarlos al diseno.
- [x] 1.3 Completar inventario publico y matriz fuente/estado/reemplazo/aprobacion, incluidos fallbacks y exportaciones.
- [ ] 1.4 Recabar CV/bio, proyectos, rol, fechas, contacto, idioma y zona horaria reales.
- [ ] 1.5 Preparar borradores por pagina; obtener aprobacion y reemplazar solo datos verificados.
- [ ] 1.6 Validar que contenido publico y exportado coinciden y no contienen dummy no identificado.

## 2. Physical catalog

- [x] 2.0 Preparar prototipo local bilingue con categorias, textos y renders de demostracion identificados para revisar el diseño antes del catalogo real.
- [x] 2.0a Integrar vista local ES/EN con tokens comunes, ancho util del boceto aplicado tambien al portfolio, encabezado abierto para tienda, menu contextual, mismo footer, tema claro inicial y sin grilla animada.
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
