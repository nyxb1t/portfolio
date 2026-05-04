import React, { useState, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';

const GlobalGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // High-performance optimization: Don't run the glow for people who prefer reduced motion.
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Basic mouse update logic
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  // Performance bail-out
  if (prefersReducedMotion) return null;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none w-full h-full bg-[#160029]">
      
      {/* 
        The Core Glow: 
        A huge, central violet blob that establishes the mood.
        Color Reference: Deepened Midnight Violet
      */}
      <div className="absolute inset-[-100px] bg-[radial-gradient(circle_at_50%_50%,_#160029_0%,_#0a001a_100%)] opacity-80" />

      {/* 
        The Interactive Mouse Glow: 
        We use raw inline styles with `translate3d` for hardware acceleration.
        This provides a high FPS background interaction.
        Color Reference: Wine Plum (#773344) 
      */}
      <div 
        className="absolute w-[50vw] h-[50vw] rounded-full blur-[150px] mix-blend-screen transition-transform duration-100 ease-out will-change-transform opacity-30"
        style={{
          backgroundColor: '#773344',
          // Centers the blob on the cursor and uses GPU-accelerated movement
          transform: `translate3d(${mousePosition.x - 25}vw, ${mousePosition.y - 25}vw, 0)`
        }}
      />
    </div>
  );
};

export default GlobalGlow;