import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar({ isLoggedIn, toggleLogin }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    toggleLogin(false);
    navigate("/");
  };

  const isActive = (path) => (location.pathname === path ? "active-link" : "");

  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm sticky-top"
      style={{
        background: "linear-gradient(90deg, #1a1a2e, #0f3460, #16213e)",
        zIndex: 1030,
      }}
    >
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand fw-bold text-light fs-4" to="/">
          JavaCTutorial
        </Link>

        {/* Mobile Toggler */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Left Side - Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link text-light ${isActive("/java")}`} to="/java">
                Java
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-light ${isActive("/sql")}`} to="/sql">
                SQL
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-light ${isActive("/htmlcss")}`} to="/htmlcss">
                HTML & CSS
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-light ${isActive("/about")}`} to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-light ${isActive("/contact")}`} to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          {/* Right Side - Buttons */}
          <div className="d-flex align-items-center gap-2">
            {isLoggedIn ? (
              <button className="btn btn-danger btn-sm nav-btn" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <>
                <Link className="btn btn-outline-light btn-sm nav-btn" to="/login">
                  Login
                </Link>
                <Link className="btn btn-warning btn-sm nav-btn" to="/signup">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Extra Styles */}
      <style>{`
        .nav-link {
          transition: all 0.3s ease-in-out;
          margin-right: 10px;
        }
        .nav-link:hover {
          color: #ffcc00 !important;
          transform: translateY(-2px);
        }
        .active-link {
          border-bottom: 2px solid #ffcc00;
          font-weight: bold;
        }
        .nav-btn {
          transition: all 0.3s ease-in-out;
        }
        .nav-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 0 10px rgba(255, 204, 0, 0.6);
        }

        /* Fix Bootstrap toggler icon color */
        .navbar-toggler {
          background-color: rgba(255, 255, 255, 0.2);
        }
        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
