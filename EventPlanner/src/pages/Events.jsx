import React, { useState } from "react";
import eventsData from "../utils/eventsData";

const Events = () => {
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
