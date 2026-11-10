export type VisualOrderScope = { category: string; projects: { project: string }[] };
export type VisualOrderDocument = { scopes: VisualOrderScope[] };

export function parseVisualOrder(input: unknown): VisualOrderDocument {
  if (typeof input !== 'object' || input === null || !('scopes' in input) || !Array.isArray(input.scopes)) throw new Error('Falta la lista de ámbitos de orden.');
  const categories = new Set<string>();
  const scopes: VisualOrderScope[] = [];
  const rawScopes: unknown[] = input.scopes;
  for (const scope of rawScopes) {
    if (typeof scope !== 'object' || scope === null || !('category' in scope) || typeof scope.category !== 'string'
      || !/^[a-z0-9-]+$/.test(scope.category) || !('projects' in scope) || !Array.isArray(scope.projects)
      || categories.has(scope.category)) throw new Error('Ámbito de orden inválido o duplicado.');
    categories.add(scope.category);
    const seen = new Set<string>();
    const projects: { project: string }[] = [];
    const rawProjects: unknown[] = scope.projects;
    for (const item of rawProjects) {
      if (typeof item !== 'object' || item === null || !('project' in item) || typeof item.project !== 'string'
        || !/^src\/content\/projects\/[a-zA-Z0-9_-]+\.mdx$/.test(item.project) || seen.has(item.project.toLowerCase())) throw new Error('Referencia de artículo inválida o duplicada.');
      seen.add(item.project.toLowerCase());
      projects.push({ project: item.project });
    }
    scopes.push({ category: scope.category, projects });
  }
  return { scopes };
}

export function visualOrderRanks(relativePath: string, document: VisualOrderDocument): Record<string, number> {
  const reference = `src/content/projects/${relativePath}`.toLowerCase();
  return Object.fromEntries(document.scopes.map(scope => {
    const index = scope.projects.findIndex(item => item.project.toLowerCase() === reference);
    // Unlisted/new articles append automatically; the numeric value is no longer needed.
    return [scope.category, index === -1 ? scope.projects.length : index];
  }));
}

export function replaceVisualScope(document: VisualOrderDocument, category: string, ordered: string[], eligible: string[]): VisualOrderDocument {
  const allowed = new Set(eligible);
  if (ordered.length !== eligible.length || new Set(ordered).size !== ordered.length || ordered.some(path => !allowed.has(path))) {
    throw new Error('La lista cambió. Volvé a cargar el orden antes de guardar.');
  }
  const current = document.scopes.find(scope => scope.category === category)?.projects ?? [];
  // Preserve hidden/deleted references outside the editable subset, including their slots.
  const replacements = [...ordered];
  const projects = current.map(item => allowed.has(item.project) ? { project: replacements.shift()! } : item);
  projects.push(...replacements.map(project => ({ project })));
  return parseVisualOrder({ scopes: [...document.scopes.filter(scope => scope.category !== category), { category, projects }] });
}
