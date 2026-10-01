import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, MapPin, Globe2, Truck, Compass, CheckCircle2 } from 'lucide-react';
import { SectionEyebrow } from '../components/SectionEyebrow';
import { Reach } from '../sections/Reach';
import { CTABanner } from '../sections/CTABanner';

export const ReachPage: React.FC = () => {
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
            <span className="text-[#0E0E0E]">Where We Build</span>
          </nav>

          <SectionEyebrow label="GEOGRAPHIC FOOTPRINT" className="mb-3" />

          <h1 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#0E0E0E] font-heading tracking-tight leading-[1.14] max-w-3xl">
            Where We Build Across Southern India &amp; Nationwide
          </h1>

          <p className="mt-4 text-xs sm:text-sm text-[#0E0E0E]/85 font-medium max-w-2xl leading-relaxed">
            From our strategic headquarters in Anantapur, Andhra Pradesh, M/S Chakravarthy Constructions executes major civil engineering initiatives across Andhra Pradesh, Karnataka, and Telangana, expanding forward across India.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0E0E0E] text-[#FFF200] text-xs font-mono font-bold tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>3 Tri-State Operation Zones</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/10 text-[#0E0E0E] text-xs font-mono font-bold tracking-wider">
              <Globe2 className="w-3.5 h-3.5" />
              <span>Pan-India Expansion Ready</span>
            </span>
          </div>
        </motion.div>
      </section>

      {/* Primary Reach Bento Cards */}
      <Reach />

      {/* Regional Engineering Context Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-[1220px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-[26px] sm:rounded-[32px] p-6 sm:p-10 border border-black/5 shadow-sm"
        >
          <SectionEyebrow label="REGIONAL CAPABILITY" className="mb-3" />
          <h2 className="text-xl sm:text-3xl font-extrabold text-[#0E0E0E] font-heading tracking-tight mb-5">
            Mobilization &amp; Terrain Expertise Across the Deccan Plateau
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-[#0E0E0E]">
                <Truck className="w-5 h-5 text-[#F2C230]" />
              </div>
              <h3 className="text-base font-bold text-[#0E0E0E] font-heading">Heavy Equipment Mobilization</h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                Dedicated fleet deployment including asphalt pavers, vibratory road rollers, heavy excavators, and stone pitching machinery ready for regional site dispatch.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-[#0E0E0E]">
                <Compass className="w-5 h-5 text-[#F2C230]" />
              </div>
              <h3 className="text-base font-bold text-[#0E0E0E] font-heading">Semi-Arid Deccan Soil Mastery</h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                Generational knowledge handling rocky strata, red-brown soils, and local watershed hydrology to ensure embankments and roadways do not settle or erode.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-[#0E0E0E]">
                <CheckCircle2 className="w-5 h-5 text-[#F2C230]" />
              </div>
              <h3 className="text-base font-bold text-[#0E0E0E] font-heading">Inter-State Statutory Coordination</h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                Seamless alignment with regional irrigation authorities, public works departments, and regulatory standards across state borders.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </div>
  );
};
