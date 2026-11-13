# R26 — Paletas de colores y textos de piezas

## Pedido y decisión

Alejandro pide cuadrados de paleta junto a las descripciones y continuar el catálogo. Se reutiliza el OpenSpec activo y la branch main; sin rama/worktree nuevos. Las muestras representan colores observados en fotos, incluidos detalles, con aproximación visual. No son SKUs, valores de filamento medidos, combinaciones ofrecidas ni controles de stock.

## Implementación

- Registro `src/lib/shop-colours.ts`: diez tonos aproximados con identificador y nombre ES/EN. Es la fuente compartida para Tina y presentación; CSS solo recibe valores del registro.
- Campo opcional `photographedColours` en el contrato y colección Tina, con lista de opciones. No se editan archivos generados ni tina-lock manualmente.
- Componente `src/editorial/ShopPalette.astro`, usado junto a descripción en tarjeta y ficha. Lista semántica con nombres visibles, cuadrados decorativos ocultos al lector de pantalla, sin foco/botones ficticios. Paleta vacía se omite; identificadores desconocidos no generan CSS.
- Estilos compartidos: cuadrados 1.75rem, distribución flexible, nombres legibles con tokens claro/oscuro; protección de muestras en colores forzados manteniendo nombres textuales.
- Ocho JSON reciben descripciones ES/EN depuradas y lista de colores de las piezas fotografiadas. El control Xbox de la escena no aporta colores a la paleta; se explicita que no está incluido. Vidrio/piedras de la flor quedan fuera. Se retiran nombres provisionales, menciones a Alejandro y medidas pendientes de descripciones. Notas internas, fuentes, permisos declarados, modalidad mixta, fotos y datos pendientes permanecen.
- OpenSpec registra comportamiento y accesibilidad de las muestras. No cambia el catálogo conceptual público ni se conecta un checkout.

## Auditoría y límites

Lectura de los archivos afectados y del alcance de diff. Sin suites/build/tipos/lint/e2e ni publicación. Las guías modern-web-guidance de accesibilidad/color sustentan nombres visibles y no depender solo del color; no se declara certificación de contraste/WCAG.

Intento de inspección en navegador existente: el runtime previo ya no tenía bindings; recuperado navegador disponible y pestaña local. Navegación a ficha del árbol rechazó conexión (`net::ERR_CONNECTION_REFUSED`, localhost:4322). Sin iniciar servidor nuevo, sin reintentos ni captura acreditada. La inspección visual del cambio, la versión móvil y el formulario Tina del nuevo campo siguen pendientes. R24 4/4 es evidencia previa, no control de R26.

## Continuidad

1. Revisar paletas en el navegador cuando esté disponible el servidor y comprobar generación/formulario Tina en el control autorizado o cierre correspondiente.
2. Conectar consulta por pieza al canal/destino que confirme Alejandro. Se solicitó preferencia correo/WhatsApp/formulario; no hay envío simulado ni contacto inventado.
3. Completar creación desde Tina, revisión móvil y aprobación editorial; verificar exclusión en artefacto al cierre. No publicar sin autorización.

Carrito, pagos, envíos y Next/Payload siguen diferidos. Medidas y duración de impresión no bloquean fichas; precios, stock concreto y plazo de entrega no se inventan. Cambios locales ajenos preservados; sin staging ni commit.
