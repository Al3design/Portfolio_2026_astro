# Plantillas editoriales

Leer primero [la guía editorial](../GUIA_EDITORIAL_IA.md). Estas plantillas son documentos de partida, no diseños visuales nuevos ni autorizaciones para publicar.

- `articulo-bilingue.mdx`: copiar a `src/content/projects/<slug>.mdx`, conservar draft y completar ambos idiomas. El formulario está en `tina/config.ts`, `tina/article-locales.ts` y `tina/article-blocks.ts`; los bloques públicos se renderizan con los componentes existentes indicados en la guía.
- `pieza-shop.json`: copiar a `src/editorial/shop-products/<slug>.json`, completar datos confirmados, ES/EN, fotos/alt y paleta. Formulario en `tina/shop-products.ts`; contrato en `src/lib/shop-editorial.ts`. Precio a consultar, entrega según stock y a confirmar, solo impresión incluida. No publicar medidas o tiempos de impresión por defecto.
- La selección Shop es un documento distinto: `src/editorial/shop-catalogue/catalogue.json`, formulario `tina/shop-catalogue.ts`. Sus filas usan `{ "product": "src/editorial/shop-products/<slug>.json" }`; novedades hasta tres y portada dentro de la selección. No agregar automáticamente todo borrador.

Si cambia un campo, actualizar conjuntamente plantilla, esquema Tina, contrato/validación, proyección localizada, renderer y consumidores aplicables (listas, metadatos, social, RSS y preview). La guía contiene el mapa detallado de variables, medios y rutas. No editar SDK/tipos generados a mano ni agregar atributos ficticios al JSON para documentarlos.

La apariencia del formulario no se configura en estas plantillas: usar [el sistema visual Tina](../TINA_ADMIN_THEME.md). El sitio público mantiene su plantilla compartida; el tema del CMS no debe entrar en el iframe.
