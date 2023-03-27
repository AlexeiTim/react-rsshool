import { render, screen } from '@testing-library/react';
import React from 'react';
import Checkbox from './Checkbox';

describe('Checkbox tests', () => {
  test('checkbox test have error', () => {
    render(<Checkbox name="name" error="ERROR" />);
    expect(screen.getByText(/ERROR/gi)).toBeInTheDocument();
  });
});
