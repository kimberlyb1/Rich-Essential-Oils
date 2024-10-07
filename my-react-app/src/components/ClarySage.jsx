import React from 'react';
import './ClarySage.css'; // Import the specific CSS file

const ClarySage = () => {
  return (
    <div className="oil-card">
      <img src="/images/clary-sage-oil.jpg" alt="Clary Sage Essential Oil" className="oil-image" />
      <h2>Clary Sage Essential Oil</h2>
      <p>
        Clary Sage oil is known for its calming effects and is often used in aromatherapy.
      </p>
      <h3>Benefits</h3>
      <ul>
        <li>Helps alleviate menstrual discomfort</li>
        <li>Promotes relaxation</li>
        <li>Balances hormones</li>
      </ul>
    </div>
  );
};

export default ClarySage;
