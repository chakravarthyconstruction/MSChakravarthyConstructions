import React from 'react';

interface SectionEyebrowProps {
  label: string;
  dark?: boolean;
  className?: string;
}

export const SectionEyebrow: React.FC<SectionEyebrowProps> = ({
  label,
  dark = false,
  className = '',
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 text-xs md:text-sm font-bold tracking-[0.22em] uppercase select-none ${
        dark ? 'text-[#F87171]' : 'text-[#C8102E]'
      } ${className}`}
    >
      <span className="opacity-60">—</span>
      <span>{label}</span>
      <span className="opacity-60">—</span>
    </div>
  );
};
