import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Projects } from '../sections/Projects';
import { Machinery } from '../sections/Machinery';
import { CTABanner } from '../sections/CTABanner';

export const ProjectsPage: React.FC = () => (
  <div className="pt-20 sm:pt-24 overflow-hidden">
    <PageHeader
      crumb="Projects"
      eyebrow="PROJECT RECORD"
      title="Active Landmark Works & Certified Completions"
      intro="Pumped storage, greenfield highway, reservoir, irrigation and industrial drainage works executed as a Class-1 contractor and as a tier-1 subcontracting partner to EPC majors."
    />
    <Projects />
    <Machinery />
    <CTABanner />
  </div>
);
