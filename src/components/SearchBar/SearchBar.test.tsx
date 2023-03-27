import { screen, render, fireEvent } from '@testing-library/react';
import React from 'react';
import { describe } from 'vitest';
import SearchBar from '.';
describe('SearchBar component', () => {
  it('SearchBar placeholder', () => {
    render(<SearchBar />);
    expect(screen.getByPlaceholderText(/search/)).toBeInTheDocument();
  });

  it('Search bar change value', async () => {
    render(<SearchBar />);
    expect(screen.queryByRole('textbox')).toBeInTheDocument();
  });

  it('Search bar change value', async () => {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText(/search/i) as HTMLInputElement;
    const value = 'React';
    fireEvent.change(inputElement, { target: { value: value } });
    expect(inputElement.value).toBe(value);
  });
});
