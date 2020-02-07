import React, { Component } from 'react';

class Select extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  // On the change event for the select box pass the selected value back to the parent
  handleChange (event) {
    let selectedValue = event.target.value;
    this.props.onSelectChange(selectedValue);
}

  render() {
    let gender = this.state.gender;
    let options = arrayOfData.map((data) => (
      <option
        key={data.id}
        value={data.id}
      >
        {data.name}
      </option>
    ));

    return (
      <select name="customSearch" className="custom-search-select" onChange={this.handleChange}>
        <option>Select Item</option>
        {options}
      </select>
    );
  }
}

export default Select;
