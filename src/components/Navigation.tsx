'use client';

import Link from 'next/link';
import { MdTimeline, MdBolt, MdInterests } from 'react-icons/md';

export default function Navigation() {
  return (
    <div className="w-full sticky top-[65px] z-40 bg-white/90 dark:bg-background/90 backdrop-blur-xl border-y border-slate-200 dark:border-border mb-12">
      <div className="max-w-[1080px] mx-auto px-4 md:px-10">
        <div className="flex gap-2 sm:gap-4 md:gap-12 overflow-x-auto no-scrollbar justify-start md:justify-center min-w-0">
          <Link 
            href="#journey"
            className="group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-4 border-b-2 border-primary text-slate-900 dark:text-gray-100 transition-colors flex-shrink-0"
          >
            <MdTimeline className="text-primary group-hover:scale-110 transition-transform text-lg sm:text-xl" />
            <span className="text-xs sm:text-sm font-bold tracking-wide uppercase whitespace-nowrap">Journey</span>
          </Link>
          
          <Link 
            href="#work"
            className="group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-4 border-b-2 border-transparent text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-gray-100 transition-colors flex-shrink-0"
          >
            <MdBolt className="group-hover:text-accent group-hover:scale-110 transition-transform text-lg sm:text-xl" />
            <span className="text-xs sm:text-sm font-bold tracking-wide uppercase whitespace-nowrap">Craft</span>
          </Link>
          
          <Link 
            href="#life"
            className="group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-4 border-b-2 border-transparent text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-gray-100 transition-colors flex-shrink-0"
          >
            <MdInterests className="group-hover:text-purple-400 group-hover:scale-110 transition-transform text-lg sm:text-xl" />
            <span className="text-xs sm:text-sm font-bold tracking-wide uppercase whitespace-nowrap">Life</span>
          </Link>
        </div>
      </div>
    </div>
  );
}