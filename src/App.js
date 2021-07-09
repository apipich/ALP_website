import "./styles.css";
import Homepage from "./Homepage.js";
import Navigation from "./Navigation";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Navigation />
      <h1>Amanda Pipich website</h1>
<Homepage />
    </div>
    <footer className="myCode"><small><a href="https://github.com/apipich/ALP_website" target="_blank" rel="noopener noreferrer">
      Open-source code</a> by Amanda Pipich</small></footer>
    </div>
  );
}
