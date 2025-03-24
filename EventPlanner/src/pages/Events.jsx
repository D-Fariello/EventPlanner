import React from "react";
import eventsData from "../utils/eventsData";

const Events = () => {
  return (
    <div className="event-first-section">
      <div className="event-header">
        <h1 className="event-paragraph">UPCOMING</h1>
        <p className="event-text">Events</p>
      </div>

      <div className="events-information">
        {eventsData.map((event, index) => (
          <a
            href={event.instagramUrl || "https://instagram.com"}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="event-link"
          >
            <div className="event-card">
              <img
                className="event-image"
                src={event.imageUrl}
                alt={`Event ${index + 1}`}
              />
              <div className="event-content">
                <p className="event-time">{event.time}</p>
                <h2 className="event-title">{event.title}</h2>
                <p className="event-description">{event.description}</p>
              </div>
              <div className="event-date">
                <p className="event-month">{event.month}</p>
                <p className="event-day">{event.day}</p>
                <p className="event-year">{event.year}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <p className="info-prices">
        *Le prix varie en fonction des options et du nombre de participants. Les
        événements sont généralement pour des groupes d'au moins 5 personnes.
        Les dates et horaires peuvent changer, alors suivez notre page Instagram
        pour les mises à jour.
      </p>
    </div>
  );
};

export default Events;
