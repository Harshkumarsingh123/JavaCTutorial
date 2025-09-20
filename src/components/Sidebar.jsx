import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? "active-side" : "");

  return (
    <div
      className="sidebar d-flex flex-column shadow"
      style={{
        width: "240px",
        minHeight: "100vh",
        background: "linear-gradient(180deg, #1f4037, #99f2c8)",
        color: "white",
      }}
    >
      <div className="p-3 text-center border-bottom border-light">
        <h4 className="fw-bold">📘 JavaCTutorial</h4>
      </div>

      <div className="list-group list-group-flush flex-grow-1">
        {[
          { to: "/java", label: "Java Notes" },
          { to: "/sql", label: "SQL Notes" },
          { to: "/htmlcss", label: "HTML & CSS" },
          { to: "/about", label: "About Us" },
          { to: "/contact", label: "Contact" },
        ].map((link, i) => (
          <Link
            key={i}
            to={link.to}
            className={`list-group-item sidebar-link ${isActive(link.to)}`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <style>{`
        .sidebar-link {
          background: transparent;
          color: white !important;
          border: none;
          font-weight: 500;
          padding: 14px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .sidebar-link:hover {
          transform: translateX(8px) scale(1.05);
          box-shadow: 0px 4px 15px rgba(0,0,0,0.2);
          background: rgba(255,255,255,0.1);
          border-radius: 12px;
        }
        .active-side {
          font-weight: 600;
          color: #ffcc00 !important;
          background: rgba(255,255,255,0.2);
          border-radius: 12px;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}

export default Sidebar;
