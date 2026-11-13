# R30 — Hex editable y catálogo PLA Lite

## Hallazgo de fuentes

Investigación solicitada por Alejandro, 30/10/2026. Fuente primaria: [JSON oficial Bambu Studio](https://github.com/bambulab/BambuStudio/blob/804d93bb5de142c48c0dabedba87736ea9553206/resources/profiles/BBL/filament/filaments_color_codes.json). El archivo contiene trece registros PLA Lite, familia GFA18, nombres, códigos y RGB con alfa FF. Se importan únicamente esos registros a `src/data/bambu-pla-lite.json`, conservando commit y fecha. El alfa opaco se retira para obtener #RRGGBB; nombres ES faltantes se traducen localmente, sin presentarlos como traducciones oficiales.

No se encontró API pública documentada de catálogo de colores de MakerWorld en la búsqueda realizada. Esto no prueba que no existan endpoints internos. No se inspeccionan ni usan APIs privadas, cuentas o impresoras. [La explicación oficial de MakerWorld](https://blog.bambulab.com/makerworld-one-step-printing/), publicada en 2023, describe perfiles 3MF que incluyen coloreado y selección de materiales/presets; no documenta una API pública reutilizable ni demuestra la implementación actual de su selector.

No se usan tablas Basic/Matte como sustituto de PLA Lite ni datos de terceros como fuente del preset. La librería aquí es una instantánea local de referencias del fabricante, sin SDK instalado, consulta durante navegación o dependencia de sesión Bambu.

## Implementación

- `scripts/sync-bambu-pla-lite.mjs`: importación editorial explícita desde el repo oficial, fijando el commit antes de descargar datos. Rechaza catálogo vacío, códigos duplicados y tonos no opacos/no soportados antes de escribir. Una ejecución de importación realizada: trece colores, commit `804d93bb5de142c48c0dabedba87736ea9553206`. No es un test ni se conecta al build; no se programan actualizaciones automáticas.
- Tina reemplaza la lista de identificadores fijos por objetos `palette`: referencia PLA Lite opcional, hexadecimal manual y nombres ES/EN. Un manual válido tiene prioridad; dejarlo vacío usa el preset. El editor pide #RRGGBB y el renderer solo acepta ese formato para CSS. Los nombres manuales también tienen prioridad sobre los del preset.
- Para usar el nombre/hex del preset en una fila existente, vaciar sus overrides manuales. Se explica en el formulario y guía; no hay autocompletado que reescriba campos al elegir una opción.
- Se migran las ocho paletas a nombres/hex editables conservando los tonos aproximados anteriores. Ninguna foto se identifica automáticamente con un SKU o filamento Bambu; Alejandro indicó uso habitual de PLA Lite, no el código utilizado en cada pieza. Baseline de identificadores en `output/shop-r30/previous-palettes.json`.
- Cuadrados compactos en colección, sin texto extra visible; nombres en etiquetas accesibles y tooltip con nombre/hex. La ficha mantiene nombres visibles y explica que la referencia de pantalla puede diferir del acabado. Las muestras no seleccionan ni reservan stock.
- Control e2e preparado para ocho listas compactas en lugar de ausencia de paletas; sin ejecutarlo. Se actualiza OpenSpec por la nueva preferencia posterior a R29.

## Revisión y límites

Se reinició únicamente la instancia propia 18947 para cargar el esquema/editor y nuevos estilos, comprobando ausencia de los procesos propios antes del nuevo `npm run dev` (sesión 83583). Tina indexó y Astro anunció disponibilidad. No se ejecutaron builds, tipos, lint ni suites.

La captura `output/shop-r30/01-colores-compactos.jpg` se guardó e inspeccionó: mantiene el listado mínimo R29 con pequeños cuadrados debajo de la categoría, sin recuperar descripciones largas ni paneles.

Formulario Tina del árbol abierto en modo local, lista de seis colores migrados visible; se abrió la fila Verde sin alterar datos. El DOM mostró selector con trece referencias PLA Lite (código/nombre/hex), hexadecimal manual #39834b y nombres Verde/Green. Captura inspeccionada `output/shop-r30/02-editor-hex-y-pla-lite.jpg`. El esquema generado contiene palette object/list con preset, hex, es, en. No se cambiaron valores ni se usó Save/Reset. Guardado/persistencia y validación interactiva de errores pendientes; no se atribuyen a un mero render. El número de referencias y valores de fabricante se verificó leyendo la fuente y el selector, no enviando datos a Bambu.

Sin publicación, staging, commit, mensajes WhatsApp ni conexión a cuenta/impresora Bambu. Los datos de material siguen PLA; no se cambian todos a PLA Lite por inferencia. Continúan pendientes código de filamento realmente usado por pieza, revisión del titular, CRUD Tina, apertura WhatsApp y exclusión en artefacto.
