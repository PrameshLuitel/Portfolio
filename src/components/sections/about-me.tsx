import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, GraduationCap, BrainCircuit } from 'lucide-react';

const aboutData = {
  introduction: "As a quantitative strategist and AI architect, I operate at the nexus of high-finance and deep technology. My career is dedicated to building intelligent systems that dismantle market inefficiencies and redefine the paradigms of investment and research. I thrive on translating complex, unstructured data into actionable alpha and robust, predictive models.",
  imageUrl: 'https://placehold.co/400x400',
  imageHint: 'professional portrait',
  experience: [
    {
      icon: Briefcase,
      title: "Quantitative Trading & Asset Management",
      description: "Developed and deployed algorithmic trading strategies across multiple asset classes. Architected risk management frameworks that outperformed benchmarks during periods of high volatility.",
    },
    {
      icon: GraduationCap,
      title: "Academic & Research Background",
      description: "Published research in computational finance and presented at international conferences. My academic work focuses on applying stochastic calculus and machine learning to financial forecasting.",
    },
    {
      icon: BrainCircuit,
      title: "AI & Large Language Models",
      description: "Pioneered the development of proprietary LLMs trained on financial data for tasks including sentiment analysis, regulatory document summarization, and generating synthetic market scenarios.",
    },
  ],
};

const AboutMeSection = () => {
  return (
    <section id="about-me" className="scroll-section p-4 md:p-8">
      <div className="z-10 container mx-auto flex flex-col items-center justify-center">
        <h2 className="font-headline text-4xl md:text-5xl text-glow mb-12 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl">
          <div className="w-full md:w-1/3 flex justify-center">
            <Image 
              src={aboutData.imageUrl} 
              alt="Pramesh Luitel" 
              width={300} 
              height={300} 
              className="rounded-full border-4 border-primary shadow-lg"
              data-ai-hint={aboutData.imageHint}
            />
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-lg text-muted-foreground mb-8 text-center md:text-left">
              {aboutData.introduction}
            </p>
            <div className="space-y-6">
              {aboutData.experience.map((item, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardContent className="flex items-start gap-4 p-4">
                    <item.icon className="w-10 h-10 text-primary icon-glow mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;