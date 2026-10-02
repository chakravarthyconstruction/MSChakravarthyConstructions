import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Building2, Ruler } from 'lucide-react';
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

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.97 }}
    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    className="bg-white rounded-[24px] border border-black/5 shadow-sm p-5 sm:p-6 flex flex-col gap-4 hover:border-black/15 transition-colors"
  >
    <div className="flex flex-wrap items-center gap-2">
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide border ${
          project.status === 'Active'
            ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
            : 'bg-neutral-100 text-neutral-700 border-neutral-200'
        }`}
      >
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            project.status === 'Active' ? 'bg-emerald-500 animate-pulse' : 'bg-neutral-400'
          }`}
        />
        {project.status}
      </span>
      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#C8102E]/10 text-[#C8102E] border border-[#C8102E]/20">
        {project.category}
      </span>
    </div>

    <div>
      <h3 className="text-base sm:text-lg font-bold font-heading text-[#0F172A] leading-snug">{project.title}</h3>
      <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">{project.scope}</p>
    </div>

    <ul className="space-y-1.5 text-xs text-neutral-600">
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
      {project.quantities?.map((q) => (
        <li key={q} className="flex items-start gap-2">
          <Ruler className="w-3.5 h-3.5 text-[#C8102E] shrink-0 mt-0.5" />
          <span>{q}</span>
        </li>
      ))}
    </ul>

    <div className="mt-auto pt-3 border-t border-black/5 flex items-end justify-between gap-3">
      <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
        {project.valueLabel}
      </span>
      <span className="text-lg sm:text-xl font-black font-heading text-[#0F172A]">{project.value}</span>
    </div>
  </motion.article>
);

export const Projects: React.FC<ProjectsProps> = ({ limit }) => {
  const [status, setStatus] = useState<StatusFilter>('All');
  const [category, setCategory] = useState<CategoryFilter>('All');

  const visible = useMemo(() => {
    const filtered = projects.filter(
      (p) => (status === 'All' || p.status === status) && (category === 'All' || p.category === category),
    );
    return limit ? filtered.slice(0, limit) : filtered;
  }, [status, category, limit]);

  const chip = (active: boolean) =>
    `px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] ${
      active
        ? 'bg-[#C8102E] text-white border-[#C8102E]'
        : 'bg-white text-[#0F172A]/80 border-black/10 hover:border-black/25'
    }`;

  return (
    <section
      id="projects"
      aria-label="Key Projects"
      className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-[1220px] mx-auto overflow-hidden"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
        <div>
          <SectionEyebrow label="KEY PROJECTS" className="mb-3" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading max-w-2xl leading-tight">
            Landmark Works &amp; Certified Completions
          </h2>
        </div>
        <p className="text-neutral-600 text-xs sm:text-sm max-w-sm font-medium leading-relaxed">
          Values are as ordered or certified by the client. Active works report contract value or gross progress billed.
        </p>
      </div>

      {!limit && (
        <div className="flex flex-col gap-3 mb-6">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by status">
            {STATUS_FILTERS.map((s) => (
              <button key={s} type="button" aria-pressed={status === s} onClick={() => setStatus(s)} className={chip(status === s)}>
                {s}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by discipline">
            {CATEGORY_FILTERS.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
                className={chip(category === c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {!limit && visible.length === 0 && (
        <p className="text-sm text-neutral-500 mt-4">No projects match the selected filters.</p>
      )}

      {limit && (
        <div className="mt-8 flex justify-center">
          <PillButton to="/projects" variant="primary" ariaLabel="View all projects">
            View All Projects
          </PillButton>
        </div>
      )}
    </section>
  );
};
