/** Empty highlights follow the saved catalogue order; explicit highlights override it. */
export function shopLandingProducts<T extends { slug: string }>(catalogue: readonly T[], latestSlugs: readonly string[]): T[] {
  const bySlug = new Map(catalogue.map(piece => [piece.slug, piece]));
  const highlights = latestSlugs.map(slug => {
    const piece = bySlug.get(slug);
    if (!piece) throw new Error(`Missing selected shop highlight: ${slug}`);
    return piece;
  });
  return [...highlights, ...catalogue.filter(piece => !latestSlugs.includes(piece.slug))];
}
