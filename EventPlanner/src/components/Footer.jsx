import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <h3 className="company-name">Riviera Féminine</h3>
          <p className="company-email">info@example.com</p>
          <p className="company-address">123 Rue de la Mode, Paris, France</p>
        </div>

        <div className="footer-socials">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyrights">
          © {currentYear} Riviera Féminine. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
