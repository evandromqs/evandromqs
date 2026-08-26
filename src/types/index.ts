export type ProjectCategory = 'all' | 'mobile' | 'web' | 'tools-ai';

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: 'mobile' | 'web' | 'tools-ai';
  status: 'active' | 'dev' | 'concept';
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface TimelineItem {
  period: string;
  phase: string;
  title: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}
