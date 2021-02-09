import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '../components/NotFound';

describe('NotFound Component', () => {
  test('render component properly', () => {
    const { getByText } = render(<NotFound />);
    expect(getByText(/No business listing found/i)).toBeInTheDocument();
  });
});
