import { render } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary';

describe('ErrorBoundary Component', () => {
  const props = {
    children: <p>Bisda</p>
  };

  test('render the app correctly', () => {
    const { container } = render(<ErrorBoundary {...props} />);
    expect(container.firstChild).not.toBeNull();
  });
});
