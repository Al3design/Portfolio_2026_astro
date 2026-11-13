## Requirement: Persistent editorial branch

Content and media tasks SHALL reuse editorial, with one pending batch at a time. The branch MUST remain indexed and MUST NOT be deleted after integration. Only the approved Preview revision SHALL enter main. Technical work SHALL use separate task branches.

### Scenario: Next content intake
- **WHEN** el lote anterior está integrado y no quedan cambios pendientes
- **THEN** la IA SHALL sincronizar editorial desde main sin reset/force-push y usar su Preview/admin para la nueva carga.

### Scenario: Concurrent pending work
- **WHEN** existen cambios Cloud/locales no aprobados o divergencia
- **THEN** la IA MUST coordinar y preservarlos, sin mezclar lotes ni publicar para limpiar.
