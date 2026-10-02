import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Maximize2, X, ShieldCheck } from 'lucide-react';
import { SectionEyebrow } from './SectionEyebrow';

export interface SitePhotoItem {
  id: string;
  src: string;
  title: string;
  category: string;
  location: string;
  caption: string;
}

export const SITE_PHOTOS: SitePhotoItem[] = [
  {
    id: 'photo-1',
    src: '/images/site-reservoir-bund.jpg',
    title: 'Water Storage Reservoir & Earthen Bund Compaction',
    category: 'Reservoirs & Earth Works',
    location: 'Deccan Regional Basin, AP',
    caption: 'Longitudinal view of engineered earthen bund embankment, heavy stone rip-rap pitching, and regional water retention reservoir.',
  },
  {
    id: 'photo-2',
    src: '/images/site-team-milestone.jpg',
    title: 'Executive Leadership & Site Engineering Team',
    category: 'Special Class Leadership',
    location: 'National Monument Infrastructure Site',
    caption: 'Managing Director Mr. D. Chakravarthy, Chairman Mr. D. Nagaraju, and senior site engineers at project inauguration milestone.',
  },
  {
    id: 'photo-3',
    src: '/images/site-canal-sluice.jpg',
    title: 'Irrigation Canal Aqueduct & Sluice Gate Flow Infrastructure',
    category: 'Canals & Hydraulic Works',
    location: 'Inter-State Irrigation Corridor',
    caption: 'Field inspection of concrete canal aqueduct, structural masonry piers, and mechanical sluice gate regulatory system.',
  },
  {
    id: 'photo-4',
    src: '/images/site-bridge-girder.jpg',
    title: 'Heavy Highways, Earth Works & Structural Bridge Girder Installation',
    category: 'Highways & Earth Works',
    location: 'Major Highway Overpass Corridor',
    caption: 'Heavy machinery mobilization, precast girder launching, and earthwork grading executed under statutory safety standards.',
  },
];

export const SitePhotoScroll: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<SitePhotoItem | null>(null);

  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...SITE_PHOTOS, ...SITE_PHOTOS];

  return (
    <section
      aria-label="Real On-Site Construction Photography"
      className={`py-12 sm:py-16 overflow-hidden ${className}`}
    >
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <SectionEyebrow label="FIELD OPERATIONS & REAL SITE EXECUTION" className="mb-2.5" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
              On-Site Execution Across Real Corridors
            </h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md font-medium leading-relaxed">
            Actual photographic documentation of our special class civil contracting, heavy earth works, highways, canal aqueducts, and reservoir embankments.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Scroll Track with Pause on Hover */}
      <div className="relative w-full overflow-hidden group">
        {/* Left & Right Edge Vignette Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

        {/* Continuous Animated Marquee Strip */}
        <div className="flex gap-5 sm:gap-6 w-max animate-marquee hover:[animation-play-state:paused] py-2 px-4">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onClick={() => setSelectedPhoto(item)}
              role="button"
              tabIndex={0}
              aria-label={`View photo: ${item.title}`}
              className="relative w-[300px] sm:w-[380px] lg:w-[420px] h-[250px] sm:h-[300px] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-lg border border-black/10 bg-slate-900 group/card cursor-pointer shrink-0 transition-transform duration-500 hover:scale-[1.02]"
            >
              {/* Photo Image */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-108"
                loading="lazy"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

              {/* Top Tag & Zoom Icon */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C8102E] text-white text-[11px] font-mono font-bold tracking-wider shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{item.category}</span>
                </span>

                <span className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/20 group-hover/card:bg-[#C8102E] transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Bottom Caption Info */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#FCA5A5] mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold font-heading line-clamp-1 text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 mt-1 font-medium leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Full-Size Photo Inspection */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-slate-900 rounded-[28px] overflow-hidden border border-white/20 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close photo view"
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-[#C8102E] transition-colors border border-white/20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="w-full h-full max-h-[70vh] object-contain"
                />
              </div>

              <div className="p-6 bg-slate-900 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-[#C8102E] text-white text-xs font-mono font-bold">
                    {selectedPhoto.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                    {selectedPhoto.location}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading mb-2">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedPhoto.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
