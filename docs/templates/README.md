# Plantillas editoriales

Leer primero [la guía editorial](../GUIA_EDITORIAL_IA.md). Estas plantillas son documentos de partida, no diseños visuales nuevos ni autorizaciones para publicar.

- `articulo-bilingue.mdx`: copiar a `src/content/projects/<slug>.mdx`, conservar draft y completar ambos idiomas. El formulario está en `tina/config.ts`, `tina/article-locales.ts` y `tina/article-blocks.ts`; los bloques públicos se renderizan con los componentes existentes indicados en la guía.
- `pieza-shop.json`: copiar a `src/editorial/shop-products/<slug>.json`, completar datos confirmados, ES/EN, fotos/alt y paleta. Formulario en `tina/shop-products.ts`; contrato en `src/lib/shop-editorial.ts`. Precio a consultar, entrega según stock y a confirmar, solo impresión incluida. No publicar medidas o tiempos de impresión por defecto.
- La selección Shop es un documento distinto: `src/editorial/shop-catalogue/catalogue.json`, formulario `tina/shop-catalogue.ts`. Sus filas usan `{ "product": "src/editorial/shop-products/<slug>.json" }`; novedades hasta tres y portada dentro de la selección. No agregar automáticamente todo borrador.

Si cambia un campo, actualizar conjuntamente plantilla, esquema Tina, contrato/validación, proyección localizada, renderer y consumidores aplicables (listas, metadatos, social, RSS y preview). La guía contiene el mapa detallado de variables, medios y rutas. No editar SDK/tipos generados a mano ni agregar atributos ficticios al JSON para documentarlos.

La apariencia del formulario no se configura en estas plantillas: usar [el sistema visual Tina](../TINA_ADMIN_THEME.md). El sitio público mantiene su plantilla compartida; el tema del CMS no debe entrar en el iframe.

## Altas Shop: orden y muestras de color

Shop: cada referencia nueva seleccionada explícitamente en products entra al principio; después manda el orden manual guardado en Tina (arrastrar, flechas o Pos., Save/Reset). Editar ficha/fotos o repetir una carga no mueve referencias existentes. No ordenar al renderizar por nombre, fechas de archivos ni invertir por CSS; no descubrir/publicar borradores automáticamente. Hero y latest se eligen aparte y no cambian por una alta.

Completar palette de cada alta con las muestras del PLA mostrado y etiquetas ES/EN antes de entregar Preview; palette: [] oculta los cuadrados. Usar HEX manual aproximado cuando no hay código de filamento confirmado, sin atribuir marca/preset por foto. Excluir decoración, fondo e iluminación; consultar colores ambiguos y registrar pendientes explícitos. El HEX de producto no modifica tokens del diseño.

Portada Shop: latest vacio activa las tres primeras referencias del catalogo products, en su orden guardado (altas nuevas primero por defecto). Una lista latest explicita prioriza esas piezas manualmente; vaciarla en Tina restaura el modo automatico. Hero sigue independiente. Al revisar altas/orden comprobar inicio y coleccion en ES/EN, incluidos los tres elementos visibles y el orden tras filtrar, no solo /tienda/coleccion/.
