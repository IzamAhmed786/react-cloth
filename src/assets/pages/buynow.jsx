import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./BuyNow.css";

function BuyNow() {
  const location = useLocation();
  const state = location.state;
  const cartItems = state?.cartItems || (state && !Array.isArray(state) ? [state] : []);
  const totalPrice = state?.total || cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  if (!cartItems || cartItems.length === 0) {
    return <h2>No Product Selected</h2>;
  }

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  return (
    <div className="checkout-container">
      {/* LEFT SECTION */}
      <div className="checkout-left">
        <h2>Delivery Address</h2>

        <div className="address-form">
          <input name="name" placeholder="Full Name" onChange={handleChange} />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} />
          <input name="address" placeholder="Address" onChange={handleChange} />
          <input name="city" placeholder="City" onChange={handleChange} />
          <input name="pincode" placeholder="Pincode" onChange={handleChange} />
        </div>

        <h2>Order Item{cartItems.length > 1 ? "s" : ""}</h2>

        {cartItems.map((item, index) => (
          <div className="product-box" key={index}>
            <img src={item.image} alt={item.name} />

            <div>
              <h3>{item.name}</h3>
              <p>Size: {item.size}</p>
              <p className="price">₹{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT SECTION */}
      <div className="checkout-right">
        <h2>Price Details</h2>

        <div className="price-box">
          <p>Price: ₹{totalPrice}</p>
          <p>Delivery: ₹50</p>
          <hr />
          <h3>Total: ₹{totalPrice + 50}</h3>
        </div>

        <button className="place-order-btn">
          Place Order
        </button>
      </div>
    </div>
  );
}

export default BuyNow;