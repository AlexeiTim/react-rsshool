import React from 'react';
import { UseFormRegister } from 'react-hook-form/dist/types';
import { FormValue } from '../Form';
import styles from './Input.module.scss';

interface InputProps {
  name?: string;
  type?: string;
  error?: string;
  accept?: string;
  register: UseFormRegister<FormValue>;
}

const Input: React.FC<InputProps> = ({ name }) => {
  const inputStyles = !error ? styles.validate : styles.errorValidate;
  return (
    <div className={styles.root}>
      <label>
        <p>{name}</p>
        <input accept={accept ? accept : ''} className={inputStyles} name={name} type={type} />
        {error && <p className={styles.error}>{error}</p>}
      </label>
    </div>
  );
};

export default Input;
