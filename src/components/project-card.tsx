import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <div className="relative w-full h-48 sm:h-56 md:h-64">
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          data-ai-hint={project.imageHint}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl lg:text-2xl">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end space-x-3">
        {project.githubLink && (
          <Button variant="outline" size="sm" asChild>
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`GitHub repository for ${project.title}`}>
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
        )}
        {project.liveLink && (
          <Button variant="default" size="sm" asChild>
            <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label={`Live site for ${project.title}`}>
              <ExternalLink className="mr-2 h-4 w-4" /> Live Site
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
