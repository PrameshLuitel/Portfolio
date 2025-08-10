import DotGridBackground from '@/components/dot-grid-background';
import ContactSection from '@/components/sections/contact';
import HeroSection from '@/components/sections/hero';
import InfographicsSection from '@/components/sections/infographics';
import ProjectsSection from '@/components/sections/projects';
import VestaraSection from '@/components/sections/vestara';

export default function Home() {
  return (
    <>
      <DotGridBackground />
      <main className="scroll-container">
        <HeroSection />
        <InfographicsSection />
        <ProjectsSection />
        <VestaraSection />
        <ContactSection />
      </main>
    </>
  );
}
