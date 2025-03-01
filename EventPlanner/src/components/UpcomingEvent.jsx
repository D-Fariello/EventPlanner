import React from "react";

const UpcomingEvent = () => {
  const nextEvent = {
    date: "2025-03-10",
    title: "Prossimo Evento",
    imageUrl: "https://via.placeholder.com/400",
  };

  return (
    <section>
      <h2>Prossimo Evento</h2>
      <img src={nextEvent.imageUrl} alt={nextEvent.title} />
      <p>
        {nextEvent.title} - {nextEvent.date}
      </p>
    </section>
  );
};

export default UpcomingEvent;
