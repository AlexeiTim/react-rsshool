import { render, screen } from '@testing-library/react';
import React from 'react';
import Switcher from './Switcher';

describe('Switcher tests', () => {
  test('Switcher test', () => {
    render(
      <Switcher error="">
        <label htmlFor="">
          Male
          <input placeholder="choose male" type="radio" />
        </label>
      </Switcher>
    );
    screen.debug();
    expect(screen.getByPlaceholderText(/choose male/gi)).toBeInTheDocument();
  });
});
