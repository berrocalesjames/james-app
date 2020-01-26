
import React, { PureComponent } from 'react';
import './Button.css';

class Button extends PureComponent {
  constructor(props) {
    super(props);
    this.buttonStateChanger = this.buttonStateChanger.bind(this);
    console.log('Button Component started');
    this.state = {
      pressed: true,
      btnClass: 'initialButton',
    };
    //this.btnClass = 'initialButton';
  }

  // Fixed issue of tapping DOM directly. Instead of modifying
  // the target Object. I created a property on the Button
  // component called btnClass containing the Button.css class
  // name 'initalButton'. The function buttonStateChanger now modifies the
  // btnClass to 'pressedButton', the Button.css class.
  buttonStateChanger() {
    console.log('Button State Changing');
    this.setState = 'ressedButton';
    //const { pressed } = this.state;
    //this.setState({ pressed: !pressed });
    //console.log(`State change to ${pressed}!`);
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
