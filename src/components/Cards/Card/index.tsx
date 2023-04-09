import React from 'react';
import styles from './Card.module.scss';
export interface ICard {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}
interface CardProps {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  setIsOpenModal: (type: boolean) => void;
  setCurrentProduct: (product: ICard) => void;
}

const Card: React.FC<CardProps> = ({
  id,
  setCurrentProduct,
  setIsOpenModal,
  title,
  category,
  price,
  image,
  description,
}) => {
  const currentCard = {
    id,
    title,
    price,
    image,
    description,
    category,
  };
  const onHandlerModal = () => {
    setIsOpenModal(true);
    setCurrentProduct(currentCard);
  };
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
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>{price} $</p>
        <button onClick={onHandlerModal}>More Details</button>
      </div>
    </div>
  );
};

export default Card;
