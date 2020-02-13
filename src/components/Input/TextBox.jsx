import React from 'react';

const TextBox = (props) => {
  const { changed, username, name } = props;
  return (
    <form>
      <label>
          Username:
        <input name={name} type="text" value={username} onChange={changed} />
      </label>
    </form>
  );
};

export default TextBox;
