'use client';

import { MdTerminal, MdRocketLaunch, MdArchitecture, MdGroups } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useSectionContext } from '@/contexts/SectionContext';

export default function JourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { activeSection } = useSectionContext();
  
  const isActive = activeSection === 'journey' || activeSection === null;
  const isMuted = activeSection !== null && activeSection !== 'journey';

  const journeyItems = [
    {
      id: '01_INIT',
      year: '2025',
      title: 'The "Hello World" Era',
      description: 'Fascinated by logic bringing static pages to life. Nights spent on freeCodeCamp, turning coffee into messy but functional JavaScript.',
      color: 'primary',
      icon: MdTerminal,
      textColor: 'text-primary',
      borderColor: 'border-primary',
      shadowColor: 'shadow-[0_0_15px_rgba(19,146,236,0.6)]',
      hoverBorder: 'hover:border-primary/50'
    },
    {
      id: '02_DEPLOY',
      year: '2025',
      title: 'Shipping Production Code',
      description: 'Joined a digital agency. Learned that code doesn\'t exist in a vacuum—collaborated with designers and learned the art of the git merge.',
      color: 'purple-500',
      icon: MdRocketLaunch,
      textColor: 'text-purple-500',
      borderColor: 'border-purple-500',
      shadowColor: 'shadow-[0_0_15px_rgba(168,85,247,0.6)]',
      hoverBorder: 'hover:border-purple-500/50'
    },
    {
      id: '03_SCALE',
      year: '2025',
      title: 'Architecting Systems',
      description: 'Transitioned from building pages to building systems. Component libraries, performance audits, and mentoring juniors became my daily bread.',
      color: 'primary',
      icon: MdArchitecture,
      textColor: 'text-primary',
      borderColor: 'border-primary',
      shadowColor: 'shadow-[0_0_15px_rgba(19,146,236,0.6)]',
      hoverBorder: 'hover:border-primary/50'
    },
    {
      id: '04_LEAD',
      year: 'Present',
      title: 'Leading the Charge',
      description: 'Leading frontend architecture for SaaS. My IDE is still open, but my focus has expanded to team culture, accessibility standards, and product strategy.',
      color: 'white',
      icon: MdGroups,
      textColor: 'text-slate-900 dark:text-white',
      borderColor: 'border-white dark:border-white',
      shadowColor: 'shadow-[0_0_15px_rgba(255,255,255,0.6)]',
      hoverBorder: 'hover:border-white/50'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section className={`scroll-mt-40 px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
      isMuted ? 'opacity-40 grayscale' : 'opacity-100 grayscale-0'
    }`} id="journey">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col gap-6 mb-12 sm:mb-16 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight transition-colors duration-500 ${
            isMuted ? 'text-slate-500 dark:text-slate-600' : 'text-slate-900 dark:text-white'
          }`}>
            The Code Chronicles
          </h2>
          <p className={`text-base sm:text-lg transition-colors duration-500 ${
            isMuted ? 'text-slate-400 dark:text-slate-500' : 'text-slate-600 dark:text-slate-300'
          }`}>
            My evolution wasn&apos;t a straight line—it was a series of commits, merges, and refactors.
          </p>
        </motion.div>
        
        <div className="relative w-full">
          <motion.div 
            className="absolute left-4 sm:left-6 lg:left-1/2 top-0 bottom-0 w-1 lg:-translate-x-1/2 bg-gradient-to-b from-primary via-purple-500 to-transparent opacity-30 rounded-full origin-top"
            variants={timelineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
          
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-8 sm:gap-12 lg:gap-0 relative"
          >
            {journeyItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div 
                  key={item.id}
                  variants={itemVariants}
                  className={`flex flex-col lg:flex-row items-start lg:items-center w-full lg:justify-between group ${
                    index > 0 ? 'mt-0 lg:-mt-12' : ''
                  }`}
                >
                  {/* Mobile/Tablet Layout */}
                  <div className="w-full lg:hidden relative pl-12 sm:pl-16">
                    <motion.div 
                      className={`glass-panel p-4 sm:p-6 rounded-2xl relative overflow-hidden ${item.hoverBorder} transition-colors duration-300`}
                      whileHover={{ 
                        scale: 1.02,
                        y: -5,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                    >
                      <motion.div 
                        className="absolute top-0 right-0 p-2 sm:p-3 opacity-10 group-hover:opacity-20 transition-opacity"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <IconComponent className="text-[60px] sm:text-[80px] text-slate-400 dark:text-slate-600" />
                      </motion.div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <motion.span 
                          className={`font-mono text-xs sm:text-sm font-bold ${item.textColor}`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {item.id}
                        </motion.span>
                        <span className="hidden sm:block h-px w-8 bg-slate-400 dark:bg-slate-600" />
                        <span className="text-slate-900 dark:text-white font-bold text-sm sm:text-base">{item.year}</span>
                      </div>
                      
                      <h3 className="text-slate-900 dark:text-white text-lg sm:text-xl font-bold mb-2 sm:mb-3">{item.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">{item.description}</p>
                    </motion.div>
                  </div>

                  {/* Desktop Layout */}
                  <div className={`hidden lg:block w-full lg:w-[45%] ${
                    index % 2 === 0 ? 'order-2 lg:order-1' : 'order-1'
                  } relative`}>
                    {(index % 2 === 0 || index === 0) && (
                      <motion.div 
                        className={`glass-panel p-6 lg:p-8 rounded-2xl relative overflow-hidden ${item.hoverBorder} transition-colors duration-300`}
                        whileHover={{ 
                          scale: 1.02,
                          y: -5,
                          transition: { type: "spring", stiffness: 300 }
                        }}
                      >
                        <motion.div 
                          className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity"
                          whileHover={{ rotate: 5, scale: 1.1 }}
                        >
                          <IconComponent className="text-[80px] text-slate-400 dark:text-slate-600" />
                        </motion.div>
                        
                        <div className="flex items-center gap-3 mb-4">
                          <motion.span 
                            className={`font-mono text-sm font-bold ${item.textColor}`}
                            whileHover={{ scale: 1.05 }}
                          >
                            {item.id}
                          </motion.span>
                          <span className="h-px w-8 bg-slate-400 dark:bg-slate-600" />
                          <span className="text-slate-900 dark:text-white font-bold">{item.year}</span>
                        </div>
                        
                        <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{item.description}</p>
                      </motion.div>
                    )}
                  </div>
                  
                  <motion.div 
                    className={`absolute left-4 sm:left-6 lg:left-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-background border-2 sm:border-4 ${item.borderColor} z-10 lg:-translate-x-1/2 lg:top-1/2 transform -translate-y-1/2 mt-[-12px] sm:mt-[-16px] lg:mt-0 ${item.shadowColor}`}
                    whileHover={{ scale: 1.3 }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(19, 146, 236, 0.4)",
                        "0 0 0 10px rgba(19, 146, 236, 0)",
                        "0 0 0 0 rgba(19, 146, 236, 0)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />
                  
                  <div className={`hidden lg:block w-full lg:w-[45%] ${
                    index % 2 === 1 ? 'order-2 relative' : 'order-1 lg:order-3'
                  }`}>
                    {index % 2 === 1 && (
                      <motion.div 
                        className={`glass-panel p-6 lg:p-8 rounded-2xl relative overflow-hidden ${item.hoverBorder} transition-colors duration-300`}
                        whileHover={{ 
                          scale: 1.02,
                          y: -5,
                          transition: { type: "spring", stiffness: 300 }
                        }}
                      >
                        <motion.div 
                          className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity"
                          whileHover={{ rotate: 5, scale: 1.1 }}
                        >
                          <IconComponent className="text-[80px] text-slate-400 dark:text-slate-600" />
                        </motion.div>
                        
                        <div className="flex items-center gap-3 mb-4">
                          <motion.span 
                            className={`font-mono text-sm font-bold ${item.textColor}`}
                            whileHover={{ scale: 1.05 }}
                          >
                            {item.id}
                          </motion.span>
                          <span className="h-px w-8 bg-slate-400 dark:bg-slate-600" />
                          <span className="text-slate-900 dark:text-white font-bold">{item.year}</span>
                        </div>
                        
                        <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{item.description}</p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}