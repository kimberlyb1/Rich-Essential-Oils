import React from 'react';
import rosemaryImage from '../images/Rosemary.jpg'; // Import the image
import '../styles/Rosemary.css';

const Rosemary = () => {
  return (
    <div className="oil-card">
      <img src={rosemaryImage} alt="Rosemary Essential Oil" className="oil-image" />
      <h2>Rosemary Essential Oil</h2>
      <p>
        Rosemary oil is known for its stimulating properties and is often used for mental clarity.
      </p>
      <h3>Benefits</h3>
      <ul>
        <li>Improves concentration</li>
        <li>Stimulates hair growth</li>
        <li>Relieves muscle pain</li>
      </ul>
    </div>
  );
};

export default Rosemary;
