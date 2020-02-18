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
      username: '',
      gender: {
        key: 'a1',
        selection: '',
        optionList: [
          'Gender Nonconforming',
          'Agender',
          'Bigender',
          'Cisgender',
          'Cisgender Male',
          'Cisgender Female',
        ],
      },
      hobby: {
        key: 'b2',
        selection: '',
        optionList: [
          'Sports',
          'Crafts',
          'Academics',
          'Nature',
          'Artistry',
          'Gaming',
          'Other',
        ],
      },
    };
  }


  handleChange(event) {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    this.setState({ [name]: value });
  }

  render() {
    const {
      username,
      gender,
      hobby,
    } = this.state;
    return (
      <div className="App">
        <h1>Ugly App</h1>
        <h2>by Z-Dawg</h2>
        <div>
          <Button title="Press Me" />
          <Button title="Tap Me" />
          <TextBox
            name="username"
            value={username}
            changed={this.handleChange}
          />
          <Select
            key={gender.key}
            label="Gender"
            name="selection"
            value={gender.optionList}
            changed={this.handleChange}
          />
          <br />
          <Select
            key={hobby.key}
            label="Hobby"
            name="selection"
            value={hobby.optionList}
            changed={this.handleChange}
          />
          <p>{username}</p>
          <p>
            You have chosen
            {' '}
            {gender.selection}
            {' '}
and
            {' '}
            {hobby.selection}
          </p>
        </div>
      </div>
    );
  }
}


export default App;
