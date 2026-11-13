# R38 — Candidato selectivo para compilar en Vercel

## Continuación de R37

Alejandro solicita continuar con el build pendiente. Una ejecución:

`npx.cmd vercel env run --environment production --project portfolio-2026-astro --scope aledesign-projects --non-interactive -- npm.cmd run build`

CLI 65.8.0 avisa que dos valores Secret no pueden extraerse de Production y ejecuta el comando sin ellos. Exit 1 en tinacms build por clientId/token ausentes, antes de Astro. No se repite ni se cambia la protección/tipo de esas variables. No se consultaron sus valores ni se escribieron archivos .env. Esto confirma que env run no resuelve la limitación de exportación de Secrets; la siguiente vía es construir dentro del entorno autorizado de Vercel, donde el despliegue recibe sus variables.

Se consultaron guías env-vars, vercel-cli y deployments-cicd para distinguir ejecución con env temporal, secretos no exportables y despliegue Preview de producción. No se sustituye la compilación por astro build aislado ni por una configuración que omita Tina.

## Candidato concreto, preparado sin desplegar

Script reproducible: scripts/prepare-shop-preview.ps1. Ejecutado una vez, sin controles de proyecto ni e2e repetidos. Crea archivo ZIP de HEAD y lo extrae a una carpeta temporal sin .git: **no es un worktree ni otra branch**.

- Base: 4752b2562cf105731eb409f96c05a497f7b0f803.
- Sitio: C:/Users/apdel/AppData/Local/Temp/al3design-shop-preview-r38-20261030-123724/site.
- Manifiesto con selección y SHA256 de cada overlay: C:/Users/apdel/AppData/Local/Temp/al3design-shop-preview-r38-20261030-123724/manifest.json.
- 65 archivos superpuestos expresamente: 29 fotografías y ocho documentos seleccionados, más 28 archivos de runtime/esquema/soporte de tienda. No se copió el checkout sucio completo.
- Cambios compartidos de Navigation/MainLayout/astro.config/tina.config leídos por diff: limitados al recorrido de tienda/revisión. El cambio de colección en tina-lock se contrastó estructuralmente: solo shopProduct difiere de HEAD. package.json y pnpm-lock.yaml siguen los de la base, sin cambios locales pendientes.
- Las otras modificaciones locales, proyectos en borrador, AGENTS/skills/CodeGraph y trabajos paralelos no se superponen al candidato. El checkout activo sigue en main, sin staging, commit, push, borrados o cambios de branch.

Configuración creada **solo en el candidato**:

- .vercel/project.json fija proyecto prj_OZL34bgW5q9IcOglVLpPOX748Qrt y cuenta team_dKWDK276nYqP8e6q7EZvqWf3.
- vercel.json: framework Astro, output dist y buildCommand `npm run build && node scripts/verify-shop-catalogue-artifact.mjs`. El checker se ejecutará solo si pasa el build completo.
- .vercelignore excluye credenciales .env*, diagnósticos, dependencias locales, reportes, docs/OpenSpec/tests y generaciones locales de Tina/admin. El build regenerará lo necesario. Se mantienen los originales seleccionados en src porque Astro necesita procesarlos; no se copia toda la carpeta editorial.

Lectura de existencia de las dos rutas [slug].astro y de la configuración; no acredita compilación del candidato. Sin ejecutar el checker contra dist antiguo. No se repitieron los siete escenarios e2e aprobados en R37 y no se reinició el servidor actual 91713.

## Destino y autorización pendiente

get_project reconsultado: mismo proyecto/cuenta y dominios al3design.dev/www.al3design.dev. SSO Protection enabled con all_except_custom_domains: la URL Preview queda bajo la protección existente de Vercel. No se cambió protección ni se creó bypass/enlace público.

Propuesta pendiente de autorización de Alejandro: **un despliegue Preview protegido**, desde el candidato exacto, para ejecutar el build y el checker dentro de Vercel usando las variables Preview existentes. Sin --prod, promoción, asignación de dominios o cambios de variables. Comando preparado:

`npx.cmd vercel@65.8.0 deploy --yes --non-interactive --scope aledesign-projects --cwd C:/Users/apdel/AppData/Local/Temp/al3design-shop-preview-r38-20261030-123724/site`

No ejecutado. La publicación se había mantenido separada de la implementación/verificación local; crear una vista previa introduce un despliegue remoto y se pide aprobación sobre este candidato concreto. Después: leer build/checker, revisar artefacto Preview según acceso y registrar resultado. No aprobar producción ni archivar OpenSpec con fallos.

Límite editorial: esta vista previa no hace commit de los documentos en main ni demuestra edición/persistencia de esos documentos mediante Tina Cloud. Se comprueba el catálogo generado a partir de la selección local; el circuito cloud/Git requerirá su paso editorial acordado antes de producción.
