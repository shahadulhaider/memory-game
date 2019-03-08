import React from 'react';

import GameCard from './GameCard';
import './Game.css';

const Game = (props) => {
  return (
    
      <div className="cardgrid">
        {
          props.cards.map(card => (
            <GameCard
              handleClick={props.handleClick}
              cardId={card.id}
              guessed={props.guessed}
              key={card.id}
            >
              <img src={require(`../../../public/images/${card.src}.jpg`)}
                alt={card.id}
                data-value={card.id}
                height="200"
                width="300"
                className="responsive-img"
              >
              </img>
            </GameCard>
          ))
        }
      </div>
    
  );
}

export default Game;
