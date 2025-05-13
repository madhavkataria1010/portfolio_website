import Link from 'next/link';
import type { BlogPostMetadata } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { format } from 'date-fns';

interface BlogCardProps {
  post: BlogPostMetadata;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] h-full">
      <CardHeader>
        <CardTitle className="text-xl lg:text-2xl">{post.title}</CardTitle>
        <div className="flex items-center text-sm text-muted-foreground pt-1">
          <CalendarDays className="mr-2 h-4 w-4" />
          <time dateTime={post.date}>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm leading-relaxed">{post.excerpt}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link href={`/blog/${post.slug}`} className="group inline-flex items-center text-primary hover:underline">
          Read more
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}
