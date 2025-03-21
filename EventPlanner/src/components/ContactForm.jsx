import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState({ message: "", type: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => {
          setStatus({
            message: "Message envoyé avec succès!",
            type: "success",
          });
          form.current.reset();
        },
        (error) => {
          setStatus({ message: "Échec de l'envoi. Réessayez.", type: "error" });
          console.error("Erreur:", error.text);
        }
      );
  };

  return (
    <form ref={form} className="contact-form" onSubmit={sendEmail}>
      {status.message && (
        <p
          className={
            status.type === "success" ? "success-message" : "error-message"
          }
        >
          {status.message}
        </p>
      )}

      <div className="label-div">
        <label className="contact-labels" htmlFor="firstName">
          Prénom:
        </label>
        <input type="text" id="firstName" name="firstName" required />
      </div>

      <div className="label-div">
        <label className="contact-labels" htmlFor="lastName">
          Nom:
        </label>
        <input type="text" id="lastName" name="lastName" required />
      </div>

      <div className="label-div">
        <label className="contact-labels" htmlFor="email">
          Email:
        </label>
        <input type="email" id="email" name="email" required />
      </div>

      <div className="label-div">
        <label className="contact-labels" htmlFor="message">
          Message:
        </label>
        <textarea id="message" name="message" required></textarea>
      </div>

      <button type="submit">Envoyer</button>
    </form>
  );
};

export default ContactForm;
