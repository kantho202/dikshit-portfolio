'use client';

import { MdMemory, MdHandshake, MdAccessibilityNew, MdAccountTree, MdForum, MdContrast } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useSectionContext } from '@/contexts/SectionContext';

export default function WorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { activeSection } = useSectionContext();
  
  const isActive = activeSection === 'work' || activeSection === null;
  const isMuted = activeSection !== null && activeSection !== 'work';

  const workItems = [
    {
      title: 'Complex Logic',
      description: 'I thrive on the "impossible" bugs. State management architecture, performance bottlenecks, and intricate data visualizations are my playground.',
      icon: MdMemory,
      color: 'primary',
      bgIcon: MdAccountTree
    },
    {
      title: 'Open Collaboration',
      description: 'Software is a team sport. I value environments with low ego and high communication, where design and engineering speak the same language.',
      icon: MdHandshake,
      color: 'purple-500',
      bgIcon: MdForum
    },
    {
      title: 'Inclusive Design',
      description: 'Empathy is a technical skill. I build with accessibility at the forefront, ensuring digital experiences are usable by everyone, regardless of ability.',
      icon: MdAccessibilityNew,
      color: 'teal-400',
      bgIcon: MdContrast
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className={`scroll-mt-32 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 transition-all duration-500 ${
      isMuted ? 'opacity-40 grayscale' : 'opacity-100 grayscale-0'
    }`} id="work">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col gap-8 sm:gap-12"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            variants={itemVariants}
            className="flex flex-col gap-3 sm:gap-4 text-center sm:text-left"
          >
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight transition-colors duration-500 ${
              isMuted ? 'text-slate-500 dark:text-slate-600' : 'text-slate-900 dark:text-white'
            }`}>
              What Fuels Me
            </h2>
            <p className={`text-sm sm:text-base lg:text-lg max-w-2xl mx-auto sm:mx-0 px-4 sm:px-0 transition-colors duration-500 ${
              isMuted ? 'text-slate-400 dark:text-slate-500' : 'text-slate-600 dark:text-slate-300'
            }`}>
              Not all code is created equal. Here are the environments and challenges where I do my best work.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {workItems.map((item, index) => {
              const IconComponent = item.icon;
              const BgIconComponent = item.bgIcon;
              
              return (
                <motion.div
                  key={item.title}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-56 sm:h-64 lg:h-80 flex flex-col justify-end p-5 sm:p-6 lg:p-8 cursor-pointer"
                >
                  <motion.div 
                    className={`absolute -top-8 sm:-top-10 -right-8 sm:-right-10 text-muted-foreground/20 group-hover:opacity-30 transition-all duration-500 ${
                      item.color === 'primary' ? 'group-hover:text-primary/10' :
                      item.color === 'purple-500' ? 'group-hover:text-purple-500/10' :
                      'group-hover:text-teal-400/10'
                    }`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BgIconComponent className="text-[120px] sm:text-[150px] lg:text-[200px] leading-none" />
                  </motion.div>
                  
                  <motion.div 
                    className="relative z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                    initial={{ y: 10, opacity: 0.8 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    <motion.div 
                      className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-br border backdrop-blur-sm flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 ${
                        item.color === 'primary' ? 'from-primary/20 to-transparent border-primary/20 text-primary' :
                        item.color === 'purple-500' ? 'from-purple-500/20 to-transparent border-purple-500/20 text-purple-500' :
                        'from-teal-400/20 to-transparent border-teal-400/20 text-teal-400'
                      }`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <IconComponent className="text-[20px] sm:text-[24px] lg:text-[28px]" />
                    </motion.div>
                    
                    <motion.h3 
                      className="text-slate-900 dark:text-white text-lg sm:text-xl lg:text-2xl font-bold mb-1.5 sm:mb-2 lg:mb-3"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.title}
                    </motion.h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                      {item.description}
                    </p>
                  </motion.div>

                  {/* Floating particles */}
                  <motion.div
                    className="absolute top-4 right-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary/30 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                  <motion.div
                    className="absolute bottom-16 sm:bottom-20 left-4 w-1 h-1 sm:w-1 sm:h-1 bg-accent/40 rounded-full"
                    animate={{
                      y: [0, -8, 0],
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
