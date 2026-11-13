# Shop Batch 08–17

## ADDED Requirements

### Requirement: Additive photo intake

The candidate MUST incorporar las fotos autorizadas sin sustituir archivos ni reordenar galerías existentes, preservando originales y referencias.

#### Scenario: Árbol de mayor tamaño

- **WHEN** la foto muestra la versión más grande del diseño existente
- **THEN** la ficha SHALL conservar su portada y añadir la comparación al final, indicando la variante sin inventar medidas.

### Requirement: Explicit bilingual selection

The candidate MUST completar nueve fichas ES/EN con PLA confirmado y agregarlas al principio de la selección, última incorporación primero, preservando ocho referencias existentes, hero y novedades.

#### Scenario: Content reaches Preview

- **WHEN** el candidato termina sus controles y el deployment Preview queda Ready
- **THEN** Codex SHALL entregar URL/revisión y detenerse en ESPERANDO_OK_PREVIEW, sin actualizar main ni producción antes del OK posterior.

## Requirement: New selections and manual order

The selector SHALL prepend only newly selected references, preserve saved manual positions on edits/repeated intake, and keep hero/latest independent. Every new product SHALL include palette labels ES/EN and manual approximate HEX or confirmed filament presets; unresolved colours MUST be reported.

### Scenario: Manual order survives a repeated intake
- **WHEN** una pieza ya seleccionada se edita o vuelve a aparecer en el lote
- **THEN** SHALL conservar su posición manual y sus referencias sin duplicarse.
