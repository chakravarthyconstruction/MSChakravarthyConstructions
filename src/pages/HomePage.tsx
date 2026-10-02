import React from 'react';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Services } from '../sections/Services';
import { InteractiveSimulation } from '../sections/InteractiveSimulation';
import { Reach } from '../sections/Reach';
import { Leadership } from '../sections/Leadership';
import { Approach } from '../sections/Approach';
import { CTABanner } from '../sections/CTABanner';
import { FAQ } from '../sections/FAQ';
import { Contact } from '../sections/Contact';
import { Projects } from '../sections/Projects';
import { Credentials } from '../sections/Credentials';
import { Machinery } from '../sections/Machinery';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <InteractiveSimulation />
      <Projects limit={6} />
      <Credentials compact />
      <Reach />
      <Leadership />
      <Approach />
      <Machinery />
      <CTABanner />
      <FAQ />
      <Contact />
    </>
  );
};
