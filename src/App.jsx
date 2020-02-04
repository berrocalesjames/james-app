import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import TextBox from './components/Input/TextBox';
import Select from './components/Input/Select';


/*
Next: Put arrays "gender" and "hobbies" in App/state and use instance props
Next: Add a state field to store the choices
Next: Wire function to handle event

1. Create a select component--DONE
2. Render two instances of the select component--DONE
3. First instance should be a gender selection
   a. First - Gender ID: gender fluid, gender variant, genderqueer, gender questioning,
   Gender ID: gender nonconforming, agender, bigender, cisgender, cisgender female, cisgender male.
   --only one option can be selected
   *_*_*_*Right now it is hard-coded to each component. Maybe I can create a functional select
    component and put all of the state data in the App component and render it with options
    as props?
4. Second instance will be hobby choices.
   Hobbies: sports, crafts, academics, nature, artistry, gaming, other
   --can select more than one option
   --"other" should have an input text box
Q1. What happens if I put the arrays in App/state? If I want the Select component to be as
    generic as possible, then specific state data should be consolidated to App? right?
Q2. Right now everything is hard coded in the Select component but shouldn't I create a functional
    select component and put all of the state data in the App component and render it with options
    as props?
Q3. Shouldn't the hobby select menu allow for multiple selections?
Q4.
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
        <Select />
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
