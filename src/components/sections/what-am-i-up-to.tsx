import { Cpu, Laptop, Youtube } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeading } from '@/components/section-heading';

export default function WhatAmIUpToSection() {
  return (
    <section id="upto" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <SectionHeading>What am I up to?</SectionHeading>
        <div className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-3">
          <Card className="p-6 shadow-lg">
            <div className="flex justify-center mb-4">
              <Cpu className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">AI & Robotics Research</h3>
            <CardContent>
              <p className="text-center text-muted-foreground">
                Exploring the frontiers of robotic intelligence and AI perception as an undergraduate researcher with the Scene Representation group.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 shadow-lg">
            <div className="flex justify-center mb-4">
              <Laptop className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">Building Software</h3>
            <CardContent>
              <p className="text-center text-muted-foreground">
                I enjoy building software products that solve everyday problems. Check out some of my favorites!
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 shadow-lg">
            <div className="flex justify-center mb-4">
              <Youtube className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">Youtube</h3>
            <CardContent>
              <p className="text-center text-muted-foreground">
                Shedding light on my tech journey at MIT and beyond through videos. Built an audience with over 465,000 views and 8,400+ subscribers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
