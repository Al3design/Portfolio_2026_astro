# R27 — Consulta por pieza en WhatsApp

Alejandro eligió WhatsApp y entregó el destino internacional `541160513261`. Se conserva literalmente, sin agregar dígitos ni inferir otro número.

## Cambio preparado

- `src/lib/shop-inquiry.ts` centraliza destino y enlace wa.me. El texto se codifica con URLSearchParams e incluye nombre ES/EN, colores/combinaciones, disponibilidad stock/pedido, precio y entrega/retiro.
- Cada ficha de revisión, tanto desde tienda real local como ruta de revisión, muestra enlace junto a descripción/paleta. Abre otra pestaña con noopener/noreferrer y texto visible que explica envío manual, sin reserva ni compra confirmada.
- No se añaden datos de visitantes, notas internas, fuentes o direcciones localhost al mensaje. Ningún mensaje se envía desde la web automáticamente. El catálogo conceptual público conserva su comportamiento.
- Estilos con tokens compartidos, sin nueva dependencia ni servidor de formularios. Guía editorial y tareas actualizadas.

## Evidencia y límites

Código leído por diff/archivos. No se ejecutan suites, build, tipos, lint ni e2e. No se abre WhatsApp ni se envían mensajes al número: entregar un número autoriza configurar el contacto, no mandar una consulta de prueba. No se afirma cuenta existente, formato aceptado por WhatsApp, entrega del mensaje ni validación en móvil. El destinatario y la navegación externa quedan para revisión expresa; la vista local seguía sin servidor activo en R26.

No hay publicación, commit ni staging. Cambios ajenos preservados. Paletas R26, alta Tina, revisión visual móvil y exclusión en artefacto siguen con sus límites previos. Comercio completo y Next/Payload continúan diferidos.
