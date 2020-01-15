import React from 'react';
import './Button.css';

const button = (props, state) => {
  const { title, clicked } = props;

  return (
    <div>
      <button type="button" className='initialButton' onClick={clicked}>{title}</button>
    </div>
  );
};

export default button;
