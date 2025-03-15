import { render, screen } from '@testing-library/react';
import Header from '@/components/layout/Header';

describe('Header', () => {
  it('renders the header with navigation links', () => {
    render(<Header />);
    
    // Check if the header contains the name
    expect(screen.getByText('Rhys Butler')).toBeInTheDocument();
    
    // Check if all navigation links are present
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /work/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
    
    // Check if the links have the correct href attributes
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: /work/i })).toHaveAttribute('href', '/work');
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '/#contact');
  });
}); 