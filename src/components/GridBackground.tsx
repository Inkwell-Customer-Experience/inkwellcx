'use client';

import { useEffect, useState } from 'react';

export function GridBackground() {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  if (prefersReduced) {
    // Return minimal grid if user prefers reduced motion
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(circle, rgba(31, 111, 235, 0.12) 1.5px, transparent 1.5px)',
          backgroundSize: '50px 50px',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />
    );
  }

  // Animated grid for desktop using CSS keyframes
  return (
    <>
      <style>{`
        @keyframes grid-move {
          0% {
            background-position: 0 0;
            opacity: 0.35;
          }
          25% {
            opacity: 0.4;
          }
          50% {
            background-position: 50px 50px;
            opacity: 0.45;
          }
          75% {
            opacity: 0.4;
          }
          100% {
            background-position: 0 0;
            opacity: 0.35;
          }
        }

        .grid-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(circle, rgba(31, 111, 235, 0.5) 2.5px, transparent 2.5px);
          background-size: 50px 50px;
          background-attachment: fixed;
          z-index: -1;
          pointer-events: none;
          animation: grid-move 8s ease-in-out infinite;
        }
      `}</style>
      <div className="grid-background" />
    </>
  );
}
