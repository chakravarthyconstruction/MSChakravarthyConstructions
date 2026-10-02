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
  suffixClassName?: string;
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
  suffixClassName = '',
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
    <div ref={containerRef} className={`flex flex-col min-w-0 ${className}`}>
      <div
        className={`flex items-baseline flex-nowrap font-extrabold tracking-tight font-heading whitespace-nowrap ${valueClassName || 'text-2xl sm:text-3xl lg:text-4xl'}`}
      >
        {prefix && <span>{prefix}</span>}
        <span>{decimals > 0 ? count.toFixed(decimals) : count}</span>
        {suffix && (
          <span className={`ml-0.5 font-bold ${suffixClassName || 'text-[#C8102E]'}`}>{suffix}</span>
        )}
        {!suffix && (
          <span className={`ml-0.5 font-bold ${suffixClassName || 'text-[#C8102E]'}`}>+</span>
        )}
      </div>
      <div className={`text-[10px] sm:text-xs font-medium opacity-85 mt-0.5 leading-snug line-clamp-1 ${labelClassName}`}>
        {label}
      </div>
    </div>
  );
};
