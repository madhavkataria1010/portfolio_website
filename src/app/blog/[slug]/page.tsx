import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';
import { format } from 'date-fns';
import { CalendarDays, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Madhav Kataria`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Madhav Kataria'],
      // ...(post.coverImage && { images: [post.coverImage] }),
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map(({ slug }) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-8 md:py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-foreground">
          {post.title}
        </h1>
        <div className="mt-4 flex items-center text-muted-foreground text-sm">
          <CalendarDays className="mr-2 h-4 w-4" />
          <time dateTime={post.date}>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Tag className="h-4 w-4 text-muted-foreground" />
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </header>

      <div
        className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:underline prose-code:before:content-none prose-code:after:content-none prose-code:font-mono prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <div className="mt-12 pt-8 border-t">
        <Link href="/blog" className="text-primary hover:underline">
          &larr; Back to all posts
        </Link>
      </div>
    </article>
  );
}
