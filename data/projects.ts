export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Real-time Collaboration Platform',
    description: 'Built a scalable WebSocket-based collaboration platform supporting real-time editing, presence awareness, and conflict resolution for 10k+ concurrent users.',
    tags: ['TypeScript', 'Node.js', 'WebSocket', 'PostgreSQL', 'Redis'],
    link: '#',
    github: '#',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Machine Learning Pipeline',
    description: 'Designed and implemented an ML pipeline for data preprocessing, feature engineering, and model training that reduced inference time by 60%.',
    tags: ['Python', 'TensorFlow', 'Kubernetes', 'Apache Spark'],
    link: '#',
    github: '#',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Distributed Cache System',
    description: 'Created a distributed in-memory cache system with LRU eviction, supporting sharding and replication for high-availability scenarios.',
    tags: ['Go', 'Distributed Systems', 'gRPC', 'Protocol Buffers'],
    link: '#',
    github: '#',
  },
  {
    id: 'project-4',
    title: 'API Gateway & Load Balancer',
    description: 'Built a high-performance API gateway with request routing, rate limiting, and circuit breaking patterns handling 100k+ requests per second.',
    tags: ['Rust', 'Async/Await', 'Networking', 'Performance'],
    link: '#',
    github: '#',
  },
  {
    id: 'project-5',
    title: 'Data Analytics Dashboard',
    description: 'Developed an interactive analytics dashboard with real-time data visualization, custom metrics, and export functionality.',
    tags: ['React', 'D3.js', 'Node.js', 'TimescaleDB'],
    link: '#',
    github: '#',
  },
  {
    id: 'project-6',
    title: 'Microservices Architecture',
    description: 'Migrated monolithic application to microservices using Docker, Kubernetes, and service mesh patterns, improving scalability and deployment velocity.',
    tags: ['Kubernetes', 'Docker', 'gRPC', 'Service Mesh'],
    link: '#',
    github: '#',
  },
];
