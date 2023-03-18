import React, { Component, ReactNode } from 'react';
import Card from './Card';
import styles from './Cards.module.scss';

type CardsState = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

interface State {
  cards: CardsState[];
}

interface Props {
  children?: ReactNode;
}

export default class Cards extends Component<Props, State> {
  state: State = {
    cards: [],
  };
  async componentDidMount() {
    try {
      const res = await fetch('https://fakestoreapi.com/products?limit=8');
      const data = await res.json();
      this.setState({ ...this.state, cards: data });
    } catch (e) {
      this.setState({
        ...this.state,
        cards: [
          {
            id: 1,
            title: 'test',
            price: 100,
            category: 'catogorry',
            description:
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, est.',
            image:
              'https://myocco.ee/media/catalog/product/cache/bf8b30fd3f1ac1296c578b7a4d3911b0/7/0/f/5/70f5ed61f4b97ccf99484ef25b6878f4b1026dfb_Test_Logo_Circle_black_transparent_copy.jpg?auto=webp&format=pjpg&width=3840&height=3840',
          },
        ],
      });
    }
  }
  render() {
    if (!this.state.cards.length)
      return (
        <div role="block" className={styles.loadCover}>
          <p>Loading...</p>
        </div>
      );
    return (
      <div role="cardBlock" className={styles.list}>
        {this.state.cards.map((item) => (
          <Card key={item.id} card={item} />
        ))}
      </div>
    );
  }
}
