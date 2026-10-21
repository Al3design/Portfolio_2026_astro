type Experience = {
  role: string;
  company: string;
  period: string;
  description?: string;
  type?: string;
  points: string[];
  stack: string[];
  relatedProjects?: { title: string; href: string; draft?: boolean }[];
};

type AtsResume = {
  name: string;
  title: string;
  location?: string;
  email?: string;
  website?: string;
  experiences: Experience[];
  skills: { category: string; items: { name: string; value: string }[] }[];
  education: { degree?: string; institution?: string; year?: string }[];
};

// Preserve names, accents and date precision; remove only display markers.
function text(value?: string) {
  return (value ?? '').replace(/\/\//g, ' ').replace(/[–—]/g, '-').replace(/\s+/g, ' ').trim();
}

export function formatAtsResume(resume: AtsResume): string {
  const lines = [text(resume.name), text(resume.title), ''];
  if (text(resume.location)) lines.push(`Location: ${text(resume.location)}`);
  if (text(resume.email)) lines.push(`Email: ${text(resume.email)}`);
  if (resume.website) lines.push(`Portfolio: ${resume.website}`);
  if (resume.experiences.length) {
    lines.push('', 'PROFESSIONAL EXPERIENCE', '');
    for (const experience of resume.experiences) {
      lines.push(text(experience.role), text(experience.company));
      if (text(experience.period)) lines.push(text(experience.period));
      if (text(experience.type)) lines.push(`Employment type: ${text(experience.type)}`);
      if (text(experience.description)) lines.push(text(experience.description));
      for (const point of experience.points) if (text(point)) lines.push(`- ${text(point)}`);
      if (experience.stack.length) lines.push(`Tools and technologies: ${experience.stack.map(text).join(', ')}`);
      lines.push('');
    }
  }
  if (resume.skills.length) {
    lines.push('SKILLS', '');
    for (const group of resume.skills) {
      lines.push(text(group.category));
      for (const item of group.items) lines.push(`- ${text(item.name)}${text(item.value) ? `: ${text(item.value)}` : ''}`);
      lines.push('');
    }
  }
  if (resume.education.length) {
    lines.push('EDUCATION AND CERTIFICATIONS', '');
    for (const entry of resume.education) {
      lines.push(...[entry.degree, entry.institution, entry.year].map(value => text(value)).filter(Boolean), '');
    }
  }
  return lines.join('\r\n').trimEnd() + '\r\n';
}

export function formatResumeMarkdown(resume: AtsResume): string {
  const sections = resume.experiences.map(experience => [
    `## ${experience.role}`,
    experience.company && `**Company:** ${experience.company}`,
    experience.period && `**Period:** ${experience.period}`,
    experience.type && `**Type:** ${experience.type}`,
    experience.description,
    experience.points.map(point => `- ${point}`).join('\n'),
    experience.stack.length && `**Tools and technologies:** ${experience.stack.join(', ')}`,
    experience.relatedProjects?.length && '**Related projects:**\n' + experience.relatedProjects.map(project => `- [${text(project.title)}](${project.href})${project.draft ? ' (Draft)' : ''}`).join('\n'),
  ].filter(Boolean).join('\n\n'));
  if (resume.skills.length) sections.push('## Skills\n\n' + resume.skills.map(group => `### ${group.category}\n\n${group.items.map(item => `- **${item.name}:** ${item.value}`).join('\n')}`).join('\n\n'));
  if (resume.education.length) sections.push('## Education and certifications\n\n' + resume.education.map(entry => `- ${[entry.degree, entry.institution, entry.year].filter(Boolean).join(' - ')}`).join('\n'));
  return sections.join('\n\n---\n\n');
}
