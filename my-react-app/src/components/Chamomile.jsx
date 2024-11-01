import React, { useState } from 'react';
import chamomileImage from '../images/Chamomile.png'; // Import the image
import '../styles/Chamomile.css';
const Chamomile = () => {
  const [isExpanded, setIsExpanded] = useState(false); // Single state to manage expansion
  const handleToggle = () => {
    setIsExpanded(!isExpanded); // Toggle expansion for both description and benefits
  };
  // Full description text
  const fullDescription = "Chamomile oil is celebrated for its calming and soothing effects. It helps reduce anxiety, promotes better sleep, and is gentle on the skin. Chamomile also helps reduce inflammation and skin irritation, making it a popular choice for sensitive skin. Chamomile oil can be used in aromatherapy to promote relaxation and is also effective for treating headaches and muscle pain.";
  // Shortened version of the description
  const shortDescription = fullDescription.slice(0, 100); // Show first 100 characters
  // Full benefits list
  const fullBenefits = [
    "Promotes relaxation and reduces anxiety",
    "Improves sleep quality",
    "Soothes irritated skin and reduces inflammation",
    "Treats headaches and muscle pain",
    "Boosts mood and helps alleviate depression"
  ];
  // Shortened version of the benefits (only the first 3 items)
  const shortBenefits = fullBenefits.slice(0, 3);
  return (
    <div className="oil-card">
      <img src={ChamomileImage} alt="Chamomile Essential Oil" className="oil-image" />
      <h2>Chamomile Essential Oil</h2>
      {/* Description text with See More */}
      <p>{isExpanded ? fullDescription : `${shortDescription}...`}</p>
      {/* Benefits list: display full benefits if expanded, otherwise a shortened list */}
      {isExpanded && (
        <>
          <h3>Benefits</h3>
          <ul>
            {fullBenefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </>
      )}
      <button onClick={handleToggle}>
        {isExpanded ? "See Less" : "See More"}
      </button>
    </div>
  );
};
export default Chamomile;