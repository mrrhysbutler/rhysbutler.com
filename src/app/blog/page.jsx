import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata = {
  title: 'Blog | Rhys Butler',
  description: 'Thoughts, ideas, and learnings from Rhys Butler',
  openGraph: {
    title: 'Blog | Rhys Butler',
    description: 'Thoughts, ideas, and learnings from Rhys Butler',
    url: 'https://rhysbutler.com/blog',
    type: 'website',
    images: [
      {
        url: 'https://rhysbutler.com/img/rhys-avatar.jpg',
        width: 1200,
        height: 1200,
        alt: 'Rhys Butler',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Rhys Butler',
    description: 'Thoughts, ideas, and learnings from Rhys Butler',
    images: ['https://rhysbutler.com/img/rhys-avatar.jpg'],
  },
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-2">Blog</h1>
      <p className="text-muted-foreground mb-12">Thoughts, ideas, and learnings</p>
      
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No blog posts found. Check back soon!</p>
        </div>
      ) : (
        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="mb-2 text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-muted-foreground mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                )}
                <span className="text-sm font-medium text-primary inline-flex items-center group-hover:underline">
                  Read post
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
} 