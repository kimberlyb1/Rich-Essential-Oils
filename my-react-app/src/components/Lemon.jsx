import React from 'react';
import './Lemon.css';

const Lemon = () => {
  return (
    <div className="oil-card">
      <img src="/images/lemon-oil.jpg" alt="Lemon Essential Oil" className="oil-image" />
      <h2>Lemon Essential Oil</h2>
      <p>
        Lemon oil is a vibrant, citrusy essential oil that energizes the mind and body. 
        It is commonly used for its detoxifying properties, mood-enhancing effects, and 
        ability to brighten skin. Its antibacterial qualities make it a popular ingredient 
        in cleaning products.
      </p>
      <h3>Benefits</h3>
      <ul>
        <li>Boosts mood and energy</li>
        <li>Natural detoxifier and cleanser</li>
        <li>Brightens and revitalizes skin</li>
      </ul>
    </div>
  );
};

export default Lemon;
