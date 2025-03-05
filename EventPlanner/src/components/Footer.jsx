import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Subscription Section */}
      <div className="subscription-section">
        <h2 className="subscription-title">Rester informé</h2>
        <p className="subscription-description">
          Inscrivez-vous avec votre adresse e-mail afin de recevoir les
          actualités et les mises à jour.
        </p>
        <div className="subscription-input">
          <input
            id="email"
            type="email"
            placeholder="Adresse email"
            className="email-input"
          />
          <button className="subscribe-button">S'inscrire</button>
        </div>
      </div>

      {/* Company Information */}
      <div className="company-info">
        <h3 className="company-name">Riviera Fémenine</h3>
        <p className="company-email">info@example.com</p>
        <p className="company-address">123 Rue de la Mode, Paris, France</p>
      </div>
    </footer>
  );
};

export default Footer;
