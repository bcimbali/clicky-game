import React from 'react';

const Card = (props) => (
  <div>
    <img src={props.image} alt={props.name} height="200" width="200" className="card-select grow img-thumbnail m-2 pointer"/>
  </div>
);

export default Card;