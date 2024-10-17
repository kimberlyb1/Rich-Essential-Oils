// src/components/Home.jsx
import React from 'react';
import '../styles/Home.css'; // Import CSS for styling
import natureImage from '../images/nature.png'; // Ensure the correct image path

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${natureImage})` }}>
      <header>
        <h1 className="main-title">Rich Essential Oils</h1>
        <p className="subtitle">Discover the Benefits of Natural Essential Oils</p>
      </header>

      <div className="welcome">
        <p>Welcome to Rich Essential Oils</p>
        <p>Explore the beauty of nature's finest oils with us.</p>
      </div>

      <div className="signature">
        <p>With love,</p>
        <p>Kimberly</p>
      </div>

      <footer>
        <p>© 2024 Rich Essential Oils. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
