import { getAllPostsMetadata } from '@/lib/blog';
import BlogCard from '@/components/blog-card';
import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const MAX_POSTS_ON_HOMEPAGE = 3;

export default function BlogSection() {
  const allPosts = getAllPostsMetadata();
  const recentPosts = allPosts.slice(0, MAX_POSTS_ON_HOMEPAGE);

  if (recentPosts.length === 0) {
    return null; // Don't render the section if there are no posts
  }

  return (
    <section id="blog" className="py-12 md:py-20 scroll-mt-20">
      <SectionHeading>Recent Blog Posts</SectionHeading>
      <p className="mt-4 mb-10 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
        Check out my latest articles and thoughts.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {recentPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      {allPosts.length > MAX_POSTS_ON_HOMEPAGE && (
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">
              View All Posts <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      )}
    </section>
  );
}
