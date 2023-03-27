import React from 'react';
import styles from './Select.module.scss';
import { SelectValues } from '../../../types/enums';

type SelectProps = {
  name: string;
  error: string;
  variables: string[];
};

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ name, error, variables }, ref) => {
    const countryList = variables.map((country) => (
      <option key={country} value={country}>
        {country}
      </option>
    ));
    return (
      <div className={styles.root}>
        <label>
          {name}
          <select
            defaultValue={SelectValues.DEFAULT}
            className={styles.selectField}
            ref={ref}
            name={name}
          >
            <option disabled defaultValue={SelectValues.DEFAULT}>
              {SelectValues.DEFAULT}
            </option>
            {countryList}
          </select>
          {error && <p className={styles.error}>{error}</p>}
        </label>
      </div>
    );
  }
);

export default Select;
