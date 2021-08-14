import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <br />
        <h1>let's connect</h1>
        <p>form here</p>
        <p>Email: apipich2207@gmail.com</p>
        <p>
          <a href="https://www.linkedin.com/in/amandapipich/">
            <i className="fab fa-linkedin"></i>
          </a>
          &nbsp;
          <a href="https://twitter.com/amandapipich?lang=en">
            <i className="fab fa-twitter"></i>
          </a>
          &nbsp;
          <a href="mailto:apipich2207@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </p>

        <br />
      </div>
    </div>
  );
}
