
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
    <section id="research" className="scroll-section p-4 md:p-8 flex items-center justify-center">
      <div className="z-10 container mx-auto flex flex-col items-center justify-center w-full max-w-4xl">
        <h2 className="font-headline text-3xl md:text-4xl text-glow mb-4 text-center">Research & Publications</h2>
        <div className="w-full space-y-3">
          {researchPapers.map((paper, index) => (
            <Card key={index} className="bg-card/70 backdrop-blur-sm border-accent/20">
              <CardHeader className="p-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                  <div className="flex-grow">
                    <CardTitle className="text-base md:text-lg text-foreground">{paper.title}</CardTitle>
                    <CardDescription className="text-muted-foreground mt-1 text-xs md:text-sm">{paper.publication}</CardDescription>
                  </div>
                  <Button asChild variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed self-start sm:self-auto" disabled={!paper.isPublished}>
                    <a href={paper.isPublished ? paper.link : undefined} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {paper.isPublished ? 'View Paper' : 'Pending'}
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-muted-foreground mb-3 text-xs md:text-sm">{paper.summary}</p>
                <div className="flex flex-wrap gap-1.5">
                  {paper.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-3">
          <Button variant="outline" className="bg-card/70 backdrop-blur-sm border-dashed border-accent/50 text-accent/80 cursor-not-allowed hover:bg-accent/10 hover:text-accent transition-colors">
            <Plus className="mr-2 h-4 w-4" />
            More Research Incoming...
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
