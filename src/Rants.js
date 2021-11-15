import App from './App.js';
import React from 'react';
import RantCard from './RantCard.js';
import './Rants.css';

const Rants = (props) => {
  const { data, selection, saveRant } = props;
  const rantCollection = [];
  const matchingCharacter = data.find( character => character.name === selection);
  rantCollection.push(matchingCharacter);
  console.log(rantCollection);

  const characterRants = rantCollection.map( character => {
    if (character) {
      return (
        <RantCard
          key={Math.random()}
          name={character.name}
          alsoAppearsIn={character.alsoAppearsIn}
          availability={character.availability}
          order={character.order}
          saveRant={saveRant}
        />
      )
    }
  })

  return (
    <div className="rant-display">
      {rantCollection.length && characterRants}
    </div>
  )
}

export default Rants;
