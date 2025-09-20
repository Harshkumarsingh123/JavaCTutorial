import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Particles from "react-tsparticles";

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
    <div className="contact-page position-relative" style={{ minHeight: "100vh" }}>
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: "transparent",
          },
          fpsLimit: 60,
          particles: {
            number: { value: 70, density: { enable: true, area: 800 } },
            color: { value: ["#00e5ff", "#00ff9d", "#ffffff"] },
            shape: { type: "circle" },
            opacity: { value: 0.6 },
            size: { value: { min: 2, max: 5 } },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              outModes: { default: "out" },
            },
            links: {
              enable: true,
              distance: 120,
              color: "#00e5ff",
              opacity: 0.3,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { quantity: 4 },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      {/* Content Layer */}
      <div
        style={{
          background: "linear-gradient(270deg, #0f2027, #203a43, #2c5364, #1f4037, #99f2c8)",
          backgroundSize: "800% 800%",
          animation: "gradientBG 15s ease infinite",
          minHeight: "100vh",
          position: "relative",
          zIndex: 1,
        }}
        className="py-5"
      >
        <div className="container">
          {/* Title */}
          <div className="text-center text-light mb-5" data-aos="fade-down">
            <h2 className="fw-bold display-5" style={{ color: "#00e5ff" }}>
              📬 Contact Us
            </h2>
            <p className="lead text-light">
              We'd love to hear from you! Reach out using the form below or our
              contact details.
            </p>
          </div>

          <div className="row g-5">
            {/* Contact Form */}
            <div className="col-md-7" data-aos="fade-right">
              <div
                className="card shadow-lg border-0 rounded-4"
                style={{
                  backdropFilter: "blur(15px)",
                  background: "rgba(255, 255, 255, 0.12)",
                  color: "#fff",
                  transition: "transform 0.3s ease",
                }}
              >
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-3 text-info">Send Us a Message</h4>
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
                      className="btn btn-info w-100 fw-bold"
                      style={{
                        borderRadius: "30px",
                        fontSize: "18px",
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
              <div
                className="p-4 rounded-4 h-100 d-flex flex-column justify-content-center shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0, 238, 255, 0.2), rgba(0, 255, 157, 0.2))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  transition: "transform 0.3s ease",
                }}
              >
                <h4 className="fw-bold mb-4 text-warning">Get in Touch</h4>
                <div
                  className="card bg-transparent border-0 mb-3 p-3 rounded-3 shadow-sm"
                  style={{ background: "rgba(255, 255, 255, 0.08)" }}
                >
                  <p className="d-flex align-items-center mb-0">
                    <FaEnvelope className="me-2 text-warning" /> harshkumarofficial800@gmail.com
                  </p>
                </div>
                <div
                  className="card bg-transparent border-0 mb-3 p-3 rounded-3 shadow-sm"
                  style={{ background: "rgba(255, 255, 255, 0.08)" }}
                >
                  <p className="d-flex align-items-center mb-0">
                    <FaPhoneAlt className="me-2 text-success" /> +91 98765 43210
                  </p>
                </div>
                <div
                  className="card bg-transparent border-0 mb-3 p-3 rounded-3 shadow-sm"
                  style={{ background: "rgba(255, 255, 255, 0.08)" }}
                >
                  <p className="d-flex align-items-center mb-0">
                    <FaMapMarkerAlt className="me-2 text-danger" /> Noida, India
                  </p>
                </div>
                <p className="mt-3">
                  Feel free to drop by or send us a quick message. We usually
                  respond within{" "}
                  <span className="fw-bold text-info">24 hours</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra Styles */}
      <style>{`
        @keyframes gradientBG {
          0% {background-position: 0% 50%;}
          50% {background-position: 100% 50%;}
          100% {background-position: 0% 50%;}
        }
        .contact-page input, 
        .contact-page textarea {
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.3);
          background: rgba(255,255,255,0.1);
          color: #fff;
          transition: all 0.3s ease;
        }
        .contact-page input:focus, 
        .contact-page textarea:focus {
          border-color: #00e5ff;
          box-shadow: 0 0 10px rgba(0,229,255,0.6);
        }
        .card:hover {
          transform: translateY(-5px) scale(1.02);
        }
      `}</style>
    </div>
  );
}

export default Contact;
