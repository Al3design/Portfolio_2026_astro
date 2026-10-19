export function projectLabels(language: 'es' | 'en') {
  return language === 'es' ? {
    projects: 'proyectos', status: 'ESTADO', role: 'Participación', timeline: 'Fecha / duración', client: 'Cliente / institución',
    specs: 'Ficha técnica', stack: 'HERRAMIENTAS', code: 'CÓDIGO', next: 'SIGUIENTE PROYECTO', experience: 'VER EXPERIENCIA', experienceDestination: 'EN RESUME',
  } : undefined;
}
