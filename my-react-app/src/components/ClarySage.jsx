mport React from 'react';
import clarySageImage from '../images/Clary-Sage.jpg'; // Import the image
import '../styles/ClarySage.css'; // Correct CSS import

const ClarySage = () => {
  return (
    <div className="oil-card">
      <img src={clarySageImage} alt="Clary Sage Essential Oil" className="oil-image" />
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

