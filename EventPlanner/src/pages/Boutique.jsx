import React, { useState } from "react";
import { FaTrash } from "react-icons/fa"; // Import trash icon
import Modal from "../components/Modal"; // Import the Modal component

const Boutique = ({ cart, setCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIncrement = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  const handleDecrement = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
    }
  };

  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index); // Remove selected item
    setCart(updatedCart);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

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

              <div className="quantity-input">
                <button onClick={() => handleDecrement(index)}>-</button>
                <span className="quantity-number">{item.quantity}</span>
                <button onClick={() => handleIncrement(index)}>+</button>

                {/* Trash Can Icon to Remove Item */}
                <FaTrash
                  className="trash-icon"
                  onClick={() => handleRemoveItem(index)}
                />
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

        <button onClick={openModal} className="buy-button">
          Choisir
        </button>
      </div>

      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Boutique;
