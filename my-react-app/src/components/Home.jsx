// src/components/Home.jsx

import React from "react";
import image from "../images/image.png"; // Ensure the path is correct

const Home = () => {
  return (
    <div>
      <h1>Welcome to Rich Essential Oils</h1>
      <img src={image} alt="Nature" />
    </div>
  );
};

export default Home;
