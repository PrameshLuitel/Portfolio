
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RocketLaunchAnimation from '@/components/effects/rocket-launch-animation';

const VestaraSection = () => {
  return (
    <section id="vestara" className="scroll-section p-4 md:p-8">
      <div className="z-10 container mx-auto flex flex-col items-center justify-center">
        <h2 className="font-headline text-4xl md:text-5xl text-glow mb-2 text-center">Flagship Project: Vestara GPT</h2>
        <p className="text-muted-foreground mb-8">The future of investment strategy, powered by proprietary AI.</p>
        <Card className="w-full max-w-5xl bg-card/70 backdrop-blur-sm border-primary/20">
          <Tabs defaultValue="vision" className="w-full">
            <CardHeader className="p-4 md:p-6">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
                <TabsTrigger value="vision" className="data-[state=active]:bg-accent data-[state=active]:text-foreground data-[state=active]:text-glow">Vision</TabsTrigger>
                <TabsTrigger value="features" className="data-[state=active]:bg-accent data-[state=active]:text-foreground data-[state=active]:text-glow">Core Features</TabsTrigger>
                <TabsTrigger value="role" className="data-[state=active]:bg-accent data-[state=active]:text-foreground data-[state=active]:text-glow">Founder Role</TabsTrigger>
                <TabsTrigger value="launch" className="data-[state=active]:bg-accent data-[state=active]:text-foreground data-[state=active]:text-glow">Launch</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent className="h-[55vh] overflow-y-auto px-4 md:px-6">
              <TabsContent value="vision" className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-primary">
                <h3>Vision & Market Gap</h3>
                <p>
                  Project Vestara is an advanced AI-powered investment intelligence platform designed to redefine how financial professionals in Nepal access, interpret, and act on critical regulatory and market data. By unifying a specialized large language model with predictive market analytics, Vestara bridges the gap between deep regulatory knowledge and actionable investment insights. The result is a powerful tool that enables decision-makers to operate with unparalleled speed, precision, and confidence.
                </p>
              </TabsContent>
              <TabsContent value="features" className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-primary space-y-4">
                 <div dangerouslySetInnerHTML={{ __html: `
                    <h4>1. Vestara GPT: The Domain-Trained AI Assistant</h4>
                    <p>
                      Our custom-built large language model has been meticulously trained on the intricacies of <span class='text-primary font-normal'>SEBON</span> and <span class='text-primary font-normal'>NEPSE</span> regulations, as well as the unique workflows of investment banking in Nepal. Using <span class='text-primary font-normal'>Retrieval-Augmented Generation (RAG)</span>, Vestara GPT delivers precise, context-aware responses to any compliance, operational, or market-related query. This functions as a real-time regulatory and strategy assistant, an authoritative source of truth for investment bankers, analysts, and compliance teams.
                    </p>
                 ` }}/>
                 <div dangerouslySetInnerHTML={{ __html: `
                    <h4>2. The AI Predictive Analytics Suite</h4>
                    <p>
                      A cutting-edge, multi-model AI prediction engine that covers the entire universe of NEPSE-listed stocks. It leverages a diverse portfolio of machine learning and deep learning architectures, including <span class='text-primary font-normal'>LSTM</span>, <span class='text-primary font-normal'>GRU</span>, <span class='text-primary font-normal'>Transformers</span>, <span class='text-primary font-normal'>XGBoost</span>, and <span class='text-primary font-normal'>ensemble models</span>. By integrating <span class='text-primary font-normal'>technical indicators</span>, <span class='text-primary font-normal'>historical patterns</span>, and <span class='text-primary font-normal'>sentiment data</span>, the engine produces <span class='text-primary font-normal'>data-rich visualizations</span> and high-confidence forecasts. This suite is designed for both institutional analysis and academic research, augmenting human expertise for data-driven decision-making at scale.
                    </p>
                 ` }}/>
              </TabsContent>
              <TabsContent value="role" className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-primary">
                <h3>Founder & Lead Architect</h3>
                <p>
                  As the Founder and Lead Architect of Project Vestara, my role is a culmination of my academic research and hands-on experience in the financial sector. I founded this venture with a clear objective: to modernize investment intelligence in emerging markets by bridging the gap between deep regulatory knowledge and actionable insights.
                </p>
                <p>
                  My work isn't just about building a product; it's about translating my research into a scalable, real-world application. My published papers on sentiment-enhanced stock prediction and AI-driven insights for NEPSE are not abstract academic exercises, but the very foundation of Vestara's predictive framework. I personally architected the proprietary Large Language Model (LLM) and its multi-source data ingestion pipelines, and pioneered the reinforcement learning framework with finance experts.
                </p>
                 <p>
                  The insights and skills that power Vestara's vision were honed through my experience pioneering AI-first solutions and building tools like 'Portfolio Pulse,'. At Global Ime Capital Limited I gained firsthand insight into the operational bottlenecks Vestara is designed to solve. This unique blend of academic rigor, technical execution, and strategic foresight is what defines my role and the future of Vestara.
                </p>
              </TabsContent>
              <TabsContent value="launch" className="grid grid-cols-1 md:grid-cols-2 items-center h-full text-center md:text-left gap-8">
                 <div className="z-10">
                    <h3 className="font-headline text-2xl text-primary mb-4">Project Launch</h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto md:mx-0">
                        The platform is currently under active development. The official launch is planned for Q3 2025. Stay tuned for updates.
                    </p>
                    <Button variant="outline" size="lg" disabled>
                        <Rocket className="mr-2 h-5 w-5" />
                        Launch Vestara (Pending)
                    </Button>
                 </div>
                 <div className="relative h-full w-full">
                    <RocketLaunchAnimation />
                 </div>
              </TabsContent>
            </CardContent>
          </Tabs>
          <div className="flex items-center justify-between text-xs text-muted-foreground p-4 border-t border-primary/20">
            <span>Expected Rollout: Q3 2025 (Full)</span>
            <Button variant="outline" size="sm" disabled>
              <Rocket className="mr-2 h-4 w-4" />
              Launch Vestara (Pending)
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default VestaraSection;
