// Card.js
import React from 'react';

const Card = ({ imageUrl, heading }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={heading} />
      <h4>{heading}</h4>
    </div>
  );
};

export default Card;
