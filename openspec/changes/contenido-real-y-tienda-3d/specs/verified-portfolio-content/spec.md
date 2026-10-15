## ADDED Requirements

### Requirement: Bilingual editorial consistency

El sitio actualizado SHALL ofrecer contenido en español e ingles basado en los mismos hechos aprobados.

#### Scenario: A visitor changes language

- **WHEN** cambia entre español e ingles en una pagina actualizada
- **THEN** identidad, rol, fechas, contacto y condiciones comerciales mantienen el mismo significado
- **AND** titulos, controles, metadata y exportaciones se revisan junto con el contenido principal

### Requirement: Verified professional claims

El sitio SHALL publicar biografia, experiencia, proyectos, metricas y contacto respaldados por informacion confirmada por Alejandro.

#### Scenario: A claim lacks supporting information

- **WHEN** un dato actual resulta dummy o no esta confirmado
- **THEN** se registra como pendiente interno y no se sustituye por un hecho inventado
- **AND** se omite o reemplaza por contenido aprobado antes de publicar la pagina revisada

### Requirement: Consistent editorial outputs

El sitio SHALL conservar coherencia entre paginas, metadata, contacto y documentos/exportaciones derivados de los datos aprobados.

#### Scenario: A confirmed contact or professional description changes

- **WHEN** se publica una actualizacion aprobada
- **THEN** pagina, metadata y exportaciones afectadas reflejan esa fuente sin recuperar placeholders mediante fallbacks
