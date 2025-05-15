export interface Project {
  id: string;
  rank: number;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  liveLink?: string;
  githubLink?: string;
  tags: string[];
}

export interface BlogFrontmatter {
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  tags?: string[];
  // coverImage?: string; // Optional: if you want cover images
}

export interface BlogPost extends BlogFrontmatter {
  slug: string;
  contentHtml: string; // Parsed HTML content
}

export interface BlogPostMetadata extends BlogFrontmatter {
  slug: string;
}
