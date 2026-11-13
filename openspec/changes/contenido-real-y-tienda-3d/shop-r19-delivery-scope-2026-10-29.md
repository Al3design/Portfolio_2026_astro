# R19 — Medidas opcionales y plazo de entrega

Decisión expresa de Alejandro: medidas no hacen falta por ahora; no es necesario informar cuánto tarda en imprimir, sino en entregar. Se actualizan implementación, esquema y criterio editorial; los reportes previos se conservan como historial.

- Contrato editorial propio con deliveryTime, separado de productionTime del modelo conceptual anterior. Ninguno de los ocho JSON tenía un valor de productionTime que migrar.
- Tina muestra Plazo de entrega / Delivery timeframe, explicado como recepción o retiro por el cliente. No se completó un valor arbitrario ni se contrató un envío. Medidas se mantiene como campo opcional.
- Revisión local muestra material, variantes, cuidados, disponibilidad y entrega; medidas aparece solo si se completó en ese idioma. No muestra tiempo de impresión.
- En fichas conceptuales también se omite productionTime y medidas vacías. Se conserva el bloque de entrega existente, ahora etiquetado Plazo de entrega. Su valor conceptual no se convierte en una promesa comercial.
- Notas internas de fabricación permanecen internas. No se borran datos físicos confirmados ni fotos, no se modifica PLA ni licencias.
- OpenSpec y guía dejan de tratar medidas y duración de impresión como requisitos de esta etapa. Sigue pendiente definir el plazo real para el cliente, sin confundirlo con solo tránsito del transportista.

Test de revisión actualizado por código para cinco campos visibles y etiqueta de entrega. No se ejecutaron controles, build, e2e, tipos, lint, capturas ni reinicios manuales en R19. La búsqueda de orientación de HTML es documentación, no validación del producto. La generación de Tina requiere el flujo habitual, no se editan archivos generados a mano.

Sigue: revisión de variantes/colores ofrecidos, cuidados confirmados, disponibilidad y entrega; creación desde Tina/campos anidados y aceptación editorial. Permisos de modelos siguen pendientes para venta. Sin publicación, staging ni commits.
