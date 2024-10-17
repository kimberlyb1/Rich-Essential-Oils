// src/components/Home.jsx
import React from 'react';
import '../styles/Home.css'; // Import CSS for styling
import { Carousel } from 'react-responsive-carousel'; // Import Carousel
import natureImage from '../images/nature.png'; // Ensure the correct image path
import ChamomileImage from '../images/Chamomile.png';
import RosemaryImage from '../images/Rosemary.png';
import LemonImage from '../images/Lemon.png';
import YlangYlangImage from '../images/YlangYlang.png';
import ClarySageImage from '../images/ClarySage.png';

const Home = () => {
  return (
    <div 
      className="home" 
      style={{ backgroundImage: `url(${natureImage})` }} 
    >
      <header>
        <h1 className="main-title">Rich Essential Oils</h1>
        <p className="subtitle">Discover the Benefits of Natural Essential Oils</p>
      </header>

      <div className="welcome">
        <p>Welcome to Rich Essential Oils</p>
        <p>Explore the beauty of nature's finest oils with us.</p>
      </div>

      <div className="carousel-container" data-aos="fade-in">
        <Carousel infiniteLoop autoPlay interval={3000} showThumbs={false}>
          <div>
            <img src={ChamomileImage} alt="Chamomile" />
            <p className="legend">Chamomile Essential Oil</p>
          </div>
          <div>
            <img src={RosemaryImage} alt="Rosemary" />
            <p className="legend">Rosemary Essential Oil</p>
          </div>
          <div>
            <img src={LemonImage} alt="Lemon" />
            <p className="legend">Lemon Essential Oil</p>
          </div>
          <div>
            <img src={YlangYlangImage} alt="Ylang Ylang" />
            <p className="legend">Ylang Ylang Essential Oil</p>
          </div>
          <div>
            <img src={ClarySageImage} alt="Clary Sage" />
            <p className="legend">Clary Sage Essential Oil</p>
          </div>
        </Carousel>
      </div>

      <div className="signature">
        <p>With love,</p>
        <p>Kimberly</p>
      </div>

      <footer className="footer" data-aos="fade-up">
        <p>&copy; 2024 Rich Essential Oils. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
