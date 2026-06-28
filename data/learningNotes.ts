export interface LearningNote {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  status: 'published' | 'coming-soon';
}

export const learningNotes: LearningNote[] = [
  {
    id: 'note-1',
    title: 'Building My First Portfolio Website',
    excerpt: 'A journey of creating this portfolio with Next.js, React, and learning web development fundamentals.',
    date: 'Coming Soon',
    category: 'Web Development',
    status: 'coming-soon',
  },
  {
    id: 'note-2',
    title: 'Understanding Karnaugh Maps',
    excerpt: 'Simplifying boolean algebra and digital logic using Karnaugh maps for circuit design.',
    date: 'Coming Soon',
    category: 'Digital Electronics',
    status: 'coming-soon',
  },
  {
    id: 'note-3',
    title: 'Git for Engineering Students',
    excerpt: 'A beginner&apos;s guide to version control and collaborative development with Git and GitHub.',
    date: 'Coming Soon',
    category: 'Tools & Workflow',
    status: 'coming-soon',
  },
  {
    id: 'note-4',
    title: 'My First Embedded Systems Project',
    excerpt: 'Documenting my journey building embedded systems with microcontrollers and practical applications.',
    date: 'Coming Soon',
    category: 'Embedded Systems',
    status: 'coming-soon',
  },
];
