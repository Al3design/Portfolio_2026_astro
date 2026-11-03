import { localEditorHostname } from './project-editor-route';

export function shopEditorRoute(document: { _sys: { relativePath: string } }, hostname: string): string | undefined {
  // Draft review is registered only by astro dev. Cloud keeps its native form
  // until a separately authorized deployed preview can serve draft documents.
  if (!localEditorHostname(hostname)) return undefined;
  const slug = document._sys.relativePath.replace(/\.json$/, '');
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) ? `/revision/tienda/es/${slug}` : undefined;
}
