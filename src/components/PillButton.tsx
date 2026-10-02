import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export interface PillButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'dark-outline';
  icon?: React.ReactNode;
  iconPosition?: 'right' | 'left';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
  ariaLabel?: string;
  disabled?: boolean;
}

export const PillButton: React.FC<PillButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  icon,
  iconPosition = 'right',
  className = '',
  type = 'button',
  target,
  rel,
  ariaLabel,
  disabled = false,
}) => {
  const baseClasses =
    'group relative inline-flex items-center justify-center gap-3 font-semibold rounded-full transition-all duration-300 select-none text-sm md:text-base tracking-tight cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2';

  let variantClasses = '';
  let defaultIconContainerClasses = '';

  switch (variant) {
    case 'primary':
      variantClasses =
        'bg-[#0F172A] text-white hover:bg-slate-900 hover:shadow-xl active:scale-[0.98] py-2.5 pl-6 pr-2.5 md:py-3 md:pl-7 md:pr-3 border border-slate-700/50 shadow-md';
      defaultIconContainerClasses =
        'w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#C8102E] text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:rotate-12 shadow-sm';
      break;
    case 'secondary':
      variantClasses =
        'bg-[#C8102E] text-white hover:bg-[#B91C1C] hover:shadow-lg active:scale-[0.98] py-2.5 pl-6 pr-2.5 md:py-3 md:pl-7 md:pr-3 font-bold shadow-md';
      defaultIconContainerClasses =
        'w-8 h-8 md:w-9 md:h-9 rounded-full bg-white text-[#C8102E] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:rotate-12 shadow-sm';
      break;
    case 'outline':
      variantClasses =
        'bg-transparent text-[#0F172A] border-2 border-slate-300 hover:border-[#C8102E] hover:text-[#C8102E] py-2 pl-5 pr-2 md:py-2.5 md:pl-6 md:pr-2.5 font-semibold';
      defaultIconContainerClasses =
        'w-8 h-8 md:w-8 md:h-8 rounded-full bg-slate-100 group-hover:bg-[#C8102E] group-hover:text-white text-[#0F172A] flex items-center justify-center transition-all duration-300';
      break;
    case 'dark-outline':
      variantClasses =
        'bg-transparent text-white border-2 border-white/20 hover:border-[#C8102E] hover:text-[#C8102E] py-2.5 pl-6 pr-2.5 md:py-3 md:pl-7 md:pr-3 font-semibold';
      defaultIconContainerClasses =
        'w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/10 group-hover:bg-[#C8102E] group-hover:text-white text-white flex items-center justify-center transition-all duration-300';
      break;
    case 'white':
      variantClasses =
        'bg-white text-[#0F172A] hover:bg-slate-50 hover:shadow-lg py-2.5 pl-6 pr-2.5 md:py-3 md:pl-7 md:pr-3 border border-slate-200 font-semibold';
      defaultIconContainerClasses =
        'w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#C8102E] text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105';
      break;
  }

  const renderIcon = (
    <span className={defaultIconContainerClasses}>
      {icon ? (
        icon
      ) : (
        <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </span>
  );

  const content = (
    <>
      {iconPosition === 'left' && renderIcon}
      <span className="leading-none">{children}</span>
      {iconPosition === 'right' && renderIcon}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        aria-label={ariaLabel}
        className={`${baseClasses} ${variantClasses} ${className}`}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel ? rel : target === '_blank' ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
        className={`${baseClasses} ${variantClasses} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {content}
    </button>
  );
};
