'use client';

import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Smooth loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 120);

    // Start fade out animation
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2200);

    // Remove loader from DOM
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-gray-900 transition-all duration-700 ${
        fadeOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}
    >
      {/* Animated Background Elements - Matching website colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid Pattern Background - Matching Hero Section */}
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />

      <div className="relative flex flex-col items-center gap-8">
        {/* Logo Container with Animated Border */}
        <div className="relative group">
          {/* Rotating Border Effect - Using website colors */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur-xl opacity-60 animate-spin-slow" />
          
          {/* Logo Box */}
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-800">
            <div className="relative">
              {/* Main Logo - Matching website gradient */}
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent font-[family-name:var(--font-space-grotesk)]">
                DC
              </h1>
              
              {/* Animated Underline - Using primary color */}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer" />
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="flex flex-col items-center gap-3 w-80">
          {/* Progress Bar Container */}
          <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden shadow-inner">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            
            {/* Progress Fill - Using website gradient colors */}
            <div 
              className="relative h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out rounded-full shadow-lg"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>
          </div>

          {/* Progress Percentage */}
          <div className="flex items-center justify-between w-full px-1">
            <p className="text-xs font-medium text-slate-600 dark:text-gray-400 tracking-wider uppercase">
              Loading
            </p>
            <p className="text-xs font-bold text-slate-900 dark:text-gray-100 tabular-nums">
              {Math.min(Math.round(progress), 100)}%
            </p>
          </div>
        </div>

        {/* Loading Text with Dots Animation */}
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium text-slate-600 dark:text-gray-400">
            Crafting Digital Experiences
          </p>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
