import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import "./styles/main.scss";
import Boutique from "./pages/Boutique";
import Contact from "./pages/Contact";
import Apropos from "./pages/Apropos";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
