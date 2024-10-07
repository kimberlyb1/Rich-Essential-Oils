import React from 'react';
import './components/ProductCard.css';

const ProductCard = ({ oil, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <img src={oil.image} alt={oil.name} className="product-image" />
      <h2>{oil.name} Essential Oil</h2>
      <p>{oil.description}</p>
      <h3>Benefits</h3>
      <ul>
        {oil.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCard;
