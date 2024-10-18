// src/components/OilList.jsx
import React from 'react';
import ProductCard from './ProductCard'; // Import the ProductCard component
import oils from '../data'; // Import the oils data from the data file
import '../Styles/OilList.css'; // Import CSS for styling

const OilList = () => {
  return (
    <div className="oil-list">
      {oils.map((oil) => (
        <ProductCard
          key={oil.name} // Change this to `oil.id` if your oil objects have unique IDs
          oil={oil} // Pass the entire oil object to the ProductCard
        />
      ))}
    </div>
  );
};

export default OilList;
