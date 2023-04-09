import React from 'react';
import { screen, render } from '@testing-library/react';
import Cards from '.';

describe('Cards component', () => {
  const searchParams = '';
  const setIsOpenModal = function () {};
  const setCurrentProduct = function () {};
  test('test', () => {
    render(
      <Cards
        searchParams={searchParams}
        setIsOpenModal={setIsOpenModal}
        setCurrentProduct={setCurrentProduct}
      />
    );
    expect(screen.getByText(/a/)).toBeDefined();
  });
  test('test2', () => {
    render(
      <Cards
        searchParams={searchParams}
        setIsOpenModal={setIsOpenModal}
        setCurrentProduct={setCurrentProduct}
      />
    );
    expect(screen.getByRole('block')).toBeInTheDocument();
  });
  test('test3', () => {
    render(
      <Cards
        searchParams={searchParams}
        setIsOpenModal={setIsOpenModal}
        setCurrentProduct={setCurrentProduct}
      />
    );
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('test4', async () => {
    render(
      <Cards
        searchParams={searchParams}
        setIsOpenModal={setIsOpenModal}
        setCurrentProduct={setCurrentProduct}
      />
    );
    expect(
      await screen.findAllByRole('heading', {
        level: 2,
      })
    ).toHaveLength(8);
  });
});
