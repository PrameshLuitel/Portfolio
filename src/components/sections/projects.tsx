import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Project Sentinel: Algorithmic Risk Arbiter',
    description: 'A real-time, multi-factor risk model that stress-tests portfolios against crisis scenarios, providing predictive volatility alerts.',
    image: { src: 'https://placehold.co/400x300', hint: 'secure server' },
    status: 'Acquired by Top-Tier Quant Fund',
  },
  {
    title: 'ThesisDAO: Decentralized Research Funding',
    description: 'A DAO on Ethereum that allows for peer-to-peer funding of research proposals, governed by tokenized reputation.',
    image: { src: 'https://placehold.co/400x300', hint: 'blockchain network' },
    status: 'Live on Mainnet',
  },
  {
    title: 'AlphaStream: LLM-Powered Idea Generation',
    description: 'A proprietary LLM that surfaces high-alpha trade ideas by analyzing millions of unstructured data points in real-time.',
    image: { src: 'https://placehold.co/400x300', hint: 'data stream' },
    status: 'In-house Production',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-section p-4 md:p-8">
      <div className="z-10 container mx-auto flex flex-col items-center justify-center">
        <h2 className="font-headline text-4xl md:text-5xl text-glow mb-12 text-center">Venture & Research Showcase</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col bg-card/70 backdrop-blur-sm border-primary/20 overflow-hidden">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span className="text-lg font-headline">{project.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <Image
                        src={project.image.src}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="rounded-md border border-primary/20 object-cover w-full h-48"
                        data-ai-hint={project.image.hint}
                      />
                      <p className="mt-4 text-sm text-muted-foreground">{project.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Badge variant="secondary" className="w-full justify-center">{project.status}</Badge>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectsSection;
