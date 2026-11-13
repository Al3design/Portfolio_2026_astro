## ADDED Requirements

### Requirement: Isolated editorial preparation

El proyecto SHALL permitir preparar borradores de piezas reales en Tina separados de proyectos del portfolio y de la seleccion publica del catalogo.

#### Scenario: A piece is drafted without confirmed physical data

- **WHEN** el titular crea una ficha editorial
- **THEN** inicia como borrador y admite datos fisicos o idiomas incompletos
- **AND** puede registrar fotos o renders identificados y modalidad de produccion sin inventar valores
- **AND** guardar o marcar para revisar no agrega piezas a la seleccion publica ni reserva stock; solo una seleccion explicita puede preparar su incorporacion al catalogo

#### Scenario: Media are added to a draft

- **WHEN** se usa el gestor existente para agregar imagenes
- **THEN** el editor distingue tipo de imagen, alt ES/EN y credito
- **AND** se informa que los archivos en public/assets no adquieren privacidad por estar vinculados a un borrador

### Requirement: Progressive collection and concept details

Alcance historico del prototipo de seis conceptos: sus fuentes se conservan. Desde R36 la preparacion de las rutas publicas usa ocho piezas reales seleccionadas y fichas enlazadas, sin presentar conceptos como inventario. Los escenarios de dialogo/filtro de esta seccion describen el prototipo, no el nuevo contrato de navegacion publica.

La tienda conceptual SHALL permitir recorrer categorias y volver de una ficha a la coleccion sin perder el filtro, con etiquetas y acciones equivalentes en ES/EN y conservando el diseño existente.

#### Scenario: A filtered concept is opened and closed

- **WHEN** el visitante filtra la coleccion y abre una pieza desde su imagen o accion de detalle
- **THEN** la ficha identifica pieza, categoria y render conceptual
- **AND** cierre, Escape o regreso explicito conservan el filtro y devuelven foco al activador mediante el dialogo nativo
- **AND** el contador anuncia cantidad y categoria seleccionada

#### Scenario: A category filter is cleared

- **WHEN** el visitante acciona Ver todas las piezas
- **THEN** reaparecen los seis conceptos y Todas queda activa
- **AND** el foco vuelve al control de Todas sin perderse al desaparecer la accion de limpieza

#### Scenario: Physical product facts are not yet confirmed

- **WHEN** se consulta material, medidas, variantes, cuidados, disponibilidad, produccion o precio de un concepto
- **THEN** los valores faltantes se presentan como pendientes en el idioma actual
- **AND** no se deducen propiedades comerciales de un render ni se simula compra, reserva o consulta enviada

#### Scenario: Custom work is explored

- **WHEN** el visitante abre la propuesta a medida
- **THEN** distingue posibilidades futuras de servicio frente a las piezas de la coleccion
- **AND** conoce que no hay envio de mensajes ni generacion de presupuestos operativos

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

El catalogo SHALL mostrar solo fichas aprobadas con material, variante, precio/moneda si se ofrece compra y disponibilidad o condicion de produccion. Las medidas SHALL ser opcionales en esta etapa y no bloquear la ficha. El plazo informado al cliente SHALL describir entrega o retiro, sin exponer ni confundir la duracion de impresion con ese compromiso.

#### Scenario: Measurements and print duration are not supplied

- **WHEN** una pieza no tiene medidas registradas ni duracion de impresion
- **THEN** la ficha no muestra medidas vacias ni exige esos datos para la revision editorial
- **AND** no presenta una duracion de impresion como promesa al cliente
- **AND** el plazo de entrega se guarda en un campo separado y permanece sin confirmar hasta una definicion del titular

#### Scenario: A product is made to order

- **WHEN** el visitante abre su ficha
- **THEN** conoce el plazo total de entrega o retiro cuando este confirmado y las opciones realmente disponibles
- **AND** no se usa la duracion de impresion ni el transito del envio aislado como sustituto de ese plazo total
- **AND** fotos y renders se identifican correctamente sin atribuir propiedades no comprobadas al objeto

### Requirement: Accessible photographed colour palette

Las fichas de detalle SHALL permitir muestras cuadradas con nombres localizados ES/EN de los colores de la pieza. Las muestras SHALL identificarse como referencias en pantalla, sin implicar stock ni combinaciones ofrecidas. Los colores de accesorios ajenos a la pieza SHALL quedar fuera de la paleta. La coleccion SHALL mostrar solo cuadrados compactos con nombres accesibles; las descripciones y paletas detalladas permanecen dentro de la ficha, segun la decision visual actualizada de Alejandro del 30/10/2026.

#### Scenario: Photographed colours are shown

- **WHEN** una pieza tiene colores fotografiados registrados
- **THEN** cada muestra tiene un nombre visible, sin depender solo del color ni de un tooltip
- **AND** se indica que otros colores y combinaciones se consultan
- **AND** las muestras informativas no se presentan como botones de seleccion o reserva
- **AND** una ficha sin paleta omite el bloque sin inventar colores

### Requirement: Minimal collection matching the original shop

La coleccion real SHALL reutilizar la grilla visual de la tienda de ejemplo, con fotografia protagonista, nombre, categoria y enlace a ficha, sin recuadro de tarjeta ni panel de texto extenso.

#### Scenario: A visitor browses real pieces

- **WHEN** abre la coleccion real
- **THEN** reconoce cada pieza por su foto, nombre y categoria
- **AND** se muestran solo cuadrados compactos de color, sin repetir notas de paleta ni descripciones extensas debajo de cada foto
- **AND** puede abrir el detalle desde la foto o el nombre para consultar descripcion, colores, datos y WhatsApp

### Requirement: Editable hex colours and manufacturer references

El editor SHALL permitir una lista de colores por pieza con nombre ES/EN, hexadecimal #RRGGBB y referencia opcional Bambu Lab de las familias PLA, PETG Basic y PETG HF. Cada referencia SHALL identificar familia, color y codigo de fabricante. Un hexadecimal manual valido SHALL tener prioridad sobre el preset; si queda vacio se usa la referencia seleccionada. Valores invalidos SHALL producir un error editorial y no generar CSS arbitrario.

#### Scenario: A manufacturer colour is selected

- **WHEN** el editor elige un preset Bambu y deja vacio el hexadecimal manual
- **THEN** se usa el RGB del catalogo local con codigo de fabricante y revision de fuente registrada
- **AND** no se consulta una API externa al abrir el catalogo ni se deduce stock o filamento utilizado de una foto

#### Scenario: A special filament has more than one reference tone

- **WHEN** la referencia oficial incluye varios colores o alfa de transparencia
- **THEN** se conservan todos los tonos y el alfa en el catalogo local
- **AND** la muestra ofrece una referencia visual compuesta sin prometer reproduccion del brillo, textura, cambio UV o translucidez del objeto real
- **AND** un hexadecimal manual reemplaza esa referencia por un unico RGB sin cambiar el material declarado de la ficha

#### Scenario: A colour is edited manually

- **WHEN** el editor guarda un hexadecimal valido con nombre localizado
- **THEN** el listado compacto y el detalle usan el mismo valor
- **AND** los datos fotografiados aproximados existentes no se convierten automaticamente en productos PLA Lite confirmados

### Requirement: Honest initial conversion

El catalogo SHALL distinguir consulta comercial de compra confirmada mientras no exista un checkout operativo.

#### Scenario: Only assisted ordering is available

- **WHEN** el usuario acciona la ficha
- **THEN** se inicia una consulta o solicitud de pedido explicita sin simular cobro, reserva ni confirmacion de compra

### Requirement: Confirmed enquiry terms and print-only inclusion

El catalogo SHALL mostrar siempre Precio a consultar / Price on enquiry, entrega segun stock y a confirmar, y aclarar que solo se incluye la impresion 3D. Los elementos decorativos de las fotos SHALL quedar excluidos. No se requieren medidas ni duracion de impresion.

#### Scenario: A visitor asks about a piece

- **WHEN** abre una ficha real
- **THEN** ve el precio a consultar, la entrega sin fecha prometida y lo incluido antes de consultar por WhatsApp
- **AND** no se simula disponibilidad de unidades, cotizacion de envio ni cobro

### Requirement: Explicit public selection and private editorial data

Las rutas publicas SHALL usar una seleccion explicita de piezas y una proyeccion de campos aptos para el visitante. Nuevos borradores o cambios de estado en Tina SHALL NOT agregar piezas automaticamente al catalogo. Desplegar SHALL requerir la autorizacion y verificacion final acordadas.

#### Scenario: A selected piece is prepared for publication

- **WHEN** se genera /tienda o /en/shop-3d y sus fichas estaticas
- **THEN** fotos seleccionadas pasan por astro:assets con dimensiones y alternativas localizadas
- **AND** no se usan endpoints /revision para las fotos o los enlaces de las fichas publicas
- **AND** notas internas, rutas sourcePath, JSON editoriales y enlaces al editor no aparecen en el HTML publico
- **AND** la coleccion conserva fotos cuadradas, nombres, categoria, paleta compacta y acceso al detalle, sin paneles de texto extensos
- **AND** cambiar de idioma desde una pieza abre su misma ficha en el otro idioma
## R40 — Portada y colección completa

### Requirement: preserve the original shop design and separate latest pieces from the full collection

The shop SHALL retain the original landing hero, shared header/footer, page container, typography, square image proportions, grid spacing and category filter appearance. The Explore objects link SHALL target the Small objects. New possibilities. section on the same page. That section SHALL initially show three latest incorporated pieces selected explicitly from approved catalogue entries, with colour swatches and compact copy. A native link SHALL open the full collection in the current language; descriptions and enquiry details SHALL remain on individual piece pages.

#### Scenario: view latest pieces and open the complete catalogue

- GIVEN the Spanish or English shop landing page
- WHEN the visitor follows Explore objects
- THEN the page reaches its collection section and initially displays the three latest selected pieces
- AND category controls filter to at most three matching pieces and announce the count
- WHEN the visitor follows View the full collection
- THEN the corresponding full collection route displays all eight approved pieces with category filtering
- AND piece pages return to that full collection, with language links preserving the collection or piece context.

#### Scenario: filter categories on a mobile viewport

- **GIVEN** a shop landing or full collection at a viewport below the existing md breakpoint (48em)
- **WHEN** the visitor activates the native Filtrar / Filter button with its decorative filter icon
- **THEN** the category choices expand and the button exposes aria-expanded and aria-controls
- **WHEN** the visitor selects a category
- **THEN** the pieces and count update, the selected category appears on the trigger, the choices collapse and focus returns to the trigger
- **AND** Escape can close the expanded choices
- **AND** desktop viewports keep the original visible category controls.


### Requirement: Direct product copy and a simple editor

The shop SHALL use direct, natural and professional ES/EN copy. Product pages and the editor SHALL NOT include fields for design authorship, model-source links or usage permissions. Copy SHALL NOT narrate statements by Alejandro or describe editorial decisions to visitors. Price on enquiry, delivery subject to stock and confirmation, and print-only inclusion SHALL remain unchanged.

#### Scenario: Read and edit a piece

- **WHEN** a visitor reads a piece or its enquiry message
- **THEN** the text describes the piece and how to enquire in natural, professional language, without narrating internal decisions
- **WHEN** the editor opens a product form
- **THEN** there are no authorship, licence, usage-permission, model-source or photo-credit fields
- **AND** the existing photos, editable colours, price-on-enquiry and delivery information remain available.

### Requirement: Share a piece by its public link

Each selected piece SHALL expose localized sharing controls and server-rendered Open Graph metadata with its own title, description and optimized JPEG photograph. Sharing SHALL use the active environment's absolute piece URL without query parameters or fragments. Sharing a piece SHALL remain distinct from enquiring about it.

#### Scenario: Share or copy a piece

- **WHEN** a visitor chooses WhatsApp sharing
- **THEN** the prepared message contains the piece title and URL, with no recipient preselected
- **WHEN** native sharing is supported
- **THEN** a Share control opens the device's native choices without promising any particular installed application
- **WHEN** the visitor copies the link
- **THEN** success is announced only after writing succeeds; on failure a selectable, labelled URL is offered
- **AND** cancelling native sharing does not report that anything was sent.

### Requirement: Shop RSS feeds

The shop SHALL expose separate ES/EN RSS feeds with stable piece links, localized titles/descriptions and absolute optimized image URLs, using only the explicit public catalogue selection. The portfolio feed SHALL remain unchanged. Missing publication dates SHALL NOT be invented.

#### Scenario: Subscribe to the selected catalogue

- **WHEN** a visitor opens the shop feed link or uses feed autodiscovery
- **THEN** the matching localized feed is available at /tienda/rss.xml or /en/shop-3d/rss.xml
- **AND** only selected pieces are included, with the latest editorial additions first
- **AND** internal notes, source paths and unselected drafts are excluded.
