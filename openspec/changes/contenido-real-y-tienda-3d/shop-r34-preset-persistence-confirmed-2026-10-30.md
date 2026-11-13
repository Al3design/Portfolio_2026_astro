# R34 — Preset guardado y visible en listado/detalle

## Autorización

Alejandro respondió «Sí, comprobar y restaurar» a una única excepción interactiva: guardar/reabrir preset 10501 del primer color del árbol con hex vacío; observar listado/detalle y validación inválida sin guardar; restaurar. Se reutilizó el servidor existente en localhost:4322. Sin suites, builds, tipos, lint, reinicios, publicación ni mensajes. La excepción queda consumida.

## Evidencia

- Baseline vigente antes de editar: output/shop-r34/arbol-baseline.json. Primer color `{hex:"#39834b",es:"Verde",en:"Green"}`, sin preset.
- Desde Tina se seleccionó 10501, PLA Basic Verde bambú, y se vació el hex. Save y recarga completa del editor; al reabrir Verde, el DOM mostraba selector 10501, hex vacío y nombres Verde/Green conservados.
- Colección /tienda?catalog=real: enlace «Ver pieza: Árbol decorativo», primer li con título Verde · #00AE42 y backgroundColor computado rgb(0, 174, 66). Permanecen los otros cinco colores.
- Apertura del detalle mediante ese enlace: primer color Verde · #00AE42 y mismo rgb(0, 174, 66). El fallback faltante de R32 ya no se reproduce en este recorrido con R33.
- En Tina se introdujo #GGGGGG y se salió del campo con Tab: apareció «Usá # seguido de seis caracteres hexadecimales, por ejemplo #00BB31.». No se intentó guardar el valor inválido. Save seguía habilitado: se acredita mensaje de validación, **no bloqueo de envío/persistencia inválida**.

## Restauración y límites

Desde Tina se repusieron #39834b y selector vacío, conservando Verde/Green. Se guardó y se retiró exclusivamente la propiedad temporal `preset:""` que serializa Tina. La comparación completa de JSON con node:util isDeepStrictEqual confirmó igualdad semántica con el baseline vigente. La ficha recargada mostró Verde · #39834B, rgb(57, 131, 75), y otros cinco colores. Ningún preset de prueba quedó atribuido a una pieza.

Capturas: output/shop-r34/01-preset-list.jpg, 02-preset-detail.jpg, 03-validation.jpg y 04-restored.jpg. La última fue inspeccionada y muestra el estado restaurado con encabezado/tema claro y paleta.

Control acotado ES del primer color, no prueba de todos los presets, acabados, idiomas, alta editorial, checkout ni publicación. La prioridad manual ya tenía evidencia R32 y no se repitió. No establece retrospectivamente la causa interna exacta del fallo original. El OpenSpec global y su cierre final permanecen abiertos; última suite ejecutada sigue siendo R24.
