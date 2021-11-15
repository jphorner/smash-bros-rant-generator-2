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
    fetch('http:localhost:3001/api/v1/characters')
    .then(response => response.json())
    .then(data => {
      const characterData = data;
      this.setState({ allCharacters: characterData })
    })

  }

  render() {
    return (
      <main>
        <header>Yo</header>
        <div className="App">
          <div className="rants-container">
            <Form />
            <Rants data={this.state.allCharacters} />
          </div>
        </div>
      </main>
    );
  }
}

export default App;
