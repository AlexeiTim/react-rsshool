import { screen, render, fireEvent } from '@testing-library/react';
import React from 'react';
import { describe } from 'vitest';
import SearchBar from '.';
describe('SearchBar component', () => {
  const setSearchValue = function () {};
  const setSearchParams = function () {};
  const searchValue = '';
  it('SearchBar placeholder', () => {
    render(
      <SearchBar
        setSearchValue={setSearchValue}
        setSearchParams={setSearchParams}
        searchValue={searchValue}
      />
    );
    expect(screen.getByPlaceholderText(/search/)).toBeInTheDocument();
  });

  it('Search bar change value', async () => {
    render(
      <SearchBar
        setSearchValue={setSearchValue}
        setSearchParams={setSearchParams}
        searchValue={searchValue}
      />
    );
    expect(screen.queryByRole('textbox')).toBeInTheDocument();
  });
});
