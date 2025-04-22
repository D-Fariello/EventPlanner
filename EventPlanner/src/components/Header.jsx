import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ totalQuantity }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="header-left">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      {/* Burger Menu */}
      <div
        className={`burger-menu ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <h1 className="li-nav">
        <Link to="/" onClick={handleLinkClick}>
          Riviera Féminine
        </Link>
      </h1>
      <nav className={`header-nav ${isMenuOpen ? "active" : ""}`}>
        <ul className="ul-nav">
          <li className="li-nav">
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li className="li-nav">
            <Link to="/a-propos" onClick={handleLinkClick}>
              À propos
            </Link>
          </li>
          <li className="li-nav">
            <Link to="/events" onClick={handleLinkClick}>
              Événements
            </Link>
          </li>
          <li className="li-nav">
            <Link to="/contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="header-right">
        <button>
          <Link
            className="contact-me-button"
            to="/contact"
            onClick={handleLinkClick}
          >
            Contactez-moi
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
