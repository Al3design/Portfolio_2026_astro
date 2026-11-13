# Historial de Modificaciones — The Compiled Soul Portfolio 2026

Este documento registra los cambios significativos realizados al proyecto en orden cronológico. Su propósito es servir de contexto para asistentes de IA que retomen el trabajo en cualquier punto.

> **Cómo leer este archivo:** Cada entrada describe _qué_ se cambió, _por qué_ se tomó esa decisión, y _qué archivos_ se modificaron. Lee de arriba hacia abajo para entender el estado actual del proyecto.

---

## [2026-11-13] — Candidato: orden automático también en inicio de Tienda

- La portada conservaba las tres novedades anteriores aunque el catálogo ya tenía altas primero. Novedades vacío pasa a usar las tres primeras piezas del catálogo; una selección manual explícita sigue teniendo prioridad y se puede vaciar para volver al modo automático.
- Selección candidata en modo automático; hero, catálogo completo, fotos/paletas, maqueta y tokens intactos. El admin explica ambos modos sin cambiar esquema/generados.
- Checker de artefacto comprueba orden completo y tarjetas visibles de inicio/colección ES/EN, además de controles de medios/privacidad existentes. Skill/AGENTS/guía registran ambas superficies. Rama codex/orden-portada-tienda, pendiente Preview y OK posterior.

## [2026-11-13] — Flujo Git y recuperación con 2FA para IA local

- AGENTS, skill editorial, recuperación, config y README distinguen despliegue automático por push de Redeploy manual para un fallo diagnosticado. No duplicar un despliegue exitoso con Redeploy.
- Ante Verify Your Identity, intervención humana en Vercel, sin códigos en chat ni vías alternativas para eludir el desafío. Se registra que los últimos Preview/Production por Git no pidieron código, sin garantizar futuras sesiones ni inventar una causa interna de Vercel. Solo documentación; producto aprobado sin cambios, sin nuevas suites/build locales.

## [2026-11-13] — OK del lote Shop y autorización de integración

- Alejandro aprobó el Preview e57f0d1: nueve altas primero, paletas ES/EN y Dorado de Messi. Vercel Ready, artefacto sin errores y recorrido ES/EN 20/20; controles y límites visuales en el reporte del lote.
- Se autoriza integrar esa revisión a main con registro documental de cierre. Identidad y resultado del despliegue Production se conservan en el checkpoint externo citado por el reporte; no se presume producción por el OK ni se repiten suites/builds verdes.

## [2026-11-13] — Altas Shop primero y muestras de color

- Agregar en la selección pública Tina inserta al principio; arrastrar/flechas/Pos. y Save/Reset conservan la elección manual. Reemplazos mantienen posición, novedades/hero siguen independientes; no se invierte el renderer ni se publican borradores por descubrimiento.
- Las nueve altas del lote 08–17 preceden a las ocho anteriores, conservadas entre sí. Paletas manuales ES/EN reutilizan los cuadrados existentes, sin cambios de CSS/tokens. Dorado de Messi confirmado por Alejandro; tonos HEX aproximados sin códigos de fabricante ni colores de ambientación.
- Regla y recorrido actualizados en skill, prompts, guía, plantillas, AGENTS/config y README. Revisión anterior ec5de21 tuvo Preview Ready; este cambio material requiere un nuevo Preview y OK posterior antes de main.

## [2026-11-13] — Candidato Shop con fotos de carpetas 08–17

- Nueve fichas nuevas ES/EN y una foto comparativa al final del árbol existente, con variante de mayor tamaño confirmada por Alejandro. PLA confirmado para todo el lote; 28 originales copiados al intake privado con manifiesto de fuentes/hash/alt/orden, sin reemplazar imágenes actuales.
- Selección candidata de 17 piezas, conservando las ocho anteriores, hero y novedades. Sin cambios de diseño, contratos o condiciones comerciales; medidas/stock/códigos de filamento no inferidos de fotos. Rama `codex/alta-shop-08-17`, hasta Preview y parada para OK posterior; no publicado en main. Estado/evidencia en `openspec/changes/alta-shop-lote-08-17/report-2026-11-13.md`.
## [2026-11-13] — Ejemplos reales en prompts de plantilla

- Los cinco prompts (alta, cambio, control, OK de Preview y revisión) incluyen ejemplos reales después de los corchetes: borrador OdontoPro, caso BDM, ficha/foto/campo del Jarrón acanalado y comando existente de selección Shop. Se aclara cómo completar y retirar los ejemplos, y que un borrador existente se completa sin duplicarlo.
- URL/SHA/deployment ID del Preview se mantienen emparejados y señalados como históricos: no son un OK nuevo ni datos que copiar a otra publicación. README y config enlazan/recogen la convención. Solo documentación, sin editar contenido, medios o runtime ni ejecutar controles por esta tanda.

## [2026-11-13] — Bloqueos y avisos para IA local

- Guía condicional `bloqueos-y-avisos.md` enlazada desde AGENTS, CLAUDE, README, skill/operación/perfiles y guía editorial: distinguir Tina sin credenciales locales, índice remoto viejo, conector Vercel 404, 2FA, refs obsoletos del navegador y avisos pnpm/hints/CRLF. Incluye acción acotada, evidencia y límites, sin convertirla en controles extra por carga.
- Recuperación real incorporada al reporte versionado: índice de la rama de trabajo actualizado una vez, 2FA humano, Preview y Production Ready de `e7ce234`, main local/remota sincronizada y URLs comprobadas. El ciclo de OpenCode/DSH sigue pendiente; “conector sin acceso” no equivale a “proyecto inaccesible”. README deja de presentar el acceso remoto como pendiente global.
- Solo documentación e instrucciones; sin cambios de diseño, runtime, contratos, perfiles globales o scripts. No se repiten suites/builds locales ni reindexaciones para documentar lo ya observado.

## [2026-11-13] — Rutina de IA local propia del portfolio

- Nueva decisión Git de Alejandro: main local/remota limpia y actualizada como base; cada encargo nuevo crea `codex/<tarea>` y los retomados continúan su rama. Tras Preview y OK posterior, integrar y volver a main limpia, sin worktrees ni ramas por tanda. Sustituye las restricciones anteriores de no crear ramas por encargo en AGENTS/CLAUDE/config/guías/prompts y perfiles Windows.
- Preparación de integración de fuentes pendientes y borradores conservados como draft; evidencia bruta de output/Playwright permanece local y respaldada, y daemon.pid deja de versionarse. No se publica esa evidencia como contenido. El cambio de prueba de BDM en Tina se descarta por indicación de Alejandro, preservando su historial.

- Revisión adicional de README, AGENTS, CLAUDE, guía, skill/prompts y skill Astro: Vercel y `vercel.json` como destino/build documentados; contratos Tina separados para artículos ES/EN, páginas, globales, orden visual, fichas y selección Shop. Esquema/formularios, tema e índice/orígenes Cloud no son intercambiables.
- Protección explícita de tokens y maqueta: `--clr-brand-*`/SCSS públicos y `--al3-admin-*`/`--tina-*` del admin aislados de sitio/iframe. Conservar componentes, variantes, anchos, espacios, tipografía, temas y responsive; informar cuando el material no encaje en lugar de rediseñar. CLAUDE completa reglas Git, AGENTS completa colecciones y ambos corrigen Node a `24.x` y gray-matter a dependencia declarada. Cambios solo documentales, revisados por diff sin repetir controles.

- Skill `portfolio-editorial`, prompts para alta/cambio/OK y mapa operativo Astro/Tina/Shop. Diseño fijo, rama activa y parada humana tras Preview identificado; no se traslada el carril Netlify/editorial-tina de OdontoPau.
- Runner Node sin dependencias nuevas: copia temporal selectiva de HEAD + archivos propios, sellado de estado publicable solo en copia, integridad y sondas HTTP explícitas sin commits/builds/deploys automáticos. No sustituye contratos, revisión visual ni identidad del hosting.
- Perfiles OpenCode propios y presets Portfolio anexados a DSH con backup verificado, sin tocar modelos/proveedores/permisos globales. UI y publicación real todavía no acreditadas.
- Netlify marcado histórico, scripts Shop congelados detenidos antes de crear candidatos y ejemplos de bypass Cloud retirados del prompt antiguo. Reglas/guía/README/CLAUDE actualizados preservando trabajo previo. Estado, comprobaciones y pendientes en `openspec/changes/rutina-ia-local-portfolio/report-2026-11-13.md`.

## [2026-11-10] — Acceso visual de artículos desde Tina Cloud

- El router rechazaba los clics del listado Cloud porque reciben solo `_sys`, sin título. Ahora un resolver asíncrono comprueba la página pública del mismo origen y abre el editor visual si existe. Mantiene el formulario ante 404, protección, redirección, error o timeout; los borradores continúan en revisión local.
- Pages mantiene sus rutas por filename. Sin cambios de esquema, estilos, contenido o secretos. Router 7/7; tipos 0 errores/0 warnings. Publicado `8ed01ec`, deployment `5RYBGunh7` Ready 10/11 13:56:52 ART: BDM abre visual desde Projects y Home desde Pages, con iframe y Save deshabilitado, sin guardados Cloud. Skill Astro local actualizada. Evidencia: `docs/REPORT-2026-11-10-tina-visual-router.md`; resultado agregado localmente después del release para no reconstruir solo documentación.

## [2026-11-10] — Listas editoriales y paginación compartidas

- Publicado64e720b enmain, deployment9EHDs8J3KReady10/11 12:28:43ART. Índicemain actualizado una vez; reintento acotado tras ERR_CLOUD_CHECK_FAILED. Tipos0 errores/0warnings; pruebas3/3 y recorrido local restaurado. HTTP200 admin/home/tienda/CSS; bundleindex-Dmf9-oIG y caché20261110-6. Resultado agregado localmente después del despliegue para no reconstruir solo documentación.

- Portfolio y selección Shop pasan al mismo componente `EditorialOrderList`, con tokens semánticos de fila, miniatura, acciones y paginador en admin.css. Caché candidata 20261110-6; scroll general nativo y disposición por ancho de contenedor.
- Diez filas por página, selector 10/20/50, flechas y destino global Pos. La página visible nunca sustituye a la lista completa al guardar. Arrastre acotado a la página con Escape/restauración y alternativa por controles.
- Shop conserva alta/reemplazo/retiro de referencias, novedades hasta tres y hero nativo. Antes de retirar/reemplazar una referencia utilizada, pide cambiar hero/novedades. No borra fichas ni guarda automáticamente.
- Contratos editoriales sin cambios. Pruebas de preservación entre páginas preparadas; sin ejecución, build ni publicación. Recorrido de UI/Save/Reset/reapertura/restauración pendiente. Estado en `openspec/changes/listas-editoriales-paginadas/`.

## [2026-11-10] — Orden visual dentro de su colección

- Ajuste posterior desde captura: el campo personalizado era hijo flex sin ancho explícito. Ahora ocupa todo el ancho, normaliza whitespace y alinea el padding al FieldWrapper de Tina. Filas compactas con acciones iconográficas, miniatura o placeholder neutro y título adaptable. Contenedor al3-order cambia de distribución según el ancho real (28rem); targets 44px, sin recorte de texto/controles. Caché 20261110-4. Pendiente observación visual; no se modifica orden ni persistencia.
- Nueva captura del usuario mostró doble scroll: retirados altura máxima y overflow propios de la lista. Autoscroll de arrastre usa FormWrapper, conservando un único desplazamiento general y Save/Reset nativos. Caché 20261110-5; pendiente revisión visual/drag posterior.
- Cierre de tipos del rediseño de ancho: 178 archivos, 0 errores, 0 warnings y 100 hints. Revalida el adaptador unknown/guards del campo nativo. El ajuste posterior de scroll tiene revisión de fuentes, sin repetir ese control; guardado/reapertura y publicación siguen pendientes.

- Por pedido de unificar criterio con Shop, el editor pasa directamente a Portfolio · orden visual. Overview conserva estadísticas, inventario y filtro, sin botón/editor ni parámetro de apertura. Se retira el enlace intermedio ProjectOrderAccess.
- ProjectVisualOrderField conecta scopes a input.value/onChange del formulario Tina. Save/Reset nativos confirman/descartan todos los ámbitos juntos; no hay API de escritura propia ni guardado al arrastrar. La carga mantiene el orden existente; el primer movimiento prepara la migración y solo Save la persiste. Se documenta coordinación entre sesiones, sin atribuirle la relectura/CAS que no tiene el formulario nativo.
- Lista continua y selector con tokens admin; caché 20261110-3. README, guía, plantilla y OpenSpec actualizados. Estado y controles en `orden-visual-y-home-movil/native-field-2026-11-10.md`.
- Un control de tipos detectó que Component de schema-tools omite form aunque FieldsBuilder la entrega. Entrada adaptada con unknown/guards sin cast; sin repetir el control. Revalidación y guardado/reapertura/restauración pendientes, sin cierre aprobado.

## [2026-11-10] — Candidato de orden visual, controles móviles y touch

- Continuación desde capturas del usuario: el acceso Portfolio · orden visual deja de mostrar una lista vacía y enlaza al editor completo de Overview. Store 3D · selección pública y borradores quedan consecutivos. Sidebar sin compresión flex y dashboard adaptable por ancho de contenedor; caché admin `20261110-2`. Revisión visual pendiente.
- Global Settings incorpora `navigation.mdx` con listas portfolio/Shop, textos y enlaces ES/EN, validación y consumo compartido desktop/móvil. Plantillas footer/navigation en `tina/global-settings.ts`; footer existente solo añade `_template: footer`, conservando contenido y uso común en ambos sitios. No se afirma Live Preview ni persistencia comprobada para estos campos.
- Consultadas versiones npm: TinaCMS 3.15.2 y CLI 4.0.5, engines CLI 22.x/24.x. Procedimiento documentado para actualizar paquete, CLI y override pnpm; no se instalaron ni reiniciaron servicios durante esta continuación. Ver `menus-globales-y-accesos-tina/report-2026-11-10.md`.
- Cierre acotado de esta continuación: navegación 2/2; Astro 0 errores, 0 warnings y 100 hints en 179 archivos. Revalidada corrección layout de Reorder.Item; sin prueba visual/persistencia, build ni publicación. No se repitieron los nueve contratos de orden ya aprobados.

- Implementado en fuentes el editor Orden visual de Portfolio Overview: miniaturas, arrastre desde asa, Subir/Bajar/Primero, ámbito general/categoría y guardado explícito único mediante Tina. Nuevo singleton `src/editorial/project-order/order.json`, inicialmente vacío; primer guardado captura las prioridades numéricas actuales sin reescribir artículos. Nuevos artículos se agregan al final; lectura fresca detecta cambios concurrentes previos. La carrera entre lectura y mutación sigue requiriendo coordinación de editores.
- Home móvil concentra Filtrar · total y Opciones (vista/copiar/exportar). Paginación compacta al final y un anuncio accesible de resultados; sin total repetido. Desktop conserva controles y resumen existentes.
- Pointer Events incorpora contacto táctil/pen, fin/cancelación y prevención de doble onda del click sintetizado. Listeners pasivos, limpieza y reduced-motion conservados; no se bloquea el scroll/zoom del sitio. Square usa luz breve; hexagonal incorpora onda y estela acotada.
- CSS del editor centralizado en `public/admin-theme/admin.css`, caché `20261110-1`. Guías, README, plantilla y OpenSpec actualizados. Pruebas nuevas preparadas; consultar `openspec/changes/orden-visual-y-home-movil/report-2026-11-10.md` para distinguir controles ejecutados y pendientes. Sin migración guardada, build, publicación ni regeneración manual de Tina en esta tanda.

## [2026-11-06] — Orden editorial desde Portfolio Overview

- Build de producción inicial bloqueado correctamente por índice main antiguo de Tina Cloud (GraphQL 2.4.1 frente a 4.1.0). Se prepara reindexación de main sin omitir controles y se fija `engines.node: 24.x` para evitar que Vercel seleccione automáticamente Node 26.
- Filtros laterales de home contenidos en anchos intermedios mediante tracks `minmax(0,1fr)` y etiquetas ajustables. Observados 1100 y 390 px sin desborde; versión móvil sin misión/metadatos y 32 px de aire bajo el topbar. Guardados de prueba de Ingest Monitor/BDM reemplazados por sus versiones previas, por pedido expreso.
- Dashboard: alineados buscador, selector, ayuda y tabla; controles numéricos/select/buscador centralizados en `public/admin-theme/admin.css`, con clases `al3-admin-control`/`al3-admin-order-*`, superficies y foco del sistema Tina, alto mínimo 44 px. Caché `20261106-1`. Revisión visual local y coordenadas coincidentes del margen izquierdo.
- Corrección comprobada: contratos 6/6, Astro sin errores ni warnings (86 hints), orden general y de categoría guardados/reabiertos/restaurados en Tina local. Copia exacta del artículo restaurada; sin build ni publicación. Detalle en el reporte de `orden-editorial-dashboard`.
- Home: separación del encabezado respecto del topbar fijo usando tokens; misión y estado/ubicación/zona horaria ocultos bajo `md` (48em), con menor espacio vertical antes de los proyectos en móvil. Campos Tina conservados. Este ajuste posterior tiene revisión de fuentes, pendiente de comprobación visual al cierre.
- Prueba local detectó pérdida de campos al guardar un payload parcial desde el nuevo dashboard. La ficha de prueba se restauró exactamente y se bloqueó temporalmente el guardado. La continuación reemplaza ese envío por `_values` completo, transformación de esquema y `TinaAdminApi.updateDocument`, siguiendo el formulario nativo. Incluye rechazo de lecturas incompletas y posiciones mal formadas. El candidato vuelve a habilitar el control; la corrección y sus nuevos casos de preservación siguen pendientes de comprobación. Los contratos anteriores de orden pasaron 3/3. Los dos errores del validador se corrigieron después del control de tipos y requieren nueva comprobación.

- Preparados controles numéricos por fila para el orden general y posiciones específicas de categoría. La consulta usa cursores para recorrer el inventario. Guardados mediante la sesión de Tina, con relectura previa y bloqueo de escrituras simultáneas desde el dashboard.
- El sitio y el dashboard comparten comparador ascendente. Las categorías heredan el orden general y el orden ausente conserva el cero usado por el sitio. El filtro ordena antes de paginar y elegir el destacado.
- Contratos conectados en Tina, schema Astro, tipos, plantilla y documentación. Producción consultada el 06/11 sigue en el despliegue Ready del 30/10, con Tina 3.8.1 y apariencia anterior. La actualización preparada sigue pendiente de publicación.

## [2026-11-04] — Navegación de la revisión local de artículos

- Tina detectaba el párrafo vacío que Plate inserta al montar `Body` como una edición. `tina/config.ts` normaliza ese caso en `projects.body`. En Chrome local se observó Save deshabilitado al abrir, habilitado al escribir y deshabilitado al borrar la letra de prueba.

- El selector ES/EN conserva la ruta de revisión al cambiar de idioma, también en artículos publicados. La navegación desde el sitio público sigue usando las rutas públicas. Cambio en `src/lib/project-editorial.ts`, revisado por lectura. La carga inicial del iframe y el aviso de cambios al montar siguen en diagnóstico.

## [2026-11-03] — Sistema visual Tina y continuidad editorial

- Corrección local del menú de formato de artículos: iconos/check de opción seleccionada oscuros se conectan a tokens del tema; toolbar neutro consistente, cache-version 20261103-1. Observado sin guardar el artículo. Indicador dirty al montar e iframe vacío registrados como pendientes; sin build/publicación, diferidos al final por el usuario.

- Guardados Cloud integrados por fast-forward a fb5b4a9, sin tocar trabajo local ajeno ni publicar. Revisión por lectura de manifests/lock: dependencias directas admiten React19, pero react-final-form 6.5.9 transitivo solo declara React16/17/18. No se cambian versiones o controles para ocultarlo; riesgo y límites en compatibility-2026-11-03.md.

- Carga manual del usuario en Tina seguida de alta/reapertura y selección local comprobadas: novena pieza, hero y primera novedad reflejados con imagen derivada cargada. Selección restaurada al hash original, temporales retirados y catálogo nuevamente de ocho piezas. Sin otro dev, build, Cloud o producción; filechooser automatizado continúa sin acreditarse. Evidencia en report-2026-11-03-local-upload.md.

- Tras habilitación de archivos informada por el usuario, el selector automatizado siguió sin responder (click y Enter). Sin carga ni cambios de catálogo. Se reutilizó el dev existente, corrigiendo lectura inicial de puertos; la rutina ahora exige contrastar sesión/servidor y no atribuir timeouts a permisos sin evidencia.

- Control local autorizado de imagen/selección detenido en selector de archivos de Chrome (sin upload/guardado). Ficha descartada, sin archivos temporales, selección intacta; dev iniciado una vez y disponible en 4322. Rutina de upload real y restauración documentada en config/guía; reporte de alcance separado en alta-piezas-shop-desde-tina.

- Directivas reutilizables centralizadas en `openspec/config.yaml`, con reglas por artefacto para propuesta/diseño/tareas. Se retiraron del YAML los commits, URLs temporales y resultados de sesión; permanecen en reportes/handoff. AGENTS/README distinguen reglas, procedimientos y evidencia, y aclaran que su disponibilidad entre ramas depende de incorporar los archivos por Git.

- Control Cloud completado: nota del árbol guardada/reabierta y restaurada/reabierta, formulario limpio. Commits c0d8fec/fb5b4a9; únicamente salto de línea final distinto tras restaurar datos. Sin build manual ni producción; upload/selección siguen pendientes. AGENTS incorpora registro continuo de cambios/rutinas.

- Handoff operativo `docs/HANDOFF-2026-11-03-tina-cloud-admin.md`: actualización, reindexación de rama y origen Preview exacto habilitado con permiso; registra bloqueo de login y que ninguna nota fue editada. Próximos pasos y autorizaciones diferenciados de evidencia.

- TinaCMS 3.15.1 / CLI 4.0.4, copia alineada mediante override; tema grafito propio en `public/admin-theme/admin.css`, instalado solo en `/admin` por `src/lib/admin-theme.ts` desde `cmsCallback` de `tina/config.ts`.
- Tokens `--al3-admin-*`, puente `--tina-*`, Inter local e iconos Lucide: navegación y edición diferenciadas, escala neutra de 18 px, pills informativas, fondos/scroll y Overview fullscreen. El iframe y el sitio público conservan sus temas.
- Selección pública Shop editable en `tina/shop-catalogue.ts` / `src/editorial/shop-catalogue/catalogue.json`; fotos derivadas mediante `scripts/lib/shop-catalogue-plugin.mjs`. Borradores no se publican por guardarlos.
- README, `openspec/config.yaml`, `docs/GUIA_EDITORIAL_IA.md` y `docs/TINA_ADMIN_THEME.md` explican dónde cambiar formularios, contratos, plantillas, imágenes, colores, renderer, social, RSS y Live Preview. Las plantillas bilingüe/Shop existentes siguen siendo borradores reutilizables; no se duplicaron diseños.
- Evidencia previa: tipos 0 errores/0 warnings, contratos 6/6, candidato `df001b1` enviado a rama activa; primera Preview falló por índice Cloud antiguo. Reindexación de esa rama y una reconstrucción terminaron Ready, 62 páginas, artefacto Shop sin errores. No producción. Reporte: `openspec/changes/tema-admin-tina/report-2026-11-03.md`.
- Esta actualización documental no ejecuta nuevos controles ni publica. Persistencia Cloud, upload nuevo, selección desde el editor y revisión de peers mantienen su estado separado.

---

## [2026-05-31] — Depuración fina SASS sin aliases legacy

### Objetivo

Cerrar la alineación con `C:\www\aledesign-portfolio-2025`, eliminando aliases de compatibilidad que ya no tenían consumidores y preservando sólo mapas funcionales que alimentan la API Sass.

### Cambios realizados

- Eliminados aliases tipográficos legacy `$fs-*`, `$fw-*`, `$font-size-xs..8xl` y `$font-size-aliases`.
- Normalizados consumidores restantes a `fs("100".."1200")`, `$font-size-*` numéricos y `$font-weight-*`.
- `fs()` quedó como función directa sobre CSS custom properties `--fs-*`, sin fallback de aliases.
- Eliminados aliases de color legacy `$clr-brand-*`, `$colors`, `$primary-accent`, `$secondary-accent` y `$tertiary-accent`.
- Normalizados consumidores de color a `semantic-color(brand-*)` y `clr("family", "shade")` según corresponda.
- Eliminados aliases internos sin consumidores `$body-bg`, `$body-text`, `$body-font`, `$mono-font` y `$heading-font`.
- Preservados mapas funcionales `$font-families`, `$font-weights`, `$semantic-colors`, `$semantic-fonts`, `$layout-tokens`, `$containers` y `$radii` porque alimentan funciones Sass.
- README y plantilla de migración actualizados para distinguir mapas funcionales de aliases legacy.
- La plantilla `PROMPT_MIGRACION_TAILWIND_A_SASS.md` quedó agnóstica y autosuficiente: ya no depende de tener disponible el proyecto base 2025 para poder aplicarse en repos nuevos.
- Preservado el build de producción para Netlify: `pnpm run build` sigue ejecutando `tinacms build && astro build`, con credenciales reales de Tina Cloud desde variables de entorno.
- Agregado `pnpm run build:local` para compilar local/offline con `tinacms dev --port 4002 --datalayer-port 9001 -c "astro build"`, evitando consultar un schema ajeno si otro proyecto ocupa `4001/9000`.
- Actualizado `pnpm run dev` para usar puertos locales propios: Tina `4002`, datalayer `9001` y Astro `4322`, evitando conflictos con OdontoPia u otros proyectos Tina en `4001/9000/4321`.
- Actualizado `PortfolioDashboard.tsx` para resolver imágenes locales desde Tina `4002` hacia Astro `4322`, manteniendo compatibilidad con `4001` → `4321`.

### Verificación

- `rg` confirma que no quedan aliases legacy tipográficos/color en `src/styles`.
- `git diff --check` sin errores.
- `pnpm run build:local` construye correctamente 9 páginas con Tina local y Astro.
- Tina imprime un warning residual de `Invalid hook call` durante el indexado posterior de `build:local`, pero el proceso termina con código 0. `pnpm run build` queda reservado para Netlify/Tina Cloud o entornos locales con credenciales reales.

---

## [2026-05-30] — Depuración SASS de aliases, tokens y mixins

### Objetivo

Alinear el sistema SASS con la lógica de `C:\www\aledesign-portfolio-2025` sin romper la API usada por los CSS Modules actuales.

### Cambios realizados

- `_breakpoints.scss` quedó como mapa puro `$breakpoints`.
- `mq()` se movió a `_mixins.scss`, junto con `heading()` y los mixins visuales existentes.
- Se agregaron aliases canónicos del sistema fuente:
  - `$font-size-xs..8xl` como puente hacia `$font-size-100..1200`
  - `$font-weight-default`, `$font-weight-medium`, `$font-weight-semi-bold`, `$font-weight-bold`
  - `$body-text-color`, `$body-background-color`, `$heading-1-font-size`, `$heading-2-font-size`, `$heading-3-font-size`
- Se movieron decisiones editables de layout desde `_sizes.scss` hacia `_tokens.scss`:
  - `$container-max`
  - `$radius-soft`
  - mapas `$containers` y `$radii`
- `container()` y `radius()` ahora leen sus mapas desde `_tokens.scss`.
- README actualizado con la regla de depuración: respetar aliases del 2025, mantener aliases propios sólo como compatibilidad y ubicar mixins en `_mixins.scss`.

### Decisión técnica

No se eliminan aliases usados por los módulos actuales. La limpieza se hace por migración progresiva de consumidores y recién después se retiran puentes sin uso.

---

## [2026-05-29] — Consolidación SASS con maps/functions y arquitectura compartida

### Objetivo

Llevar el sistema SASS del portfolio al mismo nivel de arquitectura usado en OdontoPia, respetando las diferencias del proyecto: CSS Modules, abstracts inyectados por `astro.config.mjs` mediante `additionalData`, estética dark editorial/terminal y reglas de diseño propias como la "No-line rule".

### Cambios realizados

#### `src/styles/abstracts/`
- Agregado `src/styles/abstracts/_functions.scss` como API de lectura para mapas:
  - `clr(*)`
  - `semantic-color(*)`
  - `size(*)`
  - `container(*)`
  - `radius(*)`
  - `ff(*)`
  - `fs(*)`
  - `fw(*)`
  - `ls(*)`
  - `lh(*)`
  - `layout(*)`
  - `semantic-font(*)`
- Agregados mapas SASS en:
  - `_colors.scss` → `$colors`
  - `_sizes.scss` → `$sizes`, `$containers`, `$radii`
  - `_typography.scss` → `$font-families`, `$font-sizes`, `$font-weights`, `$letter-spacings`, `$line-heights`
  - `_tokens.scss` → `$semantic-colors`, `$semantic-fonts`, `$layout-tokens`
- Actualizado `_breakpoints.scss` para usar mapa `$breakpoints` y un mixin `mq()` validado, con valores en `em`:
  - `sm: 40em`
  - `md: 48em`
  - `lg: 64em`
  - `xl: 80em`
- Actualizado `_index.scss` para exportar `functions`.

#### Alineación con `aledesign-portfolio-2025`
- La referencia local queda fijada en `C:\www\aledesign-portfolio-2025\src\styles`.
- `_colors.scss` ahora incluye primitivas privadas `$-clr-*` y mapas `$light` / `$dark`.
- Se mantuvieron los tokens existentes `--clr-brand-*` para no romper el theme actual, pero se agregó la capa base `neutral`, `primary`, `secondary` y `accent` con shades numéricos.
- `_tokens.scss` centraliza `$active-theme` y `$enable-media-query-dark-mode`.
- `_globals.scss` genera CSS custom properties desde `$active-theme`, igual que el `_root.scss` del portfolio 2025.
- `_typography.scss` cambió a `$font-sizes` responsive (`small`, `large`) con numeración amplia (`100`, `200`, `300`, `900`, `1000`, `1200`).
- `fs()` ahora acepta valores numéricos y mantiene aliases previos (`xs`, `base`, `"6xl"`, `"8xl"`).
- `clr()` ahora acepta la firma `clr($color, $shade, $scheme: $active-theme)` y conserva compatibilidad con `clr(brand-primary)` y demás aliases usados por los módulos actuales.
- `README.md` y `PROMPT_MIGRACION_TAILWIND_A_SASS.md` documentan la lógica 2025 para reutilizarla en futuras conversiones.

#### `src/styles/layout/` y `src/styles/utilities/`
- Agregada carpeta `layout/` con helpers globales:
  - `.cluster`
  - `.even-columns`
  - `.grid-auto-fit`
  - `.pile`
- Agregada carpeta `utilities/` con utilidades globales:
  - `.container`
  - `.flex-group`
  - `.flow`
  - `.round-soft`
  - `.round-full`
  - `.text-center`, `.text-start`, `.text-end`
  - `.uppercase`
- Actualizado `src/styles/main.scss` para importar `layout` y `utilities`.

#### Refactor de consumidores SCSS
- Refactorizados estilos en `base/`, `components/` y `pages/` para consumir funciones en lugar de variables directas cuando existe token exacto.
- Se preservó la convención existente de CSS Modules (`*.module.scss`).
- No se agregaron imports manuales redundantes de abstracts en los módulos porque el proyecto ya usa `vite.css.preprocessorOptions.scss.additionalData`.

#### Documentación
- Agregada `PROMPT_MIGRACION_TAILWIND_A_SASS.md` como plantilla reusable para futuras migraciones de Tailwind a SASS tokenizado.
- La plantilla fue ajustada para contemplar proyectos con CSS Modules y abstracts inyectados por `additionalData`.
- La plantilla mantiene `src/styles/main.scss` como entry point global, alineado con `aledesign-portfolio-2025`.

### Decisión técnica

El portfolio seguirá usando CSS Modules como política de encapsulamiento por componente/página. A diferencia de OdontoPia, donde el BEM global es aceptable por tratarse de una landing/app médica con secciones globales, este proyecto se beneficia de módulos scoped porque tiene páginas y componentes reutilizables con composición más editorial.

### Verificación

- Auditoría de variables directas en estilos consumidores: sin resultados.
- Auditoría de reemplazos corruptos: sin resultados.
- `pnpm exec astro build` compiló los entrypoints de Vite/SASS, pero falló durante prerender por un problema de TinaCMS no relacionado con estilos:
  - `Cannot query field "pages" on type "Query"`.
- `pnpm exec astro check` continúa fallando por errores preexistentes de Tina/TypeScript:
  - `match` no reconocido en templates de `tina/config.ts`.
  - Tipos `unknown`/`possibly undefined` en `tina/dashboard/PortfolioDashboard.tsx`.

### Próximo trabajo recomendado

- Resolver la incompatibilidad actual de TinaCMS schema/query antes de usar `build` como verificación completa.
- Mantener `additionalData` como fuente global de abstracts y evitar `@use` repetido en cada CSS Module.
- Continuar consumiendo la API de funciones en nuevos estilos.

---

## [2026-05-20] — Cursor de terminal parpadeante interactivo en el buscador de Resume

### Objetivo
Implementar un cursor parpadeante estilo terminal (un caret block verde neón) al inicio del buscador de la página Resume cuando está vacío, logrando que destaque de manera interactiva su capacidad de búsqueda, con una animación de desvanecimiento ("fade") sumamente fluida y soporte progresivo para el cursor nativo de escritura en navegadores modernos.

### Cambios realizados

#### `src/components/ClientResume.tsx`
- **Estructura HTML**: Envolvimos el `<input>` dentro de un contenedor relativo `div` con la clase `styles.resume__inputWrapper` y agregamos un `<span className={styles.resume__caret} />` condicional cuando `searchQuery === ''`.
- **Limpieza de TypeScript**: Añadimos tipado explícito a la constante `experiences` (`string`, `string[]`) para resolver 6 errores implícitos de tipo `any` preexistentes en TypeScript y lograr una compilación perfectamente limpia.

#### `src/styles/pages/_resume.module.scss`
- **`&__inputWrapper`**: Define el contexto de posicionamiento relativo para el cursor personalizado.
- **`&__caret`**: Cursor bloque retro de terminal de `8px` de ancho, color verde neón (`$clr-brand-primary`), opacidad inicial del `75%` y un resplandor sutil. Configurado con animación suave de respiración (`ease-in-out` de `1.4s`) y transición de opacidad de `0.2s` para entrada/salida.
- **Transición suave en focus**: La regla `&__input:focus ~ &__caret` remueve la animación y reduce la opacidad a `0` para que el cursor personalizado haga un fade-out suave al hacer foco, en lugar de ocultarse abruptamente.
- **`&__input`**: Agregado `caret-shape: block` para que el cursor nativo de escritura de los navegadores basados en Chromium (Chrome, Edge, Opera, etc.) también se renderice como un bloque sólido retro, haciendo juego perfecto.
- **`&::placeholder`**: Agregado `text-indent: 14px` para desplazar a la derecha únicamente el texto del placeholder cuando el buscador no tiene foco, garantizando que el cursor de `8px` parpadee libremente en ese espacio sin solapar las letras.
- **`@keyframes resume-caret-blink`**: Define el ciclo de respiración suave de la opacidad del cursor personalizado.

### Archivos modificados

| Archivo | Tipo | Descripción |
|---------|------|-------------|
| `src/components/ClientResume.tsx` | MOD | Input wrapper, span del cursor dinámico y tipado explícito de `experiences` |
| `src/styles/pages/_resume.module.scss` | MOD | Estilos del wrapper, cursor, transición en focus, `caret-shape: block`, `text-indent` en placeholder y keyframes |

---

## [2026-05-12] — Imágenes responsive por contexto (portrait en desktop, landscape en mobile)

### Objetivo

Resolver el problema de que una sola imagen de proyecto se usaba tanto en las tarjetas del home (3:4 portrait) como en el hero del detail page (21:9 landscape), causando crops/estiramientos indeseados. Se implementó un sistema de dos imágenes por proyecto con switch automático según viewport.

###  Cambios

#### `tina/config.ts`
- Campo `image` renombrado a **"Cover Image (Landscape)"** — imagen apaisada para el hero del detail page.
- Nuevo campo **`imagePortrait`** (`type: "image"`) — **"Card Image (Portrait 3:4)"** — imagen vertical optimizada para las tarjetas del home.
- Ambos campos son opcionales. Si `imagePortrait` no se define, se hace fallback a `image` (comportamiento anterior).

#### `src/content.config.ts`
- Agregado `imagePortrait: z.string().optional()` al schema Zod de `projectsCollection` (línea 18).

#### `src/components/ClientHome.tsx`
- **Featured image** (línea ~179): reemplazado `<img>` por `<picture>` con `<source media="(max-width: 768px)" srcSet={image}>`. En mobile carga la landscape, en desktop la portrait.
- **Grid card images** (línea ~236): mismo patrón `<picture>` con media query.
- Fallback a `image` cuando `imagePortrait` no está definido.

#### `src/styles/pages/_home.module.scss`
- **Featured container** (`&__featuredImageContainer`): `aspect-ratio: 16 / 9` en mobile, `3 / 4` en desktop (`@include mq(md)`).
- **Grid card container** (`&ImageContainer`): mismo patrón — `16 / 9` en mobile, `3 / 4` en desktop.

### Comportamiento resultante

| Viewport | Imagen | Aspect ratio |
|----------|--------|--------------|
| Mobile (≤768px) | `image` (landscape) | 16:9 |
| Desktop (>768px) | `imagePortrait` (o fallback a `image`) | 3:4 |

El navegador carga solo la imagen que necesita gracias al elemento `<picture>` con `media` query — no hay doble request.

### Archivos modificados

| Archivo | Tipo | Descripción |
|---------|------|-------------|
| `tina/config.ts` | MOD | Campo `imagePortrait` agregado, `image` renombrado |
| `src/content.config.ts` | MOD | `imagePortrait` en schema Zod |
| `src/components/ClientHome.tsx` | MOD | `<picture>` con media query en featured y grid cards |
| `src/styles/pages/_home.module.scss` | MOD | Aspect ratio responsive (16:9 mobile → 3:4 desktop) |

---

## [2026-05-12] — Sistema de fondo energy-grid con spotlights GPU y cursor interactivo

### Objetivo

Reemplazar el sistema de fondo animado anterior (`grid-reveal-bg` con `transform: translate` en pseudo-elementos de 200vw×200vh) por un sistema más eficiente y visualmente superior basado en `@property` CSS para animación de custom properties en el compositor GPU. Se añadió además un efecto interactivo de relleno de celdas de la grilla al mover el cursor.

### Cambios

#### `src/styles/abstracts/_mixins.scss`

- **Eliminados:** keyframes `drift-1` / `drift-2` y mixin `grid-reveal-bg`.
- **Agregados:**
  - `@property` declarations para `--eg-x1/y1`, `--eg-x2/y2`, `--eg-x3/y3`, `--eg-pulse` — registran los valores como `<percentage>` o `<number>`, habilitando interpolación directa en el compositor GPU sin pasar por el main thread.
  - Keyframes `eg-drift-1` (26s), `eg-drift-2` (34s), `eg-drift-3` (42s) y `eg-pulse` (5.8s) que animan únicamente las coordenadas `--eg-x/y` de cada spotlight.
  - Mixin `energy-grid-spot` — dibuja un grid coloreado a pantalla completa recortado por un `mask-image: radial-gradient` cuyo centro se desplaza vía las custom properties animadas. Soporta parámetros de color, radio, tamaño de grilla y opacidades de glow.
  - Mixin `energy-grid-bg` — wrapper del sistema. Configura el fondo y aplica los tres spotlights (primary, tertiary, secondary). Incluye regla de `mix-blend-mode: multiply` para `.light &` (tema claro) y soporte de `prefers-reduced-motion`.

#### `src/styles/base/_globals.scss`

- Clase `.bg-grid-reveal` renombrada a `.bg-energy-grid` usando el nuevo mixin `energy-grid-bg()`.

#### `src/layouts/MainLayout.astro`

- HTML del fondo actualizado: `<div class="bg-energy-grid">` con 3 hijos `<div class="eg-spot eg-spot--{color}">`.
- **Script inline cursor grid-fill:** crea un `<canvas>` dinámicamente dentro del wrapper. En cada `mousemove` (throttleado con `requestAnimationFrame`) calcula las celdas de 48px cercanas al cursor dentro de un radio de ~77px y las pinta con `fillRect` alineado exactamente a la grilla. La opacidad de cada celda decae linealmente con la distancia al cursor (máx. 18%). Funciona solo en dispositivos `pointer: fine`. Cambia entre `mix-blend-mode: screen` (dark) y `multiply` (light) mediante `MutationObserver` en el `classList` de `<html>`.

### Decisiones técnicas

| Decisión | Razón |
|----------|-------|
| `@property` en lugar de `transform` | Las custom properties registradas se interpolan en el compositor sin repaints ni layout; los `transform` en capas de 200vw×200vh forzaban compositing layers costosas |
| Solo 3 `eg-spot` (sin `eg-sweep`, `eg-nodes`, `eg-glow`, `eg-beams`) | Balance entre efecto visual y rendimiento; los spotlights son la capa de mayor impacto con el menor costo |
| Canvas para el cursor | El efecto requiere celdas discretas alineadas a la grilla; no es posible replicarlo fielmente con `mask-image` circular en CSS |
| `mix-blend-mode: multiply` en light mode | `screen` es invisible sobre fondos claros (suma hacia blanco); `multiply` oscurece y hace la grilla visible sobre el fondo claro |

### Archivos modificados

| Archivo | Tipo | Descripción |
|---------|------|-------------|
| `src/styles/abstracts/_mixins.scss` | MOD | Nuevo sistema `@property` + keyframes + mixins `energy-grid-spot` y `energy-grid-bg` |
| `src/styles/base/_globals.scss` | MOD | `.bg-grid-reveal` → `.bg-energy-grid` |
| `src/layouts/MainLayout.astro` | MOD | Nueva estructura HTML del fondo + script canvas cursor |

---

## [2026-05-12] — Refactor y mejora de grid-reveal-bg

### Objetivo
Optimizar la implementación técnica y el diseño visual de la animación de fondo principal (`grid-reveal-bg`) basándose en feedback de diseño.

### Cambios realizados

#### Refactorización HTML/CSS (`MainLayout.astro` y `_mixins.scss`)
- Se eliminaron los divs vacíos `.wireframe-grid` y `.wireframe-grid-2` en `MainLayout.astro` que ensuciaban el DOM.
- Las dos luces animadas (`drift-1` y `drift-2`) ahora se aplican de forma limpia utilizando pseudo-elementos (`&::before` y `&::after`) en el contenedor `.bg-grid-reveal`.

#### Ajustes de diseño "Calma"
- **Velocidad:** Las animaciones de las luces se ralentizaron sustancialmente (de 40s/50s a 90s/110s) con una curva de easing (`ease-in-out`) para lograr un movimiento mucho más tranquilo.
- **Difuminado:** Se modificó el `mask-image` de los pseudo-elementos. En lugar de partir de un 100% de opacidad en el centro, inician con un 50% de opacidad (`rgba(0,0,0,0.5)`) y se funden progresivamente en un radio más amplio, logrando que el centro de la luz se perciba mucho más suave y orgánico ("difuminado").

### Archivos modificados

| Archivo | Tipo | Descripción |
|---------|------|-------------|
| `src/layouts/MainLayout.astro` | MOD | Eliminación de nodos innecesarios del DOM |
| `src/styles/abstracts/_mixins.scss` | MOD | Refactorización a pseudo-elementos, ajuste de timings y mask-image |

## [2026-05-11] — Fallow-02: limpieza de dependencias y archivos MDX rotos

### Objetivo

Segunda pasada de análisis estático con Fallow (dead-code, unused deps, duplicación). Se resolvieron los problemas que causaban fallos en el build de Netlify y se formalizó una dependencia transitiva que podía romper en CI.

### 🧹 Archivos eliminados

| Archivo | Motivo |
|---------|--------|
| `src/content/projects/FOlder-agrado.mdx` | Nombre con mayúsculas causaba case-mismatch silencioso (`p.id` es lowercase en Astro v6). El proyecto ya estaba archivado. |
| `src/content/projects/La-verdad-de-la-mila.mdx` | Proyecto huérfano sin imagen válida, causaba error de build en Netlify. |

### 📦 Cambios en `package.json`

| Paquete | Cambio | Motivo |
|---------|--------|--------|
| `react-dnd` | **Eliminado** de `dependencies` | Nunca fue importado en el código activo. La funcionalidad de drag-and-drop proyectada quedó descartada. |
| `react-dnd-html5-backend` | **Eliminado** de `dependencies` | Peer dep de `react-dnd`, también innecesario. |
| `gray-matter` | **Agregado** a `dependencies` | Era una dependencia transitiva usada explícitamente en 3 archivos (`index.astro`, `[...slug].astro`, `rss.xml.ts`). Sin listarlo en `package.json`, el build falla con package managers estrictos o en entornos CI sin hoisting. |

### 📊 Resultado del análisis Fallow completo

| Métrica | Valor |
|---------|-------|
| Health Score antes | 62/100 (C) |
| Health Score después | ~80/100 (B+) |
| Archivos muertos eliminados | 2 |
| Dependencias eliminadas | 2 (producción) |
| Duplicación de código | 0.0% |
| Dependencias circulares | 0 |

> **Nota sobre `tina/dashboard/`**: Fallow reportó `PortfolioDashboard.tsx` y `dashboardQuery.ts` como archivos muertos (fan_in: 0). Son **falsos positivos**: el Dashboard está registrado como Screen Plugin en `tina/config.ts` via import dinámico que Fallow no traza. No se eliminaron.

### Archivos modificados

| Archivo | Tipo | Descripción |
|---------|------|-------------|
| `src/content/projects/FOlder-agrado.mdx` | ELIMINADO | Case-mismatch bug + proyecto archivado |
| `src/content/projects/La-verdad-de-la-mila.mdx` | ELIMINADO | Proyecto huérfano, rompía build de Netlify |
| `package.json` | MOD | Removidos `react-dnd` + `react-dnd-html5-backend`; agregado `gray-matter` |

---

## [2026-05-11] — Fix: Active Navigation State on Deployed Version

### Problema

La navegación activa (texto verde + subrayado animado) funcionaba correctamente en `localhost:4321/resume`, pero no en `aledesign.dev/resume/` (versión desplegada). El link RESUME permanecía en gris en producción.

### Causa raíz

El componente `Navigation.tsx` hacía una comparación **exacta** de strings:
```ts
const isActive = pathname === link.href;
```

- En localhost: `pathname = "/resume"` vs `link.href = "/resume"` ✅ Match
- En producción: `pathname = "/resume/"` vs `link.href = "/resume"` ❌ No match

Netlify añade trailing slashes automáticamente (`/resume/`), pero los hrefs estaban definidos sin ellos.

### Solución

Se normalizó la comparación en `Navigation.tsx` para strip trailing slashes antes de comparar (excepto en la raíz `/`):

```ts
const normalizedPathname = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
const normalizedHref = link.href === '/' ? '/' : link.href.replace(/\/$/, '');
const isActive = normalizedPathname === normalizedHref;
```

Actualizado en desktop (`.nav__links`, línea ~125) y mobile (`.mobile_overlay__nav`, línea ~224).

### Verificación

- ✅ `localhost:4321/resume` — link verde + subrayado
- ✅ `aledesign.dev/resume/` — link verde + subrayado (post-deploy)
- ✅ Todos los tabs (PROJECTS, RESUME, ABOUT, ARCHIVE) funcionan correctamente en mobile y desktop

### Archivos modificados

| Archivo | Tipo | Descripción |
|---------|------|-------------|
| `src/components/Navigation.tsx` | MOD | Normalización de pathname para active state en deploy con trailing slashes |

---

## [2026-05-11] — Footer CMS + Visual Editing en Home y Proyectos

### Objetivo

Completar la cobertura de TinaCMS Visual Editing en todas las páginas del sitio, e implementar edición CMS para el footer via una nueva colección `global`.

### ✨ Visual Editing — Home (hero section)

Se aplicó el mismo patrón `useTina + tinaField` de las páginas estáticas a `ClientHome.tsx`, limitado al hero section para no afectar la lógica de filtros y layout que depende de estado React.

#### `src/pages/index.astro`
- Reemplaza `getEntry('pages', 'home')` por `client.queries.pages({ relativePath: 'home.mdx' })`.
- `exportMetadata` lee de `tinaProps.data.pages`.
- Pasa `query/variables/data` a `ClientHome`. Toda la lógica de proyectos (`getCollection`, `categoryMap`, `gray-matter`) sin cambios.

#### `src/components/ClientHome.tsx`
- Agrega `useTina` + cast a `PageHome`.
- `tinaField` en: `title` (h1), `mission` (KeyValue), `status`, `location`, `timezone` (tres KeyValues del sidebar).
- Props: `pageMeta` reemplazado por `query/variables/data`. `projects` y `exportData` sin cambios.

### ✨ Visual Editing — Proyectos individuales (enfoque híbrido)

Los proyectos usan MDX con componentes React custom (`mdx-grid`, `mdx-card`) que `TinaMarkdown` no puede renderizar. Se adoptó un enfoque híbrido: `useTina` para frontmatter reactivo, `children` (body MDX) intacto.

#### `tina/config.ts`
- `ui.router` agregado a la colección `projects`: mapea `relativePath` a `/projects/{path}`. Habilita el ícono de Visual Editing en el admin para cada proyecto. Soporta rutas planas y anidadas.
- Campos `timeline` (string) y `codeSnippet` (string, textarea) agregados al schema de projects.

#### `src/content.config.ts`
- `timeline` y `codeSnippet` agregados como `z.string().optional()` al schema Zod de projects.

#### `src/pages/projects/[...slug].astro`
- Agrega `client.queries.projects({ relativePath: \`${entry.id}.mdx\` })` junto a `getStaticPaths` existente.
- Pasa `query/variables/data` a `ProjectDetailLayout`. `getCollection`, `render`, `exportData`, `Content` sin cambios.

#### `src/components/ProjectDetailLayout.tsx`
- Agrega `useTina` + cast a `ProjectData`.
- `tinaField` en: `title`, `type`, `status`, `role`, `client`, `image`, `stack`, `timeline`, `codeSnippet`.
- `project` (prop original) se mantiene solo para breadcrumbs (`project.slug`).
- `children` (body MDX con componentes custom) sin tocar.

### ✨ Footer CMS — nueva colección `global`

#### `src/content/global/footer.mdx` — NUEVO
Seed inicial con `copyright` y `links[]` (GitHub, LinkedIn, Bluesky, YouTube).

#### `tina/config.ts`
- Nueva colección `global` con path `src/content/global`, sin `ui.router` (no es una página navegable).
- Campos: `copyright` (string), `links[]` (objetos con `name`, `url`, `icon`).
- `icon` es un dropdown con 14 opciones de redes sociales.

#### `src/content.config.ts`
- Nueva `globalCollection` con schema Zod para `copyright` y `links[]`.
- Exportada en `collections`.

#### `src/layouts/MainLayout.astro`
- `getEntry('global', 'footer')` → pasa `copyright` y `links` como props a `<Footer>`.
- Footer renderiza estáticamente — 0 JS adicional (sigue siendo `client:idle`).

#### `src/components/Footer.tsx`
- Acepta props `{ copyright, links }` con fallback hardcodeado.
- Íconos de redes sociales via `simple-icons@12` (v12 — v13+ eliminó LinkedIn por solicitud de la empresa).
- `BrandIcon` helper renderiza SVG desde el `path` de simple-icons.
- `ICON_MAP` con 14 entradas en lowercase: `github`, `linkedin`, `instagram`, `twitter` (mapea a `siX`), `facebook`, `youtube`, `tiktok`, `behance`, `dribbble`, `whatsapp`, `telegram`, `discord`, `bluesky`, `pinterest`.
- Cada link renderiza con flexbox: ícono SVG a la izquierda + texto.

#### `src/styles/components/_footer.module.scss`
- `.footer__link`: `display: flex`, `align-items: center`, `gap: $size-2`, `transition: color`.
- `.footer__linkIcon`: `flex-shrink: 0`, `opacity: 0.8`.

### Archivos modificados / creados

| Archivo | Tipo | Descripción |
|---|---|---|
| `src/pages/index.astro` | MOD | TinaCMS client para home, props query/variables/data |
| `src/components/ClientHome.tsx` | MOD | useTina + tinaField en hero (title, mission, status, location, timezone) |
| `tina/config.ts` | MOD | ui.router en projects; timeline/codeSnippet; colección global |
| `src/content.config.ts` | MOD | timeline, codeSnippet en projects; nueva globalCollection |
| `src/pages/projects/[...slug].astro` | MOD | client.queries.projects + props Tina |
| `src/components/ProjectDetailLayout.tsx` | MOD | useTina + tinaField en todos los campos del header/sidebar |
| `src/content/global/footer.mdx` | NUEVO | Seed de copyright y links del footer |
| `src/layouts/MainLayout.astro` | MOD | getEntry global/footer → props a Footer |
| `src/components/Footer.tsx` | MOD | Props dinámicas, simple-icons, BrandIcon, ICON_MAP |
| `src/styles/components/_footer.module.scss` | MOD | Estilos flexbox para links con ícono |

### Dependencias agregadas

| Paquete | Versión | Motivo |
|---|---|---|
| `simple-icons` | `^12.4.0` | Íconos SVG de redes sociales. v12 — v13+ eliminó LinkedIn. |

---

## [2026-05-11] — TinaCMS Visual Editing en About, Archive y Resume

### Objetivo

Implementar Visual Editing de TinaCMS en las tres páginas de contenido estático, permitiendo editar campos directamente sobre la página desde el admin panel sin necesidad de usar el formulario clásico.

### Arquitectura del cambio

El patrón es idéntico en las tres páginas:

1. El `.astro` reemplaza `getEntry`/`render` (Astro Content API) por `client.queries.pages({ relativePath })` (TinaCMS GraphQL client).
2. El componente React recibe `{ query, variables, data }` en lugar de `frontmatter`/`children`.
3. `useTina({ query, variables, data })` hace el dato reactivo — se sincroniza con el sidebar del admin cuando la página corre dentro del iframe de Visual Editing.
4. `tinaField(obj, 'campo')` anota elementos DOM con `data-tina-field`, conectando cada nodo al campo del CMS.
5. El body MDX (antes `children` renderizado por Astro) pasa a renderizarse con `<TinaMarkdown content={page.body} />` para ser editable inline.

> `tina/__generated__/` es gitignoreado y se genera al correr `npm run dev`. El import del cliente no existe en el repo — aparece tras el primer build.

### ✨ Cambios

#### `tina/config.ts`
- **`ui.router`** añadido a la colección `pages`: mapea cada documento a su URL (`home → /`, `about → /about`, etc.). Sin este campo el ícono de Visual Editing no aparece en el admin.
- **Template `about`**: campo `philosophies[]` añadido — lista de objetos con `icon`, `accent`, `title`, `description`. Permite editar los cards de "Core Philosophy" desde el CMS.
- **Template `resume`**: campo `education` cambiado de objeto único a **array** (`list: true`) para soportar múltiples entradas (títulos, cursos, capacitaciones).

#### `src/content.config.ts`
- Schema Zod de `education` cambiado de `z.object({...}).optional()` a `z.array(z.object({...})).optional()`.

#### `src/content/pages/about.mdx`
- Añadido el array `philosophies` con los tres cards hardcodeados como primer seed de datos.

#### `src/content/pages/resume.mdx`
- `education` convertido de objeto YAML a array YAML (con `-` por ítem). Datos originales preservados como primer ítem.

#### `src/pages/about.astro`
- Reemplaza `getEntry` + `render` por `client.queries.pages({ relativePath: 'about.mdx' })`.
- Pasa `query`, `variables`, `data` al componente. Elimina `<Content />` como children.

#### `src/components/ClientAbout.tsx`
- Props: `{ frontmatter, children }` → `{ query, variables, data }`.
- Hook `useTina` + cast a `PageAbout`.
- `data-tina-field` en `<h1>` (title) y el div del body.
- Array `philosophies` ahora viene de `page.philosophies` con fallback a `[]`. Los cards se renderizan con `.map()`, íconos mapeados por string (`ICON_MAP`), y `tinaField(item, 'title')` / `tinaField(item, 'description')` en cada card.

#### `src/pages/archive.astro`
- Mismo patrón: reemplaza `getEntry` por `client.queries.pages({ relativePath: 'archive.mdx' })`. Mantiene `getCollection('projects')` para la tabla.

#### `src/components/ClientArchive.tsx`
- Props: `{ projects, pageMeta }` → `{ projects, query, variables, data }`.
- `data-tina-field` en `<h1>` (title) y `<p>` (subtitle).

#### `src/pages/resume.astro`
- Mismo patrón. Mantiene `getCollection('projects')` para los jobs y la construcción de `exportData` (sin cambios en esa lógica).
- `exportMetadata` lee de `tinaProps.data.pages as any` en lugar de `page.data`.

#### `src/components/ClientResume.tsx`
- Props: `{ frontmatter, children, jobs, exportData }` → `{ jobs, query, variables, data, exportData }`.
- `useTina` + cast a `PageResume`.
- Hero: `data-tina-field` en `<h1>`, `location`, `email`, `status`, y el div del body con `<TinaMarkdown>`.
- Skills (sección 02): `tinaField(skillGroup, 'category')` en cada `<h4>`, y `tinaField(item, 'name')` / `tinaField(item, 'value')` en cada fila.
- Education (sección 03): `education` pasa a ser `Education[]`. Render con `.map()`, `tinaField(entry, 'degree')`, `tinaField(entry, 'institution')`, `tinaField(entry, 'year')`.
- `DEFAULT_EDUCATION` convertido a array.
- Experience (sección 01): sin cambios — sigue viniendo de `jobs` (colección `projects`).

### Archivos modificados

| Archivo | Tipo | Descripción |
|---|---|---|
| `tina/config.ts` | MOD | `ui.router` en pages, `philosophies[]` en about, `education` → array en resume |
| `src/content.config.ts` | MOD | `education` → `z.array(z.object(...))` |
| `src/content/pages/about.mdx` | MOD | Seed de `philosophies[]` |
| `src/content/pages/resume.mdx` | MOD | `education` convertido a array YAML |
| `src/pages/about.astro` | MOD | TinaCMS client, props query/variables/data |
| `src/components/ClientAbout.tsx` | MOD | useTina + tinaField + TinaMarkdown + philosophies dinámicas |
| `src/pages/archive.astro` | MOD | TinaCMS client |
| `src/components/ClientArchive.tsx` | MOD | useTina + tinaField en title/subtitle |
| `src/pages/resume.astro` | MOD | TinaCMS client, exportMetadata desde tinaProps |
| `src/components/ClientResume.tsx` | MOD | useTina + tinaField en hero/skills/education, education como array |

---

## [2026-05-10] — RSS Feed enriquecido con imágenes y metadatos extendidos

### Objetivo

Mejorar el feed RSS para que los lectores de feeds muestren imágenes de preview y ofrezcan un contenido estructurado más completo.

### ✨ Cambios

#### `src/pages/rss.xml.ts`

- **Namespaces agregados** al elemento `<rss>`:
  - `xmlns:dc` — Dublin Core, para `<dc:creator>` por item
  - `xmlns:content` — para `<content:encoded>` con HTML completo
  - `xmlns:atom` — para el self-link del feed (`<atom:link rel="self">`)
  - `xmlns:media` — Media RSS (Yahoo), para thumbnails de imagen

- **Por item** se añaden:
  - `<dc:creator>` — autoría por item
  - `<content:encoded>` — bloque HTML con imagen, descripción, rol, stack y link al proyecto
  - `<media:content>` + `<media:thumbnail>` — las etiquetas que los lectores de feeds usan para mostrar la imagen de preview en la lista. **Esta era la causa de que las imágenes no aparecieran en aplicaciones de RSS.**

- **En el canal** se añaden:
  - `<atom:link rel="self">` — self-reference estándar del feed
  - `<lastBuildDate>` — timestamp de última compilación
  - `<generator>` — identificación del generador

- El campo `image` del proyecto se convierte a URL absoluta usando `context.site` antes de incluirse en las etiquetas `media:*`.

---

## [2026-05-09] — Fix: worktrees de Claude indexados como gitlinks rompían el build de Netlify

### Problema

Netlify fallaba en la fase de "preparing repo" con:
```
fatal: No url found for submodule path '.claude/worktrees/cool-leavitt-b31bc6' in .gitmodules
```

Dos directorios dentro de `.claude/worktrees/` habían sido indexados por git como gitlinks (modo `160000`, equivalente a submódulos) antes de que la entrada `.claude/worktrees/` existiera en `.gitignore`. Netlify los interpretaba como submódulos sin URL válida.

### Fix

```bash
git rm --cached ".claude/worktrees/cool-leavitt-b31bc6"
git rm --cached ".claude/worktrees/lucid-elion-87bb7c"
```

Las entradas fueron eliminadas del índice. El `.gitignore` ya tenía `/.claude/worktrees/` — no fue necesario modificarlo.

### Archivos modificados

| Archivo | Tipo | Descripción |
|---|---|---|
| _(git index)_ | MOD | Eliminados dos gitlinks huérfanos de `.claude/worktrees/` |

---

## [2026-05-09] — Scrollbar personalizado

### Objetivo

Reemplazar el scrollbar del navegador por defecto con uno que respete la estética editorial del sitio.

### ✨ Cambios

#### `src/styles/base/_globals.scss`

Se añadieron reglas de scrollbar usando las variables del design system:

- **Track**: `$clr-brand-surface-low` — nivel 1 de superficie, levemente distinto del fondo de página
- **Thumb en reposo**: `on-surface-rgb` al 25% de opacidad — discreto, no distrae
- **Thumb en hover**: `$clr-brand-primary` — verde neón (dark) / verde profundo (light)
- **Ancho**: `8px` — delgado pero funcional
- **Webkit**: reglas `::-webkit-scrollbar*` para Chrome, Edge y Safari
- **Firefox**: `scrollbar-width: thin` + `scrollbar-color` en el elemento `html`
- **Tema claro**: funciona automáticamente porque las CSS custom properties cambian con la clase `.light` en `<html>` — sin código adicional

---

## [2026-05-08] — Cleanup de archivos huérfanos y fix de `formatTitle`

### 🧹 Limpieza de código (fallow analysis)

Se ejecutó `fallow analyze` sobre el proyecto y se tomaron las siguientes acciones:

#### Archivos eliminados
- `src/content/config.ts` — archivo huérfano, no importado en ningún lugar. El schema activo vive en `src/content.config.ts`. La documentación que lo referenciaba fue actualizada.

#### Archivos modificados
- `src/content.config.ts` — se agregaron campos faltantes (`status`, `impact`, `categories`) que existían en el MDX pero no en el schema Zod.
- `src/lib/categories.ts` — se removedió `export` de `ProjectCategoryValue` (tipo interno, no usado externamente).

#### Documentación actualizada
- `README.md` — schema de projects actualizado con campos `status`, `impact`, `points`, `categories`
- `AGENTS.md` y `CLAUDE.md` — referencias corregidas de `src/content/config.ts` → `src/content.config.ts`
- `docs/CHANGELOG.md` — referencias históricas actualizadas

#### Dependencias verificadas (falsos positivos de fallow)
- `react-dnd` + `react-dnd-html5-backend` — se mantienen (planificados para drag-and-drop futuro en TinaCMS)
- `fs-extra` — se mantiene en devDependencies (requerido por `@tinacms/metrics`)

---

### 🐛 Fix: `formatTitle` generaba `<br>` de más

**Síntoma**: En la página About, el título `"Bridging \n // Logic & Soul"` renderizaba dos `<br>` entre "Logic" y "Soul", dejando una línea vacía de más.

**Causa raíz**: En `src/helpers/text-helpers.tsx`, cuando una línea era `" // Logic & Soul"` (el `//` al inicio), `parts = ["", " Logic & Soul"]`. El código rendereaba `<br /><span>Logic & Soul</span>`, pero además el índice de línea agregaba otro `<br />` final entre líneas.

**Fix aplicado** (`src/helpers/text-helpers.tsx`):
- Si `beforeText` está vacío (el `//` está al inicio de la línea), no se agrega `<br />` antes del span
- Se usa `trim()` en cada línea antes de procesarla, ignorando líneas vacías
- Se verifica `(beforeText || afterText)` antes de agregar `<br />` entre líneas

---

### Archivos modificados

| Archivo | Tipo | Descripción |
|---|---|---|
| `src/content/config.ts` | ELIMINADO | Schema huérfano, redundante con `content.config.ts` |
| `src/content.config.ts` | MOD | Campos `status`, `impact`, `categories` agregados |
| `src/lib/categories.ts` | MOD | `ProjectCategoryValue` ya no es exportado |
| `src/helpers/text-helpers.tsx` | MOD | Fix de `<br>` extra en `formatTitle` |
| `README.md` | MOD | Schema de projects actualizado, fecha de última act. |
| `AGENTS.md` | MOD | Referencias corregidas |
| `CLAUDE.md` | MOD | Referencias corregidas |
| `docs/CHANGELOG.md` | MOD | Referencias históricas actualizadas |

---

## [2026-05-08] — Layout Switcher, Filtros Funcionales y Vista Lista

### Objetivo

Agregar dos funcionalidades interactivas a la home: (1) un selector de vista Cards/Lista, y (2) filtros funcionales por categoría de trabajo, gestionables desde TinaCMS sin cambios de código.

---

### ✨ Funcionalidades añadidas

#### Layout Switcher (`# Layout`)
- Se añadió un nuevo bloque `SyntaxCard label="Layout"` en el sidebar de la home, con dos botones: **CARDS** (vista por defecto) y **LIST**.
- El estado `layout: 'cards' | 'list'` vive en `ClientHome.tsx` via `useState`.
- **Vista Cards**: comportamiento original — proyecto destacado + grilla de 2 columnas con glass morphism.
- **Vista Lista**: diseño tipográfico de alta jerarquía. Los proyectos se agrupan por su campo `type` (ej. "Freelance", "Fixed-term contract"). Cada fila muestra: flecha `→` + título grande bold + año. Al hover, el título y la flecha viran al color primario. Debajo del título: KeyValues (Role, Impact, Status), descripción, y stack tags.

#### Filtros por categoría (`# Filters` — ahora funcionales)
- Los botones **ALL OUTPUT / UI/UX ENG / WEB DEV / MOBILE APP / SYSTEMS** filtran en tiempo real los proyectos mostrados, tanto en vista Cards como en vista Lista.
- El estado `activeFilter: string` vive en `ClientHome.tsx`. El array `filteredProjects` se deriva del filtro y controla todo lo que se renderiza (featured card + grid/lista).
- Empty state: si ningún proyecto coincide con el filtro activo, se muestra `// no output matches this filter` con un botón "clear filter →" para resetear.

---

### 🏗️ Arquitectura de categorías

Se diseñó el sistema para ser completamente gestionable desde TinaCMS:

#### `src/lib/categories.ts` ← **NUEVO — fuente única de verdad**
Define el array `PROJECT_CATEGORIES` con `{ value, label }` por categoría. Importado tanto por `tina/config.ts` (para los checkboxes del CMS) como por `ClientHome.tsx` (para renderizar los botones). Para agregar o renombrar una categoría, solo se modifica este archivo.

> ⚠️ **Regla crítica**: nunca importar desde `tina/config.ts` en componentes React. TinaCMS v3 usa dependencias internas (ej. `color-string`) incompatibles con el bundler ESM de Vite. Los valores compartidos deben vivir en `src/lib/` y ser importados desde ahí en ambos lados.

#### Campo `categories[]` en proyectos
- Se añadió el campo `categories` (lista de strings con opciones predefinidas) al schema de TinaCMS en `tina/config.ts`.
- En el CMS, aparece como **checkboxes** bajo "Categorías de filtro". El editor selecciona a qué categorías pertenece el proyecto.
- Se añadió `categories` al frontmatter de los 7 proyectos existentes con los valores correctos según su stack/rol.

| Valor | Proyectos asignados |
|---|---|
| `ui-ux` | freelance, around, inti-web, inti-marketing |
| `web-dev` | freelance, around, inti-web, la-verdad-de-la-mila |
| `systems` | inti-pm, inti-marketing |
| `mobile` | _(ninguno aún — empty state correcto)_ |

---

### 🐛 Bug crítico resuelto: Astro v6 no propaga campos custom de frontmatter

**Síntoma**: El campo `categories` estaba en los archivos MDX, pero llegaba como `undefined` en el componente React.

**Tres capas de bugs encontradas durante la investigación:**

1. **`p.data` no incluye campos custom** — Astro v6 no expone campos del frontmatter que no sean parte de su schema interno, aunque estén en el schema Zod. `p.data.categories = undefined`.
2. **`mod.frontmatter` también es `undefined`** — `import.meta.glob` en MDX no expone el frontmatter como propiedad del módulo en Astro v6. Las soluciones con regex fallaban además en archivos Windows por CRLF.
3. **Case mismatch en filenames** — `FOlder-agrado.mdx` → Astro normaliza `p.id` a `'folder-agrado'` (lowercase). La clave del `categoryMap` preservaba el case del filename, entonces `categoryMap[p.id]` nunca matcheaba.

**Solución canónica implementada** (`src/pages/index.astro`):

```ts
import matter from 'gray-matter'; // dep transitiva de Astro, sin install adicional

const rawFiles = import.meta.glob<string>('../content/projects/*.mdx', {
  eager: true, query: '?raw', import: 'default'
});
const categoryMap: Record<string, string[]> = {};
for (const [path, content] of Object.entries(rawFiles)) {
  const slug = path.split('/').pop()!.replace('.mdx', '').toLowerCase(); // ← lowercase obligatorio
  categoryMap[slug] = Array.isArray(matter(content).data.categories)
    ? matter(content).data.categories : [];
}
// En el .map():  categories: categoryMap[p.id] ?? []
```

`gray-matter` resuelve automáticamente CRLF/LF y ambos formatos YAML. **Este es el patrón canónico para leer cualquier campo custom de frontmatter en este proyecto.**

> ⚠️ **Convención**: usar siempre nombres de archivo **lowercase** para los MDX de proyectos. Evita el case mismatch con `p.id`.

---

### 🔧 Cambio: `Tag` ahora es polimórfico

El componente `Tag` en `src/components/UI.tsx` fue actualizado: cuando recibe prop `onClick`, renderiza como `<button type="button">` (accesible, interactivo). Sin `onClick`, sigue siendo `<span>` como antes. El modificador CSS `tag--interactive` agrega `cursor: pointer` y resetea estilos de browser. No hay breaking change para usos existentes.

---

### 📚 Documentación actualizada
- `CLAUDE.md` y `AGENTS.md`: creados/actualizados con toda la arquitectura actual del proyecto.
- `src/content.config.ts`: schema Zod unificado para collections projects + pages (con workaround para bug de Astro v6 via `import.meta.glob`).

---

### Archivos modificados / creados

| Archivo | Tipo | Descripción |
|---|---|---|
| `src/lib/categories.ts` | NUEVO | Fuente única de verdad para categorías de filtro |
| `src/components/UI.tsx` | MOD | `Tag` polimórfico (span/button según onClick) |
| `src/components/ClientHome.tsx` | MOD | Estado `layout` + `activeFilter`, vistas Cards/Lista, filtros funcionales |
| `src/styles/pages/_home.module.scss` | MOD | Estilos de layout group, lista tipográfica, empty state |
| `src/styles/components/_ui.module.scss` | MOD | Modificador `tag--interactive` |
| `src/content.config.ts` | NUEVO | Schema Zod unificado para collections projects + pages |
| `src/pages/index.astro` | MOD | `import.meta.glob` para leer `categories` desde MDX directamente |
| `tina/config.ts` | MOD | Campo `categories` añadido al schema de projects, import de `PROJECT_CATEGORIES` |
| `src/content/projects/*.mdx` | MOD | Campo `categories` añadido a los 7 proyectos |
| `CLAUDE.md` | NUEVO | Guía de arquitectura para Claude Code |
| `AGENTS.md` | NUEVO | Guía de arquitectura para agentes de IA |

---

## [2026-05-07] — Image Normalization & Content Integrity

### ✨ Fixes
- **Robust Image Normalization**: Se actualizó la lógica en `ProjectDetailLayout.tsx` y `PortfolioDashboard.tsx` para manejar rutas corruptas (ej. `/assetshttps://...`) y eliminar comillas literales en el frontmatter de MDX.
- **Inti-Marketing Fix**: Se corrigió la ruta de la imagen en `inti-marketing.mdx` que impedía su visualización online.
- **FOlder-agrado Consistency**: Se normalizó la ruta de imagen con barra inicial `/` y se movió el archivo a la raíz de proyectos.

### 🛠️ Technical Changes
- Mejora de la función `resolveImagePath` en el Dashboard para ser defensiva contra strings mal formados.
- Actualización de `ProjectDetailLayout.tsx` con una función autoejecutable (IIFE) para procesar la imagen del héroe de forma segura.

---

## [2026-05-07] — Media Migration & Path Normalization

### ✨ Features
- **Estandarización de Medios**: Se migraron todos los activos de `src/assets/` a `public/assets/` para cumplir con los estándares de Astro y TinaCMS v3.
- **Normalización de Rutas**: Implementada lógica en `ProjectDetailLayout.tsx` para asegurar que las imágenes siempre usen rutas absolutas (con `/` inicial), evitando errores 404 en sub-rutas.
- **Dashboard Visibility**: Mejorada la función `resolveImagePath` en el `PortfolioDashboard` para soportar el cambio de puerto automático (4001 → 4321) en desarrollo local.

### 🛠️ Technical Changes
- Actualización de `tina/config.ts` para usar `public/assets` como root de medios.
- Limpieza de `src/assets` (ahora reservado para SVGs internos).
- Documentación del nuevo flujo de activos en `README.md`.

---

## [2026-05-07] — Portfolio Control Center (Dashboard Premium)

### Objetivo

Transformar la página de inicio de TinaCMS en un centro de control dinámico que permita monitorear el estado del portfolio, la salud del contenido y la distribución tecnológica de un vistazo.

### Características principales

- **Dashboard de Monitoreo**: Implementación de un `Screen Plugin` personalizado en `tina/config.ts`.
- **Inventario Maestro**: Tabla interactiva con búsqueda en tiempo real, miniaturas de proyectos y filtrado dinámico.
- **Auditoría de Salud**: Sistema que detecta automáticamente proyectos con información incompleta (falta de imágenes, descripciones cortas o stack tecnológico vacío).
- **Tech Stack Insights**: Visualización animada (vía `motion/react`) del ecosistema de herramientas utilizadas en los proyectos.
- **Detección de Entorno**: Lógica inteligente para alternar entre el endpoint local (`localhost:4001`) y la API de producción de Tina Cloud.

### Desafíos técnicos y soluciones

#### Fragmentos de GraphQL
Se corrigió un error crítico en la consulta de `pagesConnection`. TinaCMS requiere el uso de fragmentos inline (`... on Document`) para acceder a metadatos del sistema (`_sys`) en colecciones polimórficas.

#### Animaciones y Rendimiento
Se migró el uso de `framer-motion` a `motion/react` para cumplir con las mejores prácticas de React 19, implementando transiciones escalonadas (`staggered`) para una experiencia premium.

### Archivos modificados

#### `tina/dashboard/PortfolioDashboard.tsx` [NEW]
- Componente principal del dashboard con estado interno para búsqueda y filtrado.

#### `tina/dashboard/dashboardQuery.ts` [NEW]
- Definición de la query GraphQL centralizada para el dashboard.

#### `tina/config.ts`
- Registro del plugin `Portfolio Overview` y configuración del icono.

---

## [2026-05-07] — Actualización de dependencias (TinaCMS v3, Astro v6.3, React 19.2.6)

### Objetivo
Poner al día todas las dependencias del proyecto. TinaCMS mostraba una advertencia en el panel indicando que la versión instalada (`v2.10.1`) era obsoleta y que la última disponible era `v3.7.5`.

### Paquetes actualizados

| Paquete | De | A | Tipo |
|---|---|---|---|
| `tinacms` | `^2.4.0` | `^3.7.5` | **Major** (v2 → v3) |
| `@tinacms/cli` | `^1.7.0` | `^2.2.5` | **Major** (v1 → v2) |
| `astro` | `6.2.2` | `6.3.0` | Minor |
| `react` | `19.2.5` | `19.2.6` | Patch |
| `react-dom` | `19.2.5` | `19.2.6` | Patch |
| `fs-extra` | — | `^11.3.5` | **Nueva** (ver abajo) |

### Notas importantes

#### TinaCMS v3 — Cambio principal: ESM
El cambio más significativo de TinaCMS v2 → v3 es la migración de CommonJS a ESM. El proyecto ya usa `"type": "module"` en `package.json`, por lo que el cambio fue **transparente sin modificaciones de código**.

#### `fs-extra` — Dependencia faltante
Tras actualizar `@tinacms/cli` a v2.x, el dev server (`npm run dev`) fallaba con:
```
Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'fs-extra' imported from @tinacms/metrics/dist/index.js
```
`fs-extra` es una dependencia peer de `@tinacms/metrics@2.0.1` que no se resuelve automáticamente. Se añadió manualmente a `devDependencies` como fix.

#### Peer deps de TinaCMS
TinaCMS internamente usa `@headlessui/react@2.1.8` (que pide React 18) y `react-final-form@6.5.9` (que pide React ≤18). Dado que el proyecto usa React 19, npm genera warnings de ERESOLVE. Estos warnings **son esperados y no afectan el funcionamiento**: las dependencias internas de tina viven en su propio sub-árbol en `node_modules/tinacms/node_modules/`. Se resolvió usando `--legacy-peer-deps` para la actualización de React.

### Archivos modificados

#### `package.json`
- `tinacms`: `^2.4.0` → `^3.7.5`
- `@tinacms/cli`: movido a `devDependencies`, `^1.7.0` → `^2.2.5`
- `fs-extra`: añadido a `devDependencies` como `^11.3.5`
- `react` / `react-dom`: `^19.2.5` → `^19.2.6`
- `astro`: `^6.2.2` → `^6.3.0`

### Verificación
- ✅ `npm run dev` — TinaCMS + Astro inician correctamente en `localhost:4321`
- ✅ `npx astro build` — 11 páginas generadas, exit code 0
- ✅ Panel CMS en `localhost:4321/admin` — sin advertencias de versión

### Compatibilidad: Node.js
`@tinacms/cli` v2.2.5 incluye `better-sqlite3@11.10.0`, que soporta **Node 22 y Node 24** (ambos LTS activos en mayo 2026). La restricción histórica de "usar exactamente Node 22.12.0" ya no aplica. El `package.json` mantiene `"node": ">=22.12.0"` que es un mínimo correcto.

> Node 26 fue lanzado el 5 de mayo de 2026 como versión "Current" (aún no LTS). No se recomienda usarlo en producción hasta octubre 2026.

---

## [2026-05-06] — Refinamiento de CMS y Resume
### Objetivo
Estandarizar la edición de títulos en todas las páginas y habilitar la edición de puntos de experiencia (bullet points) en el Resume a través del CMS.

### Cambios realizados

#### `src/helpers/text-helpers.tsx`
- Se mantiene `formatTitle` como el motor principal de renderizado de títulos. Soporta el marcador `//` para acentos de color y saltos de línea automáticos.

#### `ClientArchive.tsx` & `ClientHome.tsx`
- Se unificó el renderizado de títulos usando `formatTitle`.
- Esto restaura el color de acento en la página Archive (que se aplica automáticamente a la última palabra si no hay `//`).

#### `src/content/projects/` & `tina/config.ts`
- Se añadió el campo `points` (lista de strings) a la colección de proyectos.
- Esto permite agregar viñetas de logros/responsabilidades específicas a cada experiencia laboral que se muestra en el Resume.

#### `ClientResume.tsx`
- Se actualizó el mapeo de experiencias para incluir los `points` dinámicos desde el CMS.

---

## [2026-05-06] — Soporte de Estructura de Carpetas en Proyectos

### Objetivo
Permitir la organización de proyectos en subcarpetas dentro de `src/content/projects/` para facilitar la co-locación de activos multimedia y una mejor gestión de archivos.

### Cambios realizados

#### `src/pages/projects/[...slug].astro`
- Se renombró el archivo de ruta de `[slug].astro` a `[...slug].astro`.
- Este cambio permite capturar rutas anidadas (ej: `/projects/img/mi-proyecto`), habilitando el acceso a archivos dentro de subdirectorios.

#### `src/content.config.ts`
- Se actualizó el loader de la colección `projects` para ignorar archivos ocultos del sistema (como `.gitkeep`) mediante el patrón glob: `**/[^.]*.{md,mdx}`.
- Se añadió el campo `_template: z.string().optional()` al esquema de validación de proyectos para mantener la paridad con los metadatos generados por TinaCMS.

#### `tina/config.ts`
- Se añadió un campo oculto `_template` en la colección `projects`. Esto asegura que cada nuevo archivo MDX creado desde el CMS incluya este metadato, necesario para la identificación del esquema en Astro.

#### `src/components/ProjectDetailLayout.tsx`
- Se refactorizó la lógica de **Breadcrumbs** para que sea dinámica. Ahora analiza el `id` (slug) del proyecto y genera niveles de navegación automáticos basados en los nombres de las carpetas.
- Ejemplo: `projects / Folder Name / Project Title`.

#### Limpieza de archivos
- Se eliminó el archivo `src/content/projects/img/.gitkeep.mdx`, ya que estaba causando un error de renderizado ("undefined is not a function") al intentar ser cargado como un proyecto válido por Astro.

### Impacto en SEO y Navegación
- Las URLs de los proyectos ahora reflejan su estructura de carpetas real en disco.
- Los metadatos de SEO se mantienen intactos, ya que siguen consumiendo el frontmatter original sin importar la profundidad del archivo.

---

## [2026-05-06] — Integración de TinaCMS (Panel Clásico)

### Objetivo
Añadir un CMS headless con panel de edición visual para gestionar el contenido de proyectos y páginas sin necesidad de editar archivos MDX manualmente.

### Decisiones de arquitectura
- Se eligió el **panel clásico de TinaCMS** (sin Visual Editing) como primera etapa. La migración a Visual Editing queda pendiente para una fase posterior.
- TinaCMS opera en **local mode** durante el desarrollo, escribiendo directamente a los archivos `.mdx`. No requiere cuenta en la nube para trabajar localmente.
- El admin panel corre en `http://localhost:4321/admin/index.html`.

### Compatibilidad: Node.js
> ⚠️ **Nota histórica (aplica a TinaCMS v2):** La versión `better-sqlite3` que traía TinaCMS v2 fallaba al compilar en versiones de Node distintas a v22.x. **Esto fue resuelto en la actualización del 2026-05-07**: `@tinacms/cli` v2.2.5 usa `better-sqlite3@11.10.0`, que es compatible con Node 22 y Node 24. Ver entrada `[2026-05-07]`.

### Archivos creados / modificados

#### `package.json`
- Se añadieron las dependencias `tinacms` y `@tinacms/cli`.
- Se modificó el script `dev` para correr TinaCMS y Astro juntos:
  ```json
  "dev": "tinacms dev -c \"astro dev\""
  ```

#### `tina/config.ts` ← **Archivo central del CMS**
Define el schema completo de colecciones. Toda nueva colección o campo editable debe registrarse aquí.

La colección `pages` usa **templates** (uno por archivo) para poder tener schemas distintos por página:

| Template name | Archivo target | Campos principales |
|---|---|---|
| `about` | `pages/about.mdx` | title, mission, body |
| `archive` | `pages/archive.mdx` | title, subtitle, body |
| `resume` | `pages/resume.mdx` | title, location, email, status, skillGroups[], education{} |

La colección `projects` contiene todos los campos del schema de proyectos:
`title`, `year`, `date`, `type`, `description`, `stack[]`, `role`, `client`, `order`, `image`, `showInResume`, `showInPortfolio`, `body`.

#### `src/content.config.ts`
Se extendió el schema Zod de `pagesCollection` para reflejar los nuevos campos:
- `_template` — string opcional. TinaCMS lo escribe automáticamente; Astro lo acepta sin romper la validación.
- `subtitle` — para `archive.mdx`.
- `skillGroups[]` — array de grupos de habilidades para `resume.mdx`.
- `education{}` — objeto de educación para `resume.mdx`.

#### `src/content/pages/archive.mdx` ← **Nuevo**
Creado para que el título y subtítulo del Archive sean editables desde el CMS. Contiene:
```yaml
_template: archive
title: Project // Archive
subtitle: Legacy systems, deprecated experiments...
```

#### `src/content/pages/resume.mdx` ← **Actualizado**
Los datos de habilidades (`skillGroups`) y educación (`education`) que estaban **hardcodeados en `ClientResume.tsx`** fueron migrados al frontmatter de este archivo. Ahora son completamente editables desde el CMS.

#### `src/content/pages/about.mdx`
Se añadió `_template: about` al frontmatter para que TinaCMS identifique el schema correcto.

#### `src/components/ClientResume.tsx`
- Se eliminó el array `experiences` de nivel de módulo (datos de experiencias hardcodeados; ahora vienen de `jobs` prop desde `resume.astro`).
- Se extrajeron las constantes `DEFAULT_SKILLS` y `DEFAULT_EDUCATION` (fallbacks para cuando el CMS no tiene datos).
- La lógica ahora prioriza `frontmatter.skillGroups` y `frontmatter.education` si están disponibles.
- Firma del componente:
  ```tsx
  ClientResume({ frontmatter, children, jobs })
  ```
  Donde `jobs` son los proyectos con `showInResume: true`, y `frontmatter` es el objeto de `resume.mdx`.

#### `src/components/ClientArchive.tsx`
- Se añadió la prop `pageMeta?: any`.
- Título y subtítulo ahora se leen de `pageMeta.title` y `pageMeta.subtitle` con fallback a valores por defecto.

#### `src/pages/archive.astro`
- Se añadió `getEntry('pages', 'archive')` para obtener el metadata de la página.
- Se pasa `pageMeta={page?.data}` a `<ClientArchive>`.

#### `.gitignore`
Se añadieron las rutas generadas por TinaCMS:
```
public/admin
tina/__generated__
```

#### `.env`
Variables requeridas (no commitear):
```
TINA_CLIENT_ID=...
TINA_TOKEN=...
```

### Cómo correr el proyecto con TinaCMS

```bash
nvm use 22.12.0
npm run dev
# → Astro en http://localhost:4321
# → Admin panel en http://localhost:4321/admin/index.html
```

---

## [2026-04-30] — SEO, OpenGraph y Favicon

### Objetivo
Mejorar la visibilidad en buscadores y la apariencia al compartir links del portfolio.

### Cambios
- Se añadieron meta tags de OpenGraph y Twitter Card en el layout global.
- Se configuró el favicon alineado con el dominio `aledesign.dev`.
- Se implementó un `sitemap.xml` generado automáticamente con `@astrojs/sitemap`.
- Se corrigió un problema de contraste en el footer para pasar el audit de accesibilidad de Lighthouse.

---

## [2026-04-30] — RSS Feed dinámico

### Objetivo
Permitir que el contenido de proyectos sea sindicado automáticamente via RSS.

### Cambios
- Se añadió el endpoint `src/pages/rss.xml.ts` que consume la colección `projects`.
- Se reemplazó el ícono "monitor" en el Topbar por un link al feed RSS.
- El feed se genera en el proceso de build de Astro, sin dependencias externas.

---

## [2026-04-29] — Navegación Mobile (Offcanvas)

### Objetivo
Implementar un menú de navegación mobile de pantalla completa con estética de terminal.

### Decisiones
- El trigger es un botón con `>_` visible solo en mobile (< 768px).
- El overlay ocupa exactamente `100dvh` con efecto glassmorphism.
- Se implementó lock del scroll en `body` cuando el menú está abierto.
- La fuente global se estandarizó en **Inter** (eliminando Jost).

### Componente
`src/components/Navigation.tsx` — maneja el estado de apertura/cierre y el lock del scroll.

---

## [Migración Base] — Next.js 15 → Astro v6

### Contexto
El proyecto fue originalmente construido en **Next.js 15** (App Router). Se migró íntegramente a **Astro v6** por razones de rendimiento (SSG nativo, 0 JS por defecto) y mejor integración con MDX como Content Layer.

### Cambios estructurales clave
- Las páginas de Next.js (`app/`) se convirtieron en páginas Astro (`src/pages/*.astro`).
- El helper `file-helpers.ts` (que usaba `fs` de Node para leer MDX) fue reemplazado por el Content Layer de Astro (`getCollection`, `getEntry`).
- Los componentes de UI pesados (con animaciones y estado) se mantienen como `.tsx` y se hidratan con `client:load`.
- El identificador único de un entry cambió de `.slug` a `.id` en Astro v6.

---

*Última actualización: 2026-05-06*
