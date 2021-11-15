import React from 'react';
import RantCard from './RantCard.js';
import './Rants.css';

const Rants = ({ data }) => {
  const rantDisplay = data.map( character => {
    return (
      <RantCard
        key={Math.random()}
        name={character.name}
        alsoAppearsIn={character.alsoAppearsIn}
        availability={character.availability}
        order={character.order}
      />
    )
  })

  return (
    <div className="rant-display">
      {rantDisplay}
    </div>
  )
}

export default Rants;
