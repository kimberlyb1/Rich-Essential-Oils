// src/AppWithRouter.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS animation CSS
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Intro from './components/Intro';
import Home from './components/Home';
import OilList from './components/OilList';
import ProductDetails from './components/ProductDetails';
import Chamomile from './components/Chamomile';
import Rosemary from './components/Rosemary';
import Lemon from './components/Lemon';
import YlangYlang from './components/YlangYlang';
import ClarySage from './components/ClarySage';
import './Styles/App.css';

const AppWithRouter = () => {
  const [oils, setOils] = useState([]); // State to store oils data
  const [loading, setLoading] = useState(true); // State for loading status
  const navigate = useNavigate();

  // Fetch oils data when component mounts
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/Rich.json`) // Fetch from the public folder
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse response as JSON
      })
      .then(data => {
        setOils(data); // Store oils data in state
        setLoading(false); // Set loading to false
      })
      .catch(error => {
        console.error('Error fetching oils:', error);
        alert('Failed to load oils data. Please try again later.');
        setLoading(false); // Stop loading on error
      });
  }, []);

  // Initialize AOS animations on mount
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="App">
      <Router>
        <header className="app-header">
          <h1>Rich Essential Oils</h1>
          <p>Discover the Benefits of Natural Essential Oils</p>
          <Navbar />
          <SearchBar />
          <div className="image-container">
            <img src="/images/oilImage.jpg" alt="Oil" className="fading-image" />
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/oils"
              element={
                loading ? (
                  <p>Loading oils...</p>
                ) : oils.length === 0 ? (
                  <p>No oils available at the moment.</p>
                ) : (
                  <OilList
                    oils={oils} // Pass oils data as a prop
                    onClick={(oil) => navigate(`/product-details/${oil.name.toLowerCase()}`)}
                  />
                )
              }
            />
            <Route path="/rosemary" element={<Rosemary />} />
            <Route path="/lemon" element={<Lemon />} />
            <Route path="/ylang-ylang" element={<YlangYlang />} />
            <Route path="/clary-sage" element={<ClarySage />} />
            <Route path="/chamomile" element={<Chamomile />} />
            <Route
              path="/product-details/:id"
              element={<ProductDetails oils={oils} />} // Pass oils data to ProductDetails
            />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>&copy; 2024 Rich Essential Oils. All rights reserved.</p>
        </footer>
      </Router>
    </div>
  );
};

export default AppWithRouter;
