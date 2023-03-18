import React, { Component } from 'react';
import styles from './Card.module.scss';

interface ICard {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface CardProps {
  card: ICard;
}

export default class Card extends Component<CardProps> {
  render() {
    const { title, category, price, image } = this.props.card;
    let { description } = this.props.card;
    if (description.length > 30) {
      description = description.substring(0, 30) + '...';
    }
    return (
      <div className={styles.item}>
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className={styles.img}
        ></div>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.category}>Category: {category}</p>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>{price} $</p>
        </div>
      </div>
    );
  }
}
