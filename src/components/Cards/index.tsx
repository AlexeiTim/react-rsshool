import React from 'react';
import Card, { ICard } from './Card';
import styles from './Cards.module.scss';

type CardsState = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

type CardsProps = {
  searchParams: string;
  setIsOpenModal: (type: boolean) => void;
  setCurrentProduct: (product: ICard) => void;
};

const Cards: React.FC<CardsProps> = ({ searchParams, setIsOpenModal, setCurrentProduct }) => {
  const [cards, setCards] = React.useState<CardsState[]>([]);
  const [loading, setLoading] = React.useState(false);
  const filterCards = cards.filter((item) =>
    item.title.toLowerCase().includes(searchParams.toLowerCase())
  );
  React.useEffect(() => {
    setLoading(true);
    const fetchCards = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products?limit=8');
        const data = await res.json();
        setCards(data);
      } catch (e) {
        setCards([
          {
            id: 1,
            title: 'test',
            price: 100,
            category: 'category',
            description:
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, est.',
            image:
              'https://myocco.ee/media/catalog/product/cache/bf8b30fd3f1ac1296c578b7a4d3911b0/7/0/f/5/70f5ed61f4b97ccf99484ef25b6878f4b1026dfb_Test_Logo_Circle_black_transparent_copy.jpg?auto=webp&format=pjpg&width=3840&height=3840',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchCards();
  }, [searchParams]);
  if (loading) {
    return (
      <div role="block" className={styles.loadCover}>
        <p>Loading...</p>
      </div>
    );
  }
  if (!filterCards.length) {
    return (
      <div role="block" className={styles.loadCover}>
        <p>Not Found Anything</p>
      </div>
    );
  }
  return (
    <div role="cardBlock" className={styles.list}>
      {loading && <p>Loading</p>}
      {filterCards.map((item) => (
        <Card
          setCurrentProduct={setCurrentProduct}
          setIsOpenModal={setIsOpenModal}
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
};

export default Cards;
