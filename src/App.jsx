import React, { PureComponent } from 'react';
import './App.css';
import Button from './components/Button/Button';
import TextBox from './components/Input/TextBox';
import Select from './components/Input/Select';
import Radio from './components/Input/Radio';


class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('App Component Started');
    this.state = {
      user: {
        username: '',
        gender: '',
        hobby: '',
      },
      genderChoices: [
        { id: 'a1', value: 'gender_nonconforming', label: 'Gender Nonconforming' },
        { id: 'a2', value: 'agender', label: 'Agender' },
        { id: 'a3', value: 'bigender', label: 'Bigender' },
        { id: 'a4', value: 'cisgender', label: 'Cisgender' },
        { id: 'a5', value: 'cisgender_male', label: 'Cisgender Male' },
        { id: 'a6', value: 'cisgender_female', label: 'Cisgender Female' },
      ],
      hobbyChoices: [
        { id: 'b1', value: 'sports', label: 'Sports' },
        { id: 'b2', value: 'crafts', label: 'Crafts' },
        { id: 'b3', value: 'academics', label: 'Academics' },
        { id: 'b4', value: 'nature', label: 'Nature' },
        { id: 'b5', value: 'artistry', label: 'Artistry' },
        { id: 'b6', value: 'gaming', label: 'Gaming' },
        { id: 'b7', value: 'other', label: 'Other' },
      ],
    };
  }


  handleChange = (event) => {
    console.log(event.target);
    const { value } = event.target;
    const { name } = event.target;
    this.setState(
      (prevState) => ({
        user: {
          ...prevState.user,
          [name]: value,
        },
      }),
      () => {
        const { user } = this.state;
        console.log('[App.jsx] handleChange() user:', user);
      },
    );
  }

  render() {
    const {
      user,
      genderChoices,
      hobbyChoices,
    } = this.state;
    const {
      gender,
      hobby,
    } = user;
    return (
      <div className="App">
        <h1>Ugly App</h1>
        <h2>by Z-Dawg</h2>
        <div>
          <Button title="Press Me" />
          <Button title="Tap Me" />
          <TextBox
            name="username"
            value={user.username}
            changed={this.handleChange}
          />
          <Select
            title="Gender"
            name="gender"
            options={genderChoices}
            value={gender}
            changed={this.handleChange}

          />
          <br />
          <Select
            title="Hobby"
            name="hobby"
            options={hobbyChoices}
            value={hobby}
            changed={this.handleChange}
          />
          <p>{user.username}</p>
          <p>
            {gender && hobby ? `You have chosen ${gender} and ${hobby}` : null}
          </p>
          <Radio
            name='gender'
            title='Gender Choices'
            value={gender}
            changed={this.handleRadio}
            options={genderChoices}
            changed={this.handleChange}
          />
        </div>
      </div>
    );
  }
}


export default App;
