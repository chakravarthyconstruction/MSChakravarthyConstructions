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
      className="bg-[#F2C230] rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10 border border-[#e5b527] shadow-[0_10px_28px_rgba(242,194,48,0.16)]"
    >
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-[#0E0E0E]/70 mb-4"
      >
        <Link to="/" className="hover:text-[#0E0E0E] transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-[#0E0E0E]">{crumb}</span>
      </nav>

      <SectionEyebrow label={eyebrow} className="mb-3" />

      <h1 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#0E0E0E] font-heading tracking-tight leading-[1.14] max-w-3xl">
        {title}
      </h1>

      <p className="mt-4 text-xs sm:text-sm text-[#0E0E0E]/85 font-medium max-w-2xl leading-relaxed">{intro}</p>

      {children && <div className="mt-6 flex flex-wrap items-center gap-2.5">{children}</div>}
    </motion.div>
  </section>
);
