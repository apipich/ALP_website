import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <br />
      <h2>projects by amanda</h2>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h5>Javascript Weather Project</h5>
            <a
              href="https://vibrant-lovelace-115a07.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="project1.png" width="300" alt="javascript weather" />
            </a>
          </div>
          <div className="col-4">
            <h5>React Weather Project</h5>
            <a
              href="https://distracted-heyrovsky-8e212e.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="project2.png" width="300" alt="react weather" />
            </a>
          </div>
          <div className="col-4">
            <h5>React Dictionary Project</h5>
            <a
              href="https://nervous-bardeen-829a9e.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="project3.png" width="300" alt="react dictionary" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
