import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="contact-div">
      <div className="contact-me-info">
        <h2 className="contact-h2">Me contacter</h2>
        <p className="contact-paragraph">
          Pour toute demande de renseignements sur les événements ou pour le
          contact presse, n’hésitez pas à me contacter ici.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
