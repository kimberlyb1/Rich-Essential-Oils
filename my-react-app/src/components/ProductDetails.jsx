// src/components/ProductDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'; // Import the CSS styles

// Sample data for essential oils (You might want to move this to a separate file)
const essentialOils = [
  { name: 'Rosemary', image: '/images/rosemary-oil.jpg', description: 'Rosemary oil is known for its stimulating properties.' },
  // ...other oils
];

const ProductDetails = () => {
  const { name } = useParams(); // Get the name from the URL
  console.log(name)
  const oil = essentialOils.find(o => o.name.toLowerCase() === name.toLowerCase()); // Find the oil by name

  if (!oil) return <p>Product not found.</p>;

  return (
    <div className="product-details">
      <h2>{oil.name}</h2>
      <img src={oil.image} alt={`${oil.name} oil`} />
      <p>{oil.description}</p>
      {/* Additional details can go here */}
    </div>
  );
};

export default ProductDetails;
