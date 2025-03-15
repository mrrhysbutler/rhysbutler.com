import { getAllPosts } from '@/lib/blog';
import { MetadataRoute } from 'next';

// Define the Post type based on the blog.js implementation
type Post = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  // Use a more specific type instead of any
  [key: string]: string | undefined;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rhysbutler.com';
  
  // Get all blog posts
  const posts = getAllPosts() as Post[];
  
  // Create sitemap entries for blog posts
  const blogEntries = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  
  // Create sitemap entries for static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ];
  
  return [...staticPages, ...blogEntries];
} 