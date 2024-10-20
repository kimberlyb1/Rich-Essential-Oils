// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppWithRouter from './AppWithRouter'; // Import your main App component
import './Styles/index.css'; // Import global CSS

// Import styles for Carousel and AOS animations
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles
import 'aos/dist/aos.css'; // AOS animation styles

import AOS from 'aos'; // Import AOS library

// Initialize AOS for animations with settings
AOS.init({ duration: 1000, easing: 'ease-in-out' });

// Create the root element for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app within React.StrictMode
root.render(
  <React.StrictMode>
    <AppWithRouter /> {/* Ensure AppWithRouter is used correctly */}
  </React.StrictMode>
);
