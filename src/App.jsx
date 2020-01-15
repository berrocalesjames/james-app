import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Buttons';


class App extends Component {
  constructor(props) {
    super(props);
    this.buttonStateChanger = this.buttonStateChanger.bind(this);
    console.log('Component started');
    this.state = { pressed: true };
  }
  // state = {
  //   pressed: false,
  // };

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
      <div className="App">
        <Button title="Press Me!!" clicked={this.buttonStateChanger} />
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
