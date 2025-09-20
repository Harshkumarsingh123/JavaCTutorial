import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaLinkedin, FaGithub } from "react-icons/fa";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords do not match ❌");
      return;
    }
    alert("🎉 Signup successful! You can now login.");
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirm("");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(270deg, #ff9a9e, #fad0c4, #a18cd1, #fbc2eb)",
        backgroundSize: "800% 800%",
        animation: "gradientBG 15s ease infinite",
      }}
    >
      <div
        className="card p-4 shadow-lg border-0"
        style={{
          width: "100%",
          maxWidth: "430px",
          borderRadius: "20px",
          backdropFilter: "blur(12px)",
          background: "rgba(255, 255, 255, 0.15)",
          color: "#fff",
          animation: "zoomIn 1s ease-out",
        }}
      >
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#00c853" }}>
          Create Account 🌟
        </h2>
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

          {/* Sign Up Button */}
          <button
            type="submit"
            className="btn btn-success w-100 fw-bold mb-3"
            style={{ borderRadius: "30px" }}
          >
            Sign Up
          </button>
        </form>

        {/* Social Signup */}
        <div className="text-center text-light mb-3">Or sign up with</div>
        <div className="d-flex justify-content-around">
          <button className="btn btn-light d-flex align-items-center gap-2 px-3 py-2"
            style={{ borderRadius: "30px" }}>
            <FaGoogle color="#DB4437" /> Google
          </button>
          <button className="btn btn-light d-flex align-items-center gap-2 px-3 py-2"
            style={{ borderRadius: "30px" }}>
            <FaLinkedin color="#0A66C2" /> LinkedIn
          </button>
          <button className="btn btn-light d-flex align-items-center gap-2 px-3 py-2"
            style={{ borderRadius: "30px" }}>
            <FaGithub /> GitHub
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center mt-3 text-light">
          Already have an account?{" "}
          <a href="/login" className="fw-bold text-success">
            Login
          </a>
        </p>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes gradientBG {
            0% {background-position: 0% 50%;}
            50% {background-position: 100% 50%;}
            100% {background-position: 0% 50%;}
          }
          @keyframes zoomIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          .card:hover {
            transform: translateY(-5px) scale(1.02);
            transition: all 0.3s ease;
          }
        `}
      </style>
    </div>
  );
}

export default Signup;
