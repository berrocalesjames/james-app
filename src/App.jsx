import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Buttons';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false,
    };
    this.buttonStateChanger = this.buttonStateChanger.bind(this)
    console.log('Component started');
    console.log(this.state)
  }

  buttonStateChanger() {
    const buttonState = this.state.pressed;
    this.setState({ pressed: !buttonState });
    console.log('State changed to true!');
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <Button title="Press Me!!" clicked={this.buttonStateChanger}/>
        <Button title="Tap Me!!" />
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
