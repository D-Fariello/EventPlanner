import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
      <h1 className="li-nav">
        <Link to="/">Riviera Féminine</Link>
      </h1>
      <nav className="header-nav">
        <ul className="ul-nav">
          <li className="li-nav">
            <Link to="/a-propos">À propos</Link>
          </li>
          <li className="li-nav">
            <Link to="/events">Événements</Link>
          </li>
          <li className="li-nav">
            <Link to="/boutique">Boutique</Link>
          </li>
          <li className="li-nav">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="header-right">
        <Link to="/boutique">
          <i className="fas fa-shopping-cart"></i>{" "}
          {/* Usa la tua icona preferita */}
        </Link>

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
