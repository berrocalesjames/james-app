import React, { PureComponent } from 'react';

class Select extends PureComponent {
  render() {
    const {
      value,
      name,
      changed,
      label,
    } = this.props;
    const menu = value.map((options) => (
      <option
        key={value.key}
        value={options}
      >
        {options}
      </option>
    ));
    return (
      <label>
        {label}
        <select name={name} onChange={changed}>
          <option>
            Select
            {' '}
          </option>
          {menu}
        </select>
      </label>
    );
  }
}
// return this.props.persons.map((person, index) => {
//   return (
//     <Person
//       click={() => this.props.clicked(index)}
//       name={person.name}
//       age={person.age}
//       key={person.id}
//       changed={event => this.props.changed(event, person.id)}
//     />
//   );
// })

export default Select;
