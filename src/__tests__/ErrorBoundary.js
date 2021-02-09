import { render } from '@testing-library/react';
import ErrorBoundary from '../pages/ErrorBoundary';

describe('ErrorBoundary', () => {
  const props = {
    children: <p>Bisda</p>
  };

  test('render the app correctly', () => {
    const { container } = render(<ErrorBoundary {...props} />);
    expect(container.firstChild).not.toBeNull();
  });
});
