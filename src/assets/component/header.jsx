import React from "react";
import login from "../pages/login";

function Header() {
  return (
    <div>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <button>🛒</button>
      <button onClick={() => login()}>Login</button>
      <button>Sign Up</button>
    </div>
  );
}

export default Header;