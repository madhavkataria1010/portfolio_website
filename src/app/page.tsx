
import AboutMeSection from '@/components/sections/about-me';
import ProjectShowcaseSection from '@/components/sections/project-showcase';
import ContactFormSection from '@/components/sections/contact-form-section';
import ResearchSection from '@/components/sections/research-section';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <section id="hero" className="text-center py-12 md:py-20 scroll-mt-20">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">Hello, I'm </span>
          <span className="block text-primary">Madhav Kataria.</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl md:text-2xl">
          A passionate Software Developer transforming ideas into innovative web solutions. Welcome to my digital space.
        </p>
      </section>
      
      <AboutMeSection />
      <Separator className="my-8 md:my-12" />
      <ProjectShowcaseSection />
      <Separator className="my-8 md:my-12" />
      <ResearchSection />
      <Separator className="my-8 md:my-12" />
      <ContactFormSection />
    </div>
  );
}
