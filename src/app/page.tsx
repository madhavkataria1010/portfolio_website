import AboutMeSection from '@/components/sections/about-me';
import ProjectShowcaseSection from '@/components/sections/project-showcase';
import ContactFormSection from '@/components/sections/contact-form-section';
import ResearchSection from '@/components/sections/research-section';
import { Separator } from '@/components/ui/separator';
import HeroSection from '@/components/sections/hero-section';
import WhatAmIUpToSection from '@/components/sections/what-am-i-up-to';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <HeroSection />
      <AboutMeSection />
      <Separator className="my-8 md:my-12" />
      <WhatAmIUpToSection />
      <Separator className="my-8 md:my-12" />
      <ProjectShowcaseSection />
        <Button asChild>
          <Link href="/projects">View All Projects</Link>
        </Button>
      <Separator className="my-8 md:my-12" />
      <ResearchSection />
    </div>
  );
}
