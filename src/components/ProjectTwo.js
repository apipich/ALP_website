import React from "react";
import project2 from "./project2.png";

export default function ProjectTwo() {
  return (
    <div className="projectTwo">
      <h5>React Weather Project</h5>
      <a
        href="https://distracted-heyrovsky-8e212e.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={project2} width="300" alt="yes" />
      </a>
    </div>
  );
}
