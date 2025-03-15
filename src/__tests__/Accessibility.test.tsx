import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Header from '@/components/layout/Header';

// Add jest-axe matchers
expect.extend(toHaveNoViolations);

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

describe('Accessibility tests', () => {
  it('Header component should have no accessibility violations', async () => {
    const { container } = render(<Header />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
}); 