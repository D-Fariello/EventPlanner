import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ totalQuantity }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
        <Link to="/">Riviera Féminine</Link>
      </h1>
      <nav className={`header-nav ${isMenuOpen ? "active" : ""}`}>
        <ul className="ul-nav">
          <li className="li-nav">
            <Link to="/">Home</Link>
          </li>
          <li className="li-nav">
            <Link to="/a-propos">À propos</Link>
          </li>
          <li className="li-nav">
            <Link to="/events">Événements</Link>
          </li>
          <li className="li-nav">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="header-right">
        <button>
          <Link className="contact-button" to="/contact">
            Contactez-moi
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
