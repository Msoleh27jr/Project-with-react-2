import React from 'react';
import './header.css';

const Header = ({ logo, but, but2 }) => {
  return (
    <div>
      <nav className="nav-container">
        <img src={logo} alt="Logo" />
        <ul className="nav-list">
          <li>Home</li>
          <li>Product</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
        <div className="nav-buttons">
          {but}
          {but2}
        </div>
      </nav>
    </div>
  );
};

export default Header;
