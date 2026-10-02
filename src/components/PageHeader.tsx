import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { SectionEyebrow } from './SectionEyebrow';

interface PageHeaderProps {
  crumb: string;
  eyebrow: string;
  title: string;
  intro: string;
  children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ crumb, eyebrow, title, intro, children }) => (
  <section className="px-4 sm:px-6 lg:px-8 max-w-[1220px] mx-auto pb-2 sm:pb-4">
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="bg-gradient-to-br from-[#C8102E] via-[#B91C1C] to-[#881337] rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10 border border-red-600/30 shadow-[0_16px_40px_rgba(200,16,46,0.22)] text-white"
    >
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-white/80 mb-4"
      >
        <Link to="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-white">{crumb}</span>
      </nav>

      <SectionEyebrow label={eyebrow} className="mb-3" />

      <h1 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-white font-heading tracking-tight leading-[1.14] max-w-3xl">
        {title}
      </h1>

      <p className="mt-4 text-xs sm:text-sm text-white/90 font-medium max-w-2xl leading-relaxed">{intro}</p>

      {children && <div className="mt-6 flex flex-wrap items-center gap-2.5">{children}</div>}
    </motion.div>
  </section>
);
