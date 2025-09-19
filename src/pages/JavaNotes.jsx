import React from 'react'
import { Accordion } from 'react-bootstrap'

function JavaNotes() {
  return (
    <div className="container">
      <h2>Java Notes</h2>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Introduction to Java</Accordion.Header>
          <Accordion.Body>
            Java is a high-level, class-based, object-oriented programming language.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>OOP Concepts</Accordion.Header>
          <Accordion.Body>
            Encapsulation, Inheritance, Polymorphism, and Abstraction are the four main principles of OOP in Java.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Example: Java Class</Accordion.Header>
          <Accordion.Body>
            <pre>{`class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default JavaNotes