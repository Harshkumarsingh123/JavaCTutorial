import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Message submitted successfully!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div
      className="contact-page py-5"
      style={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        {/* Title */}
        <div className="text-center text-light mb-5" data-aos="fade-down">
          <h2 className="fw-bold display-5">Contact Us</h2>
          <p className="lead">
            We'd love to hear from you! Reach out using the form below or our
            contact details.
          </p>
        </div>

        <div className="row g-5">
          {/* Contact Form */}
          <div className="col-md-7" data-aos="fade-right">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-4">
                <h4 className="fw-bold mb-3">Send Us a Message</h4>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Message</label>
                    <textarea
                      className="form-control"
                      rows="5"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-100 fw-bold"
                    style={{
                      transition: "all 0.3s ease-in-out",
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.transform = "scale(1.05)")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }
                  >
                    🚀 Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-5 text-light" data-aos="fade-left">
            <div className="p-4 rounded-4 h-100 d-flex flex-column justify-content-center shadow-lg"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h4 className="fw-bold mb-4">Get in Touch</h4>
              <p className="d-flex align-items-center mb-3">
                <FaEnvelope className="me-2 text-warning" /> harshkumarofficial800@gmail.com
              </p>
              <p className="d-flex align-items-center mb-3">
                <FaPhoneAlt className="me-2 text-success" /> +91 98765 43210
              </p>
              <p className="d-flex align-items-center mb-3">
                <FaMapMarkerAlt className="me-2 text-danger" /> Noida, India
              </p>
              <p className="mt-3">
                Feel free to drop by or send us a quick message. We usually
                respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Extra Styles */}
      <style>{`
        .contact-page input, 
        .contact-page textarea {
          border-radius: 10px;
          border: 1px solid #ccc;
          transition: all 0.3s ease;
        }
        .contact-page input:focus, 
        .contact-page textarea:focus {
          border-color: #007bff;
          box-shadow: 0 0 8px rgba(0,123,255,0.3);
        }
      `}</style>
    </div>
  );
}

export default Contact;
