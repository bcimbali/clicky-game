import React from 'react';

const Card = (props) => (
  <div className="card-holder">
    <img src={props.image} alt={props.name} className="card-select grow img-thumbnail m-2 pointer"/>
  </div>
);

export default Card;