// src/components/layout/Header.jsx
import React, { useEffect, useState } from 'react'; 
import oilImage from '..image/oilimage.jpg'; // Ensure this path is correct
import '../Styles/Header.css'; // Ensure correct path to CSS

const Header = () => {
  const [isImageActive, setImageActive] = useState(false);

  // Apply the 'active' class after the component mounts
  useEffect(() => {
    const timer = setTimeout(() => setImageActive(true), 100); // Delay to trigger animation
    return () => clearTimeout(timer); // Cleanup the timeout
  }, []);

  return (
    <header className="app-header">
      <h1>Rich Essential Oils</h1>
      <p>Discover the Benefits of Natural Essential Oils</p>

      <div className="image-container">
        {/* Conditionally apply the 'active' class */}
        <img 
          src={oilImage} 
          alt="Oil" 
          className={`fading-image ${isImageActive ? 'active' : ''}`} 
        />
      </div>
    </header>
  );
};

export default Header;
