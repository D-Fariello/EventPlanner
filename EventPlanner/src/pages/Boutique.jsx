import React from "react";

const Boutique = ({ cart, setCart }) => {
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

  // Calculate total quantity (or price if you need it)
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

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

      {/* Display the total quantity */}
      <div className="cart-summary">
        <h3 className="boutique-h3">
          Total des articles : {totalQuantity}{" "}
          {/* This will show the total quantity */}
        </h3>
      </div>
    </div>
  );
};

export default Boutique;
