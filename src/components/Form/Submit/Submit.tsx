import React from 'react';

type SubmitProps = {
  type: string;
  value: string;
};

const Submit: React.FC<SubmitProps> = ({ type, value }) => {
  return (
    <div>
      <label>
        <input type={type} value={value} />
      </label>
    </div>
  );
};

export default Submit;
