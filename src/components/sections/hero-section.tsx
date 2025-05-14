'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const overlay1 = useRef<HTMLDivElement>(null);
  const overlay2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
    [overlay1.current, overlay2.current].forEach((el, idx) => {
      if (el) tl.to(el, { yPercent: -100, ease: 'none' }, 0 + idx * 0.1);
    });
    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden"
    >
      <section
        id="hero"
        className="relative z-20 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary to-secondary text-center"
      >
        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white">
          Hello, I'm Madhav Kataria.
        </h2>
        <p className="mt-4 text-xl md:text-2xl text-white max-w-xl">
          Advancing artificial intelligence and building cool software.
        </p>
      </section>
      <div
        ref={overlay1}
        className="absolute inset-0 w-[200%] h-screen z-10 bg-black"
        style={{ clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0% 100%)' }}
      />
      <div
        ref={overlay2}
        className="absolute inset-0 w-[200%] h-screen z-10 bg-gray-800"
        style={{ clipPath: 'polygon(0 0, 100% 0, 60% 100%, 0% 100%)' }}
      />
    </div>
  );
}
