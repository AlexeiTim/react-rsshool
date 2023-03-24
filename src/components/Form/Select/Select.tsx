import React from 'react';
import { SelectValues } from '../../../types/enums';
type SelectProps = {
  name: string;
  error: string;
  variables: string[];
};

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ name, error, variables }, ref) => {
    const errorMessage = error ? 'No valid field' : '';
    const countryList = variables.map((country) => (
      <option key={country} value={country}>
        {country}
      </option>
    ));
    return (
      <div>
        <label>
          {name}
          <select ref={ref} name={name}>
            <option disabled value={SelectValues.DEFAULT}>
              {SelectValues.DEFAULT}
            </option>
            {countryList}
          </select>
          {errorMessage && <p>{errorMessage}</p>}
        </label>
      </div>
    );
  }
);

export default Select;
