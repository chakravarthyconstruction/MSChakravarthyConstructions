import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Sparkles, Camera } from 'lucide-react';
import { siteData } from '../data/site';
import { SectionEyebrow } from '../components/SectionEyebrow';
import { ServiceScene3D } from '../components/ServiceScene3D';

export const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'3d' | 'photo'>('3d');
  const activeService = siteData.services[activeIndex] || siteData.services[0];

  return (
    <section
      id="services"
      aria-label="What We Do - Civil Infrastructure Services"
      className="px-4 sm:px-6 lg:px-8 max-w-[1220px] mx-auto py-8 sm:py-12 overflow-hidden"
    >
      {/* Rounded Black Container */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[#0E0E0E] text-white rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-xl border border-white/10"
      >
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#0B3A5E]/20 rounded-full blur-[100px] pointer-events-none" />

        {/* Header */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 sm:pb-8 border-b border-white/15">
          <div>
            <SectionEyebrow label="WHAT WE DO" dark className="mb-3" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-heading max-w-xl leading-tight">
              Comprehensive Civil Works &amp; Infrastructure
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2">
            <p className="text-neutral-400 text-xs sm:text-sm max-w-sm font-medium leading-relaxed md:text-right">
              Delivering robust public works across five core infrastructure domains with generational engineering discipline.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F2C230] hover:text-[#FFF200] transition-colors"
            >
              <span>Explore All 5 Services in Detail</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Desktop View: Interactive Service Rows with 3D/Photo Preview */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center pt-6">
          {/* Left Column: 5 Interactive Service Rows */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-white/10">
            {siteData.services.map((service, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  tabIndex={0}
                  role="button"
                  aria-label={`${service.name}: ${service.description}`}
                  className={`group relative py-4 sm:py-5 px-3.5 rounded-2xl transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 ${
                    isActive ? 'bg-white/8 shadow-md' : 'hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`text-xs sm:text-sm font-mono font-bold transition-colors ${
                        isActive ? 'text-[#FFF200]' : 'text-neutral-500 group-hover:text-neutral-300'
                      }`}
                    >
                      {service.number}
                    </span>

                    <div>
                      <h3
                        className={`text-xl xl:text-2xl font-bold font-heading transition-colors ${
                          isActive ? 'text-[#F2C230]' : 'text-white group-hover:text-neutral-200'
                        }`}
                      >
                        {service.shortName}
                      </h3>
                      <p className="text-neutral-400 text-xs sm:text-sm mt-1 max-w-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isActive
                        ? 'bg-[#F2C230] text-[#0E0E0E] scale-105 shadow-md shadow-[#F2C230]/20'
                        : 'bg-white/10 text-white group-hover:bg-white/20'
                    }`}
                  >
                    <ArrowUpRight
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isActive ? 'translate-x-0.5 -translate-y-0.5 rotate-45' : 'group-hover:translate-x-0.5'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic 3D Simulation / Photo Preview */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            {/* View Mode Switcher Header */}
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">
                Service 0{activeIndex + 1} Interactive Visualizer
              </span>

              <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md p-1 rounded-full border border-white/10">
                <button
                  type="button"
                  onClick={() => setViewMode('3d')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold transition-all ${
                    viewMode === '3d'
                      ? 'bg-[#F2C230] text-[#0E0E0E]'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3 h-3" />
                  <span>3D CAD Simulation</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('photo')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold transition-all ${
                    viewMode === 'photo'
                      ? 'bg-[#F2C230] text-[#0E0E0E]'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Camera className="w-3 h-3" />
                  <span>Site Photo</span>
                </button>
              </div>
            </div>

            {/* Display Box */}
            <div className="h-[400px] relative rounded-[26px] overflow-hidden border border-white/15 bg-neutral-900 shadow-xl">
              <AnimatePresence mode="wait">
                {viewMode === '3d' ? (
                  <motion.div
                    key={`3d-${activeService.id}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <ServiceScene3D
                      serviceId={activeService.scene}
                      className="w-full h-full rounded-[26px] border-0"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key={`photo-${activeService.id}`}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={activeService.image.src}
                      alt={activeService.image.alt}
                      width={activeService.image.width}
                      height={activeService.image.height}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                    {/* Floating Tag on Image */}
                    <div className="absolute bottom-5 left-5 right-5">
                      <span className="text-[11px] uppercase tracking-widest font-bold text-[#FFF200]">
                        {activeService.tagline}
                      </span>
                      <div className="text-xl font-bold font-heading text-white mt-0.5">
                        {activeService.name}
                      </div>
                      <p className="text-xs text-neutral-300 mt-1 line-clamp-2">
                        {activeService.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet View: Stacked Bento Cards with 3D or Photo Switch */}
        <div className="lg:hidden flex flex-col gap-6 pt-6">
          {siteData.services.map((service) => (
            <div
              key={service.id}
              className="bg-neutral-900/90 rounded-[22px] overflow-hidden border border-white/10 flex flex-col"
            >
              {/* 3D Scene embedded directly for mobile */}
              <div className="h-[280px] w-full">
                <ServiceScene3D
                  serviceId={service.scene}
                  className="w-full h-full rounded-t-[22px] rounded-b-none border-0"
                  showControls={false}
                />
              </div>

              <div className="p-4 flex flex-col justify-between gap-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] uppercase tracking-wider text-[#F2C230] font-semibold">
                      {service.tagline}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-[#FFF200]">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-white">{service.shortName}</h3>
                  <p className="text-xs text-neutral-300 leading-relaxed mt-1">
                    {service.description}
                  </p>
                </div>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#F2C230] hover:text-[#FFF200] pt-2 border-t border-white/10"
                >
                  <span>Detailed Specifications &amp; CAD Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
