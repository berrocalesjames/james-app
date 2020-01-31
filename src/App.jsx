import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import TextBox from './components/Input/TextBox';
import Select from './components/Input/Select';


/*
1. Create a select component
2. Render two instances of the select component
3. First instance should be a gender selection
4. Second instance will be
5. First - Gender ID: gender fluid, gender variant, genderqueer, gender questioning,
   gender nonconforming, agender, bigender, cisgender, cisgender female, cisgender male.
   --only one option can be selected
6. Second - Hobbies: sports, crafts, academics, nature, artistry, gaming, other
   --can select more than one option
   --"other" should have an input text box
*/

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('App Component Started');
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: '',
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    return (
      <div className="App">
        <Button title="Press Me" />
        <Button title="Tap Me" />
        <TextBox value={value} changed={this.handleChange} />
        <p>{value}</p>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            James
            <code>src/App.js </code>
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
