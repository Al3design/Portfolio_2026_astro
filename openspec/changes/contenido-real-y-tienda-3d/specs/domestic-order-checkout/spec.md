## ADDED Requirements

### Requirement: Approved commerce activation

El sistema SHALL habilitar checkout solo despues de aprobar arquitectura, pais/cobertura, moneda, pagos y operacion de pedidos/envios.

#### Scenario: Provider decisions remain open

- **WHEN** todavia no existe una decision tecnica y operativa aprobada
- **THEN** el sitio conserva el catalogo/consulta sin ofrecer un pago real incompleto

### Requirement: Delivery eligibility and complete total

El checkout SHALL validar destino y opciones de entrega y mostrar productos, costo de envio y total en la moneda elegida antes de confirmar pago.

#### Scenario: Cart or delivery data changes

- **WHEN** cambian variantes, cantidades, direccion, servicio o vence la cotizacion
- **THEN** se invalida el presupuesto anterior y se recalcula en servidor antes del pago

#### Scenario: Destination cannot be quoted

- **WHEN** el CP queda fuera de cobertura o el proveedor de envio no responde
- **THEN** el sistema informa la situacion y ofrece reintento o consulta sin cobrar con una tarifa inventada

### Requirement: Reliable payment and order state

El sistema SHALL confirmar pagos y pedidos desde eventos verificables del proveedor, con idempotencia y control de disponibilidad en servidor.

#### Scenario: Callback or webhook is repeated

- **WHEN** un evento valido llega varias veces
- **THEN** el pago y el pedido se procesan una sola vez sin duplicar reserva ni notificaciones

#### Scenario: Payment is pending or fails

- **WHEN** la persona vuelve del proveedor sin pago aprobado
- **THEN** el pedido refleja pendiente o fallo y no se presenta como pagado
- **AND** la reserva se libera o conserva segun la politica de vencimiento informada
