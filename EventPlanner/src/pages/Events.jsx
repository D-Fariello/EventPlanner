import React from "react";
import UpcomingEvent from "../components/UpcomingEvent";
import EventCalendar from "../components/Calendar";
import EventsList from "../components/EventsList";

const Events = () => {
  return (
    <div>
      <h1>Events</h1>
      <UpcomingEvent />
      <div style={{ display: "flex" }}>
        <EventCalendar />
        <EventsList />
      </div>
    </div>
  );
};

export default Events;
