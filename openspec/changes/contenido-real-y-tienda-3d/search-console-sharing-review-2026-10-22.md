# Search Console y enlaces compartidos — 2026-10-22

## Alcance y estado

Alejandro autorizo avanzar con Search Console (comprobar propiedad, enviar sitemap, leer indexacion) y revisar portadas/titulos/descripciones de enlaces compartidos. Sin cambios de producto, build, suites o publicacion durante esta revision.

## Search Console

Navegador Chrome, cuenta Google actual de Alejandro. https://search.google.com/search-console redirige a /welcome, sin propiedad accesible ofrecida. El boton Anadir sitio web abre el selector Dominio / Prefijo de URL. No se ingreso ni envio el dominio, no se creo propiedad ni se modifico DNS.

DNS publico de al3design.dev: aria.ns.cloudflare.com y nolan.ns.cloudflare.com; Cloudflare es autoritativo, no Vercel. Para una propiedad de dominio se necesita TXT de verificacion en Cloudflare y confirmar propiedad en Google. Esto acreditaria a la cuenta actual como propietaria; pendiente autorizacion expresa para crear/verificar propiedad y publicar ese TXT. No hay datos de indexacion disponibles antes de esa configuracion y no se afirma que Google no haya indexado el sitio.

## Revision publica de enlaces

Lectura HTTP de las 40 URLs de sitemap.xml, en tandas de cuatro. Inventario: output/shared-links-review-2026-10-22.json.

- 40 respuestas 200; titulo, descripcion, canonical, OG title/description/image/alt y Twitter card/image presentes.
- Canonical coincide con la URL del sitemap. Imagen OG y Twitter coinciden. Ninguna URL del sitemap devuelve noindex.
- 19 imagenes sociales distintas, todas responden 200 con Content-Type de imagen. Geometria obtenida de los archivos publicos locales cuando existen; no se inventan dimensiones de imagenes alojadas en Around o YouTube.
- Banner general /banner-background.png: 1280x206. Proporcion muy baja para tarjeta social grande; candidata a portada dedicada para inicio, About, Resume y Archive.
- CV personal: portada 1600x3598; Paris: 1200x2820. Capturas verticales que pueden quedar recortadas en tarjetas sociales horizontales. Conviene preparar derivados para compartir conservando los originales dentro del articulo.
- Resto de portadas con proporciones diversas y recursos accesibles; no se simulo la cache de LinkedIn/WhatsApp/X ni se afirmo que una plataforma muestre ya la version nueva.

No se alteraron las portadas ni los textos. No hay nueva publicacion ni se tocaron los tres borradores. Sitemap publico sigue con 40 URLs. Pendiente definir y aprobar tratamiento de las tres portadas señaladas; indexacion no equivale a sitemap enviado.

Referencias: https://support.google.com/webmasters/answer/34592?hl=es y https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap.

## Propiedad verificada y sitemap enviado

Alejandro autorizo crear/verificar propiedad y TXT, y luego informo que ya habia completado personalmente la verificacion. Se recargo Search Console: propiedad de dominio `sc-domain:al3design.dev` disponible en su cuenta Google. El agente NO creo ni modifico registros DNS.

Se envio una sola vez `https://al3design.dev/sitemap.xml`. Google confirmo envio correcto. La tabla mostro inicialmente "No se ha podido obtener" y cero paginas; al abrir el detalle del mismo envio ya figuraban ultima lectura 22/10/26, 40 paginas descubiertas, cero videos y "El sitemap se ha procesado correctamente". No se elimino ni reenvio el sitemap.

Descripcion general: informes de rendimiento, indexacion, experiencia y mejoras en procesamiento; Google indica volver a consultar manana. No se interpreta como cero paginas indexadas ni como indexacion de las 40. No se solicito indexacion individual ni se programaron recordatorios.

Comprobante local: output/search-console-sitemap-2026-10-22.png. La pestaña de detalle queda disponible como resultado. Pendientes de la revision de enlaces: considerar portadas sociales dedicadas para banner general, CV personal y Paris; no se modificaron imagenes ni producto en este paso.
