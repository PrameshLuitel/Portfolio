
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Zap, Briefcase, Code, BarChart, Palette } from 'lucide-react';
import { useSound } from '@/hooks/use-sound';

const aboutData = {
  introduction: "I am Pramesh Luitel, a B.Com (Hons) graduate from the University of Delhi who specializes in blending finance, code, and creativity to transform how investment banks operate. My expertise lies in converting complex financial data into intelligent, actionable solutions through the development of full-stack analytics platforms and the automation of legacy systems. Currently, I am developing Project Vestara, an advanced AI-powered investment intelligence platform for financial professionals in Nepal. My research has been published in peer-reviewed journals, where I pioneered the use of Natural Language Processing (NLP) for sentiment-enhanced stock prediction and utilized AI-driven time series forecasting models to analyze stock market indices. My technical skills include predictive analytics, machine learning (LSTM models), and advanced financial automation.",
  imageUrl: '/images/pramesh-luitel-headshot.jpg',
  cvUrl: 'https://drive.google.com/uc?export=download&id=1PY3-9VC9wAUVdzM5iyWciKlkx4n1J7uD',
  highlights: [
    {
      icon: FileText,
      title: 'AI and Finance Research',
    },
    {
      icon: Zap,
      title: 'Innovation and Automation in Finance Operations',
    },
    {
      icon: Briefcase,
      title: 'Entrepreneurial & Leadership Experience',
    },
  ],
  skills: [
    {
      icon: Code,
      category: 'Technical Skills',
      subCategories: [
        {
          title: 'Predictive Analytics & Machine Learning',
          items: ['LSTM models', 'Time series forecasting', 'Sentiment analysis (NLP)', 'Hybrid modeling', 'Advanced technical indicators', 'Google Colab', 'Python (Pandas, Scikit-learn, TensorFlow/Keras)'],
        },
        {
          title: 'Software Development & Automation',
          items: ['Full-stack development (Next.js, Tailwind CSS)', 'Process automation (Python, Excel)', 'Desktop GUI development (CustomTkinter)', 'Basic C language', 'API integration'],
        },
      ],
    },
    {
      icon: BarChart,
      category: 'Finance & Business Skills',
      subCategories: [
         {
          title: 'Financial Analysis & Strategy',
          items: ['Portfolio management', 'Capital market analysis (NEPSE)', 'Investment intelligence', 'Financial modeling', 'Strategic planning'],
        },
        {
          title: 'Operational & Project Management',
          items: ['Identifying operational bottlenecks', 'Leading digital strategy', 'Client onboarding automation'],
        },
      ],
    },
    {
      icon: Palette,
      category: 'Creative & Marketing Skills',
      subCategories: [
        {
          title: 'Brand & Campaign Management',
          items: ['Branding & theme development', 'Digital rollout & execution', 'Marketing for financial products'],
        },
        {
          title: 'Content & Research',
          items: ['Research paper publication', 'Transforming complex data', 'Storytelling technical concepts', 'Creative problem-solving'],
        },
      ],
    },
  ]
};

const AboutMeSection = () => {
  const { playHoverSound } = useSound();
  return (
    <section id="about-me" className="scroll-section p-4 md:p-6 flex items-center justify-center pt-20 md:pt-16">
      <div className="z-10 container mx-auto flex flex-col items-center justify-center">
        <h2 className="font-headline text-3xl md:text-4xl text-glow mb-4 text-center text-primary">About Me</h2>
        <h2 className="sr-only">About Pramesh Luitel</h2>
        <div className="flex flex-col md:flex-row items-start justify-center gap-8 w-full max-w-6xl">
          
          {/* Left Column */}
          <div className="w-full md:w-[35%] lg:w-[30%] flex flex-col items-center text-center gap-4">
            <Image
              src={aboutData.imageUrl}
              alt="Headshot of Pramesh Luitel - AI in Finance Specialist and Automation Expert. The name Luitel is associated with innovation in Nepal's financial technology sector."
              width={120}
              height={120}
              className="rounded-full border-4 border-accent shadow-lg"
            />
            <h3 className="font-headline text-xl text-foreground -mt-2">Pramesh Luitel</h3>
            
            <div className="w-full">
              <h3 className="font-headline text-lg text-primary mb-2">Major Highlights</h3>
              <div className="grid grid-cols-1 gap-2">
                  {aboutData.highlights.map((highlight, index) => (
                    <Card key={index} className="bg-card/50 backdrop-blur-sm border-border text-center group">
                      <CardContent className="p-2 flex flex-col items-center justify-center gap-1">
                        <highlight.icon className="w-5 h-5 text-primary transition-all group-hover:text-primary" />
                        <p className="font-bold text-xs text-center">{highlight.title}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
            
            <Button asChild size="sm" className="w-full text-glow" onMouseEnter={playHoverSound}>
              <a href={aboutData.cvUrl} target="_blank" rel="noopener noreferrer" download>
                <Download className="mr-2 h-4 w-4" />
                Download My CV
              </a>
            </Button>
          </div>
          
          {/* Right Column */}
          <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-4">
             <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">{aboutData.introduction}</p>
                </CardContent>
            </Card>
            <div>
               <h3 className="font-headline text-xl text-primary mt-2 mb-2 text-center md:text-left">Core Competencies</h3>
               <div className="space-y-2">
                {aboutData.skills.map((skillGroup, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur-sm border-border">
                    <CardHeader className="p-2 pb-1">
                      <CardTitle className="flex items-center gap-2 text-base">
                        <skillGroup.icon className="w-5 h-5 text-primary" />
                        {skillGroup.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-2 pt-1 space-y-2">
                      {skillGroup.subCategories.map(subCategory => (
                        <div key={subCategory.title}>
                          <h4 className="font-semibold text-sm text-foreground mb-1">{subCategory.title}</h4>
                          <div className="flex flex-wrap gap-1 justify-start">
                            {subCategory.items.map(item => (
                                <div 
                                    key={item} 
                                    className="text-xs text-center font-medium px-2 py-0.5 rounded-full bg-accent border border-border text-foreground transition-all hover:bg-primary/20 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 cursor-default hover:text-glow"
                                    onMouseEnter={playHoverSound}
                                >
                                    {item}
                                </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
