import React from "react";

function CategoryCard({ img, name, price }) {
  return (
    <>
      <div className="category-card hover-border">
        <div className="category-card-img position-absolute">
          <img src={img} height="150px" width="150px" alt="category-img" />
          <button className="btn btn-secondary ml-1 hidden">View Shop</button>
        </div>
        <div className=" category-card-text">
          <h5>{name}</h5>
          <p>${price}</p>
        </div>
      </div>
    </>
  );
}

export default CategoryCard;
