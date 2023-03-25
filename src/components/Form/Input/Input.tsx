import React from 'react';
import styles from './Input.module.scss';

interface InputProps {
  name?: string;
  type?: string;
  error?: string;
  accept?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ name, type, error, accept }, ref) => {
    const inputStyles = !error ? styles.validate : styles.errorValidate;
    console.log(error);
    return (
      <div className={styles.root}>
        <label>
          <p>{name}</p>
          <input
            accept={accept ? accept : ''}
            className={inputStyles}
            ref={ref}
            name={name}
            type={type}
          />
          {error && <p className={styles.error}>{error}</p>}
        </label>
      </div>
    );
  }
);

export default Input;
