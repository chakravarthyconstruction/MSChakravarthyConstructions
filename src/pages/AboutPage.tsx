import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, ChevronRight, Award, Users, HardHat } from 'lucide-react';
import { siteData } from '../data/site';
import { siteImages } from '../data/images';
import { SectionEyebrow } from '../components/SectionEyebrow';
import { BlueprintInspector } from '../components/BlueprintInspector';
import { Leadership } from '../sections/Leadership';
import { Approach } from '../sections/Approach';
import { CTABanner } from '../sections/CTABanner';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-20 sm:pt-24 overflow-hidden">
      {/* Page Header / Bento Banner */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1220px] mx-auto pb-6 sm:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#F2C230] rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10 border border-[#e5b527] shadow-[0_10px_28px_rgba(242,194,48,0.16)]"
        >
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-[#0E0E0E]/70 mb-4">
            <Link to="/" className="hover:text-[#0E0E0E] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0E0E0E]">About Us</span>
          </nav>

          <SectionEyebrow label="HERITAGE & LEADERSHIP" className="mb-3" />

          <h1 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#0E0E0E] font-heading tracking-tight leading-[1.14] max-w-3xl">
            Three Generations of Civil Construction Heritage
          </h1>

          <p className="mt-4 text-sm sm:text-base text-[#0E0E0E]/85 font-medium max-w-2xl leading-relaxed">
            {siteData.about.statement} {siteData.about.summary}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0E0E0E] text-[#FFF200] text-xs font-mono font-bold tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Three Generations of Discipline</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/10 text-[#0E0E0E] text-xs font-mono font-bold tracking-wider">
              <span>Headquartered in Anantapur, AP</span>
            </span>
          </div>
        </motion.div>
      </section>

      {/* Main Narrative & Imagery Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-[1220px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-4"
          >
            <SectionEyebrow label="OUR IDENTITY" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E0E0E] font-heading tracking-tight leading-tight">
              {siteData.about.headline}
            </h2>
            <div className="space-y-3 text-neutral-700 text-xs sm:text-sm leading-relaxed">
              <p className="font-medium text-[#0E0E0E]/90">
                Operating with deep roots in Anantapur, Andhra Pradesh, M/S Chakravarthy Constructions has grown through three successive generations of civil engineering leaders.
              </p>
              <p>
                Under the strategic direction of Managing Director Mr. D. Chakravarthy and Chairman Mr. D. Nagaraju, our project execution spans major highway corridors, irrigation canal networks, earthen water reservoirs, and stone check dams across Andhra Pradesh, Karnataka, and Telangana.
              </p>
              <p>
                Our philosophy balances time-tested structural safety protocols with modern heavy machinery mobilization, ensuring that public works and civil investments serve regional communities for decades to come.
              </p>
            </div>

            {/* Credibility Pillars */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-white border border-black/5 shadow-sm">
                <Users className="w-4 h-4 text-[#F2C230] mb-1.5" />
                <h4 className="text-xs font-bold text-[#0E0E0E] font-heading">3 Generations</h4>
                <p className="text-[11px] text-neutral-500 mt-0.5">Multi-generational continuity</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-black/5 shadow-sm">
                <HardHat className="w-4 h-4 text-[#F2C230] mb-1.5" />
                <h4 className="text-xs font-bold text-[#0E0E0E] font-heading">3 Key States</h4>
                <p className="text-[11px] text-neutral-500 mt-0.5">AP, Karnataka &amp; Telangana</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-black/5 shadow-sm">
                <Award className="w-4 h-4 text-[#F2C230] mb-1.5" />
                <h4 className="text-xs font-bold text-[#0E0E0E] font-heading">5 Core Disciplines</h4>
                <p className="text-[11px] text-neutral-500 mt-0.5">Roads &amp; water structures</p>
              </div>
            </div>
          </motion.div>

          {/* Right Bento Imagery with Blueprint Inspector */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 grid grid-cols-1 gap-4"
          >
            <BlueprintInspector
              imageSrc={siteImages.aboutSite.src}
              alt={siteImages.aboutSite.alt}
              title="Major Earthwork Corridors — Deccan Terrain"
              category="CAD Laser Scan"
              className="w-full"
            />

            <div className="rounded-[24px] overflow-hidden shadow-md border border-black/10 aspect-[16/8] relative group">
              <img
                src={siteImages.heroTeam.src}
                alt={siteImages.heroTeam.alt}
                width={siteImages.heroTeam.width}
                height={siteImages.heroTeam.height}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold">
                <span className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md">
                  On-Site Blueprint Review &amp; Quality Control
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <Leadership />

      {/* Approach Section */}
      <Approach />

      {/* CTA Banner */}
      <CTABanner />
    </div>
  );
};
