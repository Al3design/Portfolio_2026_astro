import type { ArticleBlock } from './article-blocks';
import type { SiteLanguage } from './site-navigation';

export type ProjectLocale = {
  title?: string; description?: string; type?: string; role?: string;
  client?: string; timeline?: string; status?: string;
  imageAlt?: string; imageCaption?: string; imageCredit?: string;
  contentBlocks?: ArticleBlock[];
};
export type ProjectDocument = ProjectLocale & {
  contentFormat?: string; language?: SiteLanguage;
  locales?: Partial<Record<SiteLanguage, ProjectLocale>>;
  publicationStatus?: string; translationKey?: string;
  experienceSlug?: string;
  image?: string; imagePortrait?: string; stack?: string[]; categories?: string[];
  date?: string | Date; year?: string; order?: number;
  showInPortfolio?: boolean; showInResume?: boolean;
  points?: string[]; codeSnippet?: string;
};
export function projectLanguages(document: ProjectDocument): SiteLanguage[] {
  if (document.contentFormat !== 'bilingual') return [document.language === 'es' ? 'es' : 'en'];
  return (['es', 'en'] as const).filter(language => !!document.locales?.[language]?.title?.trim());
}
export function projectDefaultLanguage(document: ProjectDocument): SiteLanguage {
  const available = projectLanguages(document);
  const preferred = document.language ?? 'es';
  return available.includes(preferred) ? preferred : available[0] ?? preferred;
}
export function localizedProject(document: ProjectDocument, language: SiteLanguage = projectDefaultLanguage(document)): ProjectDocument {
  if (document.contentFormat !== 'bilingual') return document;
  const locale = document.locales?.[language];
  if (!locale?.title?.trim()) throw new Error(`Missing ${language} article translation`);
  // Clear localizable root fields: missing translations never borrow another language.
  return {
    ...document, title: undefined, description: undefined, type: undefined,
    role: undefined, client: undefined, timeline: undefined, status: undefined,
    imageAlt: undefined, imageCaption: undefined, imageCredit: undefined, contentBlocks: undefined,
    ...locale, language,
  };
}
export function projectUrl(slug: string, document: ProjectDocument, language: SiteLanguage, preview = false) {
  const base = preview ? '/revision/proyectos' : '/projects';
  const prefix = document.contentFormat === 'bilingual' && language !== projectDefaultLanguage(document) ? `/${language}` : '';
  return `${base}${prefix}/${slug}`;
}
