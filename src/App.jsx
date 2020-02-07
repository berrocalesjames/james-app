import React, { PureComponent } from 'react';
import './App.css';
import Button from './components/Button/Button';
import TextBox from './components/Input/TextBox';
import Select from './components/Input/Select';


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
        <h1>Z-Dawg's Ugly App</h1>
        <div>
          <Button title="Press Me" />
          <Button title="Tap Me" />
          <TextBox value={value} changed={this.handleChange} />
          <Select />
          <p>{value}</p>
        </div>
      </div>
    );
  }
}


export default App;
