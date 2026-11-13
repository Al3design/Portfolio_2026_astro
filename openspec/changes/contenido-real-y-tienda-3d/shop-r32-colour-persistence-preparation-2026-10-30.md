# R32 — Preparación de control editorial acotado

## Estado

Preparado, no ejecutado. Alejandro pide continuar tras R31. La próxima evidencia pendiente es guardado/reapertura de los campos de paleta, no repetir la suite del catálogo.

AGENTS.md exige control expreso o excepción nombrada para una comprobación interactiva fuera del cierre final. Las excepciones R16 y comandos e2e anteriores ya se consumieron y no habilitan este recorrido nuevo.

## Alcance propuesto de una única excepción

- Ficha existente: `src/editorial/shop-products/arbol-decorativo.json`, solo primer color Verde. Sin crear productos, modificar otros campos, usar WhatsApp ni publicar.
- Copia de preparación: `output/shop-r32/arbol-before-preparation.json`. Antes de cualquier mutación se relee la ficha y se toma baseline vigente para preservar cambios posteriores de otros actores.
- Desde Tina, usar temporalmente hexadecimal #123ABC y referencia PLA Basic Verde bambú, código 10501 (#00AE42). Guardar/reabrir y comprobar que el hexadecimal manual manda sobre el preset en listado/detalle.
- Dejar manual vacío, guardar/reabrir y comprobar fallback al RGB del preset. Sin atribuir el filamento de prueba a la pieza real al finalizar.
- Introducir un hexadecimal inválido solo en formulario para observar el error; no persistirlo ni aflojar validación. Reponer un valor válido.
- Restaurar el primer color a su baseline vigente, incluidos nombres y ausencia/presencia del preset. Verificar datos y vista restaurados; no restaurar un archivo entero antiguo sobre otros cambios.
- Usar servidor existente y un solo recorrido, con capturas de evidencia del orquestador. Ante fallo, registrar y detener comprobaciones; ejecutar únicamente la restauración necesaria, sin corregir producto para reintentar.

## Límites

Sin build, tipos, lint, suite ni otro comando de control. No acredita alta Tina, prueba de las 209 referencias/acabados, destinatario de WhatsApp, aprobación comercial ni artefacto de producción. Requiere respuesta expresa a la excepción antes de la parte que modifica datos para comprobar persistencia.
