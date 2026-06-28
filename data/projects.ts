export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
  status?: 'completed' | 'coming-soon';
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Personal Portfolio Website',
    description: 'This website. Built with Next.js, React, Framer Motion, and Tailwind CSS. Features smooth animations, responsive design, and an honest representation of my learning journey.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/WhoisSarthak/Website-Build',
    featured: true,
    status: 'completed',
  },
  {
    id: 'project-2',
    title: 'Engineering Laboratory Work',
    description: 'Various electronics and digital circuits lab assignments including oscilloscope measurements, circuit analysis, and practical experimentation with breadboards and components.',
    tags: ['Electronics', 'Circuit Analysis', 'Experimentation'],
    status: 'completed',
  },
  {
    id: 'project-3',
    title: 'MATLAB Assignments',
    description: 'University coursework involving signal processing, mathematical computations, and algorithm implementations using MATLAB for Electronics Engineering studies.',
    tags: ['MATLAB', 'Signal Processing', 'Math'],
    status: 'completed',
  },
  {
    id: 'project-4',
    title: 'Embedded Systems Project',
    description: 'Coming Soon. Planning to build embedded systems projects with microcontrollers and real-world applications.',
    tags: ['Embedded C', 'Microcontrollers', 'IoT'],
    status: 'coming-soon',
  },
];
