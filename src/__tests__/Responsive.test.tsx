import { render, screen } from '@testing-library/react';
import MatchMediaMock from 'jest-matchmedia-mock';
import Header from '@/components/layout/Header';

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text
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