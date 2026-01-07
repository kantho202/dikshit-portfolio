'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'journey', 'work', 'life', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#journey' },
    { name: 'Work', href: '#work' },
    { name: 'Life', href: '#life' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerHeight = 100; // Account for fixed header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/share/17dSnWFaEs/' },
    { name: 'Instagram', href: 'https://www.instagram.com/dikshitchakma?igsh=MThxbTQ3Y2Vma2Ztbg==' },
    { name: 'X', href: 'https://x.com/dikshitchakma' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/dikshit-chakma/' }
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'backdrop-blur-2xl bg-white/70 dark:bg-gray-900/70 shadow-2xl shadow-black/5 dark:shadow-black/20 border-b border-white/20 dark:border-gray-700/30' 
            : 'backdrop-blur-sm bg-transparent'
        } py-4 md:py-6`}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Enhanced Logo */}
          <motion.div 
            className="flex-shrink-0 relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="#hero" 
              onClick={(e) => handleNavClick(e, '#hero')}
              className="relative text-4xl md:text-5xl font-serif font-bold italic text-slate-900 dark:text-gray-100 hover:text-primary transition-all duration-300"
            >
              <span className="relative z-10">Dikshit</span>
              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </Link>
          </motion.div>
          
          {/* Enhanced Desktop Navigation */}
          <motion.nav 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <motion.ul 
              className="flex items-center gap-2 bg-white/95 dark:bg-gray-900/95 rounded-full px-6 py-4 shadow-2xl shadow-black/10 dark:shadow-black/30 ring-1 ring-black/5 dark:ring-white/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/30"
              layout
            >
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <Link 
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`relative block px-4 py-2.5 rounded-full text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 group ${
                        isActive 
                          ? 'text-white shadow-lg' 
                          : 'text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      
                      {/* Active background */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg shadow-primary/25"
                          layoutId="navbar-active"
                          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        />
                      )}
                      
                      {/* Hover background */}
                      {!isActive && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.2 }}
                        />
                      )}
                      
                      {/* Hover glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.nav>
          
          {/* Enhanced Social Links - Desktop */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:flex items-center gap-4"
          >
            <div className="flex items-center gap-3 bg-white/90 dark:bg-gray-900/90 rounded-full px-4 py-3 shadow-xl shadow-black/5 dark:shadow-black/20 ring-1 ring-black/5 dark:ring-white/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/30">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={link.href}
                    className="relative w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold tracking-wider text-slate-700 dark:text-gray-300 hover:text-white transition-all duration-300 group overflow-hidden"
                    title={link.name}
                  >
                    <span className="relative z-10">{link.name.charAt(0)}</span>
                    
                    {/* Hover background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.2 }}
                    />
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Enhanced Mobile Menu Button */}
          <motion.button 
            className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-full bg-white/90 dark:bg-gray-900/90 text-slate-900 dark:text-gray-100 shadow-xl shadow-black/10 dark:shadow-black/20 ring-1 ring-black/5 dark:ring-white/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/30"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiX className="text-2xl" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiMenu className="text-2xl" />
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Button glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-md opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
          </motion.button>
        </div>
      </motion.header>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl shadow-2xl border-l border-white/20 dark:border-gray-700/30"
            >
              {/* Mobile menu gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              
              <div className="relative flex flex-col h-full pt-24 px-8">
                <nav className="flex-1">
                  <ul className="space-y-2">
                    {navItems.map((item, index) => {
                      const isActive = activeSection === item.href.replace('#', '');
                      return (
                        <motion.li
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * index }}
                        >
                          <Link 
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            className={`relative block px-6 py-4 rounded-2xl text-lg font-bold transition-all duration-300 group overflow-hidden ${
                              isActive 
                                ? 'text-white shadow-lg' 
                                : 'text-slate-900 dark:text-gray-100 hover:text-white'
                            }`}
                          >
                            <span className="relative z-10">{item.name}</span>
                            
                            {/* Active background */}
                            {isActive && (
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-primary to-accent shadow-lg"
                                layoutId="mobile-navbar-active"
                                transition={{ duration: 0.3 }}
                              />
                            )}
                            
                            {/* Hover background */}
                            {!isActive && (
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100"
                                transition={{ duration: 0.2 }}
                              />
                            )}
                            
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>
                </nav>
                
                {/* Enhanced Mobile Social Links */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="border-t border-gray-200/50 dark:border-gray-700/50 pt-8 pb-8"
                >
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-gray-100 mb-6 opacity-70">
                    Connect With Me
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 * index }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link 
                          href={link.href}
                          className="relative block px-4 py-3 rounded-xl text-sm font-medium text-slate-600 dark:text-gray-400 hover:text-white transition-all duration-300 group overflow-hidden"
                        >
                          <span className="relative z-10">{link.name}</span>
                          
                          {/* Hover background */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 opacity-0 group-hover:opacity-100"
                            transition={{ duration: 0.2 }}
                          />
                          
                          {/* Glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
