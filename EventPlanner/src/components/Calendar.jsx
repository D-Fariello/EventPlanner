import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const EventCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (date) => {
    setDate(date);
  };

  return (
    <div>
      <h2>Calendario Eventi</h2>
      <Calendar onChange={handleDateChange} value={date} />
    </div>
  );
};

export default EventCalendar;
