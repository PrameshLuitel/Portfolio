import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Zap, Briefcase, Code, BarChart, Palette } from 'lucide-react';

const aboutData = {
  introduction: "A B.Com (Hons) graduate who transforms the intersection of finance, technology, and creativity into intelligent, actionable solutions. With a proven track record in building full-stack analytics platforms, automating legacy systems, and pioneering AI-driven capital market research, I specialize in modernizing financial operations. I am a passionate and innovative thinker dedicated to pushing the boundaries of fintech, particularly in emerging markets, through automation and applied AI. My work includes founding Project Vestara, a SaaS platform for investment banks, and publishing peer-reviewed research on sentiment-enhanced stock prediction. I am always seeking new challenges to leverage my skills in predictive analytics, machine learning, and strategic digital innovation.",
  imageUrl: 'https://placehold.co/400x400',
  imageHint: 'professional headshot',
  cvUrl: '#', // Placeholder for CV link
  highlights: [
    {
      icon: FileText,
      title: 'AI Research & Recognition',
    },
    {
      icon: Zap,
      title: 'Innovation in Finance Operations',
    },
    {
      icon: Briefcase,
      title: 'Strategic Deals & Advisory',
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
  return (
    <section id="about-me" className="scroll-section p-4 md:p-8 flex items-center justify-center min-h-screen">
      <div className="z-10 container mx-auto flex flex-col items-center justify-center">
        <h2 className="font-headline text-4xl md:text-5xl text-glow mb-8 text-center">About Me</h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 w-full max-w-7xl">
          {/* Left Column: Image, CV, and Intro */}
          <div className="w-full lg:w-1/3 flex flex-col items-center text-center lg:sticky lg:top-28">
            <Image
              src={aboutData.imageUrl}
              alt="Pramesh Luitel Headshot"
              width={250}
              height={250}
              className="rounded-full border-4 border-primary shadow-lg mb-6"
              data-ai-hint={aboutData.imageHint}
            />
            <h3 className="font-headline text-2xl text-foreground mb-2">Pramesh Luitel</h3>
            <Button asChild variant="outline" className="border-primary text-glow mb-6">
              <a href={aboutData.cvUrl} download>
                <Download className="mr-2 h-4 w-4" />
                Download My CV
              </a>
            </Button>
            <p className="text-base text-muted-foreground text-left">
              {aboutData.introduction}
            </p>
          </div>

          {/* Right Column: Highlights and Skills */}
          <div className="w-full lg:w-2/3 flex flex-col gap-10">
            {/* Highlights */}
            <div>
              <h3 className="font-headline text-2xl text-primary mb-4 text-center lg:text-left">Major Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {aboutData.highlights.map((highlight, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 text-center">
                    <CardContent className="p-4 flex flex-col items-center justify-center gap-3 aspect-square">
                      <highlight.icon className="w-10 h-10 text-primary icon-glow" />
                      <p className="font-bold text-foreground mt-2">{highlight.title}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
               <h3 className="font-headline text-2xl text-primary mb-4 text-center lg:text-left">Core Competencies</h3>
               <div className="space-y-6">
                {aboutData.skills.map((skillGroup, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20">
                    <CardHeader className="p-4">
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <skillGroup.icon className="w-6 h-6 text-primary icon-glow" />
                        {skillGroup.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map(item => (
                            <div key={item} className="text-xs text-center font-medium px-3 py-1.5 rounded-full bg-secondary/50 border border-primary/20 text-foreground transition-all hover:bg-primary/20 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 cursor-default">
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
