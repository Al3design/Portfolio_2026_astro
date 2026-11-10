import { projectDefaultLanguage, projectUrl, type ProjectDocument } from './project-locales.ts';

export type TinaProjectRouteDocument = ProjectDocument & { _sys: { relativePath: string } };

// Tina's collection list only selects _sys. Do not infer publication from
// missing fields: local editing has its own route for every document.
export function projectEditorRoute(document: TinaProjectRouteDocument, local: boolean): string | undefined {
  const slug = document._sys.relativePath.replace(/\.mdx$/, '').toLowerCase();
  if (!/^[a-z0-9][a-z0-9_-]*$/.test(slug)) return undefined;
  if (local) return `/revision/proyectos/${slug}`;
  // Metadata-only clicks outside local development use Tina's native form.
  // This also keeps drafts editable when no deployed preview is available.
  if (!document.title || document.publicationStatus === 'draft' || document.showInPortfolio === false) return undefined;
  return projectUrl(slug, document, projectDefaultLanguage(document));
}

// Collection listings contain only _sys, so absence of title is not a draft.
// The deployed page, rather than incomplete listing metadata, decides whether
// Cloud can open visual editing. Missing pages retain Tina's native editor.
export async function resolveProjectEditorRoute(
  document: TinaProjectRouteDocument,
  local: boolean,
  request: typeof fetch = fetch,
): Promise<string | undefined> {
  const slug = document._sys.relativePath.replace(/\.mdx$/, '').toLowerCase();
  if (!/^[a-z0-9][a-z0-9_-]*$/.test(slug)) return undefined;
  if (local) return projectEditorRoute(document, true);
  if (document.publicationStatus === 'draft' || document.showInPortfolio === false) return undefined;
  const route = projectEditorRoute(document, false) ?? `/projects/${slug}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 4000);
  try {
    const response = await request(route, {
      method: 'HEAD', redirect: 'error', cache: 'no-store', signal: controller.signal,
    });
    return response.status === 200 ? route : undefined;
  } catch {
    return undefined;
  } finally {
    clearTimeout(timeout);
  }
}
export function localEditorHostname(hostname: string) {
  return ['localhost', '127.0.0.1', '[::1]', '::1'].includes(hostname);
}
