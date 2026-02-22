import React, { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  // 🔹 Send OTP
  const sendOtp = async () => {
    if (!phone) {
      alert("Enter phone number");
      return;
    }

    try {
      const response = await fetch("http://localhost:5173/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        console.error("send-otp error", response.status, err);
        alert("Failed to send OTP");
        return;
      }

      const data = await response.json();

      if (data.success) {
        alert("OTP Sent Successfully");
        setOtpSent(true);
      } else {
        alert("Failed to send OTP");
      }
    } catch (error) {
      console.error("sendOtp fetch error", error);
      alert("Failed to send OTP (network error)");
    }
  };

  // 🔹 Verify OTP + Store Data
  const verifyOtp = async () => {
    try {
      const response = await fetch("http://localhost:5173/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, otp }),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        console.error("verify-otp error", response.status, err);
        alert("Invalid OTP ❌");
        return;
      }

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("phone", phone);
        localStorage.setItem("token", data.token);

        alert("Signup Successful ✅");
      } else {
        alert("Invalid OTP ❌");
      }
    } catch (error) {
      console.error("verifyOtp fetch error", error);
      alert("Failed to verify OTP (network error)");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Signup Page</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br /><br />

      <button type="button" onClick={sendOtp}>
        Send OTP
      </button>

      {otpSent && (
        <>
          <br /><br />
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <br /><br />

          <button type="button" onClick={verifyOtp}>
            Verify OTP & Signup
          </button>
        </>
      )}
    </div>
  );
}

export default Signup;