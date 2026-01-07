import React, { useState, useEffect, useMemo } from 'react';
import { Github, Linkedin, Twitter, Mail, Phone, ArrowRight, Rocket, Menu, X, ArrowUp, FileText, Briefcase, MessageCircle, MapPin, ExternalLink, ShieldCheck, Activity, Heart, Sun, Moon } from 'lucide-react';
import { SKILLS, SOCIAL_LINKS, PROJECTS } from './constants';

declare const emailjs: any;

/**
 * BackgroundDecorator Component
 * Manages ambient visual effects including mouse tracking glow and animated streaks.
 */
const BackgroundDecorator = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Dynamic light source following mouse cursor */}
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div 
        className="mouse-follower absolute w-[800px] h-[800px] rounded-full blur-[140px] opacity-20 dark:opacity-40 transition-opacity duration-1000"
        style={{ /* eslint-disable-line */
          '--mouse-x': `${mousePos.x - 400}px`,
          '--mouse-y': `${mousePos.y - 400}px`
        } as React.CSSProperties}
      />

      {/* Decorative streaks and particles */}
      <div className="data-streak streak-h-1" />
      <div className="data-streak streak-h-2" />
      <div className="data-streak streak-v-1" />
      <div className="data-streak streak-v-2" />
      <div className="floating-particle w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brand-medium/10 top-[-5%] left-[-5%]" />
      <div className="floating-particle w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-brand-accent/20 bottom-[-5%] right-[-5%] delay-8s" />
    </div>
  );
};

/**
 * UI Badge indicating work status with a pulse effect
 */
const AvailabilityBadge = ({ className = "", style }: { className?: string; style?: React.CSSProperties }) => (
  <div 
    className={`inline-flex items-center gap-2 md:gap-3 bg-white dark:bg-slate-900 px-4 py-2.5 md:px-5 md:py-3 rounded-full shadow-lg border border-brand-medium/10 transition-transform hover:scale-105 badge-flare ${className}`}
  >
    <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#22c55e] rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
    <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.1em] whitespace-nowrap shimmer-text">Available for work</p>
  </div>
);

/**
 * Location indicator component
 */
const LocationBadge = ({ className = "" }: { className?: string }) => (
  <div className={`inline-flex items-center gap-2 px-4 py-2 bg-brand-accent/20 dark:bg-slate-800/50 border border-brand-medium/20 rounded-full transition-all hover:bg-brand-accent/40 group ${className}`}>
    <MapPin size={12} className="text-brand-deep group-hover:scale-110 transition-transform" />
    <p className="text-[10px] md:text-[11px] font-bold text-brand-deep whitespace-nowrap uppercase tracking-wider">
      Location: <span className="text-brand-medium">Nigeria</span> • Open to Remote Roles
    </p>
  </div>
);

/**
 * Navbar Component
 * Handles responsive navigation, scroll-based styling, and theme toggling.
 */
const Navbar = ({ onNavClick, theme, toggleTheme }: { onNavClick: (e: React.MouseEvent<HTMLElement>, href: string) => void, theme: string, toggleTheme: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleMobileNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    onNavClick(e, href);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-2 md:top-6 left-0 right-0 z-[100] flex justify-center px-3 sm:px-6 lg:px-8 animate-intro-down">
      <nav 
        className={`w-full max-w-6xl transition-all duration-500 rounded-full border border-brand-medium/10 relative ${
          scrolled || isOpen 
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg border-brand-medium/20' 
            : 'bg-white/40 dark:bg-slate-900/40 backdrop-blur-md'
        }`}
      >
        <div className="px-5 md:px-10">
          <div className="flex justify-between items-center h-14 md:h-20">
            <div className="flex-shrink-0">
              <span 
                className="text-xl md:text-2xl font-black gradient-text tracking-tighter cursor-pointer" 
                onClick={(e) => onNavClick(e, '#home')}
              >
                FM.
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  onClick={(e) => onNavClick(e, link.href)}
                  className="text-sm hover:text-brand-medium transition-colors font-bold uppercase tracking-widest text-brand-deep"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="h-6 w-px bg-brand-deep/10 mx-2"></div>
              
              <button 
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full flex items-center justify-center text-brand-deep hover:bg-brand-medium/10 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>

              <a 
                href="#contact" 
                onClick={(e) => onNavClick(e, '#contact')}
                className="px-6 py-2.5 bg-brand-deep text-white dark:text-[#1C4D8D] dark:bg-white text-xs font-black rounded-full hover:bg-brand-medium dark:hover:bg-brand-accent transition-all shadow-lg shadow-brand-deep/20 uppercase tracking-widest"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Navigation Toggles */}
            <div className="md:hidden flex items-center gap-2">
              <button 
                onClick={toggleTheme}
                className="p-2.5 rounded-full border border-brand-medium/10 bg-white/40 dark:bg-slate-800/40 text-brand-deep active:scale-95 transition-transform"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-full border border-brand-medium/10 bg-white/40 dark:bg-slate-800/40 text-brand-deep active:scale-95 transition-transform"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div 
          className={`md:hidden absolute top-[115%] left-0 right-0 transition-all duration-500 ease-in-out border border-brand-medium/10 rounded-[2rem] overflow-hidden shadow-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl ${
            isOpen ? 'max-h-[500px] opacity-100 translate-y-0 visible' : 'max-h-0 opacity-0 -translate-y-4 invisible'
          }`}
        >
          <div className="px-6 py-8 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleMobileNavClick(e, link.href)}
                className="block text-lg font-black px-6 py-3 rounded-2xl transition-all uppercase tracking-tight text-brand-deep hover:bg-brand-light dark:hover:bg-slate-800 hover:text-brand-medium"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
               <a 
                href="#contact" 
                onClick={(e) => handleMobileNavClick(e, '#contact')}
                className="block w-full text-center px-6 py-4 bg-brand-deep text-white dark:text-[#1C4D8D] dark:bg-white text-sm font-black rounded-2xl shadow-lg uppercase tracking-widest"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

const SectionHeading = ({ subtitle, title, className = "" }: { subtitle: string; title: string, className?: string }) => (
  <div className={`text-center mb-10 md:mb-16 space-y-3 md:space-y-4 px-4 ${className}`}>
    <p className="text-brand-medium font-bold uppercase tracking-widest text-xs md:text-sm">{subtitle}</p>
    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-brand-deep leading-tight">{title}</h2>
  </div>
);

/**
 * useTypewriter Hook
 * Animates text character by character for a high-performance typing effect.
 */
const useTypewriter = (words: string[], typeSpeed = 100, deleteSpeed = 50, delayBetween = 2000) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    let timer: number;

    if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        timer = window.setTimeout(() => {}, 500);
      } else {
        timer = window.setTimeout(() => {
          setDisplayText(word.substring(0, displayText.length - 1));
        }, deleteSpeed);
      }
    } else {
      if (displayText === word) {
        timer = window.setTimeout(() => {
          setIsDeleting(true);
        }, delayBetween);
      } else {
        timer = window.setTimeout(() => {
          setDisplayText(word.substring(0, displayText.length + 1));
        }, typeSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWordIndex, words, typeSpeed, deleteSpeed, delayBetween]);

  return displayText;
};

/**
 * Main Application Component
 */
const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  // Persistence and synchronization of user theme preference
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const alternatingTexts = useMemo(() => ["Fredebel Menoh", "Frontend Developer"], []);
  const typewriterText = useTypewriter(alternatingTexts, 80, 40, 2500);

  // Form State Management
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  // Contact API Configuration (EmailJS)
  const EMAILJS_PUBLIC_KEY = "N6rl9VlhIVpqWtj9j";
  const EMAILJS_TEMPLATE_ID = "template_vqi5k2d";
  const EMAILJS_SERVICE_ID = "service_ism0xvl";

  useEffect(() => {
    if (typeof emailjs !== 'undefined') {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, [EMAILJS_PUBLIC_KEY]);

  // Memoized background glitter positions to prevent re-renders
  const glitters = useMemo(() => Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: `${Math.random() * 3 + 1}px`,
    duration: `${Math.random() * 3 + 2}s`,
    delay: `${Math.random() * 5}s`
  })), []);

  // Intersection Observer for the "Back to Top" button visibility
  useEffect(() => {
    const heroSection = document.getElementById('home');
    if (!heroSection) return;
    const observer = new IntersectionObserver(([entry]) => setShowScrollTop(!entry.isIntersecting), { threshold: 0, rootMargin: '-80px 0px 0px 0px' });
    observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);

  /**
   * Enhanced Smooth Scroll logic with dynamic offsets for mobile
   */
  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = window.innerWidth < 768 ? 70 : 100;
      const elementPosition = element.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  /**
   * Field-level validation
   */
  const validateField = (name: string, value: string) => {
    if (name === 'name') return !value.trim() ? 'Name required' : '';
    if (name === 'email') return !value.trim() ? 'Email required' : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid format' : '';
    if (name === 'message') return !value.trim() ? 'Message required' : '';
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
    if (isSuccess) setIsSuccess(false);
  };

  /**
   * Contact Form Submission Handler
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { name: validateField('name', formData.name), email: validateField('email', formData.email), message: validateField('message', formData.message) };
    setErrors(newErrors);
    
    // Shake effect for invalid submissions
    if (Object.values(newErrors).some(err => !!err)) { 
      setIsShaking(true); 
      setTimeout(() => setIsShaking(false), 500); 
      return; 
    }

    setIsSubmitting(true);
    try {
      if (typeof emailjs !== 'undefined') {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { from_name: formData.name, from_email: formData.email, message: formData.message, to_name: "Fredebel Menoh" });
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) { 
      alert("Submission failed. Try again."); 
    } finally { 
      setIsSubmitting(false); 
    }
  };

  return (
    <div className="min-h-screen relative text-brand-deep overflow-x-hidden transition-colors duration-500">
      <BackgroundDecorator />
      <Navbar onNavClick={handleNavClick} theme={theme} toggleTheme={toggleTheme} />
      
      {/* Scroll to Top Utility */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[120] pointer-events-none">
        <button onClick={(e) => handleNavClick(e, '#home')} className={`w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-slate-900 border-2 border-brand-deep/10 rounded-full flex items-center justify-center text-brand-deep shadow-2xl shadow-brand-deep/30 hover:bg-brand-deep hover:text-white dark:hover:text-[#1C4D8D] dark:hover:bg-white transition-all duration-500 group transform pointer-events-auto ${showScrollTop ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-50'}`} aria-label="Scroll to top">
          <ArrowUp className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section id="home" className="pt-28 md:pt-48 lg:pt-64 pb-8 md:pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 flex items-center min-h-[90vh]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-24 items-center w-full relative">
            <div className="space-y-6 md:space-y-8 order-2 md:order-1 text-center md:text-left">
              <div className="flex items-center justify-between md:justify-start gap-3 w-full animate-intro-right delay-200">
                {/* Social Links Bar */}
                <div className="flex items-center gap-3">
                  {[{ icon: <Github size={18} />, link: SOCIAL_LINKS.github }, { icon: <Linkedin size={18} />, link: SOCIAL_LINKS.linkedin }, { icon: <Twitter size={18} />, link: SOCIAL_LINKS.twitter }].map((social) => (
                    <a key={social.link} href={social.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border border-brand-medium/10 flex items-center justify-center transition-all hover:scale-110 hover:bg-brand-deep hover:text-white dark:hover:bg-white dark:hover:text-[#1C4D8D] bg-white dark:bg-slate-800 text-brand-medium shadow-sm">
                      {social.icon}
                    </a>
                  ))}
                  <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" title="WhatsApp" aria-label="WhatsApp" className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border border-brand-medium/10 flex items-center justify-center transition-all hover:scale-110 hover:bg-brand-deep hover:text-white dark:hover:bg-white dark:hover:text-[#1C4D8D] bg-white dark:bg-slate-800 text-brand-medium shadow-sm"><MessageCircle size={18} /></a>
                  <a href={SOCIAL_LINKS.email} title="Email" aria-label="Email" className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border border-brand-medium/10 flex items-center justify-center transition-all hover:scale-110 hover:bg-brand-deep hover:text-white dark:hover:bg-white dark:hover:text-[#1C4D8D] bg-white dark:bg-slate-800 text-brand-medium shadow-sm"><Mail size={18} /></a>
                </div>
                <AvailabilityBadge className="hidden md:flex absolute right-0" />
              </div>

              {/* Main Headline with Typewriter */}
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] text-brand-deep animate-intro-up delay-400">
                Hello, I'm <br />
                <span className="gradient-text typewriter-cursor inline-block min-h-[1.2em]">{typewriterText}</span>
              </h1>
              <p className="text-lg md:text-2xl max-w-lg mx-auto md:mx-0 leading-relaxed text-brand-medium font-semibold animate-intro-up delay-600">Building high-performance digital solutions and automated systems. Specializing in scalable, design-driven architecture.</p>
              
              {/* Primary Call-to-Actions */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-4 pt-4 animate-intro-up delay-800">
                <a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')} className="px-4 py-2.5 md:px-7 md:py-4 bg-brand-deep text-white dark:text-[#1C4D8D] dark:bg-white hover:bg-brand-medium dark:hover:bg-brand-accent text-[10px] md:text-xs font-black rounded-lg md:rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 group">VIEW WORK <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></a>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="px-4 py-2.5 md:px-7 md:py-4 font-black rounded-lg md:rounded-xl transition-all border border-brand-medium/20 bg-white dark:bg-slate-800 text-brand-deep hover:bg-brand-light dark:hover:bg-slate-700 text-[10px] md:text-xs flex items-center justify-center gap-2"><Briefcase size={14} /> HIRE ME</a>
                <a href="#home" className="px-4 py-2.5 md:px-7 md:py-4 font-black rounded-lg md:rounded-xl transition-all border border-brand-medium/20 bg-white dark:bg-slate-800 text-brand-deep hover:bg-brand-light dark:hover:bg-slate-700 text-[10px] md:text-xs flex items-center justify-center gap-2"><FileText size={14} /> RESUME</a>
              </div>
              <div className="flex justify-center md:justify-start pt-2 animate-intro-up delay-1000"><LocationBadge /></div>
            </div>

            {/* Profile Imagery with Floating animations */}
            <div className="relative order-1 md:order-2 flex flex-col items-center lg:items-end animate-intro-scale delay-300">
              <div className="relative w-32 h-32 sm:w-44 sm:h-44 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border-2 md:border-4 border-white dark:border-slate-800 shadow-xl">
                <img src="https://i.postimg.cc/jdRg33qJ/Whats-App-Image-2026-01-04-at-2-25-04-PM.jpg" alt="Fredebel" className="w-full h-full object-cover" />
              </div>
              <AvailabilityBadge className="md:hidden mt-6 animate-intro-up delay-1200" />
            </div>
          </div>
        </section>

        {/* INTEGRATED ABOUT & SKILLS */}
        <section id="about" className="py-12 md:py-16 px-4 bg-brand-deep/[0.06] border-y border-brand-deep/5 relative overflow-hidden">
          {/* Animated background Blobs */}
          <div className="blob-container">
            <div className="blob w-64 h-64 top-1/4 -left-20" />
            <div className="blob w-80 h-80 bottom-1/4 -right-20 delay-4s" />
            <div className="blob w-48 h-48 top-1/2 left-1/2 opacity-[0.05] delay-7s" />
          </div>

          <div className="max-w-7xl mx-auto space-y-24 md:space-y-32 relative z-10">
            {/* Bio Narrative */}
            <div className="max-w-4xl mx-auto text-center space-y-10">
              <SectionHeading subtitle="Who I Am" title="Frontend and AI Engineering" />
              <div className="space-y-8 text-lg md:text-xl leading-relaxed text-brand-medium font-medium px-4 text-left md:text-center">
                <p>I am a frontend developer who enjoys building modern, component-driven user interfaces with an emphasis on clean architecture and responsive design. My current focus involves deepening my understanding of core principles like state management and performance-aware development.</p>
                <p>I am also exploring the practical integration of Generative AI into the engineering workflow. By experimenting with these emerging tools, I aim to boost productivity and automate repetitive tasks without compromising on maintainability or code quality.</p>
              </div>
            </div>

            {/* Technical Expertise Grid */}
            <div>
              <SectionHeading subtitle="Expertise" title="Technological Mastery" className="!mb-10 md:!mb-16" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                {(['Core', 'Tools', 'Testing', 'Specialized'] as const).map((category, catIdx) => (
                  <div key={category} className="p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-brand-medium/10 bg-white dark:bg-slate-900 shadow-xl shadow-brand-medium/5 transition-all hover:-translate-y-1">
                    <h3 className="text-xl md:text-2xl font-black mb-6 md:mb-8 pb-3 md:pb-4 border-b-2 border-brand-medium/5 text-brand-deep">{category}</h3>
                    <div className="space-y-4 md:space-y-5">
                      {SKILLS.filter(s => s.category === category).map((skill, idx) => {
                        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                        return (
                        <div 
                          key={skill.name} className="flex items-center gap-3 md:gap-4 skill-animate group/item" style={{ /* eslint-disable-line */
                            '--skill-delay': `${(catIdx * 0.1) + (idx * 0.05)}s` } as React.CSSProperties}>
                          <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-brand-medium rounded-full group-hover/item:scale-125 transition-transform" />
                          <span className="font-bold text-base md:text-lg text-brand-medium group-hover/item:text-brand-deep transition-colors">{skill.name}</span>
                        </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO SECTION */}
        <section id="portfolio" className="py-20 md:py-32 px-4 backdrop-blur-[2px] border-b border-brand-deep/5">
          <div className="max-w-7xl mx-auto">
            <SectionHeading subtitle="My Portfolio" title="Engineered Experiences" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {PROJECTS.map((project) => (
                <div key={project.title} className="group relative bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-brand-medium/10 shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl">
                  {/* Project Image with overlay on hover */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <a href={project.link} title="View Project" aria-label="View Project" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-deep transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100"><ExternalLink size={20} /></a>
                    </div>
                  </div>
                  {/* Project Metadata */}
                  <div className="p-8 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-brand-deep/5 dark:bg-brand-medium/10 text-brand-medium rounded-full border border-brand-medium/10">{t}</span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-black text-brand-deep">{project.title}</h3>
                    <p className="text-sm text-brand-medium font-medium leading-relaxed">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 md:py-32 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-[3rem] md:rounded-[5rem] p-6 sm:p-10 md:p-20 relative overflow-hidden glass-card noise-bg contact-bg-flow min-h-[600px] flex items-center">
              {/* Background visualizer with shooting stars */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="shooting-star-blue star-c-1" />
                <div className="shooting-star-blue star-c-2" />
                <div className="shooting-star-blue star-c-3" />
                {glitters.map((glitter) => {
                  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                  return (
                  <div 
                    key={glitter.id} className="glitter" style={{ /* eslint-disable-line */
                    '--glitter-left': glitter.left,
                    '--glitter-top': glitter.top,
                    '--glitter-size': glitter.size,
                    '--glitter-duration': glitter.duration,
                    '--glitter-delay': glitter.delay
                  } as React.CSSProperties} />
                  );
                })}
              </div>

              <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 relative z-10 w-full items-center justify-center">
                {/* Contact Info Text and Cards */}
                <div className="space-y-12 flex flex-col items-center lg:items-start">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-deep/5 dark:bg-white/5 border border-brand-deep/10 mb-4 mx-auto lg:mx-0">
                      <Activity size={14} className="text-brand-medium animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-medium">System Status: Online</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black leading-tight text-brand-deep text-center lg:text-left">Let's build <br className="hidden sm:block" /><span className="gradient-text">the future</span>.</h2>
                    <p className="text-brand-medium font-semibold text-lg max-w-md text-center lg:text-left mx-auto lg:mx-0">I'm currently looking for new opportunities and collaborations. Drop a message to start the conversation.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6 w-full">
                    {/* Unified Email and Contact cards with opposite contrast logic */}
                    <a href="mailto:mfredebel@gmail.com" className="group p-6 rounded-[2rem] bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/20 dark:border-white/5 transition-all hover:-translate-y-1 hover:bg-brand-deep hover:text-white dark:hover:bg-white dark:hover:text-[#1C4D8D] flex items-center gap-6 border-l-4 border-l-brand-medium justify-center sm:justify-start">
                      <div className="w-12 h-12 rounded-2xl bg-brand-medium text-white dark:text-[#1C4D8D] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-brand-medium/20">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Email</p>
                        <p className="font-black">mfredebel@gmail.com</p>
                      </div>
                    </a>
                    
                    <a href="tel:+2348142236343" className="group p-6 rounded-[2rem] bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/20 dark:border-white/5 transition-all hover:-translate-y-1 hover:bg-brand-deep hover:text-white dark:hover:bg-white dark:hover:text-[#1C4D8D] flex items-center gap-6 border-l-4 border-l-brand-medium justify-center sm:justify-start">
                      <div className="w-12 h-12 rounded-2xl bg-brand-medium text-white dark:text-[#1C4D8D] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-brand-medium/20">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Direct Link</p>
                        <p className="font-black">+234 814 223 6343</p>
                      </div>
                    </a>
                  </div>
                </div>
                
                {/* Reactive Contact Form */}
                <div className={`relative group/form transition-transform duration-200 ${isShaking ? 'animate-shake' : ''}`}>
                  <div className="p-8 sm:p-12 rounded-[3rem] bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/50 dark:border-white/10 relative z-20 overflow-hidden shadow-2xl">
                    <form className="space-y-8" onSubmit={handleSubmit}>
                      <div className="grid sm:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className={`text-[10px] font-black uppercase tracking-widest pl-1 transition-colors ${errors.name ? 'text-red-500' : 'text-brand-deep'}`}>01. Name</label>
                          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className={`w-full px-6 py-4 rounded-2xl bg-brand-light dark:bg-slate-800/80 border border-brand-deep/10 dark:border-white/5 outline-none font-bold text-brand-deep placeholder:opacity-40 focus:ring-2 focus:ring-brand-medium/20 focus:border-brand-medium transition-all ${errors.name ? 'ring-2 ring-red-400/20 border-red-400' : ''}`} />
                          {errors.name && <p className="text-[10px] font-bold text-red-500 pl-2 uppercase">{errors.name}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className={`text-[10px] font-black uppercase tracking-widest pl-1 transition-colors ${errors.email ? 'text-red-500' : 'text-brand-deep'}`}>02. Email</label>
                          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className={`w-full px-6 py-4 rounded-2xl bg-brand-light dark:bg-slate-800/80 border border-brand-deep/10 dark:border-white/5 outline-none font-bold text-brand-deep placeholder:opacity-40 focus:ring-2 focus:ring-brand-medium/20 focus:border-brand-medium transition-all ${errors.email ? 'ring-2 ring-red-400/20 border-red-400' : ''}`} />
                          {errors.email && <p className="text-[10px] font-bold text-red-500 pl-2 uppercase">{errors.email}</p>}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className={`text-[10px] font-black uppercase tracking-widest pl-1 transition-colors ${errors.message ? 'text-red-500' : 'text-brand-deep'}`}>03. Message</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="What's on your mind?" className={`w-full px-6 py-4 rounded-2xl bg-brand-light dark:bg-slate-800/80 border border-brand-deep/10 dark:border-white/5 outline-none font-bold text-brand-deep placeholder:opacity-40 focus:ring-2 focus:ring-brand-medium/20 focus:border-brand-medium transition-all resize-none ${errors.message ? 'ring-2 ring-red-400/20 border-red-400' : ''}`} />
                        {errors.message && <p className="text-[10px] font-bold text-red-500 pl-2 uppercase">{errors.message}</p>}
                      </div>
                      <button type="submit" disabled={isSubmitting} className={`w-full py-5 text-white dark:text-[#1C4D8D] bg-brand-deep dark:bg-white font-black rounded-2xl transition-all shadow-xl flex items-center justify-center gap-4 active:scale-95 group relative overflow-hidden ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-brand-medium dark:hover:bg-brand-accent'}`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        {isSubmitting ? <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" /> : <><span className="tracking-widest uppercase">Send Brief</span><Rocket size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" /></>}
                      </button>
                      {isSuccess && <div className="flex items-center justify-center gap-2 text-[#22c55e] font-black text-xs uppercase tracking-widest animate-pulse"><ShieldCheck size={16} />Transmission Confirmed</div>}
                    </form>
                  </div>
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent blur-[80px] opacity-40 rounded-full" />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-deep blur-[80px] opacity-10 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-8 md:py-10 border-t border-brand-medium/10 bg-gradient-to-b from-brand-accent/30 to-brand-accent/60 dark:from-slate-900 dark:to-slate-950 backdrop-blur-xl px-4 relative">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 relative">
            <div className="flex flex-col items-center md:items-start gap-1">
              <div className="text-2xl md:text-3xl font-black gradient-text">FM.</div>
              <p className="text-[10px] md:text-xs font-black text-brand-deep/50 tracking-wide text-center md:text-left">&copy; {new Date().getFullYear()} Fredebel Menoh. All Rights Reserved.</p>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              {[{ icon: <Github size={16} />, link: SOCIAL_LINKS.github }, { icon: <Linkedin size={16} />, link: SOCIAL_LINKS.linkedin }, { icon: <Twitter size={16} />, link: SOCIAL_LINKS.twitter }, { icon: <MessageCircle size={16} />, link: SOCIAL_LINKS.whatsapp }, { icon: <Mail size={16} />, link: "mailto:mfredebel@gmail.com" }].map((social) => (
                <a key={social.link} href={social.link} target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-9 md:h-9 rounded-lg border border-brand-deep/10 flex items-center justify-center transition-all hover:scale-110 hover:bg-brand-deep hover:text-white dark:hover:bg-white dark:hover:text-[#1C4D8D] bg-white/40 dark:bg-slate-800 text-brand-medium shadow-sm backdrop-blur-md">
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="flex flex-col items-center md:items-end">
              <p className="flex items-center gap-1.5 text-[10px] md:text-xs font-black text-brand-medium tracking-wide whitespace-nowrap">Built with <Heart size={10} className="text-red-500 fill-red-500" /> using React</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;