export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'TechCorp',
    role: 'Senior Software Engineer',
    period: '2022 – Present',
    description: 'Leading architecture and development of high-scale backend systems.',
    highlights: [
      'Architected microservices platform handling 10M+ daily transactions',
      'Reduced API latency by 65% through optimization and caching strategies',
      'Mentored team of 5 engineers on system design and best practices',
    ],
  },
  {
    id: 'exp-2',
    company: 'StartupXYZ',
    role: 'Full Stack Engineer',
    period: '2020 – 2022',
    description: 'Built and maintained full-stack applications from ground up.',
    highlights: [
      'Developed core product features used by 50k+ users',
      'Implemented real-time collaboration features using WebSockets',
      'Improved frontend performance by 40% through code splitting and optimization',
    ],
  },
  {
    id: 'exp-3',
    company: 'Digital Solutions Inc',
    role: 'Junior Software Engineer',
    period: '2018 – 2020',
    description: 'Developed web applications and contributed to various client projects.',
    highlights: [
      'Built responsive web applications serving 100k+ monthly users',
      'Implemented automated testing framework covering 80% of codebase',
      'Contributed to open-source projects with 200+ GitHub stars',
    ],
  },
];
