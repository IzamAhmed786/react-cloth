import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart({ cartItems, removeFromCart }) {
  const navigate = useNavigate();
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Cart is empty</p>
      ) : (
        cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="cart-details">
              <h3>{item.name}</h3>
              <p className="cart-price">Price: ₹{item.price}</p>
              <button className="remove-btn" onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      {cartItems.length > 0 && (
        <div className="cart-summary">
          <p>Total: ₹{total}</p>
          <button className="buy-btn" onClick={() => navigate("/buynow", { state: { cartItems, total } })}>
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;