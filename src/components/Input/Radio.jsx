import React from 'react';

const Radio = (props) => (
  <form>
    <label htmlFor="name">
      Select one
      <input
        type="radio"
        name={props.name}
      />
    </label>
  </form>
);

export default Radio;
