// Fix hardcode issues
// Match imports
// Dont tap DOM directly

import React, { PureComponent } from 'react';
import './Button.css';

class Button extends PureComponent {
  constructor(props) {
    super(props);
    this.buttonStateChanger = this.buttonStateChanger.bind(this);
    console.log('Button Component started');
    this.state = { pressed: true };
    this.btnClass = 'initialButton';
  }

  // Fixed issue of tapping DOM directly. Instead of modifying
  // the target Object. I created a property on the Button
  // component called btnClass containing the Button.css class
  // name. The function buttonStateChanger now modifies the
  // button in the Virtual DOM and React handles the rest.
  buttonStateChanger() {
    console.log('Button State Changing');
    this.btnClass = 'pressedButton';
    const { pressed } = this.state;
    this.setState({ pressed: !pressed });
    console.log(`State change to ${pressed}!`);
  }

  // Fixed hardcoding by calling instance twice in App.jsx
  // and changing Button component to create only one button
  // upon calling. Also made the Button component return
  // statement more readable.
  render() {
    const { title } = this.props;
    return (
      <div>
        <button
          type="button"
          className={this.btnClass}
          onClick={this.buttonStateChanger}
        >
          {title}
        </button>
      </div>
    );
  }
}

export default Button;
