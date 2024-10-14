import React from 'react';
import chamomileImage from '../images/Chamomile.png'; // Import the image
import '../styles/Chamomile.css';

const Chamomile = () => {
  return (
    <div className="oil-card">
      <img src={chamomileImage} alt="Chamomile Essential Oil" className="oil-image" />
      <h2>Chamomile Essential Oil</h2>
      <p>
        Chamomile oil is celebrated for its calming and soothing effects. It helps reduce 
        anxiety, promotes better sleep, and is gentle on the skin. Chamomile also helps 
        reduce inflammation and skin irritation, making it a popular choice for sensitive skin.
      </p>
      <h3>Benefits</h3>
      <ul>
        <li>Promotes relaxation and reduces anxiety</li>
        <li>Improves sleep quality</li>
        <li>Soothes irritated skin and reduces inflammation</li>
      </ul>
    </div>
  );
};

export default Chamomile;