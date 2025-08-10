import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Portfolio Pulse',
    description: 'An internal MIS system I built end-to-end for Global IME Capital Limited. It processes raw Excel portfolio data in-browser, generating interactive dashboards for real-time performance, allocation, and gain/loss analysis. This replaced a manual process, bringing unprecedented clarity and speed to executive portfolio supervision.',
    image: { src: 'https://placehold.co/400x300', hint: 'data analytics dashboard' },
    status: 'Successfully Deployed',
  },
  {
    title: 'MeroShare Automation',
    description: "Automated MeroShare's operations processes like applying for IPOs, completing eDIS, and creating verification workflows for these critical tasks.",
    image: { src: 'https://placehold.co/400x300', hint: 'automation robot' },
    status: 'Personal Project',
  },
  {
    title: 'Automated Form Fillers For PMS Clients',
    description: 'Developed a custom script to automate the tedious process of filling out Portfolio Management Services (PMS) forms, significantly reducing manual data entry and minimizing errors for clients.',
    image: { src: 'https://placehold.co/400x300', hint: 'digital form' },
    status: 'Utility Script',
  },
  {
    title: 'Project Vestara',
    description: 'My flagship venture, a proprietary AI platform designed to become the central nervous system for modern investment firms by transforming market noise into a clear signal of alpha.',
    image: { src: 'https://placehold.co/400x300', hint: 'ai brain' },
    status: 'In Development',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-section p-4 md:p-8">
      <div className="z-10 container mx-auto flex flex-col items-center justify-center">
        <h2 className="font-headline text-4xl md:text-5xl text-glow mb-12 text-center">Venture & Project Showcase</h2>
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
