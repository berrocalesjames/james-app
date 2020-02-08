import React, { PureComponent } from 'react';

class Select extends PureComponent {
  render() {
    const { data, name, changed } = this.props;
    const options = data.map((elements) => (
      <option
        value={elements}
      >
        {elements}
      </option>
    ));
    return (
      <label>
        {name}
        <select onChange={changed}>
          <option>
              Select
            {' '}
            {name}
          </option>
          {options}
        </select>
      </label>
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
