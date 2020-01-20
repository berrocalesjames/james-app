import React, { PureComponent } from 'react';
import './Button.css';

class Button extends PureComponent {
  constructor(props) {
    super(props);
    this.buttonStateChanger = this.buttonStateChanger.bind(this);
    console.log('Component started');
    this.state = { pressed: true };
  }

  buttonStateChanger(e) {
    e.preventDefault();
    e.target.style.background = 'red';
    const { pressed } = this.state;
    this.setState({ pressed: !pressed });
    // this.setState({ pressed: !this.state.pressed });
    console.log(`State change to ${pressed}!`);
    console.log(this.state);
  }


  render() {
    return (
      <div>
        <button type="button" className="initialButton" onClick={this.buttonStateChanger}>Press Me!</button>
        <br />
        <button type="button" className="initialButton" onClick={this.buttonStateChanger}>Tap Me!!</button>
      </div>
    );
  }
}

export default Button;
