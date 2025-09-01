import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Bot, BrainCircuit, LineChart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import DotGridBackground from '@/components/dot-grid-background';

const features = [
  {
    icon: Bot,
    title: 'Vestara GPT: The Domain-Trained AI Assistant',
    description: 'A custom-built large language model meticulously trained on SEBON and NEPSE regulations. Using Retrieval-Augmented Generation (RAG), it delivers precise, context-aware responses to any compliance, operational, or market-related query, acting as a real-time regulatory and strategy assistant.',
  },
  {
    icon: LineChart,
    title: 'AI Predictive Analytics Suite',
    description: 'A cutting-edge, multi-model AI prediction engine covering all NEPSE-listed stocks. It leverages LSTM, GRU, Transformers, and XGBoost to integrate technical indicators, historical patterns, and sentiment data, producing data-rich visualizations and high-confidence forecasts.',
  },
  {
    icon: BrainCircuit,
    title: 'Founder-Led Vision & Architecture',
    description: "As the Founder and Lead Architect, Pramesh Luitel translates academic research into a scalable, real-world application. He personally architected the proprietary LLM, its data ingestion pipelines, and the reinforcement learning framework, bridging the gap between deep regulatory knowledge and actionable insights.",
  }
];

export default function VestaraPage() {
  return (
    <>
      <DotGridBackground />
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4 relative z-10">
        <div className="absolute top-4 left-4">
          <Button asChild variant="outline">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Portfolio
            </Link>
          </Button>
        </div>

        <header className="text-center mb-12">
          <Image src="/images/vestara-logo.png" alt="Vestara Logo" width={100} height={100} className="mx-auto mb-4" data-ai-hint="ai brain" />
          <h1 className="font-headline text-5xl md:text-7xl text-glow text-primary">Vestara GPT</h1>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            AI-Powered Investment Intelligence for Nepal's Capital Markets
          </p>
        </header>

        <main className="w-full max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/70 backdrop-blur-sm border-border">
                <CardHeader className="flex flex-row items-center gap-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>

        <footer className="text-center mt-12">
           <Button variant="default" size="lg" disabled>
              Launch Vestara (Q3 2025)
           </Button>
        </footer>
      </div>
    </>
  );
}
