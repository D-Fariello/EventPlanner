import React, { useState } from "react";

const Modal = ({ isOpen, closeModal }) => {
  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic (API call, email, etc.)
    alert("Form submitted!"); // Temporary feedback
    closeModal(); // Close the modal after submission
  };

  // Don't render anything if the modal is not open
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="modal-h2">Vous ne payez rien pour le moment.</h2>
        <p className="modal-paragraph">
          Nous devons d'abord créer un devis pour vous. Je serai en contact avec
          vous pour vous donner tous les détails.
        </p>

        <form className="modal-form" onSubmit={handleSubmit}>
          <label className="modal-label">
            Nom:
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label className="modal-label">
            Email:
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label className="modal-label">
            Téléphone:
            <input
              type="tel"
              name="phone"
              placeholder="Votre téléphone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Envoyer</button>
        </form>

        <button onClick={closeModal} className="close-modal-button">
          x
        </button>
      </div>
    </div>
  );
};

export default Modal;
