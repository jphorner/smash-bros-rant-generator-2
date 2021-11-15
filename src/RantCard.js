import React from 'react';
import App from './App.js';
import Rants from './Rants.js';
import './RantCard.css';
import { intros, intros2, randomGripe } from './data/phrases.js';
import { moves } from './data/moves.js';

const RantCard = (props) => {
  const { alsoAppearsIn, availability, name, images } = props;

  const randomInt = Math.round((Math.random() * 10))
  const introSwitch = randomInt % 2 + 1;

  return (
    <div className="rant-card">
      <div className="rant-text-container">
        <h3>{props.name}</h3>
        {introSwitch === 1 && <h4>{intros[randomInt]}{props.name}? {randomGripe[randomInt]}</h4>}
        {introSwitch === 2 && <h4>{intros2[randomInt]}{props.name}. {randomGripe[randomInt]}</h4>}
      </div>
      <button className="save-rant-button"></button>
    </div>
  )
}

export default RantCard;
