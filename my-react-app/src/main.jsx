// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from React DOM
import AppWithRouter from './AppWithRouter'; // Main app component with router
import './Styles/index.css'; // Global CSS import

// Import and initialize AOS animation library
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS styles
AOS.init({ duration: 1000, easing: 'ease-in-out' }); // Initialize AOS with options

// Create root and render the app into the #root div from index.html
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWithRouter /> {/* Use AppWithRouter or App depending on your project */}
  </React.StrictMode>
);
