import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  // Active link style
  const isActive = (path) =>
    location.pathname === path ? "active-link" : "";

  return (
    <div
      className="sidebar d-flex flex-column shadow"
      style={{
        width: "240px",
        minHeight: "100vh",
        background: "linear-gradient(180deg, #1a2a6c, #b21f1f, #fdbb2d)",
        color: "white",
      }}
    >
      <div className="p-3 text-center border-bottom border-light">
        <h4 className="fw-bold">📘 JavaCTutorial</h4>
      </div>

      <div className="list-group list-group-flush flex-grow-1">
        <Link
          className={`list-group-item list-group-item-action sidebar-link ${isActive(
            "/java"
          )}`}
          to="/java"
        >
          Java Notes
        </Link>
        <Link
          className={`list-group-item list-group-item-action sidebar-link ${isActive(
            "/sql"
          )}`}
          to="/sql"
        >
          SQL Notes
        </Link>
        <Link
          className={`list-group-item list-group-item-action sidebar-link ${isActive(
            "/htmlcss"
          )}`}
          to="/htmlcss"
        >
          HTML & CSS
        </Link>
        <Link
          className={`list-group-item list-group-item-action sidebar-link ${isActive(
            "/about"
          )}`}
          to="/about"
        >
          About Us
        </Link>
        <Link
          className={`list-group-item list-group-item-action sidebar-link ${isActive(
            "/contact"
          )}`}
          to="/contact"
        >
          Contact
        </Link>
      </div>

      {/* Extra Styling */}
      <style>{`
        .sidebar-link {
          background: transparent;
          color: white !important;
          transition: all 0.3s ease-in-out;
          border: none;
          font-weight: 500;
          padding: 15px;
        }
        .sidebar-link:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateX(5px);
        }
        .active-link {
          background: rgba(255, 255, 255, 0.3) !important;
          font-weight: bold;
          border-left: 4px solid #ffcc00;
        }
      `}</style>
    </div>
  );
}

export default Sidebar;
