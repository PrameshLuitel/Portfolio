import { FileText, Download, Plus, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const researchPapers = [
  {
    title: 'Sentiment-Enhanced Stock Price Prediction in Nepalese Small-Cap Equities Using Natural Language Processing',
    publication: 'Under Peer Review (Journal of Himalaya College of Engineering)',
    link: '#',
    tags: ['NLP', 'Sentiment Analysis', 'NEPSE', 'Small-Cap Equities', 'Peer-Reviewed'],
    summary: 'Developed a hybrid model combining NLP and quantitative market indicators to predict price movements in illiquid, small-cap stocks. This research pioneered NLP-driven financial analysis in the Nepalese capital market by converting qualitative sentiment data into structured features, demonstrating superior performance over traditional models in low-volume environments.',
    isPublished: false,
  },
  {
    title: 'Market Oscillations and Predictive Analytics: AI-Driven Insights into Nepalese Stock Market’s Indices and its Sub-Indices',
    publication: "Published on SSRN | Top Downloads in Emerging & Asian Markets",
    link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5030130',
    tags: ['Predictive Analytics', 'LSTM', 'Time-Series Forecasting', 'NEPSE', 'SSRN'],
    summary: "Conducted an in-depth analysis of the NEPSE index using LSTM networks and advanced technical indicators. This work engineered a robust forecasting framework, highlighting the applicability of deep learning in structurally inefficient markets where traditional financial models often underperform.",
    isPublished: true,
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="scroll-section p-4 md:p-8">
      <div className="z-10 container mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="font-headline text-4xl md:text-5xl text-glow mb-8 text-center">Research & Publications</h2>
        <div className="w-full max-w-5xl flex flex-col">
          <div className="overflow-y-auto pr-4 space-y-6 flex-grow max-h-[70vh]">
            {researchPapers.map((paper, index) => (
              <Card key={index} className="bg-card/70 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div className="flex-grow">
                      <CardTitle className="text-xl text-foreground">{paper.title}</CardTitle>
                      <CardDescription className="text-muted-foreground mt-1">{paper.publication}</CardDescription>
                    </div>
                    <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed self-start sm:self-auto" disabled={!paper.isPublished}>
                      <a href={paper.isPublished ? paper.link : undefined} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {paper.isPublished ? 'View Paper' : 'Pending'}
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
          <div className="text-center mt-6">
            <Button variant="outline" className="bg-card/70 backdrop-blur-sm border-dashed border-primary/50 text-primary/80 cursor-not-allowed hover:bg-primary/10 hover:text-primary transition-colors">
              <Plus className="mr-2 h-4 w-4" />
              More Research Incoming...
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
