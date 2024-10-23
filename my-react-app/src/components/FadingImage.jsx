import React, { useState, useEffect } from 'react';
import './Styles/FadingImage.css'; // Create a CSS file for styles

const FadingImage = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="image-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Nature ${index}`}
          className={`fade ${currentImage === index ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default FadingImage;
