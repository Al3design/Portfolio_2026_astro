# R31 — PLA y PETG del catálogo Bambu

## Pedido y fuentes

Alejandro pide ampliar R30 con PLA Basic, especiales, PETG HF y común. Confirma que «especiales» incluye Silk/Silk+, Matte, Sparkle, Metal y otras líneas, e identifica su proveedor habitual: [3D Insumos](https://3dinsumos.com.ar/Producto/Categoria/Filamentos%20Bambu%20Lab).

Lectura de categoría y subcategorías públicas: 3D Insumos usa «PLA Especiales», donde aparecen Silk, Translucent, Dynamic y Aero, entre otros; la categoría PETG también está presente. No se recorrió todo su catálogo ni se sincronizan precios, stock o productos del vendedor. No se asume correspondencia entre sus SKU y todos los códigos del fabricante. Se registra la preferencia de compra de Alejandro, sin colocar enlaces comerciales del proveedor en la ficha pública.

Fuente de colores: [Bambu Studio oficial, revisión fijada](https://github.com/bambulab/BambuStudio/blob/804d93bb5de142c48c0dabedba87736ea9553206/resources/profiles/BBL/filament/filaments_color_codes.json). Una importación editorial explícita realizada con `node scripts/sync-bambu-filaments.mjs`: **209 referencias en 20 familias**. PLA Basic 38; PLA Lite 13; PETG Basic 17; PETG HF 14. También PLA Matte, Silk, Silk+, Sparkle, Galaxy, Glow, Marble, Metal, Wood, Translucent, Dynamic, Aero, Pure, Tough, Tough+ y PLA-CF. Son referencias del archivo, no disponibilidad comercial actual ni stock del estudio.

## Cambio

- Catálogo ampliado en `src/data/bambu-filaments.json`: nombre, familia, código, identificador de material, todos los tonos, fuente/commit/fecha y conteos por familia. Se prefiere el nombre ES oficial; si falta, traducción local o nombre EN.
- Importador manual generalizado; el comando R30 `sync-bambu-pla-lite.mjs` queda como entrada compatible que importa el mismo catálogo ampliado. Se retira el JSON exclusivo Lite de esta implementación para evitar dos fuentes activas. No hay fetch al navegar ni en build.
- Presets de Tina muestran familia + color + código + valores. Los trece códigos Lite anteriores siguen válidos y el hexadecimal/nombre manual mantiene prioridad. No se modifican paletas ni materiales de las ocho piezas en esta tanda.
- La fuente contiene referencias multicolor y PLA Translucent con alfa 80. Se conservan todos los RGB/RGBA, retirando únicamente alfa FF opaco. El renderer valida los tonos y usa una muestra compuesta para multicolor, con primer tono como fallback. La muestra no simula acabado físico ni cambia textura/foto.
- Valores manuales siguen limitados a #RRGGBB. Seleccionar un preset PETG no transforma automáticamente los datos de material PLA de una ficha.
- OpenSpec/guía/tareas actualizados. Sin nuevas dependencias ni API privada Bambu/MakerWorld, sesión de cuenta, AMS o impresora.

## Evidencia y límites

Importación terminada con 209/20 y revisión de fuente registrada. Lectura de implementación. Servidor propio R30 reutilizado; Tina reindexó tras el cambio. No se ejecutaron suites, build, tipos, lint ni e2e.

Formulario del árbol abierto en Tina y fila Verde inspeccionada sin alterar datos. El DOM del selector contiene 209 opciones no vacías y las veinte familias importadas, con nombre/código/tonos en cada opción. El campo manual conserva #39834b y nombres Verde/Green. Captura `output/shop-r31/01-selector-pla-petg.jpg` guardada e inspeccionada: muestra formulario ampliado, no el popup nativo completo de opciones. Selector abierto y cerrado con Escape sin elegir ni guardar. Guardado/persistencia, validación interactiva y representación de cada acabado siguen sin probar; no se asignó un preset de ejemplo a una pieza real para fabricar evidencia.

Sin publicación, staging, commit ni mensajes. Los pendientes de operación editorial, WhatsApp externo, aprobación y exclusión de artefacto siguen abiertos. Preferencias anteriores y cambios locales ajenos preservados.
