import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Animate the main cursor with a slight delay
      cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
      
      // Animate the dot cursor immediately
      cursorDot.style.transform = `translate(${clientX}px, ${clientY}px)`;

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isClickable = target.matches('button, a, input, textarea, [role="button"]');
      
      cursor.classList.toggle('scale-150', isClickable);
      cursor.classList.toggle('border-purple-500', isClickable);
      cursorDot.classList.toggle('bg-purple-500', isClickable);
    };

    // Hide default cursor
    document.documentElement.style.cursor = 'none';
    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.documentElement.style.cursor = 'auto';
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      {/* Main cursor ring */}
      <div
        ref={cursorRef}
        className={cn(
          "pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-50",
          "w-8 h-8 rounded-full border-2 border-white/50 transition-all duration-100",
          "mix-blend-difference"
        )}
      />
      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className={cn(
          "pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-50",
          "w-1 h-1 rounded-full bg-white/80 transition-colors duration-100",
          "mix-blend-difference"
        )}
      />
    </>
  );
}