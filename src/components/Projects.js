import React from "react";
import project1 from "./images/project1.png";
import project2 from "./images/project2.png";
import project3 from "./images/project3.png";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <h5>Javascript Weather Project</h5>
          <a
            href="https://vibrant-lovelace-115a07.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project1} width="300" alt="javascript weather" />
          </a>
        </div>
      </div>
      <div className="col-sm">
        <h5>React Weather Project</h5>
        <a
          href="https://distracted-heyrovsky-8e212e.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={project2} width="300" alt="react weather" />
        </a>
      </div>
      <div className="col-sm">
        <h5>React Dictionary Project</h5>
        <a
          href="https://nervous-bardeen-829a9e.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={project3} width="300" alt="react dictionary" />
        </a>
      </div>
    </div>
  );
}
