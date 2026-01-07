'use client';

import { useState, useEffect } from 'react';
import { MdLightMode, MdDarkMode, MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Define all sections in order
  const sections = [
    'hero',
    'about',
    'journey',
    'work',
    'life',
    'skills',
    'projects',
    'contact'
  ];

  useEffect(() => {
    setMounted(true);
    
    // Check for saved theme preference or system preference on load
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    // Show scroll buttons when user scrolls and track current section
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollButtons(scrollY > 100);

      // Find current section based on scroll position
      let currentIndex = 0;
      const threshold = 200; // Distance from top to consider a section active
      
      for (let i = 0; i < sections.length; i++) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollY;
          
          // If we've scrolled past this section's start point (with threshold)
          if (scrollY >= elementTop - threshold) {
            currentIndex = i;
          }
        }
      }
      
      setCurrentSectionIndex(currentIndex);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial call to set current section with a small delay to ensure elements are loaded
    setTimeout(() => {
      handleScroll();
    }, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const scrollToNextSection = () => {
    // If we're at the last section, don't scroll further
    if (currentSectionIndex >= sections.length - 1) {
      return;
    }
    
    const nextIndex = currentSectionIndex + 1;
    const nextSectionId = sections[nextIndex];
    const nextElement = document.getElementById(nextSectionId);
    
    if (nextElement) {
      // Calculate the offset to account for fixed header
      const headerHeight = 80;
      const elementTop = nextElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementTop - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update current section index immediately for better UX
      setTimeout(() => {
        setCurrentSectionIndex(nextIndex);
      }, 100);
    }
  };

  const scrollToHome = () => {
    const heroElement = document.getElementById('hero');
    if (heroElement) {
      const headerHeight = 100;
      const elementPosition = heroElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    } else {
      // Fallback to scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
      {/* Scroll Up Button - Always goes to Home */}
      {showScrollButtons && (
        <button
          onClick={scrollToHome}
          className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-primary to-accent text-white rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group"
          type="button"
          aria-label="Scroll to home"
        >
          <MdKeyboardArrowUp className="text-2xl group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      )}

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="w-16 h-16 flex items-center justify-center bg-card text-foreground rounded-full shadow-lg border border-border hover:scale-110 hover:border-accent transition-all duration-300 group"
        type="button"
        aria-label="Toggle theme"
      >
        <MdLightMode className={`text-3xl ${isDark ? 'hidden' : 'block'} group-hover:rotate-180 transition-transform duration-500 text-orange-500`} />
        <MdDarkMode className={`text-3xl ${isDark ? 'block' : 'hidden'} group-hover:-rotate-12 transition-transform duration-500 text-yellow-300`} />
      </button>
      
      {/* Email Button */}
    

      {/* Scroll Down Button */}
      {showScrollButtons && (
        <button
          onClick={scrollToNextSection}
          className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-accent to-primary text-white rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group"
          type="button"
          aria-label="Scroll to next section"
        >
          <MdKeyboardArrowDown className="text-2xl group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      )}
    </div>
  );
}