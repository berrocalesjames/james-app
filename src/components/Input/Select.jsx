import React, { PureComponent } from 'react';

class Select extends PureComponent {
  render() {
    const {
      options,
      name,
      changed,
      title,
      value,
    } = this.props;
    const menu = options.map((item) => (
      <option
        key={item}
        value={item}
      >
        {item}
      </option>
    ));
    console.log('[Select.jsx] rendering...');
    return (
      menu.length
        ? (
          <label htmlFor={name}>
            {`${title} : `}
            <select value={value} name={name} onChange={changed}>
              {menu}
            </select>
          </label>
        ) : null
    );
  }
}


export default Select;

/*
const Select = (props) => (
  <div>
    <label htmlFor={props.name}>
      {' '}
      {props.title}
      {' '}
    </label>
    <select
      id={props.name}
      name={props.name}
      value={props.value}
      onChange={props.handleInput}
    >
      <option value="" disabled>
        {props.placeholder}
      </option>
      {props.options.map((option) => (
        <option key={option} value={option} label={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);
*/

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
