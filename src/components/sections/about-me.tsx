
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Zap, Briefcase, Code, BarChart, Palette } from 'lucide-react';
import { useSound } from '@/hooks/use-sound';

const aboutData = {
  introduction: "I specialize in blending finance, code, and creativity to transform investment banking operations. My expertise lies in converting complex financial data into intelligent, actionable solutions through full-stack analytics platforms and automating legacy systems.",
  imageUrl: '/images/pramesh-luitel-headshot.jpg',
  cvUrl: 'https://drive.google.com/uc?export=download&id=1PY3-9VC9wAUVdzM5iyWciKlkx4n1J7uD',
  highlights: [
    {
      icon: FileText,
      title: 'AI and Finance Research',
    },
    {
      icon: Zap,
      title: 'Innovation in Finance Operations',
    },
    {
      icon: Briefcase,
      title: 'Entrepreneurial Leadership',
    },
  ],
  skills: [
    {
      icon: Code,
      category: 'Technical Skills',
      subCategories: [
        {
          title: 'Predictive Analytics & Machine Learning',
          items: ['AI Model Architecture', 'LLM Development', 'RAG-based Systems', 'LSTM Models', 'Time-Series Forecasting', 'Sentiment Analysis (NLP)', 'Hybrid Modeling', 'Python (Pandas, Scikit-learn, TensorFlow)'],
        },
        {
          title: 'Software Development & Automation',
          items: ['Full-Stack Development (Next.js, Tailwind)', 'Process Automation (Python, Excel)', 'Desktop GUI Development (CustomTkinter)', 'API Integration', 'Data Transformation & Visualization'],
        },
      ],
    },
    {
      icon: BarChart,
      category: 'Finance & Business Skills',
      subCategories: [
         {
          title: 'Financial Analysis & Strategy',
          items: ['Portfolio Management', 'Capital Market Analysis (NEPSE)', 'Investment Intelligence', 'Financial Modeling', 'Strategic Planning'],
        },
        {
          title: 'Operational & Project Management',
          items: ['End-to-end Process Automation', 'Automated IPO & eDIS Workflows', 'Scalable Solution Design', 'Leading Digital Strategy', 'Client Onboarding Automation'],
        },
      ],
    },
    {
      icon: Palette,
      category: 'Creative & Marketing Skills',
      subCategories: [
        {
          title: 'Brand & Campaign Management',
          items: ['Branding & Theme Development', 'Digital Rollout & Execution', 'Marketing for Financial Products'],
        },
        {
          title: 'Content & Research',
          items: ['Research Paper Publication', 'Transforming Complex Data', 'Communicating Technical Concepts', 'Creative Problem-Solving'],
        },
      ],
    },
  ]
};

const AboutMeSection = () => {
  const { playHoverSound } = useSound();
  return (
    <section id="about-me" className="scroll-section flex justify-center p-4 md:p-8 py-24 md:py-16">
      <div className="z-10 container mx-auto flex flex-col items-center justify-center">
        <h2 className="font-headline text-3xl md:text-4xl text-glow mb-8 text-center text-primary">About Me</h2>
        <h2 className="sr-only">About Pramesh Luitel</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          
          {/* Left Column */}
          <div className="lg:col-span-1 flex flex-col items-center text-center gap-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
            <Image
              src={aboutData.imageUrl}
              alt="Headshot of Pramesh Luitel - AI in Finance Specialist and Automation Expert. The name Luitel is associated with innovation in Nepal's financial technology sector."
              width={120}
              height={120}
              className="rounded-full border-4 border-accent shadow-lg"
              data-ai-hint="man portrait"
            />
            <h3 className="font-headline text-2xl text-foreground">Pramesh Luitel</h3>
            <p className="text-sm text-muted-foreground -mt-2">{aboutData.introduction}</p>
            <Button asChild size="sm" className="w-full text-glow mt-2" onMouseEnter={playHoverSound}>
              <a href={aboutData.cvUrl} target="_blank" rel="noopener noreferrer" download>
                <Download className="mr-2 h-4 w-4" />
                Download My CV
              </a>
            </Button>
            <div className="w-full mt-2">
              <h3 className="font-headline text-lg text-primary mb-2">Major Highlights</h3>
              <div className="grid grid-cols-3 gap-2">
                  {aboutData.highlights.map((highlight, index) => (
                    <div key={index} className="p-2 flex flex-col items-center justify-start gap-1 bg-accent/50 rounded-md border border-border/50 text-center group">
                        <highlight.icon className="w-5 h-5 text-primary transition-all group-hover:scale-110" />
                        <p className="font-bold text-xs text-center leading-tight">{highlight.title}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="lg:col-span-2">
             <Card className="bg-card/50 backdrop-blur-sm border-border h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl text-primary">
                      Core Competencies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                      {aboutData.skills.map((skillGroup) => (
                        <div key={skillGroup.category}>
                          <h3 className="font-headline text-md flex items-center gap-2 text-primary mb-2">
                            <skillGroup.icon className="w-4 h-4" />
                            {skillGroup.category}
                          </h3>
                          <div className="space-y-3 pl-2 border-l-2 border-primary/20 ml-2">
                            {skillGroup.subCategories.map(subCategory => (
                              <div key={subCategory.title} className="pl-4">
                                <h4 className="font-semibold text-sm text-foreground mb-2">{subCategory.title}</h4>
                                <div className="flex flex-wrap gap-1.5 justify-start">
                                  {subCategory.items.map(item => (
                                      <div 
                                          key={item} 
                                          className="text-xs text-center font-medium px-2 py-1 rounded-full bg-accent border border-border text-foreground transition-all hover:bg-primary/20 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 cursor-default hover:text-glow"
                                          onMouseEnter={playHoverSound}
                                      >
                                          {item}
                                      </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                </CardContent>
              </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
