import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from '../pages/NotFound';

describe('NotFound', () => {
  test('render component properly', () => {
    const { getByText } = render(
      <Router>
        <NotFound />
      </Router>
    );
    expect(getByText(/Page not found/i)).toBeInTheDocument();
  });
});
