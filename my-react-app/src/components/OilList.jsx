// src/components/OilList.jsx
import React from 'react';
import OilCard from './OilCard'; // Assuming you have an OilCard component for individual oils

const OilList = ({ oils }) => {
  return (
    <div className="oil-list">
      {oils.map((oil, index) => (
        <OilCard key={index} oil={oil} />
      ))}
    </div>
  );
};

export default OilList;
