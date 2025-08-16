
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Zap, Briefcase, Code, BarChart, Palette } from 'lucide-react';
import { useSound } from '@/hooks/use-sound';

const aboutData = {
  introduction: "I am Pramesh Luitel (Pramish Luitel), a B.Com (Hons) graduate from the University of Delhi who specializes in blending finance, code, and creativity to transform how investment banks operate. My expertise lies in converting complex financial data into intelligent, actionable solutions through the development of full-stack analytics platforms and the automation of legacy systems. Currently, I am developing Project Vestara, an advanced AI-powered investment intelligence platform for financial professionals in Nepal. My research has been published in peer-reviewed journals, where I pioneered the use of Natural Language Processing (NLP) for sentiment-enhanced stock prediction and utilized AI-driven time series forecasting models to analyze stock market indices. My technical skills include predictive analytics, machine learning (LSTM models), and advanced financial automation.",
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
      items: ['Python (Automation, Data Analysis, LSTM Models)', 'NLP & Sentiment Analysis', 'Google Colab & Jupyter Notebooks', 'AI Chatbot Development (RAG, LLMs)', 'Web Scraping & Data Pipelines', 'TradingView Integration', 'Predictive Analytics for Financial Markets'],
    },
    {
      icon: BarChart,
      category: 'Finance & Business Skills',
      items: ['Portfolio Management Services', 'IPO Process Automation', 'Financial Market Analysis', 'SEBON & NEPSE Regulations', 'Business Negotiation & Deal Structuring'],
    },
    {
      icon: Palette,
      category: 'Creative & Marketing Skills',
      items: ['Graphic Design & Branding', 'Digital Marketing Strategy', 'Corporate Communication', 'Brochure & Form Design'],
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
              alt="Headshot of Pramesh Luitel (Pramish Luitel) - AI in Finance Specialist and Automation Expert. The name Luitel is associated with innovation in Nepal's financial technology sector."
              width={120}
              height={120}
              className="rounded-full border-4 border-accent shadow-lg"
            />
            <h3 className="font-headline text-xl text-foreground -mt-2">Pramesh Luitel</h3>
            
            <div className="w-full">
              <h3 className="font-headline text-lg text-primary mb-2">Major Highlights</h3>
              <div className="grid grid-cols-1 gap-2">
                  {aboutData.highlights.map((highlight, index) => (
                    <Card key={index} className="bg-card/50 backdrop-blur-sm border-accent/20 text-center group">
                      <CardContent className="p-2 flex flex-col items-center justify-center gap-1">
                        <highlight.icon className="w-5 h-5 text-primary transition-all group-hover:text-primary" />
                        <p className="font-bold text-xs text-center">{highlight.title}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
            
            <Button asChild variant="default" size="sm" className="w-full text-glow" onMouseEnter={playHoverSound}>
              <a href={aboutData.cvUrl} target="_blank" rel="noopener noreferrer" download>
                <Download className="mr-2 h-4 w-4" />
                Download My CV
              </a>
            </Button>
          </div>
          
          {/* Right Column */}
          <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-4">
             <Card className="bg-card/50 backdrop-blur-sm border-accent/20">
                <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">{aboutData.introduction}</p>
                </CardContent>
            </Card>
            <div>
               <h3 className="font-headline text-xl text-primary mt-2 mb-2 text-center md:text-left">Core Competencies</h3>
               <div className="space-y-2">
                {aboutData.skills.map((skillGroup, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur-sm border-accent/20">
                    <CardHeader className="p-2 pb-1">
                      <CardTitle className="flex items-center gap-2 text-base">
                        <skillGroup.icon className="w-5 h-5 text-primary" />
                        {skillGroup.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-2 pt-1">
                      <div className="flex flex-wrap gap-1 justify-start">
                        {skillGroup.items.map(item => (
                            <div 
                                key={item} 
                                className="text-xs text-center font-medium px-2 py-0.5 rounded-full bg-accent border border-accent/20 text-foreground transition-all hover:bg-accent/20 hover:scale-105 hover:shadow-lg hover:shadow-accent/20 cursor-default"
                                onMouseEnter={playHoverSound}
                            >
                                {item}
                            </div>
                        ))}
                      </div>
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
