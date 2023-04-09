import React from 'react';
import styles from './Modal.module.scss';
import { ICard } from '../Cards/Card';
import { ProductState } from '../../pages/Main/Main';
type ModalProps = {
  setIsOpenModal: (type: boolean) => void;
  currentProduct: ProductState | undefined;
};
const Modal: React.FC<ModalProps> = ({ setIsOpenModal, currentProduct }) => {
  const onHandlerCloseModal = () => {
    setIsOpenModal(false);
  };
  return (
    <div onClick={onHandlerCloseModal} className={styles.cover}>
      {currentProduct && (
        <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
          <div>
            <button onClick={onHandlerCloseModal}>X</button>
          </div>
          <div className={styles.content}>
            <img className={styles.image} src={currentProduct.image} alt="image" />
            <p>{currentProduct.title}</p>
            <p>{currentProduct.category}</p>
            <p>{currentProduct.description}</p>
            <p>{currentProduct.price}$</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
