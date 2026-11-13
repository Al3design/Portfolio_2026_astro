# Carrito, pagos y envíos: alternativas para Store 3D

Fecha: 29/10/2026, America/Buenos_Aires. Investigación documental, sin instalación, sandbox, build ni publicación. Preferencia de Alejandro: comparar rapidez de lanzamiento y control propio antes de elegir. Propuesta para discutir, sin aprobación de arquitectura o proveedores. No completa las tareas 3.1–3.3.

## Punto de partida comprobado

Portfolio Astro + React + TinaCMS. ShopContent y shop-demo contienen seis conceptos; no existe comercio operativo. El catálogo comercial debe diferenciar piezas en stock, producción bajo pedido y proyectos personalizados. El tiempo de fabricación se informa separado del transporte.

El starter https://github.com/alejandropd-1/payload-website-starter no pudo releerse: web pública 404 y conector GitHub fetch_file sin contenido legible para package.json. No se concluye que haya sido eliminado ni que siga siendo accesible con otra cuenta. Versiones y configuración del reporte del 15/10 son históricas, no auditadas hoy.

## Alternativas

Las estimaciones de esfuerzo siguientes son juicio de arquitectura, no presupuestos ni plazos comprometidos.

| Alternativa | Carrito y operación | Control visual | Esfuerzo/mantenimiento relativo | Encaje |
| --- | --- | --- | --- | --- |
| Catálogo Astro y pedido asistido | Selección/consulta; confirmación manual de capacidad, entrega y pago | Alto | Bajo desarrollo inicial, más trabajo manual por pedido | Piezas personalizadas o validación comercial inicial |
| Astro + backend Payload | Interfaz Astro/React actual conectada a productos/carritos/pedidos por API | Alto | Alto; hay que integrar frontend, sesiones y backend | Priorizar continuidad de la tienda actual |
| Tienda Next + Payload, portfolio Astro independiente | Tienda y backend en una aplicación; adaptación del template ecommerce | Alto | Alto; nueva interfaz comercial, menor separación técnica entre tienda y backend | Comercio propio con administración integrada |
| Tienda alojada, por ejemplo Tiendanube | Operación basada en las funciones e integraciones del plan | Condicionado al plan y plantilla | Menor desarrollo comercial propio; suscripción y dependencias de plataforma | Priorizar lanzamiento y operación simple |

En Payload, las dos arquitecturas necesitan resolver las mismas integraciones locales. Next/Payload no exige migrar el portfolio. Mantener /tienda o usar un subdominio es una decisión posterior, con sus redirecciones e idiomas; ningún dominio o routing fue modificado.

## Qué aporta Payload y qué falta

El plugin oficial documenta productos/variantes, carritos persistidos, direcciones, transacciones y pedidos. El proveedor de pagos oficial listado es Stripe. Envios, impuestos y suscripciones no se resuelven nativamente. Fuente: [overview](https://payloadcms.com/docs/ecommerce/overview).

Mercado Pago requiere un adaptador específico y su lógica de confirmación; la extensibilidad está documentada en [Payment Adapters](https://payloadcms.com/docs/ecommerce/payments). No se auditó ni seleccionó un paquete comunitario.

El [template ecommerce oficial](https://github.com/payloadcms/payload/blob/main/templates/ecommerce/README.md) continúa marcado BETA. Esto no demuestra por sí solo que sea inutilizable: obliga a fijar versiones compatibles y verificar los flujos elegidos. No extender esa etiqueta a todo Payload.

El [provider React](https://payloadcms.com/docs/ecommerce/frontend) admite serverURL para un backend remoto: Astro + Payload es una posibilidad fundada documentalmente. Falta probarla con el proyecto real. Sesiones, CORS/CSRF y continuidad del carrito entre páginas e idiomas deben diseñarse; no son un simple botón agregado al frontend.

La [disponibilidad global de Stripe](https://stripe.com/global) no lista Argentina como país de alta directa. No elegir Stripe por comodidad del template ni asumir una entidad extranjera del titular.

## Pagos: candidato inicial para una tienda propia

Mercado Pago Checkout Pro permite cerrar el carrito en la tienda y pagar en un entorno de Mercado Pago; acepta invitados según su documentación. Checkout API/Bricks ofrece otra experiencia de integración. Mi propuesta inicial es evaluar Pro para reducir trabajo en la interfaz de cobro. Fuentes: [Checkout Pro](https://www.mercadopago.com.ar/developers/es/docs/checkout-pro-preferences/overview).

Debe elegirse una familia de API coherente: la documentación distingue Preferences y Orders. No mezclar endpoints, notificaciones y estados de ambas en una implementación.

La API permite [informar el costo de envío](https://www.mercadopago.com.ar/developers/es/docs/checkout-pro-preferences/additional-settings/shipping-cost). Ese atributo no cotiza un transporte ni crea una etiqueta: el importe viene de la operación logística definida por nosotros.

Confirmar por backend el pago, importe, moneda y vínculo al pedido; procesar notificaciones repetidas sin duplicar pedidos. Validar firma y consultar el estado correspondiente. Referencia: [notificaciones](https://www.mercadopago.com.ar/developers/es/docs/checkout-pro-preferences/payment-notifications). Hay [compras de prueba](https://www.mercadopago.com.ar/developers/es/docs/checkout-pro-preferences/integration-test/test-purchases) sin tarjetas reales. No se ejecutaron hoy ni se crearon aplicaciones o credenciales.

## Envíos: caminos evaluados

| Camino | Evidencia oficial | Lo que falta para elegir |
| --- | --- | --- |
| Envíopack | API de cotización estandarizada, peso/paquetes, domicilio/sucursal y recursos de etiquetas/tracking | Cuenta, servicios habilitados, cobertura, condiciones y tarifas aplicables |
| Correo Argentino PAQ.AR | API para integrar sistemas; FAQ indica credenciales gestionadas con ejecutivo comercial | Alta, entorno de prueba, cobertura y tarifa para la operación real |
| OCA e-Pak | Cotizador y creación de envíos; contrato XML y métodos GET/POST/SOAP | Usuario/operativa, condiciones, tarifas y prueba de integración |
| Andreani | Portal sandbox público indexado, pero apertura directa devolvió 403 | No se verificó hoy el contrato técnico; sigue como candidato sin evaluación equivalente |
| Gestión manual inicial | Propuesta operativa propia: cotizar/confirmar antes de cobrar y registrar seguimiento | Aceptar carga manual y definir tarifas, cobertura y procedimiento |

Fuentes: [Envíopack](https://developers.enviopack.com.ar/cotiza-un-envio), [MiCorreo](https://www.correoargentino.com.ar/MiCorreo/public/faqs), [OCA](https://developers.oca.com.ar/epak.html), [Andreani](https://developers-sandbox.andreani.com/).

Para impresión 3D importa el paquete: una pieza liviana y voluminosa puede tener costo alto. Envíopack documenta el peso aforado; enviar dimensiones ficticias produce una cotización poco confiable. El embalaje de varias piezas requiere reglas propias, no sumar solamente el peso de los modelos.

## Costos: comparación honesta

En la [página oficial de Tiendanube](https://www.tiendanube.com/planes-y-precios) abierta hoy, Esencial muestra ARS 27.999/mes, Impulso ARS 79.999 y Escala ARS 244.999. El plan Inicial es gratuito con opciones restringidas de pago/envío. La suscripción no equivale al costo total: comisiones de cobro, posibles cargos de plataforma, aplicaciones y envíos se evalúan por separado. La búsqueda devolvió importes anteriores; se priorizó el contenido de la página abierta.

Para Payload, no hay un total defendible sin elegir hosting, base de datos, medios, correo y nivel de backups. Su [guía de despliegue](https://payloadcms.com/docs/production/deployment) requiere considerar persistencia de medios; el backend agrega operación y mantenimiento. Comparar costo mensual + horas de desarrollo/mantenimiento + comisiones + logística. No asumir que planes gratuitos alcanzan para una tienda comercial.

## Recomendación provisional y prueba que resolvería la decisión

Si se prioriza operación rápida, evaluar una tienda alojada con sus integraciones locales. Si se prioriza tienda propia, comparar Astro + Payload contra una tienda Next/Payload separada del portfolio. Mi preferencia provisional para comercio propio es Next/Payload separado: reúne frontend comercial y backend y aprovecha la estructura del template; es una inferencia de arquitectura, pendiente del ensayo y del costo aceptable. Astro + Payload sigue siendo válido si conservar la implementación actual pesa más.

Antes de elegir, preparar el mismo recorrido para ambas alternativas finalistas: producto físico con variante → carrito invitado → CP/domicilio o sucursal → envío y total → pago de prueba → pedido confirmado → seguimiento. Comprobar cambio de cantidad/precio, falta de cobertura, cotización vencida, pago pendiente/rechazado, webhook repetido y capacidad agotada. La prueba futura debe mostrar dónde se incorpora el envío al total y quién reserva/libera capacidad; no presuponer que el plugin ya lo cubre.

Datos mínimos para cotizar y probar: 1–3 piezas representativas, stock o bajo pedido, medidas/peso embalados, CP de despacho, retiro local sí/no, cuenta/proveedor existente y presupuesto mensual tolerable. No hace falta tener todo el catálogo para investigar este circuito.

Mantener Tina para portfolio y una fuente comercial única si se elige Payload o una plataforma alojada. Los productos de prueba permanecen identificados y fuera de venta pública. Esta investigación no cambia tareas preexistentes ni aprueba checkout, cobros o migraciones.

## Aclaración posterior del titular: software sin suscripciones ni plugins pagos

Alejandro se inclina por Next + Payload y establece que no quiere pagar suscripciones ni plugins que resuelvan el comercio. Esta restricción sustituye la comparación anterior como criterio de selección: Tiendanube y soluciones comerciales recurrentes dejan de ser candidatas recomendadas. No implica todavía aprobar una migración, proveedor o despliegue. No se asume autorización para contratar infraestructura.

Se verificaron la [licencia del núcleo](https://raw.githubusercontent.com/payloadcms/payload/main/LICENSE.md) y la [licencia del plugin ecommerce](https://raw.githubusercontent.com/payloadcms/payload/main/packages/plugin-ecommerce/LICENSE.md): ambas MIT. El [package.json del plugin](https://github.com/payloadcms/payload/blob/main/packages/plugin-ecommerce/package.json) también declara MIT. No hace falta una licencia comercial de Payload para implementar el comercio descrito. Se pueden desarrollar las integraciones de Mercado Pago y logística sin comprar plugins.

Existen funcionalidades comerciales opcionales anunciadas en [Enterprise](https://payloadcms.com/enterprise), como SSO, flujos editoriales avanzados y editor visual. No son requisitos identificados para el carrito y checkout de Store 3D. No confundir esas extensiones con funcionalidades abiertas como autenticación, permisos o borradores.

La ausencia de suscripción al software no garantiza operación sin costos: servidor, almacenamiento/base de datos, correo, dominio y backups requieren recursos; el procesamiento de cobros y el transporte tienen sus costos aplicables. La siguiente evaluación debe buscar operación propia o infraestructura existente, evitar servicios recurrentes de pago y detallar límites de cualquier nivel gratuito antes de proponerlo. Si la restricción incluye absolutamente todo pago periódico de infraestructura, falta acordar dónde se ejecutarán y respaldarán esos servicios. No se promete costo total cero.

### Payload v4 — estado oficial consultado el 29/10/2026

La [lista oficial de releases](https://github.com/payloadcms/payload/releases) muestra **4.0.0-beta.5**, publicada el 27/10/2026 como prerelease; **3.92.1**, del mismo día, figura como Latest estable. Existe [anuncio de beta](https://payloadcms.com/posts/blog/payload-4-beta-redesigned-admin-tanstack-mcp) y [guía de migración v3→v4](https://payloadcms.com/docs/beta/migration-guide/v4). No se encontró en las fuentes consultadas una fecha comprometida para v4 estable.

No fijar automáticamente una versión vieja por el starter ni adoptar main como si fuera estable: main ya contiene paquetes 4.0.0-beta.5. Propuesta: estudiar compatibilidad del comercio con v4 y, antes de implementar o cobrar, seleccionar y fijar una familia compatible de versiones según el estado estable de ese momento. Un ensayo v4 sería aislado y sin cobros; no fue ejecutado ni instalado hoy. La beta no demuestra que Mercado Pago o transportistas argentinos estén resueltos.

## Condición posterior: independencia de Mercado Pago y Mercado Libre

Alejandro aclara expresamente que no quiere utilizar la plataforma de Mercado Pago ni la de Mercado Libre. Quedan excluidos de la solución propuesta tanto su checkout como sus integraciones de pago, marketplace y logística. Las referencias anteriores a Mercado Pago se conservan como investigación histórica, pero su recomendación queda sustituida por esta restricción.

La dirección de diseño es una tienda propia Next + Payload, con catálogo, carrito, checkout y gestión de pedidos bajo control del proyecto. Medios de cobro y logística siguen abiertos: no se seleccionó ni autorizó otro proveedor. Las APIs de operadores logísticos independientes siguen siendo opciones a evaluar según sus condiciones y costos, sin contratación ni integración todavía.

Separar dos decisiones: poseer la interfaz y operación comercial, y elegir cómo recibir el dinero. Una alternativa inicial a investigar es transferencia bancaria con confirmación administrativa del cobro; si se quieren tarjetas, evaluar adquirentes/procesadores ajenos a las plataformas excluidas y sus requisitos, costos e integración. Estas son líneas de investigación, no servicios verificados o elegidos. No equiparar la independencia solicitada con ausencia total de bancos, redes de tarjeta o transportistas.

Mantener también la restricción anterior contra suscripciones y plugins pagos. No interpretar esta aclaración como aprobación para reemplazarlos por otro servicio comercial, instalar software, crear cuentas o activar cobros.

### Precisión del alcance y medios de cobro buscados

Alejandro precisa que rechaza lo relacionado con Mercado Libre; el resto de operadores independientes es admisible. OCA, Correo Argentino y los otros candidatos logísticos anteriores permanecen en evaluación. La exclusión no alcanza a todas las plataformas de procesamiento: quiere ofrecer tarjetas de crédito, débito y transferencia bancaria desde una tienda propia, como los comercios especializados que conoce. Mercado Pago permanece fuera por la instrucción explícita anterior; no se dio autorización posterior para reincorporarlo.

El objetivo es ofrecer los tres medios. Transferencia como primera fase sería solo una propuesta por acordar, no una sustitución automática del requisito de tarjetas. Checkout propio puede utilizar captura/tokenización o formularios alojados por un proveedor independiente; no equivale a almacenar números de tarjeta o códigos de seguridad en Payload. Modalidad de integración y proveedor pendientes.

Investigación oficial adicional del 29/10:

- [Payway](https://www.payway.com.ar/vender-online): anuncia API/SDK para tiendas de desarrollo propio. Candidato para tarjetas; falta determinar producto comercial exacto, aranceles y abonos. No extrapolar promociones de tienda alojada o POS al servicio API. La apertura directa tuvo timeout, pero el contenido oficial indexado describe esa integración.
- [Getnet Argentina](https://www.getnet.net/ar/nuestras-soluciones/cobros-online/checkout-para-ecommerce): API para tiendas propias, crédito/débito/prepagas y opciones iframe, lightbox o redirección; informa acreditación bancaria. Falta evaluar tarifas, cargos fijos, alta y contratos técnicos. Que admita también una billetera excluida no significa que debamos habilitarla: comprobar selección de medios antes de aprobar.
- [Mobbex FAQ](https://www.mobbex.com/faq/): integración API y tarjetas. Sus [condiciones](https://www.mobbex.com/terminos-y-condiciones/) contemplan costo básico y mínimo mensual cuando corresponda en modalidad Gateway. No dar por satisfecho el requisito de evitar suscripciones/abonos; podría descartarse según modalidad y propuesta comercial.
- Transferencia bancaria directa: propuesta de orden pendiente de acreditación y conciliación administrativa en la cuenta del vendedor. Un comprobante no acredita por sí solo fondos recibidos. Automatización bancaria sería evaluación separada, sin API o proveedor elegido.

Referencias comerciales aportadas:

- [3D Insumos](https://3dinsumos.com.ar/formas-de-pago): la página abierta hoy anuncia Mercado Pago para Argentina y PayPal para exterior. Por tanto, no se puede usar como evidencia de cobro local independiente de Mercado Pago.
- [Proyecto Color](https://proyectocolor.com.ar/medios-de-pago/): el resultado oficial indexado lista crédito, débito, Mercado Pago y transferencia por separado. Apertura directa devolvió 403. No se identificó con certeza el procesador de las tarjetas ni se ejecutó checkout. Logos y medios anunciados no prueban arquitectura, proveedor o contrato.
- Casas de computación de calle Florida: referencia conceptual del titular, sin comercio o URL específico auditado. No atribuirles una pasarela por inferencia.

Siguiente comparación acotada: Payway vs Getnet para tarjetas, más transferencia bancaria directa y logística independiente. No se contrataron servicios, crearon cuentas, habilitaron medios ni instalaron plugins. Ningún proveedor queda elegido por esta investigación.

## Decisión más reciente: avanzar con la web actual y diferir integraciones

El 29/10 Alejandro pide dejar registrada toda esta evaluación y continuar con lo que hay; las integraciones se verán después. Esta decisión sustituye el próximo paso de investigación comercial propuesto arriba.

- Prioridad inmediata: Store 3D sobre Astro + React + TinaCMS, conservando diseño, tokens, idiomas, filtros y fichas existentes. Mejorar/completar navegación, colección y ficha sin rehacer la web ni migrar stack.
- Next + Payload queda como preferencia futura por evaluar, no una migración aprobada o iniciada. La beta v4 y las alternativas de pago/logística quedan documentadas para retomar cuando corresponda.
- Diferir carrito comercial, cobros, cotización de envíos, checkout y seguimiento. No agregar botones que simulen compras, reservas o consultas enviadas si no son operativas.
- Conservar restricciones: evitar suscripciones y plugins pagos, independencia de Mercado Libre/Mercado Pago; crédito, débito y transferencia como medios deseados; operadores logísticos independientes admisibles. No hay proveedor elegido ni contrato autorizado. Costos de infraestructura y procesamiento siguen por resolver.
- Mientras falten piezas y datos reales, mantener renders/conceptos identificados, noindex y ausencia de precios/stock inventados. Argentina ya fue confirmada; siguen pendientes piezas, derechos, fotos, materiales, medidas, variantes y capacidad.
- Sin instalaciones, cambios de dominio, cuentas, contratos, cobros reales ni publicación por esta decisión. Preservar cambios locales ajenos, branch activa y política de controles del proyecto.

El avance actual no cierra las tareas 2.1–2.4 ni 3–4 por anticipado. La continuidad comercial queda guardada, no descartada.
