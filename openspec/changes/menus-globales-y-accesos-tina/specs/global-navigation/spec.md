## ADDED Requirements

### Requirement: Menús globales bilingües
Global Settings SHALL permitir editar listas de enlaces separadas para portfolio y Shop, con textos/URLs ES/EN y claves estables únicas. Los renderers desktop y móvil SHALL consumir la misma configuración por idioma. El footer SHALL conservar su documento compartido y contenido existente.

#### Scenario: Editar y ordenar enlaces
- **WHEN** se modifica el menú configurado y se genera el sitio
- **THEN** se mantiene el orden de la lista y se usan los textos/enlaces del idioma correspondiente

#### Scenario: Datos inválidos
- **WHEN** faltan textos, se duplican claves o se introduce una URL ejecutable
- **THEN** el formulario y la proyección rechazan la configuración sin renderizar ese enlace

### Requirement: Acceso y anchura del administrador
El acceso de orden SHALL abrir el inventario completo sin exigir crear referencias manuales. Las colecciones Store 3D SHALL ser consecutivas. El dashboard SHALL adaptarse al espacio sin comprimir el ancho elegido de la navegación general.

#### Scenario: Overview estrecho
- **WHEN** el dashboard dispone de menos ancho
- **THEN** sus columnas se apilan y el sidebar conserva su anchura sin perder el cierre nativo
