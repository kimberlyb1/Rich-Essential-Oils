// import React, { useEffect, useState } from 'react';
// import Intro from './components/Intro';
// import Home from './components/Home';
// import OilList from './components/OilList';
// import Chamomile from './components/Chamomile';
// import Rosemary from './components/Rosemary';
// import Lemon from './components/Lemon';
// import YlangYlang from './components/YlangYlang';
// import ClarySage from './components/ClarySage';
// import ProductCard from './components/ProductCard';
// import ProductDetails from './components/ProductDetails';
// import './App.css';
// import './components/ProductCard.css'; // Correct path to ProductCard.css

// const App = () => {
//   const [oils, setOils] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   useEffect(() => {
//     fetch('/Rich.json')
//       .then(response => response.json())
//       .then(data => setOils(data));
//   }, []);

//   const handleProductClick = (oil) => {
//     setSelectedProduct(oil);
//   };

//   return (
//     <div className="app">
//       <div className='header'>
//         <header className="app-header">
//           <h1>Rich Essential Oils</h1>
//           <p>Discover the Benefits of Natural Essential Oils</p>
//           <nav>
//             <ul>
//               {/* Add navigation items here */}
//             </ul>
//           </nav>
//         </header>
//       </div>
//       <main className="oil-container">
//         <section>
//           <Intro />
//         </section>
//         <section>
//           <Home />
//         </section>
//         <section>
//           <OilList oils={oils} />
//         </section>
//         <section>
//           <Chamomile /> 
//           <Rosemary />
//           <Lemon />
//           <YlangYlang />
//           <ClarySage />
//           {oils.map((oil, index) => (
//             <ProductCard key={index} oil={oil} onClick={() => handleProductClick(oil)} />
//           ))}
//         </section>
//         <section>
//           {selectedProduct && <ProductDetails product={selectedProduct} />}
//         </section>
//       </main>
//       <footer className="app-footer">
//         <p>&copy; 2024 Rich Essential Oils. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default App;

// 
// import React, { useEffect, useState } from 'react';
// import Intro from './components/Intro';
// import Home from './components/Home';
// import OilList from './components/OilList';
// import Chamomile from './components/Chamomile';
// import Rosemary from './components/Rosemary';
// import Lemon from './components/Lemon';
// import YlangYlang from './components/YlangYlang';
// import ClarySage from './components/ClarySage';
// import ProductCard from './components/ProductCard';
// import ProductDetails from './components/ProductDetails';
// import './App.css';
// import './styles/Intro.css';
// import './styles/Home.css';
// import './styles/ProductCard.css';
// import './styles/ProductDetails.css';
// import './styles/Chamomile.css';
// import './styles/Rosemary.css';
// import './styles/Lemon.css';
// import './styles/YlangYlang.css';
// import './styles/ClarySage.css';

// const App = () => {
//   const [oils, setOils] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   useEffect(() => {
//     fetch('/Rich.json')
//       .then(response => response.json())
//       .then(data => setOils(data));
//   }, []);

//   const handleProductClick = (oil) => {
//     setSelectedProduct(oil);
//   };

//   return (
//     <div className="app">
//       <div className='header'>
//         <header className="app-header">
//           <h1>Rich Essential Oils</h1>
//           <p>Discover the Benefits of Natural Essential Oils</p>
//           <nav>
//             <ul>
//               {/* Add navigation items here */}
//             </ul>
//           </nav>
//         </header>
//       </div>
//       <main className="oil-container">
//         <section>
//           <Intro />
//         </section>
//         <section>
//           <Home />
//         </section>
//         <section>
//           <OilList oils={oils} onClick={handleProductClick} />
//         </section>
//         <section>
//           <Chamomile /> 
//           <Rosemary />
//           <Lemon />
//           <YlangYlang />
//           <ClarySage />
//           {oils.map((oil, index) => (
//             <ProductCard key={index} oil={oil} onClick={() => handleProductClick(oil)} />
//           ))}
//         </section>
//         <section>
//           {selectedProduct && <ProductDetails oil={selectedProduct} />}
//         </section>
//       </main>
//       <footer className="app-footer">
//         <p>&copy; 2024 Rich Essential Oils. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default App;

// import React, { useEffect, useState } from 'react';
// import Intro from './components/Intro';
// import Home from './components/Home';
// import OilList from './components/OilList';
// import Chamomile from './components/Chamomile';
// import Rosemary from './components/Rosemary';
// import Lemon from './components/Lemon';
// import YlangYlang from './components/YlangYlang';
// import ClarySage from './components/ClarySage';
// import ProductCard from './components/ProductCard';
// import ProductDetails from './components/ProductDetails';
// import './Styles/App.css';
// import './Styles/Intro.css';
// import './Styles/Home.css';
// import './Styles/ProductCard.css';
// import './Styles/ProductDetails.css';
// import './Styles/Chamomile.css';
// import './Styles/Rosemary.css';
// import './Styles/Lemon.css';
// import './Styles/YlangYlang.css';
// import './Styles/ClarySage.css';

// const App = () => {
//   const [oils, setOils] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('/Rich.json')
//       .then(response => response.json())
//       .then(data => {
//         setOils(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching oils:', error);
//         setLoading(false);
//       });
//   }, []);

//   const handleProductClick = (oil) => {
//     setSelectedProduct(oil);
//   };

//   const handleBackClick = () => {
//     setSelectedProduct(null);
//   };

//   return (
//     <div className="app">
//       <header className="app-header">
//         <h1>Rich Essential Oils</h1>
//         <p>Discover the Benefits of Natural Essential Oils</p>
//         <nav>
//           <ul>
//             <li><a href="#home">Home</a></li>
//             <li><a href="#oils">Oils</a></li>
//           </ul>
//         </nav>
//       </header>

//       <main className="oil-container">
//         <section>
//           <Intro />
//         </section>
//         <section id="home">
//           <Home />
//         </section>
//         <section id="oils">
//           {loading ? (
//             <p>Loading oils...</p>
//           ) : (
//             <OilList oils={oils} onClick={handleProductClick} />
//           )}
//         </section>

//         {selectedProduct ? (
//           <section>
//             <ProductDetails oil={selectedProduct} onBackClick={handleBackClick} />
//           </section>
//         ) : (
//           <section>
//             {oils.map((oil, index) => (
//               <ProductCard key={index} oil={oil} onClick={() => handleProductClick(oil)} />
//             ))}
//           </section>
//         )}
//       </main>

//       <footer className="app-footer">
//         <p>&copy; 2024 Rich Essential Oils. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default App;

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Intro from './components/Intro';
import Home from './components/Home';
import OilList from './components/OilList';
import ProductCard from './components/ProductCard';
import ProductDetails from './components/ProductDetails';
import Chamomile from './components/Chamomile';
import Rosemary from './components/Rosemary';
import Lemon from './components/Lemon';
import YlangYlang from './components/YlangYlang';
import ClarySage from './components/ClarySage';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import oilImage from './images/oilImage.jpg'; // Ensure this path is correct
import './Styles/App.css';
import './Styles/OilList.css';

const AppWithRouter = () => {
  const [oils, setOils] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch oils data when the component mounts
  useEffect(() => {
    fetch('/Rich.json') // Accessing from public folder
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setOils(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching oils:', error);
        setLoading(false);
      });
  }, []);

  // Initialize AOS for animations
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

          {/* Display the oil image */}
          <div className="image-container">
            <img src={oilImage} alt="Oil" className="fading-image" />
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
                ) : (
                  <OilList
                    oils={oils}
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
            <Route path="/product-details/:id" element={<ProductDetails oils={oils} />} />
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
