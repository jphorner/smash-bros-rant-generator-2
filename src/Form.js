import React, { Component } from 'react';
import './Form.css';
import { characters } from './data/characters.js';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      characterOptions: [],
      selectedCharacter: ''
    }
  }

  componentDidMount = () => {
    const characterList = characters.map( character => {
      return (
        <option value={character.name.toString()} key={Math.random()}> {character.name}</option>
      )
    });
    this.setState({ characterOptions: characterList })
  };

  // submitCharacter = (event) => {
  //   event.preventDefault();
  //   const characterDropdown = document.getElementById('characterDropdown');
  //   const characterToSet = characterDropdown.value;
  //   this.setState({ selectedCharacter: characterToSet })
  //   setTimeout(() => { console.log(this.state.selectedCharacter) }, 20);
  // }

  render() {
    return (
      <form className="character-selection-form" id="characterSelectionForm" onSubmit={this.props.submitCharacter}>
        <label for="character-selection" className="selection-text">Select a character: </label>
        <select id="select-a-character" name="characters" className="character-dropdown" id="characterDropdown">
          {this.state.characterOptions}
        </select>
        <div className="submit-button-container">
          <button type="submit" className="submit-character-button" id="submitButton">MAKE ME RAGE</button>
        </div>
      </form>
    )
  }
};

export default Form;
