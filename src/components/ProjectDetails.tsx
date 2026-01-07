'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MdArrowBack, 
  MdOpenInNew, 
  MdCode, 
  MdCalendarToday, 
  MdPerson, 
  MdDevices,
  MdSpeed,
  MdSecurity,
  MdAccessibility,
  MdCheckCircle
} from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ProjectDetailsProps {
  project: {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    images: string[];
    tags: string[];
    tagColors: string[];
    liveLink: string;
    codeLink: string;
    duration: string;
    role: string;
    features: string[];
    technologies: string[];
    challenges: string[];
    solutions: string[];
    metrics?: {
      performance: string;
      accessibility: string;
      seo: string;
      users?: string;
    };
  };
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5" />
        <motion.div 
          variants={itemVariants}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20"
        >
          {/* Back Button */}
          <motion.div 
            className="mb-8"
            whileHover={{ x: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link 
              href="/#projects"
              className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <MdArrowBack className="text-xl" />
              Back to Projects
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <div className="space-y-6">
              <motion.div variants={itemVariants}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <motion.span 
                      key={tag}
                      className={`px-3 py-1 rounded-full ${project.tagColors[index]} text-sm font-semibold`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
                  {project.title}
                </h1>
                
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>

              {/* Project Meta */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-2 gap-6 py-6 border-y border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center gap-3">
                  <MdCalendarToday className="text-primary text-xl" />
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Duration</p>
                    <p className="font-semibold text-slate-900 dark:text-white">{project.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MdPerson className="text-accent text-xl" />
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Role</p>
                    <p className="font-semibold text-slate-900 dark:text-white">{project.role}</p>
                  </div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    asChild
                    className="bg-primary hover:bg-primary/80 text-white shadow-lg"
                  >
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <MdOpenInNew className="mr-2 text-lg" />
                      View Live Demo
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    asChild
                    variant="outline"
                    className="border-slate-300 dark:border-slate-600"
                  >
                    <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      <MdCode className="mr-2 text-lg" />
                      View Source Code
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div 
              variants={imageVariants}
              className="relative"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200 dark:ring-slate-700">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"
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
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.2, 1],
                  delay: 1,
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Project Overview */}
        <motion.section variants={itemVariants} className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Project Overview</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>
        </motion.section>

        {/* Key Features */}
        <motion.section variants={itemVariants} className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MdCheckCircle className="text-primary text-xl mt-0.5 flex-shrink-0" />
                <p className="text-slate-700 dark:text-slate-300">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technologies Used */}
        <motion.section variants={itemVariants} className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Technologies Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="font-semibold text-slate-900 dark:text-white text-sm">{tech}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Performance Metrics */}
        {project.metrics && (
          <motion.section variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Performance Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <MdSpeed className="text-4xl text-primary mx-auto mb-3" />
                  <p className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {project.metrics.performance}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Performance</p>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <MdAccessibility className="text-4xl text-green-500 mx-auto mb-3" />
                  <p className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {project.metrics.accessibility}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Accessibility</p>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <MdSecurity className="text-4xl text-purple-500 mx-auto mb-3" />
                  <p className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {project.metrics.seo}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">SEO Score</p>
                </CardContent>
              </Card>
              
              {project.metrics.users && (
                <Card className="p-6 text-center">
                  <CardContent className="p-0">
                    <MdDevices className="text-4xl text-accent mx-auto mb-3" />
                    <p className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                      {project.metrics.users}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Active Users</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </motion.section>
        )}

        {/* Challenges & Solutions */}
        <motion.section variants={itemVariants} className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Challenges & Solutions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Challenges</h3>
              {project.challenges.map((challenge, index) => (
                <div key={index} className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                  <p className="text-slate-700 dark:text-slate-300">{challenge}</p>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Solutions</h3>
              {project.solutions.map((solution, index) => (
                <div key={index} className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                  <p className="text-slate-700 dark:text-slate-300">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Additional Images */}
        {project.images && project.images.length > 0 && (
          <motion.section variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative aspect-video rounded-xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Call to Action */}
        <motion.section 
          variants={itemVariants}
          className="text-center py-16 bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5 rounded-2xl"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Interested in this project?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Feel free to explore the live demo or check out the source code. I'm always open to discussing the technical details and decisions behind this project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="bg-primary hover:bg-primary/80">
                <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <MdOpenInNew className="mr-2" />
                  View Live Demo
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild variant="outline" size="lg">
                <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  <MdCode className="mr-2" />
                  View Source Code
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}
