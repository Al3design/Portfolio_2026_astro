# Validation evidence

Fecha: 2026-10-15. Implementacion local en la rama activa, sin commit/push/despliegue. Base auditada: c6e8065.

## Implementation

Paleta clara independiente, sin invert(). Surface #E7E5DF y low #DEDCD5. Aliases body y texto dejan de depender de una paleta neutral congelada en oscuro. Grilla en claro a 0.18, grano a 0.04, sombras glass/nav a 0.10 y menor saturacion del backdrop. Valores oscuros conservados. Opacidades informativas de status, copyright, anos de lista y CTA vacio pasan a 1 en claro para no degradar contraste; oscuro conserva sus valores.

## Opaque token contrast

WCAG relative luminance, sRGB, sin redondear para decidir aprobado. Tabla redondeada solo para lectura. El tercer fondo es una referencia mas oscura para estudiar capas, NO una medicion de todos los pixeles de los gradientes.

| Rol | Color | Surface #E7E5DF | Low #DEDCD5 | Referencia #D4D2CB |
|---|---|---|---|---|
| text | #454B47 | 7.09 | 6.51 | 5.91 |
| muted | #535A54 | 5.64 | 5.17 | 4.69 |
| primary | #435E40 | 5.72 | 5.25 | 4.76 |
| secondary | #735136 | 5.63 | 5.17 | 4.69 |
| tertiary | #375B60 | 5.90 | 5.41 | 4.91 |
| danger | #913F3F | 5.58 | 5.12 | 4.65 |

Texto de CTA #F3F1EB sobre verde #435E40: 6.38:1. Los seis roles superan 4.5:1 en estas combinaciones opacas. No se afirma que cualquier combinacion arbitraria de tokens sea valida.

## Browser checks

Chromium via Playwright, servidor existente npm run dev en 4322. axe-core 4.10.3, regla color-contrast. Paginas cargadas en frames de mismo origen de 1280 x 960, activacion de tema y scroll para revelar contenido animado; el contexto no sustituye una auditoria integral de interaccion.

| Ruta | Light: fallos detectados / incompletos | Dark: fallos detectados / incompletos |
|---|---|---|
| / (list) | 0 / 22 | 0 / 22 |
| /about | 0 / 11 | 0 / 11 |
| /resume | 0 / 6 | 0 / 6 |
| /archive | 0 / 47 | 0 / 47 |
| /projects/freelance | 0 / 52 | 0 / 52 |

Home cards tambien medida en claro: 0 fallos detectados / 24 incompletos. La primera pasada detecto 7 nodos con contraste insuficiente en status/copyright por opacidad; corregidos. Los incompletos corresponden a fondos con gradiente/pseudo-elementos: **no equivalen a aprobado**. Queda validar manualmente contraste de fondos compuestos y controles en todos los estados antes de declarar cumplimiento completo.

Comprobados en home: toggle real oscuro/claro y tokens restaurados, seleccion cards/list, filtro Web Dev y retorno a All Output; viewport 390 x 844 sin overflow horizontal; Tab mueve foco al logo y mantiene outline nativo visible. Revision visual de capturas claro desktop/mobile y oscuro. No se comprobo todavia cada ruta mobile ni todo el recorrido de teclado/reduced-motion; la estrategia de animacion/medias no fue modificada.

Al recargar home con layout list persistido aparece un hydration mismatch de ClientHome (lectura de localStorage vs HTML SSR). Ese mecanismo ya existia y no se modifico en este lote. Registrar para una correccion de hidratacion separada; no ocultarlo como pagina sin errores.

Capturas: evidence/light-desktop.png, evidence/light-mobile.png, evidence/dark-desktop.png.

## Checks and limitations

- openspec validate --all --strict: dos cambios aprobados.
- git diff --check: aprobado (solo avisos CRLF).
- astro build: primera pasada aprobada; pasada final despues de ajustes de opacidad tambien aprobada, 9 paginas en 32.52 s. Aviso existente por imports Search/X sin uso en ClientResume.
- Se uso astro build contra el Tina dev activo: valida Astro y estilos, **no** recompila el admin cloud como npm run build. No se ejecutaron transacciones de CMS ni cobros.
- Pendientes: validacion manual de incompletos, matriz de estados completa, revision visual de Alejandro, autorizacion y publicacion. No se archiva el OpenSpec.
