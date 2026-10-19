import { tinaField } from 'tinacms/dist/react';
import { Database, ArrowRight, Code } from 'lucide-react';
import { Tag } from '@/components/UI';
import Breadcrumb from '@/components/Breadcrumb';

import { formatTitle, cleanTitle } from '@/helpers/text-helpers';
import styles from '@/styles/pages/_project-detail.module.scss';
import MarkdownExportMenu from '@/components/MarkdownExportMenu';
import React from 'react';

export interface ExportData {
  content: string;
  metadata: Record<string, unknown>;
  filename: string;
}

export type ProjectData = {
  title: string;
  type?: string;
  status?: string;
  role?: string;
  client?: string;
  image?: string;
  imageCaption?: string;
  imageCredit?: string;
  stack?: string[];
  experienceSlug?: string;
  timeline?: string;
  codeSnippet?: string;
};

const defaultLabels = {
  projects: 'projects', status: 'STATUS', role: 'Role', timeline: 'Timeline', client: 'Client',
  specs: 'Technical Specs', stack: 'STACK', code: 'CODE BLUEPRINT', next: 'NEXT PROJECT',
  experience: 'VIEW EXPERIENCE', experienceDestination: 'IN RESUME',
};

interface ProjectDetailViewProps {
  frontmatter: ProjectData;
  sharedFrontmatter?: ProjectData;
  slug?: string;
  headerNode?: React.ReactNode;
  exportMenuNode?: React.ReactNode;
  footerNode?: React.ReactNode;
  heroBadge?: React.ReactNode;
  imageAlt?: string;
  labels?: Partial<typeof defaultLabels>;
  nextLink?: string;
  children?: React.ReactNode;
  exportData?: ExportData;
  experienceLink?: string;
}

// One visual template for Tina-backed projects and local editorial drafts.
export default function ProjectDetailView({ frontmatter, sharedFrontmatter, slug, headerNode, exportMenuNode, footerNode, heroBadge, imageAlt, labels, nextLink, children, exportData, experienceLink }: ProjectDetailViewProps) {
  const text = { ...defaultLabels, ...labels };
  return (
    <div className={styles.projectDetail}>
      <div className="page-container">
        {headerNode}

        <div className={styles.projectDetail__breadcrumbRow}>
          <Breadcrumb
            paths={[
              { name: text.projects, href: '/' },
              ...(slug?.includes('/')
                ? slug.split('/').slice(0, -1).map((s: string) => s.charAt(0).toUpperCase() + s.slice(1))
                : []),
              cleanTitle(frontmatter.title)
            ]}
          />
          {exportMenuNode ?? (exportData && <MarkdownExportMenu {...exportData} />)}
        </div>

        {/* Header Section */}
        <header className={styles.projectDetail__header}>
          <div className={styles.projectDetail__headerInfo}>
            <div
              className={styles.projectDetail__typeTag}
              data-tina-field={tinaField(frontmatter, 'type')}
            >
              <Database size={14} />
              <span>{frontmatter.type}</span>
            </div>
            <h1
              className={styles.projectDetail__title}
              data-tina-field={tinaField(frontmatter, 'title')}
            >
              {formatTitle(frontmatter.title)}
            </h1>
          </div>

          <div className={styles.projectDetail__sidebarHeader}>
            <div className={styles.projectDetail__meta}>
              <div className={styles.projectDetail__metaRow}>
                <span>{text.status}</span>
                <span
                  className={styles.projectDetail__status}
                  data-tina-field={tinaField(frontmatter, 'status')}
                >
                  {frontmatter.status || 'DEPLOYED'}
                </span>
              </div>
              <div className={styles.projectDetail__infoList}>
                <div className={styles.projectDetail__infoItem}>
                  <span className={styles.projectDetail__infoItemKey}>{text.role}</span>
                  <span
                    className={styles.projectDetail__infoItemVal}
                    data-tina-field={tinaField(frontmatter, 'role')}
                  >
                    {frontmatter.role || 'Lead Designer'}
                  </span>
                </div>
                <div className={styles.projectDetail__infoItem}>
                  <span className={styles.projectDetail__infoItemKey}>{text.timeline}</span>
                  <span
                    className={styles.projectDetail__infoItemVal}
                    data-tina-field={tinaField(frontmatter, 'timeline')}
                  >
                    {frontmatter.timeline || '12 Weeks'}
                  </span>
                </div>
                <div className={styles.projectDetail__infoItem}>
                  <span className={styles.projectDetail__infoItemKey}>{text.client}</span>
                  <span
                    className={styles.projectDetail__infoItemVal}
                    data-tina-field={tinaField(frontmatter, 'client')}
                  >
                    {frontmatter.client || 'Nexus Financial'}
                  </span>
                </div>
                {experienceLink && <a
                  className={`${styles.projectDetail__infoItem} ${styles.projectDetail__experienceLink}`}
                  href={experienceLink}
                  data-tina-field={tinaField(sharedFrontmatter ?? frontmatter, 'experienceSlug')}
                >
                  <span className={styles.projectDetail__infoItemKey}>{text.experience}</span>
                  <span className={styles.projectDetail__infoItemVal}>{text.experienceDestination}<ArrowRight size={14} aria-hidden="true" /></span>
                </a>}
              </div>
            </div>
          </div>
        </header>

        {/* Main Feature Image */}
        {frontmatter.image && (
          <figure
            className={styles.projectDetail__hero}
            data-tina-field={tinaField(sharedFrontmatter ?? frontmatter, 'image')}
          >
            <div className={styles.projectDetail__heroFrame}>
              <img
                src={(() => {
                  const rawImg = frontmatter.image;
                  if (!rawImg) return '';
                  const img = rawImg.replace(/['"]+/g, '');
                  if (img.includes('http')) {
                    const httpIndex = img.indexOf('http');
                    return img.substring(httpIndex);
                  }
                  return img.startsWith('/') ? img : `/${img}`;
                })()}
                alt={imageAlt ?? cleanTitle(frontmatter.title)}
                className={styles.projectDetail__heroImage}
                referrerPolicy="no-referrer"
              />
              <div className={styles.projectDetail__liveBadge}>
                {heroBadge ?? <><span aria-hidden="true" className={styles.projectDetail__liveBadgeDot}></span>Live Preview</>}
              </div>
            </div>
            {(frontmatter.imageCaption || frontmatter.imageCredit) && <figcaption className={styles.projectDetail__heroCaption}>
              <span data-tina-field={tinaField(frontmatter, 'imageCaption')}>{frontmatter.imageCaption}</span>
              {frontmatter.imageCredit && <small data-tina-field={tinaField(frontmatter, 'imageCredit')}>{frontmatter.imageCredit}</small>}
            </figcaption>}
          </figure>
        )}

        <div className={styles.projectDetail__mainGrid}>
          <article className={styles.projectDetail__content}>
            {children}
          </article>

          {/* Sidebar */}
          <aside className={styles.projectDetail__sidebar}>
            <div className={styles.projectDetail__stickyCard}>
              <div className={styles.projectDetail__stickyHeader}>
                specs.json
              </div>

              <div className={styles.projectDetail__stickyBody}>
                <div className={styles.projectDetail__stickyTitle}>
                  <Code size={18} />
                  <h3>{text.specs}</h3>
                </div>

                <div
                  className={styles.projectDetail__specGroup}
                  data-tina-field={tinaField(sharedFrontmatter ?? frontmatter, 'stack')}
                >
                  <h4 className={styles.projectDetail__specGroupLabel}>{text.stack}</h4>
                  <div className={styles.projectDetail__tagStack}>
                    {Array.isArray(frontmatter.stack)
                      ? frontmatter.stack.map((s: string) => <Tag key={s}>{s}</Tag>)
                      : <Tag>{frontmatter.stack}</Tag>}
                  </div>
                </div>

                {frontmatter.codeSnippet && (
                  <div
                    className={styles.projectDetail__specGroup}
                    data-tina-field={tinaField(frontmatter, 'codeSnippet')}
                  >
                    <h4 className={styles.projectDetail__specGroupLabel}>{text.code}</h4>
                    <div className={styles.projectDetail__codeCard}>
                      <pre className={styles.projectDetail__codePre}>
                        <code>{frontmatter.codeSnippet}</code>
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {nextLink ? (
              <a href={nextLink} className={styles.projectDetail__nextBtn}>
                {text.next} <ArrowRight size={18} />
              </a>
            ) : (
              <button className={styles.projectDetail__nextBtn}>
                {text.next} <ArrowRight size={18} />
              </button>
            )}
          </aside>
        </div>
        {footerNode}
      </div>
    </div>
  );
}
