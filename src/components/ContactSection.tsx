'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MdArrowForward } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ContactSection() {
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

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section 
      id="contact"
      className="scroll-mt-40 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 py-12 md:py-20"
        >
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col justify-between min-h-[300px] sm:min-h-[400px] lg:min-h-[600px]"
          >
            <div className="space-y-4 sm:space-y-6">
              <motion.h1 
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-slate-900 dark:text-white"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Let&apos;s collaborate
              </motion.h1>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link 
                  href="mailto:dikshitchakma2002@gmail.com"
                  className="inline-block text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  dikshitchakma2002@gmail.com
                </Link>
              </motion.div>
            </div>
            
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16 lg:mt-0"
            >
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3 sm:mb-4">
                  Find us
                </h3>
                <div className="flex space-x-3 sm:space-x-4 text-xs sm:text-sm text-slate-500 dark:text-gray-400">
                  <motion.div whileHover={{ y: -2 }}>
                    <Link 
                      href="https://www.facebook.com/share/17dSnWFaEs/"
                      className="hover:text-primary dark:hover:text-white transition-colors"
                    >
                      FB
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }}>
                    <Link 
                      href="https://www.instagram.com/dikshitchakma?igsh=MThxbTQ3Y2Vma2Ztbg=="
                      className="hover:text-primary dark:hover:text-white transition-colors"
                    >
                      IG
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }}>
                    <Link 
                      href="https://www.linkedin.com/in/dikshit-chakma/"
                      className="hover:text-primary dark:hover:text-white transition-colors"
                    >
                      IN
                    </Link>
                  </motion.div>
                </div>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3 sm:mb-4">
                  Rangamati, Bangladesh
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 font-light">
                  +84 (0) 28 3636 1354
                </p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={formVariants}
            className="lg:col-span-7 pt-2 lg:pt-16"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-lg sm:text-xl lg:text-2xl font-normal text-slate-800 dark:text-white mb-8 sm:mb-12"
            >
              Say hello
            </motion.h2>
            
            <form className="space-y-8 sm:space-y-12">
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-8 sm:gap-y-12"
          >
            <motion.div 
              className="relative group"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <label 
                htmlFor="name"
                className="block text-[10px] font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2"
              >
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="border-0 border-b border-slate-300 dark:border-gray-700 bg-transparent rounded-none px-0 focus:border-slate-900 dark:focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0 text-sm sm:text-base"
              />
            </motion.div>
            
            <motion.div 
              className="relative group"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <label 
                htmlFor="subject"
                className="block text-[10px] font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2"
              >
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="Choose subject"
                className="border-0 border-b border-slate-300 dark:border-gray-700 bg-transparent rounded-none px-0 focus:border-slate-900 dark:focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0 text-sm sm:text-base"
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-8 sm:gap-y-12"
          >
            <motion.div 
              className="relative group"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <label 
                htmlFor="company"
                className="block text-[10px] font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2"
              >
                Company
              </label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Distl"
                className="border-0 border-b border-slate-300 dark:border-gray-700 bg-transparent rounded-none px-0 focus:border-slate-900 dark:focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0 text-sm sm:text-base"
              />
            </motion.div>
            
            <motion.div 
              className="relative group"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <label 
                htmlFor="email"
                className="block text-[10px] font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email address"
                className="border-0 border-b border-slate-300 dark:border-gray-700 bg-transparent rounded-none px-0 focus:border-slate-900 dark:focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0 text-sm sm:text-base"
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="relative group pt-4"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <label 
              htmlFor="message"
              className="block text-[10px] font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2"
            >
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Start typing here"
              rows={1}
              className="border-0 border-b border-slate-300 dark:border-gray-700 bg-transparent rounded-none px-0 resize-none min-h-[40px] focus:border-slate-900 dark:focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0 text-sm sm:text-base"
            />
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="pt-6 sm:pt-8"
          >
            <motion.div
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                type="submit"
               
              >
                Submit
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as const }}
                >
                  <MdArrowForward className="ml-2 w-4 h-4" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}