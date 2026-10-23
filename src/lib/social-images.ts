// Share-only compositions. Keep article artwork and Tina's image fields intact.
const shareCards: Record<string, { path: string; alt: { es: string; en: string } }> = {
  '/banner-background.png': {
    path: '/social/portfolio-v1.png',
    alt: { es: 'Al3Design · Alejandro Delgado · UX/UI, web y 3D', en: 'Al3Design · Alejandro Delgado · UX/UI, web and 3D' },
  },
  '/assets/projects/paris/paris-home.webp': {
    path: '/social/paris-v1.png',
    alt: { es: 'París · Alejandro Delgado · Vista del diseño web con el Arco del Triunfo', en: 'París · Alejandro Delgado · Website design featuring the Arc de Triomphe' },
  },
  '/assets/projects/cv-personal/cv-personal-dark.webp': {
    path: '/social/cv-personal-v1.png',
    alt: { es: 'CV personal · Alejandro Delgado · Diseño inspirado en estrellas y galaxias', en: 'Personal CV · Alejandro Delgado · Design inspired by stars and galaxies' },
  },
};

export function socialImageDetails(source: string, alt: string, language: 'es' | 'en') {
  const card = shareCards[source];
  return {
    path: card?.path ?? source,
    alt: card?.alt[language] ?? alt,
    width: card ? 1200 : undefined,
    height: card ? 630 : undefined,
    type: card ? 'image/png' : undefined,
  };
}
