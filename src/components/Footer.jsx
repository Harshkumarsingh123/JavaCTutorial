import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="text-light pt-5 mt-5 position-relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      }}
    >
      {/* Animated Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(270deg, rgba(255,0,150,0.15), rgba(0,229,255,0.15), rgba(56,239,125,0.15))",
          backgroundSize: "600% 600%",
          animation: "footerGradient 18s ease infinite",
          zIndex: 0,
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-4" data-aos="fade-right">
            <h4 className="fw-bold text-warning">JavaCTutorial</h4>
            <p className="text-light">
              Learn Java, SQL, Web Development, and more with structured notes,
              examples, and tutorials. A platform built to empower students and
              developers for a brighter future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4" data-aos="fade-up">
            <h5 className="fw-bold mb-3 text-info">Quick Links</h5>
            <ul className="list-unstyled">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
                { to: "/privacy", label: "Privacy Policy" },
                { to: "/terms", label: "Terms & Conditions" },
              ].map((link, idx) => (
                <li className="mb-2" key={idx}>
                  <Link
                    to={link.to}
                    className="text-light text-decoration-none footer-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div className="col-md-4 mb-4" data-aos="fade-left">
            <h5 className="fw-bold mb-3 text-success">Stay Connected</h5>
            <p className="text-light">
              Subscribe to our newsletter for the latest tutorials and updates.
            </p>
            <form className="d-flex mb-3 glass-box rounded-pill p-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control border-0 rounded-pill shadow-none"
                style={{
                  background: "transparent",
                  color: "white",
                }}
              />
              <button className="btn btn-warning rounded-pill px-4 fw-bold">
                Subscribe
              </button>
            </form>

            {/* Social Icons */}
            <div className="d-flex gap-3 fs-4 mt-3">
              {[
                { href: "#", icon: "fab fa-twitter" },
                { href: "#", icon: "fab fa-linkedin" },
                { href: "#", icon: "fab fa-instagram" },
                { href: "#", icon: "fab fa-youtube" },
                {
                  href: "mailto:harshkumarofficial800@gmail.com",
                  icon: "fas fa-envelope",
                },
                {
                  href: "https://github.com/",
                  icon: "fab fa-github",
                  target: "_blank",
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.target || "_self"}
                  rel="noreferrer"
                  className="text-light social-icon"
                >
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-light" />

        {/* Copyright */}
        <div className="text-center pb-3">
          <small>
            © {new Date().getFullYear()} <span className="text-warning">JavaCTutorial</span>. All
            Rights Reserved.
          </small>
        </div>
      </div>

      {/* Extra Styles */}
      <style>{`
        @keyframes footerGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .footer-link {
          position: relative;
          transition: all 0.3s ease;
        }
        .footer-link:hover {
          color: #ffcc00 !important;
          padding-left: 6px;
        }
        .social-icon {
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          color: #ffcc00 !important;
          transform: scale(1.3) rotate(5deg);
          text-shadow: 0 0 10px rgba(255, 204, 0, 0.8);
        }
        .glass-box {
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
        }
        .glass-box input::placeholder {
          color: rgba(255,255,255,0.6);
        }
      `}</style>
    </footer>
  );
}

export default Footer;
