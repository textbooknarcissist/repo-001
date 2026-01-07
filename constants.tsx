import { Github, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

/**
 * Global Contact and Social Links
 */
export const SOCIAL_LINKS = {
  github: "https://github.com/textbooknarcissist",
  linkedin: "https://www.linkedin.com/in/fredebel-m-bab914282",
  twitter: "https://x.com/carlfredebel",
  whatsapp: "https://wa.me/2348142236343"
};

/**
 * Skill Registry
 * Categorized for grouped rendering in the About section.
 */
export const SKILLS = [
  // Core Languages & Frameworks
  { name: 'JavaScript (ES6+)', category: 'Core' },
  { name: 'TypeScript', category: 'Core' },
  { name: 'React', category: 'Core' },
  { name: 'Next.js', category: 'Core' },
  { name: 'HTML5', category: 'Core' },
  { name: 'CSS3', category: 'Core' },
  
  // Developer Tooling & Infrastructure
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'Vite', category: 'Tools' },
  { name: 'Docker', category: 'Tools' },
  { name: 'AWS', category: 'Tools' },
  { name: 'Vercel', category: 'Tools' },
  
  // Quality Assurance
  { name: 'Jest', category: 'Testing' },
  { name: 'Cypress', category: 'Testing' },
  { name: 'RTL', category: 'Testing' },
  
  // Advanced & Emerging Domains
  { name: 'AI Development', category: 'Specialized' },
  { name: 'Performance Optimization', category: 'Specialized' },
  { name: 'Design Systems', category: 'Specialized' },
];

/**
 * Portfolio Projects
 */
export const PROJECTS = [
  {
    title: 'AI Workflow Automator',
    description: 'A platform that leverages Gemini API to automate repetitive frontend tasks, from component generation to PR reviews.',
    tech: ['Next.js', 'TypeScript', 'Gemini API', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    link: '#'
  },
  {
    title: 'Nexus Design System',
    description: 'A comprehensive, accessibility-first design system for enterprise-scale React applications with automated documentation.',
    tech: ['React', 'Storybook', 'Styled Components', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    link: '#'
  },
  {
    title: 'Quantum Analytics Suite',
    description: 'High-performance data visualization dashboard with real-time streaming and predictive modeling components.',
    tech: ['Vite', 'D3.js', 'Redux Toolkit', 'AWS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    link: '#'
  }
];