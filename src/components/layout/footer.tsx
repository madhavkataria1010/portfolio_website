import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Madhav Kataria. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
              <Link href="mailto:b23ch1025@iitj.ac.in" aria-label="Email Me">
                <Mail className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://github.com/madhavkataria1010" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Github className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://www.linkedin.com/in/madhavkataria/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Linkedin className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://x.com/madhav_kataria" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
                <Twitter className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://instagram.com/madhavkataria_" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
                <Instagram className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
        </div>
      </div>
    </footer>
  );
}
