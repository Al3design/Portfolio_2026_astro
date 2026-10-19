export type RelatedProjectLink = { title: string; href: string; draft: boolean };
export function experienceId(slug: string) { return `experience-${slug}`; }
export function experienceUrl(slug: string) { return `/resume#${encodeURIComponent(experienceId(slug))}`; }
