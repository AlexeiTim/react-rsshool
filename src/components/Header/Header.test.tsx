import { screen, render } from '@testing-library/react';
import Header from '.';
import React from 'react';

describe('Header component', () => {
  it('header link', () => {
    render(<Header />);
    expect(screen.getByText(/about/i)).toBeDefined();
  });
});
