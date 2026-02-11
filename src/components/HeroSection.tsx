'use client';

import Image from 'next/image';
import { MdCode, MdDownload } from 'react-icons/md';
import { FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import image from '../asset/dikshit (2).png';

function HeroSection() {
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

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: [0.4, 0, 0.6, 1] as const,
      },
    },
  };

  return (
    <motion.main 
      id="hero"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen pt-20 overflow-x-hidden w-full max-w-full flex flex-col items-center justify-center"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden w-full">
        <motion.div 
          className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] max-w-[300px] max-h-[300px] bg-primary/10 rounded-full blur-[120px] opacity-30"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[300px] max-h-[300px] bg-accent/10 rounded-full blur-[120px] opacity-30"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '-3s' }}
        />
        
        <div className="absolute inset-0 w-full">
          <div 
            className="absolute inset-0 opacity-[0.07] w-full"
            style={{
              backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }}
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center justify-center w-full min-h-[85vh] px-4 py-8 z-10 overflow-x-hidden max-w-full">
        <div className="flex flex-col items-center space-y-8 w-full max-w-[320px]">
          
          {/* Mobile Image */}
          <motion.div 
            className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center"
            variants={imageVariants}
          >
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <motion.div 
                className="absolute -top-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl"
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
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent/20 rounded-full blur-2xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.2, 1],
                  delay: 2,
                }}
              />
            </div>

            <motion.div 
              className="absolute inset-0 border-2 border-primary/40 rounded-full scale-[0.9] shadow-[0_0_20px_rgba(56,189,248,0.3)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute inset-0 border border-accent/40 rounded-full scale-[1.05] rotate-12 shadow-[0_0_20px_rgba(45,212,191,0.3)]"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.div 
              className="relative w-[75%] h-[75%] overflow-hidden rounded-[60px] shadow-2xl ring-2 ring-white/20 dark:ring-white/20 bg-gradient-to-br from-surface-dark to-gray-900 transition-colors duration-500"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={image}
                alt="Dikshit Chakma - Front End Developer"
                fill
                className="object-contain transition-all duration-700"
                priority
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            </motion.div>

            <motion.div
              className="absolute -top-2 -right-2 w-2 h-2 bg-primary/60 rounded-full shadow-lg shadow-primary/30"
              animate={{
                y: [0, -8, 0],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: [0.4, 0, 0.2, 1],
              }}
            />
            <motion.div
              className="absolute -bottom-3 -left-3 w-3 h-3 bg-accent/50 rounded-full shadow-lg shadow-accent/30"
              animate={{
                x: [0, 6, 0],
                opacity: [0.5, 0.9, 0.5],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: [0.4, 0, 0.2, 1],
                delay: 1,
              }}
            />
          </motion.div>

          {/* Mobile Text */}
          <motion.div 
            className="text-center space-y-6 z-30 w-full max-w-full overflow-hidden"
            variants={textVariants}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.h1 
                className="font-display text-[11vw] sm:text-[10vw] leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-gray-200 dark:to-gray-400 break-words"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                FRONT END
              </motion.h1>
            </motion.div>

            <motion.div
              className="relative inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-lg scale-110" />
              
              <div className="relative bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-2 shadow-lg">
                <motion.p 
                  className="text-base font-semibold tracking-wider uppercase bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  Developer
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <p className="text-sm font-medium text-slate-600 dark:text-gray-400">
                Crafting Digital Experiences
              </p>
              <p className="text-xs font-medium tracking-widest uppercase text-accent/80">
                Based in Rangamati
              </p>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full" />
            </motion.div>

            {/* Resume Buttons for Mobile */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              {/* Download Resume Button Only */}
              <motion.button
                onClick={() => {
                  window.open('https://drive.google.com/uc?export=download&id=18xwq1dYq6dVCVdb1CnHgzvxGWzZOs8g4', '_blank');
                }}
                className="group bg-gradient-to-r from-primary to-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm sm:text-base font-medium">Download Resume</span>
                <MdDownload className="text-sm sm:text-base group-hover:translate-y-0.5 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block relative w-full max-w-[90rem] mx-auto px-4 md:px-8 lg:px-12 z-10 overflow-x-hidden">
        <div className="grid grid-cols-12 gap-4 md:gap-8 items-center h-full min-h-[80vh] w-full">
          <motion.div 
            variants={textVariants}
            className="col-span-3 flex flex-col justify-center items-end text-right z-20"
          >
            <motion.h1 
              className="font-display text-[5vw] lg:text-[6vw] xl:text-[7vw] leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-500 dark:from-white dark:to-gray-400"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              FRONT
            </motion.h1>
            <motion.p 
              className="mt-4 text-sm font-medium tracking-widest uppercase text-accent drop-shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Crafting Digital<br />Experiences
            </motion.p>
          </motion.div>

          <motion.div 
            variants={imageVariants}
            className="col-span-6 relative flex justify-center items-center z-10 h-full group"
          >
            <div className="relative w-full max-w-md lg:max-w-lg aspect-[3/4] md:aspect-square flex items-center justify-center">
              <motion.div 
                className="absolute inset-0 border border-primary/30 rounded-full scale-[0.85] group-hover:scale-[0.9] transition-transform duration-700 ease-out shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-0 border border-accent/30 rounded-full scale-[1.1] rotate-12 group-hover:rotate-[20deg] transition-transform duration-700 ease-out shadow-[0_0_15px_rgba(45,212,191,0.2)]"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.div 
                className="relative w-[70%] h-[70%] overflow-hidden rounded-[100px] shadow-2xl ring-1 ring-white/10 dark:ring-white/10 bg-surface-dark transition-colors duration-500"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={image}
                  alt="Dikshit Chakma - Front End Developer"
                  fill
                  data-cursor="media"
                  className="object-contain hover:scale-105 transition-all duration-700"
                  priority
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/20 via-transparent to-transparent opacity-50" />
              </motion.div>

              <motion.div 
                variants={floatingVariants}
                animate="animate"
                className="absolute -right-2 lg:-right-4 top-1/4 bg-surface-dark p-3 lg:p-4 rounded-2xl shadow-xl border border-gray-700/50 backdrop-blur-sm transition-colors duration-500"
              >
                <MdCode className="text-2xl lg:text-4xl text-accent drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]" />
              </motion.div>
              
              <motion.div 
                className="absolute -left-4 lg:-left-8 bottom-1/4 w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-tr from-primary to-accent opacity-60 blur-md"
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />
            </div>
          </motion.div>

          <motion.div 
            variants={textVariants}
            className="col-span-3 flex flex-col justify-center items-start text-left z-20"
          >
            <motion.h1 
              className="font-display text-[5vw] lg:text-[6vw] xl:text-[7vw] leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-bl from-slate-900 to-slate-500 dark:from-white dark:to-gray-400"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              END
            </motion.h1>
            <motion.p 
              className="mt-4 text-sm font-medium tracking-widest uppercase text-accent max-w-[150px] drop-shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Based in<br />Rangamati
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Developer Text */}
      <motion.div 
        className="relative w-full text-center -mt-12 md:-mt-24 z-30 pb-20 select-none pointer-events-none"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <motion.h2 
          className="font-display text-[14vw] md:text-[11vw] leading-none tracking-tighter text-outline opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          DEVELOPER
        </motion.h2>
        <motion.div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 pointer-events-auto"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as const }}
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <FaArrowDown className="text-slate-900 dark:text-white opacity-50 text-2xl hover:text-accent hover:opacity-100 transition-all cursor-pointer" />
        </motion.div>
      </motion.div>

      {/* Mobile Description */}
      <motion.div 
        className="md:hidden px-6 pb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <p className="text-sm font-medium leading-relaxed text-slate-600 dark:text-gray-400 max-w-sm mx-auto">
          I create visually striking and high-performance websites with a focus on motion and user interaction.
        </p>
      </motion.div>
    </motion.main>
  );
}

export default HeroSection;