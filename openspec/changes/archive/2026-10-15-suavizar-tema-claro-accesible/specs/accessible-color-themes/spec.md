## ADDED Requirements

### Requirement: Independent semantic themes

El sitio SHALL resolver fondos, texto y roles de marca mediante tokens semanticos independientes para claro y oscuro, sin filtros de inversion.

#### Scenario: Light theme is selected

- **WHEN** el usuario activa el tema claro
- **THEN** fondos y texto usan la paleta clara atenuada, incluyendo body, titulos, metadata y acciones
- **AND** verde, naranja y cyan conservan sus roles de marca
- **AND** fotografias y renders conservan sus colores originales

#### Scenario: Dark theme is selected again

- **WHEN** el usuario regresa al tema oscuro o recarga con esa preferencia
- **THEN** se restauran sus colores y tokens de efectos oscuros sin heredar ajustes de intensidad claros
- **AND** los reflejos oscuros se acotan cuando reducen el contraste funcional sobre las tarjetas

### Requirement: Functional contrast

El sitio SHALL mantener WCAG 2.2 AA para contraste de texto y senales funcionales en ambos temas sobre los fondos efectivos, incluidos hover, seleccion y foco.

#### Scenario: Contrast is evaluated

- **WHEN** se mide texto normal, texto grande o una senal funcional
- **THEN** el contraste alcanza respectivamente 4.5:1, 3:1 o 3:1 sin redondear ratios insuficientes
- **AND** las mediciones incluyen las superficies compuestas por transparencias y la indicacion de foco

### Requirement: Restrained decoration

El tema claro SHALL reducir intensidad de grilla, grano, reflejos y sombras mediante tokens sin reducir el contraste informativo para disimularlos.

#### Scenario: Light surfaces are rendered

- **WHEN** aparecen navegacion, cards y grilla en claro
- **THEN** sus efectos son mas tenues que en oscuro y no dependen de nuevos bordes de seccion
- **AND** se mantienen la estrategia de mascaras y el respeto a reduced-motion
