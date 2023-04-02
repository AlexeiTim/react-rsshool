import React from 'react';
import styles from './Submit.module.scss';

type SubmitProps = {
  type: string;
  value: string;
};

const Submit: React.FC<SubmitProps> = ({ type, value }) => {
  return (
    <div className={styles.root}>
      <label>
        <input className={styles.submitButton} type={type} value={value} />
      </label>
    </div>
  );
};

export default Submit;
