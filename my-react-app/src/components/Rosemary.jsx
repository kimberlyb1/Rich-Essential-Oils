import React, { useState } from 'react';
import rosemaryImage from '../images/Rosemary.jpg'; // Import the image
import '../styles/Rosemary.css'; // Import the CSS

const Rosemary = () => {
  const [isExpanded, setIsExpanded] = useState(false); // Single state to manage expansion

  const handleToggle = () => {
    setIsExpanded(!isExpanded); // Toggle expansion for both description and benefits
  };

  const fullDescription =
    "Rosemary oil is known for enhancing memory and concentration. It stimulates mental activity, promotes hair growth, and alleviates stress and fatigue. It’s also used to relieve muscle pain and improve circulation.";

  const shortDescription = fullDescription.slice(0, 100); // First 100 characters

  const fullBenefits = [
    "Enhances memory and concentration",
    "Promotes hair growth",
    "Alleviates stress and fatigue",
    "Relieves muscle pain",
    "Improves circulation"
  ];

  const shortBenefits = fullBenefits.slice(0, 3); // First 3 benefits

  return (
    <div className="oil-card">
      <img src={rosemaryImage} alt="Rosemary Essential Oil" className="oil-image" />
      <h2>Rosemary Essential Oil</h2>
      <p>{isExpanded ? fullDescription : `${shortDescription}...`}</p>
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

export default Rosemary;
