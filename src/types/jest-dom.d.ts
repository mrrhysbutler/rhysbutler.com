import '@testing-library/jest-dom';
import 'jest-axe/extend-expect';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveAttribute(attr: string, value?: string): R;
      toHaveNoViolations(): R;
    }
  }
} 