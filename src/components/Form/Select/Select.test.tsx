import { render, screen } from '@testing-library/react';
import React from 'react';
import { countries } from '../../../constants/countries';
import Select from './Select';

describe('Select tests', () => {
  test('Select have error', () => {
    render(<Select name="Country" variables={countries} error="Error" />);
    expect(screen.getByText(/Error/gi)).toBeInTheDocument();
  });
});
