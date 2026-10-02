import React from 'react';
import logoImg from '../assets/logo.png';

interface LogoBadgeProps {
  size?: number | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  className?: string;
  imgClassName?: string;
}

const sizeMap = {
  sm: 36,
  md: 44,
  lg: 56,
  xl: 72,
  hero: 84,
};

export const LogoBadge: React.FC<LogoBadgeProps> = ({
  size = 'md',
  className = '',
  imgClassName = '',
}) => {
  const pixelSize = typeof size === 'number' ? size : sizeMap[size] || 44;

  return (
    <div
      style={{ width: `${pixelSize}px`, height: `${pixelSize}px` }}
      className={`relative inline-flex items-center justify-center rounded-full overflow-hidden bg-white shrink-0 shadow-md ring-1 ring-[#C8102E]/20 select-none ${className}`}
      aria-hidden="true"
    >
      <img
        src={logoImg}
        alt="Chakravarthy Constructions Emblem"
        width={pixelSize}
        height={pixelSize}
        className={`w-full h-full object-cover rounded-full transform scale-[1.08] ${imgClassName}`}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};
