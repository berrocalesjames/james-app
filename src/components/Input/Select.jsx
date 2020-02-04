import React, { Component } from 'react';

class Select extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      gender: '',
      hobby: [],
    };
  }

  handleChange(event) {
    this.setState({
      gender: event.target.value,
      hobby: event.target.value,
    });
  }

  render() {
    const { gender, hobby } = this.state;
    return (
      <form>
        <label >
        Please choose gender identification: 
          <select value={gender} onChange={this.handleChange}>
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
          <select multiple={true} value={hobby} onChange={this.handleChange}>
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
  // const { changed, value } = props;
}

export default Select;
