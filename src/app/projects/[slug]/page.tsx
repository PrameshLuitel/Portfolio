import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen text-foreground">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="outline" className="mb-8">
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          <Card className="bg-card/70 backdrop-blur-sm border-primary/20 overflow-hidden">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <CardTitle className="font-headline text-4xl text-glow text-primary">{project.title}</CardTitle>
                <Badge variant="secondary" className="text-base mt-2 md:mt-0 whitespace-nowrap">{project.status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Image
                src={project.image.src.replace('400x300', '800x450')}
                alt={project.title}
                width={800}
                height={450}
                className="rounded-lg border border-primary/20 object-cover w-full mb-8"
                data-ai-hint={project.image.hint}
              />
              <div className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-primary">
                <p>{project.description}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
