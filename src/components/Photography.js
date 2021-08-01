import React from "react";
import napa from "./napa.JPG";
import paris from "./paris.JPG";
import castle from "./castle.JPG";

export default function Photography() {
  return (
    <div className="photography">
      <h1>photography</h1>
      <h3>image gallery</h3>
      <div className="Container"></div>
      <div className="Row">
        <div className="col-4">
          <img src={napa} alt="Napa, CA" class="img-thumbnail" />
        </div>
      </div>
      <div className="Row">
        <div className="col-4">
          <img src={paris} alt="Paris, France" class="img-thumbnail" />
        </div>
      </div>
      <div className="Row">
        <div className="col-4">
          <img src={castle} alt="Paris, France" class="img-thumbnail" />
        </div>
      </div>
    </div>
  );
}
