import './App.css';
import React, { Component } from 'react';
import { characters } from './data/characters';
import Rants from './Rants.js';
import './Rants.css';
import RantCard from './RantCard.js';
import './RantCard.css';
import Form from './Form.js';
import './Form.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allCharacters: [],
      selectedCharacter: ''
    }
  }

  componentDidMount = () => {
    // fetch('http:localhost:3001/api/v1/characters')
    // .then(response => response.json())
    // .then(data => {
    //   const characterData = data;
    //   this.setState({ allCharacters: characterData })
    // })
    this.setState({ allCharacters: characters });

  }

  submitCharacter = (event) => {
    event.preventDefault();
    const characterDropdown = document.getElementById('characterDropdown');
    const characterToSet = characterDropdown.value;
    this.setState({ selectedCharacter: characterToSet })
    setTimeout(() => { console.log('Test: ', this.state.selectedCharacter) }, 20);
  }

  render() {
    return (
      <main>
        <header>The Smash Ultimate Rant Generator</header>
        <div className="App">
          <div className="form-container">
            <Form submitCharacter={this.submitCharacter} />
          </div>
          <div className="rants-container">
            <Rants data={this.state.allCharacters} selection={this.state.selectedCharacter}/>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
