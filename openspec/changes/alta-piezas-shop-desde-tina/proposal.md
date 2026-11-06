# Why

El catálogo publicado exige editar slugs e imports de fotos en código para cada alta. Tina permite crear fichas y subir imágenes, pero esos datos no completan el circuito público.

# What Changes

- Agregar una selección única de catálogo en Tina: piezas ordenadas, hasta tres novedades y portada.
- Generar imports de Astro únicamente para las fotografías de las piezas seleccionadas. Conservar los originales privados existentes y admitir fotos públicas del gestor en `/assets/shop/`.
- Conectar el campo de imagen con revisión, galería, portada social y RSS; conservar las plantillas y URLs.
- Conservar borradores fuera del catálogo por defecto y validar referencias, duplicados y rutas antes de compilar.

# Impact

Astro/Vite, esquema Tina, lector de catálogo, revisión y guía editorial. Requiere regeneración de Tina e índice del entorno destino antes de usar Cloud. No cambia comercio, indexación ni diseño. No autoriza push, guardados en Cloud o despliegue. Las subidas a public son públicas aunque el documento no esté seleccionado.
