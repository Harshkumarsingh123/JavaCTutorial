import React from "react";

function About() {
  return (
    <div className="container my-5">
      {/* Hero Section */}
      <div className="text-center mb-5" data-aos="fade-up">
        <h2 className="fw-bold display-5">About JavaCTutorial</h2>
        <p className="lead text-muted">
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
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <h3 className="fw-bold">Our Mission</h3>
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
      <div className="row align-items-center mb-5 bg-light p-4 rounded shadow">
        <div className="col-md-4 text-center" data-aos="zoom-in">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="Creator Harsh Kumar Singh"
            className="img-fluid rounded-circle shadow"
            style={{ maxWidth: "200px" }}
          />
        </div>
        <div className="col-md-8" data-aos="fade-left">
          <h3 className="fw-bold">Meet the Creator</h3>
          <p>
            <b>Harsh Kumar Singh</b>, the founder of JavaCTutorial, holds a{" "}
            <b>Master of Computer Applications (MCA)</b> from Greater Noida. With a
            passion for teaching and simplifying complex programming concepts,
            Harsh built this platform to guide students, beginners, and
            professionals in their coding journey.
          </p>
          <p>
            📧{" "}
            <a href="mailto:harshkumarofficial800@gmail.com">
              harshkumarofficial800@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Values / Features with Gradient & Hover Animation */}
      <div className="row text-center mt-5">
        <div
          className="col-md-3 mb-4"
          data-aos="flip-left"
          style={{ transition: "transform 0.4s" }}
        >
          <div className="p-4 rounded shadow-lg h-100 text-white"
            style={{ background: "linear-gradient(135deg, #667eea, #764ba2)" }}
          >
            <i className="bi bi-journal-code display-4"></i>
            <h5 className="mt-3">Structured Notes</h5>
            <p>Easy-to-understand notes with real-world examples.</p>
          </div>
        </div>

        <div
          className="col-md-3 mb-4"
          data-aos="flip-up"
          style={{ transition: "transform 0.4s" }}
        >
          <div className="p-4 rounded shadow-lg h-100 text-white"
            style={{ background: "linear-gradient(135deg, #11998e, #38ef7d)" }}
          >
            <i className="bi bi-laptop display-4"></i>
            <h5 className="mt-3">Practical Learning</h5>
            <p>Hands-on tutorials to strengthen coding skills.</p>
          </div>
        </div>

        <div
          className="col-md-3 mb-4"
          data-aos="flip-right"
          style={{ transition: "transform 0.4s" }}
        >
          <div className="p-4 rounded shadow-lg h-100 text-white"
            style={{ background: "linear-gradient(135deg, #f7971e, #ffd200)" }}
          >
            <i className="bi bi-people display-4"></i>
            <h5 className="mt-3">Community Driven</h5>
            <p>Learn and grow together with peers and mentors.</p>
          </div>
        </div>

        <div
          className="col-md-3 mb-4"
          data-aos="flip-down"
          style={{ transition: "transform 0.4s" }}
        >
          <div className="p-4 rounded shadow-lg h-100 text-white"
            style={{ background: "linear-gradient(135deg, #ff416c, #ff4b2b)" }}
          >
            <i className="bi bi-lightbulb display-4"></i>
            <h5 className="mt-3">Career Focused</h5>
            <p>Resources to prepare for interviews and real-world projects.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
