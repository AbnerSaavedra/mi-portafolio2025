// src/pages/Inicio.tsx
import React from 'react';
import { HeroSection } from '../components/Hero';
import { TechStack } from '../components/TechStack';
import { AboutMe } from '../components/AboutMe';
import { CallToAction } from '../components/CallToAction';

const Inicio: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <AboutMe />
      <TechStack />
      <CallToAction />
    </main>
  );
};

export default Inicio;
