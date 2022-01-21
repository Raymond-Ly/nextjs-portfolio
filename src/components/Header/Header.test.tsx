import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('All nav links return correctly', () => {
  const { getByText } = render(<Header />);

  expect(getByText('About')).toBeInTheDocument();
  expect(getByText('Tech')).toBeInTheDocument();
  expect(getByText('Projects')).toBeInTheDocument();
});
