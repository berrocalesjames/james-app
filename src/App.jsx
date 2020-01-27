import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';

// Create input box component similar to Button.
// On App create a new variable called username and add it into state
// When a user types into the input box it needs to update the variable.
// Whatever is being updated needs to be displayed in the input box.
// The variable is on App so whatever I change needs to be updated on App
// Try onChange first.
// no state in input component. State must be inculded in the parent of input
// no hooks

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('App Component Started');
  }

  render() {
    return (
      <div className="App">
        <Button title="Press Me" />
        <Button title="Tap Me" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            James
            <code>src/App.js</code>
            and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


export default App;
