export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  link: string;
  readTime: string;
}

export const articles: Article[] = [
  {
    id: 'article-1',
    title: 'Building Scalable Systems: Lessons from Production',
    excerpt: 'Exploring key principles and patterns for designing systems that grow with demand while maintaining reliability and performance.',
    date: '2024-03-15',
    link: '#',
    readTime: '8 min',
  },
  {
    id: 'article-2',
    title: 'Real-time Architecture: WebSockets vs Server-Sent Events',
    excerpt: 'A comprehensive comparison of real-time communication patterns, their trade-offs, and when to use each approach.',
    date: '2024-02-28',
    link: '#',
    readTime: '6 min',
  },
  {
    id: 'article-3',
    title: 'Database Optimization: From Query Analysis to Index Strategy',
    excerpt: 'Deep dive into database performance tuning, query optimization techniques, and how to identify bottlenecks in production systems.',
    date: '2024-02-10',
    link: '#',
    readTime: '10 min',
  },
  {
    id: 'article-4',
    title: 'Kubernetes for Engineers: Beyond the Basics',
    excerpt: 'Understanding container orchestration, resource management, and operational patterns for running production workloads.',
    date: '2024-01-20',
    link: '#',
    readTime: '12 min',
  },
];
