import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, FileText, Code, Award } from 'lucide-react';
import Link from 'next/link';
import type { Publication } from '@/lib/types';

interface PublicationCardProps {
  publication: Publication;
  layout?: 'vertical' | 'horizontal';
}

export default function PublicationCard({ publication, layout = 'vertical' }: PublicationCardProps) {
  const getVenueTypeIcon = (type: string) => {
    switch (type) {
      case 'conference':
        return <Award className="h-4 w-4 text-amber-500" />;
      case 'journal':
        return <FileText className="h-4 w-4 text-blue-500" />;
      case 'workshop':
        return <Award className="h-4 w-4 text-purple-500" />;
      case 'preprint':
        return <FileText className="h-4 w-4 text-gray-500" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getVenueTypeColor = (type: string) => {
    switch (type) {
      case 'conference':
        return 'border-amber-500/50 bg-amber-500/10';
      case 'journal':
        return 'border-blue-500/50 bg-blue-500/10';
      case 'workshop':
        return 'border-purple-500/50 bg-purple-500/10';
      case 'preprint':
        return 'border-gray-500/50 bg-gray-500/10';
      default:
        return 'border-gray-500/50 bg-gray-500/10';
    }
  };

  if (layout === 'horizontal') {
    return (
      <Card className={`glass-card group hover:scale-[1.01] transition-all duration-300 ${
        publication.highlight ? 'ring-2 ring-primary/50' : ''
      }`}>
        <div className="flex flex-col md:flex-row">
          <CardHeader className="flex-shrink-0 md:w-1/3">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className={`flex items-center gap-2 px-3 py-1 rounded-full border ${getVenueTypeColor(publication.type)}`}>
                {getVenueTypeIcon(publication.type)}
                <span className="text-xs font-medium capitalize">{publication.type}</span>
              </div>
              <span className="text-sm text-muted-foreground font-medium">{publication.year}</span>
            </div>
            
            {publication.highlight && (
              <div className="flex items-center gap-1 mb-2">
                <Award className="h-4 w-4 text-primary" />
                <Badge variant="secondary" className="text-xs">Featured</Badge>
              </div>
            )}
            
            <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
              {publication.title}
            </CardTitle>
            
            <div className="text-sm text-muted-foreground">
              <p className="font-medium">{publication.authors.join(', ')}</p>
              <p className="mt-1 italic">{publication.venue}</p>
            </div>
          </CardHeader>

          <CardContent className="flex-grow md:w-2/3 flex flex-col justify-between">
            <div>
              <CardDescription className="text-sm leading-relaxed mb-4">
                {publication.abstract}
              </CardDescription>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {publication.tags.slice(0, 5).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {publication.tags.length > 5 && (
                  <Badge variant="outline" className="text-xs">
                    +{publication.tags.length - 5} more
                  </Badge>
                )}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-2">
              {publication.websiteUrl && (
                <Button variant="default" size="sm" asChild>
                  <Link href={publication.websiteUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-1 h-3 w-3" />
                    Website
                  </Link>
                </Button>
              )}
              
              {publication.paperUrl && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={publication.paperUrl} target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-1 h-3 w-3" />
                    Paper
                  </Link>
                </Button>
              )}
              
              {publication.codeUrl && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={publication.codeUrl} target="_blank" rel="noopener noreferrer">
                    <Code className="mr-1 h-3 w-3" />
                    Code
                  </Link>
                </Button>
              )}
            </div>
          </CardContent>
        </div>
      </Card>
    );
  }

  // Vertical layout (original)
  return (
    <Card className={`glass-card group hover:scale-[1.02] transition-all duration-300 h-full flex flex-col ${
      publication.highlight ? 'ring-2 ring-primary/50' : ''
    }`}>
      <CardHeader className="flex-shrink-0">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className={`flex items-center gap-2 px-3 py-1 rounded-full border ${getVenueTypeColor(publication.type)}`}>
            {getVenueTypeIcon(publication.type)}
            <span className="text-xs font-medium capitalize">{publication.type}</span>
          </div>
          <span className="text-sm text-muted-foreground font-medium">{publication.year}</span>
        </div>
        
        {publication.highlight && (
          <div className="flex items-center gap-1 mb-2">
            <Award className="h-4 w-4 text-primary" />
            <Badge variant="secondary" className="text-xs">Featured</Badge>
          </div>
        )}
        
        <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
          {publication.title}
        </CardTitle>
        
        <div className="text-sm text-muted-foreground">
          <p className="font-medium">{publication.authors.join(', ')}</p>
          <p className="mt-1 italic">{publication.venue}</p>
        </div>
      </CardHeader>

      <CardContent className="flex-grow flex flex-col">
        <CardDescription className="text-sm leading-relaxed mb-4 flex-grow">
          {publication.abstract}
        </CardDescription>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {publication.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {publication.tags.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{publication.tags.length - 4} more
            </Badge>
          )}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {publication.websiteUrl && (
            <Button variant="default" size="sm" asChild>
              <Link href={publication.websiteUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-3 w-3" />
                Website
              </Link>
            </Button>
          )}
          
          {publication.paperUrl && (
            <Button variant="outline" size="sm" asChild>
              <Link href={publication.paperUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="mr-1 h-3 w-3" />
                Paper
              </Link>
            </Button>
          )}
          
          {publication.codeUrl && (
            <Button variant="outline" size="sm" asChild>
              <Link href={publication.codeUrl} target="_blank" rel="noopener noreferrer">
                <Code className="mr-1 h-3 w-3" />
                Code
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
} 