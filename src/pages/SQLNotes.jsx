import React, { useState, useEffect } from "react";
import { Nav, Card, Form, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

function SQLNotes() {
  const [activeTopic, setActiveTopic] = useState("intro");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // ✅ SQL Topics Data with Gradients + Images
  const topics = {
    intro: {
      title: "Introduction to SQL",
      content: `SQL (Structured Query Language) is the standard language for interacting with relational databases.`,
      gradient: "linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)",
      image: "https://img.icons8.com/color/96/database.png",
    },
    select: {
      title: "Basic SELECT Query",
      content: `SELECT * FROM Employees WHERE Department = 'IT';`,
      gradient: "linear-gradient(135deg, #11998e, #38ef7d)",
      image: "https://img.icons8.com/fluency/96/table.png",
    },
    where: {
      title: "WHERE Clause",
      content: `SELECT name, salary FROM Employees WHERE salary > 50000;`,
      gradient: "linear-gradient(135deg, #f7971e, #ffd200)",
      image: "https://img.icons8.com/fluency/96/filter.png",
    },
    joins: {
      title: "SQL JOINs",
      content: `JOIN combines rows from multiple tables.`,
      gradient: "linear-gradient(135deg, #654ea3, #eaafc8)",
      image: "https://img.icons8.com/fluency/96/join.png",
    },
    groupby: {
      title: "GROUP BY & HAVING",
      content: `SELECT department, COUNT(*) FROM Employees GROUP BY department HAVING COUNT(*) > 5;`,
      gradient: "linear-gradient(135deg, #36d1dc, #5b86e5)",
      image: "https://img.icons8.com/color/96/group.png",
    },
    subqueries: {
      title: "Subqueries",
      content: `SELECT name FROM Employees WHERE salary > (SELECT AVG(salary) FROM Employees);`,
      gradient: "linear-gradient(135deg, #ff512f, #dd2476)",
      image: "https://img.icons8.com/fluency/96/query.png",
    },
    views: {
      title: "Views",
      content: `CREATE VIEW IT_Employees AS SELECT name, department FROM Employees WHERE department = 'IT';`,
      gradient: "linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)",
      image: "https://img.icons8.com/fluency/96/view-file.png",
    },
    triggers: {
      title: "Triggers",
      content: `CREATE TRIGGER after_insert_employee AFTER INSERT ON Employees FOR EACH ROW BEGIN INSERT INTO Logs(message) VALUES ('New Employee Added'); END;`,
      gradient: "linear-gradient(135deg, #1d2b64, #f8cdda)",
      image: "https://img.icons8.com/color/96/automation.png",
    },
    transactions: {
      title: "Transactions",
      content: `BEGIN; UPDATE Accounts SET balance = balance - 500 WHERE id=1; COMMIT;`,
      gradient: "linear-gradient(135deg, #0f2027, #2c5364, #203a43)",
      image: "https://img.icons8.com/color/96/money-transfer.png",
    },
    indexes: {
      title: "Indexes",
      content: `CREATE INDEX idx_emp_name ON Employees(name);`,
      gradient: "linear-gradient(135deg, #ff9a9e, #fecfef)",
      image: "https://img.icons8.com/fluency/96/index.png",
    },
    advanced: {
      title: "Advanced SQL (CTE, Window Functions)",
      content: `WITH HighSalary AS (SELECT name, salary FROM Employees WHERE salary > 60000) SELECT * FROM HighSalary;`,
      gradient: "linear-gradient(135deg, #4e54c8, #8f94fb)",
      image: "https://img.icons8.com/fluency/96/code-file.png",
    },
  };

  return (
    <div>
      {/* ✅ Intro Section */}
      <section
        className="text-light text-center py-5"
        style={{
          background: "linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)",
          minHeight: "250px",
        }}
        data-aos="fade-down"
      >
        <div className="container">
          <h1 className="fw-bold display-5">SQL Tutorial & Notes</h1>
          <p className="lead col-md-8 mx-auto">
            Learn SQL from basics to advanced concepts with clear explanations,
            practical queries, and examples. 🚀
          </p>
        </div>
      </section>

      {/* ✅ Main Layout */}
      <div className="container-fluid mt-4">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 mb-3">
            <Nav
              className="flex-column nav-pills shadow p-3 rounded"
              style={{
                background: "linear-gradient(180deg, #16222A, #3A6073)",
              }}
            >
              {Object.keys(topics).map((key, index) => (
                <Nav.Link
                  key={key}
                  onClick={() => setActiveTopic(key)}
                  active={activeTopic === key}
                  className="fw-semibold text-light mb-2 rounded-pill"
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                  style={{
                    transition: "all 0.3s",
                  }}
                >
                  {topics[key].title}
                </Nav.Link>
              ))}
            </Nav>
          </div>

          {/* Content */}
          <div className="col-md-9">
            <Card
              className="shadow-lg border-0"
              style={{
                background: topics[activeTopic].gradient,
                color: "#fff",
              }}
              data-aos="zoom-in"
            >
              <Card.Body className="text-center">
                <img
                  src={topics[activeTopic].image}
                  alt="SQL"
                  className="mb-3"
                  style={{ width: "80px" }}
                  data-aos="flip-left"
                />
                <Card.Title className="fw-bold fs-3">
                  {topics[activeTopic].title}
                </Card.Title>
                <Card.Text
                  style={{
                    whiteSpace: "pre-line",
                    fontFamily: "monospace",
                    fontSize: "15px",
                  }}
                >
                  {topics[activeTopic].content}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* ✅ Feedback Form */}
      <div className="container my-5" data-aos="fade-up">
        <h2 className="text-center fw-bold mb-4">💬 Share Your Feedback</h2>
        <Card className="shadow-lg p-4 border-0">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Your Feedback</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="primary" className="rounded-pill">
              Submit
            </Button>
          </Form>
        </Card>
      </div>

      {/* ✅ Try SQL Form */}
      <div className="container my-5" data-aos="fade-up">
        <h2 className="text-center fw-bold mb-4">⚡ Try Writing SQL Query</h2>
        <Card className="shadow-lg p-4 border-0">
          <Form>
            <Form.Group>
              <Form.Label>Enter SQL Query</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Example: SELECT * FROM Employees;"
              />
            </Form.Group>
            <Button variant="success" className="mt-3 rounded-pill">
              Run (Demo Only)
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default SQLNotes;
