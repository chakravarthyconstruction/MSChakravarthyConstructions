import React from 'react';
import { motion } from 'motion/react';
import { Award, Briefcase } from 'lucide-react';
import { siteData } from '../data/site';
import { SectionEyebrow } from '../components/SectionEyebrow';
import { ParallaxTiltCard } from '../components/ParallaxTiltCard';

export const Leadership: React.FC = () => {
  return (
    <section
      id="leadership"
      aria-label="Leadership - M/S Chakravarthy Constructions"
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
          <SectionEyebrow label="OUR LEADERSHIP" className="mb-3" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0E0E0E] tracking-tight font-heading max-w-xl leading-tight">
            Steered By Three Generations of Discipline
          </h2>
        </div>
        <p className="text-neutral-600 text-xs sm:text-sm max-w-sm font-medium leading-relaxed">
          Led by experienced hands committed to engineering integrity, safety standards, and long-term public infrastructure development.
        </p>
      </motion.div>

      {/* Two Yellow Leadership Cards with 3D Parallax Tilt */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {siteData.leadership.map((leader, index) => (
          <motion.div
            key={leader.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="h-full"
          >
            <ParallaxTiltCard className="h-full rounded-[28px] sm:rounded-[32px]" maxTilt={6}>
              <div className="bg-[#F2C230] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 border border-[#e5b527] shadow-[0_8px_28px_rgba(242,194,48,0.16)] flex flex-col justify-between h-full relative group hover:shadow-xl transition-all duration-300">
                {/* Top row: Monogram or Real Photo if available */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  {leader.photo ? (
                    <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full overflow-hidden border-3 border-black/20 shadow-md">
                      <img
                        src={leader.photo}
                        alt={leader.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0E0E0E] text-[#FFF200] flex items-center justify-center font-heading font-black text-xl sm:text-2xl tracking-tight shadow-lg border border-black/10 group-hover:scale-105 transition-transform"
                      aria-label={`${leader.name} Monogram ${leader.initials}`}
                    >
                      <span>{leader.initials}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/10 text-[#0E0E0E] text-[11px] font-bold uppercase tracking-wider">
                    {index === 0 ? <Briefcase className="w-3 h-3" /> : <Award className="w-3 h-3" />}
                    <span>Executive Council</span>
                  </div>
                </div>

                {/* Middle: Name and Role */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#0E0E0E]/75 mb-1 font-mono">
                    {leader.role}
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0E0E0E] font-heading tracking-tight mb-3">
                    {leader.name}
                  </h3>
                  <p className="text-[#0E0E0E]/85 text-xs sm:text-sm font-medium leading-relaxed">
                    {leader.bio}
                  </p>
                </div>

                {/* Bottom: Signature Line */}
                <div className="mt-6 pt-4 border-t border-black/15 flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-[#0E0E0E]/70 font-mono">
                  <span>M/S Chakravarthy</span>
                  <span>Anantapur, AP</span>
                </div>
              </div>
            </ParallaxTiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
