import React, { Component } from 'react';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      gender: [],
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    const { gender, value } = this.state;
    const { title } = this.props;
    return (
      <form>
        <label>
          {title}
          <select
            value={value} onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
  // const { changed, value } = props;
}

export default Select;
