import React, { useState } from 'react';
import lemonImage from '../images/Lemon.png'; // Import the image
import '../styles/Lemon.css'; // Import the CSS

const Lemon = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to manage expansion

  const handleToggle = () => {
    console.log("Toggling:", !isExpanded); // Debugging log
    setIsExpanded(!isExpanded); // Toggle state
  };

  const fullDescription =
    "Lemon oil is known for its refreshing and cleansing properties. It helps boost energy levels, enhances mood, and supports immune function. Additionally, it has antibacterial properties and is often used for household cleaning.";

  const shortDescription = fullDescription.slice(0, 100);

  const fullBenefits = [
    "Boosts energy levels",
    "Enhances mood",
    "Supports immune function",
    "Antibacterial properties",
    "Useful for household cleaning"
  ];

  const shortBenefits = fullBenefits.slice(0, 3);

  return (
    <div className="oil-card">
      <img src={lemonImage} alt="Lemon Essential Oil" className="oil-image" />
      <h2>Lemon Essential Oil</h2>

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

      {/* Ensure the button always renders */}
      <button onClick={handleToggle}>
        {isExpanded ? "See Less" : "See More"}
      </button>
    </div>
  );
};

export default Lemon;
