import GlitchText from '@/components/glitch-text';
import { MoveDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="scroll-section flex-col justify-center items-center text-center p-4">
      <div className="z-10 flex flex-col items-center">
        <GlitchText text="Pramesh Luitel" className="font-headline text-5xl md:text-7xl lg:text-8xl mb-4" />
        <p className="font-body text-lg md:text-xl lg:text-2xl max-w-3xl text-muted-foreground">
          Merging deep capital markets insight with cutting-edge AI, I create systems that eliminate inefficiency, predict with precision, and set new benchmarks in investment banking and financial research.
        </p>
        <div className="absolute bottom-10 animate-bounce">
          <MoveDown className="w-8 h-8 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
