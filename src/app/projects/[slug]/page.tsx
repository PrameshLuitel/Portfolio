
import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github, CheckCircle } from 'lucide-react';

type PageProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ProjectPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen text-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <Button asChild variant="outline" className="mb-8">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Projects
            </Link>
          </Button>

          <main className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="bg-card/70 backdrop-blur-sm border-primary/20 overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <CardTitle className="font-headline text-4xl text-glow text-primary">{project.title}</CardTitle>
                    <Badge variant="secondary" className="text-base mt-2 sm:mt-0 whitespace-nowrap self-start">{project.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Image
                    src={project.image.src}
                    alt={project.title}
                    width={800}
                    height={450}
                    className="rounded-lg border border-primary/20 object-cover w-full mb-8"
                    data-ai-hint={project.image.hint}
                  />
                  <div className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-primary">
                    <p>{project.longDescription}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <aside className="space-y-8">
              {(project.liveLink || project.githubLink) && (
                <Card className="bg-card/70 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Links</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col space-y-3">
                    {project.liveLink && (
                      <Button asChild variant="outline">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Live Project
                        </a>
                      </Button>
                    )}
                    {project.githubLink && (
                      <Button asChild variant="outline">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View on GitHub
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              )}

              {project.features && project.features.length > 0 && (
                <Card className="bg-card/70 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      {project.features.map(feature => (
                        <li key={feature} className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {project.technologies && project.technologies.length > 0 && (
                <Card className="bg-card/70 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Technologies Used</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </aside>
          </main>
        </div>
      </div>
    </div>
  );
}
