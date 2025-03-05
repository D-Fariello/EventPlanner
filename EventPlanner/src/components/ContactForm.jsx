import React from "react";

const ContactForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" required autoComplete="name" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
        />
      </div>
      <div>
        <label htmlFor="message">Messaggio:</label>
        <textarea
          id="message"
          name="message"
          required
          autoComplete="off"
        ></textarea>
      </div>
      <button type="submit">Invia</button>
    </form>
  );
};

export default ContactForm;
