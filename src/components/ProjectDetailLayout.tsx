import { useTina, tinaField } from 'tinacms/dist/react';
import type React from 'react';
import ProjectDetailView, { type ProjectData, type ExportData } from '@/components/ProjectDetailView';
import ArticleBlocks from '@/components/ArticleBlocks';
import { articleBlocksMarkdown } from '@/lib/article-blocks';
import { projectLabels } from '@/lib/project-labels';
import { localizedProject, projectDefaultLanguage } from '@/lib/project-locales';
import { experienceUrl } from '@/lib/experience-links';
import type { SiteLanguage } from '@/lib/site-navigation';

interface ProjectDetailLayoutProps {
  project: any;           // se mantiene para breadcrumbs (project.slug) y exportData
  query: string;
  variables: object;
  data: any;
  headerNode?: React.ReactNode;
  nextLink?: string;
  children?: React.ReactNode;
  exportData?: ExportData;
  language?: SiteLanguage;
}

export default function ProjectDetailLayout({ project, query, variables, data, headerNode, nextLink, children, exportData, language: requestedLanguage }: ProjectDetailLayoutProps) {
  const { data: tinaData } = useTina({ query, variables, data });
  // Keep server frontmatter available while the local Tina schema regenerates.
  // Once returned by Tina, edited fields take precedence (including empty values).
  const document = { ...project, ...tinaData.projects };
  const language = requestedLanguage ?? projectDefaultLanguage(document);
  const current = localizedProject(document, language);
  const structured = document.contentFormat === 'blocks' || document.contentFormat === 'bilingual';
  const currentExport = exportData && structured ? {
    ...exportData,
    content: articleBlocksMarkdown(current.contentBlocks ?? []),
    metadata: { title: current.title, description: current.description, language, publicationStatus: current.publicationStatus, experienceSlug: current.experienceSlug, categories: current.categories, stack: current.stack, role: current.role, client: current.client, status: current.status, date: current.date, image: current.image, imageAlt: current.imageAlt, imageCaption: current.imageCaption, imageCredit: current.imageCredit },
  } : exportData;
  return (
    <ProjectDetailView
      frontmatter={current as ProjectData}
      sharedFrontmatter={document}
      imageAlt={current.imageAlt || undefined}
      labels={projectLabels(language)}
      slug={project.slug}
      headerNode={headerNode}
      nextLink={nextLink}
      experienceLink={document.experienceSlug ? experienceUrl(document.experienceSlug) : undefined}
      exportData={currentExport}
    >
      {structured ? <div data-tina-field={tinaField(current, 'contentBlocks')}><ArticleBlocks blocks={current.contentBlocks ?? []} language={language} /></div> : children}
    </ProjectDetailView>
  );
}
