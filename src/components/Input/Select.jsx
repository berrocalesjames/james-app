import React, { Component } from 'react';

class Select extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const selectedValue = event.target.value;
    this.props.onSelectChange(selectedValue);
  }

  render() {
    const { data } = this.props;
    const options = data.map((data) => (
      <option
        value={data}
      >
        {data}
      </option>
    ));
    return (
      <select onChange={this.handleChange}>
        <option>
Select
          {this.props.name}
        </option>
        {options}
      </select>
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
