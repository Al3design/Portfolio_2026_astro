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

## Production closure audit — 2026-10-15

Alejandro marco la revision visual y confirmo commit/push. HEAD y upstream: 9d3fe65a0c9224c09ff77e47ddd0e42c289232a9. La aprobacion humana se conserva, pero no reemplaza las verificaciones tecnicas pendientes.

Se cargaron en https://al3design.dev las rutas /, /about, /resume, /archive y /projects/freelance en light/dark y viewports 1280x960 y 390x844 (20 combinaciones). No hubo overflow horizontal en la matriz. Evidencia: evidence/production-contrast-samples.json.

Metodo: calcular color y opacidad de texto/ancestros, ocultar glifos en una captura diagnostica para muestrear el fondo compuesto y aplicar luminancia relativa WCAG. Es un muestreo para detectar problemas, no certificacion WCAG: degradados recortados a texto, elementos decorativos y controles deshabilitados requieren interpretar los resultados. En particular, el resultado 1.013 para Designer NO se considera fallo confirmado: usa background-clip:text y el metodo altera ese fondo al ocultar glifos. Los separadores / y el simbolo decorativo tampoco se cuentan automaticamente como texto informativo obligatorio.

Pendientes confirmados por muestreo y codigo:

- /resume: ruta de terminal ~/aledesign/query_db.sh, 1.88:1 en claro. _resume.module.scss aplica on-surface al 40%.
- /archive: cabeceras Year/Project_ID/Stack/Action, aproximadamente 2.46:1; _archive.module.scss aplica on-surface-variant al 60%.
- /archive: Showing 5 of 5 entries, aproximadamente 2.42:1, opacity inline 0.6; query_db.sh, aproximadamente 3.48:1, opacity 0.8.
- /projects/freelance: metadata Freelance aproximadamente 3.75:1, opacity 0.8. Revisar tambien el titulo con degradado mediante un metodo que preserve el relleno real.

No se marcan 2.1, 2.2 ni 3.2 como completadas. Aun falta corregir contraste informativo, verificar todos los estados/interaccion por teclado y reduced-motion, y comprobar esas correcciones en produccion. No se archiva este cambio. No se modifico codigo de la UI durante esta auditoria.

## Final corrections and local acceptance — 2026-10-15

Se corrigen opacidades informativas en ruta de terminal de Resume, cabeceras/nombre/contador de Archive, metadata de proyecto y menu mobile. Placeholder y Clear All usan texto secundario opaco. Se conserva la paleta clara calida y los roles de marca. El reflejo oscuro tambien bajaba el contraste del texto secundario: sheen 0.12/0.04, glow 0.06/0.08 y grano 0.08. No se alteran colores de fotografias ni la estrategia de mascaras de la grilla. La decision de efectos oscuros se actualiza explicitamente en design/spec.

Foco compartido de 2px con token cyan; controles nativos respetan color-scheme. Tag seleccionado usa borde primario opaco y aria-pressed. Archive tiene enlaces simples en lugar de button anidado en a, nombres accesibles de selects y botones de paginacion realmente disabled. El caret decorativo de Resume deja de parpadear con reduced-motion.

Evidencia final local:

- final-local-contrast.json: cinco rutas x dos temas x dos viewports = 20 casos, 1804 nodos de texto muestreados, cero fallos detectados y sin overflow horizontal. Usa fondos compuestos renderizados y alpha del texto, con limites WCAG sin redondear.
- Se excluyen separadores/iconos decorativos aria-hidden y controles disabled. Para titulos con background-clip:text se retira el relleno solo de la captura diagnostica del fondo y se comparan ambos extremos reales del gradiente con ese fondo. No se considera valido el antiguo falso positivo Designer 1.013.
- El toolbar de Astro se retira SOLO de la pagina del navegador de auditoria: su panel superpuesto generaba falsos positivos a la altura del borde inferior del viewport mobile. No se modifica la app para ocultar defectos.
- final-local-interactions.json: 20 casos, cinco Tab nativos por caso, inspeccion de todos los controles visibles habilitados tras entrada por teclado, foco con outline >=2px; menu mobile en ambos temas; preferencia reduce activa, grilla sin animacion y caret sin parpadeo. No se presenta como auditoria integral de todos los gestos/lectores de pantalla ni como eliminacion de toda transicion de Motion.
- final-local-states.json: estados normal/selected/hover/focus en ambos temas mediante hover y teclado reales. Claro: texto minimo 4.689889805229416:1; senal seleccion/foco minimo 5.353618509436333:1. Oscuro: texto minimo 7.5082186439882745:1; senal seleccion/foco minimo 14.61598708262531:1.
- pnpm test:e2e final: 3/3, 11.80s; navegacion, persistencia de tema y filtro/layout con enlaces reales. pnpm exec astro build final: 9 paginas, 18.02s.
- npm run build completo local fallo antes de Astro porque esta terminal no tiene TINA_CLIENT_ID ni TINA_TOKEN. No se declara aprobado. La compilacion cloud completa se verifica al publicar por la integracion Git/Vercel ya configurada.
- final-light-desktop.png y final-light-mobile.png revisadas visualmente: textos oscuros legibles sobre superficies calidas y grilla atenuada.

Alejandro habia autorizado publicacion en 3.1 y solicito completar estas correcciones y cerrar el cambio. La tarea 3.2 sigue pendiente hasta comprobar la publicacion. No hay certificacion WCAG integral: la evidencia corresponde a esta matriz y estos estados. La discrepancia de hidratacion historica de home y la veracidad del contenido son alcances separados.

## Production verified and closure — 2026-10-15

Implementacion publicada por GitHub/Vercel: commit bab6c908c3a42e69cff1dff0f6ad4f4df9081bbd. Estado Vercel success, actualizado 2026-10-15T16:47:30Z, despliegue https://vercel.com/aledesign-projects/portfolio-2026-astro/6xAMfb6eVMbdpmNQTXUAhc9FQiRg. Evidencia deployment-status.json. El build cloud configurado tinacms build + astro build completo la publicacion; no se confunde con el build local sin credenciales.

Se repitieron directamente sobre https://al3design.dev los 20 casos de contraste (1804 nodos, cero fallos detectados), los 20 casos de interaccion y los ocho estados de botones. Ver final-production-contrast.json, final-production-interactions.json y final-production-states.json. Cien Tab nativos y 506 controles inspeccionados; menu en ambos temas; reduced-motion de grilla/caret; sin overflow horizontal en la matriz. Los minimos medidos para texto/estado coinciden con el apartado local. Se mantienen las limitaciones metodologicas explicitadas arriba: no certificacion WCAG integral, ni prueba de todas las tecnologias asistivas.

La tarea 3.2 queda completada. Se archiva el cambio y se sincroniza accessible-color-themes. La siguiente fase es contenido real + tienda 3D; los placeholders editoriales no se alteraron durante este cierre.
