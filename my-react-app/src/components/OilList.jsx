import React from 'react';

const OilList = ({ oils }) => {
  return (
    <div className="oil-list">
      {oils.map((oil, index) => (
        <div key={index} className="oil-item">
          <img src={oil.image} alt={`${oil.name} oil`} className="oil-image"/>
          <h3>{oil.name}</h3>
          <p>{oil.description}</p>
          <ul>
            {oil.benefits.map((benefit, idx) => (
              <li key={idx}>{benefit}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default OilList;
