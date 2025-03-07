import React from "react";

const Boutique = ({ cart }) => {
  return (
    <div className="boutique-div">
      <h1 className="boutique-h1">Votre Panier</h1>

      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                className="cart-item-image"
                src={item.imageUrl}
                alt={item.title}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <h3>{item.title}</h3>
              <p>Quantité: {item.quantity}</p>
            </div>
          ))}
        </div>
      )}

      <div className="cart-summary">
        <h3>Total des articles : {cart.length}</h3>
      </div>
    </div>
  );
};

export default Boutique;
