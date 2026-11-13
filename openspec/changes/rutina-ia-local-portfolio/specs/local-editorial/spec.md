# Local Editorial Workflow

## ADDED Requirements

### Requirement: Existing content contracts

The workflow MUST usar documentos, idiomas, medios, selección y plantillas existentes del portfolio, preservando diseño, URLs y trabajo ajeno.

#### Scenario: Cambio de imagen

- **WHEN** se pide reemplazar una imagen de una pieza identificada
- **THEN** la IA SHALL modificar solo recurso/campos/usos necesarios, sin inventariar todo el sitio ni rediseñar.

### Requirement: Human Preview gate

The workflow MUST entregar Preview real identificado y terminar el turno en ESPERANDO_OK_PREVIEW antes de producción.

#### Scenario: Pedido inicial de publicación

- **WHEN** el pedido inicial incluye publicar
- **THEN** la IA SHALL esperar el OK posterior de Alejandro para el snapshot revisado antes de push/merge productivo o guardado Cloud/main.

### Requirement: Scoped mechanics and honest evidence

The tools MUST preparar candidato selectivo fuera del checkout y rechazar cambios posteriores al snapshot, sin ejecutar suites/publicar por su cuenta.

#### Scenario: Candidato alterado

- **WHEN** cambia, aparece o desaparece un archivo del candidato sellado
- **THEN** la comprobación SHALL fallar y no heredar una aprobación previa.

#### Scenario: Hosting no disponible

- **WHEN** no se puede verificar acceso/configuración del proyecto
- **THEN** la IA SHALL reportar bloqueo sin inventar URL, Ready, SHA ni evidencia de producción.
