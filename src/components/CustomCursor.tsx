'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Start with true to avoid flash
  const animationFrameRef = useRef<number | null>(null);
  const [mounted, setMounted] = useState(false);

  // Optimized position update with requestAnimationFrame
  const updatePosition = useCallback((e: MouseEvent) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    animationFrameRef.current = requestAnimationFrame(() => {
      setPosition({ x: e.clientX, y: e.clientY });
    });
  }, []);

  const handleMouseEnter = useCallback(() => setIsVisible(true), []);
  const handleMouseLeave = useCallback(() => setIsVisible(false), []);

  const handleElementHover = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, img, video, canvas, .cursor-hover, [data-cursor="hover"]');
    setIsHovering(!!isInteractive);
  }, []);

  useEffect(() => {
    setMounted(true);
    
    // Check if device supports hover and is not mobile
    const checkMobile = () => {
      const isTouchDevice = window.matchMedia('(hover: none)').matches;
      const isSmallScreen = window.innerWidth <= 768;
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      return isTouchDevice || isSmallScreen || isMobileUA;
    };

    const mobile = checkMobile();
    setIsMobile(mobile);

    if (mobile) {
      // Ensure default cursor is shown on mobile
      document.documentElement.style.cursor = 'auto';
      document.body.style.cursor = 'auto';
      return;
    }

    // Hide default cursor on desktop
    document.documentElement.style.cursor = 'none';
    document.body.style.cursor = 'none';

    const handleResize = () => {
      const newMobile = checkMobile();
      setIsMobile(newMobile);
      
      if (newMobile) {
        document.documentElement.style.cursor = 'auto';
        document.body.style.cursor = 'auto';
      } else {
        document.documentElement.style.cursor = 'none';
        document.body.style.cursor = 'none';
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', updatePosition, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleElementHover, { passive: true });
    window.addEventListener('resize', handleResize);

    // Show cursor immediately when component mounts
    setIsVisible(true);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleElementHover);
      window.removeEventListener('resize', handleResize);
      
      // Restore default cursor when component unmounts
      document.documentElement.style.cursor = 'auto';
      document.body.style.cursor = 'auto';
    };
  }, [updatePosition, handleMouseEnter, handleMouseLeave, handleElementHover]);

  // Don't render on mobile or before mounting
  if (!mounted || isMobile) {
    return null;
  }

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-[9999] will-change-transform transition-opacity duration-200 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
          transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
        }}
      >
        <div className={`w-4 h-4 rounded-full border-2 transition-colors duration-200 ${
          isHovering 
            ? 'bg-primary/30 border-primary shadow-lg shadow-primary/25' 
            : 'bg-primary/10 border-primary/60'
        }`} />
      </div>

      {/* Cursor trail */}
      <div
        className={`fixed pointer-events-none z-[9998] will-change-transform transition-opacity duration-300 ease-out ${
          isVisible ? 'opacity-40' : 'opacity-0'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.25 : 0.8})`,
          transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
        }}
      >
        <div className="w-6 h-6 rounded-full border border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5" />
      </div>
    </>
  );
}