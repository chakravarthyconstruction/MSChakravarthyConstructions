import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';
import { siteData } from '../data/site';
import { siteImages } from '../data/images';
import { PillButton } from '../components/PillButton';

export const CTABanner: React.FC = () => {
  return (
    <section
      aria-label="Call to Action - Start Your Infrastructure Project"
      className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-[1220px] mx-auto overflow-hidden"
    >
      <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[280px] sm:min-h-[340px] flex items-center shadow-xl border border-black/10">
        {/* Full-bleed Background Image */}
        <img
          src={siteImages.ctaBanner.src}
          alt={siteImages.ctaBanner.alt}
          width={siteImages.ctaBanner.width}
          height={siteImages.ctaBanner.height}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-[#0B3A5E]/20 mix-blend-multiply pointer-events-none" />

        {/* Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 p-6 sm:p-10 lg:p-12 max-w-2xl flex flex-col items-start"
        >
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.22em] text-[#FFF200] uppercase mb-3">
            CIVIL ENGINEERING EXCELLENCE
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading tracking-tight leading-[1.15] mb-4">
            Ready to Build Resilient Infrastructure That Stands the Test of Time?
          </h2>

          <p className="text-neutral-300 text-xs sm:text-sm font-medium leading-relaxed mb-6 max-w-lg">
            Partner with Chakravarthy Constructions for highways, canals, reservoirs, check dams, and structural civil projects across Southern India and beyond.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <PillButton
              to="/contact"
              variant="secondary"
              ariaLabel="Request a project proposal or quotation"
            >
              Get a Quote
            </PillButton>

            <PillButton
              href={siteData.phone.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              variant="white"
              icon={<MessageSquare className="w-4 h-4 text-emerald-600" />}
              ariaLabel="Message our engineering desk on WhatsApp"
            >
              WhatsApp Us
            </PillButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
