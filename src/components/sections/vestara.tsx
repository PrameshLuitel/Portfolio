import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, Cpu, Target, Telescope, BrainCircuit } from 'lucide-react';

const capabilities = [
  { icon: CheckCircle, text: 'Regulatory Q&A' },
  { icon: Target, text: 'Market Analysis' },
  { icon: Telescope, text: 'Portfolio Optimization' },
  { icon: Cpu, text: 'Competitor Intelligence' },
];

const VestaraSection = () => {
  return (
    <section id="vestara" className="scroll-section p-4 md:p-8">
      <div className="z-10 container mx-auto flex flex-col items-center justify-center">
        <h2 className="font-headline text-4xl md:text-5xl text-glow mb-2 text-center">Flagship Project: Vestara GPT</h2>
        <p className="text-muted-foreground mb-8">The future of investment strategy, powered by proprietary AI.</p>
        <Card className="w-full max-w-5xl bg-card/70 backdrop-blur-sm border-primary/20">
          <Tabs defaultValue="vision" className="w-full">
            <CardHeader className="p-4 md:p-6">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
                <TabsTrigger value="vision" className="data-[state=active]:bg-accent data-[state=active]:text-foreground data-[state=active]:text-glow">Vision</TabsTrigger>
                <TabsTrigger value="features" className="data-[state=active]:bg-accent data-[state=active]:text-foreground data-[state=active]:text-glow">Core Features</TabsTrigger>
                <TabsTrigger value="role" className="data-[state=active]:bg-accent data-[state=active]:text-foreground data-[state=active]:text-glow">Founder Role</TabsTrigger>
                <TabsTrigger value="capabilities" className="data-[state=active]:bg-accent data-[state=active]:text-foreground data-[state=active]:text-glow">Capabilities</TabsTrigger>
                <TabsTrigger value="demo" className="data-[state=active]:bg-accent data-[state=active]:text-foreground data-[state=active]:text-glow">Demo</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent className="h-[50vh] overflow-y-auto px-4 md:px-6">
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
                      Our custom-built large language model has been meticulously trained on the intricacies of <span class='text-primary font-semibold'>SEBON</span> and <span class='text-primary font-semibold'>NEPSE</span> regulations, as well as the unique workflows of investment banking in Nepal. Using <span class='text-primary font-semibold'>Retrieval-Augmented Generation (RAG)</span>, Vestara GPT delivers precise, context-aware responses to any compliance, operational, or market-related query. This functions as a real-time regulatory and strategy assistant, providing authoritative accuracy for investment bankers, analysts, and compliance teams.
                    </p>
                 ` }}/>
                 <div dangerouslySetInnerHTML={{ __html: `
                    <h4>2. The AI Predictive Analytics Suite</h4>
                    <p>
                      A cutting-edge, multi-model AI prediction engine that covers the entire universe of NEPSE-listed stocks. It leverages a diverse portfolio of machine learning and deep learning architectures, including <span class='text-primary font-semibold'>LSTM</span>, <span class='text-primary font-semibold'>GRU</span>, <span class='text-primary font-semibold'>Transformers</span>, <span class='text-primary font-semibold'>XGBoost</span>, and <span class='text-primary font-semibold'>ensemble models</span>. By integrating <span class='text-primary font-semibold'>technical indicators</span>, <span class='text-primary font-semibold'>historical patterns</span>, and <span class='text-primary font-semibold'>sentiment data</span>, the engine produces <span class='text-primary font-semibold'>data-rich visualizations</span> and high-confidence forecasts. This suite is designed for both institutional analysis and academic research, augmenting human expertise for data-driven decision-making at scale.
                    </p>
                 ` }}/>
              </TabsContent>
              <TabsContent value="role" className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-primary">
                <h3>Founder & Lead Architect</h3>
                <p>
                  As the sole founder, I am responsible for the end-to-end creation of Vestara GPT. This encompasses architecting the proprietary Large Language Model (LLM), designing the multi-source data ingestion pipelines (market data, regulatory filings, news sentiment), developing the reinforcement learning from human feedback (RLHF) framework with finance experts, and engineering the secure, scalable cloud infrastructure. My role is a synthesis of quant, data scientist, and product visionary.
                </p>
              </TabsContent>
              <TabsContent value="capabilities">
                <h3 className="text-2xl font-headline text-primary mb-4">Projected Capabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-4">
                  {capabilities.map(cap => (
                    <div key={cap.text} className="flex items-center gap-4">
                      <cap.icon className="w-8 h-8 text-primary icon-glow shrink-0" />
                      <span className="text-lg">{cap.text}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="demo">
                <h3 className="text-2xl font-headline text-primary mb-4">Simulated Interaction</h3>
                <div className="font-code text-sm bg-black/50 p-4 rounded-lg border border-primary/30 h-full space-y-4">
                  <div>
                    <p><span className="text-primary">&gt; User:</span> "Simulate the impact of a 50 basis point interest rate hike on my tech portfolio, focusing on high-debt growth stocks."</p>
                    <p className="mt-2 pl-4"><span className="text-secondary">&gt; Vestara GPT:</span> "Analyzing... Simulation complete. Projected 12% portfolio dip over 2 weeks, with stocks like $XYZ and $ABC showing 25% vulnerability. Recommending hedging via inverse tech ETFs and shifting 15% allocation to low-volatility enterprise software. Full report generated."</p>
                  </div>
                  <div>
                    <p><span className="text-primary">&gt; User:</span> "Identify all private competitors to our portfolio company 'InnovateAI' that have raised Series B funding in the last 6 months."</p>
                    <p className="mt-2 pl-4"><span className="text-secondary">&gt; Vestara GPT:</span> "Cross-referencing global funding data... Identified three direct competitors: 'SynthMind', 'QuantumLogic', 'DataWeave'. Generating competitive analysis brief with key personnel, funding, and tech stack..."</p>
                  </div>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
          <div className="text-center text-xs text-muted-foreground p-4 border-t border-primary/20">
            Expected Rollout: Q4 2024 (Alpha), Q2 2025 (Full)
          </div>
        </Card>
      </div>
    </section>
  );
};

export default VestaraSection;
