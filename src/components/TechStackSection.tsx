'use client';

import { 
  FaReact, 
  FaNodeJs, 
  FaBootstrap, 
  FaGitAlt, 
  FaAws 
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb 
} from 'react-icons/si';
import { MdStar } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function TechStackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techStacks = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'JavaScript', icon: SiJavascript, bgColor: 'bg-[#F7DF1E]', textColor: 'text-black' },
        { name: 'React', icon: FaReact, iconColor: 'text-[#61DAFB]' },
        { name: 'Next.js', icon: SiNextdotjs, bgColor: 'bg-white', textColor: 'text-black' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, iconColor: 'text-[#38B2AC]' },
        { name: 'Bootstrap', icon: FaBootstrap, bgColor: 'bg-[#7952B3]', textColor: 'text-white' }
      ]
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node.js', icon: FaNodeJs, iconColor: 'text-[#339933]' },
        { name: 'Express.js', icon: SiExpress, bgColor: 'bg-white border border-gray-300', textColor: 'text-black' }
      ]
    },
    {
      category: 'Database',
      technologies: [
        { name: 'MongoDB', icon: SiMongodb, iconColor: 'text-[#47A248]' }
      ]
    },
    {
      category: 'Tools',
      technologies: [
        { name: 'Git', icon: FaGitAlt, iconColor: 'text-[#F05032]' },
        { name: 'AWS', icon: FaAws, iconColor: 'text-[#FF9900]' }
      ]
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

  const stackVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const renderIcon = (tech: any) => {
    const IconComponent = tech.icon;

    if (tech.bgColor) {
      return (
        <motion.div 
          className={`w-8 h-8 flex items-center justify-center rounded ${tech.bgColor} ${tech.textColor}`}
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <IconComponent className="text-lg" />
        </motion.div>
      );
    }

    return (
      <motion.div
        whileHover={{ scale: 1.2, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <IconComponent className={`text-2xl ${tech.iconColor}`} />
      </motion.div>
    );
  };

  return (
    <main id="skills" className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20 z-10">
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-8 sm:mb-12 md:mb-20 flex items-center justify-center sm:justify-start gap-2"
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <MdStar className="text-lg sm:text-xl md:text-2xl text-slate-500 dark:text-slate-400" />
        </motion.div>
        <h2 className="text-lg sm:text-xl md:text-2xl text-center font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300">
          My Stack
        </h2>
      </motion.div>
      
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-12 sm:space-y-16 md:space-y-24"
      >
        {techStacks.map((stack, stackIndex) => (
          <motion.div 
            key={stack.category} 
            variants={stackVariants}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-start group"
          >
            <motion.div 
              variants={titleVariants}
              className="md:col-span-3 lg:col-span-4 text-center md:text-left"
            >
              <motion.h3 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display uppercase tracking-tighter text-slate-300 dark:text-slate-600 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300"
                whileHover={{ 
                  scale: 1.05,
                  color: "rgb(15 23 42)",
                  transition: { duration: 0.2 }
                }}
              >
                {stack.category}
              </motion.h3>
            </motion.div>
            
            <motion.div 
              className="md:col-span-9 lg:col-span-8"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-6 sm:gap-y-8 md:gap-y-10">
                {stack.technologies.map((tech, techIndex) => (
                  <motion.div 
                    key={tech.name}
                    variants={techVariants}
                    whileHover={{ 
                      y: -8,
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 sm:gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all duration-300 group/tech"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
                      {renderIcon(tech)}
                    </div>
                    <motion.span 
                      className="font-medium text-sm sm:text-base lg:text-lg text-slate-900 dark:text-white truncate group-hover/tech:text-primary dark:group-hover/tech:text-accent transition-colors duration-300"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {tech.name}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating background elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/5 rounded-full blur-xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: [0.4, 0, 0.2, 1],
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-accent/5 rounded-full blur-xl -z-10"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: [0.4, 0, 0.2, 1],
          delay: 1.5,
        }}
      />
    </main>
  );
}
