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
    setIsOpenModal: function () {},
    setCurrentProduct: function () {},
  };
  test('Card have title', () => {
    render(<Card key={1} {...cardProps} />);
    expect(screen.getByText('Title')).toBeDefined();
  });
  test('Card have description', () => {
    render(<Card key={1} {...cardProps} />);
    expect(screen.getByText(/Title/)).toBeDefined();
  });
});
