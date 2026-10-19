import { projectDefaultLanguage, projectUrl, type ProjectDocument } from './project-locales.ts';

export type TinaProjectRouteDocument = ProjectDocument & { _sys: { relativePath: string } };

// Tina's collection list only selects _sys. Do not infer publication from
// missing fields: local editing has its own route for every document.
export function projectEditorRoute(document: TinaProjectRouteDocument, local: boolean): string | undefined {
  const slug = document._sys.relativePath.replace(/\.mdx$/, '').toLowerCase();
  if (local) return `/revision/proyectos/${slug}`;
  // Metadata-only clicks outside local development use Tina's native form.
  // This also keeps drafts editable when no deployed preview is available.
  if (!document.title || document.publicationStatus === 'draft') return undefined;
  return projectUrl(slug, document, projectDefaultLanguage(document));
}
export function localEditorHostname(hostname: string) {
  return ['localhost', '127.0.0.1', '[::1]', '::1'].includes(hostname);
}
