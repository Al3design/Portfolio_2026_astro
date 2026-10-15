## ADDED Requirements

### Requirement: Clearly separated design preview

El proyecto SHALL permitir una exploracion local con categorias y piezas de demostracion cuando Alejandro lo autorice, identificando textos y renders conceptuales y manteniendolos separados del catalogo publico.

#### Scenario: A design concept is reviewed

- **WHEN** Alejandro abre el prototipo de tienda
- **THEN** puede explorar categorias y fichas de ejemplo en español e ingles
- **AND** distingue el ejemplo del inventario real, sin cobros, reservas, consultas enviadas ni precios comerciales ficticios
- **AND** el prototipo no se publica como tienda operativa sin aprobacion posterior

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
