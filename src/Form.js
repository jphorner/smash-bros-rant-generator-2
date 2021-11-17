import React, { Component } from 'react';
import './Form.css';
import { characterNames } from './data/characterNames';

class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      characterOptions: [],
      selectedCharacter: '',
    }
  }

  componentDidMount = () => {
    const characterList = characterNames.map( character => {
      return (
        <option value={character} key={Math.random()}> {character}</option>
      )
    });
    this.setState({ characterOptions: characterList });
  };


  render() {
    return (
      <div className="form-container" id="formContainer">
        <form className="character-selection-form" id="characterSelectionForm" onSubmit={this.props.submitCharacter}>
          <label for="character-selection" className="selection-text">Select a character: </label>
          <select id="select-a-character" name="characters" className="character-dropdown" id="characterDropdown">
            {this.state.characterOptions}
          </select>
          <div className="submit-button-container">
            <button type="submit" className="submit-character-button" id="submitButton">MAKE ME RAGE</button>
          </div>
        </form>
      </div>
    )
  }
};

export default Form;
