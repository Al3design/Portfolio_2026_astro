# Design

EditorialOrderList recibe filas serializables y entrega IDs completos. Reorder.Group maneja solo la página visible; reorderPage valida/fusiona en el array completo. moveToPosition trabaja sobre posiciones globales. Targets de 44px, tokens --al3-admin-list-*, layout por contenedor, un scroll de FormWrapper. Sin manipulación imperativa del DOM React.

Portfolio conserva migración diferida y ámbitos fuera del filtro; cancelar drag restaura scopes originales. Shop conserva object-list de referencias, consulta inventario completo por cursor y conecta alta/reemplazo/retiro a input.onChange. Novedades limita a catálogo/tres y no elimina dependencias hero/latest automáticamente. Ningún adaptador escribe por API ni al montar/paginar.

# Sources

Tina custom-field-components: https://tina.io/docs/extending-tina/custom-field-components (input/meta/form; conservar metadatos). Modern Web Guidance drag-and-drop: “Scope touch-action: none to the handle only”; “Keep the layout shrinkable”. Adaptación mediante Motion ya instalado, asa dedicada, Escape, reduced-motion, foco y scroll del formulario. No usar moveBefore sobre nodos propiedad de React.
