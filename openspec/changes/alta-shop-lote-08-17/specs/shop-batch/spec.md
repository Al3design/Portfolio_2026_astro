# Shop Batch 08–17

## ADDED Requirements

### Requirement: Additive photo intake

The candidate MUST incorporar las fotos autorizadas sin sustituir archivos ni reordenar galerías existentes, preservando originales y referencias.

#### Scenario: Árbol de mayor tamaño

- **WHEN** la foto muestra la versión más grande del diseño existente
- **THEN** la ficha SHALL conservar su portada y añadir la comparación al final, indicando la variante sin inventar medidas.

### Requirement: Explicit bilingual selection

The candidate MUST completar nueve fichas ES/EN con PLA confirmado y agregarlas al final de la selección, preservando ocho referencias existentes, hero y novedades.

#### Scenario: Content reaches Preview

- **WHEN** el candidato termina sus controles y el deployment Preview queda Ready
- **THEN** Codex SHALL entregar URL/revisión y detenerse en ESPERANDO_OK_PREVIEW, sin actualizar main ni producción antes del OK posterior.
