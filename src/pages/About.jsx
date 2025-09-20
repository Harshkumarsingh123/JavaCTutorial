import React from "react";
import Particles from "react-tsparticles";

function About() {
  return (
    <div className="about-page position-relative" style={{ minHeight: "100vh" }}>
      {/* Particle Background */}
      <Particles
        id="tsparticles-about"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 60, density: { enable: true, area: 800 } },
            color: { value: ["#ff416c", "#00e5ff", "#38ef7d"] },
            shape: { type: "circle" },
            opacity: { value: 0.6 },
            size: { value: { min: 2, max: 5 } },
            move: { enable: true, speed: 2, outModes: { default: "out" } },
            links: {
              enable: true,
              distance: 130,
              color: "#ffffff",
              opacity: 0.2,
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
              push: { quantity: 3 },
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

      {/* Main Content */}
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
          {/* Hero Section */}
          <div className="text-center mb-5 text-light" data-aos="fade-up">
            <h2 className="fw-bold display-5" style={{ color: "#00e5ff" }}>
              🚀 About JavaCTutorial
            </h2>
            <p className="lead text-light">
              Empowering learners with structured programming notes, examples, and
              hands-on resources.
            </p>
          </div>

          {/* Platform Info */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6" data-aos="fade-right">
              <img
                src="https://img.freepik.com/free-photo/group-young-people-working-together-laptops_23-2149309644.jpg"
                alt="Students learning with laptops"
                className="img-fluid rounded shadow-lg"
                style={{
                  borderRadius: "20px",
                  transition: "transform 0.4s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>
            <div className="col-md-6 text-light" data-aos="fade-left">
              <h3 className="fw-bold text-warning">Our Mission</h3>
              <p>
                JavaCTutorial is an educational platform dedicated to making coding
                simple, structured, and accessible. We provide high-quality notes,
                tutorials, and examples for programming languages like{" "}
                <b>Java, SQL, HTML, CSS</b> and more.
              </p>
              <p>
                Whether you are a beginner or preparing for interviews, our goal is
                to help you master coding step by step with clear explanations and
                hands-on practice.
              </p>
            </div>
          </div>

          {/* Creator Info */}
          <div
            className="row align-items-center mb-5 p-4 rounded-4 shadow-lg"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <div className="col-md-4 text-center" data-aos="zoom-in">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="Creator Harsh Kumar Singh"
                className="img-fluid rounded-circle shadow-lg"
                style={{ maxWidth: "200px" }}
              />
            </div>
            <div className="col-md-8 text-light" data-aos="fade-left">
              <h3 className="fw-bold text-info">Meet the Creator</h3>
              <p>
                <b>Harsh Kumar Singh</b>, the founder of JavaCTutorial, holds a{" "}
                <b>Master of Computer Applications (MCA)</b> from Greater Noida. With a
                passion for teaching and simplifying complex programming concepts,
                Harsh built this platform to guide students, beginners, and
                professionals in their coding journey.
              </p>
              <p>
                📧{" "}
                <a
                  href="mailto:harshkumarofficial800@gmail.com"
                  className="text-warning fw-bold"
                >
                  harshkumarofficial800@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Values / Features */}
          <div className="row text-center mt-5">
            {[
              {
                icon: "bi bi-journal-code",
                title: "Structured Notes",
                desc: "Easy-to-understand notes with real-world examples.",
                gradient: "linear-gradient(135deg, #667eea, #764ba2)",
              },
              {
                icon: "bi bi-laptop",
                title: "Practical Learning",
                desc: "Hands-on tutorials to strengthen coding skills.",
                gradient: "linear-gradient(135deg, #11998e, #38ef7d)",
              },
              {
                icon: "bi bi-people",
                title: "Community Driven",
                desc: "Learn and grow together with peers and mentors.",
                gradient: "linear-gradient(135deg, #f7971e, #ffd200)",
              },
              {
                icon: "bi bi-lightbulb",
                title: "Career Focused",
                desc: "Resources to prepare for interviews and real-world projects.",
                gradient: "linear-gradient(135deg, #ff416c, #ff4b2b)",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="col-md-3 mb-4"
                data-aos="zoom-in"
                style={{ transition: "transform 0.4s" }}
              >
                <div
                  className="p-4 rounded-4 shadow-lg h-100 text-white"
                  style={{
                    background: item.gradient,
                    transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px) scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 25px rgba(0,0,0,0.4)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
                  }}
                >
                  <i className={`${item.icon} display-4`}></i>
                  <h5 className="mt-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
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
      `}</style>
    </div>
  );
}

export default About;
