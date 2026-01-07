# Fredebel Menoh - Portfolio Website

A modern, responsive portfolio website showcasing frontend development skills and projects. Built with React, TypeScript, and Tailwind CSS with a focus on performance, accessibility, and user experience.

## ✨ Features

- **🌓 Dark/Light Mode Toggle** - Seamless theme switching with persistent localStorage
- **📧 Email Contact Form** - Integrated with EmailJS for direct messaging
- **🎨 Smooth Animations** - Polished transitions and scroll-based animations
- **📱 Fully Responsive** - Mobile-first design that works on all devices
- **♿ Accessibility First** - WCAG compliant with proper ARIA labels and semantic HTML
- **⚡ High Performance** - Optimized build with Vite for fast load times
- **🎯 Interactive UI** - Smooth scrolling, typewriter effects, and hover animations
- **🖱️ Mouse Tracking** - Dynamic background glow that follows cursor movement

## 🛠️ Tech Stack

- **React** 19.0.0 - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** 3.4.17 - Utility-first styling
- **Vite** 6.0.5 - Lightning-fast build tool
- **EmailJS** - Backend-less email service
- **Lucide React** 0.474.0 - Beautiful icon library
- **ESLint** - Code quality and consistency

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/textbooknarcissist/repo-001.git
cd repo-001
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Production Build

Create an optimized production build:
```bash
npm run build
```

The build output will be in the `dist/` folder, ready for deployment.

## 📁 Project Structure

```
├── App.tsx              # Main application component
├── constants.tsx        # Centralized config (skills, projects, social links)
├── index.tsx            # React entry point
├── index.html           # HTML template
├── index.css            # Global styles and animations
├── types.ts             # TypeScript type definitions
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
├── package.json         # Dependencies and scripts
├── .eslintrc.json       # ESLint rules
├── .gitignore           # Git ignore patterns
└── dist/                # Production build (generated)
```

## 🎯 Key Components

### BackgroundDecorator
Manages ambient visual effects including mouse-tracking glow and animated background elements.

### Navbar
Responsive navigation with:
- Smooth scroll links to sections
- Theme toggle (dark/light mode)
- Mobile menu with hamburger icon
- Scroll-based styling changes

### Contact Form
EmailJS-powered contact form with:
- Real-time validation
- Error handling
- Success confirmation
- Form reset after submission

### Skills Grid
Categorized technical expertise:
- **Core** - Frontend fundamentals
- **Tools** - Development tooling
- **Testing** - QA frameworks
- **Specialized** - Advanced technologies

### Portfolio Section
Showcase of projects with:
- Project images and descriptions
- Technology tags
- External project links
- Hover animations

## 🔧 Configuration

### EmailJS Setup
The contact form uses EmailJS for email delivery. Update the credentials in `App.tsx`:
```typescript
const EMAILJS_PUBLIC_KEY = "your_public_key";
const EMAILJS_TEMPLATE_ID = "your_template_id";
const EMAILJS_SERVICE_ID = "your_service_id";
```

### Social Links
Update social links in `constants.tsx`:
```typescript
export const SOCIAL_LINKS = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  twitter: "https://twitter.com/yourhandle",
  whatsapp: "https://wa.me/your_number",
  email: "mailto:your@email.com"
};
```

### Projects
Add your projects in `constants.tsx`:
```typescript
export const PROJECTS = [
  {
    title: "Project Title",
    description: "Project description",
    tech: ["React", "TypeScript", "Tailwind"],
    image: "image_url",
    link: "project_url"
  }
];
```

## 🎨 Customization

### Colors
Tailwind CSS variables are defined in `index.css`. Modify the color scheme:
```css
:root {
  --color-deep: #1C4D8D;
  --color-medium: #2563EB;
  --color-accent: #E0E7FF;
  --color-light: #F0F4F8;
}
```

### Animations
Custom animations are defined in `index.css`. Add or modify keyframes as needed.

### Responsive Breakpoints
Uses Tailwind's default breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

- WCAG 2.1 Level AA compliant
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Focus indicators on interactive elements

## 📊 Performance

- Optimized bundle size with Vite
- Lazy loading of images
- CSS-in-JS performance optimization
- Memoized components to prevent unnecessary re-renders
- Fast First Contentful Paint (FCP)

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to Netlify

### GitHub Pages
1. Update `vite.config.ts` with your repository name
2. Build and push to GitHub
3. Enable GitHub Pages in repository settings

### Other Hosts
The `dist/` folder can be deployed to any static hosting service (AWS S3, Azure Static Web Apps, etc.).

## 📬 Contact

- **Email:** [mfredebel@gmail.com](mailto:mfredebel@gmail.com)
- **Phone:** [+234 814 223 6343](tel:+2348142236343)
- **GitHub:** [github.com/textbooknarcissist](https://github.com/textbooknarcissist)
- **LinkedIn:** [linkedin.com/in/fredebel](https://linkedin.com/in/fredebel)
- **Twitter:** [@fredebel](https://twitter.com/fredebel)
- **WhatsApp:** [Chat on WhatsApp](https://wa.me/2348142236343)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for utility-first styling
- Lucide for beautiful icons
- EmailJS for seamless email integration
- Vite for the blazing-fast build tool

## 📝 Notes

- Resume feature is currently dormant (links to home section)
- Project links are placeholders and will be updated as projects are completed
- EmailJS keys are embedded in the frontend (consider moving to environment variables for production)

---

**Built with ❤️ using React and Tailwind CSS**

Last updated: January 8, 2026
