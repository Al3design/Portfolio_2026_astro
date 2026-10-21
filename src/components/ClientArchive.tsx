'use client';

import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { useTina, tinaField } from 'tinacms/dist/react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Tag } from '@/components/UI';
import styles from '@/styles/pages/_archive.module.scss';
import { clsx } from 'clsx';
import { cleanTitle, formatTitle } from '@/helpers/text-helpers';
import Breadcrumb from '@/components/Breadcrumb';
import { PROJECT_CATEGORIES } from '@/lib/categories';
import Pagination from '@/components/Pagination';

type PageArchive = { title: string; subtitle?: string };
type ArchiveProject = {
  slug: string;
  title: string;
  year?: string;
  status?: string;
  stack?: string[];
  categories?: string[];
};
type Props = { projects: ArchiveProject[]; query: string; variables: object; data: any };

export default function ClientArchive({ projects, query, variables, data }: Props) {
  const { data: tinaData } = useTina({ query, variables, data });
  const page = tinaData.pages as PageArchive;
  const [year, setYear] = useState('all');
  const [category, setCategory] = useState('all');
  const [requestedPage, setRequestedPage] = useState(1);
  const [requestedPageSize, setRequestedPageSize] = useState<number | 'all'>(5);
  const resultsSummary = useRef<HTMLDivElement>(null);
  const years = [...new Set(projects.map(project => project.year?.trim()).filter((value): value is string => Boolean(value)))].sort((a, b) => a.localeCompare(b, undefined, { numeric: true })).reverse();
  const hasUndated = projects.some(project => !project.year?.trim());
  const categories = PROJECT_CATEGORIES.filter(option => projects.some(project => project.categories?.includes(option.value)));
  const filteredProjects = projects.filter(project => {
    const projectYear = project.year?.trim();
    const matchesYear = year === 'all' || (year === 'undated' ? !projectYear : projectYear === year);
    return matchesYear && (category === 'all' || project.categories?.includes(category));
  });
  const resultCount = filteredProjects.length;
  const pageSizes = Array.from({ length: Math.max(0, Math.floor((resultCount - 1) / 5)) }, (_, index) => (index + 1) * 5);
  const pageSize = requestedPageSize === 'all' ? Math.max(1, resultCount) : Math.min(requestedPageSize, resultCount || requestedPageSize);
  const selectedPageSize = requestedPageSize === 'all' || (resultCount > 0 && requestedPageSize >= resultCount) ? 'all' : String(requestedPageSize);
  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / pageSize));
  const currentPage = Math.min(requestedPage, totalPages);
  const pageOffset = (currentPage - 1) * pageSize;
  const visibleProjects = filteredProjects.slice(pageOffset, pageOffset + pageSize);
  function selectPage(nextPage: number) {
    flushSync(() => setRequestedPage(Math.max(1, Math.min(nextPage, totalPages))));
    resultsSummary.current?.focus({ preventScroll: true });
    resultsSummary.current?.scrollIntoView({ block: 'start', behavior: 'instant' });
  }

  return (
    <div className="page-container">
      <header className={styles.archive__header}>
        <div className={styles.archive__breadcrumbRow}>
          <Breadcrumb paths={['archive']} />
        </div>
        <h1
          className={styles.archive__title}
          data-tina-field={tinaField(page, 'title')}
        >
          {formatTitle(page.title)}
        </h1>
        <p
          className={styles.archive__subtitle}
          data-tina-field={tinaField(page, 'subtitle')}
        >
          {page.subtitle}
        </p>
      </header>

      <div className={styles.archive__table}>
        {/* Terminal Header */}
        <div className={styles.archive__terminalHeader}>
          <div className={styles.archive__dots}>
            <div className={clsx(styles.archive__dot, styles['archive__dot--red'])}></div>
            <div className={clsx(styles.archive__dot, styles['archive__dot--yellow'])}></div>
            <div className={clsx(styles.archive__dot, styles['archive__dot--green'])}></div>
          </div>
          <div className={styles.archive__fileName}>query_db.sh</div>
        </div>

        <div className={styles.archive__tableFooter}>
          <div ref={resultsSummary} tabIndex={-1} className={styles.archive__resultsSummary} role="status" aria-live="polite" aria-atomic="true">
            {filteredProjects.length > 0 ? `Showing ${pageOffset + 1}–${pageOffset + visibleProjects.length} of ${filteredProjects.length} entries · Page ${currentPage} of ${totalPages}` : 'No projects match these filters.'}
          </div>
          <div className={styles.archive__controls}>
            <select className={styles.archive__select} aria-label="Filter by year" value={year} onChange={event => { setYear(event.target.value); setRequestedPage(1); }}>
              <option value="all">All Years</option>
              {years.map(value => <option key={value} value={value}>{value}</option>)}
              {hasUndated && <option value="undated">Date not specified</option>}
            </select>
            <select className={styles.archive__select} aria-label="Filter by category" value={category} onChange={event => { setCategory(event.target.value); setRequestedPage(1); }}>
              <option value="all">All Categories</option>
              {categories.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
            <select className={styles.archive__select} aria-label="Projects per page" disabled={resultCount === 0} value={resultCount === 0 ? 'empty' : selectedPageSize} onChange={event => {
              const value = event.target.value;
              const nextSize = Number(value);
              if (value === 'all' || pageSizes.includes(nextSize)) {
                setRequestedPageSize(value === 'all' ? 'all' : nextSize);
                setRequestedPage(1);
              }
            }}>
              {pageSizes.map(value => <option key={value} value={value}>{value} / page</option>)}
              {resultCount > 0 ? <option value="all">All ({resultCount})</option> : <option value="empty">No entries</option>}
            </select>
            {(year !== 'all' || category !== 'all') && <button type="button" className={styles.archive__pageBtn} onClick={() => { setYear('all'); setCategory('all'); setRequestedPage(1); }}>Clear filters</button>}
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={selectPage} controlsId="archive-results" label="Archive pagination" />
          </div>
        </div>
        {/* Table Head */}
        <div className={styles.archive__gridHeader} aria-hidden="true">
          <div className={styles.archive__headerYear}>Year</div>
          <div className={styles.archive__headerProject}>Project_ID</div>
          <div className={styles.archive__headerStack}>Stack</div>
          <div className={styles.archive__headerAction}>Action</div>
        </div>

        {/* Table Body */}
        <div className={styles.archive__gridBody} id="archive-results">
          {filteredProjects.length === 0 && <p className={styles.archive__tableFooter}>No projects match these filters.</p>}
          {visibleProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className={styles.archive__row}
            >
              <div className={styles.archive__year}>{project.year?.trim() || 'Date not specified'}</div>
              <div className={styles.archive__projectName}>
                <a href={`/projects/${project.slug}`} className={styles.archive__projectTitle}>
                  {cleanTitle(project.title)}
                </a>
                {project.status && (
                  <span className={styles.archive__status}>{project.status}</span>
                )}
              </div>
              <div className={styles.archive__stackCol}>
                {project.stack?.slice(0, 3).map(s => <Tag key={s}>{s}</Tag>)}
              </div>
              <div className={styles.archive__actionCol}>
                <a href={`/projects/${project.slug}`} className={styles.archive__actionBtn} aria-label={`View project: ${cleanTitle(project.title)}`}>
                  VIEW.MD <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
