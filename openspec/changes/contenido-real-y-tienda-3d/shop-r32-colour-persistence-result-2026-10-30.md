# R32 — Persistencia de paleta: control detenido y datos restaurados

## Autorización y alcance

Alejandro respondió «Sí, comprobar y restaurar» a la excepción interactiva preparada en shop-r32-colour-persistence-preparation-2026-10-30.md. Se reutilizó npm run dev, sesión 83583, Tina y Astro en localhost:4322. Solo se modificó temporalmente el primer color Verde de arbol-decorativo.json. Sin suite, build, tipos, lint, publicación ni mensajes.

## Resultado observado

1. En Tina se eligió PLA Basic Verde bambú, código 10501, y hexadecimal manual #123ABC. Save persistió `{preset:"10501",hex:"#123ABC",es:"Verde",en:"Green"}`. Tras recargar y reabrir el color, el selector conservaba 10501 y los tres campos conservaban sus valores. La ficha mostraba Verde · #123ABC, con color computado rgb(18, 58, 188). Prioridad manual comprobada en detalle; listado no comprobado en este recorrido.
2. Se vació únicamente el hexadecimal y se guardó. El JSON conservó `{preset:"10501",hex:"",es:"Verde",en:"Green"}`. Tras reabrir Tina, el selector seguía en 10501 y el hexadecimal vacío. Al recargar la ficha desapareció el primer color: el primer swatch visible pasó a Verde oscuro · #175447, rgb(23, 84, 71), en vez del esperado Verde · #00AE42. **Fallo de fallback del preset en la vista; control detenido.** No se investigó ni corrigió el producto para reintentar.
3. La prueba de hexadecimal inválido quedó sin ejecutar por la condición de parada. Tampoco se completaron controles del listado ni otros presets/acabados. Este resultado no acredita cierre editorial.

## Restauración

Baseline vigente tomado antes de editar: output/shop-r32/arbol-baseline-execution.json, SHA256 51A3ABA88E160A19C13C1AEF35771D776220C49E81F26BEDC7473F1CC5FE472C.

Desde Tina se repusieron hexadecimal #39834b, nombres Verde/Green y selector vacío. Tina serializó `preset:""`; se eliminó exclusivamente esa propiedad temporal mediante patch, respetando el resto del archivo vigente. La comparación de objetos JSON con node:util isDeepStrictEqual confirmó igualdad semántica de la ficha completa con el baseline. Tina reordenó la propiedad palette al guardar; no hay diferencia de datos. No se volcó una copia antigua sobre el archivo.

La ficha recargada volvió a mostrar Verde · #39834B, rgb(57, 131, 75), junto a los otros cinco colores. No quedó asignado un filamento de prueba a la pieza real.

## Evidencia y continuidad

- output/shop-r32/01-manual-priority.jpg: override temporal, #123ABC.
- output/shop-r32/02-preset-fallback.jpg: captura del **fallo**, no de aceptación; el primer color falta.
- output/shop-r32/03-restored.jpg: estado restaurado, inspeccionado.
- Próximo trabajo: diagnosticar/corregir la resolución del preset guardado en el recorrido real, auditando el diff. Luego requerirá control acotado nuevo conforme a AGENTS.md; la excepción R32 ya fue consumida. La validación inválida sigue pendiente.
- La última suite ejecutada sigue siendo R24 (4/4), previa a los cambios de paletas y referencias; no cubre R32. No se cierra ni archiva el OpenSpec.
