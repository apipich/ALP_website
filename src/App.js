import "./styles.css";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h4>Hi, I'm</h4>
        <h1>amanda pipich.</h1>
        <br />
        <h4>
          I'm an advertising professional by day and a web developer in-training
          by night. Welcome to my [work in progress] portfolio. Based in
          Hoboken, NJ.
        </h4>
      </div>
      <img src="Hoboken.png" alt="hoboken" width="100%" className="hoboken" />
    </div>
  );
}
