import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ cartItems, searchQuery, setSearchQuery }) {

  const handleSearch = () => {
    // Search is handled by filtering in Product component
  };
  return (
    <div className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="nav-actions">
        <input 
          type="text" 
          placeholder="Search products..." 
          className="search-bar" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />   
        <button className="search-btn" onClick={handleSearch}>Search</button>

        <Link to="/cart">
          <button className="cart-btn">🛒 ({cartItems.length})</button>
        </Link>

        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>

        <Link to="/signup">
          <button className="signup-btn">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;