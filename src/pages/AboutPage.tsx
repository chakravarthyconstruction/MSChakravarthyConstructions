import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, ChevronRight, Award, Users, HardHat } from 'lucide-react';
import { siteData } from '../data/site';
import { siteImages } from '../data/images';
import { SectionEyebrow } from '../components/SectionEyebrow';
import { BlueprintInspector } from '../components/BlueprintInspector';
import { SitePhotoScroll } from '../components/SitePhotoScroll';
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
          className="bg-gradient-to-br from-[#C8102E] via-[#B91C1C] to-[#881337] rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10 border border-red-600/30 shadow-[0_16px_40px_rgba(200,16,46,0.22)] text-white"
        >
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-white/80 mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">About Us</span>
          </nav>

          <SectionEyebrow label="HERITAGE & LEADERSHIP" className="mb-3" />

          <h1 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-white font-heading tracking-tight leading-[1.14] max-w-3xl">
            Three Generations of Civil Construction Heritage
          </h1>

          <p className="mt-4 text-sm sm:text-base text-white/90 font-medium max-w-2xl leading-relaxed">
            {siteData.about.statement} {siteData.about.summary}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#C8102E] text-xs font-mono font-bold tracking-wider shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Special Class Contractor</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-xs font-mono font-bold tracking-wider">
              <span>Head Office: Kukatpally, Hyderabad · Branch: Anantapur</span>
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-heading tracking-tight leading-tight">
              {siteData.about.headline}
            </h2>
            <div className="space-y-3 text-neutral-700 text-xs sm:text-sm leading-relaxed">
              <p className="font-medium text-[#0F172A]/90">
                Operating across Andhra Pradesh, Telangana, and Karnataka with corporate presence in Hyderabad and regional headquarters in Anantapur, Chakravarthy Constructions builds on a proud family practice in civil engineering and infrastructure spanning more than two decades across three generations.
              </p>
              <p>
                Under Chairman &amp; Founder Sri D. Nagaraju and Managing Director Sri D. Chakravarthy, the firm has delivered reservoir formations in Adilabad, the Sarala Sagar modernization in Mahabubnagar, World Bank-assisted tank rehabilitation in Ananthapuramu, and today executes rock and earthworks on the 500 MW Chitravathi pumped storage project, major highways, and NHAI greenfield corridors.
              </p>
              <p>
                The firm's audited net worth stands at ₹3,10,79,450/- (29-04-2025) with 10-year contract receipts of ₹26.50+ Crores, reaching ₹6.55 Crores in FY 2024-25.
              </p>
            </div>

            {/* Credibility Pillars */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-white border border-black/5 shadow-sm">
                <Users className="w-4 h-4 text-[#C8102E] mb-1.5" />
                <h4 className="text-xs font-bold text-[#0F172A] font-heading">3 Generations</h4>
                <p className="text-[11px] text-neutral-500 mt-0.5">Multi-generational continuity</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-black/5 shadow-sm">
                <HardHat className="w-4 h-4 text-[#C8102E] mb-1.5" />
                <h4 className="text-xs font-bold text-[#0F172A] font-heading">3 Key States</h4>
                <p className="text-[11px] text-neutral-500 mt-0.5">AP, Telangana &amp; Karnataka</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-black/5 shadow-sm">
                <Award className="w-4 h-4 text-[#C8102E] mb-1.5" />
                <h4 className="text-xs font-bold text-[#0F172A] font-heading">Special Class</h4>
                <p className="text-[11px] text-neutral-500 mt-0.5">Highways &amp; Earth Works</p>
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

      {/* Real Site Photos Marquee */}
      <SitePhotoScroll />

      {/* Leadership Section */}
      <Leadership />

      {/* Approach Section */}
      <Approach />

      {/* CTA Banner */}
      <CTABanner />
    </div>
  );
};
