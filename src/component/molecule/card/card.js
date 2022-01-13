import React from "react";

import "./card.css";

export default function button({destination, city, image}) {
  
  return (
    <div>
      <div className="card-componen1" style={{ backgroundImage: `url(${image})` }}>
        <div className="wrap-text-card-componen">
          <h4 className="text4-componen">{destination}</h4>
          <h4 className="text5-componen">{city}</h4>
        </div>
      </div>
    </div>
  );
}
