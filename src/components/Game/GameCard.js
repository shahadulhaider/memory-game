import React from 'react';

import './GameCard.css';

const GameCard = (props) => {
  return (
    <div
      className={props.cheat && props.guessed.includes(props.cardId.toString()) ? "trumpcard border border-danger" : "trumpcard"}
      onClick={props.handleClick}
      data-value={props.cardId}
      data-guessed={props.guessed}
    >
      {props.children}
    </div>
  )
}

export default GameCard;
