import { screen, render } from '@testing-library/react';
import React from 'react';
import { describe } from 'vitest';
import SearchBar from '.';
describe('SearchBar component', () => {
  it('SearchBar placeholder', () => {
    render(<SearchBar />);
    expect(screen.getByPlaceholderText(/search/)).toBeInTheDocument();
  });
});
