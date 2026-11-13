# Fondo hexagonal por zonas y lectura con granulado

2026-10-19. Pedido de Alejandro: difuminar bordes del fondo de lectura, añadir el grano existente sin varios colores y sustituir el fondo por una trama hexagonal inspirada en Hexagonal Vault, revelada por fragmentos. Conservar el anterior.

## Referencia y alcance

Se leyó la documentación pública https://pro.reactbits.dev/docs/components/hexagonal-vault (la URL con browse falló; un intento de abrirla en navegador integrado agotó el tiempo). La referencia describe iluminación del cursor sobre una trama hexagonal y expone opciones de lattice/afterglow/autoplay. No se obtuvo ni incorporó código fuente del componente Pro.

Implementación propia CSS/SVG inspirada en el principio de luz sobre hexágonos, reutilizando las tres capas existentes y setupEnergyGridPointer. No se presenta como el componente React Bits instalado ni como réplica de su shader/estela/chispas de clic. La variante local revela regiones con luz, sin trama completa en reposo, y anima transform/opacity. No agrega WebGL, canvas, dependencias ni DOM por celda.

## Fondo de lectura

projectDetail__content y heroCaption usan dos pseudo-elementos estáticos, aislados detrás del contenido: base opaca del token brand-surface con sombra difusa y grano reutilizado de /textures/grain.svg. El SVG de grano ya desatura el ruido; no se añaden los degradés cálidos/cian del mixin glass. El grano se desvanece en los cuatro bordes con máscaras estáticas. El texto no se enmascara ni se desenfoca. pointer-events none en ambas capas.

La base opaca sigue ocultando las luces detrás de la lectura. La sombra suaviza su perímetro sin mover el contenido o alterar anchos. No hay filtros backdrop ni cálculos de rectángulos al mover el ratón.

## Hexágonos y preservación

- public/textures/hexagonal-grid.svg: celda periódica de contornos, original de esta implementación.
- MainLayout.astro: backgroundPattern = 'hexagonal', enviado a data-energy-pattern. Cambiar ese valor a 'square' restaura la versión anterior.
- El mixin energy-grid-bg/energy-grid-spot y sus keyframes originales permanecen intactos. La variante nueva usa overrides exclusivos del atributo hexagonal, por lo que no se ejecutan dos fondos superpuestos.
- hexagonal-grid-bg aplica la máscara SVG fija y tres focos locales de un solo acento primary, a ritmos distintos; las zonas suben y bajan de intensidad. El resto de la trama permanece invisible.
- El foco primario reutiliza el seguimiento por transform del puntero ya existente. No se añade JS. Las nuevas animaciones solo se declaran sin prefers-reduced-motion. Se conserva el filtro de puntero fino y la suspensión al ocultar la pestaña; la variante reafirma animation-play-state paused para no anularlo con su animation shorthand.
- Shop sigue excluido por la condición existente de MainLayout. No se agregan controles de configuración a la interfaz del sitio.

## Estado y continuidad

Cambios de fuente revisados por lectura/diff; guías CSS Masking y movimiento consultadas. Sin build, Sass/tipos/lint, tests/e2e o capturas del sitio conforme AGENTS.md. La consulta fallida del navegador de referencia no fue un control del producto. No se declara comprobada la apariencia, el soporte efectivo de máscaras en cada navegador o el coste de pintura/rasterizado. Todo eso queda para el cierre.

Sin cambios de contenido o Tina, sin commit/push/publicación. Esta tanda reemplaza los bordes rectos de article-reading-surface-report.md; la protección opaca central y la versión cuadrada se conservan.
