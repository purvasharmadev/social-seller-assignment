import React from "react";
import lamp from "../Assets/lamp.png";
import sofa from "../Assets/sofa.png";

function Landing() {
  return (
    <header className="flex">
      <div className="img-lamp">
        <img src={lamp} height="300px" width="300px" alt="lamp.png" srcset="" />
      </div>
      <div className="header-text">
        <h4>Best Furniture For Your Castle....</h4>
        <h2>New Furniture Collection Trends in 2020</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>
        <button className="btn btn-secondary">Shop Now</button>
      </div>
      <div className="img-sofa m-1">
        <img src={sofa} height="500px" width="500px" alt="sofa.png" srcset="" />
      </div>
    </header>
  );
}

export default Landing;
