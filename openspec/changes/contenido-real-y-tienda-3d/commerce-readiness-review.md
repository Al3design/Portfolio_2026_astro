# Revision de preparacion: SEO, accesibilidad y comercio

Fecha: 2026-10-15. Auditoria de produccion y fuentes actuales; propuesta de arquitectura, no aprobacion de migracion o de tienda operativa.

## Sitio publicado

Revisados https://al3design.dev/, /tienda y /en/shop-3d mediante navegador y HTML servido.

- OpenGraph y Twitter Card presentes, con titulo/descripcion y locale por idioma en tienda. og:url apunta al dominio correcto.
- og:image/twitter:image usan /banner-background.png relativo. El recurso es un fondo generico de 1280x206: falta una imagen social especifica, URL absoluta y texto alternativo apropiado.
- Sin canonical ni enlaces alternate/hreflang. /robots.txt, /sitemap.xml y /sitemap-index.xml responden 404. No tener robots.txt no bloquea por si solo la indexacion.
- Las dos vistas de tienda llevan noindex,nofollow intencionalmente: son conceptos, no catalogo comercial. Mantener esa decision mientras el contenido sea ficticio. El portfolio no tiene ese noindex.
- No hay JSON-LD. Se puede preparar identidad del sitio; no generar Product/Offer con precios, stock o reseñas inventados.
- axe-core 4.10.3, etiquetas WCAG A/AA incluidas 2.1/2.2: 26 comprobaciones aprobadas y cero infracciones detectadas en tienda ES, claro y oscuro estables. El dialogo de producto tampoco arrojo infracciones. Esto no acredita conformidad completa.
- Reproduccion manual de teclado a 390px: abrir menu, Tab recorre logo, tres enlaces y tema; el siguiente Tab alcanza Explorar piezas del contenido de fondo, con el menu aun abierto. Falta contener el foco y hacer inerte el fondo o usar un dialogo modal nativo. Evidencia local ignorada: .e2e/shop-keyboard-audit.json.
- Falta enlace de salto al contenido. Contraste y foco existentes no sustituyen esa revision de navegacion.

Prioridad de saneamiento: menu movil/teclado; canonical/idiomas/robots/sitemap excluyendo tienda conceptual; OpenGraph especifico. Revisar nuevamente las mismas superficies despues de corregirlas.

## Starter de Alejandro

Preview suministrado redirige a autenticacion de Vercel. No se deshabilito la proteccion ni se hizo una auditoria de su UI/admin en ejecucion. Se leyeron fuentes del repositorio autorizado https://github.com/alejandropd-1/payload-website-starter, rama main, mediante GitHub.

- package.json: Payload 3.84.1, Next 16.3.3; website template, no ecommerce template.
- src/payload.config.ts: Pages, Posts, Media, Categories, Users; Header/Footer; adaptador Vercel Postgres y almacenamiento Vercel Blob configurados. Esto no demuestra por si solo aprovisionamiento, backups o restauracion en produccion.
- src/plugins/index.ts: SEO, formularios sin pago, redirects, busqueda y documentos anidados. Titulo SEO por defecto aun dice Payload Website Template.
- No se encontro plugin-ecommerce en dependencias ni colecciones de productos, carrito, pedidos o pagos en la configuracion revisada. El arbol contiene migraciones y sitemap del template.

## Alcance real de Payload ecommerce

La documentacion actual ofrece productos/variantes, carrito, pedidos/transacciones, direcciones y patron de adaptadores de pagos. El adaptador oficial documentado es Stripe; Mercado Pago requiere integracion especifica, no esta incluido en este starter. Envios e impuestos no estan resueltos nativamente. El template ecommerce oficial sigue identificado como BETA: fijar versiones compatibles y validar actualizaciones antes de usarlo para cobrar.

Propuesta a evaluar: conservar el portfolio Astro y su contenido; desarrollar tienda y backend comercial en el proyecto Next/Payload, conservando tokens, identidad y navegacion. Decidir ruta/subdominio antes de implementarlo. Payload seria la fuente unica de productos/pedidos; no editar esos mismos datos en Tina. No migrar todo el portfolio como requisito previo para validar el comercio.

Presupuesto pendiente: base de datos, medios, hosting/funciones, correo transaccional, backups, observabilidad, comisiones y operacion logistica. Tener un deployment Ready o un plugin SEO instalado no valida esos circuitos.

## Envios Argentina

No hay una API nacional unica obligatoria: se puede integrar cada transportista o un agregador.

- OCA e-Pak: cotizacion, sucursales, creacion y etiquetas; ciertos metodos requieren cuenta e-Pak y datos de operativa.
- Correo Argentino PAQ.AR: API de integracion; la FAQ exige credenciales gestionadas con ejecutivo comercial. No asumir acceso anonimo.
- Andreani: portal de desarrolladores y entorno sandbox; documentacion no accesible completamente en esta auditoria. Falta validar alta, contrato y credenciales aplicables.
- Enviopack: API para cotizar a domicilio/sucursal y consultar correos. Confirmar operadores habilitados para la cuenta, tarifas, condiciones y volumen; no presumir que cualquier cuenta tiene todos los servicios.

Flujo candidato: carrito validado en servidor, codigo postal, paquetes con peso/medidas reales, cotizacion y vencimiento, eleccion de entrega, total completo, pago y confirmacion por webhook verificado. Luego generar envio/etiqueta y seguimiento sin duplicarlos al reintentar. Separar dias de produccion de la pieza del tiempo de transporte; no despachar un render ni crear inventario con datos dummy.

## Fuentes oficiales consultadas

- https://payloadcms.com/docs/ecommerce/overview
- https://payloadcms.com/docs/ecommerce/payments
- https://github.com/payloadcms/payload/blob/main/templates/ecommerce/README.md
- https://github.com/payloadcms/payload/blob/main/templates/website/README.md
- https://developers.oca.com.ar/epak.html
- https://www.correoargentino.com.ar/MiCorreo/public/faqs
- https://developers-sandbox.andreani.com/
- https://developers.enviopack.com.ar/cotiza-un-envio
- https://developers.enviopack.com.ar/correos
- https://www.mercadopago.com.ar/developers/es/docs/checkout-pro-orders/notifications

No se modifico la app ni se activo comercio en esta revision. El OpenSpec conserva sus pendientes; esta propuesta no reemplaza la decision de arquitectura ni las pruebas de sandbox.
