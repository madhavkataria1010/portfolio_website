import type { Metadata } from 'next';
import { SectionHeading } from '@/components/section-heading';
import BlogCard from '@/components/blog-card';
import { getAllPostsMetadata } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog | Madhav Kataria',
  description: 'Read articles and thoughts on software development, web technologies, and more.',
};

export default function BlogPage() {
  const posts = getAllPostsMetadata();

  return (
    <div className="space-y-12">
      <section id="blog-hero" className="text-center py-8 md:py-12 scroll-mt-20">
        <SectionHeading>My Blog</SectionHeading>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
          Articles, tutorials, and thoughts on software development and technology.
        </p>
      </section>

      {posts.length === 0 ? (
        <p className="text-center text-muted-foreground">No blog posts yet. Check back soon!</p>
      ) : (
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </section>
      )}
    </div>
  );
}
