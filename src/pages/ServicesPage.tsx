import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Camera,
  Layers,
  Activity,
  Cpu,
  Compass,
} from 'lucide-react';
import { siteData } from '../data/site';
import { SectionEyebrow } from '../components/SectionEyebrow';
import { PillButton } from '../components/PillButton';
import { CTABanner } from '../sections/CTABanner';

const ServiceScene3D = React.lazy(() =>
  import('../components/ServiceScene3D').then((m) => ({ default: m.ServiceScene3D }))
);

const SPEC_ICONS = [Layers, Activity, Cpu, Compass];

interface ServiceItemCardProps {
  service: (typeof siteData.services)[number];
  index: number;
}

const ServiceItemCard: React.FC<ServiceItemCardProps> = ({ service, index }) => {
  const [viewMode, setViewMode] = useState<'3d' | 'photo'>('3d');
  const isEven = index % 2 === 0;
  const specs = service.specs.map((spec, i) => ({ ...spec, icon: SPEC_ICONS[i % SPEC_ICONS.length] }));

  return (
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center bg-white p-5 sm:p-7 lg:p-9 rounded-[28px] sm:rounded-[36px] border border-black/5 shadow-sm"
    >
      {/* 3D / Photo Visualizer Column */}
      <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'} flex flex-col gap-3`}>
        {/* Visualizer Top Switcher Header */}
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-neutral-400">
              Visualizer 0{index + 1}
            </span>
          </div>

          <div className="flex items-center gap-1 bg-black/5 p-1 rounded-full border border-black/10">
            <button
              type="button"
              onClick={() => setViewMode('3d')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold transition-all ${
                viewMode === '3d'
                  ? 'bg-[#C8102E] text-white shadow-sm'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>3D Simulation</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('photo')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold transition-all ${
                viewMode === 'photo'
                  ? 'bg-[#C8102E] text-white shadow-sm'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              <Camera className="w-3 h-3" />
              <span>Site Photo</span>
            </button>
          </div>
        </div>

        {/* Display Container */}
        <div className="h-[340px] sm:h-[400px] relative rounded-[24px] overflow-hidden border border-black/10 bg-neutral-900 shadow-md">
          <AnimatePresence mode="wait">
            {viewMode === '3d' ? (
              <motion.div
                key={`3d-${service.id}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28 }}
                className="w-full h-full"
              >
                <React.Suspense
                  fallback={
                    <div className="w-full h-full flex items-center justify-center text-xs text-neutral-400 font-mono">
                      Loading 3D View...
                    </div>
                  }
                >
                  <ServiceScene3D
                    serviceId={service.scene}
                    className="w-full h-full rounded-[24px] border-0"
                  />
                </React.Suspense>
              </motion.div>
            ) : (
              <motion.div
                key={`photo-${service.id}`}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={service.image.src}
                  alt={service.image.alt}
                  width={service.image.width}
                  height={service.image.height}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-red-400 font-mono text-[11px] font-bold border border-white/15">
                  Service 0{index + 1}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-red-400 font-semibold">
                    {service.tagline}
                  </span>
                  <div className="text-lg sm:text-xl font-bold font-heading">{service.name}</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Content & Engineering Specifications Column */}
      <div className={`lg:col-span-6 flex flex-col items-start ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-neutral-400 mb-1.5">
          0{index + 1} / 05 — {service.tagline}
        </span>

        <h2 className="text-xl sm:text-3xl font-extrabold text-[#0F172A] font-heading tracking-tight mb-3">
          {service.name}
        </h2>

        <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed mb-4 font-medium">
          {service.description}
        </p>

        {/* Technical Engineering Specifications Matrix */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5 p-3.5 rounded-2xl bg-neutral-50 border border-black/5">
          {specs.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-md bg-[#C8102E]/10 flex items-center justify-center text-[#C8102E] shrink-0 mt-0.5">
                  <Icon className="w-3.5 h-3.5 text-[#C8102E]" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-semibold text-neutral-500 uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-xs font-bold text-[#0F172A] font-heading">
                    {item.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Scope of Work */}
        <ul className="w-full space-y-2 mb-6 pb-4 border-b border-black/10">
          {service.scopes.map((scope) => (
            <li key={scope} className="flex items-center gap-2 text-xs sm:text-sm text-[#0F172A] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E] shrink-0" />
              <span>{scope}</span>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <PillButton
            to="/contact"
            variant="primary"
            ariaLabel={`Inquire about ${service.name}`}
          >
            Inquire for {service.shortName}
          </PillButton>

          <a
            href={siteData.phone.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0F172A] hover:text-[#C8102E] transition-colors"
          >
            <span>Quick WhatsApp Inquiry</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const ServicesPage: React.FC = () => {
  return (
    <div className="pt-20 sm:pt-24 overflow-hidden">
      {/* Page Header / Bento Banner */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1220px] mx-auto pb-6 sm:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#0F172A] text-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-red-600/10 rounded-full blur-[90px] pointer-events-none" />

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="relative z-10 flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-4"
          >
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-red-400">Services</span>
          </nav>

          <SectionEyebrow label="CORE COMPETENCIES & 3D SIMULATION" dark className="mb-3 relative z-10" />

          <h1 className="relative z-10 text-2xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-white font-heading tracking-tight leading-[1.14] max-w-3xl">
            Five Core Engineering Disciplines
          </h1>

          <p className="relative z-10 mt-4 text-xs sm:text-sm text-neutral-300 font-medium max-w-2xl leading-relaxed">
            Hard rock excavation and controlled blasting, highways and road projects, bulk earth works, reservoirs, check dams, and canal networks — delivered as a Special Class Contractor and trusted civil infrastructure partner.
          </p>

          <div className="relative z-10 mt-6 flex flex-wrap items-center gap-3">
            <PillButton to="/contact" variant="secondary" ariaLabel="Inquire for civil infrastructure projects">
              Request Project Proposal
            </PillButton>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs font-mono text-neutral-300">
              <ShieldCheck className="w-3.5 h-3.5 text-red-400" />
              <span>Full Statutory &amp; Engineering Compliance</span>
            </span>
          </div>
        </motion.div>
      </section>

      {/* 5 In-depth Service Showcases with 3D Simulations */}
      <section className="py-6 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-[1220px] mx-auto space-y-8 sm:space-y-12">
        {siteData.services.map((service, index) => (
          <ServiceItemCard key={service.id} service={service} index={index} />
        ))}
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </div>
  );
};
