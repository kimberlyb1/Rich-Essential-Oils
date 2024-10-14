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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Intro from './components/Intro';
import Home from './components/Home';
import OilList from './components/OilList';
import ProductCard from './components/ProductCard';
import ProductDetails from './components/ProductDetails';
import Sidebar from './components/Sidebar'; // Added Sidebar
import './Styles/App.css';
import './Styles/Intro.css';
import './Styles/Home.css';
import './Styles/ProductCard.css';
import './Styles/ProductDetails.css';
import './Styles/Sidebar.css'; // Import Sidebar CSS

const App = () => {
  const [oils, setOils] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/Rich.json')
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
      .catch((error) => {
        console.error('Error fetching oils:', error);
        setLoading(false);
      });
  }, []);

  const handleProductClick = (oil) => {
    setSelectedProduct(oil);
  };

  const handleBackClick = () => {
    setSelectedProduct(null);
  };

  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Rich Essential Oils</h1>
          <p>Discover the Benefits of Natural Essential Oils</p>
        </header>

        <Sidebar /> {/* Include the Sidebar here */}

        <main className="oil-container">
          <Switch>
            <Route path="/" exact>
              <section>
                <Intro />
              </section>
              <section id="home">
                <Home />
              </section>
            </Route>

            <Route path="/oils">
              <section id="oils">
                {loading ? (
                  <p>Loading oils...</p>
                ) : (
                  <OilList oils={oils} onClick={handleProductClick} />
                )}
              </section>

              {selectedProduct ? (
                <section>
                  <ProductDetails oil={selectedProduct} onBackClick={handleBackClick} />
                </section>
              ) : (
                <section>
                  {oils.map((oil, index) => (
                    <ProductCard key={index} oil={oil} onClick={() => handleProductClick(oil)} />
                  ))}
                </section>
              )}
            </Route>
          </Switch>
        </main>

        <footer className="app-footer">
          <p>&copy; 2024 Rich Essential Oils. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;