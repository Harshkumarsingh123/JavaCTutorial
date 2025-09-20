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
      className="navbar navbar-expand-lg sticky-top"
      style={{
        background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
        zIndex: 1030,
      }}
    >
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand fw-bold fs-4 text-light brand-glow" to="/">
          JavaCTutorial
        </Link>

        {/* Toggler */}
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

        {/* Content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {[
              { to: "/java", label: "Java" },
              { to: "/sql", label: "SQL" },
              { to: "/htmlcss", label: "HTML & CSS" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
            ].map((link, i) => (
              <li className="nav-item" key={i}>
                <Link
                  className={`nav-link text-light ${isActive(link.to)}`}
                  to={link.to}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-3">
            {isLoggedIn ? (
              <span
                style={{ cursor: "pointer", color: "lightcoral" }}
                onClick={handleLogout}
              >
                Logout
              </span>
            ) : (
              <>
                <Link to="/login" className="text-light small-link">
                  Login
                </Link>
                <Link to="/signup" className="text-warning small-link">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .brand-glow {
          transition: all 0.3s ease;
          text-shadow: 0 0 8px rgba(255,255,255,0.5);
        }
        .brand-glow:hover {
          color: #ffcc00 !important;
        }

        .nav-link {
          padding: 8px 14px;
          transition: all 0.3s ease-in-out;
          background: none !important;
          border: none !important;
        }
        .nav-link:hover {
          transform: translateY(-2px);
          color: #ffcc00 !important;
        }

        .active-link {
          font-weight: 600;
          font-size: 1.05rem;
          color: #ffcc00 !important;
        }

        .small-link {
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s;
        }
        .small-link:hover {
          text-decoration: underline;
          transform: translateY(-1px);
        }

        .navbar-toggler {
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 6px;
        }
        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
