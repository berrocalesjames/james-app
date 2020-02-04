import React, { Component } from 'react';

class Select extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      gender: '',
      hobby: '',
    };
  }

  handleInputChange(event) {
    const { target } = event;
    const { value } = target;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { gender, hobby } = this.state;
    return (
      <form>
        <label>
        Please choose gender identification:
          <select name="gender" value={gender} onChange={this.handleInputChange}>
            <option value="gender nonconforming">Gender Nonconforming</option>
            <option value="agender">Agender</option>
            <option value="bigender">Bigender</option>
            <option value="cisgender">Cisgender</option>
            <option value="cisgender male">Cisgender Male</option>
            <option value="cisgender female">Cisgender Female</option>
          </select>
        </label>
        <br />
        <label>
          Please choose one or more hobbies:
          <select name="hobby" value={hobby} onChange={this.handleInputChange}>
            <option value="sports">Sports</option>
            <option value="crafts">Crafts</option>
            <option value="academics">Academics</option>
            <option value="nature">Nature</option>
            <option value="artistry">Artistry</option>
            <option value="gaming">Gaming</option>
            <option value="other">Other</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Select;
