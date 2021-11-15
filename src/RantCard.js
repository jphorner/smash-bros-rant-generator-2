import React from 'react';
import App from './App.js';
import Rants from './Rants.js';
import './RantCard.css';
import { intros, intros2, randomGripe } from './data/phrases.js';
import { moves } from './data/moves.js';

const RantCard = (props) => {
  const { alsoAppearsIn, availability, name, images, saveRant } = props;

  const randomInt = Math.round((Math.random() * 10))
  const introSwitch = randomInt % 2 + 1;
  const rantId = Math.round(Math.random() * 100000);

  return (
    <div className="rant-card" id={rantId}>
      <div className="rant-text-container">
        <h3 className="character-name" id="characterName">{props.name}</h3>
        <div className="rant-text" id="rantText">
          {introSwitch === 1 && <h4>{intros[randomInt]}{props.name}? {randomGripe[randomInt]}</h4>}
          {introSwitch === 2 && <h4>{intros2[randomInt]}{props.name}. {randomGripe[randomInt]}</h4>}
        </div>
      </div>
      <button className="save-rant-button" onClick={saveRant}></button>
    </div>
  )
}

export default RantCard;
