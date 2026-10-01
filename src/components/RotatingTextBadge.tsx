import React from 'react';
import { LogoBadge } from './LogoBadge';

interface RotatingTextBadgeProps {
  text?: string;
  size?: number;
  className?: string;
}

export const RotatingTextBadge: React.FC<RotatingTextBadgeProps> = ({
  text = 'M/S CHAKRAVARTHY CONSTRUCTIONS • 3 GENERATIONS • ',
  size = 148,
  className = '',
}) => {
  const centerSize = Math.round(size * 0.44);

  return (
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`relative inline-flex items-center justify-center rounded-full bg-[#F8F5E8] shadow-[0_12px_36px_rgba(0,0,0,0.12)] p-1.5 select-none ${className}`}
      aria-label="Core services badge: Roads, Canals, Reservoirs, Check Dams"
    >
      {/* Outer subtle ring border */}
      <div className="absolute inset-0 rounded-full border border-black/10 pointer-events-none" />

      {/* Rotating SVG with curved circular text */}
      <div className="w-full h-full animate-spin-slow">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full fill-current text-[#0E0E0E]"
          aria-hidden="true"
        >
          <path
            id="textBadgeCircle"
            d="M 100, 100 m -74, 0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0"
            fill="none"
          />
          <text
            className="text-[13px] font-bold tracking-[0.24em] uppercase"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <textPath href="#textBadgeCircle" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center Logo Badge */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="rounded-full p-1 bg-[#F8F5E8] shadow-inner">
          <LogoBadge size={centerSize} className="shadow-md" />
        </div>
      </div>
    </div>
  );
};
