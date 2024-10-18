// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Styles/ProductCard.css"; // Import CSS for styling

const ProductCard = ({ oil }) => {
  return (
    <Link to={`/product/${oil.name.toLowerCase()}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="oil-item"> {/* Using 'oil-item' class for styling */}
        <img src={oil.image} alt={oil.name} className="oil-image" /> {/* Use the oil-image class */}
        <h2>{oil.name} Essential Oil</h2> {/* Display oil name */}
        <p>{oil.description}</p> {/* Display oil description */}
        <h3>Benefits</h3> {/* Title for benefits */}
        <ul>
          {oil.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li> // List each benefit
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default ProductCard;
