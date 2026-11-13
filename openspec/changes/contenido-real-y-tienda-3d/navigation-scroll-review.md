# Encabezado abierto y superficie al desplazar

Pedido de Alejandro, 2026-10-16. Referencia: https://deepseek.com/en/harness/ y dos capturas aportadas. La página de referencia devolvió una excepción de cliente en el navegador de pruebas; el comportamiento solicitado se toma de las capturas y la descripción del usuario.

- Alcance: navegación del portfolio, incluidas sus páginas interiores. Shop 3D conserva el encabezado abierto en flujo normal que Alejandro aprobó.
- Inicio: enlaces y marca visibles, sin contenedor de fondo.
- Después de unos 65 px de desplazamiento: aparece la superficie de vidrio; vuelve a desaparecer al regresar arriba. Se conserva posición, ancho y altura del menú, sin desplazar contenido.
- Un IntersectionObserver observa un marcador de 1 px a los 64 px del documento. No hay listener continuo de scroll ni dos copias del encabezado. Si el navegador no tiene esta API, se conserva el contenedor visible para legibilidad.
- La superficie se dibuja con ::before y reutiliza los colores, opacidades de sombra, saturación y medidas del sistema. El borde de contenedor usa el patrón ghost de terciario al 15 %. Se transiciona sólo opacidad durante 200 ms, sin animar blur ni dimensiones; sin transición con prefers-reduced-motion.
- La guía modern-web-guidance de encabezados propone consultas de estado de scroll con disponibilidad limitada y fallback IntersectionObserver. Aquí el menú ya es fixed y el umbral es explícito: se aplica el observer directamente para conservar el mismo comportamiento entre motores.

## Corrección relacionada de teclado

La auditoría previa detectó que Tab escapaba del menú móvil hacia el contenido de fondo. El diálogo ahora tiene cierre propio, foco inicial, ciclo Tab/Shift+Tab y Escape con retorno al disparador. Main, footer, navegación de fondo y enlace de salto quedan inert mientras está abierto; se restauran sus valores anteriores al cerrar. El menú se cierra al pasar al ancho de escritorio. Se agregó un enlace visible al foco para saltar al contenido.

Pruebas persistentes: tests/e2e/navigation.e2e.ts (scroll/retorno sin cambio de geometría y teclado móvil en portfolio/tienda). Evidencia y resultados de ejecución en validation.md. No implica certificación integral WCAG ni aprobación editorial de los trabajos del archivo.
