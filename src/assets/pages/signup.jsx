import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !password) {
      alert("Please fill all fields ❌");
      return;
    }

    // Store user data
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("password", password);

    // Generate fake token
    const token = Math.random().toString(36).substring(2);
    localStorage.setItem("token", token);

    alert("Signup Successful ✅");
  };

  return (
    
    <div className="signup-container">
      <div className="signup-card">
        <h1>Create Account</h1>
        <p className="subtitle">Join us today 🚀</p>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          

          <button type="submit">Sign Up</button>
        </form>

        <p className="login-text">
          Already have an account? <Link to="/login"><span>Login</span></Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;