import { render, screen } from '@testing-library/react';
import React from 'react';
import Form from './Form';

describe('Form tests', () => {
  const testFunction = () => {};
  test('Form render', () => {
    render(<Form addUser={testFunction} />);
    expect(screen.getByText(/Profile picture/gi)).toBeInTheDocument();
  });
});
