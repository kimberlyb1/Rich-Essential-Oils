import React from 'react';
import './Common.css'; // Import the common styles

const Common = ({ title, content }) => {
  return (
    <div className="common-container">
      <h2 className="common-title">{title}</h2>
      <p className="common-content">{content}</p>
    </div>
  );
};

export default Common;