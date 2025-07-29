'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Code2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const glassElement1 = useRef<HTMLDivElement>(null);
  const glassElement2 = useRef<HTMLDivElement>(null);
  const glassElement3 = useRef<HTMLDivElement>(null);
  const floatingElements = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!heroRef.current || !contentRef.current) return;

    // Hero parallax scroll effect
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    // Animate glass elements on scroll
    if (glassElement1.current) {
      tl.to(glassElement1.current, { 
        yPercent: -50, 
        rotation: 15,
        scale: 1.1,
        ease: 'none' 
      }, 0);
    }
    
    if (glassElement2.current) {
      tl.to(glassElement2.current, { 
        yPercent: -80, 
        rotation: -10,
        scale: 0.9,
        ease: 'none' 
      }, 0);
    }
    
    if (glassElement3.current) {
      tl.to(glassElement3.current, { 
        yPercent: -30, 
        rotation: 5,
        ease: 'none' 
      }, 0);
    }

    // Content fade and scale on scroll
    tl.to(contentRef.current, {
      yPercent: -20,
      scale: 0.95,
      opacity: 0.3,
      ease: 'none'
    }, 0);

    // Floating elements animation
    floatingElements.current.forEach((el, index) => {
      if (el) {
        gsap.to(el, {
          y: Math.sin(index) * 20,
          x: Math.cos(index) * 15,
          rotation: Math.sin(index) * 10,
          duration: 3 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut',
          delay: index * 0.2
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const addToFloatingElements = (el: HTMLDivElement | null) => {
    if (el && !floatingElements.current.includes(el)) {
      floatingElements.current.push(el);
    }
  };

  const handleScrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={heroRef}
      className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden"
    >
      {/* Main hero section */}
      <section
        id="hero"
        className="relative z-20 min-h-screen flex flex-col items-center justify-center text-center px-6"
      >
        {/* Floating glass decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large floating glass orb */}
          <div
            ref={glassElement1}
            className="absolute top-1/4 right-1/4 w-64 h-64 glass-card rounded-full opacity-30 animate-float"
            style={{ animationDelay: '0s', animationDuration: '8s' }}
          />
          
          {/* Medium glass rectangle */}
          <div
            ref={glassElement2}
            className="absolute bottom-1/3 left-1/5 w-48 h-32 glass-card rounded-2xl opacity-20 animate-float"
            style={{ animationDelay: '2s', animationDuration: '10s' }}
          />
          
          {/* Small glass triangle */}
          <div
            ref={glassElement3}
            className="absolute top-1/2 left-1/6 w-24 h-24 glass-card opacity-25 animate-float"
            style={{ 
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              animationDelay: '4s',
              animationDuration: '6s'
            }}
          />

          {/* Small floating elements */}
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              ref={addToFloatingElements}
              className={`absolute w-8 h-8 glass rounded-full opacity-40`}
              style={{
                top: `${20 + (i * 10)}%`,
                left: `${10 + (i * 12)}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div ref={contentRef} className="relative z-30 max-w-5xl mx-auto">
          {/* Greeting with animated icons */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-3 glass-card rounded-full animate-pulse">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <div className="p-3 glass-card rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}>
              <Code2 className="h-6 w-6 text-accent" />
            </div>
            <div className="p-3 glass-card rounded-full animate-pulse" style={{ animationDelay: '1s' }}>
              <Zap className="h-6 w-6 text-primary" />
            </div>
          </div>

          {/* Main heading with glass background */}
          <div className="relative mb-8">
            <div className="absolute inset-0 glass-card rounded-3xl blur-sm opacity-60" />
            <h1 className="relative z-10 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white px-8 py-6">
              <span className="block">Hello, I'm</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Madhav Kataria
              </span>
            </h1>
          </div>

          {/* Subtitle with enhanced glass effect */}
          <div className="relative max-w-3xl mx-auto mb-12">
            <div className="absolute inset-0 glass-card rounded-2xl opacity-40" />
            <p className="relative z-10 text-xl md:text-2xl lg:text-3xl text-white/90 px-8 py-6 leading-relaxed">
              <span className="font-light">Advancing</span>
              <span className="font-semibold text-blue-300 mx-2">artificial intelligence</span>
              <span className="font-light">and building</span>
              <span className="font-semibold text-purple-300 mx-2">cool software</span>
              <span className="font-light">that matters.</span>
            </p>
          </div>

          {/* Call to action buttons with proper Button components */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={handleScrollToProjects}
              className="px-8 py-4 text-lg font-semibold"
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="px-8 py-4 text-lg font-semibold"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 glass-card rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Ambient glass particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
