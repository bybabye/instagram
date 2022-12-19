import React from 'react';
import { render, screen } from '@testing-library/react';
import RootPage from './page/root';


test('renders learn react link', () => {
  render(<RootPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
