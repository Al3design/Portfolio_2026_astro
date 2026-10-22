import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { projectIsPublished, projectLanguageLinks, projectSource } from '@/lib/project-editorial';
import { canonicalPageUrl } from '@/lib/site-seo';

const escapeXml = (value: string) => value.replace(/[<>&"']/g, character => ({
  '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;',
})[character]!);

export const GET: APIRoute = async ({ site }) => {
  const origin = site ?? new URL('https://al3design.dev');
  const pageEntry = (path: string, alternates: [string, string][] = []) => {
    const links = alternates.map(([language, href]) =>
      `<xhtml:link rel="alternate" hreflang="${escapeXml(language)}" href="${escapeXml(canonicalPageUrl(href, origin).href)}"/>`
    ).join('');
    return `<url><loc>${escapeXml(canonicalPageUrl(path, origin).href)}</loc>${links}</url>`;
  };

  const projects = await getCollection('projects');
  const entries = ['/', '/about', '/resume', '/archive'].map(path => pageEntry(path));
  for (const project of projects) {
    if (!projectIsPublished(project.id) || projectSource(project.id).metadata.showInPortfolio === false) continue;
    const alternates = Object.entries(projectLanguageLinks(project.id)).filter(
      (entry): entry is [string, string] => typeof entry[1] === 'string'
    );
    for (const [, href] of alternates) entries.push(pageEntry(href, alternates));
  }

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
