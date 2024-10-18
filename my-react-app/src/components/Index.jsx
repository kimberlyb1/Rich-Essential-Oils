import React from 'react'; // Import React
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering
import App from './App'; // Adjust this import based on your file structure
import './index.css'; // Your global CSS file

// Import Carousel and AOS styles
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel CSS
import 'aos/dist/aos.css'; // AOS CSS
import AOS from 'aos'; // Import AOS library

// Initialize AOS
AOS.init({ duration: 1000, easing: 'ease-in-out' });

// Render the App component into the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
