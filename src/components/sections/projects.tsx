
"use client";

import * as React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/lib/data';
import Autoplay from "embla-carousel-autoplay";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { Github, Link as LinkIcon } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <div className="p-1 h-full">
    <Dialog>
      <DialogTrigger asChild>
        <div className="block h-full cursor-pointer">
          <Card className="h-full flex flex-col bg-card/70 backdrop-blur-sm border-border overflow-hidden transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/20">
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
                className="rounded-md border border-border object-cover w-full h-48"
                data-ai-hint={project.image.hint}
              />
              <p className="mt-4 text-sm text-muted-foreground line-clamp-3">{project.description}</p>
            </CardContent>
            <CardFooter>
              <Badge variant="secondary" className="w-full justify-center">{project.status}</Badge>
            </CardFooter>
          </Card>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-card/80 backdrop-blur-lg p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-headline text-primary">{project.title}</DialogTitle>
          <DialogDescription>{project.status}</DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[80vh]">
          <div className="grid gap-4 p-6">
            <Image
                src={project.image.src}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-md border border-border object-cover w-full h-auto aspect-[4/3]"
                data-ai-hint={project.image.hint}
            />
            <p className="text-sm text-muted-foreground">{project.longDescription}</p>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <Badge key={tech} variant="outline">{tech}</Badge>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
                {project.liveLink && (
                    <Button asChild variant="default" className="text-glow">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <LinkIcon className="mr-2 h-4 w-4" />
                            Live Demo
                        </a>
                    </Button>
                )}
                {project.githubLink && (
                    <Button asChild variant="outline">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                        </a>
                    </Button>
                )}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  </div>
);


const ProjectsSection = () => {
  const isMobile = useIsMobile();
  
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="projects" className="scroll-section p-4 md:p-8">
      <div className="z-10 container mx-auto flex flex-col items-center justify-center">
        <h2 className="font-headline text-4xl md:text-5xl text-glow mb-12 text-center text-primary">Venture & Project Showcase</h2>
        
        {isMobile ? (
          <div className="w-full max-w-sm space-y-4">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <Carousel
            plugins={[autoplayPlugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            onMouseEnter={autoplayPlugin.current.stop}
            onMouseLeave={() => autoplayPlugin.current.play()}
            className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl"
          >
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.slug} className="md:basis-1/2 lg:basis-1/3">
                  <ProjectCard project={project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
