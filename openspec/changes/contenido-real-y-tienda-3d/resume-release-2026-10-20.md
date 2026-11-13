# Publicacion de Resume

Alejandro autorizo subir la tanda de Resume. Se publican formacion y certificados indicados por el autor, habilidades sin porcentajes, seis fichas laborales (incluida Moodle), correccion del enlace LinkedIn, exportaciones y espaciado. No se suben los articulos draft Tienda Geekies, OdontoPro o UseOdontoPro, PDFs originales, datos identificatorios de certificados, reglas de agentes o reportes locales.

No se ejecuto build ni controles locales adicionales, segun politica de AGENTS.md. Se delego la compilacion al despliegue Git de Vercel. Revision previa mediante diff y alcance de staging.

Commit principal 7305bfc en main: 12 archivos, incluidos inti-moodle y config Tina. El despliegue dpl_BTL7xLSbCd8KZc6ChGY4aPtTr1z9 fallo en tinacms build por schema remoto distinto al local. Lectura estructural del lock generado por el servidor dev revelo una sola diferencia: label Proficiency (e.g. 95% or Yes) -> Usage / task. No cambia campos, tipos o permisos.

Se subio el tina-lock.json ya generado automaticamente, sin editarlo a mano, en commit 0debfb8. Se reindexo main en TinaCloud despues de cada push. No se suprimieron controles o errores ni se modifico el producto para saltar el control de Tina.

Despliegue de correccion dpl_DufzKT3YF7qQcjbsPaL7AEqeJ4iZ confirmado Ready para production por vercel inspect --wait, proyecto portfolio-2026-astro, equipo aledesign-projects. URL https://portfolio-2026-astro-e9iiir59f-aledesign-projects.vercel.app, aliases al3design.dev y www.al3design.dev. La compilacion remota final paso con esquema sincronizado. No se realizo revision interactiva de produccion.
