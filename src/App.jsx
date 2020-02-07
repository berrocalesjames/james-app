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
      selectedGender: 'Unselected',
      selectedHobby: 'Unselected',
    };
  }


  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { selectedGender, selectedHobby, value } = this.state;
    return (
      <div className="App">
        <h1>Ugly App</h1>
        <h2>by Z-Dawg</h2>
        <div>
          <Button title="Press Me" />
          <Button title="Tap Me" />
          <TextBox value={value} changed={this.handleChange} />
          <Select data={this.state.gender} />
          <Select data={this.state.hobby} />
          <p>{value}</p>
          <p>
            {selectedGender}
            and
            {selectedHobby}
          </p>
        </div>
      </div>
    );
  }
}


export default App;
