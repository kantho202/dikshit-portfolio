'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MdDownload, MdCode } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import imageAbout from '../asset/Adobe Express - file.png';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: 8 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 2,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <div id="about" className="layout-container flex h-full grow flex-col items-center relative z-10 overflow-x-hidden w-full max-w-full">
      <div className="w-full max-w-[1080px] px-4 md:px-10 py-12 md:py-20 overflow-x-hidden">
        <div className="@container w-full max-w-full">
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-10 md:gap-16 md:flex-row items-center w-full max-w-full overflow-x-hidden"
          >
            <motion.div 
              variants={itemVariants}
              className="flex flex-col gap-6 w-full md:w-1/2 order-2 md:order-1 text-center md:text-left"
            >
              <div className="flex flex-col gap-4">
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 w-fit mx-auto md:mx-0"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  <span className="text-primary text-xs font-bold uppercase tracking-wider">
                    Open to work
                  </span>
                </motion.div>
                
                <motion.h1 
                  variants={itemVariants}
                  className="text-slate-900 dark:text-white text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-[-0.033em] break-words"
                >
                  Hi, I&apos;m{' '}
                  <motion.span 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 dark:from-white to-slate-500 dark:to-gray-400"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Dikshit.
                  </motion.span>
                </motion.h1>
                
                <motion.div 
                  variants={itemVariants}
                  className="text-slate-700 dark:text-slate-300 text-base sm:text-lg font-normal leading-relaxed space-y-4 max-w-full md:max-w-lg"
                >
                  <p className="break-words">
                    I transform complex ideas into{' '}
                    <span className="text-slate-900 dark:text-white font-semibold">elegant digital realities</span>. A
                     Focused on writing clean, scalable code and building user experiences that feel as good as they look.
                  </p>
                </motion.div>
              </div>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 pt-2 items-center justify-center md:justify-start"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Download Resume Button Only */}
                  <Button 
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/resume.pdf';
                      link.download = 'Dikshit_Chakma_Resume.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    data-cursor="download"
                    className="group bg-primary hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(19,146,236,0.3)] hover:shadow-[0_0_30px_rgba(19,146,236,0.5)] transition-all relative overflow-hidden w-full sm:w-auto"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="mr-2 relative z-10">Download Resume</span>
                    <MdDownload className="text-sm group-hover:translate-y-1 transition-transform relative z-10" />
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={() => {
                      const projectsSection = document.getElementById('projects');
                      if (projectsSection) {
                        projectsSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    data-cursor="view"
                    variant="outline" 
                    className="bg-transparent text-slate-900 dark:text-white border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 w-full sm:w-auto"
                  >
                    View Projects
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={imageVariants}
              className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end relative"
            >
              <motion.div 
                className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />
              <motion.div 
                className="absolute bottom-0 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-[60px] -z-10"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.2, 1],
                  delay: 1,
                }}
              />
              
              <motion.div 
                className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden group shadow-2xl ring-1 ring-white/10 rotate-2 hover:rotate-0 transition-all duration-500 ease-out"
                whileHover={{ 
                  scale: 1.02,
                  rotate: 0,
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src={imageAbout}
                  alt="Portrait of a smiling male developer working in a modern office with coding screens in background"
                  fill
                  data-cursor="media"
                  className="object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-90" />
                
                <motion.div 
                  className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 8, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  whileHover={{ y: 0 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-mono text-primary">Current Focus</span>
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <MdCode className="text-white text-[16px]" />
                    </motion.div>
                  </div>
                  <p className="text-white text-sm font-medium leading-tight">
                    Exploring Next.js & Full Stack Developer  
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
