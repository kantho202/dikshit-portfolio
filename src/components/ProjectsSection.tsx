'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { MdVisibility, MdOpenInNew, MdCode, MdArrowForward } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import image2 from '../asset/online-travel-ticket-illustration-through-transportation-and-journey-provider-app-for-booking-in-flat-cartoon-background-design-vector.jpg'
export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: 'HomeNest — Interactive Web Interface',
      description: 'A comprehensive dashboard for tracking sales and inventory with real-time data visualization. Optimized for large datasets.',
      image: "https://images.unsplash.com/photo-1574259392081-dbe3c19cd15e?q=80&w=552&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ['React', 'Node.js', 'Tailwind'],
      tagColors: ['bg-primary/10 text-primary', 'bg-purple-500/10 text-purple-500', 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'],
      badge: 'Case Study',
      badgeColor: 'bg-black/60',
      detailsLink: '/projects/homenest',
      liveLink: 'https://home-nest-f0c86.web.app',
      codeLink: 'https://github.com/kantho202/home-nest-client.git'
    },
    {
      id: 2,
      title: 'Online-ticket-booking',
      description: 'Mobile-first social platform focusing on photo sharing and community engagement. Includes real-time chat and notifications.',
      image: image2,
      tags: ['Node.js', 'Firebase', 'React'],
      tagColors: ['bg-green-500/10 text-green-600 dark:text-green-400', 'bg-orange-500/10 text-orange-500', 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'],
      badge: 'Live App',
      badgeColor: 'bg-green-500/80',
      detailsLink: '/projects/ticket-booking',
      liveLink: 'https://online-ticket-booking-4cc7f.web.app',
      codeLink: 'https://github.com/kantho202/online-ticket-booking.git'
    },
    {
      id: 3,
      title: 'Crafting Epic Gaming Experiences',
      description: 'High-conversion landing page with complex scroll-triggered animations and interactive financial calculators.',
      image: "https://images.unsplash.com/photo-1566748861872-572ec72b5a3e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ['Javascript', 'React', 'Tailwind'],
      tagColors: ['bg-slate-900/10 dark:bg-white/10 text-slate-900 dark:text-white', 'bg-green-500/10 text-green-500', 'bg-blue-500/10 text-blue-500'],
      badge: null,
      badgeColor: '',
      detailsLink: '/projects/gaming-experience',
      liveLink: 'https://hero-f2g.pages.dev',
      codeLink: 'https://github.com/kantho202/Assignment-08.git'
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <section 
      id="projects"
      className="scroll-mt-40 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="py-12 md:py-20"
        >
      {/* Header Section */}
      <motion.div 
        variants={itemVariants}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
      >
        <div className="flex flex-col gap-3 max-w-2xl">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Featured <span className="text-primary">Projects</span>
          </motion.h2>
          <p className="text-slate-600 dark:text-muted-foreground text-lg leading-relaxed">
            A selection of my recent work in web development, focusing on responsive design,
            performance, and user experience.
          </p>
        </div>
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link 
            href="#" 
            className="group flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            View all projects
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
            >
              <MdArrowForward className="text-sm" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ 
              y: -10,
              scale: 1.02,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <Card className="flex flex-col bg-white dark:bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-primary/10 transition-all duration-300 border border-slate-200 dark:border-slate-800 group h-full">
              <motion.div 
                className="relative w-full aspect-video overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                {project.badge && (
                  <motion.div 
                    className="absolute top-3 right-3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <span className={`${project.badgeColor} backdrop-blur-md text-white text-xs font-medium px-2.5 py-1 rounded-full border border-white/10`}>
                      {project.badge}
                    </span>
                  </motion.div>
                )}
              </motion.div>
              
              <CardContent className="flex flex-col flex-grow p-6">
                <motion.div 
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span 
                      key={tag}
                      className={`px-2.5 py-0.5 rounded-md ${project.tagColors[tagIndex]} text-xs font-semibold`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-slate-600 dark:text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <motion.div 
                  className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-700/50 flex justify-between items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link 
                      href={project.detailsLink} 
                      className="inline-flex items-center gap-1 text-sm font-medium text-slate-900 dark:text-white hover:text-primary transition-colors"
                    >
                      <MdVisibility className="text-[18px]" />
                      View Details
                    </Link>
                  </motion.div>
                  
                  <div className="flex items-center gap-2">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link 
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-primary hover:bg-primary/80 text-white text-xs font-medium transition-colors"
                        title="View Live Demo"
                      >
                        <MdOpenInNew className="text-[14px]" />
                        Live
                      </Link>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link 
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium transition-colors"
                        title="View Source Code"
                      >
                        <MdCode className="text-[14px]" />
                        Code
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
