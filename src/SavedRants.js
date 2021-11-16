import App, { Component } from 'react';
import './SavedRants.css';
import './RantCard.css';


const SavedRants = ({savedRants}) => {
  console.log(savedRants);
  const savedCards = savedRants.map( card => {
    return(
      <div className="rant-card" id={card.id}>
        <div className="rant-text-container">
          <h3 className="character-name" id="characterName">{card.name}</h3>
          <div className="rant-text" id="rantText">
            {card.text}
          </div>
        </div>
      </div>
    )
  });

  return (
    <div className="saved-rants-container">
      <section className="saved-rants">
        {savedCards}
      </section>
    </div>
  )
}

export default SavedRants;
