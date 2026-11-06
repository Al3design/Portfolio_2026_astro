// Follow Tina's native form contract: read _values, change one field, then
// transform the complete document through the schema before submitting it.
export function projectOrderValues(values: unknown, category: string, rank: number | null): Record<string, unknown> {
  if (typeof values !== 'object' || values === null || Array.isArray(values)
    || !('title' in values) || typeof values.title !== 'string' || !values.title.trim()
    || !('body' in values)) {
    throw new Error('Tina no devolvió la ficha completa con su título y cuerpo.');
  }
  if (rank !== null && !Number.isSafeInteger(rank)) throw new Error('Ingresá un número entero.');
  if (category === 'all') return { ...values, order: rank ?? 0 };
  if (!('categories' in values) || !Array.isArray(values.categories) || !values.categories.includes(category)) {
    throw new Error('El artículo ya no pertenece a esta categoría. Refrescá el dashboard.');
  }
  const existing = 'categoryOrders' in values ? values.categoryOrders : [];
  if (existing != null && !Array.isArray(existing)) throw new Error('Las posiciones guardadas tienen un formato inválido.');
  const categoryOrders: { category: string; order: number }[] = [];
  const seen = new Set<string>();
  const entries: unknown[] = existing ?? [];
  for (const item of entries) {
    if (typeof item !== 'object' || item === null || !('category' in item)
      || typeof item.category !== 'string' || !('order' in item)
      || typeof item.order !== 'number' || !Number.isSafeInteger(item.order)
      || seen.has(item.category)) {
      throw new Error('Las posiciones guardadas tienen un formato inválido.');
    }
    seen.add(item.category);
    if (item.category !== category) categoryOrders.push({ category: item.category, order: item.order });
  }
  if (rank !== null) categoryOrders.push({ category, order: rank });
  return { ...values, categoryOrders };
}
