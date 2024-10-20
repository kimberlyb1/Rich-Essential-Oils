// OilList.jsx
import React from 'react';
import ProductCard from './ProductCard';

const OilList = ({ oils, onClick }) => (
  <div className="oil-list">
    {oils.map((oil) => (
      <ProductCard key={oil.id} oil={oil} onClick={() => onClick(oil)} />
    ))}
  </div>
);

export default OilList;
