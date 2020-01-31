import React from 'react';

const TextBox = (props) => {
  const { changed, value } = props;
  return (
    <form>
      <label>
          Username:
        <input type="text" value={value} onChange={changed} />
      </label>
    </form>
  );
};

export default TextBox;
