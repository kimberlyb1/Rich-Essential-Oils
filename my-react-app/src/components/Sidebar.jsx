import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Ensure this file exists

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/rosemary">Rosemary</Link></li>
        <li><Link to="/lemon">Lemon</Link></li>
        <li><Link to="/ylang-ylang">Ylang Ylang</Link></li>
        <li><Link to="/clary-sage">Clary Sage</Link></li>
        <li><Link to="/chamomile">Chamomile</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
