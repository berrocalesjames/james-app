import React, { Component } from 'react';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      gender: [
        'gender fluid', 'gender variant', 'genderqueer', 'gender questioning',
        'gender nonconforming', 'agender', 'bigender', 'cisgender', 'cisgender female', 'cisgender male',
      ],
    };
  }

  render() {
    const { gender } = this.state;
    const { title } = this.props;
    return (
      <form>
        <label>
              {title}
          <select value={['gender fluid', 'gender variant', 'genderqueer', 'gender questioning',
        'gender nonconforming', 'agender', 'bigender', 'cisgender', 'cisgender female', 'cisgender male',]} onChange={this.handleChange} >
          </select>
        </label>
      </form>
    );
  }
  // const { changed, value } = props;
}

export default Select;
