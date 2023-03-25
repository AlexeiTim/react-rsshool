import React from 'react';
import { InputTypes } from '../../../types/enums';
import styles from './Checkbox.module.scss';

type CheckboxProps = {
  name: string;
  error: string;
};

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({ name, error }, ref) => {
  return (
    <div className={styles.root}>
      <label>
        {name}
        <input ref={ref} type={InputTypes.CHECKBOX} name={name} />
        <p style={{ color: 'red' }}>{error}</p>
      </label>
    </div>
  );
});

export default Checkbox;
