# R49 — Galería sin franjas y enlaces WhatsApp hollow

Pedido: corregir las franjas por encima y debajo de las fotografías y presentar las consultas de WhatsApp como botones huecos con icono.

Cambios locales en la rama actual, sobre `4d25139`:

- Galería de fichas y revisión: ancho al 100%, altura automática y proporción original de cada foto. Retirados el aspect-ratio CSS fijo, object-fit contain y fondo de relleno; figuras alineadas al inicio. Se conservan dimensiones HTML y variantes optimizadas de Astro, sin recortar piezas ni modificar archivos fotográficos.
- Componente compartido `ShopWhatsAppLink.astro`: enlace semántico con contorno, fondo transparente, icono WhatsApp de simple-icons ya instalado, nombre visible ES/EN, foco visible, mínimo táctil de 48px y adaptación de texto. Icono decorativo, sin duplicar el nombre accesible. Contorno disponible también en forced-colors.
- Aplicado a consulta por pieza, consulta general de colección, portada y revisión local. Mismo número, mensaje preparado, pestaña nueva y protecciones rel. No envío de mensajes.

Revisión de fuentes y diff. Sin suites, build, regeneración de esquema necesaria ni publicación. Modern-web-guidance: consulta responsive-design para conservar dimensiones intrínsecas y espacio de carga. No cambio en modelos, contenido de productos, filtros o datos Tina. Archivos ajenos preservados.

## Auditoría local

Una instancia de npm run dev iniciada al estar libres los puertos, sesión 59510. La primera navegación se adelantó al arranque y recibió connection refused; una vez Astro informó ready se recargó la misma pestaña. Ficha maceta-perro inspeccionada en navegador: las tres imágenes miden 596 × 335,25, proporción idéntica al original optimizado 720 × 405, sin franjas añadidas. Botón con SVG, fondo transparente, contorno inset de 1,5px y altura 48px. Enlace no activado. Captura dog-gallery-and-whatsapp.png en output/shop-r49. Sin suites ni build. Editor no modificado; tina-lock sin cambios. Preview y producción todavía no incluyen R49.


## Ajuste posterior — bloque de consulta después de las imágenes

Pedido adicional: mover todo el bloque de colores, precio, entrega, inclusión y consulta debajo de las imágenes. Plantilla pública ES/EN reordenada en el DOM: nombre y descripción, galería completa, paleta y condiciones con WhatsApp, detalles de la pieza. Revisión local alineada con paleta y consulta después de su galería; sus datos ya estaban debajo. Sin duplicar contenido ni cambiar enlaces. Diff leído; no nueva suite, build, captura o publicación.

