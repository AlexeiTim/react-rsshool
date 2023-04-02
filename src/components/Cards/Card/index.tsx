import React from 'react';
import styles from './Card.module.scss';

interface ICard {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const Card: React.FC<ICard> = ({ title, category, price, image, description }) => {
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
};

export default Card;
