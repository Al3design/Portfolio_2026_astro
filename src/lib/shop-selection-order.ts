/** Explicit new selections enter first; existing references keep their saved positions.
 * additions are in insertion order (oldest to newest). This never discovers drafts.
 */
export function prependNewShopReferences(order: readonly string[], additions: readonly string[]): string[] {
  const selected = new Set(order);
  const fresh: string[] = [];
  for (const reference of additions) {
    if (!selected.has(reference)) {
      selected.add(reference);
      fresh.push(reference);
    }
  }
  return [...fresh.reverse(), ...order];
}
