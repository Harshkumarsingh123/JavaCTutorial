import React, { useState, useEffect } from "react";
import { Nav, Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

function SQLNotes() {
  const [activeTopic, setActiveTopic] = useState("intro");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // SQL Topics Data
  const topics = {
    intro: {
      title: "Introduction to SQL",
      content: `SQL (Structured Query Language) is the standard language for interacting with relational databases. 
It helps in inserting, updating, deleting, and retrieving data efficiently. 
Every developer and data professional should master SQL.`,
    },
    select: {
      title: "Basic SELECT Query",
      content: `SELECT statements are used to fetch data from a database.
      
Example:
SELECT * FROM Employees WHERE Department = 'IT';`,
    },
    where: {
      title: "WHERE Clause",
      content: `WHERE filters records based on conditions.

Example:
SELECT name, salary FROM Employees WHERE salary > 50000;`,
    },
    joins: {
      title: "SQL JOINs",
      content: `JOIN combines rows from multiple tables.

Example:
SELECT e.name, d.department_name
FROM Employees e
JOIN Departments d ON e.dept_id = d.id;`,
    },
    groupby: {
      title: "GROUP BY & HAVING",
      content: `GROUP BY groups rows, HAVING filters groups.

Example:
SELECT department, COUNT(*) 
FROM Employees 
GROUP BY department 
HAVING COUNT(*) > 5;`,
    },
    subqueries: {
      title: "Subqueries",
      content: `A subquery is a query inside another query.

Example:
SELECT name FROM Employees 
WHERE salary > (SELECT AVG(salary) FROM Employees);`,
    },
    views: {
      title: "Views",
      content: `A view is a virtual table based on a SELECT query.

Example:
CREATE VIEW IT_Employees AS
SELECT name, department FROM Employees WHERE department = 'IT';`,
    },
    triggers: {
      title: "Triggers",
      content: `A trigger runs automatically when an event occurs.

Example:
CREATE TRIGGER after_insert_employee
AFTER INSERT ON Employees
FOR EACH ROW
BEGIN
   INSERT INTO Logs(message) VALUES ('New Employee Added');
END;`,
    },
    transactions: {
      title: "Transactions",
      content: `Transactions ensure data consistency.

Example:
BEGIN;
UPDATE Accounts SET balance = balance - 500 WHERE id=1;
UPDATE Accounts SET balance = balance + 500 WHERE id=2;
COMMIT;`,
    },
    indexes: {
      title: "Indexes",
      content: `Indexes improve query performance.

Example:
CREATE INDEX idx_emp_name ON Employees(name);`,
    },
    advanced: {
      title: "Advanced SQL (CTE, Window Functions)",
      content: `CTEs and Window Functions are advanced SQL concepts.

CTE Example:
WITH HighSalary AS (
  SELECT name, salary FROM Employees WHERE salary > 60000
)
SELECT * FROM HighSalary;

Window Function Example:
SELECT name, department, 
RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rank
FROM Employees;`,
    },
  };

  return (
    <div>
      {/* ✅ Intro Hero Section */}
      <section
        className="text-light text-center py-5"
        style={{
          background:
            "linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)",
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

      {/* ✅ Main Content with Sidebar + Cards */}
      <div className="container-fluid mt-4">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 mb-3">
            <Nav
              className="flex-column nav-pills shadow p-3 rounded"
              style={{
                background:
                  "linear-gradient(180deg, #16222A, #3A6073)",
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
                background:
                  "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
              }}
              data-aos="zoom-in"
            >
              <Card.Body>
                <Card.Title className="fw-bold fs-3 text-dark">
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
    </div>
  );
}

export default SQLNotes;
