import Link from 'next/link';
import { getAllPostSlugs, getPostWithHTML } from '@/lib/blog';
import Script from 'next/script';

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}

export async function generateMetadata({ params }) {
  const post = await getPostWithHTML(params.slug);
  const title = `${post.frontmatter.title} | Rhys Butler`;
  const description = post.frontmatter.description || `Blog post by Rhys Butler`;
  const ogImage = post.frontmatter.meta_img 
    ? `https://rhysbutler.com/${post.frontmatter.meta_img}`
    : `https://rhysbutler.com/api/og?title=${encodeURIComponent(post.frontmatter.title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.frontmatter.date,
      url: `https://rhysbutler.com/blog/${params.slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.frontmatter.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
  };
}

export default async function BlogPost({ params }) {
  const post = await getPostWithHTML(params.slug);
  const publishDate = new Date(post.frontmatter.date).toISOString();
  
  // Create structured data for the blog post
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.frontmatter.title,
    description: post.frontmatter.description || '',
    image: post.frontmatter.meta_img 
      ? `https://rhysbutler.com/${post.frontmatter.meta_img}`
      : `https://rhysbutler.com/api/og?title=${encodeURIComponent(post.frontmatter.title)}`,
    datePublished: publishDate,
    dateModified: publishDate,
    author: {
      '@type': 'Person',
      name: 'Rhys Butler',
      url: 'https://rhysbutler.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Rhys Butler',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rhysbutler.com/img/rhys-avatar.jpg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://rhysbutler.com/blog/${params.slug}`,
    },
  };
  
  return (
    <>
      <Script
        id="blog-post-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
    </>
  );
} 