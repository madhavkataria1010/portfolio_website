import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function CallToActionSection() {
  return (
    <section id="cta" className="py-12 md:py-24 bg-primary/10 rounded-lg">
      <div className="container mx-auto px-4 text-center">
        <SectionHeading>Ready to Build Something Amazing?</SectionHeading>
        <p className="mt-6 mb-10 text-lg text-muted-foreground max-w-xl mx-auto">
          Whether you have a specific project in mind or just want to explore possibilities, I'm here to help turn your ideas into reality.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow">
            <Link href="#contact">
              <MessageSquare className="mr-2 h-5 w-5" /> Let's Talk
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="shadow-sm hover:shadow-md transition-shadow">
            <Link href="#projects">
              See My Work <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
