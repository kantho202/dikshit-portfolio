'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SectionContextType {
  activeSection: string | null;
  setActiveSection: (section: string | null) => void;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export function SectionProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['journey', 'work', 'life'];
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      let currentSection = null;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollY;
          const elementBottom = elementTop + rect.height;
          
          // Check if section is in viewport (with some offset)
          if (scrollY + windowHeight / 2 >= elementTop && scrollY + windowHeight / 2 <= elementBottom) {
            currentSection = sectionId;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSectionContext() {
  const context = useContext(SectionContext);
  if (context === undefined) {
    throw new Error('useSectionContext must be used within a SectionProvider');
  }
  return context;
}