import React, { PureComponent } from 'react';

class Select extends PureComponent {
  renderOptions = () => {
    console.log('[Select.jsx] renderOptions()...');
    const { options } = this.props;
    const menu = options.map((option) => (
      <option key={option.id} value={option.value} label={option.label}>
        {option.label}
      </option>
    ));
    return menu;
  }

  render() {
    const {
      options,
      name,
      changed,
      title,
      value,
    } = this.props;
    console.log('[Select.jsx] rendering...');
    return (
      (
        <label htmlFor={name}>
          {`${title} : `}
          <select value={value} name={name} onChange={changed}>
            {options && options.length ? this.renderOptions() : null}
          </select>
        </label>
      )
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
