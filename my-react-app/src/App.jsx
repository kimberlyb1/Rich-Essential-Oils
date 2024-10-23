// src/AppWithRouter.jsx
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AOS from 'aos'; // Animation library
import 'aos/dist/aos.css'; // AOS CSS
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
import Blog from './components/Blog'; // New Component
import Common from './components/Common'; // New Component
import Data from './components/Data'; // New Component
import FadingImage from './components/FadingImage'; // New Component
import Hero from './components/Hero'; // New Component
import ScrollToTop from './components/ScrollToTop'; // New Component
import Sidebar from './components/Sidebar'; // New Component
import Testimonials from './components/Testimonials'; // New Component
import './Styles/App.css'; // App CSS

const App = () => {
  const [oils, setOils] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/Rich.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch oils data');
        }
        return response.json();
      })
      .then(data => {
        setOils(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching oils:', error);
        alert('Failed to load oils data. Please try again later.');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-in-out' });
  }, []);

  return (
    <div className="App">
      <header className="app-header">
        <h1>Rich Essential Oils</h1>
        <p>Discover the Benefits of Natural Essential Oils</p>
        <Navbar />
        <SearchBar />
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
                <OilList oils={oils} onClick={oil => navigate(`/product-details/${oil.name.toLowerCase()}`)} />
              )
            }
          />
          <Route path="/rosemary" element={<Rosemary />} />
          <Route path="/lemon" element={<Lemon />} />
          <Route path="/ylang-ylang" element={<YlangYlang />} />
          <Route path="/clary-sage" element={<ClarySage />} />
          <Route path="/chamomile" element={<Chamomile />} />
          <Route path="/blog" element={<Blog />} /> {/* New Route */}
          <Route path="/common" element={<Common />} /> {/* New Route */}
          <Route path="/data" element={<Data />} /> {/* New Route */}
          <Route path="/fading-image" element={<FadingImage />} /> {/* New Route */}
          <Route path="/hero" element={<Hero />} /> {/* New Route */}
          <Route path="/scroll-to-top" element={<ScrollToTop />} /> {/* New Route */}
          <Route path="/sidebar" element={<Sidebar />} /> {/* New Route */}
          <Route path="/testimonials" element={<Testimonials />} /> {/* New Route */}
          <Route path="/product-details/:id" element={<ProductDetails oils={oils} />} />
        </Routes>
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 Rich Essential Oils. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
