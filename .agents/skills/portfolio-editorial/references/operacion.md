# Operación del portfolio

Si un paso se bloquea o muestra un aviso, consultar el caso concreto de [bloqueos y avisos](bloqueos-y-avisos.md). No releer todas las referencias ni repetir suites, instalaciones, reindexaciones o builds por costumbre.

## Destinos y alcance

El mapa de campos, bloques, medios, ES/EN y consumidores vive en `docs/GUIA_EDITORIAL_IA.md`; no duplicarlo aquí. Fuentes: `tina/config.ts`, `tina/shop-products.ts`, `tina/shop-catalogue.ts`, `src/lib/project-editorial.ts`, `src/lib/project-locales.ts`, `astro.config.mjs`, `vercel.json`, `package.json` y `pnpm-lock.yaml`.

| Pedido | Documento / recorrido |
| --- | --- |
| Artículo/caso nuevo | `docs/templates/articulo-bilingue.mdx` → `src/content/projects/<slug>.mdx`; completar ES/EN, conservar draft durante preparación. No crear otra página ni colección blog. |
| Cambiar artículo/imagen | Mismo MDX y recurso/campo concreto. Conservar formato legacy/bloques/bilingüe existente; no migrarlo por rutina. |
| Pieza Shop | `docs/templates/pieza-shop.json` → `src/editorial/shop-products/<slug>.json`. `status` draft/review no publica ni retira. |
| Publicar/retirar pieza | Selección explícita `src/editorial/shop-catalogue/catalogue.json`; ajustar hero/latest si corresponde. Retirar referencia no borra originales ni ficha. |
| Orden portfolio | `src/editorial/project-order/order.json`; no renumerar artículos. |
| Home/about/archive/resume | Documento correspondiente en `src/content/pages`; plantilla existente de Tina. No tratar una página como artículo. |
| Menú/footer | `src/content/global/navigation.mdx` / `footer.mdx`; afecta ambos sitios. |
| Función/diseño/schema | Encargo técnico separado, con consumidores y controles de ese alcance. |

Medios de artículos: `/assets/projects/...` en `public/assets/projects`. Shop: upload público `/assets/shop/...` o `sourcePath` privado en intake; Astro transforma las fotos seleccionadas. No comparar sus bytes originales con derivados `_astro`. Ver cada imagen antes de describirla; no tomar/inspeccionar capturas si el rol lo prohíbe. Si falta visión, dejar asociación/alt pendiente de revisión humana. Un upload público no se vuelve privado por estar en draft.

## Recorrido corto

1. Leer rama/HEAD, índice y diff; separar trabajo propio y ajeno. Para encargo nuevo, con checkout/índice limpios: fetch, switch main, merge --ff-only origin/main y crear `codex/<tarea>` (o nombre pedido). Para retomar, continuar la rama del encargo. Cambios ajenos/divergencia: coordinar antes de cambiar de rama, sin reset/clean/stash automáticos. No worktrees ni staging global por rutina. Sin cambio real, terminar sin commit/deploy. Preparar la pieza con fuentes reales y revisar el diff focal.
2. Revisión local de borrador con servidor existente (`pnpm run dev`, Tina 4002/datalayer 9001/Astro 4322; arrancarlo solo si se autorizó y los puertos están libres). Artículo: `projectUrl(..., true)` resuelve `/revision/proyectos/<slug>` y el idioma secundario. Shop: `/revision/tienda/es/<slug>` y EN. Esas rutas son solo dev: no existen en el build. `pnpm run preview` sirve un dist previo; no es Live Preview ni crea un candidato nuevo.
3. Al preparar publicación, el **candidato** necesita el estado público solicitado (artículo published/visible, o selección Shop) para revisar las rutas públicas en Vercel Preview. No guardar ese cambio en Tina Cloud/main. En rama productiva, preparar esos valores solo en copia temporal explícita y registrar el overlay; el borrador principal puede seguir draft. No publicar rutas `/revision` para salvar esta diferencia.
4. Candidato limpio: lista JSON de paths relativos exactos, incluyendo dependencias previas aún no integradas que el cambio realmente necesite. `prepare` archiva HEAD y superpone solo esa lista en TEMP; no copia el checkout sucio entero. Revisar manifiesto y diff de la copia contra HEAD; el script no decide si una dependencia ni una imagen son correctas. No usar las listas congeladas de los scripts Shop de octubre.
5. Confirmar proyecto/equipo, rama productiva, build, protección y origen/índice Tina mediante acceso vigente de Vercel. Destino documentado: `portfolio-2026-astro`, `aledesign-projects`, `https://al3design.dev`; no es prueba de acceso actual. Push **selectivo y autorizado** a la rama del encargo para generar Preview según configuración observada. Copia temporal sigue disponible para aislamiento cuando se necesite; no desplegar todo un checkout con cambios ajenos. No autolinkear, instalar CLI global ni crear worktrees/ramas adicionales por cada tanda. Si no hay acceso efectivo, entregar candidato y bloqueo; no inventar URL ni declarar ESPERANDO_OK_PREVIEW sin Preview real.
6. Controles del cierre por orquestador, con comandos exactos fijados según alcance. Contenido no cambia schema: no audit Tina/admin completo por costumbre. Ejemplos disponibles: `node --test tests/project-locales.test.mjs tests/article-blocks.test.mjs` para proyección/bloques; `node --test tests/shop-catalogue-selection.test.mjs` para selección/fotos; `pnpm run build` para candidato Cloud y `node scripts/verify-shop-catalogue-artifact.mjs` para artefacto Shop (ya encadenado por vercel.json, no repetirlo allí). Ninguno sustituye revisión editorial ni el build del candidato. No ejecutar todo por cada imagen. Fallo de ejecutora: detener y reportar; el orquestador gestiona corrección acotada en cierre.
7. Verificar el mismo deployment Ready por ID, proyecto, target Preview y SHA Git si existe. Para deploy de archivos sin SHA Git, usar revisión del manifiesto + ID, sin inventar commit. Probar URLs públicas de la pieza y ambos idiomas, medios, social, feeds afectados, privacidad y diseño con herramientas/controles autorizados. Protección/login no es éxito público; no deshabilitar protección ni habilitar comodines. Guardar URL directa, identidad del candidato, informes y estado **ESPERANDO_OK_PREVIEW**, terminar turno y esperar el OK posterior.
8. OK del mismo snapshot: verificar que fuentes/recursos no cambiaron (`verify`), comprobar ref remota antes de escribir y completar el carril permitido, respetando PR/protecciones existentes. El OK autoriza la integración de esa revisión y el regreso a main: actualizar main local/remota y dejar checkout limpio, sin volver a pedir permiso técnico por la misma revisión. No integrar trabajo ajeno ni forzar divergencias. Commit/push/merge productivo ocurre solo después del OK y controles de cierre. No usar `vercel --prod` ni promover Preview como atajo al flujo Git acordado. Seguir el deploy resultante Ready y comprobar producción; después no pedir otro merge.

## Herramienta mecánica

Node 24, sin dependencias nuevas. Desde raíz del repo, solo cuando el prompt autorice ese paso:

```powershell
node .agents/skills/portfolio-editorial/scripts/recorrido.mjs prepare --files C:/ruta/archivos.json
node .agents/skills/portfolio-editorial/scripts/recorrido.mjs seal --manifest C:/ruta/manifest.json
node .agents/skills/portfolio-editorial/scripts/recorrido.mjs verify --manifest C:/ruta/manifest.json
node .agents/skills/portfolio-editorial/scripts/recorrido.mjs remote --expect C:/ruta/expectativas.json
```

`archivos.json`: array de paths relativos de archivos propios; sin globs, secretos, generados ni carpetas. Informe/manifiesto fuera de Git, con HEAD base, rama, overlays y hash del árbol candidato completo. No hace install/build/commit/push/deploy. HEAD conserva `.env.example` como plantilla, pero rechaza otros `.env*` y claves. Requiere Git y `tar` ya disponibles; no los instala. No admite borrados: un retiro editorial cambia visibilidad/selección; una eliminación técnica requiere otro alcance.

Si el artículo debe pasar de draft a published solo en copia, editar ese MDX dentro de `site` y ejecutar `seal` sobre su manifiesto inicial. Solo permite cambios a archivos de la lista original, sin borrados. Produce otro manifiesto con revisión nueva y cambios declarados; revisar el diff antes de Preview. No hereda un OK anterior. `verify` rechaza archivos añadidos, borrados o cambiados, versión de runner y Node distintos; acredita integridad del candidato, **no reutiliza suites de otro árbol**. Si se reconstruye y agrega dist/admin, el manifiesto debe verificarse antes del build; no declarar intacto un árbol modificado. Producción usa además comparación del diff integrado, no solo HEAD o rama.

`expectativas.json`: `{ "origin": "https://preview-exacto.vercel.app", "pages": [{ "path": "/projects/slug", "contains": ["texto esperado"], "absent": ["nota privada"] }], "assets": ["/_astro/foto.hash.webp"] }`. Rutas exactas extraídas del artefacto, no adivinadas; cada página requiere al menos una expectativa positiva. Un GET por URL, timeout 15 s, sin redirecciones/reintentos ni relajación de TLS. Rechaza HTTP fallido, texto/ausencias incorrectos, recursos no imagen/vídeo/audio o vacíos. No envía tokens ni descarga medios a disco. Se informa `identityVerified: false`: el operador debe cotejar ID/Ready/SHA con Vercel; texto coincidente no acredita revisión ni commit. HTTP no comprueba layout, alt correcto, indexación integral, persistencia Tina ni bytes equivalentes de fotos transformadas.

## Checkpoint y recuperación

Un JSON fuera de Git por encargo (p. ej. TEMP/portfolio-editorial/<encargo>/estado.json): alcance, rama/HEAD, archivos propios, estado, manifiesto, comandos/resultados, ID/URL/SHA o revisión de archivos, última escritura confirmada y OK textual si existe. No duplicar logs en un diario. Estados: PREPARADO, BLOQUEADO, ESPERANDO_OK_PREVIEW, OK_PREVIEW, PRODUCCION_VERIFICADA. Sin Preview real mantener PREPARADO/BLOQUEADO.

Tras corte/timeout de escritura consultar ref/deploy antes de repetir. Dos intentos sin evidencia nueva detienen el paso. Un control fallido no se reintenta por regla de AGENTS. No renovar presupuesto con otra sesión; una revisión focal y una segunda solo tras corrección concreta. 401/403: diagnóstico de sesión una vez; 429 respetar Retry-After sin bucle automático. Restaurar backups en carpeta nueva; no reset --hard, clean, force-push ni borrar trabajo ajeno.

## Altas Shop: orden y muestras de color

Shop: cada referencia nueva seleccionada explícitamente en products entra al principio; después manda el orden manual guardado en Tina (arrastrar, flechas o Pos., Save/Reset). Editar ficha/fotos o repetir una carga no mueve referencias existentes. No ordenar al renderizar por nombre, fechas de archivos ni invertir por CSS; no descubrir/publicar borradores automáticamente. Hero y latest se eligen aparte y no cambian por una alta.

Completar palette de cada alta con las muestras del PLA mostrado y etiquetas ES/EN antes de entregar Preview; palette: [] oculta los cuadrados. Usar HEX manual aproximado cuando no hay código de filamento confirmado, sin atribuir marca/preset por foto. Excluir decoración, fondo e iluminación; consultar colores ambiguos y registrar pendientes explícitos. El HEX de producto no modifica tokens del diseño.

Para una carga por IA, usar prependNewShopReferences de src/lib/shop-selection-order.ts sobre las referencias existentes y las altas explícitas en orden de incorporación (antigua a reciente); no pasar todas las fichas del directorio. El helper evita duplicar o mover piezas ya seleccionadas. La UI ShopSelectionField usa el mismo helper para Agregar; Cambiar conserva la posición. Novedades mantiene su selección independiente de hasta tres piezas.

Portada Shop: latest vacio activa las tres primeras referencias del catalogo products, en su orden guardado (altas nuevas primero por defecto). Una lista latest explicita prioriza esas piezas manualmente; vaciarla en Tina restaura el modo automatico. Hero sigue independiente. Al revisar altas/orden comprobar inicio y coleccion en ES/EN, incluidos los tres elementos visibles y el orden tras filtrar, no solo /tienda/coleccion/.
