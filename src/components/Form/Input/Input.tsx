import React from 'react';
import { FormErrorMessage } from '../../../types/enums';
import styles from './Input.module.scss';

interface InputProps {
  name?: string;
  type?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ name, type, error }, ref) => {
  const errorMessage = error ? FormErrorMessage.NAME_ERROR : '';
  const inputStyles = !error ? styles.validate : styles.errorValidate;
  return (
    <div className={styles.root}>
      <label>
        <p>{name}</p>
        <input className={inputStyles} ref={ref} name={name} type={type} />
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      </label>
    </div>
  );
});

export default Input;
