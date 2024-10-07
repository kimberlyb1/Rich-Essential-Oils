// src/components/Home.jsx
import React from 'react';
import './H'; // Import the CSS styles

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to Rich Essential Oils</h2>
      <p>Explore the world of essential oils and their benefits.</p>
      <img 
        className="home-image" 
        src="/images/nature-background.jpg" 
        alt="Nature" 
      /> {/* Ensure the path is correct */}
    </div>
  );
};

export default Home;
