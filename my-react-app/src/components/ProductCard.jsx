// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Styles/ProductCard.css';

const ProductCard = ({ oil }) => {
  return (
    <Link to={`/product/${oil.name.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="oil-item"> {/* Using 'oil-item' class from the previous style */}
        <img src={oil.image} alt={oil.name} className="oil-image" /> {/* Use the oil-image class */}
        <h2>{oil.name} Essential Oil</h2>
        <p>{oil.description}</p>
        <h3>Benefits</h3>
        <ul>
          {oil.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default ProductCard;
