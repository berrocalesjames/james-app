import React from 'react';

const TextBox = (props) => {
  const {
    value,
    name,
    changed,
  } = props;
  return (
    <form>
      <label>
          Username:
        <input
          name={name}
          type="text"
          value={value}
          onChange={changed}
        />
      </label>
    </form>
  );
};

export default TextBox;
