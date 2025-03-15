import Link from 'next/link';
import { getAllPostSlugs, getPostWithHTML, extractFirstImageFromMarkdown } from '@/lib/blog';
import Script from 'next/script';

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}

export async function generateMetadata({ params }) {
  const post = await getPostWithHTML(params.slug);
  const title = `${post.frontmatter.title} | Rhys Butler`;
  const description = post.frontmatter.description || `Blog post by Rhys Butler`;
  
  // Try to find an image in this priority order:
  // 1. meta_img from frontmatter
  // 2. First image from markdown content
  // 3. Default profile image
  let ogImage;
  
  if (post.frontmatter.meta_img) {
    // Use meta_img from frontmatter if available
    ogImage = `https://rhysbutler.com/${post.frontmatter.meta_img}`;
  } else {
    // Try to extract the first image from the content
    const extractedImage = extractFirstImageFromMarkdown(post.content);
    if (extractedImage) {
      ogImage = `https://rhysbutler.com/${extractedImage}`;
    } else {
      // Fall back to profile image
      ogImage = 'https://rhysbutler.com/img/rhys-avatar.jpg';
    }
  }

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
          width: ogImage.includes('rhys-avatar') ? 1200 : 1200,
          height: ogImage.includes('rhys-avatar') ? 1200 : 630,
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
  
  // Get the image for structured data using the same logic as metadata
  let postImage;
  
  if (post.frontmatter.meta_img) {
    postImage = `https://rhysbutler.com/${post.frontmatter.meta_img}`;
  } else {
    const extractedImage = extractFirstImageFromMarkdown(post.content);
    if (extractedImage) {
      postImage = `https://rhysbutler.com/${extractedImage}`;
    } else {
      postImage = 'https://rhysbutler.com/img/rhys-avatar.jpg';
    }
  }
  
  // Create structured data for the blog post
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.frontmatter.title,
    description: post.frontmatter.description || '',
    image: postImage,
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