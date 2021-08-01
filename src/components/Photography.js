import React from "react";
import napa from "./napa.JPG";

export default function Photography() {
  return (
    <div className="Container">
      <h1>photography</h1>
      <div className="photography">
        <h3>image gallery</h3>
      </div>
      <div className="Row">
        <div className="col-4">
          <img src={napa} alt="Napa, CA" class="img-thumbnail" />
        </div>
      </div>
    </div>
  );
}
