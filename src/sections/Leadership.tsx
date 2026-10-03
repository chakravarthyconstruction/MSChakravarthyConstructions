import React from 'react';
import { motion } from 'motion/react';
import { Award, Briefcase, Phone, HardHat } from 'lucide-react';
import { siteData } from '../data/site';
import { SectionEyebrow } from '../components/SectionEyebrow';
import { ParallaxTiltCard } from '../components/ParallaxTiltCard';

export const Leadership: React.FC = () => {
  const founders = siteData.leadership.slice(0, 2);
  const projectLeaders = siteData.leadership.slice(2);

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
          <SectionEyebrow label="OUR LEADERSHIP &amp; MANAGEMENT" className="mb-3" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading max-w-xl leading-tight">
            Steered By Proven Civil Engineering Discipline
          </h2>
        </div>
        <p className="text-neutral-600 text-xs sm:text-sm max-w-sm font-medium leading-relaxed">
          Led by experienced hands committed to departmental engineering integrity, safety standards, and on-time infrastructure execution.
        </p>
      </motion.div>

      <div className="space-y-6 sm:space-y-8">
        {/* Tier 1: Founders & Executive Directorate */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {founders.map((leader, index) => {
            const isDark = index === 0;
            return (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <ParallaxTiltCard className="h-full rounded-[28px] sm:rounded-[32px]" maxTilt={5}>
                  <div
                    className={`rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-between h-full relative group hover:shadow-2xl transition-all duration-300 ${
                      isDark
                        ? 'bg-[#0F172A] text-white border border-slate-800 shadow-xl'
                        : 'bg-white text-[#0F172A] border border-black/10 shadow-lg'
                    }`}
                  >
                    <div>
                      {/* Top row: Photo & Council Tag */}
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

                      {/* Middle: Name, Role & Bio */}
                      <div
                        className={`text-xs font-bold uppercase tracking-widest mb-1 font-mono ${
                          isDark ? 'text-red-400' : 'text-[#C8102E]'
                        }`}
                      >
                        {leader.role}
                      </div>
                      <h3
                        className={`text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading tracking-tight mb-2.5 ${
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

                    {/* Direct Contact Phone & Bottom Signoff */}
                    <div className="mt-5">
                      {leader.phone && (
                        <div className="pt-3 border-t border-current/10">
                          <a
                            href={`tel:${leader.phone.replace(/[\s-]/g, '')}`}
                            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-all shadow-sm ${
                              isDark
                                ? 'bg-white/10 hover:bg-[#C8102E] text-white border border-white/20'
                                : 'bg-black/5 hover:bg-[#C8102E] hover:text-white text-[#0F172A] border border-black/10'
                            }`}
                          >
                            <Phone className="w-3.5 h-3.5 text-[#C8102E]" />
                            <span>{leader.phone}</span>
                          </a>
                        </div>
                      )}
                      <div
                        className={`mt-3 pt-2 border-t flex items-center justify-between text-[11px] font-bold uppercase tracking-widest font-mono ${
                          isDark
                            ? 'border-slate-800 text-slate-400'
                            : 'border-black/10 text-slate-500'
                        }`}
                      >
                        <span>Chakravarthy</span>
                        <span>Anantapur · Hyderabad</span>
                      </div>
                    </div>
                  </div>
                </ParallaxTiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Tier 2: Project Directorate & Site Operations */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px flex-1 bg-black/10" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500 px-2 py-0.5 rounded-full bg-neutral-100 border border-black/5">
              Project Directors &amp; Site Management
            </span>
            <span className="h-px flex-1 bg-black/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {projectLeaders.map((leader, index) => {
              const isDark = index === 1;
              return (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full"
                >
                  <ParallaxTiltCard className="h-full rounded-[26px] sm:rounded-[28px]" maxTilt={5}>
                    <div
                      className={`rounded-[26px] sm:rounded-[28px] p-5 sm:p-6 flex flex-col justify-between h-full relative group hover:shadow-2xl transition-all duration-300 ${
                        isDark
                          ? 'bg-[#0F172A] text-white border border-slate-800 shadow-xl'
                          : 'bg-white text-[#0F172A] border border-black/10 shadow-lg'
                      }`}
                    >
                      <div>
                        {/* Top row: Photo & Role Badge */}
                        <div className="flex items-start justify-between gap-3 mb-4">
                          {leader.photo ? (
                            <div className="w-18 h-22 sm:w-20 sm:h-24 rounded-2xl overflow-hidden border-2 border-white/20 shadow-md bg-slate-800 shrink-0">
                              <img
                                src={leader.photo}
                                alt={leader.name}
                                width={80}
                                height={96}
                                className="w-full h-full object-cover object-top"
                                loading="lazy"
                              />
                            </div>
                          ) : (
                            <div
                              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-heading font-black text-lg sm:text-xl tracking-tight shadow-md group-hover:scale-105 transition-transform ${
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
                            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider ${
                              isDark ? 'bg-white/10 text-white' : 'bg-[#0F172A]/5 text-[#0F172A]'
                            }`}
                          >
                            <HardHat className="w-3 h-3 text-[#C8102E]" />
                            <span>{leader.role}</span>
                          </div>
                        </div>

                        {/* Name & Role */}
                        <div
                          className={`text-[11px] font-bold uppercase tracking-widest mb-1 font-mono ${
                            isDark ? 'text-red-400' : 'text-[#C8102E]'
                          }`}
                        >
                          {leader.title}
                        </div>
                        <h3
                          className={`text-lg sm:text-xl font-extrabold font-heading tracking-tight mb-2 ${
                            isDark ? 'text-white' : 'text-[#0F172A]'
                          }`}
                        >
                          {leader.name}
                        </h3>
                        <p
                          className={`text-xs font-medium leading-relaxed ${
                            isDark ? 'text-slate-300' : 'text-slate-600'
                          }`}
                        >
                          {leader.bio}
                        </p>
                      </div>

                      {/* Direct Phone Line */}
                      <div className="mt-4 pt-3 border-t border-current/10">
                        {leader.phone && (
                          <a
                            href={`tel:${leader.phone.replace(/[\s-]/g, '')}`}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-all shadow-sm ${
                              isDark
                                ? 'bg-white/10 hover:bg-[#C8102E] text-white border border-white/20'
                                : 'bg-black/5 hover:bg-[#C8102E] hover:text-white text-[#0F172A] border border-black/10'
                            }`}
                          >
                            <Phone className="w-3.5 h-3.5 text-[#C8102E]" />
                            <span>{leader.phone}</span>
                          </a>
                        )}
                        <div
                          className={`mt-3 pt-2 border-t flex items-center justify-between text-[10px] font-bold uppercase tracking-widest font-mono ${
                            isDark
                              ? 'border-slate-800 text-slate-400'
                              : 'border-black/10 text-slate-500'
                          }`}
                        >
                          <span>Site Operations</span>
                          <span>Chakravarthy</span>
                        </div>
                      </div>
                    </div>
                  </ParallaxTiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

