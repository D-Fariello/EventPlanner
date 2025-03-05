import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <h2>Evento Privato</h2>
        <p>
          Se vuoi un evento privato e personalizzato non esitare a contattarmi.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
