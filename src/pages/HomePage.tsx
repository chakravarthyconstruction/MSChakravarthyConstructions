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

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <InteractiveSimulation />
      <Reach />
      <Leadership />
      <Approach />
      <CTABanner />
      <FAQ />
      <Contact />
    </>
  );
};
