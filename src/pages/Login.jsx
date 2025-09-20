import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaGoogle, FaLinkedin, FaGithub } from "react-icons/fa";

function Login({ toggleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      toggleLogin(true);
      navigate("/java");
    } else {
      alert("Enter email and password");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(270deg, #667eea, #764ba2, #f7971e, #ffd200)",
        backgroundSize: "800% 800%",
        animation: "gradientBG 15s ease infinite",
      }}
    >
      <div
        className="card p-4 shadow-lg border-0"
        style={{
          width: "100%",
          maxWidth: "420px",
          borderRadius: "20px",
          backdropFilter: "blur(12px)",
          background: "rgba(255, 255, 255, 0.1)",
          color: "#fff",
          animation: "slideIn 1s ease-out",
        }}
      >
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#ffd200" }}>
          Welcome Back 🚀
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <div className="input-group">
              <span className="input-group-text bg-warning text-dark">
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
              <span className="input-group-text bg-warning text-dark">
                <FaLock />
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn btn-warning w-100 fw-bold mb-3"
            style={{ borderRadius: "30px" }}
          >
            Login
          </button>
        </form>

        {/* Social Login */}
        <div className="text-center text-light mb-3">Or login with</div>
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

        {/* Signup link */}
        <p className="text-center mt-3 text-light">
          Don’t have an account?{" "}
          <a href="/signup" className="fw-bold text-warning">
            Sign Up
          </a>
        </p>
      </div>

      {/* Animation CSS */}
      <style>
        {`
          @keyframes gradientBG {
            0% {background-position: 0% 50%;}
            50% {background-position: 100% 50%;}
            100% {background-position: 0% 50%;}
          }
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(-40px); }
            to { opacity: 1; transform: translateY(0); }
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

export default Login;
