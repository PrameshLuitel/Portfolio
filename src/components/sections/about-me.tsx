import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Zap, Briefcase, Code, BarChart, Palette } from 'lucide-react';

const aboutData = {
  introduction: "A B.Com (Hons) graduate who transforms the intersection of finance, technology, and creativity into intelligent, actionable solutions. With a proven track record in building <span class='text-primary font-semibold'>full-stack analytics platforms</span>, <span class='text-primary font-semibold'>automating legacy systems</span>, and pioneering <span class='text-primary font-semibold'>AI-driven capital market research</span>, I specialize in modernizing financial operations. I am a passionate and innovative thinker dedicated to pushing the boundaries of fintech, particularly in emerging markets, through automation and applied AI. My work includes founding Project Vestara, a SaaS platform for investment banks, and publishing peer-reviewed research on sentiment-enhanced stock prediction. I am always seeking new challenges to leverage my skills in <span class='text-primary font-semibold'>predictive analytics</span>, <span class='text-primary font-semibold'>machine learning</span>, and <span class='text-primary font-semibold'>strategic digital innovation</span>.",
  imageUrl: 'https://placehold.co/400x400',
  imageHint: 'professional headshot',
  cvUrl: '#',
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
  return (
    <section id="about-me" className="scroll-section p-4 md:p-8 flex items-center justify-center min-h-screen pt-20">
      <div className="z-10 container mx-auto flex flex-col items-center justify-center">
        <h2 className="font-headline text-4xl md:text-5xl text-glow mb-8 text-center">About Me</h2>
        <div className="flex flex-col lg:flex-row items-start justify-center gap-12 w-full max-w-7xl">
          <div className="w-full lg:w-[30%] flex flex-col items-center text-center">
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
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 mt-0">
                <CardContent className="p-4 text-left">
                    <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: aboutData.introduction }} />
                </CardContent>
            </Card>
          </div>

          <div className="w-full lg:w-[70%] flex flex-col gap-8">
            <div>
              <h3 className="font-headline text-2xl text-primary mb-4 text-center lg:text-left">Major Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {aboutData.highlights.map((highlight, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 text-center">
                    <CardContent className="p-3 flex flex-col items-center justify-center gap-2">
                      <highlight.icon className="w-6 h-6 text-primary icon-glow" />
                      <p className="font-bold text-xs text-foreground text-center">{highlight.title}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
               <h3 className="font-headline text-2xl text-primary mb-4 text-center lg:text-left">Core Competencies</h3>
               <div className="space-y-4">
                {aboutData.skills.map((skillGroup, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20">
                    <CardHeader className="p-3">
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <skillGroup.icon className="w-6 h-6 text-primary icon-glow" />
                        {skillGroup.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 pt-0">
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
