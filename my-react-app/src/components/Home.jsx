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

// Oil data array
const oils = [
  {
    name: 'Chamomile',
    description: 'Calming and soothing',
    image: ChamomileImage,
    benefits: ['Reduces anxiety', 'Promotes sleep', 'Soothes skin irritation']
  },
  {
    name: 'Rosemary',
    description: 'Enhances memory and focus',
    image: RosemaryImage,
    benefits: ['Improves concentration', 'Reduces stress', 'Supports digestion']
  },
  {
    name: 'Lemon',
    description: 'Cleansing and refreshing',
    image: LemonImage,
    benefits: ['Boosts mood', 'Improves digestion', 'Detoxifies body']
  },
  {
    name: 'Ylang Ylang',
    description: 'Boosts confidence',
    image: YlangYlangImage,
    benefits: ['Reduces stress', 'Promotes relaxation', 'Enhances mood']
  },
  {
    name: 'Clary Sage',
    description: 'Promotes relaxation',
    image: ClarySageImage,
    benefits: ['Eases menstrual discomfort', 'Reduces anxiety', 'Enhances sleep']
  },
];

// Main Home component
const Home = () => {
  return (
    <div 
      className="home" 
      style={{ backgroundImage: `url(${natureImage})` }} 
    >
      <header>
        <h1 className="main-title">Rich Essential Oils</h1>
        <p className="typing">Discover the Benefits of Natural Essential Oils</p>
      </header>

      <div className="welcome">
        <p>Welcome to Rich Essential Oils</p>
        <p>Explore the beauty of nature's finest oils with us.</p>
      </div>

      <div className="carousel-container" data-aos="fade-in">
        <Carousel infiniteLoop autoPlay interval={3000} showThumbs={false}>
          {oils.map((oil, index) => (
            <div key={index}>
              <img src={oil.image} alt={`${oil.name} oil`} />
              <p className="legend">{oil.name} Essential Oil</p>
            </div>
          ))}
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
