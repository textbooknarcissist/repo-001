export interface Skill {
  name: string;
  category: 'Core' | 'Tools' | 'Testing' | 'Specialized';
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
}