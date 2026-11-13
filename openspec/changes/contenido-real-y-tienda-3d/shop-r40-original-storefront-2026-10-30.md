# R40 — Portada original y colección completa

## Pedido y alcance

Alejandro pidió conservar el diseño de `https://al3design.dev/tienda#collection`: portada original, botón Explorar piezas hacia Pequeños objetos. Nuevas posibilidades., últimas tres piezas, enlace al catálogo completo y filtros por categorías. Se trabaja sobre `codex/tienda-catalogo-real`, sin cambio de rama, worktree, commit, push ni publicación. La Preview R39 sigue representando el commit anterior; estos cambios son locales.

## Implementación

- `ShopLanding.astro` recupera hero, contenedor page-container, títulos, márgenes, bloques y estilos de ShopContent original. La foto del hero es una impresión real.
- `/tienda#collection` y `/en/shop-3d#collection` muestran inicialmente tres novedades: soporte Creeper, maceta perro y maceta acanalada con plato. Selección editorial explícita en `shopLatestSlugs`, basada en los últimos lotes de incorporación; no son fechas de fabricación. El árbol con colores oscuros continúa siendo una misma pieza.
- Ver toda la colección lleva a `/tienda/coleccion/` y `/en/shop-3d/collection/`, respectivamente. Ocho piezas y mismos estilos de grilla, fotos cuadradas, categoría, paleta compacta y precio a consultar. Detalles extensos permanecen en las fichas.
- Componente Astro compartido `ShopCollection.astro` con filtros nativos, aria-pressed, contador anunciado y mensaje vacío. En portada, cada categoría muestra hasta tres resultados; el catálogo muestra todos. Sin JavaScript siguen disponibles las tres novedades y el enlace a las ocho piezas; los controles inertes no se muestran.
- Cabecera, regreso de ficha y enlaces de idioma apuntan a la colección correspondiente. La revisión editorial local `?catalog=real` sigue separada y disponible.
- Condiciones, WhatsApp, fotos, noindex y privacidad editorial conservados. No se modificaron productos, esquema Tina, archivos generados, variables ni dependencias.
- E2E existente adaptado a las nuevas rutas y dos escenarios ES/EN preparados para novedades, filtros, vacío y catálogo/ficha/regreso. Comprobador de artefacto ampliado de 18 a 20 páginas esperadas.

## Auditoría realizada

Lectura del diff y recorrido visual del orquestador, reutilizando el servidor Tina/Astro de R37. Sin nuevos builds, suites, tipos, lint ni comprobador de dist. No se atribuyen los resultados verdes de R37/R39 a esta modificación.

Comparación DOM con producción, ambos a 1440 px:

| Medida | Original | Local |
|---|---:|---:|
| Ancho de colección | 1280 px | 1280 px |
| Ancho de foto | 410,664 px | 410,664 px |
| Separación de columnas | 24 px | 24 px |
| Separación de filas | 40 px | 40 px |
| Título de colección | Inter, 36 px | Inter, 36 px |

Observados: ancla #collection, tres novedades correctas, filtro Escritorio con una pieza y aria-pressed, restablecimiento a tres piezas, navegación al catálogo de ocho piezas, colección inglesa y regreso a su portada. No se abrió WhatsApp ni se enviaron mensajes.

Incidencias de herramientas: dos clics con locator Playwright de CUA agotaron 3 segundos; el primero además usaba la capitalización de AX/CSS. Se leyó el DOM actual y el enlace se activó correctamente con el control AX nativo. Tras editar Sass, HMR presentó estilos obsoletos; una recarga recuperó la grilla definitiva. No se reinició el servidor. El override móvil solicitado no se reflejó en innerWidth (continuó 1440); se restableció y no se declara validación móvil de 320 px.

Evidencia: `output/shop-r40/landing-final.png` (captura completa). El compositor de captura completa reproduce el artefacto del skip-link ya observado en R39; no se modificó su CSS para ocultarlo. Guía consultada: `output/shop-r40-layout-guidance.txt`, Astro scripts oficiales y skill Astro. Vista local dejada abierta como entregable.

## Pendiente

Control acotado de nuevos escenarios y anchos móviles conforme AGENTS.md; actualizar Preview protegida mediante publicación selectiva autorizada cuando corresponda. No se fusionó PR #1 ni se cambió producción. Persisten los pendientes transversales R39 de accesibilidad, persistencia Tina Cloud y aprobación de Alejandro. No cerrar ni archivar el OpenSpec completo.
