import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import Photography from "./components/Photography";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Contact" component={Contact} />
        <Route path="/About" component={About} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Photography" component={Photography} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
