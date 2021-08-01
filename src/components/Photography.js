import React from "react";
import "./Photography.css";

export default function Photography() {
  return (
    <div className="photography">
      <br />
      <h2>photos by amanda</h2>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src="napa.JPG" alt="Napa, CA" class="img-thumbnail" />
            <img src="paris.JPG" alt="Paris, France" class="img-thumbnail" />
            <img src="greece.JPG" alt="Oia, Greece" class="img-thumbnail" />
          </div>
          <div className="col-4">
            <img src="castle.JPG" alt="Paris, France" class="img-thumbnail" />
            <img src="night.JPG" alt="Paris, France" class="img-thumbnail" />
            <img src="temple.JPG" alt="Oia, Greece" class="img-thumbnail" />
          </div>
          <div className="col-4">
            <img src="castle2.JPG" alt="Paris, France" class="img-thumbnail" />
            <img
              src="courtyard.JPG"
              alt="Paris, France"
              class="img-thumbnail"
            />
            <img src="boat.JPG" alt="Greece" class="img-thumbnail" />
          </div>
        </div>
      </div>
    </div>
  );
}
