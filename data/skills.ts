export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'Python', 'Go', 'Rust', 'JavaScript', 'SQL'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'D3.js', 'Vue.js'],
  },
  {
    category: 'DevOps & Infrastructure',
    items: ['Kubernetes', 'Docker', 'AWS', 'CI/CD', 'Terraform', 'Nginx'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'TimescaleDB'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Linux', 'Vercel', 'Datadog', 'Sentry'],
  },
];
