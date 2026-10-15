# Proposal

## Why

El tema claro resulta visualmente intenso: superficies azules frias, acentos oscuros saturados y decoracion glass/grilla con intensidades compartidas con el tema oscuro. Ademas, body y algunos consumidores heredados usan otra familia de tokens que no responde al tema.

## What Changes

- Crear una paleta clara propia de piedra suave, verde salvia, naranja tierra y cyan apagado, preservando los roles de marca.
- Unificar texto/fondo semanticos con los tokens de tema; evitar inversion de imagenes, filtros y colores literales en componentes.
- Reducir SOLO en claro la intensidad de grilla, capas glass, grano y sombras mediante tokens de efectos.
- Verificar contraste WCAG 2.2 AA de texto, controles y foco sobre fondos reales; separar contraste funcional de decoracion.
- Mantener el modo oscuro, la tipografia, estructura y movimiento de las mascaras existentes.

### Out of Scope

Contenido editorial, comercio, cambio de CMS y despliegue automatico de este trabajo.

## Capabilities

### New Capabilities

- `accessible-color-themes`: paleta semantica independiente por tema, efectos y validacion de contraste.

### Modified Capabilities

Ninguna: primera especificacion de esta capacidad en el repo.

## Impact

`src/styles/base/_globals.scss`, `src/styles/abstracts/_tokens.scss`, `_mixins.scss` y consumidores de efectos como navegacion. Sin nuevas dependencias de produccion ni cambios de contenido. La conformidad de contraste no equivale a una auditoria WCAG completa del sitio.
