# R42 — Control autorizado detenido, Preview sin actualizar

Alejandro autorizó expresamente una ejecución de:

```powershell
npx.cmd e2e run tests/e2e/shop.e2e.ts --reporter list,markdown --max-failures 1
```

Ejecutado una vez contra el servidor existente. Run `01a18db8-cfeb-73a0-be07-0815a999c459`; salida 1; duración 25,75 segundos. Resultado: 1 aprobado, 1 fallido y 3 omitidos por max-failures, no por cambio de tests.

El escenario de navegación, idioma y tema aprobó. El escenario ES de portada/colección falló en la comprobación del texto del botón móvil: esperaba `Escritorio` y observó `FILTRAR · ESCRITORIO`. Los pasos previos del escenario —incluidos filtrado a una pieza y aria-expanded=false— pasaron. Es una discrepancia entre el matcher sensible a mayúsculas y el texto transformado por CSS que devuelve el runner; no constituye evidencia de un filtro roto ni permite declarar verde la suite completa.

Conforme AGENTS.md, no se corrigió para reintentar, no se repitió ni se sustituyó el control. No hubo builds, reinicio de servidores, commit, push ni despliegue. El índice permanece vacío. Preview R39 sigue en el commit 7378103; R40/R41 permanecen locales.

Evidencia copiada a `output/shop-r42/e2e-summary.md` y `output/shop-r42/e2e-report.json`. Artefactos originales conservados en `.e2e/artifacts/`; no se tomaron ni inspeccionaron nuevas capturas durante este control.

Preparación independiente: lectura de los once archivos del candidato R40/R41 y su diff, sin staging. Proyecto Vercel revalidado por CLI autenticada con scope `aledesign-projects`: `portfolio-2026-astro`, ID `prj_OZL34bgW5q9IcOglVLpPOX748Qrt`, Astro, Node24. El conector MCP devolvió 404 para ese mismo destino; se usó el fallback de inspección indicado por la herramienta. No se cambiaron configuración, protección o secretos. Skill aplicada: vercel:deployments-cicd.

Siguiente paso acotado: ajustar la comprobación textual a una expresión que acepte la capitalización visual, conservando la exigencia de categoría correcta, una pieza y desplegable cerrado. Luego solicitar autorización expresa para un control `--last-failed` de los cuatro escenarios pendientes, sin repetir el escenario aprobado. No publicar esta tanda como validada antes de resolverlo. Persisten los pendientes R39 y la autorización separada de producción.
