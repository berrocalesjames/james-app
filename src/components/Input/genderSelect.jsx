import React, { Component } from 'react';

class GenderSelect extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      genderValue: '',
    };
  }

  handleChange(event) {
    this.setState({
      genderValue: event.target.value,
    });
  }

  render() {
    const { genderValue } = this.state;
    const { title } = this.props;
    return (
      <form>
        <label>
          {title}
          <select value={genderValue} onChange={this.handleChange}>
            <option value="gender nonconforming">Gender Nonconforming</option>
            <option value="agender">Agender</option>
            <option value="bigender">Bigender</option>
            <option value="cisgender">Cisgender</option>
            <option value="cisgender male">Cisgender Male</option>
            <option value="cisgender female">Cisgender Female</option>
          </select>
        </label>
      </form>
    );
  }
  // const { changed, value } = props;
}

export default GenderSelect;
