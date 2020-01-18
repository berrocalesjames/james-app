import React, { PureComponent } from 'react';
import './Button.css';

class Button extends PureComponent {
  render() {
    return (
      <div>
        <button type="button" className="initialButton" onClick={this.props.clicked}>{this.props.title}</button>
      </div>
    );
  }
}

export default Button;
