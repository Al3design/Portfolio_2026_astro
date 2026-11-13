# Estela del puntero y bordes de lectura a transparencia

2026-10-19. Corrección pedida por Alejandro con dos capturas: la referencia tiene estela y núcleo de luz intenso; el fondo de lectura seguía con borde duro. Pidió expresamente entrar en la demo y mover el puntero.

## Referencia observada

Se abrió https://pro.reactbits.dev/docs/components/hexagonal-vault?browse=components en una sesión CLI propia hex-vault-reference. Se movió el puntero dentro del canvas visible con una trayectoria de 24 pasos; se observaron dos imágenes separadas por 1,1 s. Se comprobó visualmente en la referencia el núcleo claro, luz alrededor y desaparición gradual del recorrido anterior. Imágenes locales hex-vault-pointer-hot/afterglow en .e2e/content-intake.

Esta observación está autorizada por el pedido actual y limitada al sitio de referencia. No es un control del portfolio ni habilita capturas/suites por tanda en localhost. No se accedió a cuenta, código de pago o datos privados; la implementación local sigue siendo propia, no el componente Pro.

## Corrección de bordes

La base opaca anterior tenía una sombra y el grano tenía máscara. Se elimina la sombra y se aplican máscaras alfa intersectadas a ambas capas, con un borde exterior de size(12) que pasa de opaco a transparente. Es la superficie decorativa la que desvanece, no el texto. El centro bajo la columna continúa opaco; el grano sigue siendo el SVG monocromático compartido, sin campos de varios colores ni blur sobre contenido. Prefijos WebKit y propiedades estándar conservados.

## Puntero hexagonal

Nuevo setupHexagonalGridPointer separado de setupEnergyGridPointer. El original queda intacto para square; el layout invoca solo uno según data-energy-pattern.

- Núcleo compacto claro sobre el acento primary; aumenta su opacidad con la velocidad del movimiento y mantiene iluminación al detenerse.
- Ocho luces reutilizables, no una por celda ni una por evento. Muestreo espacial/temporal del recorrido; cada luz conserva posición y pierde opacidad durante 2200 ms. Memoria y DOM acotados.
- Un único requestAnimationFrame compartido, escrituras limitadas a unos 60 Hz con tolerancia del temporizador; easing por tiempo. No se lee geometría por frame: solo el transform inicial para tomar la posición del foco ambiental.
- Al detenerse el puntero, el loop termina cuando vence la estela; no se mantiene un loop JS permanente. Al salir, el núcleo decae y luego se recupera el modo ambiental. blur/visibility/preferencias limpian el efecto.
- Reduced motion/puntero no fino no activan seguimiento ni estela. Se conserva suspensión de animación ambiental en pestaña oculta. Cleanup elimina listeners, puntos, estilos y RAF al desmontar/BFCache/HMR.

No se agregan canvas/WebGL/dependencias o shaders. Las ocho luces se recortan con la misma máscara hexagonal fija. No se afirma equivalencia con la estela, grosor de aristas, shader o rendimiento del componente Pro.

## Estado

Fuentes y diff revisados; sin build/tipos/lint/tests/e2e ni apertura/capturas del portfolio. La apariencia y el rendimiento local siguen pendientes del cierre correspondiente. Sin commit/push/publicación. Square y su helper original conservados. Se cierra únicamente la sesión de navegador creada para esta referencia, sin afectar otras sesiones.

## Ajuste de celda caliente y reposo — 2026-10-19

- La celda mas cercana al cursor se resuelve contra la misma reticula hexagonal del SVG (radio 28px), con un contorno naranja y halo verde de vecinos.
- Una capa acotada de 280px permite el glow fuera de las lineas, sin filtrar el viewport completo. Se conserva el pool fijo de ocho puntos de estela.
- El nucleo decae durante 1400ms desde el ultimo movimiento real. La estela termina en 2200ms; el RAF se detiene al apagarse. El fondo ambiental por sectores sigue independiente.
- Se mantienen reduced-motion, puntero fino, suspension en segundo plano y limpieza al navegar; la variante cuadrada sigue conservada.
- Revision de codigo/diff solamente. Sin build, pruebas, capturas ni comprobacion visual de localhost en esta tanda, conforme AGENTS.md. La fidelidad visual y el rendimiento real siguen pendientes de verificacion final.

### Correccion de alcance Sass
El usuario reporto Undefined variable en el fondo del hexagono caliente. Se reemplazo `$clr-brand-secondary` por `var(--clr-brand-secondary)`, token CSS existente del tema, para evitar depender del alcance Sass del modulo de mixins. No se ejecutaron controles por tanda.

### Nucleo continuo y fade radial — 2026-10-19
A pedido del usuario se reemplaza el contorno completo naranja que saltaba entre celdas por una luz continua con degradado radial: naranja concentrado en el centro, verde alrededor y transparencia exterior. La mascara se contradesplaza para mantener los hexagonos inmoviles. Se refuerza el glow de las lineas con sombras acotadas y una segunda capa tenue; entrada/salida de opacidad de 120ms. Se conserva la extincion por inactividad, el pool fijo y la variante anterior. Sin verificacion de proyecto ni capturas por tanda; revision visual en localhost pendiente.

### Minimo en reposo y expansion direccional — 2026-10-19
El halo del puntero decae hasta una opacidad minima de 0.18 mientras permanece dentro de la pagina. El RAF se detiene tras el fade y la estela, aunque quede ese minimo estatico. Salir de la pagina, ocultarla o desactivar motion sigue limpiando el efecto. El naranja gana glow y amplitud; su centro se anticipa hasta 42px (un paso de la reticula) hacia el movimiento y vuelve suavemente con la velocidad a reposo. Radio de degradado 110px con transparencia al 88%, contenido dentro de la capa de 280px incluso con el desplazamiento maximo. Sin nuevos nodos ni verificaciones por tanda. Revision visual pendiente en localhost.

### Fade-in al retomar movimiento — 2026-10-19
La intensidad interactiva ahora tiene una envolvente continua, con ataque de 220ms (constante exponencial) desde su valor actual, en lugar de aplicar directamente el nuevo objetivo de brillo al detectar movimiento. El descenso mantiene su suavizado y minimo de reposo. La estela tambien entra con smoothstep de 140ms y conserva la intensidad al nacer, evitando que puntos nuevos aparezcan inmediatamente a brillo pleno. El RAF se mantiene solo mientras hay movimiento, estela o transicion pendiente; luego se detiene. Revision de fuente, sin controles ni capturas por tanda; resultado visual pendiente.

### Alcance mas compacto — 2026-10-19
Se reduce aproximadamente un 18% el radio visible del puntero: nucleo verde de 260 a 220px de diametro, puntos de estela de 220 a 180px y radio del degradado caliente de 110 a 90px. Se conservan opacidad minima, fade-in/out, glow y extension direccional. Sin controles por tanda.

### Estela neon y naranja en el cursor — 2026-10-19
La captura aportada muestra trazos cian claros y bloom alrededor, con naranja exactamente bajo el cursor. Se mueven los ocho puntos reutilizados fuera de la mascara general: cada punto acotado de 180px tiene su propia mascara de reticula fija y el filtro se aplica al padre despues del enmascarado del hijo, permitiendo glow fuera del trazo. Se refuerza el centro claro/cian y el decaimiento de la estela conserva su entrada gradual. El nucleo naranja sigue ahora targetX/targetY sin anticipacion direccional ni retraso; la estela conserva el seguimiento suavizado. El naranja queda por encima de la estela. Minimo de reposo, fade-in/out, reduced-motion, cleanup y pool fijo siguen vigentes. Lectura de fuente/diff; sin build, pruebas ni capturas de localhost por tanda. Fidelidad y coste real de rasterizacion pendientes de verificacion final.

### Onda expansiva al clic — 2026-10-19
Se incorpora un pulso radial desde las coordenadas del clic principal: frente claro/cian con acento naranja sobre los trazos hexagonales, halo exterior y centro que se apaga a medida que el anillo avanza. Radio 8–260px durante 1500ms, sin escalar la reticula. Pool fijo de dos ondas reutilizables, con el mismo RAF acotado del puntero y sin listeners que cancelen clics o navegacion. Se omiten clics de teclado, reduced-motion y dispositivos sin puntero fino; reset/cleanup elimina las ondas al ocultar, desenfocar o navegar. Sin build, pruebas ni capturas por tanda; visual y coste real pendientes de verificacion final.

### Clics repetidos y transparencia de lectura — 2026-10-19
Las ondas dejan de usar reciclado circular: cada clic busca una capa cuyo ciclo de 1500ms haya terminado. Hasta cuatro ondas pueden expandirse independientemente; si todas estan ocupadas, se omite el nuevo pulso sin interrumpir ninguno de los activos. Se conserva el limite de nodos y la limpieza. El fondo de lectura pasa de opaco a alfa 0.78, igual que la base del mixin glass de las cards del inicio; se mantienen granulado monocromatico y bordes a transparencia. Sin build, pruebas ni capturas por tanda. Revision visual y rendimiento pendientes.
