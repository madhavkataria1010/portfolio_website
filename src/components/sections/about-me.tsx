import Image from 'next/image';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/section-heading';

export default function AboutMeSection() {
  return (
    <section id="about" className="py-12 md:py-20 bg-secondary/30 rounded-lg scroll-mt-20">
      <div className="container mx-auto px-4">
        <SectionHeading>About Me</SectionHeading>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative h-48 w-48 md:h-64 md:w-64 rounded-full overflow-hidden shadow-xl border-4 border-card">
              <Image
                src="https://picsum.photos/seed/profile/300/300"
                alt="Profile Photo"
                layout="fill"
                objectFit="cover"
                data-ai-hint="professional portrait"
                className="rounded-full"
              />
            </div>
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Hello! I'm a passionate software developer with a knack for creating elegant and efficient solutions. 
              My journey in tech has been driven by a love for learning and a desire to build impactful applications. 
              I specialize in full-stack development, with a strong focus on modern JavaScript frameworks like Next.js and React.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book. 
              I'm always eager to connect with like-minded individuals and collaborate on exciting projects.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button asChild variant="default">
                <Link href="#contact">
                  <Mail className="mr-2 h-5 w-5" /> Get in Touch
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                   <FileText className="mr-2 h-5 w-5" /> View Resume
                </Link>
              </Button>
            </div>
             <div className="mt-8 flex justify-center md:justify-start space-x-6">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Github className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Linkedin className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="mailto:your.email@example.com" aria-label="Email Me">
                <Mail className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
