import React, { useState } from "react";

const Login = ({ onLogin, setShowSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform login API call
    const response = await fetch("https://opinyo.vercel.app/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });
    if (response.ok) {
      const userData = await response.json();
      console.log("Login successful:", userData);
      onLogin(userData);
    } else {
      console.error("Login failed");
      alert("Invalid email or password");
    }
  };

  return (
    <div style={{ backgroundColor: "#FFF7D1" }}>
      <div
        className="container d-flex align-items-center justify-content-center vh-100 "
        style={{ backgroundColor: "#FFF7D1" }}
      >
        <div
          className="card shadow p-4"
          style={{
            width: "400px",
            borderRadius: "15px",
            backgroundColor: "#B17457",
          }}
        >
          <h1 className="text-center mb-4 text-light josefin-sans-reg">
            Login
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="email" className="text-light">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="password" className="text-light">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">
              Login
            </button>
          </form>

          <div className="text-center mt-3">
            <span className="text-muted">New here? </span>
            <button
              className="btn btn-link p-0"
              style={{ textDecoration: "none", color: "blue" }}
              onClick={() => setShowSignup(true)}
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
