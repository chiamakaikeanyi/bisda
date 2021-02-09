import { render, screen, cleanup } from '@testing-library/react';
import App from '../pages/App';

describe('App', () => {
  afterEach(cleanup);

  test('render the app correctly', () => {
    render(<App />);
    expect(screen.getByText(/Bisda/i)).toBeInTheDocument();
  });
});
