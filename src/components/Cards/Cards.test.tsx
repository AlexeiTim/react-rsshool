import React from 'react';
import { screen, render } from '@testing-library/react';
import Cards from '.';

describe('Cards component', () => {
  test('test', () => {
    render(<Cards />);
    expect(screen.getByText(/a/)).toBeDefined();
  });
  test('test2', () => {
    render(<Cards />);
    expect(screen.getByRole('block')).toBeInTheDocument();
  });
  test('test3', () => {
    render(<Cards />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('test4', async () => {
    render(<Cards />);
    expect(
      await screen.findAllByRole('heading', {
        level: 2,
      })
    ).toHaveLength(8);
  });
});
