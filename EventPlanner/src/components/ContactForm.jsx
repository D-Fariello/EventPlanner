import React from "react";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <div className="label-div">
        <label className="contact-labels" htmlFor="firstName">
          Prénom:
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          required
          autoComplete="given-name"
        />
      </div>
      <div className="label-div">
        <label className="contact-labels" htmlFor="lastName">
          Nom:
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          required
          autoComplete="family-name"
        />
      </div>
      <div className="label-div">
        <label className="contact-labels" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
        />
      </div>
      <div className="label-div">
        <label className="contact-labels" htmlFor="message">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          required
          autoComplete="off"
        ></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default ContactForm;
