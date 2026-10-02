import React from 'react';
import { motion } from 'motion/react';
import { Phone, ShieldCheck } from 'lucide-react';
import { siteData } from '../data/site';
import { siteImages } from '../data/images';
import { PillButton } from '../components/PillButton';
import { RotatingTextBadge } from '../components/RotatingTextBadge';
import { CountUpStat } from '../components/CountUpStat';
import { MagneticElement } from '../components/MagneticElement';
import { ParallaxTiltCard } from '../components/ParallaxTiltCard';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      aria-label="Hero - Chakravarthy Constructions"
      className="relative pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-[1220px] mx-auto overflow-hidden"
    >
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
        {/* Left Bento: Yellow Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 bg-[#F2C230] rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 lg:p-9 flex flex-col justify-between relative shadow-[0_12px_32px_rgba(242,194,48,0.16)] border border-[#e5b527]"
        >
          {/* Top: Small Image Card with 3D Tilt */}
          <div className="mb-4 sm:mb-6">
            <ParallaxTiltCard maxTilt={8} className="w-full max-w-[280px] sm:max-w-[320px]">
              <div className="relative h-[130px] sm:h-[150px] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-sm group">
                <img
                  src={siteImages.heroTeam.src}
                  alt={siteImages.heroTeam.alt}
                  width={siteImages.heroTeam.width}
                  height={siteImages.heroTeam.height}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Badge Tag */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide">
                    <ShieldCheck className="w-3 h-3 text-[#FFF200]" />
                    {siteData.about.experienceBadge}
                  </span>
                </div>
              </div>
            </ParallaxTiltCard>
          </div>

          {/* Middle: Headline & Supporting Text */}
          <div className="my-auto py-1">
            <span className="inline-block text-[11px] font-mono font-bold tracking-widest text-[#0E0E0E]/80 uppercase mb-2.5">
              — CHAKRAVARTHY CONSTRUCTIONS · FIRM NO. 1520 OF 2009 —
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-[2.65rem] xl:text-[2.9rem] font-extrabold text-[#0E0E0E] leading-[1.12] tracking-tight font-heading">
              {siteData.tagline}
            </h1>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#0E0E0E]/85 font-medium max-w-xl leading-relaxed">
              {siteData.subTagline}
            </p>
          </div>

          {/* Bottom: Action Buttons with GSAP Magnetic pull */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
            <MagneticElement strength={0.2}>
              <PillButton to="/contact" variant="primary" ariaLabel="Get a quote for civil engineering projects">
                Get a Quote
              </PillButton>
            </MagneticElement>

            <MagneticElement strength={0.2}>
              <PillButton
                href={siteData.phone.tel}
                variant="outline"
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[380px] sm:min-h-[460px] lg:min-h-[500px] flex flex-col justify-end shadow-lg border border-black/10 group"
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

          {/* Stats Bar Overlaid at Bottom */}
          <div className="relative z-10 p-4 sm:p-5 m-2.5 sm:m-3.5 rounded-[22px] sm:rounded-[26px] bg-black/65 backdrop-blur-xl border border-white/15 text-white">
            <div className="grid grid-cols-3 gap-2 sm:gap-3 divide-x divide-white/15">
              {siteData.stats.map((stat, idx) => (
                <div key={stat.label} className={idx > 0 ? 'pl-2 sm:pl-3' : ''}>
                  <CountUpStat
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    decimals={stat.decimals}
                    label={stat.label}
                    valueClassName="text-xl sm:text-2xl lg:text-3xl text-white font-black"
                    labelClassName="text-[10px] sm:text-[11px] text-neutral-300 font-medium leading-tight"
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
              size={138}
              className="ring-6 ring-[#F8F5E8] shadow-xl hover:scale-105 transition-transform cursor-pointer"
            />
          </MagneticElement>
        </div>

        {/* Mobile/Tablet rotating badge */}
        <div className="lg:hidden flex justify-center -my-3 sm:-my-4 relative z-20">
          <RotatingTextBadge size={112} className="ring-4 ring-[#F8F5E8] shadow-md" />
        </div>
      </div>
    </section>
  );
};
