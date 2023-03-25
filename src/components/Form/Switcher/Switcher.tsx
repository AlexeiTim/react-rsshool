import React from 'react';
import { InputTypes } from '../../../types/enums';
import styles from './Switcher.module.scss';

type SwitcherProps = {
  children: React.ReactNode;
  error: string;
};

const Switcher: React.FC<SwitcherProps> = ({ children, error }) => {
  console.log(error);
  return (
    <div className={styles.root}>
      {children}
      <p style={{ color: 'red' }}>{error}</p>
    </div>
  );
};

export default Switcher;
