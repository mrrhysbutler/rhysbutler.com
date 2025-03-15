import { render, screen } from '@testing-library/react';
import MatchMediaMock from 'jest-matchmedia-mock';
import Header from '@/components/layout/Header';

// Define a type for image props
type ImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
  [key: string]: any; // For any other props that might be passed
};

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: ImageProps) => {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...props} />;
  },
}));

describe('Responsive Layout Tests', () => {
  let matchMedia: MatchMediaMock;

  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  afterAll(() => {
    matchMedia.destroy();
  });

  it('Header renders correctly on mobile', () => {
    // Simulate mobile viewport
    matchMedia.useMediaQuery('(max-width: 767px)');
    
    render(<Header />);
    
    // Basic check that the header is rendered
    expect(screen.getByText('Rhys Butler')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  });

  it('Header renders correctly on desktop', () => {
    // Simulate desktop viewport
    matchMedia.useMediaQuery('(min-width: 768px)');
    
    render(<Header />);
    
    // Basic check that the header is rendered
    expect(screen.getByText('Rhys Butler')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  });
}); 