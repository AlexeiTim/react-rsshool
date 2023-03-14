import React from 'react';
import { screen, render } from '@testing-library/react';
import NotFound from './NotFound';

describe('About', () => {
  it('Check text', () => {
    render(<NotFound />);
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});
