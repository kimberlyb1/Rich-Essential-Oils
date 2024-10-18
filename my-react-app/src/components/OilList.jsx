// src/components/OilList.jsx
import React from 'react';
import ProductCard from './ProductCard';
import './Styles/OilList.css';

const oils = [
  {
    id: 1,
    name: 'Rosemary',
    image: 'rosemary.jpg',
    description: 'Rosemary essential oil is known for its invigorating scent and potential to enhance memory and concentration.',
    benefits: ['Enhances memory', 'Boosts mental clarity', 'Promotes hair growth']
  },
  {
    id: 2,
    name: 'Lemon',
    image: 'lemon.jpg',
    description: 'Lemon essential oil offers a refreshing aroma and has antibacterial properties.',
    benefits: ['Antibacterial', 'Uplifting', 'Promotes digestion']
  },
  // Add more oils as needed
];

const OilList = () => {
  return (
    <div className="oil-list">
      {oils.map((oil) => (
        <ProductCard
          key={oil.id}
          oil={oil} // Pass the entire oil object to the ProductCard
        />
      ))}
    </div>
  );
};

export default OilList;
