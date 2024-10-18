// src/components/layout/Header.jsx
import React from 'react';
import oilImage from '../../images/oilimage.jpg'; // Adjust the path as needed
import '../Styles/Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="app-header">
      <h1>Rich Essential Oils</h1>
      <p>Discover the Benefits of Natural Essential Oils</p>

      {/* Image Container with the Oil Image */}
      <div className="image-container">
        <img src={oilImage} alt="Oil" className="fading-image" />
      </div>
    </header>
  );
};

export default Header;
