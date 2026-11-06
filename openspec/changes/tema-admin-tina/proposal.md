# Why

Alejandro pide acercar la estética de Tina a las capturas de Payload: negro/grafito, tipografía limpia, controles sobrios e iconos consistentes. Se conserva Tina como CMS y el Live Preview recién conectado.

# What Changes

- Adaptador visual exclusivo del administrador: tokens, utilidades de color, Inter local e iconos Lucide.
- Instalación desde cmsCallback, sin editar generados, node_modules, campos o datos.
- Ajustar los tokens del dashboard propio para que acompañe al administrador.
- Conservar etiquetas, estados, validaciones, foco y acciones; preview y sitio conservan sus temas.

# Impact

Configuración cliente Tina, CSS/medios estáticos de admin y tokens de PortfolioDashboard. Sin nuevas dependencias, suscripciones, migración de CMS o permisos Cloud. El adaptador debe revisarse al actualizar Tina porque algunas reglas se apoyan en sus utilidades CSS compiladas.
