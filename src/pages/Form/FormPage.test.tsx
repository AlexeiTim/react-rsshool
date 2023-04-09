import { render, screen } from '@testing-library/react';
import React from 'react';
import FormPage from './FormPage';

test('formPage test', () => {
  render(<FormPage />);
  expect(screen.getByText('Accept with rules')).toBeInTheDocument();
});
