import React from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="text-light py-5 hero-section"
        style={{
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
        data-aos="fade-up"
      >
        <div className="container text-center">
          <h1 className="display-4 fw-bold animate-text">
            Welcome to <span className="brand-gradient">JavaCTutorial</span>
          </h1>
          <p className="lead col-md-8 mx-auto">
            Learn programming languages and technologies with structured notes,
            interactive examples, and easy-to-understand explanations.
          </p>
          <Link className="btn btn-lg custom-btn mt-3" to="/java">
            🚀 Start Learning Java
          </Link>
        </div>
        {/* Hero animation circles */}
        <div className="hero-circle circle1"></div>
        <div className="hero-circle circle2"></div>
      </section>

      {/* Featured Courses */}
      <section className="py-5 bg-gradient-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 section-title" data-aos="fade-up">
            Explore Our Tutorials
          </h2>
          <div className="row g-4">
            {[
              {
                img: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
                title: "Java Programming",
                desc: "Learn Object-Oriented Programming, Core Java concepts, and advanced features with examples.",
                link: "/java",
                color: "text-primary",
              },
              {
                img: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png",
                title: "SQL Databases",
                desc: "Master database concepts, queries, joins, and stored procedures to manage data efficiently.",
                link: "/sql",
                color: "text-success",
              },
              {
                img: "https://cdn-icons-png.flaticon.com/512/919/919826.png",
                title: "HTML & CSS",
                desc: "Build responsive and attractive websites using the building blocks of the web: HTML & CSS.",
                link: "/htmlcss",
                color: "text-danger",
              },
            ].map((course, i) => (
              <div className="col-md-4" key={i} data-aos="zoom-in" data-aos-delay={i * 200}>
                <div className="card shadow-lg h-100 hover-animate">
                  <img
                    src={course.img}
                    className="card-img-top p-4"
                    alt={course.title}
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                  <div className="card-body text-center">
                    <h5 className={`card-title fw-bold ${course.color}`}>{course.title}</h5>
                    <p className="card-text">{course.desc}</p>
                    <Link to={course.link} className="btn custom-btn">
                      Learn {course.title.split(" ")[0]}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 bg-gradient-dark text-light">
        <div className="container" data-aos="fade-up">
          <h2 className="text-center fw-bold mb-5">Why Choose JavaCTutorial?</h2>
          <div className="row g-4 text-center">
            {[
              { icon: "fas fa-chalkboard-teacher", title: "Structured Learning", text: "Step-by-step notes and examples." , color: "text-info"},
              { icon: "fas fa-code", title: "Hands-on Practice", text: "Code examples and exercises for practice.", color: "text-warning"},
              { icon: "fas fa-book-open", title: "Comprehensive Notes", text: "Basics to advanced topics in one place.", color: "text-success"},
              { icon: "fas fa-users", title: "Community Support", text: "Join discussions and learn together.", color: "text-danger"},
            ].map((item, i) => (
              <div className="col-md-3" key={i} data-aos="flip-left" data-aos-delay={i*200}>
                <i className={`${item.icon} fa-3x mb-3 ${item.color} pulse`}></i>
                <h5 className="fw-bold">{item.title}</h5>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-5 bg-gradient-stats text-light text-center">
        <div className="container" data-aos="fade-up">
          <h2 className="fw-bold mb-5">Our Achievements</h2>
          <div className="row g-4">
            {[
              { number: "10K+", label: "Students Enrolled" },
              { number: "500+", label: "Projects Completed" },
              { number: "200+", label: "Video Tutorials" },
              { number: "50+", label: "Expert Mentors" },
            ].map((stat, i) => (
              <div className="col-md-3" key={i}>
                <h3 className="fw-bold display-5">{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Reviews */}
      <section className="py-5 bg-gradient-light">
        <div className="container" data-aos="fade-up">
          <h2 className="text-center fw-bold mb-5">What Our Students Say</h2>
          <div className="row g-4">
            {[
              { name: "Alice", review: "Great tutorials, easy to follow!" },
              { name: "Bob", review: "I learned Java quickly thanks to this platform." },
              { name: "Charlie", review: "Highly recommend for beginners and pros alike." },
            ].map((rev, i) => (
              <div className="col-md-4" key={i} data-aos="zoom-in" data-aos-delay={i*200}>
                <div className="card shadow-lg p-4 h-100 hover-animate text-dark">
                  <p>"{rev.review}"</p>
                  <h6 className="fw-bold mt-3">- {rev.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 text-center bg-gradient-cta text-light" data-aos="zoom-in">
        <div className="container">
          <h2 className="fw-bold mb-3">🚀 Ready to Start Your Learning Journey?</h2>
          <p className="lead mb-4">
            Join thousands of students who are building their skills with JavaCTutorial.
          </p>
          <Link className="btn btn-lg custom-btn-light" to="/signup">
            Get Started for Free
          </Link>
        </div>
      </section>

      {/* Extra Styles */}
      <style>{`
        .hero-section .brand-gradient {
          background: linear-gradient(90deg, #ff416c, #ff4b2b, #ffcc00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientText 5s ease infinite;
        }
        @keyframes gradientText {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .custom-btn {
          background: linear-gradient(90deg, #ff416c, #ff4b2b);
          color: white;
          transition: all 0.3s ease-in-out;
        }
        .custom-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(255, 203, 0, 0.7);
        }
        .custom-btn-light {
          background: linear-gradient(90deg, #667eea, #764ba2);
          color: white;
          transition: all 0.3s ease-in-out;
        }
        .custom-btn-light:hover {
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(255, 203, 0, 0.7);
        }
        .hover-animate:hover {
          transform: translateY(-5px);
          transition: all 0.3s ease-in-out;
        }
        .bg-gradient-light {
          background: linear-gradient(135deg, #f9f9f9, #e0e0e0);
        }
        .bg-gradient-dark {
          background: linear-gradient(135deg, #1a1a2e, #16213e);
        }
        .bg-gradient-stats {
          background: linear-gradient(135deg, #0f2027, #203a43);
        }
        .bg-gradient-cta {
          background: linear-gradient(135deg, #ff416c, #ff4b2b);
        }
        .hero-circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.2;
          animation: float 10s ease-in-out infinite;
        }
        .circle1 {
          width: 200px;
          height: 200px;
          background: #ffcc00;
          top: 10%;
          left: 5%;
        }
        .circle2 {
          width: 300px;
          height: 300px;
          background: #00ffcc;
          bottom: 5%;
          right: 10%;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .pulse {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

export default Home;
