import React from 'react';

const TextBox = (props) => (
  <form>
    <label>
        Username:
      <input
        type="text"
        id="username"
        placeholder="Type Text here"
        onChange={props.changed}
      />
    </label>
  </form>
);

export default TextBox;
