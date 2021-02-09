import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../components/Layout';

describe('Layout Component', () => {
  const props = {
    children: <p>Bisda</p>
  };

  test('render element when properly passed', () => {
    const { container } = render(<Layout {...props} />);
    expect(container.firstChild).not.toBeNull();
  });
});
