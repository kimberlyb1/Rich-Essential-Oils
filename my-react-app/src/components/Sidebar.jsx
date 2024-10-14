import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Optional: if you want to style your sidebar

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Essential Oils</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/oils">Oils</Link></li>
        {/* Add more links as necessary */}
      </ul>
    </aside>
  );
};

export default Sidebar;