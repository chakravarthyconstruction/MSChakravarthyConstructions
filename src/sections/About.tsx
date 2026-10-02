import React from 'react';
import { motion } from 'motion/react';
import { Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteData } from '../data/site';
import { siteImages } from '../data/images';
import { SectionEyebrow } from '../components/SectionEyebrow';
import { PillButton } from '../components/PillButton';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About Chakravarthy Constructions"
      className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[1220px] mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Editorial Statement and Context */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          <SectionEyebrow label="ABOUT US" className="mb-4" />

          {/* Statement Paragraph */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] leading-[1.18] tracking-tight font-heading">
            {siteData.about.headline}
          </h2>

          {/* Supporting paragraphs */}
          <div className="mt-4 sm:mt-5 space-y-3 text-neutral-700 text-sm sm:text-base leading-relaxed">
            <p className="font-medium text-[#0F172A]/90">
              {siteData.about.statement}
            </p>
            <p className="text-neutral-600">
              {siteData.about.summary}
            </p>
          </div>

          {/* Key capability bullets */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0F172A] bg-white/70 p-2.5 rounded-xl border border-black/5">
              <CheckCircle2 className="w-4 h-4 text-[#C8102E] shrink-0" />
              <span>Three Generations of Legacy</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0F172A] bg-white/70 p-2.5 rounded-xl border border-black/5">
              <Compass className="w-4 h-4 text-[#C8102E] shrink-0" />
              <span>Andhra, Karnataka &amp; Telangana</span>
            </div>
          </div>

          {/* Action button */}
          <div className="mt-6 sm:mt-8">
            <PillButton to="/about" variant="primary" ariaLabel="Learn more about our infrastructure history">
              Learn More About Us
            </PillButton>
          </div>
        </motion.div>

        {/* Right Column: Rounded Infrastructure Site Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-lg border border-black/10 group aspect-[4/3]">
            <img
              src={siteImages.aboutSite.src}
              alt={siteImages.aboutSite.alt}
              width={siteImages.aboutSite.width}
              height={siteImages.aboutSite.height}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Corner floating tag */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
              <div className="px-3 py-1.5 rounded-full bg-[#0F172A]/85 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold flex items-center gap-2 border border-white/15">
                <span className="w-2 h-2 rounded-full bg-[#C8102E] animate-pulse" />
                <span>Heavy Civil Infrastructure</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#C8102E] text-white flex items-center justify-center shadow-md">
                <ArrowRight className="w-3.5 h-3.5 -rotate-45" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
