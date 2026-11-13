# R28 — Revisión local de paletas y consulta

## Entorno

Continuación pedida por Alejandro. No había listeners visibles en 4002/9001/4322. Se inició una única instancia de `npm run dev` (sesión 1137): Tina indexó sin error informado y Astro 6.3.5 anunció disponibilidad en localhost:4322. Sin segundo Tina, build, suites, tipos, lint, e2e ni publicación. Los tipos/esquema generados por el arranque normal no se editaron manualmente.

Hubo conexiones rechazadas durante el arranque, bindings anteriores del navegador no disponibles y timeout inicial de navegación. La página finalmente se cargó en el navegador integrado. No se cambiaron políticas de red, configuración del navegador ni protecciones. Se reutilizó el mismo servidor.

## Evidencia inspeccionada

1. **Árbol ES, escritorio claro:** descripción depurada, seis cuadrados con nombres legibles, nota de aproximación y enlace de WhatsApp con explicación de envío manual. Captura `output/shop-r28/01-arbol-es-claro.jpg`.
2. **Árbol ES, móvil oscuro:** viewport solicitado 390 × 844, cuadrados acomodados en filas, nombres y consulta visibles. Captura `output/shop-r28/02-arbol-es-movil-oscuro.jpg`. Esta captura sí se obtuvo e inspeccionó, a diferencia del intento R25.
3. **Árbol EN, móvil oscuro:** cambio de idioma conservó la ficha; nombres de colores, descripción, mensaje y aviso localizados. Captura `output/shop-r28/03-arbol-en-movil-oscuro.jpg`.
4. **Enlace de consulta:** leído desde el DOM y decodificado sin abrir WhatsApp. Destino exacto `https://wa.me/541160513261`. Texto EN incluye Decorative tree, colores/combinaciones, stock o pedido, precio y entrega/retiro; el ES se observó en el DOM de la misma ficha. No incluye URL de revisión ni notas internas. No se enviaron mensajes ni se acredita cuenta válida, entrega o navegación externa.
5. **Generación Tina:** el esquema generado contiene `photographedColours`, string/list, con diez opciones. Esto acredita generación, no guardado/alta de una ficha desde formulario.
6. **Formulario Tina existente, solo lectura:** abierto el editor nativo del árbol en modo local. El campo «Paleta de las fotos» muestra diez checkboxes y los seis valores del árbol marcados (Verde, Verde oscuro, Beige, Marrón, Amarillo, Naranja). Captura `output/shop-r28/04-tina-paleta.jpg`. Sin alterar selección, Save ni documentos. Se acredita render/carga del campo, no persistencia de una modificación.
7. **Tarjetas ES/claro:** regreso a colección conservó el ancla del árbol. Captura `output/shop-r28/05-coleccion-paletas.jpg` muestra árbol, figura articulada y flor con sus fotos, descripciones y paletas con nombres; no se declara inspección de las ocho tarjetas.

Tema claro, idioma ES y viewport original restaurados al terminar las capturas.

## Límites

Revisión visual acotada a ficha del árbol y primeras tres tarjetas, no matriz de ocho piezas por idioma/tema/ancho. No prueba de teclado exhaustiva, lector de pantalla, colores forzados ni conformidad WCAG. R24 sigue siendo el último e2e previo (4/4), no una ejecución del estado R26–R28. Creación/persistencia del nuevo campo Tina, recorrido externo de WhatsApp, revisión de Alejandro y exclusión del artefacto de producción siguen pendientes.

Sin cambios funcionales de esta tanda ni documentos de producto editados. Se conserva el servidor local para continuar; sin commit/staging y sin tocar cambios locales ajenos. Carrito/pagos/envíos/Next-Payload permanecen diferidos.
