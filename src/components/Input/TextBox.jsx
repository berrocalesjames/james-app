import React from 'react';

const TextBox = (props) => {
  const { changed } = props;
  return (
    <form>
      <label>
          Username:
        <input
          type="text"
          id="username"
          placeholder="Type Text here"
          onChange={changed}
        />
      </label>
    </form>
  );
};

export default TextBox;
