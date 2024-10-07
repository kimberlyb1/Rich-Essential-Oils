import React, { useEffect, useState } from 'react';
import Intro from './components/Intro';
import Home from './components/Home';
import OilList from './components/OilList';
import Chamomile from './components/Chamomile';
import Rosemary from './components/Rosemary';
import Lemon from './components/Lemon';
import YlangYlang from './components/YlangYlang';
import ClarySage from './components/ClarySage';
import ProductCard from './components/ProductCard';
import ProductDetails from './components/ProductDetails';
import './App.css';
import './components/ProductCard.css'; // Correct path to ProductCard.css

const App = () => {
  const [oils, setOils] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('/Rich.json')
      .then(response => response.json())
      .then(data => setOils(data));
  }, []);

  const handleProductClick = (oil) => {
    setSelectedProduct(oil);
  };

  return (
    <div className="app">
      <div className='header'>
        <header className="app-header">
          <h1>Rich Essential Oils</h1>
          <p>Discover the Benefits of Natural Essential Oils</p>
          <nav>
            <ul>
              {/* Add navigation items here */}
            </ul>
          </nav>
        </header>
      </div>
      <main className="oil-container">
        <section>
          <Intro />
        </section>
        <section>
          <Home />
        </section>
        <section>
          <OilList oils={oils} />
        </section>
        <section>
          <Chamomile /> 
          <Rosemary />
          <Lemon />
          <YlangYlang />
          <ClarySage />
          {oils.map((oil, index) => (
            <ProductCard key={index} oil={oil} onClick={() => handleProductClick(oil)} />
          ))}
        </section>
        <section>
          {selectedProduct && <ProductDetails product={selectedProduct} />}
        </section>
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 Rich Essential Oils. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
