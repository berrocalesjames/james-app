import React, { PureComponent } from 'react';
import './Button.css';

class Button extends PureComponent {
  constructor(props) {
    super(props);
    this.buttonStateChanger = this.buttonStateChanger.bind(this);
    console.log('Button Component started');
  }
  state = {
    pressed: true,
    btnClass: 'initialButton',
  };

  buttonStateChanger() {
    console.log('Button State Changing');
    this.setState({ 
      pressed: !this.state.pressed,
      btnClass: this.state.pressed ? 'pressedButton' : 'initialButton'
    });
  }

  render() {
    const { title } = this.props;
    return (
      <div>
        <button
          type="button"
          className={this.state.btnClass}
          onClick={this.buttonStateChanger}
        >
          {title}
        </button>
      </div>
    );
  }
}

export default Button;
