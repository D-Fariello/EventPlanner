import React from "react";

const EventsList = () => {
  const events = [
    { id: 1, title: "Evento 1" },
    { id: 2, title: "Evento 2" },
    { id: 3, title: "Evento 3" },
    { id: 4, title: "Evento 4" },
    { id: 5, title: "Evento 5" },
    { id: 6, title: "Evento 6" },
  ];

  return (
    <div>
      <h2>Elenco Eventi</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventsList;
