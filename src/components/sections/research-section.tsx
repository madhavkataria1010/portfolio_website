
import { SectionHeading } from '@/components/section-heading';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Lightbulb, BookOpen, Users } from 'lucide-react';

const researchInterests = [
  {
    icon: <Lightbulb className="h-6 w-6 text-primary" />,
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Exploring advanced algorithms and their applications in solving real-world problems, with a focus on ethical AI development.',
  },
  {
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    title: 'Human-Computer Interaction',
    description: 'Investigating how users interact with technology to design more intuitive, effective, and enjoyable digital experiences.',
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: 'Distributed Systems & Scalability',
    description: 'Researching robust and scalable architectures for distributed applications, ensuring high availability and performance.',
  },
];

export default function ResearchSection() {
  return (
    <section id="research" className="py-12 md:py-20 bg-secondary/30 rounded-lg scroll-mt-20">
      <div className="container mx-auto px-4">
        <SectionHeading>Research Interests</SectionHeading>
        <p className="mt-4 mb-10 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
          Delving into the frontiers of technology to innovate and discover. Here are some of my primary areas of research focus.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchInterests.map((interest, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  {interest.icon}
                  <CardTitle className="text-xl">{interest.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {interest.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            For a detailed list of publications and ongoing projects, please refer to my academic profiles or contact me directly.
          </p>
          {/* Potential links to Google Scholar, ResearchGate, etc. can be added here */}
        </div>
      </div>
    </section>
  );
}
