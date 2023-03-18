import React from 'react';
import { screen, render } from '@testing-library/react';
import Cards from '.';
import Card from './Card';

const cardProps = [
  {
    id: 1,
    title: 'Title',
    price: 20,
    category: 'jew',
    description: 'sometext',
    image: 'http/12312312',
  },
  {
    id: 2,
    title: 'Title2',
    price: 20,
    category: 'jeww',
    description: 'sometext123',
    image: 'http/12312312',
  },
];

describe('Cards component', () => {
  test('test', () => {
    render(
      <Cards>
        {cardProps.map((item) => {
          <Card key={item.id} card={item} />;
        })}
      </Cards>
    );
    expect(screen.getByText(/a/)).toBeDefined();
  });
  test('test2', () => {
    render(
      <Cards>
        <Card key={cardProps[0].id} card={cardProps[0]} />;
      </Cards>
    );
    expect(screen.getByRole('block')).toBeInTheDocument();
  });
  test('test3', () => {
    render(
      <Cards>
        <Card key={cardProps[0].id} card={cardProps[0]} />;
      </Cards>
    );
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('test4', async () => {
    render(
      <Cards>
        <Card key={cardProps[0].id} card={cardProps[0]} />;
      </Cards>
    );
    expect(
      await screen.findAllByRole('heading', {
        level: 2,
      })
    ).toHaveLength(8);
  });
});
