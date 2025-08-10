"use client";

import DotGridBackground from '@/components/dot-grid-background';
import Navbar from '@/components/layout/navbar';
import AboutMeSection from '@/components/sections/about-me';
import ContactSection from '@/components/sections/contact';
import HeroSection from '@/components/sections/hero';
import ProjectsSection from '@/components/sections/projects';
import ResearchSection from '@/components/sections/research';
import VestaraSection from '@/components/sections/vestara';
import StartupSound from '@/components/startup-sound';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Ensure the page starts at the top
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <StartupSound />
      <DotGridBackground />
      <Navbar />
      <main className="scroll-container">
        <HeroSection />
        <AboutMeSection />
        <ProjectsSection />
        <ResearchSection />
        <VestaraSection />
        <ContactSection />
      </main>
    </>
  );
}
