import Image from 'next/image';
import { Github, Linkedin, Mail, FileText, Twitter, Instagram, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/section-heading';

export default function AboutMeSection() {
  return (
    <section id="about" className="py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-6">
        {/* Glass background overlay */}
        <div className="relative glass-card p-8 md:p-12">
          <SectionHeading>About Me</SectionHeading>
          
          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16 items-start">
            {/* Profile image column */}
            <div className="md:col-span-1 flex flex-col items-center">
              <div className="md:-mt-8 flex flex-col items-center">
                {/* Enhanced profile image with glass frame */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative h-64 w-64 md:h-80 md:w-80 glass-card overflow-hidden">
                    <Image
                      src="/images/others/gibli.jpeg"
                      alt="Profile Photo"
                      fill
                      className="object-cover rounded-xl"
                      data-ai-hint="professional portrait"
                    />
                  </div>
                  {/* Floating sparkle icon */}
                  <div className="absolute -top-4 -right-4 p-2 glass-card rounded-full animate-float">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                </div>
                
                {/* Social links with glass styling */}
                <div className="mt-6 flex space-x-4">
                  <Link 
                    href="https://github.com/madhavkataria1010" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="GitHub Profile"
                    className="p-3 glass-button rounded-full hover:scale-110 transition-all duration-300"
                  >
                    <Github className="h-5 w-5 text-white/70 hover:text-white transition-colors" />
                  </Link>
                  <Link 
                    href="https://www.linkedin.com/in/madhavkataria/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="LinkedIn Profile"
                    className="p-3 glass-button rounded-full hover:scale-110 transition-all duration-300"
                  >
                    <Linkedin className="h-5 w-5 text-white/70 hover:text-white transition-colors" />
                  </Link>
                  <Link 
                    href="https://x.com/madhav_kataria" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Twitter Profile"
                    className="p-3 glass-button rounded-full hover:scale-110 transition-all duration-300"
                  >
                    <Twitter className="h-5 w-5 text-white/70 hover:text-white transition-colors" />
                  </Link>
                  <Link 
                    href="https://instagram.com/madhavkataria_" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Instagram Profile"
                    className="p-3 glass-button rounded-full hover:scale-110 transition-all duration-300"
                  >
                    <Instagram className="h-5 w-5 text-white/70 hover:text-white transition-colors" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Content column with enhanced styling */}
            <div className="md:col-span-2 text-center md:text-left">
              <div className="space-y-6">
                <p className="text-lg text-white/80 leading-relaxed">
                  Hi! I'm <span className="font-semibold text-blue-300">Madhav Kataria</span>, a passionate software engineer and AI enthusiast. Pre-Final year undergraduate at <span className="font-semibold text-purple-300">IIT Jodhpur</span>, with a strong interest in machine learning, MLOps, and building impactful tech products. I love working at the intersection of software engineering and AI, where I can turn cutting-edge research into practical, scalable solutions.
                </p>
                
                <p className="text-lg text-white/75 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book. 
                  I'm always eager to connect with like-minded individuals and collaborate on exciting projects.
                </p>
              </div>
              
              {/* Action buttons with enhanced styling */}
              <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
                <Button asChild variant="default" size="lg">
                  <Link href="/contact">
                    <Mail className="mr-2 h-5 w-5" /> Contact Me
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/pdf/CV.pdf" target="_blank" rel="noopener noreferrer">
                     <FileText className="mr-2 h-5 w-5" /> View Resume
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Floating decorative elements */}
          <div className="absolute top-8 right-8 w-16 h-16 glass rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-8 left-8 w-12 h-12 glass rounded-full opacity-15 animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </div>
    </section>
  );
}
