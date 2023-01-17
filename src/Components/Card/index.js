import React from 'react';
import './Card.css';

const Card = ({ title, description, image }) => {
  return (
    <div className="card row">
      <div className="col-12 col-md-4">
        <div className="card-image">
          <img src={image} alt={title} className="img-fluid" />
        </div>
      </div>
      <div className="col-12 col-md-8">
        <div className="card-content">
          <div className="card-title">{title}</div>
          <div className="card-description">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
