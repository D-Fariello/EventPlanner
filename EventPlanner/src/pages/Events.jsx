import React, { useState } from "react";
import eventsData from "../utils/eventsData";
import { Link } from "react-router-dom";

const Events = ({ addToCart }) => {
  const [quantities, setQuantities] = useState(eventsData.map(() => 0));

  const handleIncrement = (index) => {
    setQuantities((prev) => prev.map((q, i) => (i === index ? q + 1 : q)));
  };

  const handleDecrement = (index) => {
    setQuantities((prev) =>
      prev.map((q, i) => (i === index && q > 1 ? q - 1 : q))
    );
  };

  return (
    <div className="event-first-section">
      <div>
        <img
          className="event-img"
          src="/images/cocktails.jpg"
          alt="Inspiring Experiences"
        />
        <h1 className="event-paragraph">
          Lancez-vous dans une aventure inoubliable lors de notre prochain
          événement
        </h1>
      </div>

      <div className="events-information">
        {eventsData.map((event, index) => (
          <div className="events-list" key={index}>
            <img
              className="event-option-images"
              src={event.imageUrl}
              alt={`Event ${index + 1}`}
            />
            <h2>{event.title}</h2>
            <h3>{event.subtitle}</h3>
            <p>{event.description}</p>

            <div className="quantity-input">
              <button onClick={() => handleDecrement(index)}>-</button>
              <span className="quantity-number">{quantities[index]}</span>
              <button onClick={() => handleIncrement(index)}>+</button>
            </div>

            <button
              onClick={() =>
                addToCart({ ...event, quantity: quantities[index] })
              }
            >
              <Link className="contact-button" to="/boutique">
                Ajouter au panier
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
