import React from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-light py-5 hero-section">
        <div className="container text-center" data-aos="fade-up">
          <h1 className="display-4 fw-bold animate-text">
            Welcome to <span className="brand-gradient">JavaCTutorial</span>
          </h1>
          <p className="lead col-md-8 mx-auto">
            Learn programming languages and technologies with structured notes,
            interactive examples, and easy-to-understand explanations.
          </p>
          <Link className="btn btn-lg mt-3 custom-btn" to="/java">
            🚀 Start Learning Java
          </Link>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-5 bg-gradient-light">
        <div className="container">
          <h2
            className="text-center fw-bold mb-5 section-title"
            data-aos="fade-up"
          >
            Explore Our Tutorials
          </h2>
          <div className="row g-4">
            {/* Java */}
            <div className="col-md-4" data-aos="zoom-in">
              <div className="card shadow-lg h-100 hover-animate">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
                  className="card-img-top p-4"
                  alt="Java"
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold text-primary">
                    Java Programming
                  </h5>
                  <p className="card-text">
                    Learn Object-Oriented Programming, Core Java concepts, and
                    advanced features with examples.
                  </p>
                  <Link to="/java" className="btn custom-btn">
                    Learn Java
                  </Link>
                </div>
              </div>
            </div>

            {/* SQL */}
            <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="card shadow-lg h-100 hover-animate">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2772/2772128.png"
                  className="card-img-top p-4"
                  alt="SQL"
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold text-success">
                    SQL Databases
                  </h5>
                  <p className="card-text">
                    Master database concepts, queries, joins, and stored
                    procedures to manage data efficiently.
                  </p>
                  <Link to="/sql" className="btn custom-btn">
                    Learn SQL
                  </Link>
                </div>
              </div>
            </div>

            {/* HTML & CSS */}
            <div className="col-md-4" data-aos="zoom-in" data-aos-delay="400">
              <div className="card shadow-lg h-100 hover-animate">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/919/919826.png"
                  className="card-img-top p-4"
                  alt="HTML CSS"
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold text-danger">
                    HTML & CSS
                  </h5>
                  <p className="card-text">
                    Build responsive and attractive websites using the building
                    blocks of the web: HTML & CSS.
                  </p>
                  <Link to="/htmlcss" className="btn custom-btn">
                    Learn Web Design
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 bg-gradient-dark text-light">
        <div className="container" data-aos="fade-up">
          <h2 className="text-center fw-bold mb-5">Why Choose JavaCTutorial?</h2>
          <div className="row g-4 text-center">
            <div className="col-md-3" data-aos="flip-left">
              <i className="fas fa-chalkboard-teacher fa-3x text-info mb-3 pulse"></i>
              <h5 className="fw-bold">Structured Learning</h5>
              <p>Step-by-step notes and examples designed for students.</p>
            </div>
            <div className="col-md-3" data-aos="flip-left" data-aos-delay="200">
              <i className="fas fa-code fa-3x text-warning mb-3 pulse"></i>
              <h5 className="fw-bold">Hands-on Practice</h5>
              <p>Code examples and exercises for practical learning.</p>
            </div>
            <div className="col-md-3" data-aos="flip-left" data-aos-delay="400">
              <i className="fas fa-book-open fa-3x text-success mb-3 pulse"></i>
              <h5 className="fw-bold">Comprehensive Notes</h5>
              <p>Covering basics to advanced topics in one place.</p>
            </div>
            <div className="col-md-3" data-aos="flip-left" data-aos-delay="600">
              <i className="fas fa-users fa-3x text-danger mb-3 pulse"></i>
              <h5 className="fw-bold">Community Support</h5>
              <p>Join discussions and learn together with peers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-5 text-center cta-section"
        data-aos="zoom-in"
      >
        <div className="container">
          <h2 className="fw-bold mb-3">🚀 Ready to Start Your Learning Journey?</h2>
          <p className="lead mb-4">
            Join thousands of students who are building their skills with
            JavaCTutorial.
          </p>
          <Link className="btn btn-lg custom-btn-light" to="/signup">
            Get Started for Free
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
