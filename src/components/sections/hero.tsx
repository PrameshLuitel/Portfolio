
"use client";

import GlitchText from '@/components/glitch-text';
import { Github, Linkedin, Mail, MoveDown, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useSound } from '@/hooks/use-sound';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/pramesh-luitel-098aa3229/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/PrameshLuitel', label: 'GitHub' },
  { icon: Mail, href: 'mailto:luitelpramesh@gmail.com', label: 'Email' },
  { icon: FileText, href: 'https://drive.google.com/uc?export=download&id=1PY3-9VC9wAUVdzM5iyWciKlkx4n1J7uD', label: 'CV' },
];

const HeroSection = () => {
  const { playHoverSound } = useSound();
  return (
    <section id="home" className="scroll-section">
      <div className="z-10 container mx-auto flex h-full flex-col items-center justify-center text-center p-4">
        <h1 className="sr-only">Pramesh Luitel: AI in Finance, Automation & Investment Banking Portfolio</h1>
        <GlitchText text="Hi, I'm Pramesh" className="font-headline text-5xl md:text-7xl lg:text-8xl mb-4" />
        <p className="font-body text-lg md:text-xl lg:text-2xl max-w-3xl text-muted-foreground mb-8">
          Merging deep capital markets insight with cutting-edge AI, I, Pramesh Luitel, create systems that eliminate inefficiency, predict with precision, and set new benchmarks in investment banking and financial research.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button asChild variant="outline" size="lg" className="border-primary text-primary text-glow hover:bg-primary hover:text-primary-foreground" onMouseEnter={playHoverSound}>
            <Link href="#projects">Projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary text-glow hover:bg-primary hover:text-primary-foreground" onMouseEnter={playHoverSound}>
            <Link href="#research">Research Papers</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary text-glow hover:bg-primary hover:text-primary-foreground" onMouseEnter={playHoverSound}>
            <Link href="#vestara">Explore Vestara GPT</Link>
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          {socialLinks.map(link => (
            <a 
              key={link.label} 
              href={link.href} 
              aria-label={link.label} 
              target="_blank" 
              rel="noopener noreferrer" 
            >
              <link.icon className="w-8 h-8 icon-glow"/>
            </a>
          ))}
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <MoveDown className="w-8 h-8 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
