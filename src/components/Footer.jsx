import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="text-light pt-5 mt-5"
      style={{
        background: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
      }}
    >
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-4" data-aos="fade-right">
            <h4 className="fw-bold">JavaCTutorial</h4>
            <p>
              Learn Java, SQL, Web Development, and more with structured notes,
              examples, and tutorials. A platform built to empower students and
              developers for a brighter future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4" data-aos="fade-up">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-light text-decoration-none footer-link"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/about"
                  className="text-light text-decoration-none footer-link"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact"
                  className="text-light text-decoration-none footer-link"
                >
                  Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/privacy"
                  className="text-light text-decoration-none footer-link"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-light text-decoration-none footer-link"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div className="col-md-4 mb-4" data-aos="fade-left">
            <h5 className="fw-bold mb-3">Stay Connected</h5>
            <p>
              Subscribe to our newsletter for the latest tutorials and updates.
            </p>
            <form className="d-flex mb-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control me-2"
              />
              <button className="btn btn-warning">Subscribe</button>
            </form>

            <div className="d-flex gap-3 fs-4">
              <a href="#" className="text-light social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-light social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-light social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-light social-icon">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="mailto:harshkumarofficial800@gmail.com" className="text-light social-icon">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-light social-icon">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-light" />

        {/* Copyright */}
        <div className="text-center pb-3">
          <small>
            © {new Date().getFullYear()} JavaCTutorial. All Rights Reserved.
          </small>
        </div>
      </div>

      {/* Extra Styles for Hover Animations */}
      <style>{`
        .footer-link:hover {
          color: #ffcc00 !important;
          padding-left: 5px;
          transition: all 0.3s ease-in-out;
        }
        .social-icon:hover {
          color: #ffcc00 !important;
          transform: scale(1.2);
          transition: all 0.3s ease-in-out;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
