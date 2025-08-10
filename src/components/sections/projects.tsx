
"use client";

import * as React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { projects } from '@/lib/data';
import Autoplay from "embla-carousel-autoplay";

const ProjectsSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section id="projects" className="scroll-section p-4 md:p-8">
      <div className="z-10 container mx-auto flex flex-col items-center justify-center">
        <h2 className="font-headline text-4xl md:text-5xl text-glow mb-12 text-center">Venture & Project Showcase</h2>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl"
        >
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.slug} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Link href={`/projects/${project.slug}`} className="block h-full">
                    <Card className="h-full flex flex-col bg-card/70 backdrop-blur-sm border-primary/20 overflow-hidden transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/20">
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
                        <p className="mt-4 text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Badge variant="secondary" className="w-full justify-center">{project.status}</Badge>
                      </CardFooter>
                    </Card>
                  </Link>
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
