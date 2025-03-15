import Link from 'next/link';
import { getAllPostSlugs, getPostWithHTML } from '@/lib/blog';

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}

export async function generateMetadata({ params }) {
  const post = await getPostWithHTML(params.slug);
  
  return {
    title: `${post.frontmatter.title} | Rhys Butler`,
    description: post.frontmatter.excerpt || `Blog post by Rhys Butler`,
  };
}

export default async function BlogPost({ params }) {
  const post = await getPostWithHTML(params.slug);
  
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="mb-12">
        <Link href="/blog" className="text-sm font-medium text-primary hover:underline inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to all posts
        </Link>
      </div>
      
      <article>
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-4">{post.frontmatter.title}</h1>
          <p className="text-sm text-muted-foreground">
            {new Date(post.frontmatter.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </header>
        
        <div 
          className="prose dark:prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
        />
      </article>
    </div>
  );
} 