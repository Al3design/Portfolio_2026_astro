'use client';

import { useState, useMemo, useEffect } from 'react';
import { useTina, tinaField } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { motion, AnimatePresence } from 'motion/react';
import { Download, ChevronRight, Check, X, Folder } from 'lucide-react';

import { SyntaxCard, Tag, KeyValue } from '@/components/UI';
import styles from '@/styles/pages/_resume.module.scss';
import { clsx } from 'clsx';
import { formatTitle, cleanTitle } from '@/helpers/text-helpers';
import Breadcrumb from '@/components/Breadcrumb';
import MarkdownExportMenu from '@/components/MarkdownExportMenu';
import { experienceId, type RelatedProjectLink } from '@/lib/experience-links';
import { formatAtsResume, formatResumeMarkdown } from '@/lib/ats-cv';

interface ExportData {
  content: string;
  metadata: Record<string, unknown>;
  filename: string;
}

type SkillItem  = { name: string; value: string };
type SkillGroup = { category: string; items: SkillItem[] };
type Education  = { degree?: string; institution?: string; year?: string };
type PageResume = {
  title: string;
  location?: string;
  email?: string;
  status?: string;
  body?: any;
  skillGroups?: SkillGroup[];
  education?: Education[];
};
type Props = { jobs: any[]; query: string; variables: object; data: any; exportData?: ExportData };

export default function ClientResume({ jobs, query, variables, data, exportData }: Props) {
  const { data: tinaData } = useTina({ query, variables, data });
  const page = tinaData.pages as PageResume;
  const contactEmail = page.email?.trim();

  const skills = page.skillGroups ?? [];
  const education = page.education ?? [];

  const experiences = useMemo(() => {
    return jobs.map(job => ({
      id: job.slug ? experienceId(job.slug) : undefined,
      relatedProjects: (job.relatedProjects ?? []) as RelatedProjectLink[],
      role: (job.role || job.title || '') as string,
      company: (job.client || '') as string,
      period: (job.year || '') as string,
      description: (job.description || '') as string,
      stack: (job.stack || []) as string[],
      type: (job.type || '') as string,
      points: (job.points || []) as string[]
    }));
  }, [jobs]);

  const [searchQuery, setSearchQuery] = useState('');
  const [activeTags, setActiveTags] = useState<string[]>([]);
  // Resolve incoming Resume anchors after the server-rendered cards hydrate.
  useEffect(() => {
    const revealExperience = () => {
      let id: string;
      try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
      if (id.startsWith('experience-')) document.getElementById(id)?.scrollIntoView({block: 'start', behavior: 'instant'});
    };
    revealExperience();
    window.addEventListener('hashchange', revealExperience);
    return () => window.removeEventListener('hashchange', revealExperience);
  }, []);

  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    experiences.forEach(exp => exp.stack.forEach(s => tags.add(s.toUpperCase())));
    return Array.from(tags).sort();
  }, [experiences]);

  const filteredExperiences = useMemo(() => {
    return experiences.filter(exp => {
      const searchTerms = searchQuery.trim().toLowerCase();
      const matchesSearch =
        exp.role.toLowerCase().includes(searchTerms) ||
        exp.company.toLowerCase().includes(searchTerms) ||
        exp.description?.toLowerCase().includes(searchTerms) ||
        exp.stack.some(s => s.toLowerCase().includes(searchTerms));
      const matchesTags = activeTags.length === 0 ||
        activeTags.every(tag => exp.stack.some(s => s.toUpperCase() === tag.toUpperCase()));
      return matchesSearch && matchesTags;
    });
  }, [experiences, searchQuery, activeTags]);

  const toggleTag = (tag: string) => {
    setActiveTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  const clearAll = () => { setSearchQuery(''); setActiveTags([]); };

  const isFiltered = Boolean(searchQuery.trim() || activeTags.length);
  const selectionKey = [searchQuery.trim(), ...activeTags].join(' ').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);
  const filenameSuffix = isFiltered ? `_selection${selectionKey ? `_${selectionKey}` : ''}` : '';
  const selectedResume = {
    name: 'ALEJANDRO DELGADO', title: cleanTitle(page.title),
    location: page.location, email: contactEmail, website: 'https://al3design.dev',
    experiences: filteredExperiences, skills, education,
  };
  const selectedExport = exportData && {
    ...exportData,
    content: formatResumeMarkdown(selectedResume),
    metadata: { ...exportData.metadata, title: page.title, location: page.location, email: contactEmail || undefined, status: page.status, selection: isFiltered ? [searchQuery.trim(), ...activeTags].filter(Boolean).join(', ') : 'All experiences', experienceCount: filteredExperiences.length },
    filename: `cv-alejandro-delgado${filenameSuffix}.md`,
  };

  const downloadATS = () => {
    if (!filteredExperiences.length) return;
    const cvContent = formatAtsResume(selectedResume);
    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Alejandro_Delgado_ATS_CV${filenameSuffix}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 2000);
  };

  const downloadCustom = () => { window.print(); };

  return (
    <div className="page-container">
      <div className={styles.resume}>
        <div className={styles.resume__breadcrumbRow}>
          <Breadcrumb paths={['resume']} />
          {selectedExport && <MarkdownExportMenu {...selectedExport} />}
        </div>

        {/* Search Bar Section */}
        <section className={styles.resume__search}>
          <p id="resume-search-label" className={styles.resume__searchLabel}>Refine your search</p>
          <div className={styles.resume__terminal}>
            <div className={styles.resume__terminalHeader}>
              <div className={styles.resume__terminalDots}>
                <span className={styles.resume__dotRed}></span>
                <span className={styles.resume__dotYellow}></span>
                <span className={styles.resume__dotGreen}></span>
              </div>
              <div className={styles.resume__terminalPath}>
                <Folder size={12} />
                <span>~/al3design/query_db.sh</span>
              </div>
            </div>
            <div className={styles.resume__terminalBody}>
              <div className={styles.resume__searchBox}>
                <span className={styles.resume__prompt}>{">"}</span>
                <div className={styles.resume__inputWrapper}>
                  <input
                    type="text"
                    aria-labelledby="resume-search-label"
                    placeholder="Search for keywords, skills, or roles..."
                    className={styles.resume__input}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery === '' && (
                    <span className={styles.resume__caret} />
                  )}
                </div>
              </div>
              <div className={styles.resume__filters}>
                <div className={styles.resume__tags}>
                  {availableTags.map(tag => (
                    <button type="button" key={tag} aria-pressed={activeTags.includes(tag)} onClick={() => toggleTag(tag)} className={styles.resume__tagBtn}>
                      <Tag active={activeTags.includes(tag)}>{tag}</Tag>
                    </button>
                  ))}
                  {(searchQuery || activeTags.length > 0) && (
                    <button onClick={clearAll} className={styles.resume__clearAll}>Clear All</button>
                  )}
                </div>
                <div className={styles.resume__downloads}>
                  <button type="button" className={styles.resume__downloadBtn} onClick={downloadATS} disabled={!filteredExperiences.length} title={isFiltered ? `Download ATS CV with ${filteredExperiences.length} matching experiences` : 'Download ATS CV with all experiences'} aria-label={isFiltered ? 'Download filtered ATS CV' : 'Download complete ATS CV'}>
                    <Download size={14} /> ATS CV
                  </button>
                  <button className={styles.resume__downloadBtn} onClick={downloadCustom}>
                    <Download size={14} /> CUSTOM CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero */}
        <header className={styles.resume__hero}>
          <h1 data-tina-field={tinaField(page, 'title')}>
            {formatTitle(page.title || "UX/UI // Web Designer")}
          </h1>
          <div
            className={styles.resume__subtitle}
            data-tina-field={tinaField(page, 'body')}
          >
            <TinaMarkdown content={page.body} />
          </div>
          <div className={styles.resume__meta}>
            <div className={styles.resume__metaGroup}>
              <span>Location =</span>
              <span data-tina-field={tinaField(page, 'location')}>
                {page.location || "Buenos Aires, Argentina"};
              </span>
            </div>
            {contactEmail && <div className={clsx(styles.resume__metaGroup, styles['resume__metaGroup--primary'])}>
              <span>Email =</span>
              <span data-tina-field={tinaField(page, 'email')}>
                {contactEmail};
              </span>
            </div>}
            <div className={styles.resume__metaGroup}>
              <span>Status =</span>
              <span data-tina-field={tinaField(page, 'status')}>
                {page.status || "Available for new opportunities"};
              </span>
            </div>
          </div>
        </header>

        {/* Sections */}
        <div className={styles.resume__sectionGroup}>

          {/* 01. Experience Map — from projects collection, not editable here */}
          <section className={styles.resume__section}>
            <div className={styles.resume__sectionHeader}>
              <span>01.</span>
              <h2>Experience Map</h2>
            </div>
            <div className={styles.resume__experienceList}>
              <AnimatePresence mode='popLayout'>
                {filteredExperiences.map((exp) => (
                  <motion.div
                    key={exp.company + exp.role}
                    id={exp.id}
                    className={styles.resume__experienceAnchor}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <SyntaxCard className={styles.resume__expCard}>
                      <div className={styles.resume__expCardHeader}>
                        <div>
                          <h3 className={styles.resume__expCardTitle}>{exp.role}</h3>
                          <div className={styles.resume__expCardCompany}>
                            <span>{exp.type ? exp.type : 'Company'} =</span>
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <Tag active>{exp.period}</Tag>
                      </div>
                      {exp.description && (
                        <>
                          <p className={styles.resume__expCardDesc}>{exp.description}</p>
                          {exp.points && (
                            <ul className={styles.resume__expCardPoints}>
                              {exp.points.map((point, idx) => (
                                <li key={idx} className={styles.resume__expCardPoint}>
                                  <span><ChevronRight size={14} /></span>
                                  {point}
                                </li>
                              ))}
                            </ul>
                          )}
                          <div className={styles.resume__tagStack}>
                            {exp.stack.map(s => (
                              <Tag key={s} active={activeTags.includes(s.toUpperCase())}>{s}</Tag>
                            ))}
                          </div>
                        </>
                      )}
                      {exp.relatedProjects.length > 0 && <div className={styles.resume__relatedProjects}>
                        <h4>Related projects</h4>
                        <ul>{exp.relatedProjects.map(item => <li key={item.href}>
                          <a href={item.href}>{cleanTitle(item.title)}</a>{item.draft && <span> · Draft</span>}
                        </li>)}</ul>
                      </div>}
                    </SyntaxCard>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </section>

          {/* 02. System Constraints — Skills */}
          {skills.length > 0 && <section className={styles.resume__section}>
            <div className={styles.resume__sectionHeader}>
              <span>02.</span>
              <h2>System Constraints</h2>
            </div>
            <div className={styles.resume__skillGrid}>
              {skills.map((skillGroup, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={styles.resume__skillCard}>
                    <h4
                      className={styles.resume__skillCardCategory}
                      data-tina-field={tinaField(skillGroup, 'category')}
                    >
                      {skillGroup.category}
                    </h4>
                    <div className={styles.resume__skillCardItems}>
                      {skillGroup.items.map((item, idx) => (
                        <div key={idx} className={styles.resume__skillCardItem}>
                          <span
                            className={styles.resume__skillCardItemName}
                            data-tina-field={tinaField(item, 'name')}
                          >
                            {item.name}
                          </span>
                          <span
                            className={styles.resume__skillCardItemVal}
                            data-tina-field={tinaField(item, 'value')}
                          >
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>}

          {/* 03. Base Compilation — Education */}
          {education.length > 0 && <section className={styles.resume__footer}>
            <div className={styles.resume__sectionHeader}>
              <span>03.</span>
              <h2>Base Compilation</h2>
            </div>
            {education.map((entry, i) => (
              <SyntaxCard key={i} className={styles.resume__eduCard}>
                <div className={styles.resume__eduCardHeader}>
                  <h3 data-tina-field={tinaField(entry, 'degree')}>
                    {entry.degree}
                  </h3>
                  <span data-tina-field={tinaField(entry, 'year')}>
                    {entry.year}
                  </span>
                </div>
                <div className={styles.resume__expCardCompany}>
                  <span>Institution =</span>
                  <span data-tina-field={tinaField(entry, 'institution')}>
                    {entry.institution};
                  </span>
                </div>
              </SyntaxCard>
            ))}
          </section>}

        </div>
      </div>
    </div>
  );
}
