import React from 'react';
import { InputTypes } from '../../../types/enums';

type SwitcherProps = {
  name: string;
};

const Switcher = React.forwardRef<HTMLInputElement, SwitcherProps>(({ name }, ref) => {
  return (
    <div>
      <label>
        Male/Female
        <input ref={ref} type={InputTypes.RADIO} name={name} />
        <input type={InputTypes.RADIO} name={name} />
      </label>
    </div>
  );
});

export default Switcher;
