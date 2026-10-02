import React, { useEffect, useState, useRef } from 'react';

interface CountUpStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
  duration?: number;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
}

export const CountUpStat: React.FC<CountUpStatProps> = ({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  label,
  duration = 1400,
  className = '',
  valueClassName = '',
  labelClassName = '',
}) => {
  const [count, setCount] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return value;
    }
    return 0;
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const factor = Math.pow(10, decimals);
            const currentVal = Math.floor(easeOutProgress * value * factor) / factor;
            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(value);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value, duration, decimals, hasAnimated]);

  return (
    <div ref={containerRef} className={`flex flex-col ${className}`}>
      <div
        className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading ${valueClassName}`}
      >
        {prefix && <span>{prefix}</span>}
        <span>{count.toFixed(decimals)}</span>
        {suffix && <span className="text-[#FFF200]">{suffix}</span>}
      </div>
      <div className={`text-xs sm:text-sm font-medium opacity-80 mt-1 leading-snug ${labelClassName}`}>
        {label}
      </div>
    </div>
  );
};
