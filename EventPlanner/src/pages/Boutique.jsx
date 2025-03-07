import React, { useState } from "react";
import Modal from "../components/"; // Import the Modal component

const Boutique = ({ cart, setCart }) => {
  // State to manage the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle incrementing quantity
  const handleIncrement = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart); // Update the cart state with the new quantity
  };

  // Function to handle decrementing quantity
  const handleDecrement = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1; // Decrease quantity but ensure it doesn't go below 1
      setCart(updatedCart); // Update the cart state with the new quantity
    }
  };

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="boutique-div">
      <h1 className="boutique-h1">Votre Panier</h1>

      {cart.length === 0 ? (
        <p className="boutique-paragraph">Votre panier est vide.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                className="cart-item-image"
                src={item.imageUrl}
                alt={item.title}
              />
              <h3>{item.title}</h3>

              {/* Quantity adjustment buttons */}
              <div className="quantity-input">
                <button onClick={() => handleDecrement(index)}>-</button>
                <span className="quantity-number">{item.quantity}</span>
                <button onClick={() => handleIncrement(index)}>+</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-summary">
        <h3 className="boutique-h3">
          Total des articles :{" "}
          {cart.reduce((total, item) => total + item.quantity, 0)}
        </h3>
      </div>

      {/* Button to trigger modal */}
      <button onClick={openModal} className="buy-button">
        Acheter
      </button>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Boutique;
