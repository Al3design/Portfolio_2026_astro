# Inventario editorial y punto de partida

Fecha: 2026-10-15. Fuente: checkout del portfolio, base `bab6c90`. Este documento es interno; no reemplaza textos publicos ni acredita afirmaciones heredadas.

## Decisiones confirmadas por Alejandro

- Mantener el portfolio y sumar una tienda 3D.
- Ofrecer piezas fisicas impresas por Alejandro. Venta de STL no solicitada.
- Reemplazar contenido dummy con informacion real aprobada.
- Dominio actual: al3design.dev. Alejandro confirmo Argentina como pais de venta/envio y español e ingles como idiomas. Catalogo y checkout siguen pendientes.
- Payload es una opcion a evaluar; no hay decision de migracion de CMS.
- Primera seleccion confirmada por Alejandro: GitCron, OdontoPro, UseOdontoPro, OdontoPau y este portfolio. Es una seleccion de proyectos, no una confirmacion de fechas, resultados, rol o metricas para las fichas.
- Fuente ofrecida: https://www.linkedin.com/in/alejandropdelgado/ y PDF de presentacion que Alejandro puede adjuntar. LinkedIn devolvio 999 al intentar lectura automatica; no se extrajo biografia ni formacion de esa pagina.
- Alejandro autoriza categorias, textos e imagenes de demostracion para explorar el diseño de tienda mientras ordena las carpetas de sus impresiones. Esa autorizacion es para un prototipo identificable, no para publicar productos como inventario real.

## Estados y criterio editorial

`CONFIRMADO` requiere una respuesta o fuente de Alejandro; que un dato figure hoy en MDX no lo confirma. `REVISAR` conserva el dato como candidato, sin declararlo verdadero ni falso. `PLACEHOLDER` identifica un marcador literal o recurso de demostracion. Toda aprobacion de reemplazo de esta matriz sigue pendiente, salvo las decisiones anteriores.

## Fuentes editables: matriz fuente / estado / reemplazo / aprobacion

| Superficie y fuente | Contenido a revisar | Estado | Reemplazo y fuente requerida | Aprobacion |
|---|---|---|---|---|
| Home — src/content/pages/home.mdx | Titulo, mission, mas de 15 anos, status, remote, EST | REVISAR | Presentacion, servicios, disponibilidad y zona real informados por Alejandro; decidir si conservar titular creativo | Pendiente |
| About — src/content/pages/about.mdx | Mission, cuerpo, UI/UX Architect, filosofias Atomic Principles/Data-Driven Empathy/Technical Feasibility | REVISAR | Bio en primera persona y forma real de trabajar; ejemplos verificables, sin convertir manifiesto generico en experiencia probada | Pendiente |
| Resume — src/content/pages/resume.mdx | Titulo, ubicacion, email, status, habilidades, porcentajes, formacion y cuerpo | PLACEHOLDER en email; REVISAR el resto | Contacto real, CV y fechas. Confirmar expresamente California College of the Arts y Da Vinci; retirar porcentajes sin fundamento del borrador | Pendiente |
| Archive — src/content/pages/archive.mdx | Titulo y descripcion sobre legacy/experiments | REVISAR | Definir si es archivo profesional, listado de trabajos o experimentos reales | Pendiente |
| Freelance — src/content/projects/freelance.mdx | Trayectoria 2018-Present, rol, descripcion, tecnologias, puntos y caso completo | REVISAR; imagen PLACEHOLDER | Encargos seleccionados, participacion concreta, fechas y evidencias/fotos autorizadas | Pendiente |
| Around — src/content/projects/around.mdx | Cargo/contrato 2018-2020, clientes FOX/CLAXSON, relato y tecnologias | REVISAR; imagen PLACEHOLDER | Confirmar empleador, marcas, responsabilidades y resultados atribuibles; capturas propias autorizadas | Pendiente |
| INTI Web — src/content/projects/inti-web.mdx | Cargo/contrato 2010-2018, institucion, Mi INTI, relato y stack | REVISAR; imagen PLACEHOLDER | Denominacion institucional correcta, relacion laboral y fechas; distinguir responsabilidad propia de la del equipo | Pendiente |
| INTI Marketing — src/content/projects/inti-marketing.mdx | Cargo/contrato 2020-2023, Power Query/PowerBI, tareas y relato | REVISAR; imagen PLACEHOLDER | Confirmar tareas, herramientas, fechas y resultados sin inventar metricas | Pendiente |
| INTI PM — src/content/projects/inti-pm.mdx | Cargo/contrato 2020-Present, Planner/Teams/SharePoint, tareas y relato | REVISAR; imagen PLACEHOLDER | Situacion actual, fechas, rol y alcance verificable | Pendiente |
| Global — src/content/global/footer.mdx | Copyright y enlaces GitHub/LinkedIn/Bluesky/YouTube | REVISAR | Confirmar perfiles preferidos; el enlace actual Bluesky usa apdelgado.bsky.social y debe contrastarse con el dominio personalizado | Pendiente |

Para cada proyecto, revisar todos los campos existentes: title, year/date (periodo laboral y fecha de publicacion son cosas distintas), type, description, role, client, stack, points, categories, order, image, flags showInResume/showInPortfolio y cuerpo MDX. No asumir que una lista de tecnologias demuestra dominio ni que un contrato es real por su etiqueta. Fotografias de picsum.photos no prueban autoria o ejecucion del trabajo.

## Texto publico fuera del CMS y salidas derivadas

| Fuente | Superficie / hallazgo | Estado y accion propuesta | Aprobacion |
|---|---|---|---|
| src/components/ClientResume.tsx — downloadATS | Nombre ALEXANDRO DELGADO, titulo profesional y email hello@aledesign.com fijos; exporta experiencias filtradas | DISCREPANCIA de nombre respecto a Alejandro. Generar identidad/contacto desde una unica fuente aprobada y decidir si exportar filtro o CV completo | Pendiente |
| src/components/ClientResume.tsx — panel y print | Fallback hello@aledesign.com y ubicacion fija; window.print crea otra salida de CV | REVISAR. Omitir contactos no confirmados; validar impresion junto con pantalla y ATS | Pendiente |
| src/pages/resume.astro | Markdown cv-alejandro-delgado.md usa paginas + proyectos, con reglas distintas del ATS | REVISAR. Mismos datos aprobados, filtros y convenciones de fechas en las tres salidas | Pendiente |
| src/pages/index.astro + src/lib/hooks/useMarkdownExport.ts | Exportacion portfolio-projects.md; metadata y contenido derivados | REVISAR junto con home, no solo el texto visible | Pendiente |
| src/pages/projects/[...slug].astro + componente de detalle | Titulos/alt, ficha, links, cuerpo y exportacion Markdown de cada proyecto | REVISAR: propagar correcciones y quitar placeholders de links/media/fallbacks sin romper slugs | Pendiente |
| src/pages/rss.xml.ts | Titulos, descripciones, fechas, roles, stack e imagenes de proyectos; descripcion general fija | REVISAR con contenido y fecha de publicacion reales; evitar redistribuir dummy por RSS | Pendiente |
| src/layouts/MainLayout.astro | Titulo/descripcion por defecto, keywords, autor, html lang=en, og:locale=en_US, og:url y banner | REVISAR tras definir idioma y propuesta profesional; metadata por ruta y banner que represente el negocio real | Pendiente |
| astro.config.mjs | URL base del dominio para rutas/feeds | Dominio CONFIRMADO; verificar salidas canonicas al publicar nuevos contenidos | Pendiente de verificacion |
| src/components/Navigation.tsx y Footer.tsx | AleDesign, labels ingleses, enlaces de navegacion y fallbacks de redes a # | REVISAR idioma/arquitectura. Separar contacto profesional y compra de objetos; no publicar enlaces ficticios | Pendiente |
| src/components/ClientHome.tsx | Imagen picsum de fallback, metadatos y labels de tarjetas/lista; interfaz de filtros | PLACEHOLDER para picsum; REVISAR labels y consistencia con proyectos aprobados | Pendiente |
| src/components/ClientArchive.tsx | Fallback de ano 2024 y labels query_db.sh/VIEW.MD | REVISAR. Un ano ausente no debe convertirse en fecha inventada; decidir si conservar lenguaje terminal | Pendiente |
| Componentes publicos y MDX | Captions, spec labels, estados, CTA, codigo ilustrativo y textos alternativos | REVISAR como copy de interfaz; no tratarlos automaticamente como hechos biograficos o especificaciones de producto | Pendiente |
| public/banner-background.png, favicons y medios referidos desde MDX | Identidad y recursos compartidos socialmente | REVISAR pertinencia y autoria; separar render ilustrativo de foto de pieza real | Pendiente |

El esquema de Tina en tina/config.ts es la fuente de formularios; no editar tina/__generated__ para corregir contenido. Mantener MDX/Tina como fuente editorial actual. El cambio de idioma debe incluir controles, metadata y exportaciones, no solo titulares.

## Primer lote propuesto de contenido real

1. Recabar bio/CV, servicios actuales, contacto e idioma; acordar que trabajos quedan visibles.
2. Preparar borradores de home/about/resume con trazabilidad a esas respuestas. No publicar formacion, anos de experiencia, ubicacion o contacto inferidos.
3. Revisar las cinco fichas existentes; conservar solo las aprobadas, reemplazando recursos de demostracion por material autorizado.
4. Unificar pantalla, Markdown, ATS, impresion, RSS, footer y metadata antes de aprobar el lote.

## Tienda 3D: informacion necesaria y estructura candidata

Se mantiene la decision portfolio + tienda. `/tienda` es una ruta candidata dentro del mismo sitio; no esta aprobado crear un dominio o aplicacion independiente. No hay productos verificables aun en el repo ni coleccion de productos. No se inventan fichas de venta para completar el diseno.

| Dato | Estado | Fuente necesaria |
|---|---|---|
| Nombre del emprendimiento y relacion con AleDesign | Pendiente | Alejandro |
| Pais | CONFIRMADO: Argentina | Respuesta directa de Alejandro, 2026-10-15 |
| Moneda, zona/origen de despacho y cobertura por destino | Pendiente | Alejandro; vender en Argentina no confirma tarifa, transportista ni destinos elegibles |
| Primeras piezas, autoria/licencia, material, medidas, variantes, fotos y cuidados | Pendiente | Datos de piezas realmente disponibles y fotos de impresiones |
| Stock o produccion a pedido, capacidad y plazo previo al despacho | Pendiente | Operacion real de Alejandro |
| Precio, embalaje, peso/medidas del paquete y opciones de entrega | Pendiente | Costos y operacion confirmados |
| Pedido asistido inicial o checkout completo; presupuesto | Pendiente | Decision de Alejandro luego de comparar alternativas |

Arquitectura candidata: portfolio profesional existente + entrada Tienda 3D + listado/ficha de piezas fisicas + consulta de personalizacion. Mantener separado contratar un servicio, comprar un objeto y descargar un archivo. Carrito, cobros y envios se implementan despues de aprobar arquitectura y operacion segun design.md; este inventario no declara una tienda operativa.

## Seguimiento

Inventario de fuentes y salidas completado (tarea 1.3). Entrevista iniciada: idiomas, pais y seleccion de proyectos confirmados; CV/PDF, contacto y hechos profesionales siguen pendientes (1.4/1.5). No se modificaron los textos publicos durante el relevamiento. La matriz debe actualizarse con respuestas y aprobaciones concretas antes de aplicar cada lote.

No publicar datos sensibles de operacion (domicilio privado, costos internos o credenciales). Las cinco fichas historicas siguen en revision; la nueva seleccion confirmada no ordena eliminarlas automaticamente.
