'use client';

import Link from 'next/link';
import { Code2, Menu, Moon, Sun } from 'lucide-react'; // Using Code2 as a placeholder for a generic app icon
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState, useEffect } from 'react';

const mainPageNavLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const otherPageNavLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#research', label: 'Research' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
];


export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentNavLinks, setCurrentNavLinks] = useState(mainPageNavLinks);
  const [currentHash, setCurrentHash] = useState('');

  const [mounted, setMounted] = useState(false);

  // Track when mounted to avoid SSR/client mismatch on theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (pathname === '/') {
      setCurrentNavLinks(mainPageNavLinks);
    } else {
      setCurrentNavLinks(otherPageNavLinks);
    }
  }, [pathname]);

  // Track hash on client only
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentHash(window.location.hash);
      const onHashChange = () => setCurrentHash(window.location.hash);
      window.addEventListener('hashchange', onHashChange);
      return () => window.removeEventListener('hashchange', onHashChange);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (pathname === '/' && href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
          <Code2 className="h-7 w-7 text-primary" />
          <span className="text-2xl font-bold text-foreground">Madhav</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {currentNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={cn(
                'text-sm font-medium text-muted-foreground transition-colors hover:text-primary',
                (pathname === link.href || (pathname.startsWith('/blog') && link.href === '/blog') || (pathname === '/' && link.href === currentHash))
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
          <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="ml-4 p-2 rounded hover:bg-accent transition-colors"
            type="button"
          >
            {mounted && (theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
            {!mounted && <Moon className="h-5 w-5" />}
          </button>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="p-2 rounded hover:bg-accent transition-colors"
            type="button"
          >
            {mounted && (theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
            {!mounted && <Moon className="h-5 w-5" />}
          </button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-6">
                <Link href="/" className="flex items-center gap-2 px-4" onClick={() => setIsMobileMenuOpen(false)}>
                  <Code2 className="h-7 w-7 text-primary" />
                  <span className="text-2xl font-bold text-foreground">Madhav Kataria</span>
                </Link>
                {currentNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'block px-4 py-2 text-lg font-medium hover:text-primary',
                      (pathname === link.href || (pathname.startsWith('/blog') && link.href === '/blog') || (pathname === '/' && link.href === currentHash))
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    )}
                    onClick={() => handleLinkClick(link.href)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

