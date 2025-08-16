
"use client";

import DotGridBackground from '@/components/dot-grid-background';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import AboutMeSection from '@/components/sections/about-me';
import ContactSection from '@/components/sections/contact';
import HeroSection from '@/components/sections/hero';
import ProjectsSection from '@/components/sections/projects';
import ResearchSection from '@/components/sections/research';
import VestaraSection from '@/components/sections/vestara';
import SplashScreen from '@/components/splash-screen';
import StartupSound from '@/components/startup-sound';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure the page starts at the top
    if (!isLoading) {
      window.scrollTo(0, 0);
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading && <SplashScreen setIsLoading={setIsLoading} />}
      </AnimatePresence>
      {!isLoading && (
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
            <Footer />
          </main>
        </>
      )}
    </>
  );
}
