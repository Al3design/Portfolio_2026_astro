# Prompts listos para usar

Elegir `portfolio-editor` en OpenCode Desktop o `Portfolio - editor` en DSH y abrir `C:/www/Portfolio_2026_astro`. Pegar el pedido con material; no usar las CLI como interfaz del usuario. Estos prompts no autorizan controles implícitos ni publicación productiva anticipada.

## Alta

```text
En C:/www/Portfolio_2026_astro usá portfolio-editorial.
Creá [artículo/caso/pieza Shop/página existente] con este material: [material o ruta].
Referencia comparable: [opcional; elegí una existente si se puede inferir].
Destino y visibilidad deseados: [destino]. Hosting Vercel. Conservá tokens,
maqueta, componentes, anchos, espacios, tipografías, temas y condiciones vigentes.
Completá ES/EN con hechos aportados, sin inventar fechas, material ni precios.
Si es un encargo nuevo, creá codex/<tarea> desde main limpia y actualizada
según AGENTS; si es retomado, continuá su rama. Sin worktrees.
Prepará candidato y Preview por el carril Vercel permitido. Parada ESPERANDO_OK_PREVIEW
con URL directa, revisión y pendientes. Esperá mi OK posterior antes de producción.
Controles autorizados para esta tanda: ninguno. El orquestador fija los de cierre.
```

## Cambio focal

```text
En C:/www/Portfolio_2026_astro usá portfolio-editorial.
En [ruta/slug/URL] cambiá solamente [campo/texto/foto] por [material].
Conservá identidad, URL, formato editorial, campos ajenos, orden y diseño.
Respetá tokens y maqueta existentes del sitio y del admin; Preview en Vercel.
No inventaries otras piezas ni modifiques CSS. Si es imagen, revisá el recurso
y sus usos reales (portada/card/social o primera foto Shop), sin prometer cambios
en derivados que no correspondan. Prepará Preview y terminá esperando mi OK.
Controles autorizados para esta tanda: ninguno. El orquestador fija los de cierre.
```

Para retirar/republicar: mismo prompt focal, especificando la visibilidad solicitada. Artículo usa `publicationStatus` y `showInPortfolio`; Shop selección y dependencias hero/latest. No borrar documentos/medios ni cambiar slugs como sustituto de retirar.

## Control acotado por ejecutora

```text
Sobre el candidato [manifest/revisión], ejecutá una sola vez este comando de control:
[comando exacto]. No agregues otros controles. Si falla, registrá resultado y
entregá sin corregir para reintentar ni sustituirlo. Esto no autoriza producción.
```

## OK del Preview

```text
OK al Preview [URL], revisión [SHA o hash de manifiesto + deployment ID].
Publicá exactamente esa revisión por el circuito Git/Vercel permitido.
Comprobá que no cambió el contenido aprobado y los controles de cierre.
Integrá por el flujo permitido y dejá main local/remota actualizada y limpia.
No crees worktrees ni saltes protecciones. Si falta acceso efectivo o hay cambios
ajenos/divergencias, explicá ese bloqueo concreto. Seguí el mismo deploy
y entregá URL pública y evidencia; no pidas otro merge después de publicar.
```

## Revisión opcional

```text
Revisá solo [pieza y material], diff [ruta] y evidencias [rutas/URL/revisión].
Solo lectura, sin shell, edición, publicación ni delegación. Informá fidelidad
al material, ES/EN, medios, diseño conservado y problemas concretos con evidencia.
No repitas scripts/suites ni conviertas recomendaciones en un rediseño.
Si falta navegador/visión, distinguí lectura de fuentes de revisión visual real.
```
