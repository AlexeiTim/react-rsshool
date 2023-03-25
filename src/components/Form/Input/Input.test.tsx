import { render, screen } from '@testing-library/react';
import React from 'react';
import Input from './Input';

describe('input test', () => {
  test('input test', () => {
    render(<Input name={'Alex'} />);
    expect(screen.getByText(/Alex/gi)).toBeInTheDocument();
  });
});
