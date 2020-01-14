import React from 'react';

const button = (props) => {
  const { title, click } = props;
  return (
    <div>
      <button type="button" onClick={click}>{title}</button>
    </div>
  );
};

export default button;
