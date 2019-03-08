import React from 'react';

const Instructins = (props) => {
  return (
    <div className="container center">
      <div className="card z-depth-0">
        <div className="card-card-content">
          {props.instructions}
        </div>
        <div className="card-title hide-on-large-only">
          Current Score: {props.currentScore} / Top Score: {props.topScore}
        </div>
      </div>
    </div>
  )
};

export default Instructins;
