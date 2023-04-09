import React from 'react';
import SearchBar from '../../components/SearchBar';
import Cards from '../../components/Cards';
import Modal from '../../components/Modal/Modal';
import { ICard } from '../../components/Cards/Card';
export type ProductState = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
};
const Main = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const [searchParams, setSearchParams] = React.useState('');
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [currentProduct, setCurrentProduct] = React.useState<ProductState>();
  if (isOpenModal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
  return (
    <div role="container" className="container">
      <SearchBar
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        setSearchParams={setSearchParams}
      />
      <Cards
        setIsOpenModal={setIsOpenModal}
        searchParams={searchParams}
        setCurrentProduct={setCurrentProduct}
      />
      {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} currentProduct={currentProduct} />}
    </div>
  );
};

export default Main;
