# SEO y despliegue — 2026-10-22

## Alcance

Alejandro autorizo avanzar con revision de SEO de contenido publicado e investigacion del push sin despliegue visible. No se modifican los tres borradores, politicas, permisos externos, dependencias ni esquema Tina.

## Evidencia de produccion

Lectura HTTP de inicio, About, Resume, Archive y GitCron ES/EN: 200; las cuatro paginas principales comparten descripcion generica; los articulos tienen titulo, descripcion, imagen y alternativa propios. Canonical incluye slash final pero hreflang no. robots.txt y sitemap.xml responden 404.

## Preparado localmente (ocho archivos)

- MainLayout.astro: descripcion de respaldo acorde al perfil confirmado y URLs canonicas/hreflang normalizadas.
- index.astro, about.astro, resume.astro, archive.astro: descripciones propias; titulos de About/Resume identifican a Alejandro y Archive incluye marca. Se reutilizan mission/subtitle/title/location actuales de Tina cuando corresponde.
- src/lib/site-seo.ts: normalizacion compartida de URLs de paginas HTML con slash final, sin query/hash.
- sitemap.xml.ts: principales mas idiomas realmente publicados de cada proyecto; usa getCollection y projectIsPublished/projectLanguageLinks/showInPortfolio, igual que las rutas publicas. No incluye experiencias laborales, borradores, revision ni tienda conceptual. Alternates recíprocos; sin fechas lastmod inventadas.
- robots.txt.ts: permite rastreo publico, excluye /admin/ y declara sitemap.

Diff y nuevas fuentes leidos. No se ejecuto build, tipos, lint, suites ni controles locales. No se inicio Tina; el puerto 4002 no mostro listener durante la lectura del entorno. Publicacion y compilacion pendientes de autorizacion expresa.

## Vercel: conclusion actualizada

Proyecto prj_OZL34bgW5q9IcOglVLpPOX748Qrt, equipo aledesign-projects, repo Al3design/Portfolio_2026_astro, produccion main; createDeployments enabled, sin comando de ignorar build. Autor del commit d4e8c27 reconocido como Al3design. La API de instalaciones de GitHub devolvio 403 con las credenciales actuales; Alejandro completo la autenticacion reforzada del navegador. UI de GitHub confirma Vercel instalada, acceso a todos los repositorios, sin suspension. Configuracion Git de Vercel confirma repo correcto y estados habilitados. No se cambiaron accesos.

Actividad de Vercel muestra DOS despliegues del mismo commit: manual por CLI y luego automatico. API confirma dpl_5yQYNpks5h1xsRBxZ7K3kREw2TrV, source=git, READY, production, SHA d4e8c2787c7b3ee298dc2c7837200d6b17a00797, aliases al3design.dev y www. Estado GitHub Vercel success creado 2026-10-21T14:57:58Z. Por tanto el automatico llego con demora; la conclusion previa de que no se disparo era prematura. No se acredita una causa interna de la demora y no se justifica reconectar o reinstalar.

## Referencias consultadas

- https://docs.astro.build/en/guides/endpoints/
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://vercel.com/docs/git/vercel-for-github

La guia modern-web-guidance se consulto sin encontrar receta especifica de SEO; se siguieron documentacion oficial y guia SEO local. Revision no equivale a envio a Search Console, validacion de rich results ni garantia de indexacion.

## Control autorizado y fallo

Alejandro autorizo explicitamente una ejecucion de `npm.cmd run build` y publicar solo si pasa. Ejecutado UNA vez el 2026-10-22. Exit code 1 en tinacms build:

```text
Error: Client not configured properly. Missing clientId, token.
```

Astro no llego a ejecutarse. No se repitio, sustituyo ni reparo el control; no se hizo commit, push o publicacion del lote SEO. Preparacion local conservada. Pendiente restablecer configuracion local de Tina y obtener autorizacion para un nuevo control; no pedir ni exponer valores secretos en el chat.

## Continuacion solicitada: configuracion local

Alejandro pidio continuar. tina/config.ts lee TINA_CLIENT_ID y TINA_TOKEN; Tina CLI carga .env del proyecto. Solo habia .env.example con placeholders ajenos a Tina. Se intento recuperar Development con `vercel env pull .env --environment=development --project portfolio-2026-astro --scope aledesign-projects`: descarga correcta, pero sin ambas claves. `vercel env ls` confirma que TINA_CLIENT_ID y TINA_TOKEN son Secret y solo existen en Production/Preview; no se pueden recuperar mediante pull. No se imprimieron valores ni se modificaron variables remotas. Se elimino unicamente el .env recien generado, que no restablecia Tina.

El package.json existente dispone de build:local: tinacms dev --port 4002 --datalayer-port 9001 -c "astro build". Este circuito evita requerir secretos cloud para compilar contenido local, mientras el build remoto de produccion sigue usando sus variables. Se prepara como NUEVO control, pendiente de autorizacion literal por una vez; no se ejecuto como sustituto automatico del control fallido. El lote publicable sigue limitado a los ocho archivos SEO.

## Nuevo control autorizado: resultado

Alejandro autorizo una ejecucion de `npm.cmd run build:local` y publicar los ocho archivos solo si pasa. Ejecutado UNA vez. Tina local inicio en 4002/9001 y Astro genero varias rutas; al generar Resume emitio `Invalid hook call`. Luego fallo con exit code 1 al prerenderizar `/revision/media/mundo-poster.webp`:

```text
ENOENT: no such file or directory, open 'C:\www\Portfolio_2026_astro\editorial\assets\mundo-poster.webp'
child process exited with code 1
```

No se reparo para reintentar, no se repitio o sustituyo el control y no hubo commit, push ni publicacion. Los ocho archivos SEO siguen preparados. Pendiente abordar la ruta de medios de revision local y diagnosticar el aviso de hooks de Resume antes de solicitar un nuevo control; no declarar que el fallo sea causado por SEO ni que el build remoto fallaria igual sin evidencia.

## Correcciones solicitadas en el siguiente turno

Alejandro pidio continuar con esas correcciones. Lectura de fuentes y del artefacto fallido, sin nuevo control:

- El medio existe en src/editorial/assets/mundo-poster.webp y tambien hay una copia publica publicada. La URL basada en import.meta.url cambia de base al empaquetarse en dist/.prerender/chunks; se reemplazo la resolucion local por resolve(process.cwd(), 'src/editorial/assets', params.file), conservando la allowlist.
- El build local usa tinacms dev, que deja NODE_ENV=development. Vite distingue serve/build mediante MODE, por lo que los tres entrypoints locales de revision ahora usan MODE === 'development' y no DEV. No se omiten archivos faltantes silenciosamente: las rutas son realmente solo del servidor de desarrollo.
- El enlace a borradores de Resume se limita tambien a MODE development para que el build local no genere enlaces a rutas de revision no emitidas.
- ClientResume ejecutaba hooks y devolvia null hasta mounted. La deteccion de @astrojs/react/dist/server.js devuelve false si el componente no produce elemento React; Astro prueba otros renderizadores. Se elimino el retorno nulo y el estado mounted. Hooks permanecen al nivel superior, SSR e hidratacion inician con busqueda vacia y filtros vacios; window/document permanecen exclusivamente en efecto o handlers. El efecto de anclas corre despues de hidratar las tarjetas ya renderizadas. Esto ofrece HTML inicial de Resume en vez de pagina vacia; la desaparicion del aviso requiere confirmar con el control autorizado.
- No se eligio client:only ni se ocultaron logs, no se modificaron paquetes ni se agrego configuracion especulativa de React duplicado. La integracion instalada ya configura dedupe react/react-dom.

Fuentes oficiales: https://docs.astro.build/en/reference/directives-reference/ ; https://react.dev/warnings/invalid-hook-call-warning ; https://vite.dev/config/shared-options.html#mode . CodeGraph consultado para callers de ClientResume; no encontro callers Astro, por lo que se leyo el uso en resume.astro.

Lote publicable pasa a NUEVE archivos: los ocho SEO mas ClientResume.tsx. Los tres archivos src/pages/revision siguen locales sin seguimiento y no se agregan al commit. Politicas y los tres borradores permanecen fuera. Diff y fuentes leidos; no se ejecuto control nuevo en este turno. Pendiente autorizacion expresa para una compilacion local y publicacion del alcance ampliado.

## Control y publicacion del lote corregido

Alejandro autorizo una ejecucion de `npm.cmd run build:local` y publicacion de los nueve archivos si pasa. Ejecutado UNA vez: exit code 0, 42 paginas, Astro 19.53s. Log sin Invalid hook call ni ENOENT. Generadas rutas Resume, robots.txt y sitemap.xml; ninguna ruta de revision. Un aviso de deprecacion DEP0190 proviene del subprocess de Tina y no detuvo el proceso.

Staging selectivo: nueve archivos acordados; commit `5c4b973`, pusheado a main. Rutas locales de revision, borradores, politicas e informes excluidos. Despliegue automatico de Vercel pendiente de confirmar.

Vercel automatico confirmado: dpl_EhU3U6obvXdd45PXzKdv1hMihNwu, source git, SHA 5c4b973cfff2b0272fe2c7268c986643726ef462, READY production, build remoto 1m20s. API confirma aliasAssigned true, aliasError null y dominios al3design.dev/www.al3design.dev. robots.txt responde 200 y declara el sitemap.

Lectura final HTTP: sitemap.xml 200, XML parseado con 40 URLs, sin los tres borradores ni rutas de revision/tienda. Resume 200, descripcion propia y experiencia Moodle presentes en HTML inicial. No se ejecutaron nuevas suites ni se repitio build.
