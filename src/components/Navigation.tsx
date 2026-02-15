'use client';

import Link from 'next/link';
import { MdTimeline, MdBolt, MdInterests } from 'react-icons/md';
import { MouseEvent } from 'react';

export default function Navigation() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 120; // Approximate height of header + navigation
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full sticky top-[72px] sm:top-[80px] md:top-[96px] z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-border shadow-sm">
      <div className="max-w-[1080px] mx-auto px-4 md:px-10">
        <div className="flex gap-1 sm:gap-2 md:gap-12 overflow-x-auto no-scrollbar justify-start md:justify-center">
          <Link 
            href="#journey"
            onClick={(e) => handleNavClick(e, 'journey')}
            className="group relative flex items-center gap-1.5 sm:gap-2 md:gap-3 px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 md:py-4 text-slate-900 dark:text-gray-100 transition-colors flex-shrink-0"
          >
            <MdTimeline className="text-primary group-hover:scale-110 transition-transform text-sm sm:text-base md:text-lg" />
            <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-wide uppercase whitespace-nowrap">Journey</span>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
          </Link>
          
          <Link 
            href="#work"
            onClick={(e) => handleNavClick(e, 'work')}
            className="group relative flex items-center gap-1.5 sm:gap-2 md:gap-3 px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 md:py-4 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-gray-100 transition-colors flex-shrink-0"
          >
            <MdBolt className="group-hover:text-accent group-hover:scale-110 transition-transform text-sm sm:text-base md:text-lg" />
            <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-wide uppercase whitespace-nowrap">Craft</span>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-accent transition-colors" />
          </Link>
          
          <Link 
            href="#life"
            onClick={(e) => handleNavClick(e, 'life')}
            className="group relative flex items-center gap-1.5 sm:gap-2 md:gap-3 px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 md:py-4 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-gray-100 transition-colors flex-shrink-0"
          >
            <MdInterests className="group-hover:text-purple-400 group-hover:scale-110 transition-transform text-sm sm:text-base md:text-lg" />
            <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-wide uppercase whitespace-nowrap">Life</span>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-purple-400 transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
}