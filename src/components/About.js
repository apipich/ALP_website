import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="About">
      <div className="container">
        <br />
        <h1>about me</h1>
        <p>
          I'm a full time advertising professional in Hoboken (my beautiful
          city, right across the river from New York that appears on my
          homepage). My love of technology and learning new software has brought
          me here, building my website brick by brick. Let's connect!
          <a
            href="https://github.com/apipich/ALP_website"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>{" "}
          by Amanda Pipich.
        </p>
      </div>
    </div>
  );
}
