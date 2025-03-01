import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UpcomingEvent from "./components/UpcomingEvent";
import EventCalendar from "./components/Calendar";
import EventsList from "./components/EventsList";
import ContactSection from "./components/ContactSection";
import "./styles/main.scss";

const App = () => {
  return (
    <div>
      <Header />
      <UpcomingEvent />
      <div style={{ display: "flex" }}>
        <EventCalendar />
        <EventsList />
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
