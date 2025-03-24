import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState({ message: "", type: "" });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // Aggiorna il valore del campo nascosto
    const fullNameField = form.current.querySelector('input[name="user_name"]');
    if (fullNameField) {
      fullNameField.value = `${firstName} ${lastName}`;
    }

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
          setFirstName("");
          setLastName("");
          form.current.reset();
        },
        (error) => {
          setStatus({ message: "Échec de l'envoi. Réessayez.", type: "error" });
          console.error("Erreur:", error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      className="contact-form"
      onSubmit={sendEmail}
      autoComplete="on"
    >
      {status.message && (
        <p
          className={
            status.type === "success" ? "success-message" : "error-message"
          }
        >
          {status.message}
        </p>
      )}

      {/* Prénom */}
      <div className="label-div">
        <label className="contact-labels" htmlFor="firstName">
          Prénom:
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          autoComplete="given-name"
        />
      </div>

      {/* Nom */}
      <div className="label-div">
        <label className="contact-labels" htmlFor="lastName">
          Nom:
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          autoComplete="family-name"
        />
      </div>

      {/* Hidden field for full name */}
      <input type="hidden" name="user_name" />

      {/* Email */}
      <div className="label-div">
        <label className="contact-labels" htmlFor="user_email">
          Email:
        </label>
        <input
          type="email"
          id="user_email"
          name="user_email"
          required
          autoComplete="email"
        />
      </div>

      {/* Message */}
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
