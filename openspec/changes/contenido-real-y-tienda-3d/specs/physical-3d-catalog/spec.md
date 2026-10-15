## ADDED Requirements

### Requirement: Portfolio and shop coexistence

El sitio SHALL conservar el portfolio y ofrecer una seccion diferenciada para las piezas fisicas impresas en 3D.

#### Scenario: A visitor browses work and products

- **WHEN** el visitante navega desde el portfolio hacia el catalogo
- **THEN** distingue proyectos profesionales, servicios y objetos fisicos disponibles para compra o consulta
- **AND** no se le ofrece una descarga digital como equivalente a una pieza impresa

### Requirement: Truthful product information

El catalogo SHALL mostrar solo fichas aprobadas con material, medidas, variante, precio/moneda si se ofrece compra y disponibilidad o condicion de produccion.

#### Scenario: A product is made to order

- **WHEN** el visitante abre su ficha
- **THEN** distingue plazo de produccion de plazo de envio y conoce las opciones realmente disponibles
- **AND** fotos y renders se identifican correctamente sin atribuir propiedades no comprobadas al objeto

### Requirement: Honest initial conversion

El catalogo SHALL distinguir consulta comercial de compra confirmada mientras no exista un checkout operativo.

#### Scenario: Only assisted ordering is available

- **WHEN** el usuario acciona la ficha
- **THEN** se inicia una consulta o solicitud de pedido explicita sin simular cobro, reserva ni confirmacion de compra
