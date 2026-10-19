import matter from 'gray-matter';
import { articleBlockKind, articleImageHref, type ArticleBlock } from './article-blocks';
import type { SiteLanguageLinks } from './site-navigation';
import { localizedProject, projectLanguages, projectUrl, type ProjectDocument } from './project-locales';

// Raw frontmatter is canonical for custom fields (Astro v6 content-layer rule).
const files = import.meta.glob<string>('../content/projects/*.mdx', { eager: true, query: '?raw', import: 'default' });
export const projectSources = Object.entries(files).map(([path, raw]) => {
  const slug = path.split('/').pop()!.replace(/\.mdx$/, '').toLowerCase();
  const parsed = matter(raw);
  return { slug, relativePath: path.split('/').pop()!, metadata: parsed.data as ProjectDocument, body: parsed.content };
});
export function projectSource(slug: string) {
  const source = projectSources.find(item => item.slug === slug);
  if (!source) throw new Error(`Missing editorial source: ${slug}`);
  return source;
}
export function projectIsPublished(slug: string) {
  const { metadata } = projectSource(slug);
  // Existing documents without the new flag retain their current visibility.
  if (metadata.publicationStatus === 'draft') return false;
  if (['blocks', 'bilingual'].includes(metadata.contentFormat ?? '') && metadata.publicationStatus !== 'published') return false;
  if (metadata.publicationStatus === 'published' && ['blocks', 'bilingual'].includes(metadata.contentFormat ?? '')) {
    const fail = (message: string): never => { throw new Error(`${slug}: ${message}`); };
    if (metadata.experienceSlug) {
      if (metadata.experienceSlug === slug) fail('An article cannot reference itself as its employment experience.');
      const parent = projectSource(metadata.experienceSlug).metadata;
      if (parent.showInResume !== true || parent.publicationStatus === 'draft' || (['blocks', 'bilingual'].includes(parent.contentFormat ?? '') && parent.publicationStatus !== 'published')) fail('Related experience must be visible in Resume.');
    }
    if (metadata.language !== 'es' && metadata.language !== 'en') fail('Select the article language.');
    const timestamp = metadata.date instanceof Date ? metadata.date.getTime() : Date.parse(metadata.date ?? '');
    if (!Number.isFinite(timestamp)) fail('Published articles require a real date.');
    const languages = projectLanguages(metadata);
    if (!languages.length) fail('Published articles require a translation.');
    const media = (src?: string) => { if (!src || !/^(https?:\/\/|\/[^/])/.test(src) || src.startsWith('/revision/')) fail('Replace local review media with a public /asset or HTTPS URL before publishing.'); };
    if (metadata.image) media(metadata.image);
    for (const language of languages) {
      const translated = localizedProject(metadata, language);
      if (metadata.image && !translated.imageAlt?.trim()) fail(`Cover image requires ${language} alternative text.`);
      if (!translated.contentBlocks?.length) fail(`Published articles require ${language} content.`);
      for (const block of translated.contentBlocks as ArticleBlock[]) {
      const kind = articleBlockKind(block);
      if (!kind) fail('Unknown editorial block.');
      if (kind !== 'image' && !block.title?.trim()) fail('Text, gallery, video and card groups require a title.');
      if (kind === 'image') { media(block.src); if (!block.alt?.trim()) fail('Image requires alternative text.'); }
      if (kind === 'image' && block.href && !articleImageHref(block.href)) fail('Image link must be an HTTPS URL or a site path.');
      if (kind === 'gallery') {
        if (block.layout && !['grid','columns','previews'].includes(block.layout)) fail('Gallery layout must be grid, columns or previews.');
        if (!block.images?.length) fail('Gallery requires images.');
        for (const image of block.images ?? []) { media(image.src); if (!image.alt?.trim()) fail('Gallery image requires alternative text.'); if (image.href && !articleImageHref(image.href)) fail('Gallery link must be an HTTPS URL or a site path.'); }
      }
      if (kind === 'video') {
        media(block.src);
        if (!block.title?.trim() || !block.transcript?.trim()) fail('Video requires a title and description/transcript.');
        if (typeof block.hasAudio !== 'boolean') fail('Declare whether the video contains meaningful audio.');
        if (block.hasAudio && !block.captions) fail('Video with meaningful audio requires WebVTT captions.');
        if (block.poster) media(block.poster);
        if (block.captions) media(block.captions);
      }
      if (kind === 'section' && !block.text?.trim()) fail('Text section requires content.');
      if (kind === 'section' && block.href && !articleImageHref(block.href)) fail('Section link must be an HTTPS URL or a site path.');
      if (kind === 'cards' && (!block.cards?.length || block.cards.some(card => !card.title?.trim() || !card.text?.trim()))) fail('Cards require a title and text.');
      }
    }
  }
  return true;
}
export function projectLanguageLinks(slug: string, preview = false): SiteLanguageLinks {
  const source = projectSource(slug);
  const links: SiteLanguageLinks = {};
  if (source.metadata.contentFormat === 'bilingual') {
    const published = projectIsPublished(slug) && source.metadata.showInPortfolio !== false;
    if (!published && !preview) return links;
    for (const language of projectLanguages(source.metadata)) links[language] = projectUrl(slug, source.metadata, language, !published);
    return links;
  }
  const group = source.metadata.translationKey;
  for (const item of projectSources) {
    if (item.slug !== slug && (!group || item.metadata.translationKey !== group)) continue;
    const language = item.metadata.language === 'es' ? 'es' : 'en';
    const published = projectIsPublished(item.slug) && item.metadata.showInPortfolio !== false;
    if (!published && !preview) continue;
    if (links[language]) throw new Error(`Duplicate ${language} translation for ${group ?? slug}`);
    links[language] = `${published ? '/projects' : '/revision/proyectos'}/${item.slug}`;
  }
  return links;
}
