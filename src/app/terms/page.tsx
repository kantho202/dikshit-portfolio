'use client';

import Link from 'next/link';
import { MdArrowBack, MdGavel, MdDescription, MdWarning, MdHandshake } from 'react-icons/md';
import { motion } from 'framer-motion';
import CustomCursor from '@/components/CustomCursor';

export default function TermsAndConditions() {
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
      icon: MdHandshake,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using this website, you accept and agree to be bound by these terms",
        "If you do not agree to these terms, please do not use this website",
        "We reserve the right to modify these terms at any time without prior notice",
        "Your continued use of the website constitutes acceptance of any changes"
      ]
    },
    {
      icon: MdDescription,
      title: "Use of Website",
      content: [
        "This website is for informational and portfolio purposes only",
        "You may view, download, and print content for personal, non-commercial use",
        "You may not reproduce, distribute, or create derivative works without permission",
        "Any unauthorized use may violate copyright, trademark, and other laws"
      ]
    },
    {
      icon: MdWarning,
      title: "Disclaimers and Limitations",
      content: [
        "The website is provided 'as is' without warranties of any kind",
        "We do not guarantee the accuracy, completeness, or timeliness of information",
        "We are not liable for any damages arising from the use of this website",
        "External links are provided for convenience and we are not responsible for their content"
      ]
    },
    {
      icon: MdGavel,
      title: "Intellectual Property",
      content: [
        "All content on this website is owned by Dikshit Chakma or licensed to us",
        "This includes text, images, code, designs, and other creative works",
        "You may not use our intellectual property without explicit written permission",
        "Respect for intellectual property rights is essential for continued access"
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
              Terms & Conditions
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
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 border border-accent/20"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MdGavel className="text-3xl text-accent" />
            </motion.div>
            
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                Terms & Conditions
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Please read these terms and conditions carefully before using our website. 
                These terms govern your use of our services.
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
                  className="bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-accent/30 transition-colors"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <IconComponent className="text-xl text-accent" />
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
                            <div className="w-2 h-2 rounded-full bg-accent/60 mt-2 flex-shrink-0" />
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

          {/* Additional Terms */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border rounded-2xl p-6 sm:p-8"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">Additional Terms</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  For questions about these terms, please contact us through the contact form 
                  on our website or email us directly.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Governing Law</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  These terms are governed by the laws of Bangladesh. Any disputes will be 
                  resolved in the appropriate courts of jurisdiction.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-accent/5 to-primary/5 border border-accent/20 rounded-2xl p-6 sm:p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Questions About These Terms?
            </h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions about these Terms & Conditions or need clarification 
              on any point, please feel free to reach out to us.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
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