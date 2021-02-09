import { render, screen, cleanup } from '@testing-library/react';
import App from '../components/App';

describe('App Component', () => {
  afterEach(cleanup);

  test('render the app correctly', () => {
    render(<App />);
    expect(screen.getByText(/Bisda/i)).toBeInTheDocument();
  });
});
