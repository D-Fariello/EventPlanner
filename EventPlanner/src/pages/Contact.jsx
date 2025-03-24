import React, { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="contact-div">
      <div className="contact-me-info" data-aos="fade-down">
        <h2 className="contact-h2">Me contacter</h2>
        <p className="contact-paragraph">
          Vous souhaitez en savoir plus sur un événement ou vivre une expérience
          sur-mesure ? <br />
          Pour toute question ou demande spécifique, n’hésitez pas à me
          contacter ici — je vous répondrai dans les meilleurs délais, sous 48h
          maximum.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
