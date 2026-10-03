import React from 'react';
import { ExecutiveStartingBanner } from '../components/ExecutiveStartingBanner';
import { Hero } from '../sections/Hero';
import { SitePhotoScroll } from '../components/SitePhotoScroll';
import { About } from '../sections/About';
import { Services } from '../sections/Services';
import { InteractiveSimulation } from '../sections/InteractiveSimulation';
import { Reach } from '../sections/Reach';
import { Leadership } from '../sections/Leadership';
import { Approach } from '../sections/Approach';
import { Machinery } from '../sections/Machinery';
import { Credentials } from '../sections/Credentials';
import { Projects } from '../sections/Projects';
import { CTABanner } from '../sections/CTABanner';
import { FAQ } from '../sections/FAQ';
import { Contact } from '../sections/Contact';

export const HomePage: React.FC = () => {
  return (
    <>
      {/* 1. Website Starting: Executive Leadership with DHARMAVARAM NAGARAJU (Chairman) & DHARMAVARAM CHAKRAVARTHY (Managing Director) */}
      <ExecutiveStartingBanner />

      {/* 2. Main Hero Section moved right below Executive Banner */}
      <Hero isBelowBanner={true} />

      {/* 3. Real On-site Photography Marquee */}
      <SitePhotoScroll />

      {/* 4. About & 40+ Year Trajectory */}
      <About />

      {/* 5. Core Services */}
      <Services />

      {/* 6. Interactive Engineering Simulation */}
      <InteractiveSimulation />

      {/* 7. Regional Reach */}
      <Reach />

      {/* 8. Full Leadership Council */}
      <Leadership />

      {/* 9. Methodology & Approach */}
      <Approach />

      {/* 10. Heavy Plant & Machinery Fleet */}
      <Machinery />

      {/* 11. Credentials & Registrations */}
      <Credentials compact />

      {/* 12. Project Directory at Last: Showing All 10 Landmark Projects with Galleries */}
      <Projects />

      {/* 13. Call To Action, FAQs & Contact */}
      <CTABanner />
      <FAQ />
      <Contact />
    </>
  );
};
