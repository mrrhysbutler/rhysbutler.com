import { render, screen } from '@testing-library/react';
import { getPostWithHTML } from '@/lib/blog';

// Mock the blog module
jest.mock('@/lib/blog', () => ({
  getAllPostSlugs: jest.fn(),
  getPostWithHTML: jest.fn(),
}));

// Mock Next.js navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Blog Post Styling', () => {
  // Mock implementation for getPostWithHTML
  beforeEach(() => {
    (getPostWithHTML as jest.Mock).mockResolvedValue({
      slug: 'test-post',
      frontmatter: {
        title: 'Test Post',
        date: '2023-01-01',
      },
      contentHtml: `
        <p>First paragraph of content.</p>
        <p>Second paragraph that should have proper spacing from the first.</p>
        <img src="/test-image.jpg" alt="Test Image" />
        <p>Paragraph after an image should have proper spacing.</p>
      `,
    });
  });

  it('should render blog post content with proper styling classes', async () => {
    // Import the BlogPost component dynamically to avoid issues with Next.js SSR
    const { default: BlogPost } = await import('@/app/blog/[slug]/page');
    
    // Render the component with mock params
    const { container } = render(await BlogPost({ params: { slug: 'test-post' } }));
    
    // Check that the prose class is applied to the content container
    const proseContainer = container.querySelector('.prose');
    expect(proseContainer).toBeInTheDocument();
    
    // Check that paragraphs are rendered
    const paragraphs = container.querySelectorAll('.prose p');
    expect(paragraphs.length).toBeGreaterThan(1);
    
    // Check that images are rendered
    const images = container.querySelectorAll('.prose img');
    expect(images.length).toBeGreaterThan(0);
    
    // Check that the prose class has the correct modifiers
    expect(proseContainer).toHaveClass('prose-lg');
    expect(proseContainer).toHaveClass('max-w-none');
  });
  
  it('should render blog post with correct structure', async () => {
    // Import the BlogPost component dynamically to avoid issues with Next.js SSR
    const { default: BlogPost } = await import('@/app/blog/[slug]/page');
    
    // Render the component with mock params
    render(await BlogPost({ params: { slug: 'test-post' } }));
    
    // Check that the title is rendered
    expect(screen.getByText('Test Post')).toBeInTheDocument();
    
    // Check that the date is rendered
    expect(screen.getByText(/January 1, 2023/)).toBeInTheDocument();
    
    // Check that the back link is rendered
    expect(screen.getByText('Back to all posts')).toBeInTheDocument();
    
    // Check that the content is rendered
    expect(screen.getByText('First paragraph of content.')).toBeInTheDocument();
    expect(screen.getByText('Second paragraph that should have proper spacing from the first.')).toBeInTheDocument();
    expect(screen.getByText('Paragraph after an image should have proper spacing.')).toBeInTheDocument();
    
    // Check that the image is rendered
    const image = screen.getByAltText('Test Image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test-image.jpg');
  });
}); 