import React from 'react';
import '../styles/Home.css'; // Ensure your CSS file path is correct
import signatureImage from '../images/signature.png'; // Optional: If using an image

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Rich Essential Oils</h1>
      <p>Explore the beauty of nature's finest oils with us.</p>

      {/* Signature Section */}
      <div className="signature">
        <p>With love,</p>

        {/* Choose between text or image signature */}
        <p className="signature-text">Kimberly</p>
        {/* <img src={signatureImage} alt="Signature" className="signature-image" /> */}
      </div>
    </div>
  );
};

export default Home;
