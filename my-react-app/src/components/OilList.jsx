// src/components/OilList.jsx
import React from 'react';
import './OilList.css'; // Make sure this CSS file exists.

// Optional import: If you have an OilCard component
import OilCard from './OilCard'; // Comment out if not using

const OilList = ({ oils, onClick }) => {
  return (
    <div className="oil-list">
      {oils.map((oil) =>
        // Use OilCard if it exists, otherwise render oil directly
        OilCard ? (
          <OilCard key={oil.id} oil={oil} onClick={() => onClick(oil)} />
        ) : (
          <div
            key={oil.id}
            className="oil-item"
            onClick={() => onClick(oil)}
            data-aos="fade-up"
          >
            <img src={oil.image} alt={oil.name} className="oil-image" />
            <h3>{oil.name}</h3>
            <p>{oil.description}</p>
          </div>
        )
      )}
    </div>
  );
};

export default OilList;
