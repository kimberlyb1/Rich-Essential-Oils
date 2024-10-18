import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Make sure to adjust this import based on your file structure
import './index.css'; // Your global CSS file

// Import Carousel and AOS styles
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel CSS
import 'aos/dist/aos.css'; // AOS CSS
import AOS from 'aos';

// Initialize AOS
AOS.init({ duration: 1000, easing: 'ease-in-out' });

// Render the App component into the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
