import React, { useRef, useState } from "react";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState({ message: "", type: "" });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    // Imposta il nome completo
    const fullNameField = form.current.querySelector('input[name="user_name"]');
    if (fullNameField) {
      fullNameField.value = `${firstName} ${lastName}`;
    }

    try {
      const res = await fetch(
        "https://formsubmit.co/dalila.fariello@gmail.com",
        {
          method: "POST",
          body: new FormData(form.current),
        }
      );

      if (res.ok) {
        setStatus({ message: "Message envoyé avec succès!", type: "success" });
        setFirstName("");
        setLastName("");
        form.current.reset();
      } else {
        setStatus({ message: "Échec de l'envoi. Réessayez.", type: "error" });
      }
    } catch (error) {
      console.error("Erreur:", error);
      setStatus({
        message: "Erreur inattendue. Réessayez plus tard.",
        type: "error",
      });
    }
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

      <input type="hidden" name="_captcha" value="false" />
      <input
        type="hidden"
        name="_subject"
        value="Nouveau message du formulaire"
      />

      {/* Prénom */}
      <div className="label-div">
        <label htmlFor="firstName">Prénom:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>

      {/* Nom */}
      <div className="label-div">
        <label htmlFor="lastName">Nom:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>

      {/* Hidden field for full name */}
      <input type="hidden" name="user_name" />

      {/* Email */}
      <div className="label-div">
        <label htmlFor="user_email">Email:</label>
        <input type="email" id="user_email" name="email" required />
      </div>

      {/* Message */}
      <div className="label-div">
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
      </div>

      <button type="submit">Envoyer</button>
    </form>
  );
};

export default ContactForm;
