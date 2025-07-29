import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink, Sparkles } from 'lucide-react';
import type { Project } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full relative group hover:scale-[1.02] transition-all duration-200">
      {/* Project image with enhanced glass overlay */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          data-ai-hint={project.imageHint}
        />
        {/* Enhanced glass overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-200" />
        
        {/* Floating rank indicator with glass styling */}
        <div className="absolute top-4 right-4 glass p-2 border border-white/30 shadow-lg">
          <Sparkles className="h-4 w-4 text-primary animate-pulse" />
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl lg:text-2xl group-hover:text-blue-200 transition-colors duration-200">
          {project.title}
        </CardTitle>
        
        {/* Tags with enhanced spacing and staggered animations */}
        <div className="flex flex-wrap gap-2 pt-3">
          {project.tags.map((tag, index) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="text-xs opacity-0 animate-in fade-in slide-in-from-bottom-2"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <CardDescription className="text-sm leading-relaxed text-white/85">
          {project.description}
        </CardDescription>
      </CardContent>
      
      <CardFooter className="flex justify-end space-x-3 pt-6">
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
      
      {/* Enhanced ambient glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
    </Card>
  );
}
