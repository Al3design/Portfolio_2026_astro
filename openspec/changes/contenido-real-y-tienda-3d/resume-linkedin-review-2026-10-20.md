# Resume: formacion y habilidades reales

## Autorizacion y fuentes

Alejandro pidio retirar Bachelor of Fine Arts in Interaction Design, revisar Resume, quitar porcentajes y consultar su LinkedIn. Lectura autenticada del perfil https://www.linkedin.com/in/al3design/ y lista completa proporcionada por el autor https://www.linkedin.com/in/al3design/details/education/ el 2026-10-20. Sin editar LinkedIn, mensajes o capturas.

El conector de busqueda no encontro coincidencias con los filtros iniciales. El enlace de footer a alejandropdelgado devolvio 404; la sesion autenticada y el perfil visible identificaron el URL actual al3design. Se corrigio solo el enlace del portfolio.

## Formacion incorporada

- Escuela Da Vinci, Diseño y Desarrollo Web: Mar 2022 – Dec 2023.
- Escuela Da Vinci, Diseño multimedial: 2009 – 2018.
- ISFDyT Nº46, Analista de Sistemas con Orientación en Desarrollo de aplicaciones: 2002 – 2005.
- Cultural Inglesa de Buenos Aires, 5to Año: 1995 – 2001.

Nombres conservados en castellano como en la fuente; no se atribuye Bachelor, licenciatura o equivalencia extranjera ni se infiere titulacion/egreso adicional. Notas academicas del perfil omitidas.

Se retira el titulo de California del MDX y el fallback hardcoded de ClientResume. Una lista vacia en Tina no vuelve a poblar ejemplos; la seccion vacia se omite.

## Habilidades y exportaciones

Con autorizacion expresa se retiran los porcentajes del MDX y el fallback DEFAULT_SKILLS. Los grupos describen tareas confirmadas en los articulos: UX/UI y grafica (Figma, XD, Illustrator, Photoshop), interfaz web (HTML, CSS/Sass/BEM, JavaScript, React) y 3D/composicion (3ds Max, After Effects, V-Ray, RealFlow/FumeFX). No se afirman porcentajes o A/B testing, Scrum, Atomic Design como certificaciones o resultados.

Se conserva skillGroups.items.name/value y education.degree/institution/year en Tina; solo cambia el label editorial de value a Usage / task. Sin nuevos campos, tipos generados o dependencias. La disposicion de habilidades admite descripciones largas bajo el nombre; correccion de typo ls(wide)st a ls(wide).

El TXT ATS corrige ALEXANDRO por ALEJANDRO, usa titulo/ubicacion de Tina y agrega habilidades/formacion de los mismos datos que la pagina. Markdown agrega las mismas secciones desde pageData al generar el sitio. Se retira el import Search sin uso en ClientResume. El resumen inicial describe UX/UI, web y 3D sin la especializacion no confirmada en design systems.

## Diferencias pendientes antes de actualizar experiencia

- Around: LinkedIn distingue UI Developer Sep 2018–Aug 2019 y UX Designer Sep 2019–Nov 2020. Resume los agrupa 2018–2020. LinkedIn etiqueta Full-time; el documento actual y declaraciones anteriores usan Fixed-term contract. No se sobrescribe ese tipo sin aclaracion.
- INTI: LinkedIn muestra Diseñador UX/UI Oct 2010–Jan 2018 y Marketing Department Specialist Nov 2020–Present. El portfolio conserva marketing 2020–2023 y otra ficha PM/IT 2020–Present. No se retiran ni fusionan sin confirmar las etapas/solapamiento con el autor.
- Aledesign: LinkedIn muestra freelance desde Mar 2007 y otra entrada autonoma desde Mar 2018; no se fusionan ni se modifica el periodo del portfolio automaticamente.
- EF SET English Certificate 69/100 (C1 Advanced), emitido Dec 2025, visible en certificaciones. No se mezcla con educacion como un grado academico; posible proxima seccion con su enlace verificable.

## Estado

### Espaciado de secciones

Por capturas aportadas por Alejandro, se reduce el espacio entre Experience Map, System Constraints y Base Compilation sin tokens nuevos. Se elimina el doble espacio size(40) de sectionGroup gap y section margin-bottom: ahora group usa size(12), size(16) desde md, y section margin 0. El margen encabezado/contenido baja de size(20) a size(8). Las tarjetas de experiencia dejan de sumar margin-bottom size(10) al gap size(12) existente de experienceList. Sin cambios de contenido, Tina o tipografia. Lectura de estilos, sin build, pruebas, capturas nuevas o publicacion.

### Formacion: certificados proporcionados por Alejandro

El autor pidio retirar Analista de Sistemas y agregar dos certificados PDF locales. Se retira la entrada ISFDyT Nº46 y se agregan, al inicio de education y usando los campos existentes, Diplomatura en Inteligencia Artificial (Universidad Tecnologica Nacional, Facultad Regional Buenos Aires), 19 Dec 2025; y EF SET English Certificate, C1 Advanced (69/100), 06 Dec 2025. Los documentos confirman aprobacion de la diplomatura (157 horas, nota Sobresaliente) y el nivel EF SET. Se conserva el titulo literal Diplomatura, sin convertirlo a grado universitario. EF SET se presenta como certificado, no como carrera; el score es el resultado documentado, no una estimacion porcentual de habilidad.

Fuentes leidas mediante extraccion de texto: G:/Mi unidad/documentacion/certificado/ingles/EF SET Certificate.pdf y G:/Mi unidad/documentacion/certificado/UTN/IA/Diplomatura_en_Inteligencia_Artificial.pdf. Credencial EF SET presente en el PDF: https://cert.efset.org/oWMbYG. No se copiaron PDFs a public ni se agregan datos identificatorios del certificado UTN al sitio. No se cambio el esquema de Tina; la pagina y las exportaciones usan education. Sin compilacion, pruebas o publicacion.

### Experience Map: actualizacion local posterior

Pedido posterior: recuperar la informacion de la ficha previa PM/IT. Se restauran description, stack y tipo de contrato desde HEAD:inti-pm (Agile, Kanban, Microsoft Planner, SharePoint, Entra, FTP), y se pasan las responsabilidades anteriores a points para que Experience Map las muestre. El cuerpo anterior se recupera sin la imagen aleatoria de picsum. Se conservan 2023–Apr 2026 y la dependencia de Obras confirmada por Alejandro. Este pedido reemplaza la decision previa de reducir la ficha a descripcion institucional.

Moodle es una ficha separada inti-moodle, title/role Administrador de la Plataforma Moodle, Instituto Nacional de Tecnologia Industrial (INTI), Apr 2026–Present, showInResume true / showInPortfolio false. No se convierte en articulo del portfolio. El problema local tenia evidencia en .astro/data-store.json: conservaba PM 2020–Present y no contenia inti-moodle. Tocar la fecha del archivo content.config no actualizo su digest ni disparo resincronizacion. Se inicio npm run dev para reiniciar el stack de desarrollo; al recuperar puertos no habia listeners y no se paro otro proceso ajeno ni se inicio Tina sobre un puerto ocupado. Logs confirman Tina activo en 4002, sincronizacion completada y Astro listo en 4322. Lectura posterior del registro persistido confirma inti-moodle con Apr 2026–Present e inti-pm con 2023–Apr 2026, responsabilidades/stack restaurados. Sin build, test o inspeccion visual del producto; no se afirma comprobacion en navegador. Servidor dev en sesion 74112.

Precision posterior confirmada por el autor: Project Manager & IT Specialist en Obras, 2023–abril de 2026; Moodle en TED, abril de 2026–presente. Aplicado en year y cuerpo de ambas fichas, recuperando IT Specialist en titulo/role de inti-pm. La ambiguedad del mensaje inicial sobre 2026 se resolvio con respuesta expresa: el inicio de PM es 2023. Estas fechas reemplazan las referencias mas generales 2023–2026 y 2026–presente de las notas anteriores. Cambios locales, sin control ni publicacion.

Actualizacion expresa del autor, posterior a la lectura de LinkedIn: Marketing termino en 2023. Project Manager corresponde a 2023–2026 en Departamento de Obras, Direccion Tecnica de Desarrollo de Proyectos, Subgerencia Operativa de Infraestructura y Servicios Generales. Desde 2026 ejerce Administracion de Moodle en TED (Departamento de Trabajo y Educacion a Distancia), Subgerencia Operativa de Tecnologias de Gestion y Conocimiento, Direccion Operativa. Estas aclaraciones reemplazan los pendientes del perfil desactualizado enumerados debajo.

Se reemplaza la ficha generica inti-pm por el rol Project Manager y se crea inti-moodle, ambos showInResume true / showInPortfolio false, formato de experiencia existente sin campos o esquema nuevos. Fechas de actualizacion editorial 2026-10-20; no implican mes/dia de inicio o fin laboral. Se conservan las dependencias institucionales en castellano aunque los titulos del Resume sean ingleses. Se retiran del cuerpo de PM afirmaciones no detalladas sobre Kanban, permisos, herramientas y la imagen dummy; originales conservados en .e2e/content-intake/inti-career-update-1792518512186.

Orden del Resume: Moodle actual, freelance actual, PM 2023–2026, Marketing Nov 2020–2023, Around 2018–2020 e INTI web 2010–2018. Slug around y relacion con Ingest Monitor intactos. Se actualizan dependencias useMemo de filtros para seguir cambios de experiences y mostrar Moodle en opciones/busqueda cuando se actualicen props. Sin build, pruebas o publicacion.

Por pedido de Alejandro se actualizaron los metadatos consumidos por Resume (sin cambiar slugs, formato legacy, visibilidad o cuerpos historicos):

- around: una experiencia UI Developer / UX Designer, Sep 2018–Nov 2020, Full-time segun LinkedIn. Points detalla UI Developer Sep 2018–Aug 2019 y UX Designer Sep 2019–Nov 2020, tareas y feedback confirmados. Se conserva slug around y por tanto experience-around / experienceSlug de Ingest Monitor. Full-time describe dedicacion y no prueba que hubiera contrato indefinido; la ficha de Ingest conserva Fixed-term contract. No se le asigna una fecha mas precisa al propio proyecto.
- inti-web: UX/UI Designer, Oct 2010–Jan 2018, Full-time, con tareas de intranet, manual de identidad web y Foundation. Se eliminan tecnologias anacronicas/no respaldadas de su stack, como Astro, y no se atribuye desarrollo backend en Java por colaborar con ese equipo.
- inti-marketing: Marketing Department Specialist, Nov 2020–Present, Full-time; CRMsuite, phpList, revision UX y contenido multimedia como figura en el perfil. Las herramientas anteriores Power Query/PowerBI no se declaran falsas ni se borran de su cuerpo historico; no se incluyen en el resumen basado en LinkedIn mientras no se aclare su etapa.
- freelance: una experiencia independiente desde Mar 2007 bajo Aledesign, con el trabajo web/UI/UX desde Mar 2018 distinguido en points, reuniendo las dos entradas del perfil sin duplicar cards. Fechas tomadas del perfil, no de la duracion automatica calculada por LinkedIn.

Alejandro confirmo que PM/IT es un rol real y que aclarara fechas. inti-pm se conserva integro, incluyendo su periodo anterior pendiente de precisar; no se elimina ni se fusiona con Marketing por ausencia en LinkedIn. El nombre oficial Instituto Nacional de Tecnologia Industrial se aplica a las dos entradas INTI revisadas; la tercera queda pendiente junto con su periodo.

ATS ahora incluye points para conservar las etapas de Around y freelance; Markdown ya los incluye. Sin modificar consultas, esquema Tina o vinculos a articulos. Copias previas en .e2e/content-intake/experience-map-1792518004911 y copia individual de freelance. Sin verificacion ejecutada o publicacion en esta pasada.

Cambios solo locales, revisados por lectura de fuente/diff. Sin build, pruebas, tipos, lint, e2e, capturas o verificacion del sitio. No se uso el navegador para probar el producto; se leyo la fuente LinkedIn pedida. Sin commit/push/despliegue. Conservados Tienda Geekies, OdontoPro y UseOdontoPro en draft. No se reutiliza autorizacion de compilaciones anteriores.
