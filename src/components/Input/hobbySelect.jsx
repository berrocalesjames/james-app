import React, { Component } from 'react';

class HobbySelect extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      hobbyValue: '',
    };
  }

  handleChange(event) {
    this.setState({
      hobbyValue: event.target.value,
    });
  }

  render() {
    const { hobbyValue } = this.state;
    const { title } = this.props;
    return (
      <form>
        <label>
          {title}
          <select value={hobbyValue} onChange={this.handleChange}>academics, , , , 
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

export default HobbySelect;
