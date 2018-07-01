import React from 'react';

const Card = (props) => (
  <div>
    <img src={props.image} alt={props.name} height="200" width="200" className="img-thumbnail"/>
  </div>
);

export default Card;