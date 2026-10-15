# Design

## Context

Fecha: 2026-10-15. Stack actual: Astro estatico + React + TinaCMS, contenido MDX/Git y despliegue en Vercel. Alejandro eligio expresamente **portfolio + tienda 3D**, español e ingles y Argentina como pais de venta/envio. Se parte de piezas fisicas impresas por el; cobertura por destino, productos y operacion siguen pendientes. Confirmar Argentina no implica tener cotizacion o transportista contratado.

Seleccion inicial de proyectos confirmada por Alejandro: GitCron, OdontoPro, UseOdontoPro, OdontoPau y este portfolio. LinkedIn y tres PDF ya relevados; fuentes, discrepancias y borrador ES/EN en source-review.md. Alejandro confirma puesto actual de administrador de Moodle en TED INTI y Diseño Multimedial en Da Vinci entre 2007 y 2018. No se inventan funciones, fechas o resultados a partir de los nombres de proyectos.

Hallazgos a validar con el titular: `home.mdx` declara mas de 15 anos, ubicacion remote y zona EST; `about.mdx` contiene manifiesto y filosofias genericas; `resume.mdx` contiene `[EMAIL_ADDRESS]` y porcentajes de habilidad; componentes incluyen fallbacks como `hello@aledesign.com`. No se presume falso todo proyecto ni verdadero todo dato heredado. El estado corregido available_for_hire no prueba la exactitud del resto.

## Goals / Non-Goals

Publicar hechos verificables y mostrar productos reales sin perder el portfolio. Comprar piezas fisicas debe quedar claramente separado de contratar servicios y de descargar un archivo. No prometer que un CMS constituye una tienda completa ni migrar por marketing.

## Decisions

### Editorial foundation

Inventariar home, about, resume, archive, cada proyecto, footer, SEO/OpenGraph, RSS, texto alternativo, contacto y exportaciones Markdown/CV. Para cada afirmacion registrar fuente, estado, borrador y aprobacion. Los datos faltantes se omiten o quedan como pendientes internos: nunca se completan con biografia, metricas, testimonios, clientes o porcentajes inventados. Preparar textos con Alejandro antes de reemplazar contenido. Confirmar idioma principal y tratamiento del ingles existente.

### Product and information architecture

Separar el portfolio del nuevo `/tienda` y `/en/shop-3d`. Alejandro solicita entrada SHOP 3D en el menu del portfolio y menu contextual en la tienda. La ficha comercial futura explica que se compra un objeto fisico y si esta en stock o se produce a pedido. Portfolio no se convierte en inventario ni se reutiliza un proyecto como producto vendible.

La referencia de ancho es el boceto: 1280px de contenido util como maximo, con margenes responsive de 20/32/48px, compartidos por portfolio, tienda y footer. Se conserva el token container(max), corrigiendo el padding que antes reducia su ancho util a 1184px. Encabezado de tienda abierto como la referencia; portfolio conserva su barra flotante. Marca, acciones y contenido del footer provienen de los mismos componentes/datos; el menu cambia por seccion. La tienda no renderiza la grilla animada y usa tema claro por defecto, con preferencia shop-theme independiente del portfolio. Idiomas ES/EN y paleta semantica compartida, sin invertir imagenes.

Datos a confirmar por producto: nombre, descripcion de uso, autoria/licencia comercial del modelo, fotos de impresion real frente a render identificado, material, medidas, peso del objeto, variantes y SKU, acabado y cuidado, precio/moneda, stock o capacidad de produccion, plazo antes del despacho y opciones de personalizacion. Peso y dimensiones del paquete son distintos de los del objeto para cotizar envio. No afirmar aptitud alimentaria, infantil, medica, termica u otras propiedades sin evidencia.

### Delivery phases

0. **Exploracion visual autorizada:** boceto original en docs/prototypes/tienda-3d e integracion local Astro en /tienda y /en/shop-3d, en español/ingles, con filtros y fichas de ejemplo. Categorias propuestas: Hogar y deco, Escritorio, Organizacion y Objetos de diseño. Renders generados identificados; sin precio inventado, carrito operativo, pagos o mensajes. Las rutas son noindex y se mantienen locales para revision; integrar una ruta no autoriza desplegarla ni anunciar inventario comercial. Mantiene Inter/Roboto Mono, tokens y reglas visuales del repo; la guia generica de diseño no reemplaza estas restricciones.
1. **Contenido real:** matriz editorial y reemplazos aprobados en Tina/MDX. No depende de elegir Payload.
2. **Catalogo inicial:** pocas piezas reales, fichas y consulta/pedido asistido. CTA honesto, sin simular cobro ni carrito operativo. Se puede implementar con el stack actual ampliando Tina y Astro.
3. **Decision de comercio:** comparar seguir con catalogo asistido, backend Payload separado y una aplicacion Next/Payload integrada; probar compatibilidad con las versiones fijadas. Backend separado mantiene Astro y usa API; una migracion completa aumenta alcance y no es necesaria por defecto.
4. **Checkout real:** solo tras aprobar proveedor de pagos, cobertura, moneda, politica de stock/produccion, logistica y costos. Preparar un lote acotado por fase; no activar todos los frentes simultaneamente.

### Payload feasibility (documentation checked 2026-10-15)

El plugin oficial incluye productos/variantes, carrito, pedidos/transacciones y direcciones; ofrece adaptadores de pago y documenta Stripe. No implementa nativamente envios ni impuestos. Mercado Pago, si se elige para Argentina, requiere investigar soporte actual, adaptar el flujo y probar webhooks: no se presupone incluido. No instalar una version elegida por el nombre de marketing del sitio: fijar versiones compatibles y auditar madurez del plugin antes de decidir.

Payload puede convivir como backend con Astro; su admin y despliegue habitual corren con Next.js. Agrega base de datos, almacenamiento persistente de medios, correo, backups/restauracion, observabilidad y mantenimiento. Vercel actual no elimina esos costos. Calcular presupuesto mensual y comisiones por pedido con proveedores y volumen reales, sin prometer costo cero permanente.

Tina sigue siendo la fuente editorial actual. Antes de migrar, decidir una sola fuente de verdad por tipo de contenido; evitar edicion simultanea del mismo catalogo en MDX y Payload. Una migracion futura requiere mapeo de slugs, medios, borradores, redirecciones, historial y plan de retorno.

### National shipping and checkout contract

Confirmar pais, punto/codigo postal de origen, cobertura por CP, retiro local, entrega a domicilio y/o sucursal, transportista/agregador y tarifas. Separar tiempo de produccion del de transporte. Mostrar costo de productos, envio y total antes de confirmar pago. No afirmar disponibilidad de un destino sin cotizacion valida.

Cotizacion vincula carrito, peso/medidas embalados, direccion/CP, servicio, precio, moneda y vencimiento. Cambios invalidan la cotizacion; no reutilizar un costo viejo. Timeout o falta de cobertura ofrece reintento/consulta sin presentar compra exitosa. Presupuestos manuales son validos como primera operacion si se informan antes del pago.

Importes, variantes, stock y envio se validan en servidor. Pago pendiente, aprobado, rechazado, vencido y reembolsado son estados distintos; una vuelta del navegador no confirma pago. Webhooks autenticados e idempotentes evitan cobros/pedidos duplicados. Definir reserva de stock, liberacion al vencer, capacidad de impresion bajo pedido, cancelacion y seguimiento. Pruebas en sandbox y sin cobros reales hasta aprobacion.

## Risks / Trade-offs

- Reescribir la identidad sin entrevista puede reemplazar un dummy por otro. La entrevista es requisito de contenido, no un motivo para detener la auditoria.
- Vender impresos demanda embalaje, control de calidad, tiempos de maquina y atencion postventa, ademas del software.
- Transportistas, tarifas, impuestos y condiciones comerciales necesitan validacion local vigente antes del lanzamiento. Este documento no fija textos legales.
- El modelo puede ser propio o licenciado para uso comercial: dejar registrada esa informacion, sin asumir derechos por tener un STL.

## Validation and rollout

Por cada fase guardar evidencia especifica: contenido aprobado y diff; ficha real/mobile/teclado; y, para checkout, variantes, calculo de total, CP sin cobertura, cotizacion vencida, pago duplicado/pendiente/rechazado, concurrencia de stock y seguimiento. Revisar build, rutas y fuente editorial. Publicacion requiere aprobacion de Alejandro; este OpenSpec permanece abierto mientras sus fases esten pendientes. No se crea branch/worktree automaticamente por regla local.

## Open Questions

- Origen de despacho, moneda, cobertura por destino y formas de cobro. Argentina ya confirmada.
- Primeras 3-5 piezas, autorias/licencias, fotos, costos, precio y capacidad de produccion.
- Mantener servicios freelance y como se relacionan con la impresion personalizada.
- español e ingles confirmados; acordar URL/localizacion y idioma inicial antes de integrar. CV/bio verificables, contacto y zona horaria real pendientes.
- Pedido asistido inicial o checkout desde el primer lanzamiento; presupuesto y proveedor logisitico.
- Venta digital de STL: fuera de alcance hasta pedido expreso.

## Sources

- https://payloadcms.com/docs/ecommerce/overview
- https://payloadcms.com/docs/ecommerce/payments
- https://payloadcms.com/docs/production/deployment
- https://github.com/payloadcms/payload/tree/main/examples/astro
