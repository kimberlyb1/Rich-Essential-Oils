import React from 'react';
import './Rosemary.css';

const Rosemary = () => {
  return (
    <div className="oil-card">
      {/* Add the image of Rosemary oil */}
      <img src="/images/rosemary-oil.jpg" alt="Rosemary Essential Oil" className="oil-image" />
      <h2>Rosemary Essential Oil</h2>
      <p>
        Rosemary oil is widely known for its ability to improve memory and focus.
        It stimulates mental activity, helps with mental fatigue, and reduces stress.
        Rosemary also has anti-inflammatory and pain-relieving properties, making it 
        a favorite for muscle pain and headaches.
      </p>
      <h3>Benefits</h3>
      <ul>
        <li>Enhances memory and concentration</li>
        <li>Relieves muscle pain</li>
        <li>Promotes hair growth</li>
      </ul>
    </div>
  );
};

export default Rosemary;
