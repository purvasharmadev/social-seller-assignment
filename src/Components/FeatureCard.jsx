import React from "react";

function FeatureCard({ name, img, code, price }) {
  return (
    <div className="card">
      <div className="card-header">
        {" "}
        <img height="150px" width="150px" src={img} alt={name} />{" "}
      </div>
      <div className="card-body color-primary">
        <p className="color-secondary">{name}</p>
        <p className="card-para">Code {code}</p>
        <p className="card-para">$ {price}</p>
      </div>{" "}
    </div>
  );
}

export default FeatureCard;
