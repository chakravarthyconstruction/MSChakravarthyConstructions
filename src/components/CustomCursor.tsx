import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (prefersReducedMotion || isTouch) return;

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    const dotX = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power3.out' });
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power3.out' });
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.28, ease: 'power3.out' });
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.28, ease: 'power3.out' });

    let isHovering = false;
    let hasMoved = false;

    const onMouseMove = (e: MouseEvent) => {
      if (!hasMoved) {
        hasMoved = true;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      }
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const onMouseLeave = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
      hasMoved = false;
    };

    const handlePointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('button, a, input, select, textarea, [role="button"], .cursor-pointer');
      if (interactive && !isHovering) {
        isHovering = true;
        gsap.to(ring, {
          scale: 1.8,
          borderColor: '#C8102E',
          backgroundColor: 'rgba(200, 16, 46, 0.08)',
          duration: 0.25,
        });
        gsap.to(dot, {
          scale: 0.6,
          backgroundColor: '#C8102E',
          duration: 0.25,
        });
      } else if (!interactive && isHovering) {
        isHovering = false;
        gsap.to(ring, {
          scale: 1,
          borderColor: 'rgba(15, 23, 42, 0.35)',
          backgroundColor: 'transparent',
          duration: 0.25,
        });
        gsap.to(dot, {
          scale: 1,
          backgroundColor: '#0F172A',
          duration: 0.25,
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handlePointerOver);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handlePointerOver);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Center Precision Dot - Hidden until pointer moves */}
      <div
        ref={cursorDotRef}
        style={{ opacity: 0 }}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-[#0F172A] pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block opacity-0 transition-opacity duration-150"
      />
      {/* Surveyor Crosshair Outer Ring - Hidden until pointer moves */}
      <div
        ref={cursorRingRef}
        style={{ opacity: 0 }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#0F172A]/40 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block opacity-0 transition-opacity duration-150"
      />
    </>
  );
};
