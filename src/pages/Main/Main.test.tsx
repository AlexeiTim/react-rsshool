import { render, screen } from '@testing-library/react';
import React from 'react';
import { it } from 'vitest';
import Main from './Main';

describe('Main', () => {
  it('test content', () => {
    render(<Main />);
    expect(screen.getByRole('container')).toHaveClass('container');
  });

  it('have loading', () => {
    render(<Main />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('have products', async () => {
    render(<Main />);
    const items = await screen.findAllByRole('heading', { level: 2 });
    expect(items.length).toBe(8);
  });
});
