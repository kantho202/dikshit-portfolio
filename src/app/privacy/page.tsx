'use client';

import Link from 'next/link';
import { MdArrowBack, MdSecurity, MdPrivacyTip, MdDataUsage } from 'react-icons/md';
import { motion } from 'framer-motion';
import CustomCursor from '@/components/CustomCursor';

export default function PrivacyPolicy() {
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

  const sections = [
    {
      icon: MdDataUsage,
      title: "Information We Collect",
      content: [
        "Personal information you provide when contacting us through forms",
        "Usage data and analytics to improve user experience",
        "Technical information like IP address, browser type, and device information",
        "Cookies and similar tracking technologies for functionality"
      ]
    },
    {
      icon: MdPrivacyTip,
      title: "How We Use Your Information",
      content: [
        "To respond to your inquiries and provide requested services",
        "To improve our website functionality and user experience",
        "To analyze website traffic and usage patterns",
        "To comply with legal obligations and protect our rights"
      ]
    },
    {
      icon: MdSecurity,
      title: "Data Protection",
      content: [
        "We implement appropriate security measures to protect your data",
        "Your personal information is never sold or shared with third parties",
        "We retain data only as long as necessary for the stated purposes",
        "You have the right to request access, correction, or deletion of your data"
      ]
    }
  ];

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
              href="/"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
            >
              <motion.div
                whileHover={{ x: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MdArrowBack className="text-xl" />
              </motion.div>
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            
            <motion.h1 
              className="text-xl font-bold text-foreground"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Privacy Policy
            </motion.h1>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/20"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MdSecurity className="text-3xl text-primary" />
            </motion.div>
            
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, 
                use, and protect your personal information.
              </p>
              <p className="text-sm text-muted-foreground">
                Last updated: January 6, 2026
              </p>
            </div>
          </motion.div>

          {/* Content Sections */}
          <div className="grid gap-8">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <motion.div
                  key={section.title}
                  variants={itemVariants}
                  className="bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-colors"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <IconComponent className="text-xl text-primary" />
                    </motion.div>
                    
                    <div className="flex-1 space-y-4">
                      <h2 className="text-2xl font-bold text-foreground">
                        {section.title}
                      </h2>
                      
                      <ul className="space-y-3">
                        {section.content.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            className="flex items-start gap-3 text-muted-foreground"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * itemIndex }}
                          >
                            <div className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-6 sm:p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Questions About Privacy?
            </h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions about this Privacy Policy or how we handle your data, 
              please don't hesitate to contact us.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Contact Us
                <MdArrowBack className="rotate-180" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="text-center pt-8 border-t border-border"
          >
            <p className="text-sm text-muted-foreground">
              © 2026 Dikshit Chakma. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}