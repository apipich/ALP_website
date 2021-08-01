import React from "react";
import napa from "./napa.JPG";
import paris from "./paris.JPG";
import castle from "./castle.JPG";
import "./Photography.css";

export default function Photography() {
  return (
    <div className="photography">
      <br />
      <h2>photos taken by me</h2>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={napa} alt="Napa, CA" class="img-thumbnail" />
          </div>
          <div className="col-4">
            <img src={paris} alt="Paris, France" class="img-thumbnail" />
          </div>
          <div className="col-4">
            <img src={castle} alt="Paris, France" class="img-thumbnail" />
          </div>
        </div>
      </div>
    </div>
  );
}
