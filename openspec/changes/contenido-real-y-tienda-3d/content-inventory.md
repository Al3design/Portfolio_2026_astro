# Content inventory and intake

Estado: auditoria inicial, 2026-10-15. No es contenido autorizado para publicar. Alejandro confirmo portfolio + tienda 3D; los hechos personales y comerciales se recaban antes de redactar reemplazos.

| Superficie | Fuente actual | Hallazgo / accion requerida |
|---|---|---|
| Home | `src/content/pages/home.mdx` | Confirmar descripcion profesional, anos reales, ubicacion y zona horaria; EST no se presume correcta. |
| About | `src/content/pages/about.mdx` | Confirmar bio, mision y filosofias; el manifiesto no equivale a una entrevista real. |
| Resume | `src/content/pages/resume.mdx` | Reemplazar `[EMAIL_ADDRESS]`; validar experiencia, formacion y habilidades. Porcentajes no verificables deben reemplazarse por evidencia o descripciones. |
| Resume render/export | `src/components/ClientResume.tsx` | Datos y porcentajes hardcodeados, email `hello@aledesign.com` en exportacion y fallback; unificar con fuente confirmada. |
| Archive | `src/content/pages/archive.mdx`, `src/components/ClientArchive.tsx` | Verificar descripcion, criterio de archivo y visibilidad de proyectos. |
| Freelance | `src/content/projects/freelance.mdx` | Revisar rol, periodo, clientes, resultados, permisos y medios; hay imagenes picsum. |
| Around | `src/content/projects/around.mdx` | Revisar contexto, participacion, fechas y entregables reales; hay imagenes picsum. |
| INTI web | `src/content/projects/inti-web.mdx` | Revisar atribucion, responsabilidades y medios; hay imagenes picsum. |
| INTI PM | `src/content/projects/inti-pm.mdx` | Revisar responsabilidades, fechas y resultados; hay imagenes picsum. |
| INTI marketing | `src/content/projects/inti-marketing.mdx` | Revisar afirmaciones, proyectos y medios; hay imagenes picsum. |
| Home fallbacks | `src/components/ClientHome.tsx` | Defaults remote/EST y foto picsum; impedir que reintroduzcan contenido dummy al limpiar MDX. |
| Footer | `src/content/global/footer.mdx`, `src/components/Footer.tsx` | Confirmar titularidad y vigencia de enlaces sociales, presentacion y contacto. |
| SEO / previews | `src/layouts/MainLayout.astro`, `astro.config.mjs` | Confirmar descripcion de identidad, keywords, imagen social, titulo y dominio; conservar coherencia con portfolio + tienda. |
| RSS / Markdown / CV | `src/pages/rss.xml.ts`, helpers/componentes de exportacion | Validar contenido derivado, URLs, imagenes y metadatos con la misma fuente editorial. |
| Catalogo 3D | Aun no existe | Crear datos desde productos reales, sin convertir piezas del portfolio en SKUs ficticios. |

Cada reemplazo debe registrar: valor anterior, fuente proporcionada, borrador, estado (pendiente/confirmado/aprobado), aprobador y fecha. La presencia de imagenes dummy no prueba que el proyecto sea ficticio.

## Brief to complete with Alejandro

1. **Perfil:** como te presentas hoy, servicios que seguis ofreciendo, CV/proyectos reales, contacto publico, idioma principal y zona horaria.
2. **Oferta 3D:** primeras 3-5 piezas, fotos o renders identificados, que disenas vos y que modelos tienen licencia comercial, cliente objetivo y personalizaciones reales.
3. **Produccion:** materiales/colores, tamanos, acabados, stock o bajo pedido, capacidad y plazo de fabricacion.
4. **Venta:** pais/moneda, precio por variante, formas de cobro posibles; confirmar si se empieza con consulta o checkout.
5. **Entrega:** pais y CP de origen, envio nacional a domicilio/sucursal, retiro local, embalaje y proveedor/costos a evaluar.
6. **Alcance digital:** confirmar si solo se venden objetos o tambien archivos STL. Hasta entonces no ofrecer descargas pagas.

No publicar respuestas de operacion sensibles (domicilio privado, costos internos o credenciales) como contenido de producto.
