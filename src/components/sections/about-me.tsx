import Image from 'next/image';
import { Github, Linkedin, Mail, FileText, Twitter, Instagram, XIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/section-heading';

export default function AboutMeSection() {
  return (
    <section id="about" className="py-12 md:py-20 bg-secondary/30 rounded-lg scroll-mt-20">
      <div className="container mx-auto px-4">
        <SectionHeading>About Me</SectionHeading>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12 items-start">
          <div className="md:col-span-1 flex flex-col items-center">
            {/* lift the image column to align with the SectionHeading */}
            <div className="md:-mt-20 flex flex-col items-center">
              <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-lg overflow-hidden shadow-xl border-4 border-card">
                <Image
                  src="/images/others/gibli.jpeg"
                  // src="/images/others/profile.jpeg"
                  alt="Profile Photo"
                  fill
                  className="rounded-lg object-cover"
                  data-ai-hint="professional portrait"
                />
              </div>
              <div className="mt-4 flex space-x-6">
                {/* <Link href="mailto:b23ch1025@iitj.ac.in" aria-label="Email Me">
                  <Mail className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors" />
                </Link> */}
                <Link href="https://github.com/madhavkataria1010" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <Github className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="https://www.linkedin.com/in/madhavkataria/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <Linkedin className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="https://x.com/madhav_kataria" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
                  <Twitter className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="https://instagram.com/madhavkataria_" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
                  <Instagram className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Hi! I'm am Madhav Kataria, a passionate software engineer and AI enthusiast. Pre-Final year undergraduate at IIT Jodhpur, with a strong interest in machine learning, MLOps, and building impactful tech products. I love working at the intersection of software engineering and AI, where I can turn cutting-edge research into practical, scalable solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book. 
              I'm always eager to connect with like-minded individuals and collaborate on exciting projects.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button asChild variant="default">
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" /> Contact
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/pdf/CV.pdf" target="_blank" rel="noopener noreferrer">
                   <FileText className="mr-2 h-5 w-5" /> View CV
                </Link>
              </Button>
            </div>
            {/* Social icons moved to left column */}
          </div>
        </div>
      </div>
    </section>
  );
}
