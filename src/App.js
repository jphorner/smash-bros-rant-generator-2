import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import Rants from './Rants.js';
import './Rants.css';
import RantCard from './RantCard.js';
import './RantCard.css';
import Form from './Form.js';
import './Form.css';
import SavedRants from './SavedRants.js';
import './SavedRants.css';

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
    fetch('api/v1/ultimate/characters')
    .then(response => response.json())
    .then(data => {
      const characterData = data;
      this.setState({ allCharacters: characterData })
    });
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
    this.setState({ savedRants: [...this.state.savedRants, savedRant]})
  }

  render() {
    return (
      <Router>
        <main>
          <header>Smash Ultimate Rant Generator</header>
          <NavLink exact to='/saved-rants' className="saved-rants-link navlink">Saved Rants</NavLink>
          <NavLink exact to='/' className="home-link navlink">Home</NavLink>
          <div className="App">
            <Routes>
              <Route path="/" element={
                <>
                  <Rants data={this.state.allCharacters} selection={this.state.selectedCharacter} saveRant={this.saveRant}/>
                  <Form submitCharacter={this.submitCharacter} />
                </>
                } />
              <Route exact path="/saved-rants" element={
                <>
                  <SavedRants savedRants={this.state.savedRants}/>
                </>
                } />
            </Routes>
          </div>
        </main>
      </Router>
    );
  }
}

export default App;
