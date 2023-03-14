import { render, screen } from '@testing-library/react';
import Card from '.';
import React from 'react';

describe('Card tests', () => {
  const cardProps = {
    id: 1,
    title: 'Title',
    price: 20,
    category: 'jew',
    description: 'sometext',
    image: 'http/12312312',
  };
  beforeEach(() => {
    render(<Card key={1} item={cardProps} />);
  });
  test('Card have title', () => {
    expect(screen.getByText('Title')).toBeDefined();
  });
  test('Card have description', () => {
    expect(screen.getByText('sometext')).toBeDefined();
  });
});
