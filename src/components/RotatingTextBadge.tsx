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
      className={`relative inline-flex items-center justify-center rounded-full bg-white shadow-[0_12px_36px_rgba(200,16,46,0.12)] p-1.5 select-none ${className}`}
      aria-label="Core services badge: Highways, Earth Works, Canals, Reservoirs, Check Dams"
    >
      {/* Outer subtle ring border */}
      <div className="absolute inset-0 rounded-full border border-[#C8102E]/20 pointer-events-none" />

      {/* Rotating SVG with curved circular text */}
      <div className="w-full h-full animate-spin-slow">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full fill-current text-[#C8102E]"
          aria-hidden="true"
        >
          <path
            id="textBadgeCircle"
            d="M 100, 100 m -74, 0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0"
            fill="none"
          />
          <text
            className="text-[13px] font-extrabold tracking-[0.22em] uppercase"
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
        <div className="rounded-full p-1 bg-white shadow-md ring-1 ring-[#C8102E]/15">
          <LogoBadge size={centerSize} className="shadow-sm" />
        </div>
      </div>
    </div>
  );
};
