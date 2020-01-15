import React from 'react';
import './Button.css';

const button = (props) => {
  const { title, clicked } = props;
  return (
    <div>
      <button type="button" className="initialButton" onClick={clicked}>{title}</button>
    </div>
  );
};

export default button;
