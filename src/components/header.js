import React from 'react';
import '../css/header.css';
function Header() {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#menu">Menu</a></li>
          <li className="nav-item"><a href="#book">Book</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


