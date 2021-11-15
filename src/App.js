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
      selectedCharacter: '',
      savedRants: []
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

    const characterForm = document.getElementById('formContainer');
    characterForm.classList.add('shifted');
  }

  saveRant = (event) => {
    const card = document.querySelector('.rant-card');
    const cardId = card.id;

    const characterName = document.getElementById('characterName').innerText;
    const rantText = document.getElementById('rantText').innerText;
    let savedRant = { id: (this.state.savedRants.length + 1), name: characterName, text: rantText };
    this.state.savedRants.push(savedRant);
  }

  render() {
    return (
      <main>
        <header>Smash Ultimate Rant Generator</header>
        <div className="App">
          <div className="rants-container">
            <Rants data={this.state.allCharacters} selection={this.state.selectedCharacter} saveRant={this.saveRant}/>
          </div>
          <div className="form-container">
            <Form submitCharacter={this.submitCharacter} />
          </div>
        </div>
      </main>
    );
  }
}

export default App;
