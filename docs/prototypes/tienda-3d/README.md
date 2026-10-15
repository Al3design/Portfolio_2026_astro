# AleDesign Objects — propuesta de tienda 3D

Prototipo local para revisar el diseño antes de implementar el catalogo real. No es una tienda operativa ni una pagina publicada en al3design.dev. No cambia rutas, CMS ni datos profesionales del portfolio.

## Abrir

Desde la raiz del repo:

```sh
node docs/prototypes/tienda-3d/serve.mjs
```

Abrir http://127.0.0.1:4335. Si la vista ya esta activa, reutilizar ese servidor. Tambien se puede abrir index.html directamente: los recursos son locales, sin APIs, paquetes nuevos ni CDNs.

## Que se puede revisar

- Español/ingles y tema claro/oscuro; controles de lenguaje y categorias, ficha modal con cierre por Escape y propuesta de personalizacion.
- Categorias candidatas: Hogar y deco, Escritorio, Organizacion, Objetos de diseño.
- Seis conceptos: Jarron Sur, Modulo Mesa, Soporte Uno, Maceta Prisma, Nudo y Clip. Nombres y descripciones son ejemplos autorizados para diseño; no representan stock o derechos de produccion confirmados.
- Precios, medidas, condiciones de entrega y materiales reales siguen pendientes. Sin carrito funcional, cobros, mensajes enviados ni pedidos.
- Una estetica editorial de objetos fisicos, con mas protagonismo para las piezas, conservando Inter/Roboto Mono y los tokens verde/naranja/cyan y superficies calidas del portfolio. La interfaz de tienda no necesita imitar todo el lenguaje de terminal de las fichas profesionales.

Las imagenes llevan la leyenda Render conceptual y el prototipo avisa que es una exploracion. La pieza vegetal, el telefono, los accesorios y el cable de los renders son utileria conceptual; no definen lo incluido en una futura venta.

## Imagenes y fuentes

Asset final: assets/printed-objects-concepts.png, 1536x1024. Generado con la herramienta integrada image_gen (sin CLI ni API key). Prompt completo: image-prompt.txt.

Es una hoja de seis escenas; CSS muestra cada celda sin alterar los colores de la imagen. Los renders generados NO son fotografias de impresiones de Alejandro, prueba de fabricacion ni modelos 3D descargables. El catalogo final requiere sus piezas, fotos y licencias reales.

Inter y Roboto Mono proceden de las mismas dependencias del proyecto. Licencias incluidas en assets/Inter-LICENSE.txt y assets/RobotoMono-LICENSE.txt.

## Validacion

validation.json registra la comprobacion real en Chromium mediante Chrome MCP, sin turnos de modelo: 1280, 390 y 320 CSS px reales, dos idiomas y dos temas (12 combinaciones), filtros, atributos aria-pressed, ficha, Escape, carga de imagenes, foco y ausencia de overflow horizontal. Capturas revisadas: preview-1280.png y preview-390.png. No equivale a certificacion WCAG integral ni prueba de ecommerce.

## Pendiente de decision

La direccion visual, nombres, taxonomia y convivencia con el portfolio requieren revision de Alejandro. La ruta /tienda es candidata; no se crea un dominio separado. Antes de publicar, cargar datos reales, decidir localizacion de URLs, preparar traducciones revisadas y completar la decision comercial descrita en el OpenSpec contenido-real-y-tienda-3d. Payload sigue siendo una alternativa a evaluar.
