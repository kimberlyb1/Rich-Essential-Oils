import React, { useState } from 'react';
import ylangYlangImage from '../images/YlangYlang.webp'; // Import the image
import '../styles/YlangYlang.css'; // Import the CSS

const YlangYlang = () => {
  const [isExpanded, setIsExpanded] = useState(false); // Manage expanded state

  const handleToggle = () => {
    console.log("Toggling:", !isExpanded); // Debugging log
    setIsExpanded(!isExpanded); // Toggle expansion state
  };

  const fullDescription =
    "Ylang Ylang oil is known for its floral fragrance. It helps reduce stress, boosts confidence, and enhances mood. It is also commonly used in perfumes and for relaxation during aromatherapy.";

  const shortDescription = fullDescription.slice(0, 100);

  const fullBenefits = [
    "Reduces stress",
    "Boosts confidence",
    "Enhances mood",
    "Used in perfumes",
    "Promotes relaxation in aromatherapy"
  ];

  const shortBenefits = fullBenefits.slice(0, 3);

  return (
    <div className="oil-card">
      <img src={ylangYlangImage} alt="Ylang Ylang Essential Oil" className="oil-image" />
      <h2>Ylang Ylang Essential Oil</h2>

      <p>{isExpanded ? fullDescription : `${shortDescription}...`}</p>

      {isExpanded && (
        <>
          <h3>Benefits</h3>
          <ul style={{color: 'black'}}>
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

export default YlangYlang;
