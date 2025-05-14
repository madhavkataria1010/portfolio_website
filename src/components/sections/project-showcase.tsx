import ProjectCard from '@/components/project-card';
import { projects } from '@/lib/data';
import { SectionHeading } from '@/components/section-heading';

export default function ProjectShowcaseSection() {
  return (
    <section id="projects" className="py-12 md:py-20 scroll-mt-20">
      <SectionHeading>Software I’ve Built</SectionHeading>
      <p className="mt-4 mb-10 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
        Here are some of the projects I'm proud to have worked on. Explore them to see my skills in action.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
