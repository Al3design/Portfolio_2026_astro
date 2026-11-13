## Requirement: Automatic and manual landing order

The landing SHALL show the first three catalogue pieces when latest is empty, preserving their saved order. Explicit latest references SHALL take priority without removing remaining products from category filtering. Hero SHALL remain independent.

### Scenario: A new selected piece enters first
- **WHEN** latest está vacío y una nueva referencia entra al principio de products
- **THEN** la portada SHALL mostrarla primero, también en EN.

### Scenario: Manual highlights and clearing
- **WHEN** el editor guarda latest explícito o lo vacía
- **THEN** la portada SHALL respetar esa prioridad o volver al orden automático, sin cambiar products ni hero.
