import React, { PureComponent } from 'react';

class Select extends PureComponent {
  render() {
    const {
      data,
      name,
      changed,
      label,
    } = this.props;
    const options = data.map((elements) => (
      <option
        key={Math.random()}
        value={elements}
      >
        {elements}
      </option>
    ));
    return (
      <div>
        <label>
          {label}
          <select name={name} onChange={changed}>
            <option>
            Select
              {' '}
            </option>
            {options}
          </select>
        </label>
      </div>
    );
  }
}
/*
  let options = gender.map((element) => {
    <option
        key={element.id}
        value={element.id}
    >
        {element.name}
    </option>
  });
return (
    <select name="gender" onChange={this.handleChange}>
        <option>Choose </option>
    </select>
);
};
*/

export default Select;
