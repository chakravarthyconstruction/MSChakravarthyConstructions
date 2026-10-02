import React from 'react';
import { motion } from 'motion/react';
import { Phone, ShieldCheck } from 'lucide-react';
import { siteData } from '../data/site';
import { siteImages } from '../data/images';
import { PillButton } from '../components/PillButton';
import { RotatingTextBadge } from '../components/RotatingTextBadge';
import { CountUpStat } from '../components/CountUpStat';
import { MagneticElement } from '../components/MagneticElement';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      aria-label="Hero - Chakravarthy Constructions"
      className="relative pt-20 sm:pt-24 pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8 max-w-[1220px] mx-auto overflow-hidden"
    >
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch">
        {/* Left Bento: Crimson Red Architectural Panel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 bg-gradient-to-br from-[#C8102E] via-[#B91C1C] to-[#881337] rounded-[26px] sm:rounded-[32px] p-5 sm:p-7 lg:p-8 flex flex-col justify-between relative shadow-[0_16px_40px_rgba(200,16,46,0.20)] border border-red-600/30 text-white"
        >
          {/* Top Status & Credential Pills */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/25 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold border border-white/20">
              <ShieldCheck className="w-3.5 h-3.5 text-red-300" />
              Special Class Contractor · Est. 2009
            </span>

            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white text-[#C8102E] text-[10px] sm:text-[11px] font-mono font-extrabold uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] animate-pulse" />
              Verified AP &amp; KA
            </span>
          </div>

          {/* Middle: Eyebrow, Headline & Body */}
          <div className="my-auto py-1">
            <span className="inline-block text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-white/80 uppercase mb-2">
              — CHAKRAVARTHY CONSTRUCTIONS —
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-[2.25rem] xl:text-[2.5rem] font-extrabold text-white leading-[1.12] tracking-tight font-heading">
              Building Heavy Infrastructure That Lasts Generations.
            </h1>

            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-white/90 font-medium max-w-xl leading-relaxed">
              Special Class civil infrastructure contractor delivering major <strong className="text-white font-bold underline decoration-white/40 underline-offset-2">Highways &amp; Road Projects</strong>, large-scale <strong className="text-white font-bold underline decoration-white/40 underline-offset-2">Earth Works</strong>, irrigation canals, and water reservoirs across Karnataka, Andhra Pradesh, and Telangana.
            </p>

            {/* Quick Domain Tags */}
            <div className="flex flex-wrap gap-1.5 mt-3 text-[11px] sm:text-xs font-medium">
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                Highways &amp; Road Projects
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                Earth Works &amp; Grading
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                Irrigation &amp; Canals
              </span>
            </div>
          </div>

          {/* Bottom: Action Buttons with GSAP Magnetic pull */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2.5">
            <MagneticElement strength={0.2}>
              <PillButton to="/contact" variant="primary" ariaLabel="Get a quote for civil engineering projects">
                Get a Quote
              </PillButton>
            </MagneticElement>

            <MagneticElement strength={0.2}>
              <PillButton
                href={siteData.phone.tel}
                variant="dark-outline"
                icon={<Phone className="w-4 h-4" />}
                ariaLabel={`Call ${siteData.phone.display}`}
              >
                Call Now
              </PillButton>
            </MagneticElement>
          </div>
        </motion.div>

        {/* Right Bento: Photo with Overlaid Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative rounded-[26px] sm:rounded-[32px] overflow-hidden min-h-[300px] sm:min-h-[360px] lg:min-h-[420px] flex flex-col justify-end shadow-lg border border-black/10 group"
        >
          {/* Main Hero Background Image */}
          <img
            src={siteImages.heroMain.src}
            alt={siteImages.heroMain.alt}
            width={siteImages.heroMain.width}
            height={siteImages.heroMain.height}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            loading="eager"
            fetchPriority="high"
          />

          {/* Gradient overlay for stats readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

          {/* Stats Bar Overlaid at Bottom */}
          <div className="relative z-10 p-3 sm:p-4 m-2.5 sm:m-3 rounded-[18px] sm:rounded-[22px] bg-black/75 backdrop-blur-xl border border-white/15 text-white">
            <div className="grid grid-cols-3 gap-2 divide-x divide-white/15">
              {siteData.stats.map((stat, idx) => (
                <div key={stat.label} className={idx > 0 ? 'pl-2 sm:pl-3 min-w-0' : 'min-w-0'}>
                  <CountUpStat
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    decimals={stat.decimals}
                    label={stat.label}
                    valueClassName="text-base sm:text-lg lg:text-xl text-white font-black"
                    suffixClassName="text-white/80 font-bold text-xs sm:text-sm"
                    labelClassName="text-[10px] text-neutral-300 font-medium leading-tight"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Notch Rotating Badge with Magnetic physics */}
        <div className="hidden lg:block absolute left-[58.333%] top-[48%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto">
          <MagneticElement strength={0.4}>
            <RotatingTextBadge
              size={118}
              className="ring-4 ring-[#F8FAFC] shadow-xl hover:scale-105 transition-transform cursor-pointer"
            />
          </MagneticElement>
        </div>

        {/* Mobile/Tablet rotating badge */}
        <div className="lg:hidden flex justify-center -my-3 sm:-my-4 relative z-20">
          <RotatingTextBadge size={102} className="ring-4 ring-[#F8FAFC] shadow-md" />
        </div>
      </div>
    </section>
  );
};
