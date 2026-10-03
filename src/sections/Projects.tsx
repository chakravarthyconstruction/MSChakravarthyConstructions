import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Building2, Image as ImageIcon, Newspaper, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import type { Project, ProjectCategory, ProjectStatus } from '../data/projects';
import { SectionEyebrow } from '../components/SectionEyebrow';
import { PillButton } from '../components/PillButton';

type StatusFilter = 'All' | ProjectStatus;
type CategoryFilter = 'All' | ProjectCategory;

const STATUS_FILTERS: StatusFilter[] = ['All', 'Active', 'Completed'];
const CATEGORY_FILTERS: CategoryFilter[] = [
  'All',
  ...Array.from(new Set(projects.map((p) => p.category))),
];

interface ProjectsProps {
  /** Limit the number of cards (home page teaser). Filters are hidden when set. */
  limit?: number;
}

export const Projects: React.FC<ProjectsProps> = ({ limit }) => {
  const [status, setStatus] = useState<StatusFilter>('All');
  const [category, setCategory] = useState<CategoryFilter>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);
  const [showPressModal, setShowPressModal] = useState<boolean>(false);

  const visible = useMemo(() => {
    const filtered = projects.filter(
      (p) => (status === 'All' || p.status === status) && (category === 'All' || p.category === category),
    );
    return limit ? filtered.slice(0, limit) : filtered;
  }, [status, category, limit]);

  const openGallery = (project: Project, idx = 0) => {
    setActiveProject(project);
    setActiveImageIdx(idx);
    setShowPressModal(false);
  };

  const openPress = (project: Project) => {
    setActiveProject(project);
    setShowPressModal(true);
  };

  const chip = (active: boolean) =>
    `px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] ${
      active
        ? 'bg-[#C8102E] text-white border-[#C8102E]'
        : 'bg-white text-[#0F172A]/80 border-black/10 hover:border-black/25'
    }`;

  return (
    <section
      id="projects"
      aria-label="Key Projects Directory - Chakravarthy Constructions"
      className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[1220px] mx-auto overflow-hidden"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
        <div>
          <SectionEyebrow label="PROJECT PORTFOLIO & ON-SITE EXECUTION" className="mb-3" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading max-w-2xl leading-tight">
            10 Landmark Infrastructure Projects
          </h2>
        </div>
        <p className="text-neutral-600 text-xs sm:text-sm max-w-md font-medium leading-relaxed">
          Comprehensive project directory covering multi-lane highways, balancing reservoirs, bulk earthworks, and specialized Irrigation Department infrastructure across Southern India.
        </p>
      </div>

      {/* Filter Row: Only on full projects view */}
      {!limit && (
        <div className="space-y-3 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono font-bold uppercase text-neutral-400 mr-2">Status:</span>
            {STATUS_FILTERS.map((s) => (
              <button key={s} type="button" onClick={() => setStatus(s)} className={chip(status === s)}>
                {s}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono font-bold uppercase text-neutral-400 mr-2">Category:</span>
            {CATEGORY_FILTERS.map((c) => (
              <button key={c} type="button" onClick={() => setCategory(c)} className={chip(category === c)}>
                {c}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-[26px] border border-black/10 shadow-sm overflow-hidden flex flex-col group hover:shadow-xl hover:border-black/20 transition-all duration-300"
            >
              {/* Card Image Area with overlay badge */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                {/* Top Floating Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                  <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-mono font-black border border-white/20">
                    #{project.projectNumber.toString().padStart(2, '0')}
                  </span>

                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border ${
                      project.status === 'Active'
                        ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                        : 'bg-black/60 text-neutral-300 border-white/20'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        project.status === 'Active' ? 'bg-emerald-400 animate-pulse' : 'bg-neutral-400'
                      }`}
                    />
                    {project.status}
                  </span>
                </div>

                {/* Bottom Gallery Action Pill */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => openGallery(project, 0)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 hover:bg-white text-[#0F172A] text-[11px] font-semibold backdrop-blur-md shadow-sm transition-transform hover:scale-105 cursor-pointer"
                  >
                    <ImageIcon className="w-3.5 h-3.5 text-[#C8102E]" />
                    <span>{project.gallery.length} Photos</span>
                  </button>

                  {project.pressImage && (
                    <button
                      type="button"
                      onClick={() => openPress(project)}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#C8102E] hover:bg-red-700 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm transition-transform hover:scale-105 cursor-pointer"
                    >
                      <Newspaper className="w-3 h-3" />
                      <span>Press News</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 gap-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono font-bold text-[#C8102E] uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold font-heading text-[#0F172A] leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {project.scope}
                </p>

                {/* Details List */}
                <ul className="space-y-1.5 text-xs text-neutral-600 mt-auto pt-3 border-t border-black/5">
                  {project.client && (
                    <li className="flex items-start gap-2">
                      <Building2 className="w-3.5 h-3.5 text-[#C8102E] shrink-0 mt-0.5" />
                      <span className="font-semibold text-[#0F172A]">{project.client}</span>
                    </li>
                  )}
                  <li className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#C8102E] shrink-0 mt-0.5" />
                    <span>{project.location}</span>
                  </li>
                </ul>

                {/* Highlight Chip */}
                {project.highlight && (
                  <div className="pt-2">
                    <span className="inline-block text-[11px] font-bold text-[#C8102E] bg-red-50 border border-red-200/80 px-2.5 py-1 rounded-lg">
                      ★ {project.highlight}
                    </span>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {visible.length === 0 && (
        <p className="text-sm text-neutral-500 mt-6 text-center">No projects match the selected filters.</p>
      )}

      {/* Button to View All Projects if in limit view */}
      {limit && (
        <div className="mt-8 sm:mt-10 text-center">
          <PillButton to="/projects" variant="primary" ariaLabel="View all 10 projects">
            View All 10 Projects
          </PillButton>
        </div>
      )}

      {/* Interactive Photo Gallery Lightbox Modal */}
      <AnimatePresence>
        {activeProject && !showPressModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-white/15 rounded-[24px] sm:rounded-[32px] max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden text-white shadow-2xl relative"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-mono text-red-400 font-bold uppercase tracking-wider">
                    Project #{activeProject.projectNumber} · {activeProject.category}
                  </span>
                  <h3 className="text-base sm:text-xl font-bold font-heading text-white leading-snug">
                    {activeProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                  aria-label="Close Gallery"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Image View */}
              <div className="relative flex-1 min-h-[300px] sm:min-h-[420px] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={activeProject.gallery[activeImageIdx]}
                  alt={`${activeProject.title} - ${activeImageIdx + 1}`}
                  className="max-h-[60vh] w-auto max-w-full object-contain"
                />

                {/* Left & Right Navigation Arrows */}
                {activeProject.gallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIdx((prev) => (prev > 0 ? prev - 1 : activeProject.gallery.length - 1));
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIdx((prev) => (prev < activeProject.gallery.length - 1 ? prev + 1 : 0));
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Strip & Details */}
              <div className="p-3 sm:p-4 border-t border-white/10 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1">
                  {activeProject.gallery.map((img, i) => (
                    <button
                      key={img}
                      type="button"
                      onClick={() => setActiveImageIdx(i)}
                      className={`relative shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-transform cursor-pointer ${
                        activeImageIdx === i ? 'border-[#C8102E] scale-105' : 'border-white/20 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>

                <div className="text-xs text-neutral-400 font-mono text-center sm:text-right shrink-0">
                  Image {activeImageIdx + 1} of {activeProject.gallery.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Press / Newspaper Article Modal */}
      <AnimatePresence>
        {activeProject && showPressModal && activeProject.pressImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setShowPressModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-white/15 rounded-[24px] sm:rounded-[32px] max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden text-white shadow-2xl relative"
            >
              <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-mono text-red-400 font-bold uppercase tracking-wider">
                    Official Press Documentation
                  </span>
                  <h3 className="text-base sm:text-lg font-bold font-heading text-white">
                    {activeProject.title} — Regional Press Coverage
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setShowPressModal(false)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 overflow-y-auto max-h-[65vh] flex flex-col items-center bg-black/40">
                <img
                  src={activeProject.pressImage}
                  alt={activeProject.pressTitle || 'Press news clipping'}
                  className="w-full max-w-lg rounded-xl border border-white/20 shadow-lg object-contain"
                />
                {activeProject.pressTitle && (
                  <p className="mt-4 text-xs sm:text-sm text-neutral-200 text-center leading-relaxed font-medium bg-white/10 p-3 rounded-xl border border-white/10">
                    {activeProject.pressTitle}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
