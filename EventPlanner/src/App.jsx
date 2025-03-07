import React, { useState } from "react";
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
  const [cart, setCart] = useState([]); // State to hold cart items

  const addToCart = (event) => {
    setCart((prevCart) => {
      // Check if the item is already in the cart
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.title === event.title
      );

      if (existingItemIndex !== -1) {
        // If the event already exists, update its quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += event.quantity;
        return updatedCart;
      } else {
        // If the event doesn't exist, add it to the cart
        return [...prevCart, event];
      }
    });
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events addToCart={addToCart} />} />
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
