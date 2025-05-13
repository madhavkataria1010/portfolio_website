import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Madhav Kataria. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/madhavkataria1010" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="https://linkedin.com/in/madhavkataria" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="mailto:b23ch1025@iitj.ac.in" aria-label="Email">
            <Mail className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
