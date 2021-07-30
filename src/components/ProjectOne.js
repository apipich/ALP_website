import React from "react";
import project1 from "./src/images/project1.png";

export default function ProjectOne() {
  return (
    <div className="projectOne">
      <h4>Javascript Project</h4>
      <img src={require(project1)} alt="yes" />
    </div>
  );
}
