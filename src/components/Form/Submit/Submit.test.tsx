import { render, screen } from '@testing-library/react';
import React from 'react';
import Submit from './Submit';

describe('submit tests', () => {
  test('submit test', () => {
    render(<Submit type="submit" value="submit" />);
    expect(screen.getByDisplayValue('submit')).toBeInTheDocument();
  });
});
