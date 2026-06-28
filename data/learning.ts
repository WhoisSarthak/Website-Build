export interface LearningItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export const currentlyLearning: LearningItem[] = [
  {
    id: 'learning-1',
    title: 'Embedded Systems',
    description: 'Exploring microcontrollers, sensor interfaces, and real-time systems',
  },
  {
    id: 'learning-2',
    title: 'C and C++',
    description: 'Building systems-level programs and understanding low-level programming',
  },
  {
    id: 'learning-3',
    title: 'React and Next.js',
    description: 'Modern web development frameworks and full-stack JavaScript applications',
  },
  {
    id: 'learning-4',
    title: 'Digital Signal Processing',
    description: 'Understanding signal analysis, filtering, and DSP algorithms',
  },
  {
    id: 'learning-5',
    title: 'Git & GitHub Workflow',
    description: 'Version control, collaboration, and best practices for developers',
  },
  {
    id: 'learning-6',
    title: 'PCB Design',
    description: 'Learning circuit board design, layout, and practical engineering principles',
  },
];

export interface AcademicEvent {
  id: string;
  title: string;
  date: string;
  description?: string;
}

export const academicJourney: AcademicEvent[] = [
  {
    id: 'journey-1',
    title: 'Started Electronics Engineering',
    date: '2023',
    description: 'Began my journey studying electronics and fundamental engineering principles',
  },
  {
    id: 'journey-2',
    title: 'Learned Git & GitHub',
    date: '2024',
    description: 'Started using version control and collaborating on projects using GitHub',
  },
  {
    id: 'journey-3',
    title: 'Built Personal Portfolio Website',
    date: '2026',
    description: 'Created this portfolio to document my learning and showcase my projects',
  },
  {
    id: 'journey-4',
    title: 'Learning React and Next.js',
    date: '2026',
    description: 'Diving into modern web development and building full-stack applications',
  },
  {
    id: 'journey-5',
    title: 'Future: Embedded Systems Projects',
    date: 'Coming Soon',
    description: 'Planning to build practical embedded systems projects with real-world applications',
  },
];
