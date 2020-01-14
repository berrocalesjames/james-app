import React from 'react';

const button = (props) => {
  const { title, clicked } = props;
  return (
    <div>
      <button type="button" onClick={clicked}>{title}</button>
    </div>
  );
};

export default button;
