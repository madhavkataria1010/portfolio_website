
import { SectionHeading } from '@/components/section-heading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Code2, Zap, FileText } from 'lucide-react';
import PublicationCard from '@/components/publication-card';
import { publications } from '@/lib/data';

const researchInterests = [
  {
    title: 'Vision Language Models',
    description: 'Exploring multimodal AI systems that understand both visual and textual information, with focus on narrative understanding, temporal reasoning, and cross-modal integration for complex storytelling applications.',
    icon: <Brain className="h-6 w-6 text-primary" />,
  },
  {
    title: 'Machine Learning Operations',
    description: 'Building scalable ML pipelines, model deployment strategies, and efficient training systems. Focus on optimizing inference performance, model distillation, and production-ready AI systems.',
    icon: <Code2 className="h-6 w-6 text-accent" />,
  },
  {
    title: 'AI Explainability',
    description: 'Developing interpretable AI systems that can explain their decisions and reasoning processes. Research in visual explanations, attention mechanisms, and transparent AI for critical applications.',
    icon: <Zap className="h-6 w-6 text-primary" />,
  },
];

export default function ResearchSection() {
  const allPublications = publications;

  return (
    <section id="research" className="py-12 md:py-20 bg-secondary/30 rounded-lg scroll-mt-20">
      <div className="container mx-auto px-4">
        <SectionHeading>Research Interests</SectionHeading>
        <p className="mt-4 mb-10 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
          Delving into the frontiers of technology to innovate and discover. Here are some of my primary areas of research focus.
        </p>

        {/* Research Interest Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {researchInterests.map((interest, index) => (
            <Card key={index} className="glass-card hover:scale-[1.02] transition-all duration-300">
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

        {/* Publications Subsection */}
        {allPublications.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-primary" />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Research Publications
              </h3>
            </div>
            <p className="mb-8 text-lg text-muted-foreground max-w-3xl">
              Latest research contributions in AI, computer vision, and machine learning.
            </p>
            
            <div className="space-y-6">
              {allPublications.map((publication) => (
                <PublicationCard 
                  key={publication.id} 
                  publication={publication} 
                  layout="horizontal"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
