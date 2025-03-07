import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Boutique from "./pages/Boutique";
import Contact from "./pages/Contact";
import Apropos from "./pages/Apropos";
import "./styles/main.scss";

const App = () => {
  // Load the cart from localStorage, or initialize an empty cart if none is found
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Update localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Header
        totalQuantity={cart.reduce((total, item) => total + item.quantity, 0)}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/events"
          element={<Events addToCart={(event) => setCart([...cart, event])} />}
        />
        <Route path="/a-propos" element={<Apropos />} />
        <Route
          path="/boutique"
          element={<Boutique cart={cart} setCart={setCart} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
