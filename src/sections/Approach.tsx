import React from 'react';
import { motion } from 'motion/react';
import { FileText, Compass, Hammer, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/site';
import { SectionEyebrow } from '../components/SectionEyebrow';

const renderStepIcon = (index: number) => {
  switch (index) {
    case 0:
      return <FileText className="w-4 h-4" />;
    case 1:
      return <Compass className="w-4 h-4" />;
    case 2:
      return <Hammer className="w-4 h-4" />;
    default:
      return <CheckCircle2 className="w-4 h-4" />;
  }
};

export const Approach: React.FC = () => {
  return (
    <section
      id="approach"
      aria-label="Our Approach - Project Lifecycle Methodology"
      className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-[1220px] mx-auto overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10"
      >
        <div>
          <SectionEyebrow label="OUR APPROACH" className="mb-3" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0E0E0E] tracking-tight font-heading max-w-xl leading-tight">
            Systematic Methodology From Survey to Commissioning
          </h2>
        </div>
        <p className="text-neutral-600 text-xs sm:text-sm max-w-sm font-medium leading-relaxed">
          Every project adheres to structured planning, strict quality control, and rigorous engineering protocols.
        </p>
      </motion.div>

      {/* Horizontal Bento Steps Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {siteData.approach.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/90 rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 border border-black/5 shadow-sm relative flex flex-col justify-between group hover:shadow-lg transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#0E0E0E] text-[#FFF200]">
                  Step {step.number}
                </span>

                <div className="w-8 h-8 rounded-full bg-neutral-100 text-[#0E0E0E] flex items-center justify-center group-hover:bg-[#F2C230] transition-colors">
                  {renderStepIcon(index)}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#0E0E0E] font-heading tracking-tight mb-2">
                {step.title}
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-black/5 flex items-center gap-2">
              <span className="text-[10px] font-mono font-semibold text-neutral-400">Phase 0{index + 1} of 04</span>
              <div className="flex-1 h-1 bg-neutral-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#F2C230] rounded-full transition-all duration-500 group-hover:bg-[#0E0E0E]"
                  style={{ width: `${(index + 1) * 25}%` }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
