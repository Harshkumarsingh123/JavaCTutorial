import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }
    alert("Signup successful! You can now login.");
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirm("");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
      }}
    >
      <div
        className="card p-4 shadow-lg border-0"
        style={{
          width: "100%",
          maxWidth: "420px",
          borderRadius: "15px",
          animation: "slideUp 1s ease-in-out",
        }}
      >
        <h2 className="text-center mb-4 text-success fw-bold">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Username</label>
            <div className="input-group">
              <span className="input-group-text bg-success text-white">
                <FaUser />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Choose a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <div className="input-group">
              <span className="input-group-text bg-success text-white">
                <FaEnvelope />
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <div className="input-group">
              <span className="input-group-text bg-success text-white">
                <FaLock />
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Confirm Password</label>
            <div className="input-group">
              <span className="input-group-text bg-success text-white">
                <FaLock />
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Re-enter your password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-success w-100 fw-bold">
            Sign Up
          </button>
        </form>

        <p className="text-center mt-3 text-muted">
          Already have an account?{" "}
          <a href="/login" className="text-success fw-semibold">
            Login
          </a>
        </p>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}

export default Signup;
