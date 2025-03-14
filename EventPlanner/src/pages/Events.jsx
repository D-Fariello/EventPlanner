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
            <h2 className="title-event">{event.title}</h2>
            <h3 className="subtitle-event">{event.subtitle}</h3>
            <p className="paragraph-event">{event.description}</p>

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
                Choisir
              </Link>
            </button>
          </div>
        ))}
      </div>
      <p className="info-prices">
        *Le prix varie en fonction des options choisies pour l'événement et du
        nombre de participants. Les événements sont généralement organisés pour
        des groupes d'au moins 5 personnes (pas obligatoirement). Pour chaque
        groupe, sélectionnez une quantité.
      </p>
    </div>
  );
};

export default Events;
