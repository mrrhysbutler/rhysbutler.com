import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe('Home Page', () => {
  it('renders the hero section with name and title', () => {
    render(<Home />);
    
    // Check if the page contains the name and title
    expect(screen.getByText(/Hi, I'm Rhys/)).toBeInTheDocument();
    expect(screen.getByText(/Head of Development at Rapid/)).toBeInTheDocument();
    
    // Check if the avatar image is present
    const avatar = screen.getByAltText('Rhys Butler');
    expect(avatar).toBeInTheDocument();
  });
}); 