import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const researchPapers = [
  {
    title: 'Generative Adversarial Networks for Synthetic Financial Time Series Generation',
    journal: 'Journal of Financial Data Science',
    year: 2023,
    link: '#',
    tags: ['GANs', 'Time Series', 'Synthetic Data', 'Quantitative Finance'],
    summary: 'This paper introduces a novel GAN architecture to generate realistic financial time series data, capturing key statistical properties like volatility clustering and fat tails. The synthetic data is validated for its use in backtesting trading strategies.',
  },
  {
    title: 'Sentiment Analysis of FOMC Statements for Predicting Market Reactions',
    journal: 'Conference on Neural Information Processing Systems (NeurIPS)',
    year: 2022,
    link: '#',
    tags: ['NLP', 'Sentiment Analysis', 'Federal Reserve', 'Algorithmic Trading'],
    summary: 'We developed a fine-tuned transformer model to analyze the sentiment of Federal Open Market Committee (FOMC) statements. The model provides a sentiment score that has predictive power for short-term equity market movements.',
  },
  {
    title: 'Decentralized Risk Management using Zero-Knowledge Proofs',
    journal: 'International Conference on Financial Cryptography and Data Security',
    year: 2021,
    link: '#',
    tags: ['DeFi', 'ZK-Proofs', 'Risk Management', 'Blockchain'],
    summary: 'A framework for managing counterparty risk in decentralized finance (DeFi) protocols without revealing sensitive portfolio information, leveraging the power of zero-knowledge proofs for privacy-preserving audits.',
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="scroll-section p-4 md:p-8">
      <div className="z-10 container mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="font-headline text-4xl md:text-5xl text-glow mb-8 text-center">Research & Publications</h2>
        <div className="w-full max-w-5xl h-[70vh] overflow-y-auto pr-4 space-y-6">
          {researchPapers.map((paper, index) => (
            <Card key={index} className="bg-card/70 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-foreground">{paper.title}</CardTitle>
                    <CardDescription className="text-muted-foreground mt-1">{paper.journal}, {paper.year}</CardDescription>
                  </div>
                  <Button asChild variant="outline" size="sm" className="ml-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <a href={paper.link} target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      PDF
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{paper.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {paper.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
