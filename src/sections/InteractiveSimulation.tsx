import React from 'react';
import { motion } from 'motion/react';
import { Layers, Activity, Compass, Cpu } from 'lucide-react';
import { SectionEyebrow } from '../components/SectionEyebrow';
import { BlueprintInspector } from '../components/BlueprintInspector';
import { siteImages } from '../data/images';

const ThreeTerrainCanvas = React.lazy(() =>
  import('../components/ThreeTerrainCanvas').then((m) => ({ default: m.ThreeTerrainCanvas }))
);

export const InteractiveSimulation: React.FC = () => {
  return (
    <section
      id="simulation"
      aria-label="Interactive 3D Terrain Simulation and CAD Blueprint Scanner"
      className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[1220px] mx-auto overflow-hidden"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10"
      >
        <div>
          <SectionEyebrow label="ENGINEERING INTELLIGENCE" className="mb-3" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading max-w-xl leading-tight">
            Interactive Civil Telemetry &amp; CAD Blueprint Scanner
          </h2>
        </div>
        <p className="text-neutral-600 text-xs sm:text-sm max-w-md font-medium leading-relaxed">
          Interact with real-time 3D topographic contours and slide our civil engineering scanner to inspect wireframe blueprints against site execution.
        </p>
      </motion.div>

      {/* Bento Grid: 3D Canvas + Blueprint Scanner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        {/* Left: 3D Topographic Mesh Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 flex flex-col justify-between"
        >
          <React.Suspense
            fallback={
              <div className="h-[360px] sm:h-[420px] rounded-[24px] sm:rounded-[28px] bg-slate-900 border border-slate-800 flex items-center justify-center text-xs text-neutral-400 font-mono">
                Initializing 3D Telemetry...
              </div>
            }
          >
            <ThreeTerrainCanvas className="h-[360px] sm:h-[420px]" />
          </React.Suspense>

          {/* Telemetry Status Bar below 3D canvas */}
          <div className="mt-3.5 grid grid-cols-3 gap-2.5">
            <div className="p-3 rounded-2xl bg-white border border-black/5 shadow-sm flex items-center gap-2.5">
              <Compass className="w-4 h-4 text-[#C8102E] shrink-0" />
              <div>
                <div className="text-[10px] font-mono text-neutral-400 uppercase">Station</div>
                <div className="text-xs font-bold font-heading text-[#0F172A]">Anantapur · Hyderabad</div>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-white border border-black/5 shadow-sm flex items-center gap-2.5">
              <Activity className="w-4 h-4 text-[#C8102E] shrink-0" />
              <div>
                <div className="text-[10px] font-mono text-neutral-400 uppercase">Elevation</div>
                <div className="text-xs font-bold font-heading text-[#0F172A]">412.5m Deccan</div>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-white border border-black/5 shadow-sm flex items-center gap-2.5">
              <Cpu className="w-4 h-4 text-[#C8102E] shrink-0" />
              <div>
                <div className="text-[10px] font-mono text-neutral-400 uppercase">Precision</div>
                <div className="text-xs font-bold font-heading text-[#0F172A]">±2.5mm Strata</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Unique Laser Scanline Blueprint Inspector */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex flex-col justify-between"
        >
          <div className="relative h-full flex flex-col justify-between">
            <BlueprintInspector
              imageSrc={siteImages.aboutSite.src}
              alt={siteImages.aboutSite.alt}
              title="Earthwork Corridor & Roadway Cut"
              category="CAD Laser Scan"
              className="h-[360px] sm:h-[420px] w-full"
            />

            {/* Explanatory annotation pill */}
            <div className="mt-3.5 p-3 rounded-2xl bg-[#C8102E] border border-red-700 shadow-sm flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 shrink-0 text-white" />
                <span className="text-xs font-bold font-heading">
                  Interactive Laser Cross-Section Analysis
                </span>
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full text-white">
                Live X-Ray
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
