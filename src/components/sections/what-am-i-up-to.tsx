import { Book, Cpu, Laptop, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeading } from '@/components/section-heading';

export default function WhatAmIUpToSection() {
  return (
    <section id="upto" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <SectionHeading>What am I up to?</SectionHeading>
        <div className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-3">
          <Link href="#research">
            <Card className="p-6 shadow-lg group transition-transform transform hover:-translate-y-1 hover:shadow-xl cursor-pointer">
              <div className="flex justify-center mb-4">
                <Cpu className="h-12 w-12 text-primary transition-colors group-hover:text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center group-hover:text-teal-500">AI Research</h3>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Exploring the frontiers of artificial intelligence, focusing on perception and intelligent systems as an undergraduate researcher.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="#projects">
            <Card className="p-6 shadow-lg group transition-transform transform hover:-translate-y-1 hover:shadow-xl cursor-pointer">
              <div className="flex justify-center mb-4">
                <Laptop className="h-12 w-12 text-primary transition-colors group-hover:text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center group-hover:text-teal-500">Building Software</h3>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  I enjoy building software products that solve everyday problems. Check out some of my favorites!
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/blog">
            <Card className="p-6 shadow-lg group transition-transform transform hover:-translate-y-1 hover:shadow-xl cursor-pointer">
              <div className="flex justify-center mb-4">
                <Book className="h-12 w-12 text-primary transition-colors group-hover:text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center group-hover:text-teal-500">Books</h3>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Reads some books 
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}
