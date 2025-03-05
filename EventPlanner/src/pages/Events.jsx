import React from "react";
import eventsData from "../utils/eventsData";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="event-first-section">
      {/* Sezione Hero con immagine e testo */}
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

      {/* Sezione Eventi con 4 divisioni */}
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
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <button>
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
