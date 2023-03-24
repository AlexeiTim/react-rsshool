import React from 'react';
import { InputTypes } from '../../../types/enums';

type CheckboxProps = {
  name: string;
};

const Checkbox: React.FC<CheckboxProps> = ({ name }) => {
  return (
    <div>
      <label>
        {name}
        <input type={InputTypes.CHECKBOX} name={name} />
      </label>
    </div>
  );
};

export default Checkbox;
