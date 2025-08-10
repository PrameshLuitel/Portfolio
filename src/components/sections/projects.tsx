import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const projects = [
  {
    title: 'Project Sentinel: Algorithmic Risk Arbiter',
    pain: 'Hedge funds bleed capital from unforeseen black swan events and volatile market shifts.',
    solution: 'A real-time, multi-factor risk model that stress-tests portfolios against historical and synthetic crisis scenarios, providing predictive volatility alerts.',
    imagePain: { src: 'https://placehold.co/400x300', hint: 'financial crisis' },
    imageSolution: { src: 'https://placehold.co/400x300', hint: 'secure server' },
    metrics: ['15% reduction in portfolio drawdown', '98% accuracy in back-tested crisis prediction'],
    testimonial: '"Sentinel isn\'t just an insurance policy; it\'s a crystal ball for market turmoil." - CIO, Quantum Leap Capital',
    status: 'Acquired by Top-Tier Quant Fund',
  },
  {
    title: 'ThesisDAO: Decentralized Research Funding',
    pain: 'Groundbreaking academic research is often stifled by slow, bureaucratic grant-funding cycles.',
    solution: 'A decentralized autonomous organization (DAO) on Ethereum that allows for peer-to-peer funding of research proposals, governed by tokenized reputation.',
    imagePain: { src: 'https://placehold.co/400x300', hint: 'old library' },
    imageSolution: { src: 'https://placehold.co/400x300', hint: 'blockchain network' },
    metrics: ['$2M+ in research funded', 'Avg. funding time reduced by 80%'],
    testimonial: '"ThesisDAO is the future of academic collaboration. It has accelerated our lab\'s discovery process tenfold." - Head of Research, BioInnovate Labs',
    status: 'Live on Mainnet | Seeking collaborators',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-section p-4 md:p-8">
      <div className="z-10 container mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="font-headline text-4xl md:text-5xl text-glow mb-8 text-center">Venture & Research Showcase</h2>
        <div className="w-full max-w-4xl h-[70vh] overflow-y-auto pr-4">
          <Accordion type="single" collapsible className="w-full">
            {projects.map((project, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card/70 backdrop-blur-sm border-primary/20 rounded-lg mb-4">
                <AccordionTrigger className="p-6 text-left font-headline text-xl hover:no-underline">
                  <div className="flex-grow text-left">{project.title}</div>
                  <Badge variant="secondary" className="ml-4 flex-shrink-0">{project.status}</Badge>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    <div>
                      <h4 className="font-bold text-primary mb-2">The Problem</h4>
                      <p className="text-muted-foreground mb-4">{project.pain}</p>
                      <Image src={project.imagePain.src} alt="Problem visual" width={400} height={300} className="rounded-lg border border-primary/20" data-ai-hint={project.imagePain.hint} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-2">The Solution</h4>
                      <p className="text-muted-foreground mb-4">{project.solution}</p>
                      <Image src={project.imageSolution.src} alt="Solution visual" width={400} height={300} className="rounded-lg border border-primary/20" data-ai-hint={project.imageSolution.hint} />
                    </div>
                  </div>
                  <div className="mt-6 border-t border-primary/20 pt-6">
                    <h4 className="font-bold text-primary mb-2">Key Metrics</h4>
                    <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                      {project.metrics.map((metric, i) => <li key={i}>{metric}</li>)}
                    </ul>
                    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-6">
                      {project.testimonial}
                    </blockquote>
                    <Button variant="outline" className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Request Deep Dive
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;