import React from 'react';
import { screen, render } from '@testing-library/react';
import AboutUs from './AboutUs';

describe('About', () => {
  it('Check text', () => {
    render(<AboutUs />);
    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });
});
