import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/images/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const facebookUrl = 'https://www.facebook.com/wolfenterijeri1';
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navigation">
        <ul>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Početna</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>O Nama</Link></li>
          <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projekti</Link></li>
          <li><a className = "fb-logo" href={facebookUrl} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></li>
        </ul>
        <button className={`menu-button ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </button>
      </div>
      {isMenuOpen && 
      <div className="overlay" onClick={toggleMenu}>
        <ul>
          <li><Link to="/">Početna</Link></li>
          <li><Link to="/about">O Nama</Link></li>
          <li><Link to="/projects">Projekti</Link></li>
          <li><a className = "fb-logo" href={facebookUrl} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></li>
        </ul>
      </div>}
    </div>
  );
}

export default Header;
