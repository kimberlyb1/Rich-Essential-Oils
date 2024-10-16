import React, { useState } from 'react';
import clarySageImage from '../images/Clary-Sage.jpg'; // Import the image
import '../styles/ClarySage.css';

const ClarySage = () => {
  const [isExpanded, setIsExpanded] = useState(false); // Single state to manage expansion

  const handleToggle = () => {
    setIsExpanded(!isExpanded); // Toggle expansion for both description and benefits
  };

  // Full description text
  const fullDescription = "Clary Sage oil is renowned for its ability to promote relaxation and alleviate stress. It is often used in aromatherapy for its calming effects and can help with hormone regulation. Additionally, Clary Sage is beneficial for skin health, reducing inflammation and irritation. It is also used to enhance mood and alleviate feelings of anxiety.";

  // Shortened version of the description
  const shortDescription = fullDescription.slice(0, 100); // Show first 100 characters

  // Full benefits list
  const fullBenefits = [
    "Promotes relaxation and alleviates stress",
    "Helps with hormone regulation",
    "Reduces inflammation and irritation on the skin",
    "Enhances mood and alleviates anxiety",
    "Can assist with menstrual discomfort"
  ];

  // Shortened version of the benefits (only the first 3 items)
  const shortBenefits = fullBenefits.slice(0, 3);

  return (
    <div className="oil-card">
      <img src={clarySageImage} alt="Clary Sage Essential Oil" className="oil-image" />
      <h2>Clary Sage Essential Oil</h2>
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

export default ClarySage;
