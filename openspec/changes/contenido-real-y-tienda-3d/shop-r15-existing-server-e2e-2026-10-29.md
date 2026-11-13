# R15 — Servidor existente identificado y control actualizado aprobado

Continuación tras R14. Alejandro pidió avanzar; se identificaron procesos y conexiones por lectura, sin detener ni iniciar servicios.

## Resolución del bloqueo de R14

La consulta filtrada Get-NetTCPConnection -LocalPort no devolvía listeners esperados. Una lectura del inventario de conexiones sin ese filtro, junto con Win32_Process y el terminal original, identificó Tina PID 35244 y Astro PID 41376, hijos de la cadena iniciada por esta tarea a las 18:34/18:35. Astro escuchaba en ::1:4322. Tina conservaba actividad/conexiones de 4002/9001. La sesión original 19791 seguía viva y su historial mostraba respuestas 200 de fichas y fotos nuevas.

El arranque de R14 había intentado duplicar un servidor existente que la consulta previa no detectó. No se atribuye el puerto a un servicio ajeno ni se afirma una causa de Windows para el resultado de esa consulta. Se reutilizó el servidor original. No hubo otro arranque, cambio de puertos ni terminación de procesos.

## Control expresamente autorizado, una ejecución

La autorización de Alejandro había nombrado el comando acotado y la reutilización del servidor. En R14 ese comando no llegó a ejecutarse. Se ejecutó ahora una vez:

```powershell
npx.cmd e2e run tests/e2e/shop-review.e2e.ts --reporter list,markdown --max-failures 1
```

Resultado: código 0; un archivo y dos escenarios ES/EN aprobados. ES 36,23 s; EN 34,28 s; duración total 72,15 s. Run 01a189e3-6496-7111-9a53-669575468471. Evidencia original en .e2e/summary.md y .e2e/report.json, leída tras finalizar. Cero reintentos, sin suite completa, build, MCP ni modelos.

## Alcance comprobado sobre R11–R13

- Colección con ocho fichas por idioma y navegación a cada una; nombres y fotos esperados.
- Veintinueve JPG por idioma con respuesta correcta, firma JPEG, alt presente y headers no-store/noindex. Incluye portadas y nuevas fotos de las tres tandas.
- Seis campos físicos por pieza: PLA confirmado en primeras cuatro, material pendiente en siguientes cuatro y cinco campos restantes pendientes en todas.
- Tema claro inicial, cambio desde el control Navigation compartido, persistencia al recargar y retorno a claro; shop-theme independiente de theme del portfolio.
- Navigation hidratada, enlace Colección hacia revisión local y Footer presente.
- Idiomas conservando ficha y regreso al ancla de la pieza. Geometría de imágenes, detalles y listas a 320/1440 px.
- Rechazo 404 de manifest JSON y medio no asociado. Las páginas conceptuales conservan ausencia de enlaces y fotos de revisión.

El test valida respuestas de medios y geometría; no constituye revisión visual de capturas ni cobertura exhaustiva de teclado. Tampoco prueba inserción de un documento nuevo con servidor activo: las rutas ya usaban el handler dinámico cuando comenzó el control.

## Pendientes

Guardado/reapertura y persistencia desde el formulario real de Tina; revisión visual/editorial; permisos comerciales, medidas, capacidad, disponibilidad y exclusión del artefacto al cierre. No se ejecutó build ni publicación. Servidor original conservado para continuidad. Sin staging, commits ni cambios ajenos.
