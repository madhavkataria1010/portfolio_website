import ProjectCard from '@/components/project-card';
import { projects } from '@/lib/data';
import { SectionHeading } from '@/components/section-heading';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ProjectsPage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <section id="all-projects" className="py-12 md:py-20 scroll-mt-20">
        <SectionHeading>All Projects</SectionHeading>
        <p className="mt-4 mb-10 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
          A complete list of my projects and experiments. Feel free to explore.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
