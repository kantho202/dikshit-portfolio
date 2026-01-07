'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { MdArrowBack, MdOpenInNew, MdCode, MdAccessTime, MdPerson, MdGroup } from 'react-icons/md';
import { motion } from 'framer-motion';
import { getProjectBySlug } from '@/data/projects';
import { useState } from 'react';
import CustomCursor from '@/components/CustomCursor';

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <CustomCursor />
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link href="/#projects" className="text-primary hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      {/* Header */}
      <motion.header 
        className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/#projects"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
            >
              <motion.div
                whileHover={{ x: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MdArrowBack className="text-xl" />
              </motion.div>
              <span className="font-medium">Back to Projects</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  <MdOpenInNew className="text-sm" />
                  Live Demo
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-4 py-2 rounded-lg font-medium hover:bg-muted transition-colors"
                >
                  <MdCode className="text-sm" />
                  Source Code
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              {project.badge && (
                <span className={`${project.badgeColor} text-white text-sm font-medium px-3 py-1 rounded-full`}>
                  {project.badge}
                </span>
              )}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span 
                    key={tag}
                    className={`px-3 py-1 rounded-md ${project.tagColors[index]} text-sm font-semibold`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {project.title}
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl">
              {project.fullDescription}
            </p>

            {/* Project Meta */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <MdAccessTime className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Timeline</p>
                  <p className="font-semibold text-foreground">{project.timeline}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <MdPerson className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Role</p>
                  <p className="font-semibold text-foreground">{project.role}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <MdGroup className="text-purple-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Team Size</p>
                  <p className="font-semibold text-foreground">{project.teamSize}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Gallery */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Project Gallery</h2>
            
            {/* Main Image */}
            <motion.div 
              className="relative aspect-video rounded-2xl overflow-hidden bg-muted"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={project.gallery[selectedImage]}
                alt={`${project.title} - Image ${selectedImage + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.gallery.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index 
                      ? 'border-primary' 
                      : 'border-border hover:border-primary/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Technologies Used</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(project.technologies).map(([category, techs]) => (
                <div key={category} className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground capitalize">
                    {category}
                  </h3>
                  <div className="space-y-2">
                    {techs.map((tech, index) => (
                      <div
                        key={index}
                        className="px-3 py-2 bg-muted rounded-lg text-sm text-foreground"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Challenges & Solutions */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Challenges</h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/30 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <p className="text-red-800 dark:text-red-200">{challenge}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Solutions</h2>
              <div className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/30 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <p className="text-green-800 dark:text-green-200">{solution}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Interested in This Project?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Want to learn more about this project or discuss similar work? 
              Feel free to reach out and let's start a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Get In Touch
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/#projects"
                  className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors"
                >
                  View More Projects
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}