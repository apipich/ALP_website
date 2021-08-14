import "./styles.css";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>amanda pipich</h1>
        <p>
          I'm a full time advertising professional in Hoboken (below, my
          beautiful city, right across the river from New York). My love of
          technology and learning new software has brought me here, building my
          website brick by brick. Let's connect! Photo and{" "}
          <a
            href="https://github.com/apipich/ALP_website"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>{" "}
          by Amanda Pipich
        </p>
      </div>
      <img src="Hoboken.png" alt="hoboken" width="100%" className="hoboken" />
    </div>
  );
}
