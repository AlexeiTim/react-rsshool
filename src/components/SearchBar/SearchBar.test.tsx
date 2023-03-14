import { screen, render, fireEvent } from '@testing-library/react';
import React from 'react';
import { describe } from 'vitest';
import SearchBar from '.';
describe('SearchBar component', () => {
  it('SearchBar placeholder', () => {
    render(<SearchBar value="" />);
    expect(screen.getByPlaceholderText(/search/)).toBeInTheDocument();
  });

  it('SearchBar have class', () => {
    render(<SearchBar value="123" />);
    expect(screen.getByText('123')).toBeDefined();
  });
  // it('SearchBar value', () => {
  //   render(<SearchBar value="" />);
  //   fireEvent.change(screen.getByPlaceholderText(/search/), {
  //     target: {
  //       value: 'React',
  //     },
  //   });
  //   expect(screen.getByRole('textbox')).toContain('React');
  // });
});
