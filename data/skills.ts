export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: 'Programming',
    items: ['C', 'C++', 'JavaScript', 'MATLAB'],
  },
  {
    category: 'Web',
    items: ['HTML', 'CSS', 'React (Learning)', 'Next.js (Learning)'],
  },
  {
    category: 'Engineering',
    items: ['Digital Electronics', 'Circuit Analysis', 'Signals & Systems'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code'],
  },
];
