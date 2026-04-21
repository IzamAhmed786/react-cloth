import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./assets/component/header";
import Footer from "./assets/component/footer";
import Product from "./assets/component/Product";
import Login from "./assets/pages/login";
import Signup from "./assets/pages/signup";
import Cart from "./assets/pages/cart";
import BuyNow from "./assets/pages/buynow";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  
  return (
    <>
      <Header cartItems={cartItems} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <Routes>
        <Route path="/" element={<Product addToCart={addToCart} searchQuery={searchQuery} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="/buynow" element={<BuyNow />} />
        <Route path="/about" element={<div style={{ padding: 24 }}><h1>About</h1><p>About page placeholder</p></div>} />
        <Route path="/contact" element={<div style={{ padding: 24 }}><h1>Contact</h1><p>Contact page placeholder</p></div>} />
        <Route path="*" element={<div style={{ padding: 24 }}><h1>404</h1><p>Page not found</p></div>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;