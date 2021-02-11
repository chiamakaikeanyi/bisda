import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import DefaultLayout from '../components/DefaultLayout';

describe('DefaultLayout', () => {
  const props = {
    children: <p>Bisda</p>
  };

  test('render element when properly passed', () => {
    const { container } = render(
      <Router>
        <DefaultLayout {...props} />
      </Router>
    );
    expect(container.firstChild).not.toBeNull();
  });
});
