import React from 'react';
import styles from './SuccessModal.module.scss';

type SuccessModalProps = {
  isValid: boolean;
};

const SuccessModal: React.FC<SuccessModalProps> = ({ isValid }) => {
  const isActive = [styles.container, styles.active].join(' ');
  const notActive = styles.container;
  return (
    <div className={isValid ? isActive : notActive}>
      <div>SUCCESS!!!</div>
      <div>Created new user</div>
    </div>
  );
};

export default SuccessModal;
