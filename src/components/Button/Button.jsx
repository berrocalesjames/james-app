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
  }

  buttonStateChanger() {
    console.log('Button State Changing');
    const { pressed, btnClass } = this.state;
    this.setState((prevState) => ({
      pressed: !prevState,
      btnClass: pressed ? 'pressedButton' : 'initialButton',
    }));
    console.log(`Button state is ${pressed}`);
    console.log(`Button CSS class is now ${btnClass}`);
  }

  render() {
    const { title } = this.props;
    const { btnClass } = this.state;
    return (
      <div>
        <button
          type="button"
          className={btnClass}
          onClick={this.buttonStateChanger}
        >
          {title}
        </button>
      </div>
    );
  }
}

export default Button;
