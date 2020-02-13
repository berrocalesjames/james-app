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
      gender: [
        'Gender Nonconforming',
        'Agender',
        'Bigender',
        'Cisgender',
        'Cisgender Male',
        'Cisgender Female',
      ],
      hobby: [
        'Sports',
        'Crafts',
        'Academics',
        'Nature',
        'Artistry',
        'Gaming',
        'Other',
      ],
      selectedGender: '',
      selectedHobby: '',
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
      selectedGender,
      selectedHobby,
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
            label="Gender"
            name="selectedGender"
            data={gender}
            changed={this.handleChange}
          />
          <br />
          <Select
            label="Hobby"
            name="selectedHobby"
            data={hobby}
            changed={this.handleChange}
          />
          <p>{username}</p>
          <p>
            You have chosen
            {' '}
            {selectedGender}
            {' '}
and
            {' '}
            {selectedHobby}
          </p>
        </div>
      </div>
    );
  }
}


export default App;
