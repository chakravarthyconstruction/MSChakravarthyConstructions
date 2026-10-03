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
      aria-label="Leadership - Chakravarthy Constructions"
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading max-w-xl leading-tight">
            Steered By Three Generations of Discipline
          </h2>
        </div>
        <p className="text-neutral-600 text-xs sm:text-sm max-w-sm font-medium leading-relaxed">
          Led by experienced hands committed to engineering integrity, safety standards, and long-term public infrastructure development.
        </p>
      </motion.div>

      {/* Leadership Cards with 3D Parallax Tilt */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {siteData.leadership.map((leader, index) => {
          const isDark = index % 2 === 0;
          return (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <ParallaxTiltCard className="h-full rounded-[28px] sm:rounded-[32px]" maxTilt={6}>
                <div
                  className={`rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-between h-full relative group hover:shadow-2xl transition-all duration-300 ${
                    isDark
                      ? 'bg-[#0F172A] text-white border border-slate-800 shadow-xl'
                      : 'bg-white text-[#0F172A] border border-black/10 shadow-lg'
                  }`}
                >
                  {/* Top row: Monogram or Real Photo if available */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    {leader.photo ? (
                      <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden border-2 border-white/20 shadow-md bg-slate-800 shrink-0">
                        <img
                          src={leader.photo}
                          alt={leader.name}
                          width={96}
                          height={112}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center font-heading font-black text-xl sm:text-2xl tracking-tight shadow-lg group-hover:scale-105 transition-transform ${
                          isDark
                            ? 'bg-[#C8102E] text-white border border-red-500/30'
                            : 'bg-[#0F172A] text-white border border-black/10'
                        }`}
                        aria-label={`${leader.name} Monogram ${leader.initials}`}
                      >
                        <span>{leader.initials}</span>
                      </div>
                    )}

                    <div
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                        isDark ? 'bg-white/10 text-white' : 'bg-[#0F172A]/5 text-[#0F172A]'
                      }`}
                    >
                      {index === 0 ? <Briefcase className="w-3 h-3 text-[#C8102E]" /> : <Award className="w-3 h-3 text-[#C8102E]" />}
                      <span>Executive Council</span>
                    </div>
                  </div>

                  {/* Middle: Name and Role */}
                  <div>
                    <div
                      className={`text-xs font-bold uppercase tracking-widest mb-1 font-mono ${
                        isDark ? 'text-red-400' : 'text-[#C8102E]'
                      }`}
                    >
                      {leader.role}
                    </div>
                    <h3
                      className={`text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading tracking-tight mb-3 ${
                        isDark ? 'text-white' : 'text-[#0F172A]'
                      }`}
                    >
                      {leader.name}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm font-medium leading-relaxed ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {leader.bio}
                    </p>
                  </div>

                  {/* Bottom: Signature Line */}
                  <div
                    className={`mt-6 pt-4 border-t flex items-center justify-between text-[11px] font-bold uppercase tracking-widest font-mono ${
                      isDark
                        ? 'border-slate-800 text-slate-400'
                        : 'border-black/10 text-slate-500'
                    }`}
                  >
                    <span>Chakravarthy</span>
                    <span>Anantapur · Hyderabad</span>
                  </div>
                </div>
              </ParallaxTiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
