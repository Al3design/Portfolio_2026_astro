'use client';

import { useState, useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';
import { useTina, tinaField } from 'tinacms/dist/react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, ExternalLink, LayoutGrid, List, RotateCcw, SlidersHorizontal } from 'lucide-react';
import { SyntaxCard, Tag, KeyValue } from '@/components/UI';


import styles from '@/styles/pages/_home.module.scss';
import { PROJECT_CATEGORIES } from '@/lib/categories';
import { clsx } from 'clsx';
import { cleanTitle, formatTitle } from '@/helpers/text-helpers';
import Breadcrumb from '@/components/Breadcrumb';
import MarkdownExportMenu from '@/components/MarkdownExportMenu';
import Pagination from '@/components/Pagination';
import { registerWebTools } from '@/lib/webmcp';

interface ExportData {
  content: string;
  metadata: Record<string, unknown>;
  filename: string;
}

type PageHome = { title?: string; mission?: string; status?: string; location?: string; timezone?: string };
type Props = { projects: any[]; query: string; variables: object; data: any; exportData?: ExportData };

const PROJECTS_PER_PAGE = 3;

export default function ClientHome({ projects, query, variables, data, exportData }: Props) {
  const { data: tinaData } = useTina({ query, variables, data });
  const page = tinaData.pages as PageHome;
  // The server and the first client render must use identical preferences.
  const [layout, setLayout] = useState<'cards' | 'list'>('cards');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [mounted, setMounted] = useState(false);
  const [requestedPage, setRequestedPage] = useState(1);
  const resultsSummary = useRef<HTMLParagraphElement>(null);
  const mobileFilters = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const storedLayout = localStorage.getItem('portfolio-layout');
    const storedFilter = localStorage.getItem('portfolio-filter');
    if (storedLayout === 'cards' || storedLayout === 'list') setLayout(storedLayout);
    if (storedFilter !== null && (storedFilter === 'all' || PROJECT_CATEGORIES.some(category => category.value === storedFilter))) {
      setActiveFilter(storedFilter);
    }
    const initialPage = Number(new URLSearchParams(window.location.search).get('page'));
    if (Number.isSafeInteger(initialPage) && initialPage > 0) setRequestedPage(initialPage);
    setMounted(true);
  }, []);

  useEffect(() => registerWebTools([{
    name: 'portfolio_browse_projects',
    description: 'Filter the public projects, choose cards or list, and browse three matching projects per page.',
    inputSchema: {
      type: 'object',
      properties: {
        category: { type: 'string', enum: ['all', ...PROJECT_CATEGORIES.map(c => c.value)], description: 'Project category; all resets the filter.' },
        layout: { type: 'string', enum: ['cards', 'list'], description: 'How to display the matching projects.' },
        page: { type: 'integer', minimum: 1, description: 'Page number, starting at 1. Defaults to the first page.' },
      },
      required: ['category', 'layout'],
      additionalProperties: false,
    },
    execute: ({ category, layout: requestedLayout, page: pageNumber = 1 }) => {
      if (typeof category !== 'string' || !['all', ...PROJECT_CATEGORIES.map(c => c.value)].includes(category)) {
        return { error: 'Unknown category', categories: ['all', ...PROJECT_CATEGORIES.map(c => c.value)] };
      }
      if (requestedLayout !== 'cards' && requestedLayout !== 'list') {
        return { error: 'layout must be cards or list' };
      }
      if (typeof pageNumber !== 'number' || !Number.isSafeInteger(pageNumber) || pageNumber < 1) {
        return { error: 'page must be a positive integer' };
      }
      const matching = projects.filter(p => category === 'all' || p.categories?.includes(category));
      const totalPages = Math.max(1, Math.ceil(matching.length / PROJECTS_PER_PAGE));
      const selectedPage = Math.min(pageNumber, totalPages);
      flushSync(() => {
        setActiveFilter(category);
        setLayout(requestedLayout);
        setRequestedPage(selectedPage);
      });
      localStorage.setItem('portfolio-filter', category);
      localStorage.setItem('portfolio-layout', requestedLayout);
      return {
        category, layout: requestedLayout, total: matching.length,
        page: selectedPage, pageSize: PROJECTS_PER_PAGE, totalPages,
        projects: matching.slice((selectedPage - 1) * PROJECTS_PER_PAGE, selectedPage * PROJECTS_PER_PAGE)
          .map(p => ({ title: cleanTitle(p.title), href: `/projects/${p.slug}` })),
      };
    },
  }]), [projects]);

  // Filtered projects — 'all' shows everything, otherwise match categories[]
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p =>
        Array.isArray(p.categories) && p.categories.includes(activeFilter)
      );

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE));
  const currentPage = Math.min(requestedPage, totalPages);
  const pageOffset = (currentPage - 1) * PROJECTS_PER_PAGE;
  const visibleProjects = filteredProjects.slice(pageOffset, pageOffset + PROJECTS_PER_PAGE);
  const featuredProject = visibleProjects[0];

  // Preserve the page when following an article and returning to the home page.
  // Keep Astro's existing history state and unrelated query parameters intact.
  useEffect(() => {
    if (!mounted) return;
    const url = new URL(window.location.href);
    if (currentPage > 1) url.searchParams.set('page', String(currentPage));
    else url.searchParams.delete('page');
    if (url.href !== window.location.href) window.history.replaceState(window.history.state, '', url.href);
  }, [mounted, currentPage]);

  function selectFilter(filter: string) {
    setActiveFilter(filter);
    setRequestedPage(1);
    localStorage.setItem('portfolio-filter', filter);
    if (mobileFilters.current?.open) {
      mobileFilters.current.open = false;
      mobileFilters.current.querySelector('summary')?.focus();
    }
  }

  function selectLayout(nextLayout: 'cards' | 'list') {
    setLayout(nextLayout);
    localStorage.setItem('portfolio-layout', nextLayout);
  }

  function filterTags() {
    return (
      <div className={styles.home__filterTags}>
        <Tag active={activeFilter === 'all'} onClick={() => selectFilter('all')}>All Output</Tag>
        {PROJECT_CATEGORIES.map(cat => (
          <Tag key={cat.value} active={activeFilter === cat.value} onClick={() => selectFilter(cat.value)}>
            {cat.label}
          </Tag>
        ))}
      </div>
    );
  }

  function selectPage(nextPage: number) {
    const destination = Math.max(1, Math.min(nextPage, totalPages));
    if (destination === currentPage) return;
    flushSync(() => setRequestedPage(destination));
    resultsSummary.current?.focus({ preventScroll: true });
    resultsSummary.current?.scrollIntoView({ block: 'start', behavior: 'instant' });
  }

  // Group only this page's projects; filtering and ordering happen before slicing.
  const groupedProjects = Object.entries(
    visibleProjects.reduce((acc: Record<string, any[]>, p) => {
      const key = p.type || 'Other';
      (acc[key] = acc[key] || []).push(p);
      return acc;
    }, {})
  );

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className={styles.home__hero}>
        <div className={styles.home__breadcrumbRow}>
          <Breadcrumb paths={['projects']} />
          {exportData && <MarkdownExportMenu {...exportData} />}
        </div>

        <h1
          className={styles.home__title}
          data-tina-field={tinaField(page, 'title')}
        >
          {formatTitle(page.title || "Compiled Visions.")}
        </h1>

        <KeyValue
          k="const mission"
          v={page.mission || "UX/UI designer with over 14 years of experience."}
          className="italic"
          data-tina-field={tinaField(page, 'mission')}
        />
      </section>

      <div className={styles.home__grid}>
        {/* Sidebar Filters */}
        <aside className={styles.home__sidebar}>
          <div className={clsx(styles.home__mobileControls, !mounted && styles['home__filterGroup--hydrating'])}>
            <details
              ref={mobileFilters}
              className={styles.home__mobileFilters}
              onKeyDown={event => {
                if (event.key === 'Escape' && mobileFilters.current?.open) {
                  event.preventDefault();
                  mobileFilters.current.open = false;
                  mobileFilters.current.querySelector('summary')?.focus();
                }
              }}
            >
              <summary
                className={styles.home__mobileControl}
                aria-label={`Filters: ${PROJECT_CATEGORIES.find(cat => cat.value === activeFilter)?.label ?? 'All Output'}, ${filteredProjects.length} projects`}
                title="Filters"
              >
                <SlidersHorizontal size={18} aria-hidden="true" />
                <span className={styles.home__filterCount} aria-hidden="true">{filteredProjects.length}</span>
                <ChevronDown size={14} aria-hidden="true" />
              </summary>
              <div className={styles.home__mobileFilterPanel}>
                {filterTags()}
              </div>
            </details>
            <div className={styles.home__mobileLayouts} role="group" aria-label="Project layout">
              <button type="button" className={styles.home__mobileControl} aria-label="Cards" title="Cards" aria-pressed={layout === 'cards'} onClick={() => selectLayout('cards')}>
                <LayoutGrid size={18} aria-hidden="true" />
              </button>
              <button type="button" className={styles.home__mobileControl} aria-label="List" title="List" aria-pressed={layout === 'list'} onClick={() => selectLayout('list')}>
                <List size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className={styles.home__desktopControls}>
            <SyntaxCard label="Filters">
              <div className={clsx(styles.home__filterGroup, mounted ? styles['home__filterGroup--ready'] : styles['home__filterGroup--hydrating'])}>
                {filterTags()}
              </div>
            </SyntaxCard>
            <SyntaxCard label="Layout">
              <div className={clsx(styles.home__filterGroup, mounted ? styles['home__filterGroup--ready'] : styles['home__filterGroup--hydrating'])}>
                <div className={styles.home__filterTags}>
                  <Tag active={layout === 'cards'} onClick={() => selectLayout('cards')}>Cards</Tag>
                  <Tag active={layout === 'list'} onClick={() => selectLayout('list')}>List</Tag>
                </div>
              </div>
            </SyntaxCard>
          </div>

            <div className={styles.home__statusInfo}>
              <KeyValue k="status"   v={`"${page.status   || 'available_for_hire'}",`} data-tina-field={tinaField(page, 'status')} />
              <KeyValue k="location" v={`"${page.location || 'remote'}",`}             data-tina-field={tinaField(page, 'location')} />
              <KeyValue k="timezone" v={`"${page.timezone || 'EST'}",`}                data-tina-field={tinaField(page, 'timezone')} />
            </div>

        </aside>

        {/* Project Grid */}
        <div className={styles.home__projects} id="portfolio-results">
          <div className={styles.home__resultsHeader}>
            <p
              ref={resultsSummary}
              className={styles.home__resultsSummary}
              tabIndex={-1}
              role="status"
              aria-atomic="true"
            >
              {filteredProjects.length > 0
                ? `Showing ${pageOffset + 1}–${pageOffset + visibleProjects.length} of ${filteredProjects.length} projects · Page ${currentPage} of ${totalPages}`
                : 'No projects match this filter'}
            </p>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={selectPage} controlsId="portfolio-results" />
          </div>
          {/* Empty state when filter has no matches */}
          {filteredProjects.length === 0 && (
            <motion.div
              className={styles.home__empty}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p>// no output matches this filter</p>
              <button
                className={styles.home__emptyReset}
                onClick={() => selectFilter('all')}
              >
                clear filter →
              </button>
            </motion.div>
          )}

          {filteredProjects.length > 0 && (layout === 'cards' ? (
            <>
              {/* Featured Project */}
              {featuredProject && (
                <motion.div
                  key={featuredProject.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <article className={styles.home__featured}>
                    <a href={`/projects/${featuredProject.slug}`}>
                      <div className={styles.home__featuredGrid}>
                        <div className={styles.home__featuredImageContainer}>
                          {(featuredProject.imagePortrait ?? featuredProject.image) ? (
                            <picture>
                              <source media="(max-width: 768px)" srcSet={featuredProject.image} />
                              <img
                                src={featuredProject.imagePortrait ?? featuredProject.image}
                                alt={featuredProject.imageAlt || cleanTitle(featuredProject.title)}
                                className={styles.home__featuredImage}
                                referrerPolicy="no-referrer"
                              />
                            </picture>
                          ) : null}
                        </div>

                        <div className={styles.home__featuredInfo}>
                          <div className={styles.home__featuredMeta}>
                            <span aria-hidden="true">{"⟡"}</span> {featuredProject.year} {"//"} {featuredProject.type}
                          </div>

                          <h2 className={styles.home__featuredTitle}>
                            {cleanTitle(featuredProject.title)}
                          </h2>

                          <p className={styles.home__featuredDesc}>
                            {featuredProject.description}
                          </p>

                          <div className={styles.home__featuredStack}>
                            {Array.isArray(featuredProject.stack) && featuredProject.stack.map((s: string) => (
                              <Tag key={s}>{s}</Tag>
                            ))}
                          </div>

                          <div className={styles.home__featuredCTA}>
                            READ OUTPUT <ArrowRight size={14} />
                          </div>
                        </div>
                      </div>
                    </a>
                  </article>
                </motion.div>
              )}

              <div className={styles.home__projectGrid}>
                {visibleProjects.slice(1).map((project, i) => (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <a href={`/projects/${project.slug}`} className={styles.home__projectLink}>
                    <article className={styles.home__projectCard}>
                      {(project.imagePortrait ?? project.image) ? (
                        <div className={styles.home__projectCardImageContainer}>
                          <picture>
                            <source media="(max-width: 768px)" srcSet={project.image} />
                            <img
                              src={project.imagePortrait ?? project.image}
                              alt={project.imageAlt || cleanTitle(project.title)}
                              className={styles.home__projectCardImage}
                              referrerPolicy="no-referrer"
                            />
                          </picture>
                        </div>
                      ) : (
                        <div className={styles.home__projectCardCode}>
                           <pre>
                            <code>{project.codeSnippet}</code>
                           </pre>
                        </div>
                      )}

                      <div className={styles.home__projectCardBody}>
                        <div className={styles.home__projectCardMeta}>
                           <span className={clsx(project.slug === 'aura-meditation' ? 'tertiary-text' : 'primary-text')}>
                             {project.slug === 'aura-meditation' ? "🗏" : "⟡"}
                           </span> {project.year}
                        </div>

                        <h3 className={styles.home__projectCardTitle}>
                          {cleanTitle(project.title)}
                        </h3>

                        <div className={styles.home__projectCardDetails}>
                          {project.role && <KeyValue k="Role" v={project.role} />}
                          {project.impact && <KeyValue k="Impact" v={project.impact} />}
                          {project.type && <KeyValue k="Type" v={project.type} />}
                          {project.status && <KeyValue k="Status" v={project.status} />}
                        </div>

                        <div className={styles.home__projectCardFooter}>
                           <div className={styles.home__projectCardLink}>
                              {project.slug === 'aura-meditation' ? 'EXECUTE' : 'VIEW LOG'}
                              <span>
                                {project.slug === 'aura-meditation' ? <ExternalLink size={12} /> : <RotateCcw size={12} />}
                              </span>
                           </div>
                        </div>
                      </div>
                    </article>
                    </a>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            /* List View — grouped by type, arrow + big title */
            <div className={styles.home__listView}>
              {groupedProjects.map(([type, typeProjects], groupIdx) => (
                <motion.div
                  key={type}
                  className={styles.home__listGroup}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: groupIdx * 0.08 }}
                >
                  <p className={styles.home__listGroupTitle}>{type}</p>
                  <ul className={styles.home__listItems}>
                    {typeProjects.map((project) => (
                      <li key={project.slug}>
                        <a href={`/projects/${project.slug}`} className={styles.home__listItem}>

                          <div className={styles.home__listItemContent}>
                            {/* Title + year */}
                            <div className={styles.home__listItemHeader}>
                              <span className={styles.home__listItemTitle}>
                                {cleanTitle(project.title)}
                              </span>
                              {project.year && (
                                <span className={styles.home__listItemYear}>{project.year}</span>
                              )}
                            </div>

                            {/* KeyValue metadata */}
                            {(project.role || project.impact || project.status) && (
                              <div className={styles.home__listItemMeta}>
                                {project.role   && <KeyValue k="Role"   v={project.role} />}
                                {project.impact && <KeyValue k="Impact" v={project.impact} />}
                                {project.status && <KeyValue k="Status" v={project.status} />}
                              </div>
                            )}

                            {/* Description */}
                            {project.description && (
                              <p className={styles.home__listItemDesc}>
                                {project.description}
                              </p>
                            )}

                            {/* Stack tags */}
                            {Array.isArray(project.stack) && project.stack.length > 0 && (
                              <div className={styles.home__listItemTags}>
                                {project.stack.map((s: string) => (
                                  <Tag key={s}>{s}</Tag>
                                ))}
                              </div>
                            )}
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          ))}


        </div>
      </div>
    </div>
  );
}
