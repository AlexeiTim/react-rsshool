import { render, screen } from '@testing-library/react';
import React from 'react';
import { it } from 'vitest';
import Main from './Main';

describe('Main', () => {
  it('test content', () => {
    render(<Main />);
    expect(screen.getByRole('container')).toHaveClass('container');
  });
});
