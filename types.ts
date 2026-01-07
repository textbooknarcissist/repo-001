export interface Skill {
  name: string;
  category: 'Core' | 'Tools' | 'Testing' | 'Specialized';
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}