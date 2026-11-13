# Around: proyecto profesional vinculado a la experiencia laboral

Fecha: 2026-10-16. Aclaracion directa de Alejandro: Ingest Monitor es trabajo real de su etapa laboral en Around MD; corresponde a Fixed-term contract y puede asociarse con la experiencia existente en RESUME.

## Cambios de contenido

- around-ingest-monitor.mdx: tipo Fixed-term contract en ES/EN; estado del trabajo Trabajo profesional / Professional work; resumen e introduccion explicitan su participacion laboral en Around MD. La expresion caso de estudio se conserva donde describe el formato de presentacion, no una actividad academica o ficticia.
- experienceSlug: around identifica la experiencia existente. showInResume sigue false en el articulo: no crea un segundo empleo. La experiencia around.mdx mantiene rol, periodo y resto del cuerpo; la denominacion cliente/empresa pasa a Around MD, siguiendo la ultima aclaracion del titular. La presentacion anterior usaba MS; se registra esta diferencia sin modificar la fuente original.
- El proyecto especifico sigue sin fecha confirmada; no se copia automaticamente 2018-2020 como su fecha. publicationStatus sigue draft: el estado editorial es independiente del caracter profesional real del trabajo.

## Vinculo bidireccional

- Campo compartido editable en Tina: Experiencia relacionada en Resume (slug estable). No se usa el titulo de la empresa como clave.
- En la ficha de proyecto, enlace VER EXPERIENCIA EN RESUME / VIEW EXPERIENCE IN RESUME dentro de la card de metadatos, dirigido a /resume#experience-around.
- RESUME conserva el slug y asigna ese id a la card correspondiente. Como las cards montan despues de la hidratacion, un efecto resuelve el hash al montarse y en hashchange; desplazamiento instantaneo y scroll-margin con tokens para despejar el topbar.
- Cada experiencia puede mostrar proyectos relacionados. En local aparece Ingest Monitor marcado Draft y apuntando a su revision; en produccion solo se incluyen articulos publicados y con ruta publica habilitada. No se exponen enlaces a borradores en el CV exportado de produccion. El Markdown del CV y el articulo conservan la relacion.
- La guarda de publicacion exige que el destino relacionado exista y sea visible en Resume; evita autorreferencia. No publica contenido ni cambia los filtros de borradores.

## Autoria y controles

node scripts/link-around-experience.mjs: exit 0, actualizo los dos documentos preservando el resto y guardando copias previas locales en .e2e/content-intake/around-employment-{timestamp}/. Es escritura de contenido, no una verificacion. Script inicial de creacion actualizado con clasificacion/vinculo, sin volver a ejecutarlo ni pisar ediciones.

No se corrieron controles/build/tipos/lint/tests/e2e ni capturas conforme a AGENTS.md. No se inicio/reinicio servidor ni MCP. Pruebas unitarias de identidad/URL del ancla preparadas sin ejecutar.

Pendiente del cierre: regeneracion del campo Tina, enlace ida/vuelta, llegada al ancla despues de hidratacion, filtros del CV, Markdown y exclusiones en produccion. Contenido y medios siguen pendientes de aprobacion; no se declara la interaccion validada en navegador.

Sin commit, push ni publicacion; OpenSpec abierto.
