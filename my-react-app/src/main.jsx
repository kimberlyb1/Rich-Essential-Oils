import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './Styles/index.css';
import 'aos/dist/aos.css';

// import AOS from 'aos';
// AOS.init();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Routes> */}
        <App />
      {/* </Routes> */}
    </BrowserRouter>
  </React.StrictMode>
);
