'use client';

import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    // Hide loader after animation completes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-gray-950 transition-opacity duration-500"
         style={{ opacity: progress >= 100 ? 0 : 1 }}>
      <div className="flex flex-col items-center gap-6">
        {/* Animated Logo/Text */}
        <div className="relative">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white animate-pulse">
            DC
          </h1>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        {/* Loading Text */}
        <p className="text-sm text-gray-600 dark:text-gray-400 animate-pulse">
          Loading experience...
        </p>
      </div>
    </div>
  );
}
