'use client';

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail,
  FileText,
  // Removing theme-related icons
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const mainPageNavLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

const otherPageNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentNavLinks, setCurrentNavLinks] = useState(mainPageNavLinks);
  const [currentHash, setCurrentHash] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize component
  useEffect(() => {
    setMounted(true);
    // Force dark theme on mount
    const root = document.documentElement;
    root.classList.remove('light');
    root.classList.add('dark');
  }, []);

  // Scroll effect for enhanced glass blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links effect
  useEffect(() => {
    setCurrentNavLinks(pathname === '/' ? mainPageNavLinks : otherPageNavLinks);
  }, [pathname]);

  // Hash tracking
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentHash(window.location.hash);
      const onHashChange = () => setCurrentHash(window.location.hash);
      window.addEventListener('hashchange', onHashChange);
      return () => window.removeEventListener('hashchange', onHashChange);
    }
  }, []);

  const handleLinkClick = useCallback((href: string) => {
    setIsMobileMenuOpen(false);
    if (pathname === '/' && href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname]);

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-200 ease-out",
      "glass-header border-b border-white/10",
      scrolled 
        ? "py-2 backdrop-blur-xl bg-white/5 dark:bg-black/5" 
        : "py-4 backdrop-blur-lg bg-white/10 dark:bg-black/10"
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 font-bold text-2xl text-foreground hover:text-primary transition-colors duration-200 group"
        >
          <div className="relative">
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Madhav Kataria
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-200 animate-pulse">
              Madhav Kataria
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {currentNavLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 relative group glass-button",
                "hover:text-primary hover:scale-105",
                (pathname === '/' && currentHash === link.href) || 
                (pathname !== '/' && pathname === link.href)
                  ? "text-primary bg-primary/10" 
                  : "text-foreground/80"
              )}
            >
              {link.label}
              <div className={cn(
                "absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-200",
                (pathname === '/' && currentHash === link.href) || 
                (pathname !== '/' && pathname === link.href) && "opacity-100"
              )} />
            </Link>
          ))}
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-3">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="glass-button border-white/20">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="glass border-white/20 backdrop-blur-xl">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-foreground">Navigation</h2>
                </div>
                
                <nav className="flex flex-col gap-3">
                  {currentNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className={cn(
                        "px-4 py-3 rounded-lg text-left font-medium transition-all duration-200 glass-button",
                        "hover:text-primary hover:bg-primary/5",
                        (pathname === '/' && currentHash === link.href) || 
                        (pathname !== '/' && pathname === link.href)
                          ? "text-primary bg-primary/10" 
                          : "text-foreground/80"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="border-t border-white/10 pt-6">
                  <h3 className="text-sm font-medium text-foreground/60 mb-3">External Links</h3>
                  <div className="flex flex-col gap-2">
                    <Link
                      href="https://github.com/madhavkataria"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-2 rounded-lg glass-button hover:text-primary transition-colors duration-200"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </Link>
                    <Link
                      href="https://linkedin.com/in/madhav-kataria"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-2 rounded-lg glass-button hover:text-primary transition-colors duration-200"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Link>
                    <Link
                      href="/pdf/CV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-2 rounded-lg glass-button hover:text-primary transition-colors duration-200"
                    >
                      <FileText className="h-4 w-4" />
                      Resume
                    </Link>
                    <Link
                      href="mailto:madhav.kataria@outlook.com"
                      className="flex items-center gap-3 px-4 py-2 rounded-lg glass-button hover:text-primary transition-colors duration-200"
                    >
                      <Mail className="h-4 w-4" />
                      Email
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

