import { Github, Instagram, Linkedin, Mail, Twitter, Heart } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative mt-16">
      {/* Glass morphism footer container */}
      <div className="glass-header border-t border-white/20">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 py-12 sm:flex-row">
          {/* Copyright with enhanced styling */}
          <div className="flex items-center gap-2 text-sm text-white/80">
            <span>&copy; {new Date().getFullYear()} Madhav Kataria.</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-400 animate-pulse" fill="currentColor" /> and glass
            </span>
          </div>
          
          {/* Social links with glass styling */}
          <div className="flex items-center space-x-4">
            <Link 
              href="https://github.com/madhavkataria1010" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub Profile"
              className="group p-3 glass-button rounded-full transition-all duration-300 hover:scale-110"
            >
              <Github className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
            </Link>
            
            <Link 
              href="https://www.linkedin.com/in/madhavkataria/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn Profile"
              className="group p-3 glass-button rounded-full transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
            </Link>
            
            <Link 
              href="https://x.com/madhav_kataria" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Twitter Profile"
              className="group p-3 glass-button rounded-full transition-all duration-300 hover:scale-110"
            >
              <Twitter className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
            </Link>
            
            <Link 
              href="https://instagram.com/madhavkataria_" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram Profile"
              className="group p-3 glass-button rounded-full transition-all duration-300 hover:scale-110"
            >
              <Instagram className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="h-8 bg-gradient-to-t from-black/20 to-transparent" />
    </footer>
  );
}
