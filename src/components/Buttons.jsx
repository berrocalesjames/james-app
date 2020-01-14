import React from 'react';

const button = (props) => {
  const { title } = props;
  return (
    <div>
      <button type="button">{title}</button>
    </div>
  );
};

export default button;
