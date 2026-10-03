import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowDown, Award, HardHat } from 'lucide-react';
import { ParallaxTiltCard } from './ParallaxTiltCard';

export const ExecutiveStartingBanner: React.FC = () => {
  const scrollToHero = () => {
    const el = document.getElementById('home');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      aria-label="Executive Leadership - Chakravarthy Constructions"
      className="relative pt-20 sm:pt-24 pb-3 sm:pb-5 px-4 sm:px-6 lg:px-8 max-w-[1220px] mx-auto overflow-hidden"
    >
      {/* Container Card */}
      <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] rounded-[28px] sm:rounded-[36px] p-5 sm:p-7 lg:p-8 border border-slate-700/50 shadow-2xl relative overflow-hidden text-white">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C8102E]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Row */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-3 pb-5 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C8102E] text-white text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase shadow-md">
              <ShieldCheck className="w-3.5 h-3.5" />
              Special Class Contractor
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold border border-white/15">
              40+ Year Engineering Trajectory
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-red-300 text-[11px] sm:text-xs font-semibold border border-white/15">
              Irrigation Department Specialists
            </span>
          </div>

          <div className="text-left md:text-right">
            <span className="text-[11px] sm:text-xs font-mono text-neutral-400 font-semibold tracking-widest uppercase">
              CHAKRAVARTHY CONSTRUCTIONS · EXECUTIVE LEADERSHIP
            </span>
          </div>
        </div>

        {/* Dual Leadership Presentation Cards */}
        <div className="relative z-10 mt-5 sm:mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Chairman Card */}
          <ParallaxTiltCard className="rounded-[24px] sm:rounded-[28px] h-full" maxTilt={4}>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/[0.05] hover:bg-white/[0.08] backdrop-blur-md rounded-[24px] sm:rounded-[28px] p-4 sm:p-5 border border-white/15 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 h-full transition-all group"
            >
              {/* Leader Portrait */}
              <div className="relative shrink-0 w-28 h-36 sm:w-32 sm:h-40 rounded-[20px] overflow-hidden border-2 border-white/20 shadow-xl bg-slate-800">
                <img
                  src="/images/leadership/nagaraju-chairman.webp"
                  alt="DHARMAVARAM NAGARAJU - Chairman"
                  width={160}
                  height={200}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-1.5 left-2 right-2 text-center text-[10px] font-mono font-bold tracking-wide uppercase px-1 py-0.5 rounded bg-black/60 backdrop-blur-sm text-red-200">
                  Founder
                </span>
              </div>

              {/* Leader Details */}
              <div className="flex-1 flex flex-col justify-between text-center sm:text-left min-w-0">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C8102E]/20 text-red-300 border border-red-500/30 text-[10px] font-mono font-bold uppercase tracking-wider mb-1.5">
                    <Award className="w-3 h-3 text-[#C8102E]" />
                    CHAIRMAN &amp; FOUNDER
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white font-heading tracking-tight">
                    DHARMAVARAM NAGARAJU
                  </h3>
                  <p className="mt-1 text-xs text-neutral-300 leading-relaxed font-medium">
                    Founding Chairman steering strategic governance, departmental relations, and a four-decade institutional trajectory across Andhra Pradesh, Telangana, and Karnataka.
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-center sm:justify-start gap-2 text-[11px] text-neutral-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Executive Council &amp; Founder</span>
                </div>
              </div>
            </motion.div>
          </ParallaxTiltCard>

          {/* Managing Director Card */}
          <ParallaxTiltCard className="rounded-[24px] sm:rounded-[28px] h-full" maxTilt={4}>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/[0.05] hover:bg-white/[0.08] backdrop-blur-md rounded-[24px] sm:rounded-[28px] p-4 sm:p-5 border border-white/15 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 h-full transition-all group"
            >
              {/* Leader Portrait */}
              <div className="relative shrink-0 w-28 h-36 sm:w-32 sm:h-40 rounded-[20px] overflow-hidden border-2 border-white/20 shadow-xl bg-slate-800">
                <img
                  src="/images/leadership/chakravarthy-md.webp"
                  alt="DHARMAVARAM CHAKRAVARTHY - Managing Director"
                  width={160}
                  height={200}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-1.5 left-2 right-2 text-center text-[10px] font-mono font-bold tracking-wide uppercase px-1 py-0.5 rounded bg-black/60 backdrop-blur-sm text-red-200">
                  Managing Director
                </span>
              </div>

              {/* Leader Details */}
              <div className="flex-1 flex flex-col justify-between text-center sm:text-left min-w-0">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white text-[#C8102E] text-[10px] font-mono font-bold uppercase tracking-wider mb-1.5 shadow-sm">
                    <HardHat className="w-3 h-3 text-[#C8102E]" />
                    MANAGING DIRECTOR
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white font-heading tracking-tight">
                    DHARMAVARAM CHAKRAVARTHY
                  </h3>
                  <p className="mt-1 text-xs text-neutral-300 leading-relaxed font-medium">
                    Managing Director directing turnkey delivery of ₹50+ Cr infrastructure works, heavy machinery fleet mobilization, multi-lane highway corridors, and specialized irrigation projects.
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-center sm:justify-start gap-2 text-[11px] text-neutral-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Head of Operations &amp; Delivery</span>
                </div>
              </div>
            </motion.div>
          </ParallaxTiltCard>
        </div>

        {/* Bottom Banner Navigation Prompt */}
        <div className="relative z-10 mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs text-neutral-300">
          <span className="text-[11px] sm:text-xs font-medium text-neutral-300">
            Carrying forward a <strong className="text-white font-bold">40+ year legacy</strong> across Heavy Earthworks, Reservoirs, Highways &amp; Irrigation Works.
          </span>
          <button
            onClick={scrollToHero}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            <span>Explore Site</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </div>
      </div>
    </header>
  );
};
