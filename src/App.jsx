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
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      user: {
        username: '',
        gender: '',
        hobby: '',
      },
      genderChoices: [
        'Gender Nonconforming',
        'Agender',
        'Bigender',
        'Cisgender',
        'Cisgender Male',
        'Cisgender Female',
      ],
      hobbyChoices: [
        'Sports',
        'Crafts',
        'Academics',
        'Nature',
        'Artistry',
        'Gaming',
        'Other',
      ],
    };
  }


  handleChange(event) {
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
        </div>
      </div>
    );
  }
}


export default App;
