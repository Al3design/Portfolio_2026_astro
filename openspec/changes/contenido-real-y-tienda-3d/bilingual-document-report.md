# Tanda: un documento por trabajo, ES/EN en Tina

Fecha: 2026-10-16. Alejandro pregunto si eran necesarios cuatro archivos y autorizo continuar tras proponer un documento por articulo. No recuerda el error de apertura en Tina; avisara si reaparece. No se atribuye ese error a una causa sin evidencia ni se declara resuelto por esta migracion.

## Modelo editorial

- Un documento por trabajo: mundo.mdx y toplomero.mdx. Datos compartidos: portada, imagen de card, stack, categorias, fecha/anio cuando se confirmen, orden, visibilidad y publicacion.
- `locales.es` / `locales.en`: titulo, descripcion, tipo, rol, cliente/institucion, fecha/duracion visible, estado del trabajo, alt/epigrafe/credito de portada y bloques de contenido. Los bloques permiten distinta redaccion y orden por idioma; pueden referenciar los mismos archivos multimedia, sin duplicar los binarios.
- `contentFormat: bilingual`, idioma principal es y estado draft. El titulo raiz sirve como nombre interno del documento en Tina. El titulo visible proviene del idioma seleccionado.
- Mantiene los modos blocks de un idioma y legacy/MDX para documentos anteriores. No se reescribieron Around, Freelance ni otras fichas existentes.

## Implementacion

- Schema locales en tina/article-locales.ts, basado en la misma lista de templates; titulos uniformemente obligatorios para conservar compatibilidad de fragmentos GraphQL. Defaults de articulos nuevos apuntan al modo bilingue.
- Resolver puro project-locales.ts compartido entre rutas, renderizado y router de Tina. Solo ofrece idiomas con titulo; no sustituye silenciosamente textos faltantes por otro idioma.
- ProjectDocument.astro es el ensamblado compartido entre fichas publicas y revision local. El useTina sigue en ProjectDetailLayout. Preview, exportacion y encabezados leen la misma version localizada. Se conserva la fuente de campos de portada/stack compartidos para contextual editing.
- Listados/CV/RSS resuelven el idioma principal de cada documento y muestran una entrada por trabajo. No se tradujeron todos los textos de esas paginas como parte de esta tanda.
- Generacion estatica de dos rutas desde un solo archivo; no requiere servidor dinamico ni traduccion automatica.

## Rutas

| Trabajo | ES local | EN local |
| --- | --- | --- |
| Mundo | /revision/proyectos/mundo | /revision/proyectos/en/mundo |
| Toplomero | /revision/proyectos/toplomero | /revision/proyectos/en/toplomero |

Los enlaces /revision/es/{trabajo}, /revision/en/{trabajo} y /revision/proyectos/{trabajo}-es/en redirigen a las versiones nuevas. Las rutas de revision siguen DEV-only y noindex.

Al publicar, las rutas previstas son /projects/{trabajo} y /projects/en/{trabajo}. Las fichas legacy mantienen sus URLs. Los enlaces de idioma se generan segun disponibilidad/publicacion, y el guard de publicacion recorre los bloques/alt de cada idioma presente, conservando controles de fechas, medios y subtitulos.

## Migracion efectuada

Se ejecuto una sola vez el comando de autoria `node scripts/consolidate-academic-locales.mjs`, exit 0. Lee los cuatro documentos actuales (incluyendo posibles ediciones), exige draft/cuerpo legacy vacio y equivalencia de campos compartidos, escribe dos reemplazos sin sobreescribir otros destinos y solo entonces retira los cuatro archivos anteriores.

Copias exactas previas en `.e2e/migrations/bilingual-1792177334715/`. No se regenero contenido desde la instantanea inicial ni se inventaron fechas. Se elimino la identidad de arrays compartidos antes de serializar para no introducir anclas YAML entre valores de formularios independientes. El script de carga inicial preserva documentos consolidados y no recrea los cuatro archivos encima.

## Controles y pendientes

No se ejecutaron build, pruebas, tipos, lint, e2e ni capturas, conforme a AGENTS.md. No se inicio/reinicio Tina ni otro MCP/navegador. Se prepararon pruebas unitarias de idiomas, rutas, ausencia de traduccion y compatibilidad legacy, sin ejecutar. El comando de autoria es una mutacion de documentos, no una verificacion.

Quedan para verificacion final: regeneracion GraphQL del esquema anidado, abrir/editar/guardar ambos idiomas de los dos documentos en Tina, contextual editing, portada/cards, exportaciones, redirecciones, exclusion de borradores en build y RSS, y preservacion de legacy. El fallo de apertura reportado anteriormente sigue sin causa confirmada; no se da por resuelto.

Sin commit, push ni publicacion. OpenSpec sigue abierto y mantiene fechas/creditos/medios y aprobacion editorial pendientes.
