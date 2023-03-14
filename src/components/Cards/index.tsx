import React, { Component } from 'react';
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

type Props = object;

export default class Cards extends Component<Props, State> {
  state: State = {
    cards: [],
  };
  async componentDidMount() {
    const res = await fetch('https://fakestoreapi.com/products?limit=8');
    const data = await res.json();
    this.setState({ ...this.state, cards: data });
  }

  render() {
    if (!this.state.cards.length)
      return (
        <div className={styles.loadCover}>
          <p>Loading...</p>
        </div>
      );

    return (
      <div className={styles.list}>
        {this.state.cards.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    );
  }
}
