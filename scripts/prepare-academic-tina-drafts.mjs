// Authoring command, not a check. Creates four drafts without overwriting edits.
import { writeFile, access } from 'node:fs/promises';
import matter from 'gray-matter';
import { academicDrafts, reviewLabels } from '../src/editorial/academic-drafts.ts';

for (const draft of academicDrafts) {
  let consolidated = false;
  try { await access(new URL(`../src/content/projects/${draft.slug}.mdx`, import.meta.url)); consolidated = true; } catch (error) { if (error.code !== 'ENOENT') throw error; }
  if (consolidated) { console.log(`Preserved bilingual ${draft.slug}.mdx; edit it in Tina`); continue; }
  for (const language of ['es', 'en']) {
    const copy = draft[language];
    const labels = reviewLabels[language];
    const es = language === 'es';
    const filename = new URL(`../src/content/projects/${draft.slug}-${language}.mdx`, import.meta.url);
    let exists = false;
    try { await access(filename); exists = true; } catch (error) { if (error.code !== 'ENOENT') throw error; }
    if (exists) { console.log(`Preserved existing ${draft.slug}-${language}.mdx`); continue; }
    const blocks = [
      { _template: 'section', title: es ? 'Contexto' : 'Overview', text: copy.summary },
      { _template: 'cards', title: es ? 'Participación y herramientas' : 'Contribution and tools', cards: [
        {title: labels.contribution, text: copy.contribution},
        {title: labels.tools, text: draft.tools.join(' · '), tags: draft.tools},
      ] },
      ...copy.process.map(step => ({_template: 'section', title: step.title, text: step.text})),
      { _template: 'section', title: es ? 'El desafío' : 'The challenge', text: copy.challenge },
      { _template: 'section', title: es ? 'Qué aprendí' : 'What I learned', text: copy.learning },
      ...(copy.credits ? [{_template: 'section', title: es ? 'Recursos y créditos' : 'Assets and credits', text: copy.credits}] : []),
      { _template: 'section', title: labels.result, text: copy.result },
      { _template: 'video', title: labels.preview, src: `/revision/media/${draft.slug}-preview.mp4`, poster: `/revision/media/${draft.slug}-poster.webp`, caption: copy.previewNote, transcript: copy.visualDescription, hasAudio: false },
      { _template: 'section', title: labels.pending, text: labels.noticeBody, bullets: copy.pending, collapsed: true },
    ];
    const document = {
      title: `${copy.title} // ${copy.accent}`, publicationStatus: 'draft',
      contentFormat: 'blocks', language, translationKey: draft.slug,
      type: labels.context, description: copy.summary, stack: draft.tools,
      role: es ? (draft.slug === 'mundo' ? 'Estudio de entorno 3D' : 'Modelado, rigging y animación 3D') : (draft.slug === 'mundo' ? '3D environment study' : '3D modeling, rigging and animation'),
      client: 'Da Vinci', timeline: labels.date, status: es ? 'Trabajo académico' : 'Academic work',
      image: `/revision/media/${draft.slug}-poster.webp`, imageAlt: copy.alt,
      showInPortfolio: true, showInResume: false,
      categories: draft.slug === 'mundo' ? ['3d', 'academic'] : ['3d', 'animation', 'academic'],
      contentBlocks: blocks,
    };
    await writeFile(filename, matter.stringify('', document), {flag: 'wx'});
    console.log(`Created ${draft.slug}-${language}.mdx (draft)`);
  }
}
