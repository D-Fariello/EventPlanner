import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">Riviera Féminine</Link>
      </h1>
      <nav className="header-nav">
        <ul className="ul-nav">
          <li className="li-nav">
            <Link to="/a-propos">À propos</Link>
          </li>
          <li className="li-nav">
            <Link to="/evenements">Événements</Link>
          </li>
          <li className="li-nav">
            <Link to="/boutique">Boutique</Link>
          </li>
          <li className="li-nav">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
