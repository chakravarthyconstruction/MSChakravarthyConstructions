import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Globe2, ArrowUpRight } from 'lucide-react';
import { siteData } from '../data/site';
import { SectionEyebrow } from '../components/SectionEyebrow';
import { ParallaxTiltCard } from '../components/ParallaxTiltCard';

export const Reach: React.FC = () => {
  return (
    <section
      id="reach"
      aria-label="Where We Build - Regional Reach and National Expansion"
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
          <SectionEyebrow label="WHERE WE BUILD" className="mb-3" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0E0E0E] tracking-tight font-heading max-w-xl leading-tight">
            Strategic Footprint Across Key Growth Corridors
          </h2>
        </div>
        <p className="text-neutral-600 text-xs sm:text-sm max-w-sm font-medium leading-relaxed">
          Extensive civil execution heritage rooted in Southern India, with ongoing strategic capabilities expanding to infrastructure corridors across India.
        </p>
      </motion.div>

      {/* 4 Bento Cards Grid with 3D Parallax Tilt */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {siteData.states.map((state, index) => (
          <motion.div
            key={state.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="h-full"
          >
            <ParallaxTiltCard className="h-full rounded-[24px] sm:rounded-[28px]" maxTilt={6}>
              <div className="bg-white/90 p-5 sm:p-6 rounded-[24px] sm:rounded-[28px] border border-black/5 shadow-sm relative overflow-hidden flex flex-col justify-between h-full min-h-[190px] sm:min-h-[220px] group hover:shadow-lg transition-all duration-300">
                {/* Outline Numeral in background */}
                <span
                  className="absolute top-1 right-3 text-5xl sm:text-6xl font-black font-heading select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
                  style={{
                    WebkitTextStroke: '1.5px rgba(14, 14, 14, 0.08)',
                    color: 'transparent',
                  }}
                  aria-hidden="true"
                >
                  {state.number}
                </span>

                {/* Top Icon & Tag */}
                <div className="relative z-10">
                  <div className="w-8 h-8 rounded-full bg-[#0E0E0E]/5 text-[#0E0E0E] flex items-center justify-center mb-4 group-hover:bg-[#F2C230] transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-widest">
                    State #{state.number}
                  </span>
                </div>

                {/* Bottom State Title & Description */}
                <div className="relative z-10 mt-auto pt-4">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0E0E0E] font-heading tracking-tight mb-1">
                    {state.name}
                  </h3>
                  <p className="text-neutral-600 text-xs font-medium leading-relaxed line-clamp-2">
                    {state.subtext}
                  </p>
                </div>
              </div>
            </ParallaxTiltCard>
          </motion.div>
        ))}

        {/* 4th Card: Expanding Across India */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="h-full"
        >
          <ParallaxTiltCard className="h-full rounded-[24px] sm:rounded-[28px]" maxTilt={6}>
            <div className="bg-[#F2C230] p-5 sm:p-6 rounded-[24px] sm:rounded-[28px] border border-[#e5b527] shadow-md relative overflow-hidden flex flex-col justify-between h-full min-h-[190px] sm:min-h-[220px] group hover:shadow-xl transition-all duration-300">
              <div className="relative z-10 flex items-start justify-between">
                <div className="w-8 h-8 rounded-full bg-black text-[#FFF200] flex items-center justify-center">
                  <Globe2 className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono font-bold text-[#0E0E0E]/80 uppercase tracking-widest bg-black/10 px-2.5 py-0.5 rounded-full">
                  Nationwide
                </span>
              </div>

              <div className="relative z-10 mt-auto pt-4">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0E0E0E] font-heading tracking-tight mb-1">
                  Expanding Across India
                </h3>
                <p className="text-[#0E0E0E]/85 text-xs font-semibold leading-relaxed line-clamp-2">
                  Mobilizing multi-generational civil expertise and heavy equipment fleet nationwide.
                </p>
                <Link
                  to="/reach"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0E0E0E] hover:underline mt-3 pt-2.5 border-t border-black/15 w-full justify-between"
                >
                  <span>View Regional Operations</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </ParallaxTiltCard>
        </motion.div>
      </div>
    </section>
  );
};
